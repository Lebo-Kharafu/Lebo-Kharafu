<script setup lang="ts">
import type { Project } from '../../types';
defineProps<{
  project: Project
  isOpen: boolean
}>();

defineEmits<{
  (e: 'click'): void
  (e: 'close'): void
}>();
</script>

<template>
  <div class="cell" :class="{ open: isOpen }" @click="$emit('click')">
    <img v-if="project.img" :src="project.img" :alt="project.name" class="cell-img" />
    <span v-else class="cell-name">{{ project.name }}</span>
  </div>
</template>

<style scoped>
.cell {
  background: var(--color-surface);
  border-radius: 4px;
  border: 1px solid rgba(255, 255, 255, 0.06);
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
  box-shadow: inset 0 0 30px rgba(194, 6, 15, 0.05);
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
}

.cell:hover .cell-name {
  color: var(--color-heading);
}
</style>
