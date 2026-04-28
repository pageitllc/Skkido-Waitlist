<template>
<client-only>
  <section class="sk-hero-section founders-section">
    <div class="sk-container grid">
      <div class="sk-hero-section__col-1">
        <h1 data-aos="fade-up" data-aos-delay="50" class="section-title">
          Built for people <br> 
          <span style="color: #C4C4C4;">who run client work</span>
        </h1>
      </div>

      <div class="sk-hero-section__col-2">
        <FeatureCard 
          data-aos="fade-down" 
          data-aos-delay="50" 
          :icon="FolderKanban" 
          title="Every client relationship in one place"
          text="Leads, deals, conversations, and contracts — all connected so nothing slips through the cracks." 
          bgColor="#FFC178" />

        <FeatureCard 
          data-aos="fade-down" 
          data-aos-delay="100" 
          :icon="CreditCard" 
          title="Always know which clients need attention"
          text="Skkido watches for communication gaps, stalled work, and late payments — and tells you exactly where to focus before things go wrong."
          bgColor="#006FEE" />

        <FeatureCard 
          data-aos="fade-down" 
          data-aos-delay="150" 
          :icon="Users" 
          title="A system that grows with you"
          text="Start with client relationships today. Projects, invoicing, collaboration, and client portals are coming — all feeding the same intelligence engine."
          bgColor="#A2878B" />
      </div>
    </div>
  </section>
</client-only>
</template>

<script lang="ts" setup>
import FeatureCard from '~/components/FeatureCard.vue';
import { FolderKanban, Users, CreditCard } from "lucide-vue-next";
</script>

<style lang="scss" scoped>
.sk-hero-section {
  display: flex;
  padding: 4rem 2rem;
  height: 100vh;
}

.founders-section {
  border-top-right-radius: 25px;
  border-top-left-radius: 25px;
  color: inherit;
}

@media (max-width: 991px) {
  .sk-hero-section {
    height: 100% !important;
  }
  .founders-section {
    padding: 2rem 1rem !important;
  }
  .grid {
    grid-template-columns: 1fr;
    padding-top: 0;
  }
}

.sk-hero-section__col-1 {
  display: flex;
  align-items: center;
}

.sk-hero-section__col-2 {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  justify-content: center;
}

.founder-name {
  font-family: "Hand-writing", cursive;
  font-weight: 400;
  font-size: 27px;
}
</style>