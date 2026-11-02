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
  background: var(--surface-card-dark);
  border-radius: var(--radius-small);
  border: 1px solid var(--color-charade);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: var(--color-iron);
  text-align: center;
  cursor: pointer;
  transition: all var(--transition-default);
  position: relative;
  overflow: hidden;
}

.cell:hover {
  border-color: var(--color-primary);
  transform: translateY(-2px);
}

.cell:focus-visible {
  outline: 2px solid var(--color-primary);
  outline-offset: 2px;
}

.cell.open {
  border-color: var(--color-primary);
}

.cell-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  inset: 0;
}

.cell-name {
  font-family: var(--font-family);
  font-weight: var(--font-weight-semibold);
  color: var(--color-iron);
  transition: color var(--transition-default);
  padding: 0.5rem;
}

.cell:hover .cell-name {
  color: var(--color-white);
}
</style>
