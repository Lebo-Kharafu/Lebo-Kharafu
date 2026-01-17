<script setup lang="ts">
</script>

<template>
  <div class="canvas-sk">
    <div class="center-content">
      <div class="icon-head"></div>
      <div class="icon-body"></div>
    </div>

    <div class="cutout-mask"></div>
  </div>
</template>

<style scoped>
.canvas-sk {
  width: 100%;
  height: 100%;
  background-color: var(--sk-base);
  border-radius: var(--radius);
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  /* overflow: hidden; Removed to ensure smooth rendering of edges */
}

.center-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  /* Moved slightly higher so it doesn't look crowded by the cutout */
  margin-bottom: 60px; 
}

.icon-head { width: 40px; height: 40px; background-color: #d9d9d9; border-radius: 50%; }
.icon-body { width: 70px; height: 40px; background-color: #d9d9d9; border-radius: 20px 20px 10px 10px; }

/* --- THE MATH BEHIND THE GAP --- */
.cutout-mask {
  position: absolute;
  bottom: 0;
  right: 0;
  
  /* 1. SIZE: StyleSelector Size (320x160) + Gap (24) */
  width: 344px;  /* 320 + 24 */
  height: 184px; /* 160 + 24 */
  
  background-color: var(--bg-app); /* Matches background (Black) */
  z-index: 5;

  /* 2. CURVE: Component Radius (40) + Gap (24) = 64px */
  /* This ensures the curve runs exactly parallel to the Style Selector */
  border-top-left-radius: 64px; 
  border-bottom-right-radius: var(--radius); 
  
  /* Optional: Smooth out sub-pixel rendering issues */
  box-shadow: 1px 1px 0 var(--bg-app);
}
</style>