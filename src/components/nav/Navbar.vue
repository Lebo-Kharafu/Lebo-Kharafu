<script setup lang="ts">
  import { Icon } from '@iconify/vue';
  import type { SocialLink } from '../../types/index';
  const props = withDefaults(
    defineProps<{ links: SocialLink[]; avatar: SocialLink; direction: "row" | "col" }>(),
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
<nav :id="`navbar-${direction}`" :class="['nav-gen', `navbar-${direction}`]">
    <section :id="`nav-icons-${direction}`">
      <figure v-for="i in props.links" :key="i.icon" :class="[`icon-${direction}`]">
        <a :href="i.url" target="_blank" rel="noopener noreferrer" class="nav-icon" :aria-label="i.alt">
          <Icon :icon="i.icon" />
        </a>
      </figure>

    </section>
    <figure v-if="props.avatar.icon" id="avatar" :class="[`icon-${direction}`]">
      <a :href="props.avatar.url" target="_blank" rel="noopener noreferrer" class="nav-icon" :aria-label="avatar.alt">
        <Icon :icon="props.avatar.icon" />
      </a>
    </figure>
  </nav>
</template>

<style scoped>
  .nav-icon {
    color: var(--color-heading);
    transition: color var(--transition), opacity var(--transition);
  }

  .nav-icon:hover {
    color: var(--color-accent);
  }

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

  #navbar-col {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    height: 100%;
    width: 100%;
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