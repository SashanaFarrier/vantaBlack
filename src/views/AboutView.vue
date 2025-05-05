<script setup>
  import icon1 from "@/assets/experience.png"
  import icon2 from "@/assets/target.png"
  import icon3 from "@/assets/idea.png"
  import CTA from "@/components/CTA.vue"
  import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"
  import abstractImg from '@/assets/icon-1.png'
  import servicesImg from '@/assets/services.png'
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
                  <!-- <p>VantaBlack Technologies is your go-to digital partner for smart, modern tech solutions. Founded in 2025, we’re driven by a deep passion for programming, computer hardware, and software. From building sleek websites to solving everyday tech challenges, we bring ideas to life with skill and purpose.</p> -->
                </div>
                <!-- <div class="right-col">
                  <img :src="abstractImg" alt="">
                </div> -->
                <div class="right-col">
                  <p>At Vantablack Technologies, we empower businesses and individuals with cutting-edge digital solutions tailored to their unique needs. Specializing in web design and development, No-code app development with Google AppSheet, and computer repairs & troubleshooting, we bridge the gap between innovation and functionality.</p>
                  <p>Founded in 2025, our mission is to help startups, small businesses, and forward-thinking professionals enhance their digital presence, streamline operations, and resolve technical challenges with efficiency and expertise. </p>
                  <!-- <p>Though we currently operate as a compact, dedicated team—comprising a skilled developer and an experienced computer technician—we are committed to delivering high-quality, scalable solutions to a global clientele. Our vision is to drive success in an increasingly digital world by making advanced technology accessible, reliable, and effortless for all.</p> -->
                  <!-- <p>We are committed to delivering high-quality, scalable solutions to a global clientele. Our vision is to drive success in an increasingly digital world by making advanced technology accessible, reliable, and effortless for all.</p> -->
                </div>
              </div>
              <!-- <div class="target-audience | flex-container">
                <div class="left-col">
                  <img :src="servicesImg" alt="">
                </div>
                <div class="right-col">
                  <h2>Who We Cater To</h2>
                  <p>We cater to small businesses, startups, and individuals who want to establish a strong digital presence, optimize their workflow, or fix technical issues without the hassle. Our goal is to empower businesses and individuals with the right tools, technology, and expertise to succeed in a digital world.</p>
                </div>
              </div> -->
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

        <!-- <section class="why-choose-us-container">
          <div class="container">
            <h2>Why Choose Us?</h2>
            <ul>
          <li class="border-outline">
            <img :src="icon1" alt="">
            <h3>Expertise & Versatility</h3>
            <p>From website development to tech support, we handle it all.</p>
          </li>
          <li class="border-outline">
            <img :src="icon2" alt="">
            <h3>Client-Focused</h3>
            <p>Your success is our priority. We tailor solutions to fit your needs.</p>
          </li>
          <li class="border-outline">
            <img :src="icon3" alt="">
            <h3>Reliability & Innovation</h3>
            <p>We bring bold, future-ready solutions to every project.</p>
          </li>
        </ul>
          </div>
        </section> -->
        <section class="footer-cta">
          <div class="container">
            <p>Let's talk</p>
            <p class="text-xl">Interested in working with us? <RouterLink to="/contact">Get in touch</RouterLink></p>
            <!-- <CTA /> -->
          </div>
        </section>
    </main>
</template>

<style scoped>
  main {
    color: #000;
    /* padding-block: 4em; */
    background-color: #fff;
  }

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
    background-color: rgba(65,78,210,1);
    background: linear-gradient(90deg, rgba(8,4,17,1) 0%, rgba(65,78,210,1) 100%);
    /* background-image: url(/src/assets/banner-2.jpg); */
    /* background-color: var(--color-dark); */
    background-repeat: no-repeat;
    background-size: cover;
    background-blend-mode:screen;
    background-position: 100%;
    padding-block: 4em;
    min-height: 60vh;

    .about-hero-container__content {
      max-width: 80ch;
    }
  }

  .flex-container {
    flex-direction: column;
  }

  .about-us-text {
    /* padding-top: 0px; */
  }

  .who-we-are,
  .why-choose-us {
    /* min-height: 70vh; */
    /* padding-block: 6rem; */
  }

  .who-we-are .flex-container,
  .why-choose-us .flex-container,
  .why-choose-us .flex-container {
    /* align-items: center; */
    justify-content: space-between;
    /* gap: 2em; */

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

  /* .target-audience {
    margin-top: 2em;

    .left-col {
      order: 2;
      margin-top: 2em;
    }
  } */

  .mission-vision {
    color: #fff;
    position: relative;
    padding-block: 10em;
    background-color: var(--color-dark);
    /* background: linear-gradient(90deg, rgba(8,4,17,1) 0%, rgba(65,78,210,1) 100%); */
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

    svg {
      font-size: 2.5rem;
      color: var(--color-primary);
    }
  }

  .why-choose-us-container {
    text-align: center;
  }

  .why-choose-us-container ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 2em;

    li {
      padding: 2.5em;
      max-width: 400px;
      transition: all .25s ease-in-out;

      &:hover {
        cursor: pointer;
        transform: translateY(-5px);
        box-shadow: 5px 10px var(--color-dark);
      }

      img {
        max-width: 100px;
        margin-bottom: 1em;
      }
    }
  }

  .footer-cta {
    padding-block: 10em;

    p {
      /* max-width: 20ch; */
      margin: 0px;
    }

  }

  /* .cta {
    margin-top: 0px;
  } */

  @media screen and (min-width: 700px) {

    section {
      text-align: left;
    }

    .flex-container:not(.who-we-are .flex-container, .why-choose-us .flex-container) {
      flex-direction: row;
      justify-content: space-between;
    }

    .about-hero-container {
      /* height: 90vh; */
      min-height: 60vh;
    }

    .intro .flex-container > * {
        max-width: 45%;
      }

    .target-audience .left-col {
      order: 0;
    }

  }

  @media screen and (min-width: 1200px) {

    h2 {
      /* font-size: 3rem; */
      margin-bottom: .5em;
    }

    .who-we-are .flex-container,
    .why-choose-us .flex-container {
      flex-direction: row;
      justify-content: space-between;
    }

    .who-we-are,
  .why-choose-us {
    /* min-height: 70vh; */

    p:first-child {
      margin-top: 6rem;
    }
    /* padding-block: 6rem; */
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

  /* @media screen and (min-width: 1600px) {
    .about-us-text {

    }
  } */

</style>
