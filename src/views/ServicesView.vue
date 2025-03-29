<script setup>
  import CTA from '@/components/CTA.vue';
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
</script>

<template>
  <div class="services-hero-container">
    <div class="container">
      <div class="services-hero-container__content">
        <h1>Our Services</h1>
        <p class="tagline">Practical, high-quality tech solutions to help you grow, simplify, and succeed.</p>
      </div>
    </div>
  </div>
  <main>
    <div class="container">
      <div class="services-container">
        <ul>
          <li class="border-outline">
            <div class="icon">
              <FontAwesomeIcon :icon="['fas', 'globe']" />
            </div>
            <h2>Website Design & Hosting</h2>
            <p>Your website is your digital storefront, and we make sure it stands out. Whether you need a simple portfolio, an eCommerce store, or a custom-coded site, we’ve got you covered. Our hosting solutions ensure speed, security, and reliability.</p>
            <ul>
              <li>WordPress | Wix | Squarespace | Shopify | Custom Code</li>
              <li>Fully responsive and optimized for all devices</li>
              <li>SEO-friendly designs to help you get found online</li>
            </ul>
          </li>
          <li class="border-outline">
            <div class="icon">
              <FontAwesomeIcon :icon="['fas', 'heart']" />
            </div>
            <h2>Social Media Content Creation</h2>
            <p>Stay ahead with professional social media content that captures attention and drives engagement. Using Canva, we design custom posts that align with your brand and marketing goals.</p>
            <ul>
              <li>Custom graphics and promotional posts</li>
              <li>Engaging content for Facebook, Instagram, and more</li>
              <li>Brand-consistent templates and visuals</li>
            </ul>
          </li>
          <li class="border-outline">
            <div class="icon">
              <FontAwesomeIcon :icon="['fas', 'computer']" />
            </div>
            <h2>Computer Repairs & Troubleshooting</h2>
            <p>Tech issues slowing you down? We provide expert computer repairs and troubleshooting services, ensuring your devices perform at their best.</p>
            <ul>
              <li>Hardware and software repairs</li>
              <li>System diagnostics and optimization</li>
              <li>Virus removal and data recovery</li>
            </ul>
          </li>
        </ul>
      </div>
      <CTA />
    </div>
  </main>
</template>

<style scoped>

  main {
    color: #000;
    padding-block: 4em;
    background-color: #fff;
  }

  section {
    text-align: center;
    padding-block: 4em;
  }

  h1 {
    margin-bottom: 0px;
  }

  .services-hero-container {
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

    .services-hero-container__content {
      max-width: 50ch;
    }
  }

  .services-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-block: 4em;

    h2 {
      margin-bottom: 1em;
    }

    > ul {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 2em;

      p {
        margin-bottom: 1em;
      }

      li {
        text-align: center;
        position: relative;
        padding: 2em;
        width: min(100%, 450px);
        isolation: isolate;

        .icon {
          font-size: 3rem;
          color: #fff;
          position: absolute;
          top: -50px;
          left: 0;
          right: 0;

        }
      }
    }
  }

  .services-container > ul > li:not(:last-of-type) {
    margin-bottom: 4em;
  }

  .services-container > ul > li::before {
    content: "";
    position: absolute;
    top: -55px;
    transform: translate(-50%);
    background-color: var(--color-primary);
    width: 90px;
    height: 90px;
    border-radius: 50%;
    z-index: -1;
  }

  .services-container ul > li > ul > li {
    font-weight: bold;
    font-size: .976rem;
    padding: 1.5em;
    margin-bottom: 1em;
    background-color: var(--color-light);
    border: none;
    border-radius: 99vw;
    box-shadow: rgba(65, 78, 210, 0.18) 0px 7px 29px 0px;
  }

  @media screen and (min-width: 700px) {
    .services-hero-container {
      height: 90vh;
    }

  }

  @media screen and (min-width: 1778px) {
    .services-container > ul > li {
      margin-bottom: 0px !important;
    }
  }
</style>
