<script setup>
    import shapes from '@/assets/shapes.png'
    import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
</script>

<template>
  <div class="hero">
    <div class="container">
      <div class="hero__content">
        <div class="hero__container | flex-container align-items-center justify-content-between">
        <div class="left-col">
          <h1>Your All-in-One Digital Solution</h1>
          <p>At VantaBlack Technologies, we help businesses and individuals thrive in the digital world. Whether you need a stunning website, effective social media strategies, or reliable tech support, we've got you covered!</p>
          <RouterLink to="/contact" class="btn">Contact us</RouterLink>
        </div>
        <div class="right-col">
          <img :src="shapes" alt="">
        </div>
      </div>
      <div class="features">
          <div class="features__container | flex-container justify-content-between">
            <div class="feature | border-outline">
              <h2>Comprehensive Services</h2>
              <p>From website development to computer repairs, we handle it all.</p>
            </div>
            <div class="feature | border-outline">
              <h2> Custom Solutions</h2>
              <p>Tailored services that fit your unique needs.</p>
            </div>
            <div class="feature | border-outline">
              <h2>Affordable Pricing</h2>
              <p>High-quality service without the premium price tag.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <main>
    <section class="cta-section | bg-solid">
      <div class="container">
        <div class="banner">
          <h2>Let’s Build, Grow & Fix Together!</h2>
          <p>Your digital success starts here. Whether you need a website that stands out, social media that engages, or tech support that keeps you running, we’re ready to help. Let’s turn your vision into reality! </p>
        </div>
        <div class="cards">
          <div class="cards__container | flex-container justify-content-between">
            <div class="card | border-outline">
              <div class="text-content">
                <div class="icon">
                  <FontAwesomeIcon :icon="['fas', 'globe']" />
                </div>
                  <h3>Web Development</h3>
                  <p>Get a modern, responsive, and high-performing website tailored to your brand. Whether it's a business site, e-commerce store, or portfolio, we build it right.</p>
                </div>
                  <RouterLink to="/services" class="btn">Learn More</RouterLink>
              </div>
              <div class="card | border-outline">
                <div class="text-content">
                  <div class="icon">
                    <FontAwesomeIcon :icon="['fas', 'heart']" />
                  </div>
                  <h2>Social Media Management</h2>
                  <p>Elevate your online presence with engaging content, audience growth strategies, and expert social media management. Let’s turn likes into leads!</p>
                </div>
                  <RouterLink to="/services" class="btn">Learn More</RouterLink>
            </div>
            <div class="card | border-outline">
              <div class="text-content">
                <div class="icon">
                  <FontAwesomeIcon :icon="['fas', 'computer']" />
                </div>
                <h2> Computer Repairs & Troubleshooting</h2>
                <p>Is your computer slow, glitching, or refusing to turn on? Our tech experts diagnose and fix issues fast, so you can get back to work.</p>
              </div>
                <RouterLink to="/services" class="btn">Learn More</RouterLink>
            </div>
            </div>
        </div>
      </div>
    </section>
    <section>
      <div class="container">
        <div class="how-we-work">
          <h2>How We Work</h2>
          <p>Get the digital solutions you need without the hassle. <strong>Free consultations</strong> included.</p>
          <div class="list-items">
            <ol>
              <li class="border-outline">
                <h3>Consultations</h3>
                <p>We take the time to understand your goals, challenges, and requirements to craft the best solution for your business.</p>
              </li>
              <li class="border-outline">
                <h3>Strategy & Planning</h3>
                <p>Whether it's a website, social media strategy, or computer troubleshooting, we develop a tailored approach to meet your needs.</p>
              </li>
              <li class="border-outline">
                <h3>Execution</h3>
                <p>Our team applies expertise and cutting-edge technology to bring your vision to life, ensuring efficiency, performance, and reliability.</p>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </section>
    <section class="faq">
          <div class="container">
            <div class="flex-container">
              <div class="text-content">
                <h2>Frequently Asked Questions</h2>
              <details>
                <summary>How do I get started with a website or tech service?</summary>
                <p>Simply contact us through our form, and we’ll schedule a free consultation to discuss your needs and recommend the best solution.</p>
              </details>
              <details>
                <summary>How long does it take to develop a website?</summary>
                <ul>
                  <li>CMS websites: 1-2 weeks</li>
                  <li>Custom-coded websites: 2-4 weeks</li>
                  <li>E-commerce websites: 4+ weeks (depending on complexity)</li>
                </ul>
              </details>
              <details>
                <summary>Do you offer website maintenance?</summary>
                <p>Yes! We provide monthly maintenance services to keep your website running smoothly.</p>
              </details>
              <details>
                <summary>What social media platforms do you manage?</summary>
                <p>We manage Facebook and Instagram but can handle other platforms upon request.</p>
              </details>
              <details>
                <summary>What if I need a custom solution not listed on your website?</summary>
                <p>We can create custom tech solutions tailored to your needs! Contact us, and we’ll discuss the best approach for your project.</p>
              </details>
            </div>
            </div>
          </div>
        </section>
  </main>
</template>

<style scoped>

  h2 {
    line-height: 1.2;
  }

  section {
    padding-block: 4em;
    background: rgb(8,4,17);
    background: linear-gradient(90deg, rgba(8,4,17,1) 0%, rgba(65,78,210,1) 100%);
  }

  .hero {
    padding-block: 4em;
    background: rgb(8,4,17);
    background: linear-gradient(90deg, rgba(8,4,17,1) 0%, rgba(65,78,210,1) 100%);

    .hero__container {
      gap: 4em;

      .btn {
          margin-top: 2em;
      }
    }

    .container,
    .hero__content {
      height: 100%;
      }

      .hero__content {
        display: grid;
        place-content: center;
      }

      .features {
        margin-top: 4em;
      }
  }

  .hero .flex-container,
  .cta-section .flex-container,
  .how-we-work ol {
    flex-direction: column;
  }

  .cta-section .cards__container,
    .how-we-work .list-items {
      margin-top: 3em;
    }

  .cta-section .card {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    .text-content {
      flex-grow: 2;
    }

    .btn {
      margin-inline: auto;
    }
  }

  .cta-section,
  .how-we-work {
    text-align: center;
  }

  .feature h2 {
    font-weight: 900;
    margin-bottom: .25em;
  }

  .banner,
  .how-we-work > p {
    text-align: center;
    line-height: 1.5;
  }

  .banner p {
    max-width: 60ch;
    margin-inline: auto;
  }

  .how-we-work h2,
  .how-we-work > p,
  .faq h2 {
    text-align: center;
  }

  .how-we-work ol {
    list-style: none;
    display: flex;
    justify-content: space-between;
    gap: 3em;
  }

  .cards__container {
    gap: 2em;
  }

  .faq {
    padding-bottom: 6em;
    background-color: var( --color-primary-dark);

    h2 {
      margin-bottom: 2em;
    }

    .flex-container {
      justify-content: center;
    }

    details {
      padding: 2em;
      width: 100%;
      max-width: 900px;
      border: 1px solid var( --color-accent);

      summary {
        font-weight: bold;
        margin-bottom: .5em;
        cursor: pointer;
        }
    }
  }

  @media screen and (min-width: 700px) {
    .faq summary {
      font-size: 2rem;
    }
  }

  @media screen and (min-width: 900px) {
    .hero .flex-container,
    .how-we-work ol {
      flex-direction: row;
  }

    .how-we-work ol {
      gap: 1em;
    }
  }

  @media screen and (min-width: 1200px) {
    .cta-section .flex-container {
      flex-direction: row;
  }

    .hero {
      height: 85vh;
    }

    .cta-section {
      min-height: 100vh;

      .cards__container {
        margin-top: 6em
      }
    }

    .banner {
      font-size: 2rem;
    }

    .how-we-work h2,
    .how-we-work > p,
    .faq h2 {
      font-size: 3rem;
    }
  }






































</style>
