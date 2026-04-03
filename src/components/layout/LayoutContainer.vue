<script setup lang="ts">
    import { useWindowSize } from '@vueuse/core';
  import { computed } from 'vue';
  defineProps({
    mainTextColor: { type: String, default: 'black' },
    subTextColor: { type: String, default: 'black' },
    mainColor: { type: String, default: '#3d3d3d' },
    subColor: { type: String, default: '#3d3d3d' },
    height: { type: String, default: '500px' },
    width: { type: String, default: '600px' },
    image: String,
  });

    const { width } = useWindowSize();
    const bigScreen = computed(() => {
        if (width.value <= 460) return false
        return true
    })
</script>

<template>
  <section class="container">

    <section class="main-content">
      <img v-if="image" :src="image" class="bg-img" />
      <article class="text-content">
        <div class="sub-spacer" v-if="bigScreen"></div>
        <div class="sub-pusher" v-if="bigScreen"></div>
        <slot name="main">
          Default Main-Content
        </slot>
      </article>
    </section>

    <aside class="sub-content">
      <slot name="sub">
        Default Sub-Content
      </slot>
    </aside>

    <svg width="0" height="0" style="position: absolute; pointer-events: none;">
      <defs>
        <clipPath id="notched-path" clipPathUnits="objectBoundingBox">
          <path d="
            M 0, 0.05 
            A 0.05, 0.05 0 0 1 0.05, 0 
            L 0.95, 0 
            A 0.05, 0.05 0 0 1 1, 0.05 
            L 1, 0.55 
            A 0.05, 0.05 0 0 1 0.95, 0.6 
            L 0.45, 0.6 
            A 0.05, 0.05 0 0 0 0.4, 0.65 
            L 0.4, 0.95 
            A 0.05, 0.05 0 0 1 0.35, 1 
            L 0.05, 1 
            A 0.05, 0.05 0 0 1 0, 0.95 
            Z" />
        </clipPath>
      </defs>
    </svg>

  </section>
</template>

<style scoped>
  * {
    --sub-height: calc(40% - 20px);
    --sub-width: calc(60% - 20px);

    --push-size-top: 1.5rem;
    --push-size-left: 2rem;
    --pusher-width: calc(var(--push-size-left) + var(--sub-width));
    --pusher-height: calc(var(--push-size-top) + var(--sub-height));
  }

  .container {
    --glob-mobile-height: 100%;
    --glob-mobile-width: 100%;
    --glob-padding: 1rem;

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

  .main-content {
    clip-path: url(#notched-path);
    background: var(--main-color);
    color: var(--main-text-color);
    height: var(--main-height);
    width: var(--main-width);

    box-sizing: border-box;
    position: relative;
  }

  .bg-img {
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

    padding: var(--glob-padding);
    justify-content: center;
    align-items: center;
    display: flex;
  }

  @media (max-width: 460px) {
    .container {
      width: var(--glob-mobile-width);
      height: var(--glob-mobile-height);
      flex-direction: column;
      display: flex;
      gap: 1rem;
    }

    .main-content {
      border-radius: var(--main-border-rad);
      height: var(--glob-mobile-height);
      width: var(--glob-mobile-width);
      min-height: fit-content;
      clip-path: none;

      overflow: hidden;
    }

    .sub-content {
      width: var(--glob-mobile-width);
      padding: var(--glob-padding);
      box-sizing: border-box;
      position: relative;
      bottom: auto;
      right: auto;
    }
  }
</style>