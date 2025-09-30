<template>
  <div>
    <HomeHero />

    <!-- Sticky container -->
    <div class="sticky-wrapper">
      <section class="home-section-two">
        <HomeSectionTwo />
      </section>

      <section class="home-section-three">
        <HomeSectionThree />
      </section>
    </div>

    <HomeSectionFeature class="home-section-three"/>
    <HomeSectionFour />
  </div>
</template>


<script lang="ts" setup>
import HomeHero from '~/components/home-page/HomeHero.vue';
import HomeSectionTwo from '~/components/home-page/HomeSectionTwo.vue.vue';
import HomeSectionThree from '~/components/home-page/HomeSectionThree.vue';
import HomeSectionFeature from '~/components/home-page/HomeSectionFeature.vue';
import HomeSectionFour from '~/components/home-page/HomeSectionFour.vue';

import { useHead } from "#app";

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

 
    
  // Open Graph
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

.home-section-three {
  position: relative;
  z-index: 2;        
  min-height: 100%;   
  background: #fff;  
}




</style>