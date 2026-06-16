<script setup lang="ts">
defineProps<{
  fullName: string
  year: string
  desc: string
  tags: string[]
  url?: string
  img?: string
}>();

defineEmits<{
  (e: 'close'): void
}>();
</script>

<template>
  <div class="detail">
    <button class="close-btn" @click.stop="$emit('close')">✕</button>
    <div class="title">{{ fullName }}</div>
    <div class="year">{{ year }}</div>
    <p class="desc">{{ desc }}</p>
    <div class="tags">
      <span v-for="tag in tags" :key="tag">{{ tag }}</span>
    </div>
  </div>
</template>

<style scoped>
.detail {
  position: absolute;
  inset: 0;
  background: rgba(20, 20, 41, 0.97);
  backdrop-filter: blur(8px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0.4rem;
  text-align: center;
  border-radius: 3px;
  z-index: 5;
  border: 1px solid rgba(194, 6, 15, 0.3);
  overflow-y: auto;
}

/* Custom Scrollbar for detail text if it overflows */
.detail::-webkit-scrollbar {
  width: 3px;
  background: var(--color-surface);
}
.detail::-webkit-scrollbar-thumb {
  background: var(--color-accent);
  border-radius: 2px;
}

.title {
  font-family: var(--font-display);
  font-size: 0.8rem;
  font-weight: 700;
  color: var(--color-heading);
  line-height: 1.2;
  padding-bottom: 2px;
}

.year {
  font-size: 0.65rem;
  color: var(--color-muted);
  margin-top: 0.05rem;
  font-family: var(--font-body);
}

.desc {
  font-size: 0.7rem;
  color: var(--color-text);
  margin-top: 0.1rem;
  max-width: 90%;
  line-height: 1.4;
  padding-bottom: 0;
  font-family: var(--font-body);
}

.tags {
  display: flex;
  gap: 0.2rem;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 0.2rem;
}

.tags span {
  background: var(--color-surface);
  padding: 0.05rem 0.3rem;
  border-radius: 8px;
  font-size: 0.6rem;
  color: var(--color-accent);
  border: 1px solid rgba(255, 255, 255, 0.06);
  font-family: var(--font-body);
}

.close-btn {
  position: absolute;
  top: 0.1rem;
  right: 0.2rem;
  background: none;
  border: none;
  color: var(--color-muted);
  font-size: 0.8rem;
  cursor: pointer;
  touch-action: manipulation;
  padding: 0.1rem 0.3rem;
  transition: color var(--transition);
  z-index: 6;
}

.close-btn:hover {
  color: var(--color-accent);
}
</style>
