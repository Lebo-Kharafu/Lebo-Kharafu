<script setup lang="ts">
</script>

<template>
  <div class="style-sk">
    <div class="style-header"></div>
    <div class="style-grid">
      <div class="pill"></div>
      <div class="pill"></div>
      <div class="pill"></div>
      <div class="pill"></div>
      <div class="pill"></div>
      <div class="pill"></div>
    </div>
    <div class="style-footer"></div>
  </div>
</template>

<style scoped>
.style-sk {
  width: 100%;
  height: 100%;
  background-color: var(--sk-dark);
  border-radius: var(--radius);
  padding: 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.style-header {
  width: 50%;
  height: 50px;
  background-color: #d9d9d9;
  border-radius: 6px;
  margin-bottom: 10px;
}

.style-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
}

.pill {
  height: 24px;
  background-color: transparent;
  border: 2px solid var(--sk-light);
  border-radius: 12px;
}

.style-footer {
  width: 80%;
  height: 8px;
  background-color: var(--sk-light);
  border-radius: 4px;
  margin-top: 5px;
}
</style>