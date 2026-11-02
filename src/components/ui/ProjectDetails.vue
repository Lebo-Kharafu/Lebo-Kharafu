<script setup lang="ts">
import { SVG_ICONS } from '../../constants/svg';
import type { ProjectDetailsProps } from '../../types';

defineProps<ProjectDetailsProps>();

defineEmits<{
  (e: 'close'): void;
}>();
</script>

<template>
  <div class="detail" role="dialog" aria-modal="true" :aria-label="fullName">
    <button
      type="button"
      class="close-btn"
      aria-label="Close project details"
      @click.stop="$emit('close')"
    >
      <svg
        :viewBox="SVG_ICONS.CLOSE.viewBox"
        fill="none"
        stroke="currentColor"
        :stroke-width="SVG_ICONS.CLOSE.strokeWidth"
        :stroke-linecap="SVG_ICONS.CLOSE.strokeLinecap"
        :stroke-linejoin="SVG_ICONS.CLOSE.strokeLinejoin"
        class="icon-svg"
        aria-hidden="true"
      >
        <path :d="SVG_ICONS.CLOSE.path" />
      </svg>
    </button>
    <h3 class="title">{{ fullName }}</h3>
    <p class="desc">{{ desc }}</p>
    <div class="year">{{ year }}</div>

    <div class="tags" aria-label="Project tags">
      <span v-for="tag in tags" :key="tag">{{ tag }}</span>
    </div>

    <a
      v-if="url"
      :href="url"
      target="_blank"
      rel="noopener noreferrer"
      class="project-link"
      aria-label="Visit project external link"
    >
      <span>Open Project</span>
      <svg
        :viewBox="SVG_ICONS.ARROW_RIGHT.viewBox"
        fill="none"
        stroke="currentColor"
        :stroke-width="SVG_ICONS.ARROW_RIGHT.strokeWidth"
        :stroke-linecap="SVG_ICONS.ARROW_RIGHT.strokeLinecap"
        :stroke-linejoin="SVG_ICONS.ARROW_RIGHT.strokeLinejoin"
        class="arrow-svg"
        aria-hidden="true"
      >
        <path :d="SVG_ICONS.ARROW_RIGHT.path" />
      </svg>
    </a>
  </div>
</template>

<style scoped>
.detail {
  position: absolute;
  inset: 0;
  background: var(--surface-page-dark);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0.75rem;
  text-align: center;
  border-radius: var(--radius-small);
  z-index: 5;
  border: 1px solid var(--color-charade);
  overflow-y: auto;
}

/* WebKit Custom Scrollbar (Fallback) */
.detail::-webkit-scrollbar {
  width: 4px;
  background: var(--surface-card-dark);
}
.detail::-webkit-scrollbar-thumb {
  background: var(--color-primary);
  border-radius: 2px;
}

/* Native CSS Standard Scrollbar */
@supports (scrollbar-color: auto) {
  .detail {
    scrollbar-width: thin;
    scrollbar-color: var(--color-primary) var(--surface-card-dark);
  }
}

.title {
  font-family: var(--font-family);
  font-size: var(--font-size-small);
  font-weight: var(--font-weight-bold);
  color: var(--color-white);
  line-height: var(--line-height-tight);
  padding-bottom: 2px;
  margin: 0;
}

.year {
  font-size: 0.7rem;
  color: var(--color-oslo-gray);
  margin-top: 0.15rem;
  font-family: var(--font-mono);
}

.desc {
  font-size: 0.75rem;
  color: var(--color-iron);
  margin-top: 0.25rem;
  max-width: 90%;
  line-height: var(--line-height-normal);
  padding-bottom: 0;
  font-family: var(--font-family);
}

.tags {
  display: flex;
  gap: 0.3rem;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 0.45rem;
}

.tags span {
  background: var(--color-primary-subtle);
  padding: 0.15rem 0.45rem;
  border-radius: var(--radius-pill);
  font-size: 0.65rem;
  font-weight: var(--font-weight-semibold);
  color: var(--color-primary);
  border: 1px solid var(--color-primary);
  font-family: var(--font-family);
}

.project-link {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  margin-top: 0.5rem;
  font-size: 0.7rem;
  font-weight: var(--font-weight-semibold);
  font-family: var(--font-family);
  color: var(--color-primary);
  text-decoration: none;
  padding: 0.25rem 0.55rem;
  border-radius: var(--radius-pill);
  border: 1px solid var(--color-primary);
  transition: all var(--transition-default);
}

.project-link:hover {
  background: var(--color-primary);
  color: var(--color-primary-contrast);
  box-shadow: var(--shadow-primary);
  text-decoration: none;
}

.arrow-svg {
  width: 0.75rem;
  height: 0.75rem;
}

.close-btn {
  position: absolute;
  top: 0.35rem;
  right: 0.5rem;
  background: none;
  border: none;
  color: var(--color-oslo-gray);
  cursor: pointer;
  touch-action: manipulation;
  padding: 0.25rem;
  border-radius: var(--radius-small);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: color var(--transition-default);
  z-index: 6;
}

.icon-svg {
  width: 0.85rem;
  height: 0.85rem;
}

.close-btn:hover {
  color: var(--color-primary);
}

.close-btn:focus-visible {
  outline: 2px solid var(--color-primary);
}
</style>
