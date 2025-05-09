<script setup>
  // import icon1 from "@/assets/experience.png"
  // import icon2 from "@/assets/target.png"
  // import icon3 from "@/assets/idea.png"
  // import CTA from "@/components/CTA.vue"
  // import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"
  // import abstractImg from '@/assets/icon-1.png'
  // import servicesImg from '@/assets/services.png'
</script>

<template>
    <div class="about-hero-container">
      <div class="container">
        <div class="about-hero-container__content">
          <h1>About Vantablack Technologies</h1>
          <p class="tagline">Bringing Bold Solutions to a Digital World</p>
        </div>
      </div>
    </div>
    <main>
        <section class="about-us-text">
          <div class="container">
            <div class="who-we-are">
              <div class="flex-container">
                <div class="left-col">
                  <h2>Who We Are</h2>
                </div>
                <div class="right-col">
                  <p>At Vantablack Technologies, we empower businesses and individuals with cutting-edge digital solutions tailored to their unique needs. Specializing in web design and development, No-code app development with Google AppSheet, and computer repairs & troubleshooting, we bridge the gap between innovation and functionality.</p>
                  <p>Founded in 2025, our mission is to help startups, small businesses, and forward-thinking professionals enhance their digital presence, streamline operations, and resolve technical challenges with efficiency and expertise. </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class="why-choose-us">
          <div class="container">
           <div class="flex-container">
            <div class="left-col">
              <h2>Why Choose Us</h2>
            </div>
            <div class="right-col">
              <p>In a world where technology evolves at lightning speed, you need a partner who can keep up—without compromising quality, clarity, or reliability. At Vantablack Technologies, we don’t just provide services; we deliver smart, tailored solutions designed to simplify your digital journey. Whether you're building an online presence, automating workflows, or solving tech challenges, our blend of expertise, dedication, and innovation ensures you get results that matter. Here’s what sets us apart:</p>
            </div>
           </div>
          </div>
          <div class="reasons">
              <ul>
              <li>
                <div class="container">
                  <div class="flex-container">
                    <h3>Expertise & Versatility</h3>
                    <p>We bring a unique blend of technical proficiency and adaptive problem-solving to every project.</p>
                  </div>
                </div>
              </li>
              <li>
                <div class="container">
                  <div class="flex-container">
                    <h3>Client-Focused Approach</h3>
                    <p>Your goals are our priority. We take the time to understand your vision, constraints, and aspirations, crafting solutions that align with your specific needs—not one-size-fits-all templates. </p>
                  </div>
                </div>
              </li>
              <li>
                <div class="container">
                  <div class="flex-container">
                    <h3>Reliability & Innovation</h3>
                    <p>Technology should work for you, not against you. We combine proven methods with forward-thinking tools (like No-code platforms) to deliver dependable, scalable results.</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </section>
        <section class="footer-cta">
          <div class="container">
            <p>Let's talk</p>
            <p class="text-xl">Interested in working with us? <RouterLink to="/contact">Get in touch</RouterLink></p>
          </div>
        </section>
    </main>
</template>

<style scoped>

  section {
    text-align: center;
    padding-block: 5rem;
  }

  h1 {
    margin-bottom: 0px;
  }

  h2 {
    margin-bottom: 1rem;
  }

  .about-hero-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: rgb(8,4,17);
    background: linear-gradient(90deg, rgba(8,4,17,1) 100%, rgba(65,78,210,1) 0%);
    padding-block: 4em;
    min-height: 60vh;

    .about-hero-container__content {
      max-width: 80ch;
    }

    p {
      color: var(--color-accent);
      margin-top: 1rem;
    }
  }

  .flex-container {
    flex-direction: column;
  }

  .about-us-text {
    background: transparent !important;
  }

  .who-we-are .flex-container,
  .why-choose-us .flex-container {
    justify-content: space-between;

    >* {
      flex-basis: 100%;
    }
  }

  .why-choose-us {
    color: var(--color-light);
    position: relative;
    padding-bottom: 0px;
    background-color: var(--color-dark);
    isolation: isolate;

    &::before {
      content: "";
      position: absolute;
      top: 0;
      width: 100%;
      background: inherit;
      height: 80px;
      transform: skew(50deg, -5deg);
      z-index: -1;
    }
  }

  .why-choose-us .reasons {
    padding-top: 5em;

    ul > li {
      padding-block: 5em;
      border-top: 1px solid var(--color-light);
    }
  }

  .footer-cta {
    padding-block: 10em;
    background: transparent !important;

    p {
      margin: 0px;
    }

  }

  @media screen and (min-width: 700px) {

    section {
      text-align: left;
    }

    .flex-container:not(.who-we-are .flex-container, .why-choose-us .flex-container) {
      flex-direction: row;
      justify-content: space-between;
    }

    .about-hero-container {
      min-height: 60vh;
    }

  }

  @media screen and (min-width: 1200px) {

    h2 {
      margin-bottom: .5em;
    }

    .who-we-are .flex-container,
    .why-choose-us .flex-container {
      flex-direction: row;
      justify-content: space-between;
    }

  .who-we-are p:first-child,
  .why-choose-us p:first-child {
    margin-top: 6rem;
  }

  .why-choose-us .reasons {
    padding-top: 10em;

    ul > li {
      padding-block: 10em;
      border-top: 1px solid var(--color-light);
    }
  }

  .footer-cta p {
    max-width: 20ch;
  }
}

</style>
