<script setup lang="ts">
import { ref, computed } from 'vue';
import type { Skill } from "../../types/index";

const props = defineProps<{
    skills: Skill[]
    perPage?: number
}>();

const perPageCount = computed(() => props.perPage || 6);
const currentPage = ref(1);

const totalPages = computed(() => Math.ceil(props.skills.length / perPageCount.value));
const columnsCount = computed(() => Math.ceil(Math.sqrt(perPageCount.value)));
const rowsCount = computed(() => Math.ceil(perPageCount.value / columnsCount.value));
const multiPage = computed(() => totalPages.value > 1);

const paginatedSkills = computed(() => {
    const start = (currentPage.value - 1) * perPageCount.value;
    return props.skills.slice(start, start + perPageCount.value);
});

const prevPage = () => {
    if (currentPage.value > 1) currentPage.value--;
};

const nextPage = () => {
    if (currentPage.value < totalPages.value) currentPage.value++;
};
</script>

<template>
    <section class="skills-section">
        <h3 id="skills-heading">Tech-Stack &amp; Tools</h3>
        
        <div class="list-carousel-container">
            <button class="nav-btn" @click="prevPage" :disabled="currentPage === 1" aria-label="Previous Page" v-if="multiPage">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 18L9 12L15 6" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>
            
            <ul class="skills-list" :style="{ gridTemplateColumns: `repeat(${columnsCount}, 1fr)` }">
                <li v-for="skill in paginatedSkills" :key="skill.lang">{{ skill.lang }}</li>
            </ul>

            <button class="nav-btn" @click="nextPage" :disabled="currentPage === totalPages" aria-label="Next Page" v-if="multiPage">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 18L15 12L9 6" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>
        </div>

        <div class="pagination-indicators" v-if="multiPage">
            <span 
                v-for="page in totalPages" 
                :key="page" 
                class="page-dash"
                :class="{ active: page === currentPage }"
                @click="currentPage = page"
            ></span>
        </div>
    </section>
</template>

<style scoped>
    .skills-section {
        position: relative;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    .skills-heading {
        font-family: 'Playfair Display', serif;
        font-weight: 900;
        line-height: 1.15;
        margin: 0;
    }

    .list-carousel-container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        gap: 0.5rem;
    }

    .nav-btn {
        background: transparent;
        border: 1px solid var(--color-muted);
        color: var(--color-text);
        border-radius: 0.375rem;
        width: 1.875rem;
        height: 1.875rem;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
        cursor: pointer;
        transition: all 0.2s;
        padding: 0;
    }

    .nav-btn svg {
        width: 1rem;
        height: 1rem;
    }

    .nav-btn:hover:not(:disabled) {
        border-color: var(--color-accent);
        background: var(--color-accent);
        color: var(--color-heading);
    }

    .nav-btn:disabled {
        opacity: 0.3;
        cursor: not-allowed;
    }

    .pagination-indicators {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 0.375rem;
        margin-top: -0.25rem;
        width: 100%;
    }

    .page-dash {
        width: 2rem;
        height: 0.25rem;
        border-radius: 0.25rem;
        background: var(--color-muted);
        opacity: 0.4;
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        cursor: pointer;
    }

    .page-dash.active {
        width: 4rem;
        background: var(--color-accent);
        opacity: 1;
    }

    .page-dash:hover:not(.active) {
        opacity: 0.8;
        background: var(--color-text);
    }

    .skills-list {
        list-style: none;
        display: grid; 
        align-content: start;
        align-items: start;
        justify-items: center;
        gap: 0.5rem;
        margin: 0;
        padding: 0;
        min-height: calc(v-bind('rowsCount') * 2.3rem);
        width: calc(v-bind('columnsCount') * 7.8rem); 
        /* min-width: calc(v-bind('columnsCount') * 7.8rem); */
        max-width: 100%; 
        /* flex-shrink: 0;  */
    }

    .skills-list.fallback-list {
        width: 100%;
        max-width: calc(v-bind('columnsCount') * 7.8rem);
        min-width: auto;
    }

    .skills-list li {
        background: var(--color-accent);
        border: var(--border-lg) solid var(--color-muted);
        border-radius: 0.5rem;
        padding: 0.3125rem 0.75rem;
        font-size: 0.75rem;
        font-weight: 600;
        color: var(--color-heading);
        letter-spacing: 0.04em;
        transition: all 0.2s;
        cursor: default;
        height: fit-content; 
    }

    .skills-list li:hover {
        border-color: var(--color-heading);
        letter-spacing: 0.06em;
    }
</style>
