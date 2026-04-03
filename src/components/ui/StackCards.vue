<script setup lang="ts">
import { ref, computed } from 'vue';
import type { CardItem } from '../../types';


const props = withDefaults(
  defineProps<{
    items: number | CardItem[]
    height?: string
    width?: string
    offset?: string
    textColor?: string
    color?: string
  }>(),
  { items: 3, height: '240px', width: '250px', offset: '3rem',
    textColor: 'var(--color-text)', color: 'var(--color-surface)' }
)

const cards = computed(() => {
    if (typeof props.items === 'number') {
        return Array.from({ length: props.items }, (_, i) => ({ id: i }));
    }
    if (Array.isArray(props.items)) {
        return props.items;
    }
    return [];
});

const numberOfCards = computed(() => cards.value.length);
const activeIndex = ref(0);

const getStyle = (index: number) => {
    const N = numberOfCards.value;
    if (N === 0) return {};
    
    const diff = (index - activeIndex.value + N) % N;
    
    const depthStep = (N - 1) - diff;
    
    return {
        top: `calc(var(--card-offset) * ${depthStep})`,
        zIndex: depthStep + 1,
        transform: `scale(${1 - (diff * 0.05)})`,
        filter: `brightness(${1 - (diff * 0.1)})`
    };
}
</script>

<template>
    <section class="stack-layout">
        <section class="cards-wrapper">
            <figure 
                v-for="(card, index) in cards" 
                :key="index"
                class="card" 
                :style="getStyle(index)"
                @click="activeIndex = index"
            >
                <img v-if="card && (card as any).image" :src="(card as any).image" class="card-bg" :alt="'Card ' + (index + 1)" />
                
                <div class="pill-badge">
                    <slot :name="'badge-' + (index + 1)">{{ String(index + 1).padStart(2, '0') }}</slot>
                </div>
                
                <article class="card-content">
                    <slot :name="'card-' + (index + 1)"></slot>
                </article>
            </figure>
        </section>
    </section>
</template>

<style scoped>
    .stack-layout {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
        padding: 0;
        margin: 0;
    }

    .cards-wrapper {
        --stack-multiplier: calc(v-bind(numberOfCards) - 1);
        height: calc(v-bind(height) + (v-bind(offset) * var(--stack-multiplier)));
        width: v-bind(width);
        position: relative;
    }

    .card {
        --card-offset: v-bind(offset);
        --card-radius: calc(var(--radius-xl) + 1.75%);
        margin: 0;

        position: absolute;
        width: 100%;
        height: v-bind(height);
        
        background-color: v-bind(color); 
        border: var(--border-sm) solid var(--color-muted);
        border-radius: var(--card-radius);
        overflow: hidden;
        cursor: pointer;
        
        transition: all 0.5s cubic-bezier(0.25, 0.8, 0.25, 1);
    }

    .card-bg {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        z-index: 0;
    }

    .pill-badge {
        position: absolute;
        top: 1rem;
        left: 2rem;
        
        min-width: 3rem;
        min-height: 1.5rem;

        padding: clamp(2px, 5dvw, 5px);
        
        border: 1px solid var(--color-accent);
        background: var(--color-accent);
        backdrop-filter: blur(5px);
        border-radius: 3rem;
        
        display: flex;
        justify-content: center;
        align-items: center;
        
        color:  var(--color-text);
        font-weight: 700;
        font-size: 0.85rem;
        z-index: 2;
    }

    .card-content {
        position: relative;
        z-index: 1;
        height: 100%;
        width: 100%;
    }
</style>