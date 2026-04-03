<template>
    <section id="page">
        <section id="nav">
            <Navbar :links="details.socials" :avatar="details.avatar" :direction="navDirection" />
        </section>
        <section id="mid">
            <LayoutContainer height="100%" width="100%" main-text-color='var(--color-surface)' image="./main-bg.png"
                main-color='var(--color-surface)' sub-color='var(--color-surface)'>

                <template #main>
                    <section>
                        <h1>{{ details.personal.name }}</h1>
                        <h4 class="hero-role">{{ details.personal.rank }}&nbsp;<em>{{ details.personal.role
                        }}</em>&nbsp;-&nbsp;{{ details.personal.experience }} yrs exp</h4>
                    </section>
                    <section>
                        <h2>About Me</h2>
                        <p id="about-me">{{ details.personal.about }}</p>
                        <hr class="hero-divider">
                        <section class="stats-grid">
                            <figure>
                                <figcaption>Projects Completed</figcaption>
                                <p class="stat-value">{{ details.personal.projects }}<sup>+ </sup></p>
                            </figure>
                            <figure>
                                <figcaption>Experience</figcaption>
                                <p class="stat-value">{{ details.personal.experience }}<sup> yrs </sup></p>
                            </figure>
                        </section>
                    </section>
                </template>
                <template #sub>
                    <TechStackList :skills="details.skills" :perPage="details.settings.skillsPerPage" />
                </template>

            </LayoutContainer>
        </section>
        <section id="side">
            <StackCards width="100%" height="14rem" :items="details.stackCards.cards.length"
                :offset="details.settings.stackCardsOffset">
                <template v-for="(card, index) in details.stackCards.cards" :key="index" v-slot:[`badge-${index+1}`]>
                    <div style="font-weight: 900;">{{ card.badge }}</div>
                </template>

                <template v-for="(card, index) in details.stackCards.cards" :key="index" v-slot:[`card-${index+1}`]>
                    <div
                        style="padding: 1.5rem; display: flex; flex-direction: column; justify-content: center; height: 100%;">
                        <h2 style="margin: 0 0 0.5rem 0; font-family: 'Playfair Display', serif; font-size: 1.25rem;">{{
                            card.title }}</h2>
                        <p style="margin: 0; font-size: 0.85rem; line-height: 1.4; opacity: 0.85;">{{ card.description
                        }}</p>
                    </div>
                </template>
            </StackCards>
            <SubBox>
                <template #content class="contact-section" aria-labelledby="contact-heading">
                    <section class="contact-section" aria-labelledby="contact-heading">
                        <div>
                            <h3 id="contact-heading">
                                <strong>Get In Touch</strong>
                            </h3>
                            <address>
                                <a :href="'mailto:' + details.personal.email">{{ details.personal.emailDisplay }}</a>
                            </address>
                        </div>
                    </section>
                </template>
            </SubBox>
        </section>
    </section>
</template>

<script setup lang="ts">
    import { computed } from "vue";
    import LayoutContainer from "../components/layout/LayoutContainer.vue";
    import Navbar from "../components/nav/Navbar.vue";
    import StackCards from "../components//ui/StackCards.vue";
    import SubBox from "../components/ui/SubBox.vue";
    import TechStackList from "../components/ui/TechStackList.vue";
    import { details } from "../data/details";

    import { useWindowSize } from '@vueuse/core';
    const { width } = useWindowSize();
    const navDirection = computed(() => {
        if (width.value <= 830) return 'row'
        if (width.value > 830) return 'col'
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

    @media (max-width: 830px) {
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

    @media (max-width: 460px) {
        #side {
            flex-direction: column;
        }
    }

    /* ── HERO HEADER ─────────────────────────────── */
    .hero-role {
        font-weight: 700;
        letter-spacing: 0.15rem;
        text-transform: uppercase;
        margin-bottom: 2rem;
    }

    .hero-role em {
        font-style: normal;
        color: var(--color-accent);
    }

    .hero-divider {
        width: 36%;
        height: 3px;
        background: var(--color-accent);
        margin: var(--hr-gap) 0;
    }
/* 
    #about-me{
        font-size: min(1rem,3dvw);
    } */

    /* ── STATS SECTION ───────────────────────────── */
    .stats-section {
        background: var(--color-surface);
        border-radius: 20px;
        padding: 26px 28px;
        border: 1px solid var(--color-muted);
    }

    .stats-grid {
        display: grid;
        grid-template-columns: auto auto;
        gap: calc(min(var(--grid-col-sm), 1dvw));
    }

    .stats-grid figure {
        display: flex;
        flex-direction: column;
        gap: 4px;
    }

    .stat-value {
        font-family: 'Playfair Display', serif;
        /* font-size: calc(2 * var(--p-size)); */
        font-size: 2rem;
        font-weight: 900;
        color: var(--color-text);
        line-height: 1;
    }

    .stat-value sup {
        color: var(--color-accent);
    }

    .stats-grid figcaption {
        font-size: 11px;
        color: var(--color-text);
        font-weight: 600;
        letter-spacing: 0.08em;
        text-transform: uppercase;
    }

    /* ── CONTACT SECTION ─────────────────────────── */
    .contact-section {
        padding: var(--inner-vert-pad-lg) var(--inner-hori-pad-lg);
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .contact-section h3 {
        color: var(--color-muted);
    }

    .contact-section h3 strong {
        font-weight: 900;
    }

    .contact-section address {
        font-weight: 600;
        letter-spacing: 0.2rem;
    }
</style>