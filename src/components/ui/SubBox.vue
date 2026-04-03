<script setup lang="ts">
    /** TODO */
</script>

<template>
    <article class="side-sub">
        <slot name="content">
            Hello world
        </slot>
    </article>
</template>

<style scoped>
    .side-sub {
        padding: 1rem;
        width: 100%;
        height: 50%;
        border: var(--border-xl) solid var(--color-muted);
        border-radius: calc(var(--radius-lg));
        background-color: var(--color-surface);
    }

    @media (max-width: 830px) {
        .side-sub {
            width: 70%;
            height: 100%;
        }
    }

    @media (max-width: 460px) {
        .side-sub {
            width: 100%;
            height: 100%;
        }
    }

</style>