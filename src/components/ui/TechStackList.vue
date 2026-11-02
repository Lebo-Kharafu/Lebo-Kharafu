<script setup lang="ts">
import { ref, computed } from 'vue';
import { SVG_ICONS } from '../../constants/svg';
import type { TechStackListProps } from '../../types';

const props = withDefaults(defineProps<TechStackListProps>(), {
  perPage: 6,
});

const currentPage = ref(1);

const totalPages = computed(() =>
  Math.max(1, Math.ceil(props.experiences.length / props.perPage))
);

const columnsCount = computed(() => Math.ceil(Math.sqrt(props.perPage)));
const rowsCount = computed(() => Math.ceil(props.perPage / columnsCount.value));
const multiPage = computed(() => totalPages.value > 1);

const paginatedExperiences = computed(() => {
  const start = (currentPage.value - 1) * props.perPage;
  return props.experiences.slice(start, start + props.perPage);
});

const prevPage = () => {
  if (currentPage.value > 1) currentPage.value--;
};

const nextPage = () => {
  if (currentPage.value < totalPages.value) currentPage.value++;
};

const setPage = (page: number) => {
  currentPage.value = page;
};
</script>

<template>
  <section class="skills-section" aria-label="Education and Experience">
    <h3 class="skills-heading">Education &amp; Experience</h3>

    <div class="skills-content">
      <div class="list-carousel-container">
        <button
          v-if="multiPage"
          type="button"
          class="nav-btn"
          :disabled="currentPage === 1"
          aria-label="Previous page"
          @click="prevPage"
        >
          <svg
            :viewBox="SVG_ICONS.CHEVRON_LEFT.viewBox"
            fill="none"
            stroke="currentColor"
            :stroke-width="SVG_ICONS.CHEVRON_LEFT.strokeWidth"
            :stroke-linecap="SVG_ICONS.CHEVRON_LEFT.strokeLinecap"
            :stroke-linejoin="SVG_ICONS.CHEVRON_LEFT.strokeLinejoin"
            aria-hidden="true"
          >
            <path :d="SVG_ICONS.CHEVRON_LEFT.path" />
          </svg>
        </button>

        <ul
          class="skills-list"
          :style="{ gridTemplateColumns: `repeat(${columnsCount}, 1fr)` }"
          aria-live="polite"
        >
          <li v-for="exp in paginatedExperiences" :key="exp.place">
            <a
              v-if="exp.url"
              :href="exp.url"
              target="_blank"
              rel="noopener noreferrer"
              class="exp-link"
            >
              {{ exp.place }}
            </a>
            <span v-else>{{ exp.place }}</span>
          </li>
        </ul>

        <button
          v-if="multiPage"
          type="button"
          class="nav-btn"
          :disabled="currentPage === totalPages"
          aria-label="Next page"
          @click="nextPage"
        >
          <svg
            :viewBox="SVG_ICONS.CHEVRON_RIGHT.viewBox"
            fill="none"
            stroke="currentColor"
            :stroke-width="SVG_ICONS.CHEVRON_RIGHT.strokeWidth"
            :stroke-linecap="SVG_ICONS.CHEVRON_RIGHT.strokeLinecap"
            :stroke-linejoin="SVG_ICONS.CHEVRON_RIGHT.strokeLinejoin"
            aria-hidden="true"
          >
            <path :d="SVG_ICONS.CHEVRON_RIGHT.path" />
          </svg>
        </button>
      </div>

      <div v-if="multiPage" class="pagination-indicators" role="tablist" aria-label="Experience pages">
        <button
          v-for="page in totalPages"
          :key="page"
          type="button"
          class="page-dash"
          :class="{ active: page === currentPage }"
          role="tab"
          :aria-selected="page === currentPage"
          :aria-label="`Page ${page}`"
          @click="setPage(page)"
        ></button>
      </div>
    </div>
  </section>
</template>

<style scoped>
.skills-section {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  height: 100%;
}

.skills-heading {
  margin: -1.25rem -1.25rem 0 -1.25rem;
  padding: 0.7rem 1.2rem;
  background: rgba(0, 0, 0, 0.25);
  border-bottom: 1px solid var(--ds-color-charade, rgba(255, 255, 255, 0.08));
  border-top-left-radius: var(--radius-lg, 16px);
  border-top-right-radius: var(--radius-lg, 16px);

  font-family: var(--font-display);
  font-weight: 700;
  color: var(--color-heading);
  font-size: 1rem;
}

@supports (text-wrap: balance) {
  .skills-heading {
    text-wrap: balance;
  }
}

.skills-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
}

.list-carousel-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  gap: 0.5rem;
}

.nav-btn {
  background: transparent;
  border: 1px solid var(--ds-color-charade, rgba(255, 255, 255, 0.08));
  color: var(--color-muted);
  border-radius: var(--radius-md, 8px);
  width: 1.875rem;
  height: 1.875rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  cursor: pointer;
  transition: all var(--transition);
  padding: 0;
}

.nav-btn svg {
  width: 1rem;
  height: 1rem;
}

.nav-btn:hover:not(:disabled) {
  border-color: var(--color-accent);
  background: var(--color-accent);
  color: var(--ds-color-primary-contrast, #ffffff);
  box-shadow: var(--shadow-glow);
}

.nav-btn:disabled {
  opacity: 0.3;
  cursor: not-allowed;
}

.pagination-indicators {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.375rem;
  margin-top: -0.25rem;
  width: 100%;
}

.page-dash {
  width: 2rem;
  height: 0.35rem;
  border: none;
  padding: 0;
  border-radius: var(--radius-xl, 9999px);
  background: var(--ds-color-charade, rgba(255, 255, 255, 0.2));
  opacity: 0.6;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
}

.page-dash.active {
  width: 4rem;
  background: var(--color-accent);
  box-shadow: var(--shadow-glow);
  opacity: 1;
}

.page-dash:hover:not(.active) {
  opacity: 0.9;
  background: var(--color-text);
}

.skills-list {
  list-style: none;
  display: grid;
  align-content: start;
  align-items: start;
  justify-items: center;
  gap: 0.5rem;
  margin: 0;
  padding: 0;
  min-height: calc(v-bind('rowsCount') * 2.3rem);
  width: calc(v-bind('columnsCount') * 7.8rem);
  max-width: 100%;
}

.skills-list li {
  background: var(--ds-color-primary-subtle, rgba(255, 255, 255, 0.04));
  border: 1px solid var(--color-accent);
  border-radius: var(--radius-xl, 9999px);
  padding: 0.35rem 0.85rem;
  font-size: 0.75rem;
  font-weight: 600;
  font-family: var(--font-body);
  color: var(--color-accent);
  letter-spacing: 0.04em;
  transition: all var(--transition);
  cursor: default;
  height: fit-content;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.skills-list li:hover {
  background: var(--color-accent);
  color: var(--ds-color-primary-contrast, #ffffff);
  box-shadow: var(--shadow-glow);
  transform: translateY(-1px);
}

.exp-link {
  color: inherit;
  text-decoration: none;
}

.exp-link:hover {
  text-decoration: none;
  color: inherit;
}
</style>
