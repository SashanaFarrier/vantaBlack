<script setup>
    import illustrationImg from '@/assets/digital.png'
    import targetImg from '@/components/icons/target.png'
    import brainstormImg from '@/components/icons/brainstorming.png'
    import consultingImg from '@/components/icons/consulting.png'
    import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

    import CTA from '@/components/CTA.vue';

</script>

<template>
  <section class="hero">
    <div class="container">
      <div class="hero__content">
         <div class="flex-container">
          <div class="text">
            <h1>Web & Tech <br>Experience</h1>
            <RouterLink to="/contact" class="btn btn-large">Get in touch</RouterLink>
          </div>
          <div class="hero-img">
            <img :src="illustrationImg" alt="">
          </div>
         </div>
      </div>
    </div>
  </section>
  <main>
    <section class="cta-section" style="color: #000000 !important; background-color: #ffffff !important;">
      <div class="container">
        <div class="banner">
          <h2>Let’s Build, Grow & Fix Together!</h2>
          <p>Ready to level up your digital game? Whether it’s creating a standout website, building a Google AppSheet app to streamline your workflow, or providing reliable tech support or custom PC builds—we’re ready to help. Let’s turn your vision into reality!</p>
          <RouterLink to="/contact" class="btn btn-large">Contact us</RouterLink>
        </div>
      </div>
    </section>
    <section class="how-we-work">
      <div class="container">
          <div class="flex-container">
            <div class="left-col">
              <h2>We believe that accessing reliable digital services should be effortless. Our approach is built around transparency, efficiency, and personalized support.</h2>
            </div>
            <div class="right-col">
              <div class="list-items">
            <ol>
              <li class="">
                <img :src="consultingImg" alt="">
                <div class="text-content">
                  <h3>Consultations</h3>
                  <p>We take the time to understand your goals, challenges, and requirements to craft the best solution for your business.</p>
                </div>
              </li>
              <li class="">
                <img :src="brainstormImg" alt="">
                <div class="text-content">
                  <h3>Strategy & Planning</h3>
                  <p>Precision-tailored blueprints for your digital success. Whether you need a website, an AppSheet workflow automation, or a custom PC build, we architect solutions with your exact goals, budget, and scalability in mind.</p>
                </div>
              </li>
              <li class="">
                <img :src="targetImg" alt="">
                <div class="text-content">
                  <h3>Execution</h3>
                <p>Our team applies expertise and cutting-edge technology to bring your vision to life, ensuring efficiency, performance, and reliability.</p>
                </div>
              </li>
            </ol>
          </div>
            </div>
          </div>
      </div>
    </section>
    <section class="faq">
          <div class="container">
            <div class="flex-container">
              <div class="sticky-container">
                <h3>Frequently Asked Questions</h3>
                <p>Got questions? We’ve got answers. Here are some common questions about our services. Can't find what you're looking for? Don’t hesitate to reach out — we’re happy to help!</p>
              </div>
              <div class="questions">
                <details class="border-outline">
                  <summary>How do I get started with a website or tech service?</summary>
                  Simply contact us through our form, and we’ll schedule a free consultation to discuss your needs and recommend the best solution.
                </details>
                <details class="border-outline">
                  <summary>How long does it take to develop a website?</summary>
                  <ul>
                    <li>
                      <FontAwesomeIcon :icon="['fas', 'circle-check']" />
                      <span>CMS websites: 1-2 weeks</span>
                    </li>
                    <li>
                      <FontAwesomeIcon :icon="['fas', 'circle-check']" />
                      <span>Custom-coded websites: 2-4 weeks</span>
                    </li>
                    <li>
                      <FontAwesomeIcon :icon="['fas', 'circle-check']" />
                      <span>E-commerce websites: 4+ weeks (depending on complexity)</span>
                    </li>
                  </ul>
                </details>
                <details class="border-outline">
                  <summary>Do you offer website maintenance?</summary>
                  Yes! We provide monthly maintenance services to keep your website running smoothly.
                </details>
                <details class="border-outline">
                  <summary>What kind of apps can you build with Google AppSheet?</summary>
                  We create custom no-code apps tailored to your needs—whether it's for inventory management or workflow automation. If you have a process, we can help you digitize it with AppSheet.
                </details>
                <details class="border-outline">
                  <summary>How does the custom PC building process work?</summary>
                  We start with a free consultation to understand your needs (gaming, productivity, content creation, etc.), budget, and performance goals. Then, we design a tailored parts list, source high-quality components, and professionally assemble/test your system. You’ll receive a ready-to-use PC, fine-tuned for your specific requirements.
                </details>
                <details class="border-outline">
                   <summary>Can I request a tech service that’s not on your site?</summary>
                  Yes, we can create custom solutions tailored to your needs! Contact us, and we’ll discuss the best approach for your project.
                </details>
              </div>
            </div>
          </div>
    </section>
    <section class="footer-cta" style="color: #000000 !important; background-color: #ffffff !important">
      <div class="container">
        <CTA />
      </div>
    </section>
  </main>
</template>

<style scoped>
  .hero {
    display: grid;
    place-items: center;
    position: relative;
    min-height: 90vh;
    background: var(--color-dark);
    background: linear-gradient(90deg, rgba(8,4,17,1) 100%, rgba(65,78,210,1) 0%);
    isolation: isolate;

    h1 {
      /* font-size: clamp(1.5rem, calc(2rem + 3vw), 5.61rem); */
    }
  }

  .hero__content {
    text-align: center;
   
  .flex-container {
    flex-direction: column;
    align-items: center;
    gap: 4em;
  }

  .hero-img {
    position: relative;
    margin-inline: auto;
    margin-bottom: 2em;

     &::before {
      content: "";
      position: absolute;
      inset: 0;
      max-width: 400px;
      aspect-ratio: 1;
      display: grid;
      margin-inline: auto;
      align-self: center;
      background: linear-gradient(300deg,var(--color-accent),var(--color-primary),var(--color-dark));
      background-size: 180% 180%;
      animation: gradient-animation 3s ease infinite;
      border-radius: 50%;
      z-index: -1;
      filter: blur(100px);
    }
  }

  }

  .cta-section,
  .how-we-work ol {
    flex-direction: column;
  }

  .cta-section {
    position: relative;
    display: grid;
    place-content: center;
    width: 100%;
    min-height: 100vh;
    justify-content: stretch;
    background-color: transparent !important;
    isolation: isolate;

    &::after {
      content: "";
      position: absolute;
      inset: 0;
      background-image: url(../assets/network.png);
      filter: blur(2px);
      z-index: -1;
    }

    .btn {
      margin-top: 3rem;
    }
  }

  .cta-section {
    text-align: center;
  }

  .banner {
    text-align: center;
    line-height: 1.5;
  }

  .banner p {
    max-width: 60ch;
    margin-inline: auto;
  }

  .how-we-work {
    color: var(--color-accent);
    text-align: center;
    position: relative;
    padding-block: 6em;
    isolation: isolate;

    &::before {
      content: "";
      position: absolute;
      bottom: 0;
      width: 100%;
      background: inherit;
      height: 30vh;
      transform: skew(0deg, 8deg);
      z-index: -1;
    }

    h3 {
      margin-block: 1rem;
    }

    p {
      color: var(--color-light);
    }

    .flex-container {
      flex-direction: column;
      gap: 4em;
    }

    .flex-container >* {
      width: 100%;
    }

    svg {
      position: absolute;
      z-index: -1;
    }

    ol li {
      list-style: none;
      position: relative;
      margin-bottom: 4rem;
      isolation: isolate;
    }

      ol li > img {
        max-width: 100px;
    }
  }

  .faq {
    color: black;
    background: transparent;
    background-color: white;

    h3 {
      font-size: 3rem;
      line-height: 1.2;
    }

    .flex-container {
      flex-direction: column;
      justify-content: space-between;
      gap: 4em;
    }

    details {
      color: var(--color-dark);
      padding: 1em;
      width: 100%;
      max-width: 800px;
      margin-bottom: 2em;

      summary {
        font-weight: bold;
        font-size: clamp(1rem, calc(.5rem + 3vw), 1.69rem);
        color: var(--color-primary);
        cursor: pointer;
       
        list-style-position: outside;
      }

      li {
        display: flex;
        align-items: center;
        margin-bottom: .25rem;
      }

    svg {
      font-size: 1rem;
      color: var(--color-primary);
      margin-right: .5em;
    }

    }
  }

  .footer-cta {
    font-size: 2.5rem;
    padding-bottom: 3em;
    padding-top: 0px;
    background: transparent;
  }

  @media screen and (min-width: 595px) {
    ol li {
      text-align: left;
      display: inline-flex;
      align-items: flex-start;
      gap: 3rem;
    }

    .how-we-work  ol li:not(:nth-of-type(3)):before {
        content: "";
        position: absolute;
        top: 4rem;
        left: 50px;
        width: 3px;
        height: 100%;
        background-color: var(--color-primary);
        z-index: -1;
    }
  }

  @media screen and (min-width: 900px) {

    .hero__content {
      text-align: left;
      .flex-container {
        flex-direction: row;
      }
  }
    .how-we-work ol {
        flex-direction: row;
    }

    .how-we-work ol {
      gap: 1em;
    }
  }

  @media screen and (min-width: 1200px) {
    .cta-section,
    .how-we-work ol {
        flex-direction: row;
    }

    .cta-section .flex-container {
      flex-direction: row;
    }

    .cta-section {
      padding-bottom: 8em;

    }

    .banner {
      font-size: 2rem;
    }

    .how-we-work {
      text-align: left;

      .flex-container {
        flex-direction: row;
        justify-content: space-between;
      }

      h2 {
        max-width: 23ch;
      }

        p {
          max-width: 40ch;
      }

    }

    .faq {
      padding-top: 10rem;
      .flex-container {
      flex-direction: row;
      }

      .sticky-container {
        position: sticky;
        top: 20px;
        align-self: flex-start;
        max-width: 50ch;
      }

    }
  }






































</style>
