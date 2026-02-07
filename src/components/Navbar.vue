    <script setup lang="ts">
      import type { Link } from '../interfaces/props/Links';
      const props = withDefaults(
        defineProps<{ links: Link[]; avatar?: Link }>(),
        {
          links: () => [
            { icon: '../../public/vite.svg', alt: 'image' },
            { icon: '../../public/vite.svg', alt: 'image' }
          ],
          avatar: () => ({ icon: '../../src/assets/img/kharafu-high-resolution-logo.ico', alt: 'image' })
        }
      );


</script>
    
<template>
  <nav id="navbar">
    <section id="nav-icons">

      <figure v-for="i in props.links" class="icon">
        <img :src="i.icon" :alt="i.alt">
      </figure>

    </section>
    <figure v-if="props.avatar.icon" id="avatar" class="icon">
      <img :src="props.avatar.icon" :alt="props.avatar.alt">
    </figure>
  </nav>
</template>



<style scoped>

  .icon {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 30px;
    height: 30px;
  }

  .icon img {
    width: 100%;
    height: 100%;
    object-fit: contain; 
  }

  #navbar {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    
    
    height: 100%;
    width: 100%;
    padding: 5px;
    border-radius: 25px;
    
    background-color: #3d3d3d;
  }
  
  #nav-icons{  
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>