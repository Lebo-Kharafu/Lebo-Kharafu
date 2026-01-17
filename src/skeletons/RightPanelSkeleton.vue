<script setup lang="ts">
import InspirationStackSkeleton from './InspirationStackSkeleton.vue';
</script>

<template>
  <div class="right-panel-sk">
    <div class="search-bar"></div>

    <div class="stack-wrapper">
       <InspirationStackSkeleton />
    </div>

    <div class="bottom-widget">
        <div class="widget-header">
            <div class="text-line"></div>
            <div class="circle-icon"></div>
        </div>
        <div class="widget-body"></div>
    </div>
  </div>
</template>

<style scoped>
.right-panel-sk {
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: var(--gap);
}

.search-bar {
  height: 50px;
  background-color: var(--sk-base);
  border-radius: 25px;
  width: 100%;
}

.stack-wrapper {
  flex: 1;
  background-color: var(--sk-dark); /* Subtle container background */
  border-radius: var(--radius);
  padding: 10px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
}

.bottom-widget {
  height: 180px;
  background-color: var(--sk-base);
  border-radius: var(--radius);
  padding: 15px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.widget-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.text-line {
    width: 60px; height: 10px; background: #fff; opacity: 0.5; border-radius: 5px;
}

.circle-icon {
    width: 20px; height: 20px; border-radius: 50%; border: 1px solid #fff; opacity: 0.5;
}

.widget-body {
    flex: 1;
    background: linear-gradient(135deg, rgba(255,255,255,0.1), transparent);
    border-radius: 12px;
}
</style>