<script setup lang="ts">
import type { SubBoxProps } from '../../types';

withDefaults(defineProps<SubBoxProps>(), {
  borderColor: 'var(--color-charade)',
  backgroundColor: 'var(--surface-card-dark)',
});
</script>

<template>
  <article class="side-sub">
    <slot name="content">
      Default SubBox Content
    </slot>
  </article>
</template>

<style scoped>
.side-sub {
  padding: 1rem;
  width: 100%;
  height: 100%;
  border: 1px solid v-bind(borderColor);
  border-radius: var(--radius-card);
  background-color: v-bind(backgroundColor);
  box-shadow: var(--shadow-card);
}

@media (max-width: 830px) {
  .side-sub {
    width: 100%;
    height: 100%;
  }
}

@media (max-width: 460px) {
  .side-sub {
    width: 100%;
    height: 100%;
  }
}
</style>
