<template>
      <NuxtLayout>
       <ErrorPage v-if="error.statusCode === 404" />
        <div v-else>
      <h1>Something went wrong</h1>
    </div>
      </NuxtLayout>
  <div>
   
   
  </div>
</template>

<script setup lang="ts">
import ErrorPage from '@/components/404.vue'

const props = defineProps<{
  error: {
    statusCode: number
    message: string
  }
}>()
</script>