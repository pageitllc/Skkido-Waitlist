<template>
  <div>
    <span v-if="subscriberCount" class="creators__text">{{ subscriberCount }} + professionals have secured their
      spot!</span>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from "vue";

const subscriberCount = ref<number | null>(null);

onMounted(async () => {
  try {
    const config = useRuntimeConfig();
    const res = await $fetch<{ subscribers: number }>(
      `${config.public.apiBase}/list-stats`,
      {
        headers: {
          "x-api-key": config.public.apiKey
        }
      }
    );
    subscriberCount.value = res.subscribers;
  } catch (err) {
    console.error("Failed to load subscriber count", err);
  }
});

</script>

<style scoped>
.creators__text {
  font-size: 1rem;
  color: #737373;
  display: flex;
  width: 55% !important;
}
</style>