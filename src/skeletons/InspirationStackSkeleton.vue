<script setup lang="ts">
</script>

<template>
  <div class="stack-container">
    <div class="card card-3"></div>
    <div class="card card-2"></div>
    <div class="card card-1"></div>
  </div>
</template>

<style scoped>
.stack-container {
  /* Relative parent for absolute children */
  position: relative;
  width: 100%;
  height: 100%;
  /* Push content down slightly to accommodate the stack effect */
  margin-top: 10px; 
}

.card {
  width: 100%;
  height: 110px;
  border-radius: 20px;
  position: absolute;
  left: 0;
  box-shadow: 0 4px 10px rgba(0,0,0,0.2);
  transition: transform 0.3s ease;
}

/* Stacking Logic:
   Card 1 is front/top.
   Card 2 is behind and lower.
   Card 3 is furthest behind.
*/

.card-1 {
  background-color: #d9d9d9; /* Lightest/Front */
  top: 100px;
  z-index: 3;
}

.card-2 {
  background-color: var(--sk-light);
  top: 50px; /* Shifted down */
  /*transform: scale(0.95); /* Slightly smaller */
  z-index: 2;
  opacity: 0.8;
}

.card-3 {
  background-color: var(--sk-base);
  top: 0; /* Shifted further down */
  /*transform: scale(0.90); /* Even smaller */
  z-index: 1;
  opacity: 0.6;
}

.card::after {
    /* Little pill detail */
    content: '';
    position: absolute;
    left: 12px; top: 50%; transform: translateY(-50%);
    width: 15px; height: 30px;
    border-radius: 10px;
    background: rgba(0,0,0,0.1);
}
</style>