<script setup lang="ts">
import type { ProjectItemProps } from '../../types';

defineProps<ProjectItemProps>();

defineEmits<{
  (e: 'click'): void;
  (e: 'close'): void;
}>();
</script>

<template>
  <div
    class="cell"
    :class="{ open: isOpen }"
    role="button"
    tabindex="0"
    :aria-pressed="isOpen"
    :aria-label="`View details for ${project.name}`"
    @click="$emit('click')"
    @keydown.enter="$emit('click')"
    @keydown.space.prevent="$emit('click')"
  >
    <img
      v-if="project.img"
      :src="project.img"
      :alt="`${project.name} preview`"
      class="cell-img"
      loading="lazy"
    />
    <span v-else class="cell-name">{{ project.name }}</span>
  </div>
</template>

<style scoped>
.cell {
  background: var(--color-surface);
  border-radius: var(--radius-sm, 4px);
  border: 1px solid var(--ds-color-charade, rgba(255, 255, 255, 0.08));
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: var(--color-text);
  text-align: center;
  cursor: pointer;
  transition: all var(--transition);
  position: relative;
  overflow: hidden;
}

.cell:hover {
  border-color: var(--color-accent);
  box-shadow: 0 0 16px color-mix(in srgb, var(--color-accent) 25%, transparent);
  transform: translateY(-2px);
}

.cell:focus-visible {
  outline: 2px solid var(--color-accent);
  outline-offset: 2px;
}

.cell.open {
  border-color: var(--color-accent);
}

.cell-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  inset: 0;
}

.cell-name {
  font-family: var(--font-body);
  font-weight: 600;
  color: var(--color-text);
  transition: color var(--transition);
  padding: 0.5rem;
}

.cell:hover .cell-name {
  color: var(--color-heading);
}
</style>
