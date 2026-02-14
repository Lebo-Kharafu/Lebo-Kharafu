<template>
  <!--<section id="page">
    <section id="nav">
      <Navbar :links="[
        { icon: 'https://img.icons8.com/?size=65&id=13930&format=png&color=000000', alt: 'image' },
        { icon: 'https://img.icons8.com/?size=65&id=32323&format=png&color=000000', alt: 'image' },
        { icon: 'https://img.icons8.com/?size=65&id=118640&format=png&color=000000', alt: 'image' },
        { icon: 'https://img.icons8.com/?size=65&id=63777&format=png&color=000000', alt: 'image' },
        { icon: 'https://img.icons8.com/?size=65&id=34886&format=png&color=000000', alt: 'image' },
        { icon: 'https://img.icons8.com/?size=100&id=aE4hnRenCYJB&format=png&color=000000', alt: 'image' },
      ]" :avatar="{ icon: './vite.svg', alt: 'image' }",
      :direction="navDirection"
      />
    </section>
    <section id="mid">
      <LayoutContainer image="../src/assets/inspo/content.jpg" height="100%" width="100%" main-text-color="#fa803a"
        sub-color="#fa803a">

        <template #main>
          {{ }}
        </template>
        <template #sub>
          <h1> Bigger Sub stuff</h1>
        </template>

      </LayoutContainer>
    </section>
    <section id="side">
      <StackCards width="100%" height="270px">
        <template #badge-1></template>
        <template #card-1></template>

        <template #badge-2></template>
        <template #card-2></template>

        <template #badge-3></template>
        <template #card-3></template>
      </StackCards>
      <SubBox>
        <template #content>
          {{ "Hello" }}
        </template>
      </SubBox>
    </section>
  </section>-->
  <HomeView />
</template>

<script setup lang="ts">
import HomeView from "./views/HomeView.vue";

</script>


<style scoped>

</style>