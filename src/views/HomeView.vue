<template>
    <section id="page">
        <section id="nav">
            <Navbar :links="[
                { icon: 'https://img.icons8.com/?size=65&id=13930&format=png&color=000000', alt: 'image' },
                { icon: 'https://img.icons8.com/?size=65&id=32323&format=png&color=000000', alt: 'image' },
                { icon: 'https://img.icons8.com/?size=65&id=118640&format=png&color=000000', alt: 'image' },
                { icon: 'https://img.icons8.com/?size=65&id=63777&format=png&color=000000', alt: 'image' },
                { icon: 'https://img.icons8.com/?size=65&id=34886&format=png&color=000000', alt: 'image' },
                { icon: 'https://img.icons8.com/?size=100&id=aE4hnRenCYJB&format=png&color=000000', alt: 'image' },
            ]" :avatar="{ icon: './vite.svg', alt: 'image' }" , :direction="navDirection" />
        </section>
        <section id="mid">
            <!-- image="../../public/20260125_153406.jpg"  -->
            <LayoutContainer 
                height="100%" width="100%"
                main-text-color='var(--color-surface)' main-color='var(--color-surface)'
                sub-color='var(--color-surface)'>

                <template #main>
                    <section>
                        <h1>Lebo K</h1>
                        <h3>Junior Software Engineer</h3>
                    </section>
                    <section style="padding-top: 10dvh;">
                        <h2>About</h2>
                        <p>{{ aboutText }}</p>
                        <hr>

                    </section>

                </template>
                <template #sub>
                    <h1> Bigger Sub stuff</h1>
                </template>

            </LayoutContainer>
        </section>
        <section id="side">
            <StackCards width="100%" height="240px">
                <template #badge-1></template>
                <template #card-1></template>

                <template #badge-2></template>
                <template #card-2></template>

                <template #badge-3></template>
                <template #card-3></template>
            </StackCards>
            <SubBox >
                <template #content>
                    <p style="font-size: 3rem;">
                        {{ "Hello Subbox" }}
                    </p>
                </template>
            </SubBox>
        </section>
    </section>
</template>

<script setup lang="ts">
    import { computed, ref } from "vue";
    import LayoutContainer from "../components/LayoutContainer.vue";
    import Navbar from "../components/Navbar.vue";
    import StackCards from "../components/StackCards.vue";
    import SubBox from "../components/SubBox.vue";

    import { useWindowSize } from '@vueuse/core';
    const { width } = useWindowSize();
    const navDirection = computed(() => {
        if (width.value <= 780) return 'row'
        if (width.value <= 430) return 'col'
        return 'col'
    })

    const aboutText = ref("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim anim id est laborum.")
</script>


<style scoped>
    #nav {
        grid-area: nav;
        max-width: 60px;
    }

    #mid {
        grid-area: mid;
    }

    #side {
        grid-area: side;
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
    }

    #page {
        max-width: 100%;
        min-height: 100%;
        padding: 0.5rem;
        display: grid;
        grid-template-columns: auto 2fr 1fr;
        column-gap: 1rem;
        grid-template-areas:
            "nav mid side"
        ;
    }

    @media (max-width: 780px) {
        #page {
            display: grid;
            grid-template-rows: auto 2fr 1fr;
            grid-template-columns: 1fr;
            row-gap: 1rem;
            grid-template-areas:
                "nav"
                "mid"
                "side"
            ;
        }

        #nav {
            max-width: none;
        }

        #side {
            display: flex;
            padding: 0rem 0.5rem;
            flex-direction: row-reverse;
            gap: 1.5rem;
        }

    }

    @media (max-width: 430px) {
        #side {
            flex-direction: column;
        }
    }
</style>