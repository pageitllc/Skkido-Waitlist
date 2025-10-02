<template>
  <div>
    <section class="sk-container">
      <div class="cta-section">
        <div class="cta-image">
          <img src="/positive-young-lady-freelancer-eyewear-keyboards-information-laptop-computer.jpg"
            alt="Happy user on laptop" />
        </div>
        <div class="cta-content">
          <h2>Be the first to try Skkido</h2>
          <p>
            You read all the way down here, so don’t try telling us you’re not interested.
            Sign up for the waitlist. Then never look back.
          </p>
          <NuxtLink to="/waitlist" class="cta-button">I’m in, put me on the list</NuxtLink>
        </div>
      </div>
    </section>

  </div>
</template>

<script lang="ts" setup>

</script>

<style scoped>
.cta-section {
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-height: 400px;
  border-radius: 12px;
  overflow: hidden;
}

/* Left side image */
.cta-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.cta-content {
  background: #ffc178;
  /* your orange background */
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 3rem;
  color: #2b2b2b;
}

.cta-content h2 {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.cta-content p {
  font-size: 1rem;
  margin-bottom: 1.5rem;
  max-width: 420px;
}

.cta-button {
  display: inline-block;
  text-align: center;
  width: fit-content;
  padding: 0.9rem 1.5rem;
  border-radius: 10px;
  background-color: #2b2b2b;
  color: #fff;
  font-weight: 600;
  text-decoration: none;
  transition: background 0.2s;
}

.cta-button:hover {
  background-color: #000;
}

@media (max-width: 768px) {
  .cta-section {
    grid-template-columns: 1fr;
  }
}
</style>