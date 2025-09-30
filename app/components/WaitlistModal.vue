<template>
  <div v-if="show" class="modal-overlay" @click.self="close">
    <div class="modal">
      <!-- Close button -->
      <button class="modal-close" @click="close">×</button>

      <!-- Success Icon -->
      <div class="modal-icon">
        <div class="icon-circle">
          <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="none" viewBox="0 0 24 24" stroke="green" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
      </div>

      <!-- Content -->
      <h2 class="modal-title">You have been<br />added to our <span class="highlight">waitlist!</span></h2>
      <p class="modal-text">
        Thanks for signing up 🎉 You’ll be among the first to hear when Skkido goes live
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  show: boolean;
}>();

const emits = defineEmits<{
  (e: "close"): void;
}>();

function close() {
  emits("close");
}
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 50;
}

.modal {
  background: #fff;
  border-radius: 16px;
  padding: 2rem;
  text-align: center;
  max-width: 400px;
  width: 90%;
  position: relative;
  animation: fadeIn 0.3s ease-out;
}

.modal-close {
  position: absolute;
  top: 12px;
  right: 12px;
  background: #333;
  border: none;
  color: white;
  font-size: 1.2rem;
  border-radius: 50%;
  cursor: pointer;
  width: 28px;
  height: 28px;
}

.modal-icon {
  margin-bottom: 1rem;
}

.icon-circle {
  background: #d9f6d9;
  border-radius: 50%;
  width: 64px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
}

.modal-title {
  font-size: 1.6rem;
  font-weight: bold;
  margin: 1rem 0;
}

.highlight {
  color: green;
}

.modal-text {
  color: #555;
  font-size: 1rem;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
</style>
