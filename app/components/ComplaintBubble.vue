<template>
  <div class="complaint" :style="{ '--bubble-color': bubbleColor || '#4a90e2' }">
    <!-- Avatar with small circles -->
    <div class="complaint-avatar">
      <img :src="avatar" alt="avatar" />
      <span class="circle circle--big"></span>
      <span class="circle circle--small"></span>
    </div>

    <!-- Speech bubble -->
    <div class="complaint-bubble" :style="{ backgroundColor: bubbleColor }">
      <p>{{ message }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  avatar: string
  message: string
  bubbleColor?: string
}>()
</script>

<style scoped lang="scss">
.complaint {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  position: relative;
}

.complaint-avatar {
  position: relative;
  width: 60px;
  height: 60px;
  margin-top: -2rem;

  img {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    position: relative;
    z-index: 2;
  }

  .circle {
    position: absolute;
    border-radius: 50%;
    z-index: 1;

    &--big {
      width: 30px;
      height: 30px;
      background-color: color-mix(in srgb, var(--bubble-color) 80%, black);
      bottom: -5px;
      right: -10px;
    }

    &--small {
      width: 20px;
      height: 20px;
      background-color: color-mix(in srgb, var(--bubble-color) 60%, white);
      bottom: -15px;
      right: -20px;
    }
  }
}

.complaint-bubble {
  flex: 1;
  padding: 1rem 1.5rem;
  border-radius: 12px;
  color: #fff;
  font-size: 1rem;
  line-height: 1.4;
}
</style>
