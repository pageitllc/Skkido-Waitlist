<!--
╔══════════════════════════════════════════════════════════════╗
  ║  FusionButton — Universal button / link component            ║
  ╠══════════════════════════════════════════════════════════════╣
  ║                                                              ║
  ║  VARIANTS                                                    ║
  ║  solid          — filled with brand color                    ║
  ║  subtle         — light tinted background                    ║
  ║  outline        — white bg, gray border                      ║
  ║  outlineBlack   — transparent bg, black border + text        ║
  ║  ghost          — transparent, no border                     ║
  ║  cta            — yellow #E8A820, black text (hero CTAs)     ║
  ║  ctaBlue        — brand blue CTA                             ║
  ║  ctaSecondary   — secondary brand CTA                        ║
  ║  white          — white bg, black text (on dark sections)    ║
  ║  danger         — red, destructive actions                   ║
  ║                                                              ║
  ║  SIZES                                                       ║
  ║  sm   — 13px, 8px 16px padding  (default)                   ║
  ║  md   — 14px, 10px 20px padding                              ║
  ║  lg   — 15px, 13px 28px padding                              ║
  ║  xl   — 17px, 16px 36px padding                              ║
  ║                                                              ║
  ║  PROPS                                                       ║
  ║  text         — button label (also accepts default slot)     ║
  ║  variant      — see variants above, default: "solid"         ║
  ║  size         — see sizes above, default: "sm"               ║
  ║  link         — makes it a link. internal (/) = NuxtLink,    ║
  ║                 external = <a> with rel="noopener"           ║
  ║  target       — "_parent" (default) | "_blank"               ║
  ║  icon         — pass a Vue component (e.g. lucide icon)      ║
  ║  disabled     — grays out and blocks interaction             ║
  ║  loading      — shows spinner, blocks interaction            ║
  ║  loadingText  — custom text shown while loading              ║
  ║  tooltip      — hover tooltip text above the button          ║
  ║  buttonWidth  — CSS width string e.g. "100%" or "200px"      ║
  ║                                                              ║
  ║  EVENTS                                                      ║
  ║  @click       — fires on button click (not for link mode)    ║
  ║                                                              ║
  ╚══════════════════════════════════════════════════════════════╝
  <FusionButton text="Save" />     
  <FusionButton variant="cta" size="lg" text="Get started" />
  <FusionButton                                              
      variant="outline"                                        
      link="https://docs.skkido.com"                           
      target="_blank"                                           
      text="View docs"                                         
    />

    <FusionButton variant="cta" size="lg">                     
     Get started <ArrowRight :size="16" />                    
   </FusionButton>
  -->
<template>
  <div class="fu-btn-wrapper" :class="{ 'has-tooltip': tooltip }" :style="buttonWidth ? { width: buttonWidth } : {}">

    <!-- Button -->
    <button v-if="!link" class="fu-btn" :class="[`fu-btn--${variant}`, `fu-btn--${size}`, { 'is-loading': loading }]"
      :disabled="disabled || loading" @click="$emit('click', $event)"
      :style="buttonWidth ? { width: buttonWidth } : {}">
      <span v-if="loading" class="fu-spinner"></span>
      <component v-if="icon" :is="icon" class="fu-btn-icon" :size="16" />
      <span v-if="loading">{{ loadingText || 'Loading…' }}</span>
      <span v-else>
        <slot>{{ text }}</slot>
      </span>
    </button>

    <!-- NuxtLink (internal navigation) -->
    <NuxtLink v-else-if="isInternal" :to="link" class="fu-btn"
      :class="[`fu-btn--${variant}`, `fu-btn--${size}`, { 'is-loading': loading }]"
      :style="buttonWidth ? { width: buttonWidth } : {}">
      <span v-if="loading" class="fu-spinner"></span>
      <component v-if="icon" :is="icon" class="fu-btn-icon" :size="16" />
      <span v-if="loading">{{ loadingText || 'Loading…' }}</span>
      <span v-else>
        <slot>{{ text }}</slot>
      </span>
    </NuxtLink>

    <!-- External link -->

    <a v-else :href="link" class="fu-btn" :class="[`fu-btn--${variant}`, `fu-btn--${size}`, { 'is-loading': loading }]"
      :target="target" :rel="target === '_blank' ? 'noopener noreferrer' : undefined"
      :style="buttonWidth ? { width: buttonWidth } : {}">
      <span v-if="loading" class="fu-spinner"></span>
      <component v-if="icon" :is="icon" class="fu-btn-icon" :size="16" />
      <span v-if="loading">{{ loadingText || 'Loading…' }}</span>
      <span v-else>
        <slot>{{ text }}</slot>
      </span>
    </a>

    <!-- Tooltip -->
    <span v-if="tooltip" class="fu-tooltip">{{ tooltip }}</span>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import type { Component } from "vue";

interface Props {
  text?: string;
  disabled?: boolean;
  size?: "sm" | "md" | "lg" | "xl";
  variant?: "solid" | "subtle" | "outline" | "ghost" | "danger" | "ctaBlue" | "ctaSecondary" | "cta" | "outlineBlack" | "white";
  tooltip?: string | null;
  loading?: boolean;
  loadingText?: string | null;
  link?: string | null;
  icon?: Component | null;
  target?: "_parent" | "_blank";
  buttonWidth?: string | null;
}

const props = withDefaults(defineProps<Props>(), {
  text: "Click Me",
  disabled: false,
  size: "sm",
  variant: "solid",
  tooltip: null,
  loading: false,
  loadingText: null,
  link: null,
  icon: null,
  target: "_parent",
  buttonWidth: "",
});

const isInternal = computed(() => {
  if (!props.link) return false;
  return props.link.startsWith("/") && !props.link.startsWith("//");
});

defineEmits<{
  (e: "click", ev: MouseEvent): void;
}>();
</script>

<style scoped lang="scss">
   a {
      text-decoration: none;
   }

   .fu-btn.is-loading {
      position: relative;
      cursor: wait;
      pointer-events: none;
      opacity: 0.85;
   }

   .fu-spinner {
      width: 16px;
      height: 16px;
      border: 2px solid rgba(0, 0, 0, 0.1);
      border-top-color: currentColor;
      border-radius: 50%;
      animation: spin 0.6s linear infinite;
      margin-right: 0.5rem;
      display: inline-flex;
      align-items: center;
   }

   @keyframes spin {
      to { transform: rotate(360deg); }
   }

   .fu-tooltip {
      position: absolute;
      bottom: 100%;
      left: 50%;
      transform: translateX(-50%);
      background: #111111;
      color: #ffffff;
      font-size: 12px;
      padding: 4px 8px;
      border-radius: 4px;
      white-space: nowrap;
      opacity: 0;
      pointer-events: none;
      transition: opacity 0.2s ease;
      margin-bottom: 6px;
      z-index: 10;
      &::after {
         content: "";
         position: absolute;
         top: 100%;
         left: 50%;
         transform: translateX(-50%);
         border-width: 6px;
         border-style: solid;
         border-color: #111111 transparent transparent transparent;
      }
   }

   .fu-btn-wrapper {
      position: relative;
      display: inline-flex;
      &:hover .fu-tooltip {
         opacity: 1;
      }
   }

   .fu-btn {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      border-radius: 999px;
      border: 1px solid transparent;
      cursor: pointer;
      transition: all 0.2s ease-in-out;
      font-size: 14px;
      font-weight: 500;
      gap: 10px;
      width: fit-content;
      box-sizing: border-box;
      white-space: nowrap;
      text-decoration: none;
   }

   /* ── SIZES ── */
   .fu-btn--sm {
      padding: 8px 16px;
      font-size: 13px;

   }
   .fu-btn--md {
      padding: 10px 20px;
      font-size: 14px;
  
   }
   .fu-btn--lg {
      padding: 13px 28px;
      font-size: 15px;
   
   }
   .fu-btn--xl {
      padding: 16px 36px;
      font-size: 17px;
   
   }

   /* ── VARIANTS ── */
   .fu-btn--solid {
      background-color: #050505;
      color: #ffffff;
      &:not(.is-loading):hover {
         background-color: #222222;
      }
   }

   .fu-btn--ctaBlue {
      background-color: #2563eb;
      color: #ffffff;
      &:not(.is-loading):hover {
         background-color: #1d4ed8;
      }
   }

   .fu-btn--ctaSecondary {
      background-color: #FFD37B;
      color: #410B13;
      &:not(.is-loading):hover {
         background-color: #f7c55e;
      }
   }

   .fu-btn--subtle {
      background-color: #f4f4f5;
      color: #050505;
      &:not(.is-loading):hover {
         background-color: #e4e4e7;
      }
   }

   .fu-btn--outline {
      background-color: #ffffff;
      border: 1px solid #e4e4e7;
      color: #050505;
      &:not(.is-loading):hover {
         background-color: #ffffff;
         border-color: #d1d5db;
      }
   }

   .fu-btn--ghost {
      background-color: transparent;
      color: #050505;
      &:not(.is-loading):hover {
         background-color: #f4f4f5;
      }
   }

   .fu-btn--danger {
      background-color: #ef4444;
      color: #ffffff;
      &:not(.is-loading):hover {
         background-color: #dc2626;
      }
   }

   .fu-btn--outlineBlack {
      background-color: transparent;
      border: 1.5px solid #050505;
      color: #050505;
      &:not(.is-loading):hover {
         background-color: #050505;
         color: #ffffff;
      }
   }

   .fu-btn--cta {
      background-color: #E8A820;
      border: 1.5px solid #E8A820;
      color: #050505;
      &:not(.is-loading):hover {
         background-color: #d49918;
         border-color: #d49918;
      }
   }

   .fu-btn--white {
      background-color: #ffffff;
      border: 1.5px solid #ffffff;
      color: #050505;
      &:not(.is-loading):hover {
         background-color: #f0f0f0;
         border-color: #f0f0f0;
      }
   }

   /* ── HEADER CONTEXT OVERRIDES ── */
   :global(.fs-header.is-glass .fu-btn--outline),
   :global(.fs-header.is-solid .fu-btn--outline) {
      background-color: transparent;
      border-color: rgba(255, 255, 255, 0.4);
      color: #ffffff;
   }
   :global(.fs-header.is-glass .fu-btn--outline:hover),
   :global(.fs-header.is-solid .fu-btn--outline:hover) {
      background-color: rgba(255, 255, 255, 0.12);
      border-color: rgba(255, 255, 255, 0.7);
   }

   :global(.fs-header.is-glass .fu-btn--ghost),
   :global(.fs-header.is-solid .fu-btn--ghost) {
      color: #ffffff;
   }
   :global(.fs-header.is-glass .fu-btn--ghost:hover),
   :global(.fs-header.is-solid .fu-btn--ghost:hover) {
      background-color: rgba(255, 255, 255, 0.12);
   }

   :global(.fs-header.is-glass .fu-btn--outlineBlack),
   :global(.fs-header.is-solid .fu-btn--outlineBlack) {
      border-color: rgba(255, 255, 255, 0.4);
      color: #ffffff;
   }
   :global(.fs-header.is-glass .fu-btn--outlineBlack:hover),
   :global(.fs-header.is-solid .fu-btn--outlineBlack:hover) {
      background-color: #ffffff;
      border-color: #ffffff;
      color: #050505;
   }

   .fu-btn:disabled {
      opacity: 0.5;
      cursor: not-allowed;
   }
</style>