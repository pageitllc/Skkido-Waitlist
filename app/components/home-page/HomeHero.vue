<template>
  <section data-header-bg="#FFFFFF" data-header-mode="" style="background-color: #FFFFFF;">
    <div class="sk-container">

      <div style="display: flex; flex-direction: column; gap:0;">

        <div class="title-section">
          <div class="eyebrow">
            <span class="dot"></span>
            <span>Now in beta</span>
          </div>
          <h1 class="hero-title">
            <span class="hero-line line-1">The client intelligence platform that knows what's next.</span>
            <!-- <span class="hero-line line-2">One workspace.</span>
            <span class="hero-line line-3">Fewer tools.</span> -->
          </h1>


          <p>Skkido doesn't just store your client data. It reads it. It watches for communication gaps, stalled projects, and late payments, then tells you exactly which clients need your attention before things go wrong.</p>
          <span>

          </span>

          <div class="cta-wrapper">
            <div class="flex flex--column flex--gap-sm">
              <FusionButton variant="ctaSecondary" size="md" text="Join the Beta "  link="https://docs.skkido.com"                           
      target="_blank"                   />
              <span class="text-xs">Limited Spots Available</span>
            </div>

          </div>

        </div>


        <div class="hero-section">
          <div class="card card-left-top">
            <NuxtImg src="/images/image-top-left.svg" />
          </div>

          <div class="card card-left-bottom">
            <NuxtImg src="/images/image-bottom-left.svg" />
          </div>

          <div class="card card-right">
            <NuxtImg src="/images/skkido-top-right.jpg" />
          </div>

          <div class="main-media">
            <NuxtImg src="/images/skkido-desktop.png" />
          </div>
        </div>
      </div>


     
    </div>
  </section>
</template>

<script setup lang="js">
import { onMounted, onBeforeUnmount } from "vue";
import FusionButton from "@/button/FusionButton.vue";

let onScroll;

onMounted(() => {
  const main = document.querySelector(".main-media");
  const cards = document.querySelectorAll(".card");

  if (!main || !cards.length) return;

  onScroll = () => {
    const scroll = window.scrollY;
    const max = window.innerHeight;
    const p = Math.min(scroll / max, 1);

    /* MAIN MEDIA */
    main.style.transform = `scale(${1 + p * 0.25}) translateY(${25 * p}px)`;
    main.style.width = `${65 + (95 - 65) * p}%`;

    /* FLOATING CARDS */
    cards.forEach(card => {
      const s = 1 - p * 0.32;
      const mx = p * 150;
      const my = p * 40;
      const dir = card.classList.contains("card-right") ? 1 : -1;

      card.style.transform = `scale(${s}) translate(${mx * dir}px, ${my}px)`;
    });
  };

  window.addEventListener("scroll", onScroll, { passive: true });
});

onBeforeUnmount(() => {
  if (onScroll) {
    window.removeEventListener("scroll", onScroll);
  }
});
</script>

<style scoped lang="scss">
.hero-section {
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 700px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

}

/* MAIN IMAGE */
.main-media {
  width: 65%;
  max-width: 1000px;
  border-radius: 15px;
  overflow: hidden;
  position: relative;
  top: 0;
  z-index: 1;
  transition: transform 0.15s ease-out, width 0.15s ease-out;
  // box-shadow:
  //   0 20px 40px rgba(0, 0, 0, 0.08),
  //   0 6px 12px rgba(0, 0, 0, 0.04);
}



.main-media img {
  width: 100%;
  height: auto;
  border-radius: 15px;
  object-fit: cover;
}

/* FLOATING CARDS */
.card {
  position: absolute;
  border-radius: 20px;
  overflow: hidden;
  opacity: 0.9;
  transition: transform 0.25s ease-out;
  z-index: 1;
  box-shadow:
    inset 0 12px 28px rgba(0, 0, 0, 0.1), 0 4px 8px rgba(0, 0, 0, 0.05)
}


.card img {
  width: 100%;
  display: block;
}

.card-left-top {
  width: 373px;
  top: 5%;
  left: 0;
}

.card-left-bottom {
  width: 203px;
  bottom: 0;
  left: 0;
}

.card-right {
  width: 240px;
  top: 5%;
  right: 0;
}

/* CTA */
.cta-wrapper {
  display: flex;
  justify-content: center;
  margin-top: 24px;
  gap: 1rem
}


/* Title section */

.eyebrow {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.09em;
  text-transform: uppercase;
  padding: 6px 14px;
  border: 1px solid rgba(0, 0, 0, 0.15);
  border-radius: 999px;

  margin: 0 auto 28px;
  width: fit-content;

  line-height: 1;

  .dot {
    width: 6px;
    height: 6px;
    background: #00a869;
    border-radius: 50%;
    flex-shrink: 0;
    animation: blink 2s infinite;
  }
}

.title-section {
  text-align: center;
  padding-top: 10rem;


  display: flex;
  flex-direction: column;
}

.title-section h1 {
  font-size: clamp(3.5rem, .5rem + .961538vw, 1rem);
  max-width: 900px;
  margin: auto;
  line-height: 1.25;
}

.title-section p {
  max-width: 720px;
  margin: 20px auto 0;
  font-size: 1rem;
  color: var(--fu-brand-primary-base);
  line-height: 2rem;

}

.hero-tools {
  padding: 80px 0 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  text-align: center;
}

.hero-tools__text {
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
}

.hero-tools__title {
  font-size: clamp(1.4rem, 2.5vw, 2rem);
  font-weight: 500;
  color: #1a0d08;
  letter-spacing: -0.02em;
  line-height: 1.2;
}

.hero-tools__desc {
  font-size: 15px;
  color: #1a0d08;
  line-height: 1.65;
  max-width: 500px;
}




@media (max-width: 768px) {

  /* Hide floating cards */
  .card {
    display: none;
  }

  /* Hero layout */
  .hero-section {
    height: auto;
    min-height: unset;
    padding: 40px 0;
    margin: 0px
  }

  /* Main media becomes the hero */
  .main-media {
    width: 100% !important;
    max-width: 100%;
    top: 0;
    transform: none !important;
  }

  .main-media img {
    height: auto;
    max-height: 420px;
    object-fit: contain;
  }

  /* Title adjustments */
  .title-section {
    padding-top: 10rem;
  }

  .title-section h1 {
    font-size: 40px;
    line-height: 1.3;
  }

  .title-section p {
    font-size: 16px;
  }
}

.hero-tools {
  text-align: center;

  &__title {
    font-size: clamp(2rem, .5rem + .961538vw, 1rem);

  }

  img {
    width: 500px;
    max-width: 100%;
  }
}

.hero-title {
  text-align: center;
  max-width: 900px;
  margin: auto;
  line-height: 1.25;
}

.hero-line {
  display: inline;
}

.line-3 {
  display: block;
}

@media (max-width: 991.99px) {
  .hero-line {
    display: block;
  }
}
</style>
