<template>
      <AppHeader />
  <div>
    <HomeHero />
    <ServiceEntrpreneurs />
    <HomeSectionTwo />

    <Modules />
    <HomeSectionFeature class="home-section-three"/>
    <HomeSectionThree />
    <HomeSectionFour />
  </div>
      <AppFooter />
</template>


<script lang="ts" setup>
import HomeHero from '~/components/home-page/HomeHero.vue';
import HomeSectionTwo from '~/components/home-page/HomeSectionTwo.vue.vue';
import HomeSectionThree from '~/components/home-page/HomeSectionThree.vue';
import HomeSectionFeature from '~/components/home-page/HomeSectionFeature.vue';
import HomeSectionFour from '~/components/home-page/HomeSectionFour.vue';
import ServiceEntrpreneurs from '~/components/home-page/ServiceEntrpreneurs.vue';
import Modules from '@/components/home-page/Modules.vue'
import { useHead } from "#app";

useHead({
  title: "Skkido – All-in-One Client & Business Management for Independents",

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
        "Skkido is the all-in-one platform empowering independent businesses to effortlessly manage clients, projects, contracts, and payments — all in one place.",
    },

    // Open Graph
    {
      property: "og:title",
      content: "Skkido – All-in-One Client & Business Management for Independents",
    },
    {
      property: "og:description",
      content:
        "Simplify your client operations and grow your independent business with Skkido — a modern platform designed for freelancers, agencies, and solo entrepreneurs.",
    },
    { property: "og:image", content: "https://skkido.com/og-image.jpg" },
    { property: "og:url", content: "https://skkido.com" },
    { property: "og:type", content: "website" },

    // Twitter
    { name: "twitter:card", content: "summary_large_image" },
    {
      name: "twitter:title",
      content: "Skkido – All-in-One Client & Business Management for Independents",
    },
    {
      name: "twitter:description",
      content:
        "Manage clients, projects, contracts, and payments with ease. Skkido is the smart choice for freelancers, agencies, and independents looking to grow.",
    },
    { name: "twitter:image", content: "https://skkido.com/og-image.jpg" },
  ],
});


import AOS from "aos";
import "aos/dist/aos.css";


onMounted(() => {
  AOS.init({
    duration: 1000,
    once: true,
  });
});
</script>

<style>
/* .sticky-wrapper {
  position: relative;
 
  
}

.home-section-two {
  position: sticky;
  top: 0;
  height: 100vh;
  z-index: 1;
}

.home-section-three {
  position: relative;
  z-index: 2;
  min-height: 100%;
  background: #fff;
} */

.sticky-wrapper {
  position: relative;
  display: flex;
  flex-direction: column;
}

.home-section-two {
  position: sticky;
  top: 0;
  height: 100vh;  
  z-index: 1;    
}




</style>