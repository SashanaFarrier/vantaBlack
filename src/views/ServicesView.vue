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
  <main id="services">
    <div class="container">
      <div class="services-container">
        <ul>
          <li class="border-outline">
            <div class="icon">
              <FontAwesomeIcon :icon="['fas', 'globe']" />
            </div>
            <h3>Website Design & Hosting</h3>
            <div class="text-content">
              <p>Your website is your digital storefront, and we make sure it stands out. Whether you need a simple portfolio, an eCommerce store, or a custom-coded site, we’ve got you covered. Our hosting solutions ensure speed, security, and reliability.</p>
              <ul>
                <li>WordPress | Wix | Squarespace | Shopify | Custom Code</li>
                <li>Fully responsive and optimized for all devices</li>
                <li>SEO-friendly designs to help you get found online</li>
              </ul>
              <RouterLink to="/pricing#web-development" class="btn btn-accent">View Pricing</RouterLink>
            </div>
          </li>
          <li class="border-outline">
            <div class="icon">
              <FontAwesomeIcon :icon="['fas', 'mobile-screen']" />
            </div>
            <h3>Google AppSheet Development</h3>
            <div class="text-content">
              <p>Stay ahead with custom no-code solutions that simplify and automate your business processes. We build Google AppSheet apps tailored to your workflow—whether it’s for tracking inventory or streamlining data collection—no coding required.</p>
              <ul>
                <li>Custom business applications for inventory, CRM, or task management.</li>
                <li>Workflow automation and process optimization.</li>
                <li>Integration with Google Workspace and other tools.</li>
              </ul>
              <RouterLink to="/pricing#appsheet" class="btn btn-accent">View Pricing</RouterLink>
            </div>
          </li>
          <li class="border-outline">
            <div class="icon">
              <FontAwesomeIcon :icon="['fas', 'computer']" />
            </div>
            <h3>Computer Repairs & Troubleshooting</h3>
            <div class="text-content">
              <p>Tech issues slowing you down? We provide expert computer repairs and troubleshooting services, ensuring your devices perform at their best.</p>
              <ul>
                <li>Hardware and software repairs</li>
                <li>System diagnostics and optimization</li>
                <li>Virus removal and data recovery</li>
              </ul>
              <RouterLink to="/pricing#computer" class="btn btn-accent">View Pricing</RouterLink>
            </div>
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

    .text-content {
      display: flex;
      flex-direction: column;
      padding-bottom: 2em;
      height: 100%;

      ul {
        flex-grow: 2;
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

  /* .services-container ul > li > ul > li {
    font-weight: bold;
    font-size: .976rem;
    padding: 1.5em;
    margin-bottom: 1em;
    background-color: var(--color-light);
    border: none;
    border-radius: 99vw;
    box-shadow: rgba(65, 78, 210, 0.18) 0px 7px 29px 0px;
  } */

  .services-container .text-content ul > li {
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
