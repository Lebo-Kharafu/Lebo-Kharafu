<script setup lang="ts">
</script>

<template>
  <div class="prompt-sk">
    <div class="plus-btn"></div>
    <div class="text-bar"></div>
  </div>
</template>

<style scoped>
.prompt-sk {
  width: 100%;
  height: 100%;
  /* Removed background-color: var(--sk-dark); */
  background-color: transparent; 
  display: flex;
  align-items: center;
  gap: 15px;
  box-sizing: border-box;
}

.plus-btn {
  width: 32px; height: 32px; border-radius: 50%; background-color: #2c2c2c; /* Darker button */
  position: relative;
  display: flex; align-items: center; justify-content: center;
}
.plus-btn::after { content: '+'; color: white; font-weight: bold; font-size: 20px; margin-top: -2px;}

.text-bar {
  flex: 1;
  height: 40px; /* Taller input */
  background-color: rgba(0,0,0,0.2); /* Semi-transparent dark on gray */
  border-radius: 20px;
}
</style>