<script setup lang="ts">
import LayoutContainer from '../components/layout/LayoutContainer.vue';
import Navbar from '../components/nav/Navbar.vue';
import StackCards from '../components/ui/StackCards.vue';
import TechStackList from '../components/ui/TechStackList.vue';
import ProjectGallery from '../components/ui/ProjectGallery.vue';
import { details, projects } from '../data/details';
import { useResponsive } from '../composables/useResponsive';
import { calculateExperience } from '../utils/date';

const { navDirection } = useResponsive();
const yearsExperience = calculateExperience();
</script>

<template>
  <main id="page">
    <!-- Navigation Sidebar -->
    <section id="nav">
      <Navbar :links="details.socials" :avatar="details.avatar" :direction="navDirection" />
    </section>

    <!-- Main Content & Experience Area -->
    <section id="mid">
      <LayoutContainer
        height="100%"
        width="100%"
        image="./main-bg.webp"
        main-color="var(--ds-surface-card-dark)"
        sub-color="var(--ds-surface-card-dark)"
      >
        <template #main>
          <header class="hero-header">
            <h1 class="hero-name">{{ details.personal.name }}</h1>
            <h2 class="hero-role">
              {{ details.personal.rank }}&nbsp;<em>{{ details.personal.role }}</em>&nbsp;-&nbsp;{{ yearsExperience }} yrs exp
            </h2>
          </header>

          <section class="about-section">
            <h2 class="section-title">About Me</h2>
            <p id="about-me">{{ details.personal.about }}</p>
            <hr class="hero-divider" />
            <section class="stats-grid" aria-label="Key Statistics">
              <figure class="stat-item">
                <figcaption>Projects Completed</figcaption>
                <p class="stat-value">{{ projects.length }}<sup>+ </sup></p>
              </figure>
              <figure class="stat-item">
                <figcaption>Experience</figcaption>
                <p class="stat-value">{{ yearsExperience }}<sup> yrs </sup></p>
              </figure>
            </section>
          </section>
        </template>

        <template #sub>
          <TechStackList :experiences="details.experiences" :perPage="details.settings.skillsPerPage" />
        </template>
      </LayoutContainer>
    </section>

    <!-- Side Aspirations & Projects Gallery -->
    <section id="side">
      <div class="side-top">
        <StackCards
          width="100%"
          height="var(--stack-height, 100%)"
          :items="details.stackCards.cards.length"
          :offset="details.settings.stackCardsOffset"
        >
          <template
            v-for="(card, index) in details.stackCards.cards"
            :key="index"
            v-slot:[`badge-${index+1}`]
          >
            <div style="font-weight: 700;">{{ card.badge }}</div>
          </template>

          <template
            v-for="(card, index) in details.stackCards.cards"
            :key="index"
            v-slot:[`card-${index+1}`]
          >
            <div class="card-slot-content">
              <h2 class="card-slot-title">{{ card.title }}</h2>
              <p class="card-slot-desc">{{ card.description }}</p>
            </div>
          </template>
        </StackCards>
      </div>

      <ProjectGallery class="side-bottom" :projects="projects" />
    </section>
  </main>
</template>

<style scoped>
#nav {
  grid-area: nav;
  max-width: 60px;
}

#mid {
  grid-area: mid;
  min-height: 0;
}

#side {
  grid-area: side;
  display: flex;
  flex-direction: column;
  gap: 20px;
  height: 100%;
  min-height: 0;
}

.side-top {
  height: 60%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  flex-shrink: 0;
}

.side-bottom {
  flex: 1;
  min-height: 0;
}

#page {
  max-width: 100%;
  height: calc(100dvh - 1rem);
  padding: 0.5rem;
  display: grid;
  grid-template-columns: auto 2fr 1fr;
  column-gap: 1rem;
  grid-template-areas: 'nav mid side';
  overflow: hidden;
  grid-template-rows: minmax(0, 1fr);
}

@supports (height: 100dvh) {
  #page {
    height: calc(100dvh - 1rem);
  }
}

@media (max-width: 890px) {
  #mid {
    padding: 0rem 0.5rem;
  }

  #page {
    display: grid;
    grid-template-rows: auto auto auto;
    grid-template-columns: 1fr;
    row-gap: 1rem;
    height: auto;
    min-height: 100%;
    grid-template-areas:
      'nav'
      'mid'
      'side';
    overflow: visible;
  }

  #nav {
    max-width: none;
    padding: 0rem 0.5rem;
  }

  #side {
    display: flex;
    padding: 0rem 0.5rem;
    flex-direction: row;
    gap: 1.5rem;
    height: auto;
  }

  .side-top {
    flex: 4;
    min-width: 0;
    height: auto;
    --stack-height: 24rem;
  }

  .side-bottom {
    flex: 6;
    min-width: 0;
    height: auto;
  }
}

@media (max-width: 460px) {
  #side {
    flex-direction: column;
  }

  .side-top {
    width: 100%;
  }

  .side-bottom {
    width: 100%;
  }
}

/* ── HERO HEADER ─────────────────────────────── */
.hero-header {
  margin-bottom: 1rem;
}

.hero-name {
  margin: 0;
}

.hero-role {
  font-size: var(--h4-size);
  font-weight: 700;
  letter-spacing: 0.15rem;
  text-transform: uppercase;
  margin-bottom: 1.5rem;
}

.hero-role em {
  font-style: normal;
  color: var(--color-accent);
}

.section-title {
  font-size: var(--h2-size);
  margin-bottom: 0.5rem;
}

.hero-divider {
  width: 36%;
  height: 2px;
  background: var(--color-accent);
  box-shadow: var(--shadow-glow);
  margin: var(--hr-gap) 0;
}

/* ── STATS SECTION ───────────────────────────── */
.stats-grid {
  display: grid;
  grid-template-columns: auto auto;
  gap: calc(min(var(--grid-col-sm), 1dvw));
  margin-top: 1rem;
}

.stat-item {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.stat-value {
  font-family: var(--font-display);
  font-size: 2rem;
  font-weight: 700;
  color: var(--color-heading);
  line-height: 1;
}

.stat-value sup {
  color: var(--color-accent);
}

.stats-grid figcaption {
  font-size: 11px;
  color: var(--color-muted);
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

/* ── STACK CARD INNER SLOTS ─────────────────── */
.card-slot-content {
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
}

.card-slot-title {
  margin: 0 0 0.5rem 0;
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 1.25rem;
}

.card-slot-desc {
  margin: 0;
  font-size: 0.85rem;
  line-height: 1.5;
  opacity: 0.9;
}
</style>
