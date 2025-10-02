<template>
  <transition name="fade">
    <div
      v-if="visible"
      class="cookie-banner"
    >
      <p>
        We use cookies to enhance your experience and analyse skkido usage.
        By continuing to visit this site, you agree to our use of cookies. 
        <NuxtLink to="privacy-policy"  target="_blank">Learn more</NuxtLink> 
      </p>
      <div class="actions">
        <button class="accept" @click="acceptCookies">Accept</button>
        <button class="reject" @click="rejectCookies">Reject</button>
      </div>
      <button class="close" @click="rejectCookies">
    <X />
      </button>
    </div>
  </transition>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { X } from "lucide-vue-next";

const visible = ref(false);

onMounted(() => {
  const consent = localStorage.getItem("cookieConsent");
  if (!consent) {
    visible.value = true;
  }
});

function acceptCookies() {
  localStorage.setItem("cookieConsent", "accepted");
  visible.value = false;
}

function rejectCookies() {
  localStorage.setItem("cookieConsent", "rejected");
  visible.value = false;
}
</script>

<style scoped>
.cookie-banner {
  position: fixed;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  max-width: 400px;
  width: 90%;
  background: #f5f5f5;
  color: #333;
  padding: 16px 20px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.2);
  font-size: 14px;
  z-index: 9999;
}

.cookie-banner p {
  margin: 0 0 10px;
  line-height: 1.5;
  padding-right: 1rem
}

.cookie-banner a {
  color: #0070f3;
  text-decoration: underline;
}

.actions {
  display: flex;
  gap: 10px;
}

.actions button {
  color: #fff;
  border: none;
  padding: 8px 14px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
}


.actions .reject {
  background: #666;
}

.actions .accept {
  background: var(--skkido-color-secondary);
  color:  #111;;
}
.actions button:hover {
  opacity: 0.9;
}

.close {
  background: transparent;
  border: none;
  color: #666;
  font-size: 16px;
  cursor: pointer;
  position: absolute;
  top: 8px;
  right: 8px;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity .3s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
