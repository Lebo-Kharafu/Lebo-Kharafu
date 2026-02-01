<template>
  <main id="page">
    <section id="nav">
      <Navbar :links="[
        { icon: '../../public/vite.svg', alt: 'image' },
        { icon: '../../public/vite.svg', alt: 'image' },
        { icon: '../../public/vite.svg', alt: 'image' }
      ]" />
    </section>
    <section id="mid">
      <LayoutContainer />
    </section>
    <section id="side">
      <StackCards size="150px" />
    </section>
  </main>
</template>

<script setup lang="ts">
  import LayoutContainer from "./components/LayoutContainer.vue";
  import Navbar from "./components/Navbar.vue";
  import StackCards from "./components/StackCards.vue";
</script>


<style scoped>
  #side {
    min-width: 200px;
  }

  #page {
    display: flex;
    flex-direction: row;
    gap: 1rem;
  }
</style>