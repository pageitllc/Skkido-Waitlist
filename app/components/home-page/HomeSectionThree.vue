<template>

  <section class="sk-container sk-hero-section founders-section ">
    <div class="grid">
      <div class="sk-hero-section__col-1">
        <h1 class="section-title">Founder’s <br> <span style="color: #C4C4C4;">Message</span></h1>
      </div>

      <div class="sk-hero-section__col-2">
        <p>
          I’ve spent years managing projects, freelancers, and client work through my agency, and the struggle was
          always
          the same: too many tools, too many manual steps, and constant stress about payments.
        </p>
        <p>
          The tools out there just couldn’t cut it. I couldn’t easily bring ad-hoc professionals into a project, track
          their time, or collaborate without paying for yet another license. Slack, Notion, CRMs, project management —
          everything felt scattered and expensive.
        </p>
        <p>So we built Skkido. It began as an internal tool to simplify how we work, and now we’re making it public — so
          independent professionals and small businesses can finally have one trusted workspace where projects, clients,
          and payments live together seamlessly</p>
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
.sk-hero-section {
  display: flex;
  padding: 4rem 2rem;
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