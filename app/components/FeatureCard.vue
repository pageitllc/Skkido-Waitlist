<template>
  <div class="feature-card">
    <div class="feature-card__icon" :style="{ backgroundColor: bgColor }">
      <component :is="icon" size="28" />
    </div>
    <div class="feature-card__content">
      <h3 class="feature-card__title">{{ title }}</h3>
      <p class="feature-card__text">{{ text }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Component } from "vue"

defineProps<{
  icon: Component
  title: string
  text: string
  bgColor?: string
}>()
</script>

<style scoped lang="scss">
.feature-card {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1rem 0;
  border-bottom:  solid 1px #eee;

  &__icon {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    color: #000;
  }

  &__content {
    flex: 1;
  }

  &__title {
    font-size: 1.5rem;
    font-weight: 400;
    margin: 0;
  }

  &__text {
    font-size: 1rem;
    line-height: 1.5;
    color: #444;
    margin-top: 0.5rem;
  }
}
</style>
