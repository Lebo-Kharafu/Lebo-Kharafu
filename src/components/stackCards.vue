<script setup lang="ts">
import { ref } from 'vue';

    defineProps({
        title: String,
        image1: String,
        image2: String,
        image3: String,
        size: { type: String, default: '150px' },
        offset: { type: String, default: '70px' },
    });

    const activeIndex = ref(1);

    const getPos = (cardIndex:number) => {
        const diff = (cardIndex - activeIndex.value + 3) % 3;
        if (diff === 0) return 'pos-1';
        if (diff === 1) return 'pos-2';
        return 'pos-3';                
    }
</script>

<template class="stack-layout">
        <section class="stack-title" v-if="title">
            {{ title }}
        </section>

        <section class="cards-wrapper">
            
            <figure class="card" :class="getPos(1)">
                <img v-if="image1" :src="image1" class="card-bg" alt="Card background" />
                <div class="pill-badge" @click="activeIndex = 1">01</div>
                <article class="card-content">
                    <slot name="card-1"></slot>
                </article>
            </figure>

            <figure class="card" :class="getPos(2)">
                <img v-if="image2" :src="image2" class="card-bg" alt="Card background" />
                <div class="pill-badge" @click="activeIndex = 2">02</div>
                <article class="card-content">
                    <slot name="card-2"></slot>
                </article>
            </figure>

            <figure class="card" :class="getPos(3)">
                <img v-if="image3" :src="image3" class="card-bg" alt="Card background" />
                <div class="pill-badge" @click="activeIndex = 3">03</div>
                <article class="card-content">
                    <slot name="card-3"></slot>
                </article>
            </figure>

        </section>
</template>

<style scoped>
    .stack-layout {
        flex-direction: column;
        align-items: center; 
        display: flex;
        
        max-width: 100%;
        width: 100%;
    }

    .stack-title {
        width: min(calc(v-bind(size) + 50px), 100%);
        height: 50px;
        
        background-color: white;
        border-radius: 50px;    
        color: #3d3d3d;
        
        justify-content: center; 
        align-items: center;
        display: flex;
        
        transform: scale(0.9); 
        font-weight: bold;
    }

    .cards-wrapper {
        height: calc(v-bind(size) + (v-bind(offset) * 2));
        width: min(calc(v-bind(size) + 50px), 100%);
        position: relative;
    }

    .card {
        --card-offset: v-bind(offset);
        --card-size: v-bind(size);
        --card-text-color: black;
        --card-bg-color: darkgray;
        --card-padding: 2.5rem;
        --card-radius: 25px;

        --pill-border-color: #3d3d3d;
        --pill-text-color: #3d3d3d;
        --pill-height: 50px;
        --pill-width: 25px;

        background-color: var(--card-bg-color);
        border-radius: var(--card-radius);
        height: var(--card-size);
        width: 100%;

        position: absolute;
        overflow: hidden;
        
        transition: all 0.4s ease;
    }

    .pos-1 {
        top: calc(var(--card-offset) * 2);
        z-index: 3;
        transform: scale(1);
    }
    
    .pos-2 {
        top: var(--card-offset);
        z-index: 2;
        transform: scale(0.95);
        opacity: 0.8;
    }
    
    .pos-3 {
        top: 0;
        z-index: 1;
        transform: scale(0.9);
        opacity: 0.6;
    }

    .card-bg {
        position: absolute;
        object-fit: cover;
        height: 100%;
        width: 100%;
        z-index: 0;
        left: 0;
        top: 0;
    }

    .pill-badge {
        position: absolute;
        top: 30px;
        left: 5px;

        height: var(--pill-height);
        width: var(--pill-width);

        border: 2px solid var(--pill-border-color);
        color: var(--pill-text-color);

        justify-content: center;
        border-radius: 50px;
        align-items: center;
        display: flex;

        font-weight: bold;
        font-size: 0.8rem;
        z-index: 2;
        
        background: rgba(255,255,255,0.4); 
        cursor: pointer;
    }

    .card-content {
        padding: var(--card-padding);
        color: var(--card-text-color);
        position: relative;
        height: 100%;
        width: 100%;
        z-index: 1;
    }
</style>