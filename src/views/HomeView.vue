<script setup>
    import shapes from '@/assets/services-img.png'
    import targetImg from '@/components/icons/target.png'
    import brainstormImg from '@/components/icons/brainstorming.png'
    import consultingImg from '@/components/icons/consulting.png'
    import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

    import CTA from '@/components/CTA.vue';
</script>

<template>
  <div class="hero">
    <div class="container">
      <div class="hero__content">
        <div class="hero__container | flex-container align-items-center justify-content-between">
        <div class="left-col">
          <h1>Your All-in-One Digital Solution</h1>
          <p>At VantaBlack Technologies, we empower small businesses, startups, and individuals to succeed online. From custom websites and no-code AppSheet apps to expert tech support, we provide smart, tailored solutions that work.</p>
          <RouterLink to="/contact" class="btn">Let's Work Together</RouterLink>
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
    <div class="curve-banner"></div>
  </div>
  <main>
    <section class="cta-section" style="color: #000000 !important; background-color: #ffffff !important;">
      <div class="container">
        <div class="banner">
          <h2>Let’s Build, Grow & Fix Together!</h2>
          <p>Ready to level up your digital game? Whether it’s creating a standout website, building a Google AppSheet app to streamline your workflow, or providing reliable tech support to keep you running—we’re ready to help. Let’s turn your vision into reality!</p>
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
                  <RouterLink to="/services#services" class="btn">Learn More</RouterLink>
              </div>
              <div class="card | border-outline">
                <div class="text-content">
                  <div class="icon">
                    <FontAwesomeIcon :icon="['fas', 'mobile-screen']" />
                  </div>
                  <h3>Google AppSheet Development</h3>
                  <p>Ideal for businesses looking to automate processes without complex coding.</p>
                </div>
                  <RouterLink to="/services#services" class="btn">Learn More</RouterLink>
            </div>
            <div class="card | border-outline">
              <div class="text-content">
                <div class="icon">
                  <FontAwesomeIcon :icon="['fas', 'computer']" />
                </div>
                <h3> Computer Repairs & Troubleshooting</h3>
                <p>Is your computer slow, glitching, or refusing to turn on? Our tech experts diagnose and fix issues fast, so you can get back to work.</p>
              </div>
                <RouterLink to="/services#services" class="btn">Learn More</RouterLink>
            </div>
            </div>
        </div>
      </div>
    </section>
    <section class="how-we-work">
      <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.dev/svgjs" viewBox="0 0 800 400"><path d="M4.035874366760254,3.5874438285827637C63.1434961271286,58.52017879724503,186.18385162830353,193.96412240743638,245.29147338867188,227.8026885986328C304.39909514904025,261.64125478982925,272.09864768981936,153.1300478363037,245.29147338867188,141.70404052734375C218.48429908752442,130.2780332183838,113.02241333007812,127.33184707641601,135.8744354248047,181.16592407226562C158.72645751953124,235.00000106811524,227.38117607116698,353.0851908874512,338.5650329589844,361.4349670410156C449.7488898468018,369.7847431945801,547.0583018493652,254.57847785949707,589.6860961914062,215.24664306640625C632.3138905334473,175.91480827331543,523.7623129272461,182.87892822265624,512.5560302734375,200.89686584472656C501.3497476196289,218.91480346679688,509.22867706298825,277.5829704284668,543.9461669921875,288.78924560546875C578.6636569213867,299.9955207824707,612.5111825561523,292.3408031082153,654.2600708007812,246.6367645263672C696.0089590454102,200.93272594451904,686.8834143066406,154.53811170578004,714.3497924804688,102.24214935302734C741.8161706542969,49.946187000274655,766.3677368164062,48.345290889739985,766.3677368164062,33.18385696411133C766.3677368164062,18.022423038482668,711.932765197754,29.372197856903078,714.3497924804688,40.35874557495117C716.7668197631835,51.345293292999266,761.0717306518554,68.79820886611938,776.233154296875,78.02690887451172" fill="none" stroke-width="2" stroke="url(&quot;#SvgjsLinearGradient1002&quot;)" stroke-linecap="butt" stroke-dasharray="7 13" stroke-opacity="0.05" transform="matrix(1.0310912041257634,0.17632698070846498,-0.18729141700863783,0.9378175917484732,31.958905816783954,-40.15566375798812)"></path><defs><linearGradient id="SvgjsLinearGradient1002"><stop stop-color="#a3abf3" offset="0"></stop><stop stop-color="#dfe2fc" offset="1"></stop></linearGradient></defs></svg>
      <div class="container">
        <div class="">
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
                  <p>Whether it's a website, Google AppSheet inventory management app, or computer troubleshooting, we develop a tailored approach to meet your needs.</p>
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
                  <p>Simply contact us through our form, and we’ll schedule a free consultation to discuss your needs and recommend the best solution.</p>
                </details>
                <details class="border-outline">
                  <summary>How long does it take to develop a website?</summary>
                  <ul>
                    <li>CMS websites: 1-2 weeks</li>
                    <li>Custom-coded websites: 2-4 weeks</li>
                    <li>E-commerce websites: 4+ weeks (depending on complexity)</li>
                  </ul>
                </details>
                <details class="border-outline">
                  <summary>Do you offer website maintenance?</summary>
                  <p>Yes! We provide monthly maintenance services to keep your website running smoothly.</p>
                </details>
                <details class="border-outline">
                  <summary>What kind of apps can you build with Google AppSheet?</summary>
                  <p>We create custom no-code apps tailored to your needs—whether it's for inventory management or workflow automation. If you have a process, we can help you digitize it with AppSheet.</p>
                </details>
                <details class="border-outline">
                  <summary>What if I need a custom solution not listed on your website?</summary>
                  <p>We can create custom tech solutions tailored to your needs! Contact us, and we’ll discuss the best approach for your project.</p>
                </details>
              </div>
            </div>
          </div>
    </section>
    <div class="curve-banner-svg"></div>
    <section class="footer-cta" style="color: #000000 !important; background-color: #ffffff !important">
      <div class="container">
        <CTA />
      </div>
    </section>
  </main>
</template>

<style scoped>

  section {
    padding-bottom: 4em;
    background: rgb(8,4,17);
    background: linear-gradient(90deg, rgba(8,4,17,1) 0%, rgba(65,78,210,1) 100%);
  }

  .hero {
    padding-top: 4em;
    background: rgb(8,4,17);
    background: linear-gradient(90deg, rgba(8,4,17,1) 0%, rgba(65,78,210,1) 100%);

    .hero__container {
      gap: 6em;

      > * {
        width: 100%
      }

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

  .cta-section {
    background: transparent !important;
  }

  .cta-section .cards__container {
      margin-top: 3em;
    }

  .cta-section .card {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    flex: 1 0 0%;

    svg {
      font-size: 2rem;
    }

    .text-content {
      flex-grow: 2;
    }

    .btn {
      margin-inline: auto;
    }
  }

  .cta-section {
    text-align: center;
  }

  .feature h2 {
    font-weight: 900;
    margin-bottom: .25em;
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
    text-align: center;
    position: relative;
    padding-block: 6em;
    isolation: isolate;

    h2 {
      margin-bottom: 1em;
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

  .cards__container {
    gap: 2em;
  }

  .faq {
    color: black;
    padding-block: 6em;
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
      max-width: 900px;
      margin-bottom: 2em;

      summary {
        font-weight: bold;
        color: var(--color-primary);
        margin-bottom: .5em;
        cursor: pointer;
        }
    }
  }

  .footer-cta {
    font-size: 2.5rem;
    padding-top: 2em;
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
        top: 50%;
        left: 50px;
        width: 3px;
        height: 100%;
        background-color: var(--color-dark);
        z-index: -1;
    }
  }

  @media screen and (min-width: 700px) {
    .faq summary {
      font-size: 2rem;
    }
  }

  @media screen and (min-width: 900px) {
    .how-we-work ol {
      flex-direction: row;
  }

    .how-we-work ol {
      gap: 1em;
    }
  }

  @media screen and (min-width: 1200px) {
      .hero .flex-container,
      .how-we-work ol {
        flex-direction: row;
    }

    .hero__container  .left-col {
        max-width: 500px;
      }

      .features .feature {
        padding-inline: clamp(.5rem, calc(.8rem + .25vw), 2rem);
      }

    .cta-section .flex-container {
      flex-direction: row;
    }

    .cta-section {
      padding-bottom: 8em;

      .cards__container {
        margin-top: 6em
      }
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
