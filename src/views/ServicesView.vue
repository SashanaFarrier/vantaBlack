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
    <section>
      <div class="container">
        <div class="services-container">
          <ul>
            <li class="border-outline">
              <div class="icon">
                <FontAwesomeIcon :icon="['fas', 'globe']" />
              </div>
              <div class="flex-container">
                <div class="text-content">
                <h3>Website Design & Development</h3>
                <p>Your website is your digital storefront, and we make sure it stands out. </p>
                <RouterLink to="/contact" class="btn btn-accent">Contact Us</RouterLink>
              </div>
                <ul class="list-items">
                  <li>
                    <FontAwesomeIcon :icon="['fas', 'circle-check']" />
                    <span>WordPress | Wix | Squarespace | Shopify | Custom Code</span>
                  </li>
                  <li>
                    <FontAwesomeIcon :icon="['fas', 'circle-check']" />
                    <span>Fully responsive and optimized for all devices.</span></li>
                  <li>
                    <FontAwesomeIcon :icon="['fas', 'circle-check']" />
                    <span>SEO-friendly designs to help you get found online.</span></li>
                </ul>
              </div>
            </li>
            <li class="border-outline">
              <div class="icon">
                <FontAwesomeIcon :icon="['fas', 'mobile-screen']" />
              </div>
              <div class="flex-container">
                <div class="text-content">
                <h3>Google AppSheet Development</h3>
                <p>Stay ahead with custom no-code solutions that simplify and automate your business processes.</p>
                <RouterLink to="/contact" class="btn btn-accent">Contact Us</RouterLink>
              </div>
                <ul class="list-items">
                  <li>
                    <FontAwesomeIcon :icon="['fas', 'circle-check']" />
                    <span>Custom business applications for inventory, CRM, or task management.</span>
                    </li>
                  <li>
                    <FontAwesomeIcon :icon="['fas', 'circle-check']" />
                    <span>Workflow automation and process optimization.</span></li>
                  <li>
                    <FontAwesomeIcon :icon="['fas', 'circle-check']" />
                    <span>Integration with Google Workspace and other tools.</span></li>
                </ul>
              </div>
            </li>
            <li class="border-outline">
              <div class="icon">
                <FontAwesomeIcon :icon="['fas', 'computer']" />
              </div>
              <div class="flex-container">
                <div class="text-content">
                 <h3>Computer Repair & Custom Builds</h3>
                 <p>We provide expert computer repairs and troubleshooting services, ensuring your devices perform at their best.</p>
                <RouterLink to="/contact" class="btn btn-accent">Contact Us</RouterLink>
              </div>
                <ul class="list-items">
                  <li>
                    <FontAwesomeIcon :icon="['fas', 'circle-check']" />
                    <span>Hardware and software repairs.</span></li>
                  <li>
                    <FontAwesomeIcon :icon="['fas', 'circle-check']" />
                    <span>System diagnostics and optimization.</span></li>
                  <li>
                    <FontAwesomeIcon :icon="['fas', 'circle-check']" />
                    <span>Virus removal and data recovery.</span></li>
                    <li>
                    <FontAwesomeIcon :icon="['fas', 'circle-check']" />
                    <span>Custom PC Build.</span></li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
    <section class="cta-section">
      <div class="container">
        <CTA />
      </div>
    </section>

  </main>
</template>

<style scoped>
  section {
    --section-gap: 8rem;
    color: var(--color-dark);
    text-align: center;
    padding-block: var(--section-gap);
    background: transparent;
  }

  h1 {
    margin-bottom: 0px;
  }

  .services-hero-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: rgb(8,4,17);
    background: linear-gradient(90deg, rgba(8,4,17,1) 100%, rgba(65,78,210,1) 0%);
    padding-block: 4em;
    min-height: 60vh;

    .services-hero-container__content {
      max-width: 50ch;
    }


    p {
      color: var(--color-accent);
      margin-top: 1rem;
    }
  }

  .services-container > ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 2em;

    h3 {
      font-size: 1.25rem;
    }

    p {
      font-size: 1rem;
      line-height: 1.5;
      margin-bottom: 1em;
    }

    > li {
      position: relative;
      padding-top: 3em;
      padding-bottom: 1em;
      width: min(100%, 450px);
      isolation: isolate;
      transition: all .25s ease-in-out;

      &:hover {
        cursor: pointer;
        transform: translateY(-5px);
        box-shadow: 5px 10px var(--color-dark);
      }

      .flex-container {
        flex-direction: column;
        height: 100%;;
      }

      .icon {
        font-size: 3rem;
        color: #fff;
        position: absolute;
        top: -50px;
        left: 0;
        right: 0;

      }

      a {
        text-align: center;
        width: 100%;
        margin-bottom: 2em;
      }
    }
  }

  .text-content,
  .list-items {
    text-align: left;
  }

  .list-items {
    display: flex;
    flex-direction: column;
    padding-bottom: 2em;

    li {
        display: flex;
        align-items: center;
        margin-bottom: 1em;
      }

    svg {
      font-size: 1.5rem;
      color: var(--color-primary);
      margin-right: 1em;
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

  .services-container .list-items > li {
    font-weight: bold;
    font-size: .976rem;
    border: none;
  }

  .cta-section {
    padding-top: 0px;
  }


  @media screen and (min-width: 1200px) {
    .text-content {
      display: flex;
      flex-direction: column;

      a {
        margin: 0px;
        margin-top: auto;
      }
    }
  }

  @media screen and (min-width: 1778px) {
    .services-container > ul > li {
    margin-bottom: 4em;
  }
  }
</style>
