<template>
  <div class="sk-container">
    <div class="header">
     <Nuxt-link to="/">
     <img src="~/assets/images/skkido-brand-image.svg" class="header__logo" alt="Skkido Brand Image" />
     </Nuxt-link>
    </div>
  </div>
</template>


<script lang="ts" setup>

</script>

<style lang="scss" scoped>
.header {
  padding: var(--sk-space-4);
  display: flex;
  justify-content: end;

  &__logo {
    width: 104.99px;
  }
}
</style>