<template>
  <section class="sk-container sk-hero-section founders-section home-section-three">
    <div class="grid">
      <div class="sk-hero-section__col-1">
        <h1 data-aos="fade-up" data-aos-delay="50" class="section-title">
          Founder's <br> 
          <span style="color: #C4C4C4;">Message</span>
        </h1>
      </div>

      <div class="sk-hero-section__col-2">
        <p>
  I've spent years managing projects and client work through my agency, and the struggle was always the same: too many tools, too many manual steps, and no clear picture of what was actually happening across every client relationship.
</p>
<p>
  The tools out there store your data. None of them understand it. By the time you notice something is wrong — a client going quiet, a project stalling, an invoice sitting unpaid — it's already too late to get ahead of it.
</p>
<p>
  So we built Skkido. It started as an internal tool to give us a real-time picture of every client we were managing. Now we're opening it up — so anyone running client work can finally have a system that tells them what's happening before things go wrong.
</p>
        <div>
          <strong class="founder-name">B. Tumbee</strong>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
</script>

<style lang="scss" scoped>
.home-section-three {
  position: relative;
  z-index: 2;
  min-height: 100%;
  background: #fff;
}

.sk-hero-section {
  display: flex;
  padding: 4rem 2rem;
  height: 75vh;
}

.founders-section {
  background-color: #17151A;
  border-top-right-radius: 25px;
  border-top-left-radius: 25px;
  color: #fff;
  margin-top: -72px;
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