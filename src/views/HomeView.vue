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
        main-color="var(--surface-card-dark)"
        sub-color="var(--surface-card-dark)"
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
            <div class="divider-accent hero-divider" role="separator" aria-hidden="true"></div>
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
  height: calc(100vh - 1rem);
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
  font-family: var(--font-family);
  font-weight: var(--font-weight-bold);
  font-size: clamp(2rem, 5vw, 3.5rem);
  color: var(--color-white);
  line-height: var(--line-height-tight);
}

.hero-role {
  font-family: var(--font-family);
  font-size: var(--font-size-subtitle);
  font-weight: var(--font-weight-bold);
  letter-spacing: 0.12rem;
  text-transform: uppercase;
  margin-top: 0.5rem;
  margin-bottom: 1.5rem;
  color: var(--color-iron);
}

.hero-role em {
  font-style: normal;
  color: var(--color-primary);
}

.section-title {
  font-family: var(--font-family);
  font-size: var(--font-size-title);
  font-weight: var(--font-weight-bold);
  color: var(--color-white);
  margin-bottom: 0.5rem;
}

#about-me {
  color: var(--color-iron);
  font-size: var(--font-size-body);
  line-height: var(--line-height-relaxed);
  margin: 0;
}

.hero-divider {
  width: 36%;
  margin: 1.25rem 0;
}

/* ── STATS SECTION ───────────────────────────── */
.stats-grid {
  display: grid;
  grid-template-columns: auto auto;
  gap: 1.5rem;
  margin-top: 1rem;
}

.stat-item {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.stat-value {
  font-family: var(--font-family);
  font-size: 2rem;
  font-weight: var(--font-weight-bold);
  color: var(--color-white);
  line-height: 1;
  margin: 0;
}

.stat-value sup {
  color: var(--color-primary);
}

.stats-grid figcaption {
  font-family: var(--font-family);
  font-size: var(--font-size-small);
  color: var(--color-oslo-gray);
  font-weight: var(--font-weight-semibold);
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

/* ── STACK CARD INNER SLOTS ─────────────────── */
.card-slot-content {
  padding: var(--space-6);
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
}

.card-slot-title {
  margin: 0 0 0.5rem 0;
  font-family: var(--font-family);
  font-weight: var(--font-weight-bold);
  font-size: 1.25rem;
  color: var(--color-white);
}

.card-slot-desc {
  margin: 0;
  font-family: var(--font-family);
  font-size: var(--font-size-body);
  color: var(--color-iron);
  line-height: var(--line-height-normal);
}
</style>
