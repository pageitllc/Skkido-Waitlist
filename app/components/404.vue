<template>
  <section class="error-page" data-header-bg="#fff" data-header-mode="">
    <div class="error-page__inner">

      <h1 class="error-page__code">
        4<span>0</span>4
      </h1>

      <h2 class="error-page__title">This page doesn't exist.</h2>

      <p class="error-page__desc">
        The page you're looking for may have moved, been deleted, or never existed in the first place.
      </p>

      <div class="error-page__actions">
        <FusionButton variant="cta" size="md" text="Go home" link="/" />
        <FusionButton variant="outline" size="md" text="Go back" @click="$router.back()" />
      </div>

      

    </div>
  </section>
</template>

<script setup lang="ts">
import FusionButton from '@/button/FusionButton.vue'
</script>

<style scoped lang="scss">
.error-page {
  background: #fff;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 80px 24px;
}

.error-page__inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 20px;
  max-width: 520px;
}

.error-page__code {
  font-size: clamp(80px, 15vw, 140px);
  font-weight: 500;
  color: #1a0d08;
  line-height: 1;
  letter-spacing: -0.04em;
  margin: 0;

  span {
    color: #FFD37B;
  }
}

.error-page__title {
  font-size: clamp(1.4rem, 3vw, 1.8rem);
  font-weight: 500;
  color: #1a0d08;
  line-height: 1.3;
  margin: 0;
}

.error-page__desc {
  font-size: 15px;
  color: #6b5c4a;
  line-height: 1.7;
  max-width: 380px;
  margin: 0;
}

.error-page__actions {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-top: 4px;
  flex-wrap: wrap;
  justify-content: center;
}


@media (max-width: 600px) {
  .error-page__actions {
    flex-direction: column;
    width: 100%;

    > * {
      width: 100%;
    }
  }

  .error-page__links {
    gap: 16px;
  }
}
</style>