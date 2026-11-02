<script setup lang="ts">
import { Icon } from '@iconify/vue';
import type { NavbarProps } from '../../types';

withDefaults(defineProps<NavbarProps>(), {
  links: () => [
    { icon: 'mdi:github', alt: 'GitHub profile', url: 'https://github.com/Lebo-Kharafu' },
    { icon: 'mdi:linkedin', alt: 'LinkedIn profile', url: 'https://linkedin.com/in/Lebo-Kharafu' },
  ],
  avatar: () => ({ icon: 'mdi-light:home', alt: 'Home link', url: '/' }),
  direction: 'col',
});

const isExternal = (url?: string): boolean => {
  if (!url) return false;
  return url.startsWith('http://') || url.startsWith('https://');
};
</script>

<template>
  <nav :id="`navbar-${direction}`" :class="['nav-gen', `navbar-${direction}`]" aria-label="Main navigation">
    <section :id="`nav-icons-${direction}`" class="nav-icons-group">
      <figure v-for="item in links" :key="item.icon" :class="[`icon-${direction}`]">
        <a
          :href="item.url || '#'"
          :target="isExternal(item.url) ? '_blank' : undefined"
          :rel="isExternal(item.url) ? 'noopener noreferrer' : undefined"
          class="nav-icon"
          :aria-label="item.alt"
        >
          <Icon :icon="item.icon" aria-hidden="true" />
        </a>
      </figure>
    </section>

    <figure v-if="avatar?.icon" id="avatar" :class="[`icon-${direction}`]">
      <a
        :href="avatar.url || '/'"
        :target="isExternal(avatar.url) ? '_blank' : undefined"
        :rel="isExternal(avatar.url) ? 'noopener noreferrer' : undefined"
        class="nav-icon"
        :aria-label="avatar.alt"
      >
        <Icon :icon="avatar.icon" aria-hidden="true" />
      </a>
    </figure>
  </nav>
</template>

<style scoped>
.nav-gen {
  background-color: var(--color-surface);
  border: 1px solid var(--ds-color-charade, rgba(255, 255, 255, 0.08));
  box-shadow: var(--shadow-card);
}

.nav-icon {
  color: var(--color-heading);
  transition: color var(--transition), transform var(--transition), filter var(--transition);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--radius-sm, 4px);
}

.nav-icon:hover {
  color: var(--color-accent);
  filter: drop-shadow(0 0 6px var(--color-accent));
  transform: scale(1.15);
}

.nav-icon:focus-visible {
  outline: 2px solid var(--color-accent);
  outline-offset: 2px;
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

/* Responsive safety fallback so navbar is always horizontal on mobile/tablet */
@media (max-width: 890px) {
  #navbar-col {
    flex-direction: row;
    height: auto;
    min-height: 48px;
    padding: 0.5rem 1rem;
  }

  #nav-icons-col {
    flex-direction: row;
    width: auto;
    gap: clamp(0.5rem, 5dvw, 2rem);
  }

  .icon-col {
    width: clamp(20px, 5dvw, 30px);
    height: clamp(20px, 5dvw, 30px);
  }
}
</style>
