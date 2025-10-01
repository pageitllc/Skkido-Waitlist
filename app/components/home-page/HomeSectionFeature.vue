<template>
<client-only>
  <section class="sk-hero-section founders-section ">
    <div class="sk-container grid">
      
      <div class="sk-hero-section__col-1">
        <h1 data-aos="fade-up" data-aos-delay="50" class="section-title">Built for  <br> <span style="color: #C4C4C4;"> your work</span></h1>
      </div>

      <div class="sk-hero-section__col-2">
        <FeatureCard  data-aos="fade-down" data-aos-delay="50" :icon="FolderKanban" title="One trusted workspace for your business"
          text="Manage your projects, clients, and files without juggling multiple apps. Everything important lives in one place." bgColor="#FFC178" />

        <FeatureCard data-aos="fade-down" data-aos-delay="100" :icon="CreditCard" title="Get paid faster, with less stress"
          text="Send contracts and invoices with built-in payments, so you always know where your money stands. With so many payment methods to choose from, your clients can pay in the way that works best for them — and you get paid on time"
          bgColor="#006FEE" />

        <FeatureCard data-aos="fade-down" data-aos-delay="150" :icon="Users" title="Work better with clients and teams"
          text="Give clients and team members a shared space to track progress and collaborate with clarity."
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
}

.founders-section {
  border-top-right-radius: 25px;
  border-top-left-radius: 25px;
  color: inherit;
}



@media (max-width: 768px) {

  .founders-section {
    padding: 2rem 1rem !important;
  }

  .grid {
    grid-template-columns: 1fr;
    padding-top: 0;
  }
}

.sk-hero-section__col-2 {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.founder-name {
  font-family: "Hand-writing", cursive;
  font-weight: 400;
  font-size: 27px;
}
</style>

