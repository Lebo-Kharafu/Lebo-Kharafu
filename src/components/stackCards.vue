<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps({
    image1: String,
    image2: String,
    image3: String,
    height: { type: String, default: '300px' }, 
    width: { type: String, default: '220px' },
    offset: { type: String, default: '70px' }, 
});

const activeIndex = ref(1);

const getPos = (cardIndex: number) => {
    const diff = (cardIndex - activeIndex.value + 3) % 3;
    if (diff === 0) return 'pos-1'; 
    if (diff === 1) return 'pos-2'; 
    return 'pos-3';                 
}
</script>

<template>
    <section class="stack-layout">
        <section class="cards-wrapper">

            <figure class="card" :class="getPos(1)" @click="activeIndex = 1">
                <img v-if="image1" :src="image1" class="card-bg" alt="Card 1" />
                <div class="pill-badge">01</div>
                <article class="card-content">
                    <slot name="card-1"></slot>
                </article>
            </figure>

            <figure class="card" :class="getPos(2)" @click="activeIndex = 2">
                <img v-if="image2" :src="image2" class="card-bg" alt="Card 2" />
                <div class="pill-badge">02</div>
                <article class="card-content">
                    <slot name="card-2"></slot>
                </article>
            </figure>

            <figure class="card" :class="getPos(3)" @click="activeIndex = 3">
                <img v-if="image3" :src="image3" class="card-bg" alt="Card 3" />
                <div class="pill-badge">03</div>
                <article class="card-content">
                    <slot name="card-3"></slot>
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
        /* padding: 20px; */
    }

    .cards-wrapper {
        height: calc(v-bind(height) + (v-bind(offset) * 2));
        width: v-bind(width);
        position: relative;
    }

    .card {
        --card-offset: v-bind(offset);
        --card-radius: 25px;
        --pill-border: #3d3d3d;
        margin: 0;

        position: absolute;
        width: 100%;
        height: v-bind(height);
        
        background-color: #f0f0f0; 
        border-radius: var(--card-radius);
        overflow: hidden;
        cursor: pointer;
        
        /* box-shadow: 0 10px 25px rgba(0,0,0,0.15); */
        transition: all 0.5s cubic-bezier(0.25, 0.8, 0.25, 1);
    }

    .pos-1 {
        top: calc(var(--card-offset) * 2);
        z-index: 3;
        transform: scale(1);
        filter: brightness(1);
    }

    .pos-2 {
        top: var(--card-offset);
        z-index: 2;
        transform: scale(0.95);
        filter: brightness(0.9);
    }

    .pos-3 {
        top: 0;
        z-index: 1;
        transform: scale(0.9);
        filter: brightness(0.8);
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
        top: 30px;
        left: 15px;
        
        width: 28px;
        height: 50px;
        
        border: 1px solid rgba(0,0,0,0.1);
        background: rgba(255,255,255,0.6);
        backdrop-filter: blur(5px);
        border-radius: 50px;
        
        display: flex;
        justify-content: center;
        align-items: center;
        
        color: #333;
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