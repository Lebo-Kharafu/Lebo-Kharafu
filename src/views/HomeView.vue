<template>
    <section id="page">
        <section id="nav">
            <Navbar :links="[
                { icon: 'mdi:linkedin', alt: 'image' },
                { icon: 'mdi:github', alt: 'image' },
                { icon: 'jam:gitlab', alt: 'image' },
                { icon: 'cib:codewars', alt: 'image' },
                { icon: 'simple-icons:kofi', alt: 'image' },
                { icon: 'mdi:instagram', alt: 'image' },
                { icon: 'mdi:facebook', alt: 'image' },
                { icon: 'ic:baseline-tiktok', alt: 'image' },
            ]" :avatar="{ icon: 'mdi:home', alt: 'image' }" , :direction="navDirection" />
        </section>
        <section id="mid">
            <LayoutContainer height="100%" width="100%" main-text-color='var(--color-surface)'
                image="../../public/main-bg.png" main-color='var(--color-surface)'
                sub-color='var(--color-surface)'>

                <template #main>
                    <section>
                        <h1>Lebo Kharafu</h1>
                        <h4 class="hero-role">Junior <em>Software Engineer</em> &nbsp;·&nbsp; 1 yrs exp</h4>
                    </section>
                    <section>
                        <h2>About Me</h2>
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
                    <!-- SKILLS -->
                    <section class="skills-section" aria-labelledby="skills-heading">
                        <h3 id="skills-heading">Tech-Stack &amp; Tools</h3>
                        <ul class="skills-list">
                            <li>React</li>
                            <li>Node.js</li>
                            <li>TypeScript</li>
                            <li>Next.js</li>
                            <li>PostgreSQL</li>
                            <li>GraphQL</li>
                            <li>Docker</li>
                            <li>AWS</li>
                            <li>WebAssembly</li>
                            <li>Redis</li>
                        </ul>
                    </section>
                </template>

            </LayoutContainer>
        </section>
        <section id="side">
            <StackCards width="100%" height="14rem">
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
                                <strong>Get In Touch</strong>
                            </h3>
                            <address>
                                <a href="mailto:alex@alexrivera.dev">Kharafu23@gmail.com</a>
                            </address>
                        </div>
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
        if (width.value <= 830) return 'row'
        if (width.value <= 430) return 'col'
        return 'col'
    })

    const aboutText = ref("I studied Computer Science student at University of Witswatersrand. My passion for technology and problem-solving has driven me to explore: Software Development & Design, Cybersecurity, Creative Coding, and recently Machine Learning, where I continuously seek to enhance my skills and knowledge. I am driven by a curiosity to solve complex problems and a commitment to continuous learning. My goal is to one day earn a Turing Award in Computer Science Research.")
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

    @media (max-width: 430px) {
        #side {
            flex-direction: column;
        }
    }

    /* ── HERO HEADER ─────────────────────────────── */
    .hero-role {
        font-weight: 600;
        /* color: var(--color-muted); */
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

    /* ── SKILLS SECTION ──────────────────────────── */
    .skills-section {
        position: relative;
        overflow: hidden;
    }

    .skills-section h3 {
        font-family: 'Playfair Display', serif;
        font-weight: 900;
        line-height: 1.15;
        margin-bottom: 18px;
    }

    .skills-list {
        list-style: none;
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
    }

    .skills-list li {
        background: var(--color-accent);
        border: var(--border-lg) solid var(--color-muted);
        border-radius: 8px;
        padding: 5px 12px;
        font-size: 11.5px;
        font-weight: 600;
        /* color: var(--color-muted); */
        color: var(--color-heading);
        letter-spacing: 0.04em;
        transition: all 0.2s;
        cursor: default;
    }

    .skills-list li:hover {
        /* background: var(--color-heading);  */
        border-color: var(--color-heading);
        /* color: var(--color-heading);  */
        letter-spacing: 0.06em;
    }


</style>