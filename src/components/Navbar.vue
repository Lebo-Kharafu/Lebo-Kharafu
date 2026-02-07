    <script setup lang="ts">
      import type { PropType } from 'vue';

      import type { Link } from '../interfaces/props/Links';
      const props = defineProps({
        links: {
          type: Array as PropType<Link[]>,
          default: () => [
            { icon: '../../public/vite.svg', alt: 'image' },
            { icon: '../../public/vite.svg', alt: 'image' }
          ]
        }
      });
</script>
    
<template>
  <nav id="navbar">
    <figure v-for="i in links" class="icon">
      <img :src="i.icon" :alt="i.alt">
    </figure>
  </nav>
</template>



<style scoped>

  .icon {
    border-radius: 50%;
    border: 1px solid black;
    min-width: 45px;
    min-height: 45px;
    max-width: 50px;
    max-height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1px;
  }

  #navbar {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    gap: 1rem;
    max-width: 3rem;
    padding: 5px;
    border-radius: 25px;

    background-color: #3d3d3d;
  }
</style>