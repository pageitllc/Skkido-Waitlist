// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },
  runtimeConfig: {
    brevoApiKey: process.env.BREVO_API_KEY,
    brevoListId: process.env.BREVO_LIST_ID,
    recaptchaSecret: process.env.RECAPTCHA_SECRET,
    public: {
      apiBase: process.env.API_BASE || "http://localhost:8000/api", 
      recaptchaSiteKey: process.env.RECAPTCHA_SITE_KEY || "",
      apiKey: process.env.API_KEY || "",
    }
  },
  app: {
    head: {
      script: [

        {
          src: "https://www.googletagmanager.com/gtag/js?id=G-4HHN8ETMY5",
          async: true,
        },
        {
          innerHTML: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-4HHN8ETMY5');
      `,
        },
      ],
    },
  },


})
