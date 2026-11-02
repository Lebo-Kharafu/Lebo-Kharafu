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
  border-radius: var(--radius-xl, 9999px);
  font-family: var(--font-body);
  font-size: 0.75rem;
  font-weight: 600;
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
  color: var(--ds-color-primary-contrast, #ffffff);
  border: 1px solid var(--color-accent);
  background-color: var(--color-accent);
  box-shadow: var(--shadow-glow);
}

.pill-inactive {
  color: var(--color-muted);
  border: 1px solid var(--ds-color-charade, rgba(255, 255, 255, 0.08));
  background-color: var(--color-surface);
}
</style>
