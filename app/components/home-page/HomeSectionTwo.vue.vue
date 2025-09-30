<template>
  <section class="sk-hero-section py-5">
    <div class="hero-title">
      <h2 class="complaints-title">
        <span class="handwritten">One problem</span><br />
        Countless voices
      </h2>
      <p class="complaints-sub">One workspace, one solution.</p>
    </div>

    <div class="chat-container">
      <ComplaintBubble avatar="/avatars/avatar1.png"
        message="Sometimes clients don’t even make payment after I’ve delivered the work — I have no protection."
        bubbleColor="#1E63E9" class="bubble bubble--1" />

      <ComplaintBubble avatar="/avatars/avatar2.png"
        message="My clients need a proper platform to see project progress. Notion isn’t built for that, too many steps for simple updates."
        bubbleColor="#F35106" class="bubble bubble--2" />

      <ComplaintBubble avatar="/avatars/avatar3.png"
        message="When I bring in other professionals to help on a project, I can’t track their tasks or payments properly. It turns into a mess of spreadsheets, chats, and manual follow-ups."
        bubbleColor="#FAD9C1" class="bubble bubble--3" />

      <ComplaintBubble avatar="/avatars/avatar4.png"
        message="Managing different clients across emails, chats, and scattered files is a nightmare. I waste hours just trying to keep everything in one place instead of focusing on the actual work."
        bubbleColor="#2A7D2E" class="bubble bubble--4" />

      <ComplaintBubble avatar="/avatars/avatar5.png"
        message="I can’t keep paying for Slack, Notion, a CRM, and a project management tool. It’s too expensive and fragmented."
        bubbleColor="#FFD600" class="bubble bubble--5" />
    </div>


  </section>
</template>

<style lang="scss" scoped>
.hero-title {
  text-align: center;
  margin-bottom: 5rem;

  h2 {
    font-size: 2.5rem;
    font-weight: 700;
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

.complaints-sub {
  text-align: center;
  font-size: 1.2rem;
  margin-top: 0.5rem;
  color: #555;
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

/* Each bubble gets its own spot */
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
