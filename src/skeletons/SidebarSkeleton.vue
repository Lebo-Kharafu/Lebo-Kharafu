<script setup lang="ts">
</script>

<template>
  <div class="sidebar-container">
    <div class="sk-circle logo-sk"></div>

    <div class="toolbar-sk">
      <div class="sk-dot"></div>
      <div class="sk-dot"></div>
      <div class="sk-dot"></div>
      <div class="sk-dot"></div>
      <div class="sk-dot"></div>
      <div class="spacer"></div>
      <div class="sk-dot mini"></div>
    </div>

    <div class="sk-circle profile-sk"></div>
  </div>
</template>

<style scoped>
.sidebar-container {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--gap);
}

.sk-circle {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: var(--sk-base);
}

.toolbar-sk {
  flex: 1;
  width: 50px;
  background-color: var(--sk-dark);
  border-radius: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0;
  gap: 15px;
}

.sk-dot {
  width: 14px;
  height: 14px;
  background-color: #d9d9d9; /* Lighter for icons */
  border-radius: 4px;
  opacity: 0.8;
}

.sk-dot.mini {
  width: 10px;
  height: 10px;
  opacity: 0.5;
}

.spacer {
  flex: 1;
}
</style>