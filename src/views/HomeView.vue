<template>
    <section id="page">
        <section id="nav">
            <Navbar :links="[
                { icon: 'mdi:linkedin', alt: 'image' },
                { icon: 'mdi:github', alt: 'image' },
                { icon: 'jam:gitlab', alt: 'image' },
                { icon: 'ic:baseline-tiktok', alt: 'image' },
                { icon: 'mdi:instagram', alt: 'image' },
                { icon: 'simple-icons:kofi', alt: 'image' },
                { icon: 'cib:codewars', alt: 'image' },
            ]" :avatar="{ icon: 'mdi:home', alt: 'image' }" , :direction="navDirection" />
        </section>
        <section id="mid">
            <!-- image="../../public/20260125_153406.jpg"  -->
            <LayoutContainer height="100%" width="100%" main-text-color='var(--color-surface)'
                main-color='var(--color-surface)' sub-color='var(--color-surface)'>

                <template #main>
                    <section>
                        <h1>Lebo Kharafu</h1>
                        <h3 class="hero-role">Junior <em>Software Engineer</em> &nbsp;·&nbsp; 1 yrs exp</h3>
                    </section>
                    <section >
                        <h2>About</h2>
                        <p>{{ aboutText }}</p>
                        <hr>
                        <section class="stats-grid">
                            <figure>
                                <figcaption>Projects Completed</figcaption>
                                <p class="stat-value">2<sup>+</sup></p>
                            </figure>
                            <figure>
                                <figcaption>Experience</figcaption>
                                <p class="stat-value">1<sup>yrs</sup></p>
                            </figure>
                        </section>
                    </section>
                </template>
                <template #sub>

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
            <SubBox>
                <template #content class="contact-section" aria-labelledby="contact-heading">
                    <section class="contact-section" aria-labelledby="contact-heading">
                        <div>
                            <h3 id="contact-heading">
                                Let's build<br>
                                <strong>something great.</strong>
                            </h3>
                            <address>
                                <a href="mailto:alex@alexrivera.dev">alex@alexrivera.dev</a>
                            </address>
                        </div>
                        <a class="cta-link" href="mailto:alex@alexrivera.dev">
                            <!-- <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg> -->
                            Get In Touch
                        </a>
                    </section>
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

    /* ── HERO HEADER ─────────────────────────────── */
    .hero-role {
        font-size: 14px;
        font-weight: 600;
        color: var(--color-muted);
        letter-spacing: 0.12em;
        text-transform: uppercase;
        margin-bottom: 32px;
    }

    .hero-role em {
        font-style: normal;
        color: var(--color-accent);
    }

    /* ── STATS SECTION ───────────────────────────── */
    .stats-section {
        background: var(--color-surface);
        border-radius: 20px;
        padding: 26px 28px;
        border: 1px solid var(--color-muted);
    }

    .stats-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: var(--grid-col-sm);
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
        padding: var(--inner-vert-pad-sm) var(--inner-hori-pad-sm);
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