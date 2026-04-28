<template>
  <header class="fs-header" :class="{ 'fs-header--hidden': isHidden }">
    <nav class="fs-header-nav py-2">
      <div class="sk-container tom">
        <div class="fsNavigation__left">
          <NuxtLink to="/" class="fsNavigation__logoWrapper">
            <img src="~/assets/images/skkido-brand-image.svg" class="header__logo" alt="Skkido Brand Image" />
            <span class="fsNavigation__beta">BETA</span>
          </NuxtLink>

        
        </div>

        <div class="fsNavigation__cta fsNavigation__cta--desktop">
          <FusionButton variant="outline" text="Login" link="https://auth.skkido.com/login" target="_blank" size="sm" />
          <FusionButton variant="cta" text="Join the Beta" />
        </div>

        <div class="fsNavigation__mobileButton">
          <FusionButton variant="cta" size="sm" text="Join the Beta" />
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from "vue";
import FusionButton from "../button/FusionButton.vue";


const isHidden = ref(false);
let lastScrollY = 0;

function handleScroll() {
  const currentY = window.scrollY;
  
  // Hide when scrolling down, show when scrolling up
  if (currentY > lastScrollY && currentY > 80) {
    isHidden.value = true;
  } else {
    isHidden.value = false;
  }
  lastScrollY = currentY;
}

onMounted(() => {
  window.addEventListener("scroll", handleScroll, { passive: true });
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style lang="scss" scoped>
.fs-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  
  // Fixed White Background & Subtle Shadow
  background-color: #ffffff;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  
  transition: transform 0.3s ease-in-out, opacity 0.2s ease;

  &--hidden {
    transform: translateY(-100%);
    opacity: 0;
  }
}

.tom {
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
}

.header__logo {
  width: 105px;
  height: auto;
}

.fsNavigation__left {
  display: flex;
  align-items: center;
  gap: 40px;
}

.fsNavigation__logoWrapper {
  display: flex;
  align-items: center;
}

.fsNavigation__cta {
  display: flex;
  align-items: center;
  gap: 12px;
}

.fsNavigation__mobileButton {
  display: none;
}

@media (max-width: 992px) {
  .fsNavigation__cta--desktop {
    display: none;
  }
  .fsNavigation__mobileButton {
    display: flex;
  }
}

.fsNavigation__beta {
  font-size: 9px;
  font-weight: 700;
  color: #410B13;
  background: #FFD37B;
  padding: 2px 6px;
  border-radius: 4px;
  margin-left: 8px;
  line-height: 1.4;
}
</style>