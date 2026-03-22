<script setup lang="ts">
      import { Icon } from '@iconify/vue';
      import type { Link } from '../interfaces/props/Links';
      const props = withDefaults(
        defineProps<{ links: Link[]; avatar: Link; direction: "row" | "col" }>(),
        {
          links: () => [
            { icon: 'mdi:github', alt: 'image' },
            { icon: 'mdi:linkedin', alt: 'image' }
          ],
          avatar: () => ({ icon: 'mdi-light:home', alt: 'image' }),
          direction: 'col'
        }
      );


</script>
    
<template>
  <nav v-if="direction === 'row'" :id="`navbar-${direction}`" class="nav-gen">
    <section :id="`nav-icons-${direction}`">

      <figure v-for="i in props.links" :class="[`icon-${direction}`]">
        <img :src="i.icon" :alt="i.alt">
      </figure>

    </section>
    <figure v-if="props.avatar.icon" id="avatar" :class="[`icon-${direction}`]">
      <Icon :icon="props.avatar.icon" />
    </figure>
  </nav>
  
  <nav v-if="direction === 'col'" :id="`navbar-${direction}`" class="nav-gen">
    <section :id="`nav-icons-${direction}`">
      
      <figure v-for="i in props.links" :class="[`icon-${direction}`]">
        <Icon :icon="i.icon" />
      </figure>
      
    </section>
    <figure v-if="props.avatar.icon" id="avatar" :class="[`icon-${direction}`]">
      <Icon :icon="props.avatar.icon" />
    </figure>
  </nav>
</template>


<style scoped>

  .nav-gen {
    background-color: var(--color-surface);
  }

  .icon-row {
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;

    width: clamp(20px, 5dvw, 30px);
    height: clamp(20px, 5dvw, 30px);
  }

  .icon-row img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  #navbar-row {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;


    height: 100%;
    width: 100%;
    border-radius: 25px;
    padding: 0.5rem;

  }

  #nav-icons-row {
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: clamp(0.5rem, 5dvw, 3rem);
  }

  .icon-col {
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;

    width: clamp(20px, 5dvh, 30px);
    height: clamp(20px, 5dvh, 30px);
  }

  .icon-col img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  #navbar-col {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;


    height: 100%;
    width: 100%;
    padding: 5px;
    border-radius: 25px;
    padding: 0.5rem;
  }

  #nav-icons-col {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: clamp(0.5rem, 5dvh, 3rem);
  }
</style>