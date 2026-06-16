<script setup lang="ts">
import type { Project } from '../../types';
import ProjectDetails from './ProjectDetails.vue';

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

    <Transition name="fade">
      <ProjectDetails
        v-if="isOpen"
        :fullName="project.fullName"
        :year="project.year"
        :desc="project.desc"
        :tags="project.tags"
        :url="project.url"
        :img="project.img"
        @close="$emit('close')"
      />
    </Transition>
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

/* Slide-in details transition (fade) */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
