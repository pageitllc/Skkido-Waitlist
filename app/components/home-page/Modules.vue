<template>
  <section ref="section" class="scroll-cards ">

    <div class="scroll-cards__pin">
      <div class="sk-container">
        <div class="scroll-cards__header">
         <h2 data-aos="fade-up" data-aos-delay="0" class="headline">
  One engine. <span>Five interfaces.</span>
</h2>
<p data-aos="fade-up" data-aos-delay="150">
  Each interface feeds signals into the same intelligence layer. Start with what's live today and grow as new interfaces launch.
</p>
        </div>
      </div>

      <div ref="track" class="scroll-cards__track" :style="desktopTrackStyle">
       <article v-for="card in cards" :key="card.key" class="scroll-card">
  <div class="scroll-card__content">
    <div class="scroll-card__top">
      <div class="scroll-card__icon">
        <component :is="card.icon" :size="22" stroke-width="1.75" />
      </div>
      <span v-if="card.status === 'live'" class="badge-live">Live</span>
      <span v-else class="badge-soon">Coming soon</span>
    </div>
    <h3>{{ card.title }}</h3>
    <p>{{ card.description }}</p>
  </div>
</article>

        <!-- LAST CARD - black background -->
        <article class="scroll-card last-card">
          <div class="scroll-card__content last-card-content">
            <h3>And Lots More</h3>
          </div>
        </article>
      </div>
    </div>

    <div v-if="isDesktop" :style="{ height: `${scrollHeight}px` }" />

    <div v-if="!isDesktop" class="scroll-pagination">
      <button v-for="(_, i) in cards" :key="i" class="scroll-pagination__dot" :class="{ active: i === activeIndex }"
        @click="scrollToCard(i)" />
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount } from "vue";
import {
  Users,
  Kanban,
  CreditCard,
  MessageCircle,
  Monitor
} from "lucide-vue-next"

/* Refs */

const section = ref<HTMLElement | null>(null);
const track = ref<HTMLElement | null>(null);

const isDesktop = ref(false);
const translateX = ref(0);
const scrollHeight = ref(0);
const containerOffset = ref(0);
const activeIndex = ref(0);
const scrollDelay = ref(0);

let maxScroll = 0;
let sectionTop = 0;

/* Cards */

const cards = [
  {
    key: "crm",
    title: "Client relationships",
    description: "Leads, deals, proposals, contracts, and contacts — one pipeline that runs your entire client relationship without switching tabs.",
    icon: Users,
    status: "live"
  },
  {
    key: "projects",
    title: "Project management",
    description: "Tasks, deliverables, timelines, and files — all connected to the client and contract they belong to.",
    icon: Kanban,
    status: "coming-soon"
  },
  {
    key: "invoicing",
    title: "Invoicing & payments",
    description: "Send branded invoices, collect payments, and track what's outstanding — all from the same place the work was delivered.",
    icon: CreditCard,
    status: "coming-soon"
  },
  {
    key: "collab",
    title: "Collaboration",
    description: "Channels, threads, file sharing, and message-to-task conversion — built directly into every project and client relationship.",
    icon: MessageCircle,
    status: "coming-soon"
  },
  {
    key: "client-portal",
    title: "Client portal",
    description: "Clients log in, see the breakdown, check progress, complete actions, and pay invoices — without touching your workspace.",
    icon: Monitor,
    status: "live"
  }
]

/* Computed */

const desktopTrackStyle = computed(() => {
  if (!isDesktop.value) return {};

  return {
    paddingLeft: `${containerOffset.value}px`,
    paddingRight: `${containerOffset.value}px`,
    transform: `translateX(-${translateX.value}px)`
  };
});

/* Logic */

function updateMode() {
  isDesktop.value = window.innerWidth >= 992;
}

function handleDesktopScroll() {
  if (!isDesktop.value) return;

  const rawProgress =
    window.scrollY - sectionTop - scrollDelay.value;

  translateX.value = Math.min(
    Math.max(rawProgress, 0),
    maxScroll
  );
}

function handleMobileScroll() {
  if (isDesktop.value || !track.value) return;

  const cardWidth = track.value.firstElementChild?.clientWidth || 1;
  activeIndex.value = Math.round(track.value.scrollLeft / cardWidth);
}

function scrollToCard(index: number) {
  if (!track.value) return;

  const card = track.value.children[index] as HTMLElement;
  track.value.scrollTo({
    left: card.offsetLeft,
    behavior: "smooth"
  });
}

/* Lifecycle */

onMounted(() => {
  updateMode();
  window.addEventListener("resize", updateMode);

  scrollDelay.value = window.innerHeight;

  if (!section.value || !track.value) return;

  if (isDesktop.value) {
    const container =
      section.value.querySelector(".sk-container") as HTMLElement;

    containerOffset.value = container.offsetLeft;

    maxScroll =
      track.value.scrollWidth -
      window.innerWidth +
      containerOffset.value * 2;

    sectionTop = section.value.offsetTop;

    scrollHeight.value =
      maxScroll + window.innerHeight + scrollDelay.value;

    window.addEventListener("scroll", handleDesktopScroll, { passive: true });
  }

  track.value.addEventListener("scroll", handleMobileScroll, {
    passive: true
  });

  window.addEventListener("resize", () => {
    scrollDelay.value = window.innerHeight;
  });
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", updateMode);
  window.removeEventListener("scroll", handleDesktopScroll);
  track.value?.removeEventListener("scroll", handleMobileScroll);
});
</script>

<style scoped>
/* Section */
@media (max-width: 991px) {
  .scroll-cards {
    padding: 3rem 0 !important;
  }
}

.scroll-cards {
  background: #F5F5F7;
  padding: 15rem 0;
}

.scroll-cards__pin {
  position: sticky;
  top: 0;
  overflow: hidden;
}

.scroll-cards__header {
  display: flex;
  flex-direction: column;
  align-items: left;
  margin-bottom: 4rem;
}

.headline {
  font-size: 3.375rem;
  font-weight: 500;
}

.headline span {
  color: #b29b9b;
}

.scroll-cards__header p {
  margin-top: 1rem;
  color: #555;
}

/* Track */
.scroll-cards__track {
  display: flex;
  gap: 3rem;
  will-change: transform;
}

/* Hide scrollbar on mobile */
@media (max-width: 991.99px) {

  .headline {
    font-size: 2.6rem;
    font-weight: 500;
  }

  .scroll-cards__track::-webkit-scrollbar {
    display: none;
  }

  .scroll-cards__track {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }

  .scroll-cards__pin {
    position: static;
  }

  .scroll-cards__track {
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    gap: 1.5rem;
    padding: 0 1rem;
    transform: none !important;
  }

  .scroll-card {
    flex: 0 0 85%;
    scroll-snap-align: start;
  }
}

/* Card */
.scroll-card {
  min-width: 420px;
  background: #fff;
  border-radius: 28px;
}

.scroll-card__content {
  padding: 3rem;
  display: flex;
  flex-direction: column;
  height: 100%;
}

.scroll-card__icon {
  width: 40px;
  height: 40px;
  border-radius: 999px;
  background: #a88f8f;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
}

.scroll-card h3 {
  font-size: 1.25rem;
  margin-bottom: 0.75rem;
}

.scroll-card p {
  color: #555;
  line-height: 1.5;
}

/* LAST CARD SPECIFIC */
.scroll-card.last-card {
  background-color: #000;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 420px;
  border-radius: 28px;
}

.scroll-card.last-card .scroll-card__content {
  padding: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  flex-direction: column;
  text-align: center;
}

.scroll-card.last-card h3 {
  font-size: 1.5rem;
  font-weight: 600;
}

/* Pagination */
.scroll-pagination {
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-top: 1.5rem;
}

.scroll-pagination__dot {
  width: 8px;
  height: 12px;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.3);
  border: none;
  cursor: pointer;
}

.scroll-pagination__dot.active {
  background: #111;
  transform: scale(1.4);
}

@media (min-width: 992px) {
  .scroll-pagination {
    display: none;
  }
}

.scroll-card__top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.5rem;
}

.scroll-card__icon {
  margin-bottom: 0;
}

.badge-live {
  font-size: 11px;
  font-weight: 500;
  background: #EAF3DE;
  color: #27500A;
  padding: 3px 10px;
  border-radius: 99px;
}

.badge-soon {
  font-size: 11px;
  font-weight: 500;
  background: #F1EFE8;
  color: #5F5E5A;
  padding: 3px 10px;
  border-radius: 99px;
}
</style>
