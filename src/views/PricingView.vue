
<script setup>
  import { ref, onMounted } from 'vue';

  const activeSection = ref(''); // This will store the id of the active section

  onMounted(() => {
    const services = document.querySelectorAll('.pricing-details__container .service'); // or any sections you want to observe

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          activeSection.value = entry.target.id;
        }
      });
    }, { threshold: 1 });

    services.forEach(section => {
      observer.observe(section);
    });
  });

</script>

<template>
 <div class="pricing-hero-container">
    <div class="container">
      <div class="pricing-hero-container__content">
        <h1>VantaBlack Technologies Pricing</h1>
      </div>
    </div>
  </div>
  <main>
    <section>
      <div class="container">
      <div class="pricing-details__container | flex-container">
        <div class="col nav-col">
          <!-- <h2>Services</h2> -->
          <nav>
            <ul>
              <li><a href="#web-development" :class="{ active: activeSection === 'web-development' }">Web Development</a></li>
              <!-- <li><a href="#web-hosting" :class="{ active: activeSection === 'web-hosting' }">Web Hosting & Domain</a></li> -->
              <li><a href="#appsheet" :class="{ active: activeSection === 'appsheet' }">Google AppSheet Development</a></li>
              <li><a href="#computer" :class="{ active: activeSection === 'computer' }">Computer Repairs & Troubleshooting</a></li>
            </ul>
          </nav>
        </div>
        <div class="col">
          <!-- <div id="web-development" class="service | border-outline">
            <div class="header | flex-container">
              <div class="col-left">
                <h3>Web Development</h3>
              </div>
          </div>
          <div class="body">
            <div class="row | flex-container">
              <div class="col-left">
                <p>Basic Website (5 pages, CMS-based)</p>
              </div>
              <div class="col-right">
                <p>$300/usd</p>
              </div>
            </div>
            <div class="row | flex-container">
              <div class="col-left">
                <p>E-commerce Store (Up to 10 products, CMS-based)</p>
              </div>
              <div class="col-right">
                <p>$500/usd</p>
              </div>
            </div>
            <div class="row | flex-container">
              <div class="col-left">
                <p>Custom-Coded Website (From scratch, tailored to your needs)</p>
              </div>
              <div class="col-right">
                <p>Starting at $600/usd</p>
              </div>
            </div>
            <div class="row | flex-container">
              <div class="col-left">
                <p>Website Maintenance (Updates, security, performance fixes)</p>
              </div>
              <div class="col-right">
                <p>$50/usd monthly</p>
              </div>
            </div>
          </div>
          <RouterLink to="/contact" class="btn">Contact us</RouterLink>
        </div> -->

        <div id="web-development" class="service">
          <ul>
            <li>
              <p>
                <span>Basic Website (Less than 5 pages)</span>
                <span>$150/usd</span>
              </p>
            </li>
            <li>
              <p>
                <span>Website (5 pages or more) </span>
                <span>$300/usd</span>
              </p>
            </li>
            <li>
              <p>
                <span>Shopify E-commerce Store</span>
              <span>$500/usd</span>
              </p>
            </li>
            <li>
              <p>
                <span>WordPress E-commerce Store</span>
              <span>$400/usd</span>
              </p>
            </li>
            <li>
              <p>
                <span>Website Maintenance (Updates, security, performance fixes)</span>
              <span>$15/usd monthly</span>
              </p>
            </li>
          </ul>
        </div>
        <div id="appsheet" class="service">
          <ul>
            <li>
              <p>
                <span>Basic App (Simple data management app)</span>
                <span>$300/usd</span>
              </p>
            </li>
            <li>
              <p>
                <span>Advanced App (Workflow automation, integrations)</span>
                <span>Starting at $700/usd</span>
              </p>
            </li>
          </ul>
        </div>
        <!-- <div id="" class="service | border-outline">
            <div class="header | flex-container">
              <div class="col-left">
                <h3>Web Hosting & Domain Purchase</h3>
              </div>
          </div>
          <div class="body">
            <div class="row | flex-container">
              <div class="col-left">
                <p>Windows and Linux Hosting for any website type.</p>
              </div>
            </div>
            <div class="row | flex-container">
              <div class="col-left">
                <p>Fast and Secure Servers for maximum uptime.</p>
              </div>
            </div>
            <div class="row | flex-container">
              <div class="col-left">
                <p>Free SSL Certificates to protect your website and visitors.</p>
              </div>
            </div>
            <div class="row | flex-container">
              <div class="col-left">
                <p>Daily and Weekly Website Backups to safeguard your data.</p>
              </div>
            </div>
            <div class="row | flex-container">
              <div class="col-left">
                <p>Professional Email Hosting (yourname@yourdomain.com).</p>
              </div>
            </div>
            <div class="row | flex-container">
              <div class="col-left">
                <p>24/7 Monitoring and Security Tools to keep your site protected.</p>
              </div>
            </div>
          </div>
          <RouterLink to="/contact" class="btn">View Pricing</RouterLink>
        </div> -->
        <!-- <div id="appsheet" class="service | border-outline">
          <div class="header | flex-container">
            <div class="col-left">
              <h3>Google AppSheet Development</h3>
            </div>
          </div>
          <div class="body">
            <div class="row | flex-container">
              <div class="col-left">
                <p>Basic App (Simple data management app)</p>
              </div>
              <div class="col-right">
                <p>$400/usd</p>
              </div>
            </div>
            <div class="row | flex-container">
              <div class="col-left">
                <p>Advanced App (Workflow automation, integrations)</p>
              </div>
              <div class="col-right">
                <p>Starting at $700/usd</p>
              </div>
            </div>
          </div>
          <RouterLink to="/contact" class="btn">Contact us</RouterLink>
        </div> -->
      <div id="computer" class="service | border-outline">
        <div class="header | flex-container">
          <div class="col-left">
            <h3>Computer Repairs & Troubleshooting</h3>
          </div>
        </div>
        <div class="body">
          <div class="row | flex-container">
            <div class="col-left">
              <p>Diagnostics & Troubleshooting</p>
            </div>
            <div class="col-right">
              <p>$30/usd</p>
            </div>
          </div>
          <div class="row | flex-container">
            <div class="col-left">
              <p>Software Installation & Optimization</p>
            </div>
            <div class="col-right">
              <p>$50/usd</p>
            </div>
          </div>
          <div class="row | flex-container">
            <div class="col-left">
              <p>Hardware Repair (Pricing based on issue)</p>
            </div>
            <div class="col-right">
              <p>Quote Provided</p>
            </div>
          </div>
        </div>
        <RouterLink to="/contact" class="btn">Contact us</RouterLink>
      </div>
        </div>
      </div>

    </div>
    </section>

  </main>
</template>
<style scoped>
  section {
    color: var(--color-dark);
    background: transparent !important;
  }

  h2 {
    font-size: 1.5rem;
  }

  .pricing-hero-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: rgb(8,4,17);
    background: linear-gradient(90deg, rgba(8,4,17,1) 100%, rgba(65,78,210,1) 0%);
    /* background: linear-gradient(90deg, rgba(8,4,17,1) 0%, rgba(65,78,210,1) 100%); */
    /* background-color: rgba(65,78,210,1);
    background-image: url(/src/assets/banner-2.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    background-blend-mode:screen;
    background-position: 100%; */
    padding-block: 4em;
    min-height: 60vh;

    .pricing-hero-container__content {
      max-width: 50ch;
    }
  }

  .pricing-details__container {
    position: relative;
  }

  .pricing-details__container.flex-container {
    justify-content: space-between;
    /* gap: 4em; */
  }

  .pricing-details__container .nav-col {
    display: none;
    position: sticky;
    top: 50px;
    align-self: flex-start;

    a.active {
      font-weight: bold;
      font-size: 1.5rem;
      color: var(--color-accent);
    }

  }

  .service {
    text-align: center;
    margin-bottom: 2em;
    padding: 2em;
    max-width: 1100px;

    li {
      padding-block: 3rem;
      border-bottom: 1px solid var(--color-light);
    }

    li p {
      display: flex;
      justify-content: space-between;
    }

    &:first-of-type li:first-of-type {
      border-top: 1px solid var(--color-light);
    }

    /* .btn{
      margin-top: 2em;
    } */

  }

 .service .flex-container {
    flex-direction: column;
    align-items: center;
  }
/*
  .body .row {
    color: var(--color-accent);
    padding: 2em;
    margin-bottom: 2em;
    background-color: var(--color-dark);
    box-shadow: rgba(65, 78, 210, 0.18) 0px 7px 29px 0px;
  } */

  /* .col-left {
    font-size: 1rem;

    p {
      color: var(--vt-c-white);
      padding-inline: .5em;
    }
  } */

  /* .col-right p {
    font-size: 1.5rem;
    line-height: 1.2;
    color: var(--color-accent);
    margin-bottom: 0px;
  } */

  /* .body {
    font-weight: bold;
  } */

  @media screen and (min-width: 745px) {
    .pricing-hero-container {
      /* height: 90vh; */
    }

    /* .service {
      text-align: left;
    } */

    .service .flex-container {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      gap: 2em;
    }

    /* .header,
    .body .row {
      padding: 1em 1.5em;
    } */

    /* .body p {
      margin-bottom: 0px;
    } */

    /* .col-right {
      text-align: right;
      justify-self: flex-end;
      width: 40%;
    } */

    /* .body .row {
      border-radius: 99vw;
    } */

  }

  @media screen and (min-width: 1200px) {
    .pricing-details__container .nav-col {
      display: block;
    }
  }

</style>