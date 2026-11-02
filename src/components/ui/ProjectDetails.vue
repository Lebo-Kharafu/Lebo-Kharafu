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
  background: rgba(15, 16, 17, 0.96);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0.75rem;
  text-align: center;
  border-radius: var(--radius-sm, 4px);
  z-index: 5;
  border: 1px solid var(--color-accent);
  box-shadow: var(--shadow-glow);
  overflow-y: auto;
}

@supports (backdrop-filter: blur(12px)) {
  .detail {
    background: rgba(15, 16, 17, 0.88);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
  }
}

.detail::-webkit-scrollbar {
  width: 4px;
  background: var(--color-surface);
}
.detail::-webkit-scrollbar-thumb {
  background: var(--color-accent);
  border-radius: 2px;
}

.title {
  font-family: var(--font-display);
  font-size: 0.875rem;
  font-weight: 700;
  color: var(--color-heading);
  line-height: 1.25;
  padding-bottom: 2px;
  margin: 0;
}

.year {
  font-size: 0.7rem;
  color: var(--color-muted);
  margin-top: 0.15rem;
  font-family: var(--font-mono, monospace);
}

.desc {
  font-size: 0.75rem;
  color: var(--color-text);
  margin-top: 0.25rem;
  max-width: 90%;
  line-height: 1.45;
  padding-bottom: 0;
  font-family: var(--font-body);
}

.tags {
  display: flex;
  gap: 0.3rem;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 0.45rem;
}

.tags span {
  background: var(--ds-color-primary-subtle, rgba(255, 255, 255, 0.05));
  padding: 0.15rem 0.45rem;
  border-radius: var(--radius-xl, 9999px);
  font-size: 0.65rem;
  font-weight: 600;
  color: var(--color-accent);
  border: 1px solid color-mix(in srgb, var(--color-accent) 30%, transparent);
  font-family: var(--font-body);
}

.project-link {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  margin-top: 0.5rem;
  font-size: 0.7rem;
  font-weight: 600;
  font-family: var(--font-body);
  color: var(--color-accent);
  text-decoration: none;
  padding: 0.25rem 0.55rem;
  border-radius: var(--radius-sm, 4px);
  border: 1px solid color-mix(in srgb, var(--color-accent) 40%, transparent);
  transition: all var(--transition);
}

.project-link:hover {
  background: var(--color-accent);
  color: var(--ds-color-primary-contrast, #ffffff);
  box-shadow: var(--shadow-glow);
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
  color: var(--color-muted);
  cursor: pointer;
  touch-action: manipulation;
  padding: 0.25rem;
  border-radius: 4px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: color var(--transition), background-color var(--transition);
  z-index: 6;
}

.icon-svg {
  width: 0.85rem;
  height: 0.85rem;
}

.close-btn:hover {
  color: var(--color-accent);
  background: rgba(255, 255, 255, 0.06);
}

.close-btn:focus-visible {
  outline: 2px solid var(--color-accent);
}
</style>
