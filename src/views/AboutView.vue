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
            <div class="intro">
              <div class="who-we-are | flex-container">
                <div class="left-col">
                  <h2>Who We Are</h2>
                  <p>VantaBlack Technologies is your go-to digital partner for smart, modern tech solutions. Founded in 2025, we’re driven by a deep passion for programming, computer hardware, and software. From building sleek websites to solving everyday tech challenges, we bring ideas to life with skill and purpose.</p>
                </div>
                <div class="right-col">
                  <img :src="abstractImg" alt="">
                </div>
              </div>
              <div class="target-audience | flex-container">
                <div class="left-col">
                  <img :src="servicesImg" alt="">
                </div>
                <div class="right-col">
                  <h2>Who We Cater To</h2>
                  <p>We cater to small businesses, startups, and individuals who want to establish a strong digital presence, optimize their workflow, or fix technical issues without the hassle. Our goal is to empower businesses and individuals with the right tools, technology, and expertise to succeed in a digital world.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class="mission-vision">
          <div class="container">
            <div class="flex-container">
              <div class="mission">
                <div class="icon">
                  <FontAwesomeIcon :icon="['fas', 'quote-left']" />
                </div>
                <h2>Our Mission</h2>
                <p>To provide affordable, high-quality technology solutions that help businesses and individuals grow, automate, and thrive in an ever-evolving digital landscape.</p>
              </div>
              <div class="vision">
                <div class="icon">
                  <FontAwesomeIcon :icon="['fas', 'quote-left']" />
                </div>
                <h2>Our Vision</h2>
                <p>To become a go-to tech solutions provider in the digital space, known for innovation, reliability, and customer satisfaction.</p>
              </div>
            </div>
          </div>
        </section>
        <section class="why-choose-us-container">
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
        </section>
        <section>
          <div class="container">
            <CTA />
          </div>
        </section>
    </main>
</template>

<style scoped>
  main {
    color: #000;
    background-color: #fff;
  }

  section {
    text-align: center;
    padding-block: 4em;
  }

  h1 {
    margin-bottom: 0px;
  }

  h2 {
    margin-bottom: 1em;
  }

  .about-hero-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: rgba(65,78,210,1);
    background-image: url(/src/assets/banner-2.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    background-blend-mode:screen;
    background-position: 100%;
    padding-block: 4em;

    .about-hero-container__content {
      max-width: 80ch;
    }
  }

  .flex-container {
    flex-direction: column;
  }

  .why-choose-us-container {
    padding-bottom: 0px;
  }

  .intro .flex-container {
    align-items: center;
    justify-content: space-between;

  }

  .target-audience {
    margin-top: 2em;

    .left-col {
      order: 2;
      margin-top: 2em;
    }
  }

  .mission-vision {
    color: #fff;
    background: rgb(8,4,17);
    background: linear-gradient(90deg, rgba(8,4,17,1) 0%, rgba(65,78,210,1) 100%);

    .flex-container {
      gap: 3em;
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

      img {
        max-width: 100px;
        margin-bottom: 1em;
      }
    }
  }

  .cta {
    margin-top: 0px;
  }

  @media screen and (min-width: 700px) {

    section {
      text-align: left;
    }

    .flex-container {
      flex-direction: row;
      justify-content: space-between;
    }

    .about-hero-container {
      height: 90vh;
    }

    .intro .flex-container > *,
    .mission-vision .flex-container > *  {
        max-width: 45%;
      }

    .target-audience .left-col {
      order: 0;
    }

  }

  @media screen and (min-width: 1200px) {

    h2 {
      font-size: 3rem;
    }

    .intro h2,
    .mission-vision h2 {
      margin-bottom: 0px;
    }
  }

</style>
