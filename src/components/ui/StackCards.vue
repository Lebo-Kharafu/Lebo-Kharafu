<script setup lang="ts">
import { ref, computed } from 'vue';
import type { CardItem, StackCardsProps } from '../../types';

const props = withDefaults(defineProps<StackCardsProps>(), {
  items: 3,
  height: '240px',
  width: '250px',
  offset: '3rem',
  textColor: 'var(--color-white)',
  color: 'var(--surface-card-dark)',
});

const cards = computed<CardItem[]>(() => {
  if (typeof props.items === 'number') {
    return Array.from({ length: props.items }, (_, i) => ({ id: i }));
  }
  if (Array.isArray(props.items)) {
    return props.items as CardItem[];
  }
  return [];
});

const numberOfCards = computed(() => cards.value.length);
const activeIndex = ref(0);

const getStyle = (index: number) => {
  const N = numberOfCards.value;
  if (N === 0) return {};

  const diff = (index - activeIndex.value + N) % N;
  const depthStep = N - 1 - diff;

  return {
    top: `calc(var(--card-offset) * ${depthStep})`,
    zIndex: depthStep + 1,
    transform: `scale(${1 - diff * 0.05})`,
    filter: `brightness(${1 - diff * 0.1})`,
  };
};

const selectCard = (index: number) => {
  activeIndex.value = index;
};
</script>

<template>
  <section class="stack-layout">
    <section class="cards-wrapper">
      <figure
        v-for="(card, index) in cards"
        :key="index"
        class="card"
        :style="getStyle(index)"
        tabindex="0"
        role="button"
        :aria-label="`Stack card ${index + 1}`"
        @click="selectCard(index)"
        @keydown.enter="selectCard(index)"
        @keydown.space.prevent="selectCard(index)"
      >
        <img
          v-if="card?.image"
          :src="card.image"
          class="card-bg"
          :alt="`Card visual ${index + 1}`"
        />

        <div class="pill-badge">
          <slot :name="`badge-${index + 1}`">
            {{ String(index + 1).padStart(2, '0') }}
          </slot>
        </div>

        <article class="card-content">
          <slot :name="`card-${index + 1}`"></slot>
        </article>
      </figure>
    </section>
  </section>
</template>

<style scoped>
.stack-layout {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: v-bind(height);
  padding: 0;
  margin: 0;
}

.cards-wrapper {
  height: 100%;
  width: v-bind(width);
  position: relative;
}

.card {
  --card-offset: v-bind(offset);
  --stack-multiplier: calc(v-bind(numberOfCards) - 1);
  --card-radius: calc(25px + 1.75%);
  margin: 0;

  position: absolute;
  width: 100%;
  height: calc(100% - (var(--card-offset) * var(--stack-multiplier)));

  background-color: v-bind(color);
  border: 1px solid var(--color-charade);
  border-radius: var(--card-radius);
  overflow: hidden;
  cursor: pointer;
  box-shadow: var(--shadow-card);

  transition: all 0.5s cubic-bezier(0.25, 0.8, 0.25, 1);
}

.card:focus-visible {
  outline: 2px solid var(--color-primary);
  outline-offset: 2px;
}

.card-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 0;
}

.pill-badge {
  position: absolute;
  top: 1rem;
  left: 1.5rem;

  padding: clamp(2px, 5dvw, 5px) 0.85rem;
  min-width: 3rem;
  min-height: 1.5rem;

  border: 1px solid var(--color-primary);
  background: var(--color-primary);
  border-radius: var(--radius-pill);

  display: flex;
  justify-content: center;
  align-items: center;

  color: var(--color-primary-contrast);
  font-family: var(--font-family);
  font-weight: var(--font-weight-bold);
  font-size: var(--font-size-small);
  z-index: 2;
}

.card-content {
  position: relative;
  z-index: 1;
  height: 100%;
  width: 100%;
}
</style>
