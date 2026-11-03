<script setup lang="ts">
import { useWindowSize } from '@vueuse/core';
import { computed } from 'vue';
import { NOTCHED_CORNER_PATH } from '../../constants/svg';
import type { LayoutContainerProps } from '../../types';

withDefaults(defineProps<LayoutContainerProps>(), {
  mainTextColor: 'var(--color-iron)',
  subTextColor: 'var(--color-iron)',
  mainColor: 'var(--surface-card-dark)',
  subColor: 'var(--surface-card-dark)',
  height: '500px',
  width: '600px',
});

const { width } = useWindowSize();
const bigScreen = computed(() => {
  if (width.value <= 460) return false;
  return true;
});
</script>

<template>
  <section class="container">
    <section class="main-content">
      <img v-if="image" :src="image" class="bg-img" alt="Background decoration" />
      <article class="text-content">
        <!-- Exclusion spacers: float fallback to wrap content around the bottom-right sub-box cutout -->
        <div v-if="bigScreen" class="sub-spacer" aria-hidden="true"></div>
        <div v-if="bigScreen" class="sub-pusher" aria-hidden="true"></div>
        <slot name="main">
          Default Main Content
        </slot>
      </article>
    </section>

    <aside class="sub-content">
      <slot name="sub">
        Default Sub Content
      </slot>
    </aside>

    <!-- Clip path fallback definition with path bound from constants -->
    <svg width="0" height="0" class="clip-svg" aria-hidden="true">
      <defs>
        <clipPath id="notched-path" clipPathUnits="objectBoundingBox">
          <path :d="NOTCHED_CORNER_PATH" />
        </clipPath>
      </defs>
    </svg>
  </section>
</template>

<style scoped>
.clip-svg {
  position: absolute;
  pointer-events: none;
}

.container {
  --sub-height: calc(40% - 20px);
  --sub-width: calc(60% - 20px);

  --push-size-top: 1.5rem;
  --push-size-left: 2rem;
  --pusher-width: calc(var(--push-size-left) + var(--sub-width));
  --pusher-height: calc(var(--push-size-top) + var(--sub-height));

  --glob-mobile-height: 100%;
  --glob-mobile-width: 100%;
  --glob-padding: 1.25rem;

  --container-height: v-bind(height);
  --container-width: v-bind(width);
  --container-border-rad: 14px;

  --main-text-color: v-bind(mainTextColor);
  --main-color: v-bind(mainColor);
  --main-border-rad: 14px;
  --main-height: 100%;
  --main-width: 100%;

  --sub-text-color: v-bind(subTextColor);
  --sub-color: v-bind(subColor);
  --sub-border-rad: 20px;
  --sub-bottom: 0px;
  --sub-right: 0px;

  --spacer-width: 0px;
  --spacer-height: 60%;

  border-radius: var(--container-border-rad);
  width: min(var(--container-width), 100%);
  height: var(--container-height);
  position: relative;
}

/* Fallback float trick for text exclusion */
.sub-spacer {
  float: right;
  width: var(--spacer-width);
  height: var(--spacer-height);
}

.sub-pusher {
  float: right;
  clear: right;
  width: var(--pusher-width);
  height: var(--pusher-height);
  border-radius: var(--sub-border-rad);
  background: transparent;
  pointer-events: none;
}

/* Native CSS shape-outside wrapping (CSS Shapes Module) */
@supports (shape-outside: inset(0 0 0 0 round 20px)) or (shape-outside: polygon(0 0, 100% 0, 100% 100%, 0 100%)) {
  .sub-pusher {
    shape-outside: inset(0 0 0 0 round var(--sub-border-rad));
    shape-margin: 0.5rem;
  }
}

.main-content {
  /* Fallback: SVG clip-path trick */
  clip-path: url(#notched-path);
  background: var(--main-color);
  color: var(--main-text-color);
  height: var(--main-height);
  width: var(--main-width);
  box-sizing: border-box;
  position: relative;
}

/* Native CSS Corner Shape (CSS Backgrounds & Borders Level 4) when supported */
@supports (corner-shape: notch) or (corner-bottom-right-shape: notch) {
  .main-content {
    clip-path: none;
    border-radius: var(--main-border-rad);
    border-bottom-right-radius: var(--sub-width) var(--sub-height);
    corner-bottom-right-shape: notch;
    corner-shape: round round notch round;
  }
}

.bg-img {
  filter: brightness(30%);
  position: absolute;
  object-fit: cover;
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;
}

.text-content {
  padding: var(--glob-padding);
  box-sizing: border-box;
  position: relative;
  height: 100%;
  width: 100%;
  z-index: 1;
}

.sub-content {
  border-radius: var(--sub-border-rad);
  background: var(--sub-color);
  color: var(--sub-text-color);
  height: var(--sub-height);
  bottom: var(--sub-bottom);
  width: var(--sub-width);
  right: var(--sub-right);
  position: absolute;
  border: 1px solid var(--color-charade);
  box-shadow: var(--shadow-card);
  overflow: hidden;
  padding: var(--glob-padding);
  justify-content: center;
  align-items: center;
  display: flex;
}

@media (max-width: 520px) {
  .container {
    width: var(--glob-mobile-width);
    height: auto;
    flex-direction: column;
    display: flex;
    gap: 1rem;
  }

  .main-content {
    border-radius: var(--main-border-rad);
    height: auto;
    width: var(--glob-mobile-width);
    min-height: fit-content;
    clip-path: none;
    border: 1px solid var(--color-charade);
    overflow: visible;
    padding-bottom: 1.5rem;
  }

  .sub-content {
    width: var(--glob-mobile-width);
    height: auto;
    min-height: 9rem;
    padding: var(--glob-padding);
    box-sizing: border-box;
    position: relative;
    bottom: auto;
    right: auto;
  }
}
</style>