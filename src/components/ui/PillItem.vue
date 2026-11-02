<script setup lang="ts">
import type { PillItemProps } from '../../types';

withDefaults(defineProps<PillItemProps>(), {
  label: 'Label',
  status: 'inactive',
});
</script>

<template>
  <span :class="['pill-gen', `pill-${status}`]">
    <p>{{ label }}</p>
  </span>
</template>

<style scoped>
.pill-gen {
  text-align: center;
  min-width: 3rem;
  padding: 0.25rem 0.65rem;
  border-radius: var(--radius-pill);
  font-family: var(--font-family);
  font-size: var(--font-size-small);
  font-weight: var(--font-weight-semibold);
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.pill-gen p {
  margin: 0;
  padding: 0;
  line-height: 1;
}

.pill-active {
  color: var(--color-primary-contrast);
  border: 1px solid var(--color-primary);
  background-color: var(--color-primary);
}

.pill-inactive {
  color: var(--color-oslo-gray);
  border: 1px solid var(--color-charade);
  background-color: var(--surface-card-dark);
}
</style>
