<template>
    <section id="page">
        <section id="nav">
            <Navbar :links="details.socials" :avatar="details.avatar" :direction="navDirection" />
        </section>
        <section id="mid">
            <LayoutContainer height="100%" width="100%" main-text-color='var(--color-surface)' image="./main-bg.webp"
                main-color='var(--color-surface)' sub-color='var(--color-surface)'>

                <template #main>
                    <section>
                        <h1>{{ details.personal.name }}</h1>
                        <h2 class="hero-role">{{ details.personal.rank }}&nbsp;<em>{{ details.personal.role
                        }}</em>&nbsp;-&nbsp;{{ details.personal.experience }} yrs exp</h2>
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
            <div class="side-top">
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
            </div>
            <ProjectGallery class="side-bottom" :projects="projects" />
        </section>
    </section>
</template>

<script setup lang="ts">
    import LayoutContainer from "../components/layout/LayoutContainer.vue";
    import Navbar from "../components/nav/Navbar.vue";
    import StackCards from "../components/ui/StackCards.vue";
    import TechStackList from "../components/ui/TechStackList.vue";
    import ProjectGallery from "../components/ui/ProjectGallery.vue";
    import { details,projects } from "../data/details";

    import { useResponsive } from "../composables/useResponsive";
    const { navDirection } = useResponsive();
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
        gap: 20px;
        height: 100%;
    }

    .side-top {
        height: 60%;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        flex-shrink: 0;
    }

    .side-bottom {
        max-height: calc(40% - 20px);
        flex-shrink: 0;
    }

    #page {
        max-width: 100%;
        height: calc(100dvh - 1rem);
        padding: 0.5rem;
        display: grid;
        grid-template-columns: auto 2fr 1fr;
        column-gap: 1rem;
        grid-template-areas:
            "nav mid side"
        ;
    }

    @media (max-width: 890px) {

        #mid {
            padding: 0rem 0.5rem;
        }
        
        #page {
            display: grid;
            grid-template-rows: auto 2fr 1fr;
            grid-template-columns: 1fr;
            row-gap: 1rem;
            height: auto;
            min-height: 100%;
            grid-template-areas:
                "nav"
                "mid"
                "side"
            ;
        }

        #nav {
            max-width: none;
            padding: 0rem 0.5rem;
        }

        #side {
            display: flex;
            padding: 0rem 0.5rem;
            flex-direction: row;
            gap: 1.5rem;
            height: auto;
        }

        .side-top {
            flex: 4;
            min-width: 0;
            height: auto;
        }

        .side-bottom {
            flex: 6;
            min-width: 0;
            height: auto;
        }

        .contact-section {
            padding: var(--inner-vert-pad-md) var(--inner-hori-pad-sm);
        }

        .contact-section address {
            word-break: break-all;
        }

    }

    @media (max-width: 460px) {
        #side {
            flex-direction: column;
        }

        .side-top {
            width: 100%;
        }

        .side-bottom {
            width: 100%;
        }
    }

    /* ── HERO HEADER ─────────────────────────────── */
    .hero-role {
        font-size: var(--h4-size);
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

    .contact-section address a {
        color: var(--color-text);
    }

    .contact-section address a:hover {
        color: var(--color-accent);
    }
</style>