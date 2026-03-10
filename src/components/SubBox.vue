<script setup lang="ts">
    /** TODO */
</script>

<template>
    <article id="side-sub">
        <slot name="content">
            Hello world
        </slot>
    </article>
</template>

<style scoped>
    #side-sub {
        padding: 1rem;
        width: 100%;
        height: 50%;
        border: var(--border-xl) solid var(--color-muted);
        border-radius: calc(var(--radius-lg));
        background-color: var(--color-surface);
    }

    @media (max-width: 780px) {
        #side-sub {
            width: 70%;
            height: 100%;
        }
    }

    @media (max-width: 430px) {
        #side-sub {
            width: 100%;
            height: 100%;
        }
    }

</style>