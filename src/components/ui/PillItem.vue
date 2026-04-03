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
    <span :class="['pill-gen', `pill-${status}`]">
        <p>{{ label }}</p>
    </span>
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
        border: var(--border-xxl) solid var(--color-accent);
        background-color: var(--color-accent);
    }
    
    .pill-inactive {
        color: var(--color-heading);
        border: var(--border-xxl) solid var(--color-heading);
        background-color: var(--color-surface);
    }
</style>