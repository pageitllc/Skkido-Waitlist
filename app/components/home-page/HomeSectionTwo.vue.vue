<template>
  <section class="sk-hero-section py-5">
    <div class="hero-title">
        <h2 class="complaints-sub">This is what managing clients </h2>
      <h2 class="complaints-title">
        <span class="handwritten">actually feels like.</span>
      </h2>
    </div>

      <client-only>
    <div class="chat-container">
      <ComplaintBubble  data-aos="zoom-in" data-aos-delay="50" avatar="/avatars/avatar1.png"
        message="I had no idea a client was unhappy until they asked for a refund. Nothing flagged it. I just missed it."
        bubbleColor="#1E63E9" class="bubble bubble--1" />

      <ComplaintBubble  data-aos="zoom-in" data-aos-delay="100" avatar="/avatars/avatar2.png"
        message="My clients need a proper platform to see project progress. Notion isn’t built for that, too many steps for simple updates."
        bubbleColor="#F35106" class="bubble bubble--2" />

      <ComplaintBubble  data-aos="zoom-in" data-aos-delay="150" avatar="/avatars/avatar3.png"
        message="I'm managing six clients across WhatsApp, email, and three different tools. I genuinely don't know which ones need my attention right now."
        bubbleColor="#2A0808" class="bubble bubble--3" />

      <ComplaintBubble  data-aos="zoom-in" data-aos-delay="200" avatar="/avatars/avatar4.png"
        message="A client went quiet for three weeks. I assumed everything was fine. It wasn't."
        bubbleColor="#2A7D2E" class="bubble bubble--4" />

      <ComplaintBubble  data-aos="zoom-in" data-aos-delay="250" avatar="/avatars/avatar5.png"
        message="Coordinating between my client and the people helping me on the project — I'm the only thing holding it together. One thing slips and everything breaks."
        bubbleColor="#FFD600" class="bubble bubble--5" />
    </div>
</client-only>

  </section>
</template>

<style lang="scss" scoped>
.hero-title {
  text-align: center;
  margin-bottom: 5rem;

  h2 {
    font-size:clamp(2.5rem,3.5vw,3rem);
    font-weight: 500;
    margin: 0;
  }

  p {
    font-size: 1.8rem;
    margin: 0.5rem 0 0;
  }
}



.handwritten {
  font-family: "hand-writing", cursive;
  font-size: 2.8rem;
  font-weight: 400;
  display: inline-block;
  margin-left: 0.3rem;
}
 

@media (max-width: 991.99px) {
  
.hero-title {
 
  h2 {
    font-size:clamp(2.5rem,3.5vw,3rem);
    font-weight: 500;
    margin: 0;
  }

  p {
    font-size: 1.8rem;
    margin: 0.5rem 0 0;
  }
}
}
.complaints-sub {
  text-align: center;
  font-size: 3.5rem;
  margin-top: 0.5rem;
}



@media (max-width: 768px) {
  .chat-container {
    display: grid;
    grid-template-columns: 1fr !important;
    padding: 1rem !important;
    gap: 1rem !important;
  }


  .bubble {
    grid-column: auto !important;
    grid-row: auto !important;
  }
}



.chat-container {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 3rem;
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}


.bubble {
  grid-column: span 6;
}

.bubble--1 {
  grid-column: 1 / span 6;
  grid-row: 1;
}

.bubble--2 {
  grid-column: 7 / span 6;
  grid-row: 1;
}

.bubble--3 {
  grid-column: 4 / span 6;
  grid-row: 2;
}

.bubble--4 {
  grid-column: 1 / span 6;
  grid-row: 3;
}

.bubble--5 {
  grid-column: 7 / span 6;
  grid-row: 3;
}


</style>
