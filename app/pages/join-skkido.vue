<template>
  <section class="sk-container cta-container">
    <div class="cta-content">

      <div v-if="submitted" class="success-message">
        <div class="icon-check mb-4">
          <svg width="72" height="71" viewBox="0 0 72 71" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="36" cy="35.5" r="35.25" fill="#E0FCDC" stroke="#ADED94" stroke-width="0.5" />
            <rect x="14.75" y="14.25" width="43.5" height="43.5" rx="9.75" fill="#A7F597" />
            <rect x="14.75" y="14.25" width="43.5" height="43.5" rx="9.75" stroke="#9CD088" stroke-width="0.5" />
            <rect x="21.5" y="21" width="30" height="30" rx="15" fill="#3C8A1E" />
            <path
              d="M36.4999 47.1459C42.6557 47.1459 47.6459 42.1557 47.6459 36C47.6459 29.8443 42.6557 24.8541 36.4999 24.8541C30.3442 24.8541 25.354 29.8443 25.354 36C25.354 42.1557 30.3442 47.1459 36.4999 47.1459Z"
              fill="#3C8A1E" />
            <path
              d="M42.0728 32.0947C42.1465 32.0947 42.2204 32.1085 42.2886 32.1367C42.3566 32.1649 42.4181 32.2067 42.4702 32.2588C42.5224 32.3109 42.5641 32.3732 42.5923 32.4414C42.6205 32.5095 42.6353 32.5825 42.6353 32.6562C42.6353 32.7299 42.6205 32.8029 42.5923 32.8711C42.5641 32.9392 42.5224 33.0015 42.4702 33.0537L35.7827 39.7412L35.7817 39.7431C35.73 39.7953 35.6679 39.8359 35.6001 39.8642C35.5322 39.8925 35.4588 39.9072 35.3853 39.9072C35.3118 39.9071 35.2392 39.8925 35.1714 39.8642C35.1036 39.836 35.0415 39.7953 34.9897 39.7431L34.9888 39.7412L30.5298 35.2832C30.4245 35.1779 30.3658 35.0346 30.3657 34.8857C30.3657 34.7368 30.4245 34.5936 30.5298 34.4883C30.6352 34.3829 30.7782 34.3232 30.9272 34.3232C31.0389 34.3232 31.1472 34.3569 31.2388 34.4179L31.3247 34.4883L34.9907 38.166L35.3853 38.5615L35.7798 38.166L41.6763 32.2588C41.7284 32.2067 41.7899 32.1649 41.8579 32.1367C41.9259 32.1085 41.9991 32.0948 42.0728 32.0947Z"
              fill="#F3F3F3" stroke="#F3F3F3" stroke-width="1.11459" />
          </svg>

        </div>
        <h3 class="success-title">You have been added to our <strong style="color: #3C8A1E;">waitlist!</strong></h3>
        <p class="success-text">
          Thanks for signing up 🎉 You’ll be among the first to hear when Skkido goes live.
        </p>


        <button @click="inviteFriend" class="success-button">
          <Share2 /> Invite a Friend
        </button>
        <div class="flex flex--center flex--column">
          <p class="success-text">Follow our journey</p>

          <div class="flex">
            <a href="https://linkedin.com/company/skkido" target="_blank" aria-label="LinkedIn">
              <img src="~/assets/images/linkedin-icon.svg" alt="LinkedIn" />
            </a>
            <a href="https://x.com/skkidohq" target="_blank" aria-label="X">
              <img src="~/assets/images/x-icon.svg" alt="X" />
            </a>
            <a href="https://instagram.com/skkidohq" target="_blank" aria-label="Instagram">
              <img src="~/assets/images/instagram-icon.svg" alt="Instagram" />
            </a>
          </div>

        </div>
      </div>

      <div v-else>

        <h2>Join our journey and secure your spot</h2>
        <p>
          Join our extensive waitlist today to spark connection and get notified when we launch
        </p>
        <div class="avatars mb-4">
          <img v-for="(avatar, index) in avatars" :key="index" :src="avatar" :alt="`Community member ${index + 1}`" />
        </div>

        <form class="cta-form" @submit.prevent="handleSubmit">
          <input ref="nameInput" v-model="form.name" type="text" name="fullName" placeholder="Enter your full name"
            required />
          <input v-model="form.email" type="email" name="email" placeholder="Enter your email address" required />
          <button type="submit" :disabled="loading">
            {{ loading ? "Submitting…" : "Secure my spot" }}
          </button>
        </form>

      </div>
    </div>

    <div class="cta-image">
      <img src="/group-collaboration-around-laptop-creative-workspace.jpg"
        alt="Happy team working together around a laptop" />
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, nextTick } from "vue";
import { Share2 } from "lucide-vue-next";
import { useHead } from "#app";
const config = useRuntimeConfig()
const avatars = [
  "/avatars/avatar1.png",
  "/avatars/avatar2.png",
  "/avatars/avatar3.png",
  "/avatars/avatar4.png",
  "/avatars/avatar5.png",
];

const form = ref({ name: "", email: "" });
const loading = ref(false);
const submitted = ref(false);
const nameInput = ref<HTMLInputElement | null>(null);

async function handleSubmit() {
  loading.value = true;
  try {
    const g = (window as any).grecaptcha;

    if (!g) {
      throw new Error("Captcha not loaded, please try again.");
    }

    // ✅ Get Recaptcha token
    const token: string = await new Promise((resolve, reject) => {
      g.ready(() => {
        g.execute(config.public.recaptchaSiteKey, { action: "subscribe" })
          .then(resolve)
          .catch(reject);
      });
    });

    // ✅ Call Laravel microservice
    await $fetch(`${config.public.apiBase}/subscribe`, {
      method: "POST",
      headers: {
        "x-api-key": config.public.apiKey
      },
      body: {
        name: form.value.name,
        email: form.value.email,
        recaptchaToken: token
      }
    });

    // ✅ Success: show thank-you state
    submitted.value = true;
    form.value = { name: "", email: "" };
    await nextTick();
  } catch (err: any) {
    console.error("Subscribe error:", err);

    // Nuxt $fetch error response will have .data.message
    const backendMessage =
      err?.data?.message || err?.message || "Something went wrong, please try again.";

    alert(backendMessage);
  } finally {
    loading.value = false;
  }
}



async function inviteFriend() {
  if (navigator.share) {
    try {
      await navigator.share({
        title: "Join me on Skkido 🚀",
        text: "I just joined the Skkido waitlist! Come onboard and get early access.",
        url: "https://skkido.com",
      });
    } catch (err) {
      console.log("Share cancelled or failed", err);
    }
  } else {
    alert("Copy this link and share: https://skkido.com");
  }
}

useHead({
  title: "Skkido – Client & business management software for independents.",

  link: [
    {
      rel: "icon",
      type: "image/png",
      href: "/favicon/favicon-96x96.png",
      sizes: "96x96",
    },
    { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
    { rel: "shortcut icon", href: "/favicon.ico" },
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      href: "/favicon/apple-touch-icon.png",
    },
  ],

  meta: [
    {
      name: "description",
      content:
        "Skkido is the all-in-one platform for independent businesses. Manage clients, projects, contracts, and payments in one place.",
    },




    {
      property: "og:title",
      content: "Skkido – Client & business management software for independents.",
    },
    {
      property: "og:description",
      content:
        "Skkido empowers independent businesses and agencies to manage clients and grow with confidence. One platform, built for modern independents.",
    },
    { property: "og:image", content: "https://skkido.com/og-image.jpg" },
    { property: "og:url", content: "https://skkido.com" },
    { property: "og:type", content: "website" },

    // Twitter
    { name: "twitter:card", content: "summary_large_image" },
    {
      name: "twitter:title",
      content: "Skkido – Client & business management software for independents.",
    },
    {
      name: "twitter:description",
      content:
        "The smarter way for independents to manage clients and grow. Skkido is the all-in-one business management platform for modern independents.",
    },
    { name: "twitter:image", content: "https://skkido.com/og-image.jpg" },
  ],
  script: [

    {
      key: "recaptcha",
      src: `https://www.google.com/recaptcha/api.js?render=${config.public.recaptchaSiteKey}`,
      async: true,
      defer: true,
    },


  ],
});

</script>




<style lang="scss" scoped>
.cta-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;

}

.cta-content {
  display: flex;
  max-width: 428px;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  padding: 3rem;
  color: #2b2b2b;
}

.cta-content {


  h2 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  p {
    margin-bottom: 1.5rem;
    color: #444;
    line-height: 1.6;
  }
}

.avatars {

  gap: -10px;
  margin-bottom: 1.5rem;

  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 2px solid #fff;
    object-fit: cover;
    margin-left: -10px;

    &:first-child {
      margin-left: 0;
    }
  }
}

.cta-form {
  display: flex;
  flex-direction: column;
  gap: 1rem;

  input {
    padding: 0.8rem 1rem;
    border: 1px solid #ddd;
    border-radius: 8px;
    font-size: 1rem;

    &:focus {
      outline: none;
      box-shadow:
        0 0 0 2px #FFD37B,
        0 0 0 1px #FFE8B3;
    }

  }

  button {
    background: #ffc178;
    color: #000;
    font-weight: 600;
    border: none;
    padding: 0.9rem 1rem;
    border-radius: 8px;
    cursor: pointer;
    transition: background 0.3s ease;

    &:hover {
      background: #e5a85f;
    }
  }
}

.cta-image img {
  width: 100%;
  border-radius: 1rem;
  object-fit: cover;
}

@media (max-width: 990px) {

  .cta-container {
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;
    height: 100%;

  }

  .cta-content {
    padding: 0px !important;
  }

  .cta-image img {
    max-height: 259.26px !important;
    object-fit: cover;
  }
}

.success-title {
  font-size: 2rem;
}

.success-button {
  display: inline-flex;
  margin-top: 1rem;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
  padding: 0.5rem 1rem;
  font-size: 0.9rem;
  font-weight: 500;
  border: none;
  border-radius: 0.75rem;
  background-color: #d1fae5;
  color: #047857;
  cursor: pointer;
  transition: all 0.2s ease;
}

.success-button:hover {
  background-color: #a7f3d0;
}

.success-button:active {
  transform: scale(0.97);
}

.success-button .icon {
  width: 18px;
  height: 18px;
  stroke: currentColor;
}

.success-text {
  margin-top: 1rem;
  margin-bottom: 0px !important;
}
</style>