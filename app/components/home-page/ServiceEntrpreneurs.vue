<template>
  <div class="sk-container py-5">
    <div class="content-wrapper">
      <h2  data-aos="fade-up" data-aos-delay="0">Built for service entrepreneurs</h2>
      <p  data-aos="fade-up" data-aos-delay="150">
        Skkido is designed for people who sell expertise and time — not products.
        Whether you’re a freelancer, consultant, agency, or small service business,
        Skkido helps you manage client operations from first conversation to final payment without juggling tools.
      </p>
    </div>
  </div>
</template>

<script lang="ts" setup>
</script>

<style scoped>
.sk-container {
  padding-top: 3rem;
  padding-bottom: 3rem;
  display: flex;
  justify-content: center;
  height: 60vh;
  align-items: center;
}

.content-wrapper {
  max-width: 800px;
  padding: 0 1.5rem;
  text-align: center;
}

h2 {
  font-size: 3.375rem;
  margin-bottom: 1.25rem;
  font-family: 'ProximaNova', sans-serif;
  color: #222;
}

p {
  font-size: 1.125rem;
  line-height: 1.6;
  color: #444;
  margin: 0 auto;
  max-width: 600px;
}


@media (max-width: 991.99px) {

  h2 {
      font-size:2.6rem;
    margin-bottom: 1.25rem;
    font-family: 'ProximaNova', sans-serif;
    color: #222;
  }

  p {
    font-size: 0.9rem;
    line-height: 1.6;
    color: #444;
    margin: 0 auto;
    max-width: 600px;
  }
}
</style>
