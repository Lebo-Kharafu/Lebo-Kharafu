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
            <LayoutContainer image="../src/assets/inspo/content.jpg" height="100%" width="100%"
                main-text-color="#fa803a" sub-color="#fa803a">

                <template #main>
                    {{ }}
                </template>
                <template #sub>
                    <h1> Bigger Sub stuff</h1>
                </template>

            </LayoutContainer>
        </section>
        <section id="side">
            <StackCards width="100%" height="270px">
                <template #badge-1></template>
                <template #card-1></template>

                <template #badge-2></template>
                <template #card-2></template>

                <template #badge-3></template>
                <template #card-3></template>
            </StackCards>
            <SubBox>
                <template #content>
                    {{ "Hello" }}
                </template>
            </SubBox>
        </section>
    </section>
</template>

<script setup lang="ts">
    import { computed } from "vue";
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