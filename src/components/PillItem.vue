    <script setup lang="ts">
        const props = withDefaults(
            defineProps<{ label: string; status?: "active" | "inactive" }>(),
            {
                label: 'Label',
                status: 'inactive'
            }
        );


</script>
    
<template>
    <section :class="['pill-gen', `pill-${status}`]">
        <p>{{ label }}</p>
    </section>
</template>



<style scoped>

    .pill-gen {
        text-align: center;
        min-width: 3rem;
        padding: 0.125rem 0.25rem;
        border-radius: var(--radius-lg);
    }
    
    .pill-active {
        color: var(--color-heading);
        border: solid var(--border-xxl) var(--color-accent);
        background-color: var(--color-accent);
    }
    
    .pill-inactive {
        color: var(--color-heading);
        border: solid var(--border-xxl) var(--color-heading);
        background-color: var(--color-surface);
    }
</style>