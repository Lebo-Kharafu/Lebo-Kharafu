<script setup lang="ts">
import SidebarSkeleton from './SidebarSkeleton.vue';
import MainCanvasSkeleton from './MainCanvasSkeleton.vue';
import PromptBarSkeleton from './PromptBarSkeleton.vue';
import StyleSelectorSkeleton from './StyleSelectorSkeleton.vue';
import RightPanelSkeleton from './RightPanelSkeleton.vue';
</script>

<template>
  <div class="skeleton-layout">
    
    <aside class="sidebar-zone">
      <SidebarSkeleton />
    </aside>

    <main class="center-zone">
      <div class="canvas-layer">
         <MainCanvasSkeleton />
      </div>

      <div class="prompt-layer">
         <PromptBarSkeleton />
      </div>

      <div class="style-layer">
         <StyleSelectorSkeleton />
      </div>
    </main>

    <aside class="right-zone">
      <RightPanelSkeleton />
    </aside>

  </div>
</template>

<style scoped>
.skeleton-layout {
  width: 95vw;
  height: 90vh;
  background: rgba(80, 80, 80, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 40px;
  padding: 24px;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: 80px 1fr 280px; 
  gap: 24px;
}

/* --- CENTER ZONE (LAYERED) --- */
.center-zone {
  position: relative; /* Context for absolute children */
  display: flex;
  flex-direction: column;
}

.canvas-layer {
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  z-index: 1; /* Bottom layer */
}

.prompt-layer {
  position: absolute;
  bottom: 20px;
  left: 20px;
  width: 50%; /* Approx width to not hit the style selector */
  height: 60px;
  z-index: 2;
}

.style-layer {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 320px; /* Fixed width */
  height: 160px; /* Fixed height */
  z-index: 2;
}

/* Sidebar and Right Zone remain standard */
.sidebar-zone { position: relative; z-index: 10; }
.right-zone { display: flex; flex-direction: column; }
</style>