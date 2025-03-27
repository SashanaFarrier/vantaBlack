<script setup>
    // import logo from '@/assets/logo.png'

    // import webDevImg from '@/assets/website.png'
    // import socialMediaImg from '@/assets/social-media.png'
    // import computerRepairsImg from '@/assets/computer-repairs.png'
    import abstractImg from '@/assets/icon-1.png'
    import targetIcon from '@/assets/target-icon.png'
    import { onMounted } from "vue"
    import { gsap } from "gsap";
    import { ScrollTrigger } from "gsap/ScrollTrigger";

    gsap.registerPlugin(ScrollTrigger);

    onMounted(() => {
        // let screenSize = gsap.matchMedia();
        //const textContents = gsap.utils.toArray(".text-content text")
        // const imgEls = gsap.utils.toArray(".img")
        //const colors = ["red", "grey", "pink"]

        // screenSize.add("(min-width: 900px)", () => {
    //         imgEls.forEach((el, index) => el.style.zIndex = imgEls.length - index)

    //         gsap.set(".img", {
    //             clipPath: () => "inset(0px 0px 0px 0px)"
    //         })

    //         const animation = gsap.to(".img:not(:last-child)", {
    //             clipPath: () => "inset(100% 0px 0px 0px)",
    //             stagger: 0.5,
    //             ease: "none"
    //         })

    //         ScrollTrigger.create({
    //             trigger: ".grid-container",
    //             start: "top top",
    //             end: "bottom bottom",
    //             scrub: 1,
    //             animation: animation
    //         })
    // })


});


</script>

<template>
    <div class="hero">
    <div class="container">
      <div class="hero-container__content">
        <h1>Your All-in-One Digital Solution</h1>
        <p>At VantaBlack Technologies, we help businesses and individuals thrive in the digital world. Whether you need a stunning website, effective social media strategies, or reliable tech support, we've got you covered!</p>
        <RouterLink to="/contact" class="cta-btn">Contact us</RouterLink>
      </div>
    </div>
  </div>
    <main>
        <!-- <div class="spacer"></div> -->
        <section class="services">
            <div class="cards-container">
            <div class="card">
                <font-awesome-icon icon="globe" />
                <h2>Web Development</h2>
                <p>Get a modern, responsive, and high-performing website tailored to your brand. Whether it's a business site, e-commerce store, or portfolio, we build it right.</p>
                <RouterLink to="/services">Learn More</RouterLink>
            </div>
            <div class="card">
                <h2>Social Media Management</h2>
                <p>Elevate your online presence with engaging content, audience growth strategies, and expert social media management. Let’s turn likes into leads!</p>
                <RouterLink to="/services">Learn More</RouterLink>
            </div>
            <div class="card">
                <h2> Computer Repairs & Troubleshooting</h2>
                <p>Is your computer slow, glitching, or refusing to turn on? Our tech experts diagnose and fix issues fast, so you can get back to work.</p>
                <RouterLink to="/services">Learn More</RouterLink>
            </div>

        </div>
        </section>

        <section class="cta-banner">
            <div class="container">
              <div class="flex-container">
                <div class="left-col">
                  <h3>Let’s Build, Grow & Fix Together!</h3>
                <p>Your digital success starts here. Whether you need a website that stands out, social media that engages, or tech support that keeps you running, we’re ready to help. Let’s turn your vision into reality—get in touch today! </p>
                <RouterLink to="/contact" class="cta-btn">Contact us</RouterLink>
                </div>
                <div class="right-col">
                  <img :src="targetIcon" alt="">
                </div>
              </div>
            </div>
        </section>
        <section class="innovative-solutions">
          <div class="container">
            <div class="flex-container">
              <div class="left-col">
                <h3>Innovative Solutions, <br> Seamless Experiences </h3>
              </div>
              <div class="right-col">
                <p>Discover the expertise and passion behind VantaBlack Technologies as we bring cutting-edge web development, social media management and computer solutions from concept to reality.</p>
              </div>
            </div>
          </div>
        </section>
        <section class="how-we-work">
          <div class="container">
            <h3>How We Work</h3>
            <div class="cards-container">
                <div class="card">
                    <h4>Consultation</h4>
                    <p>We take the time to understand your goals, challenges, and requirements to craft the best solution for your business.</p>
                </div>
                <div class="card">
                    <h4>Strategy & Planning</h4>
                    <p>Whether it's a website, social media strategy, or computer troubleshooting, we develop a tailored approach to meet your needs.</p>
                </div>
                <div class="card">
                    <h4>Execution</h4>
                    <p>Our team applies expertise and cutting-edge technology to bring your vision to life, ensuring efficiency, performance, and reliability.</p>
                </div>
            </div>
          </div>
        </section>
        <section class="more-reasons">
            <div class="container">
              <div class="flex-container">
                <div class="left-col">
                  <img :src="abstractImg" alt="">
                </div>
                <div class="right-col">
                  <h3>More Reasons to Simplify Tech for Your Business</h3>
                <p>Get the digital solutions you need without the hassle. Free consultations included.</p>
                <RouterLink to="/contact" class="cta-btn">Contact us</RouterLink>
                </div>
              </div>
            </div>
        </section>
        <section class="faq">
          <div class="container">
            <div class="flex-container">
              <div class="text-content">
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
    font-size: clamp(1rem, calc(1rem + 2vw), 3rem);
    text-transform: uppercase;
    line-height: 1.2;
    color: #fff;
  }

  h3 {
        font-size: clamp(1.5rem, calc(1rem + 2vw), 3rem);
        /* color: var(--color-primary-lightblue); */
        line-height: 1.2;
    }

  main {
    /* height: 100vh; */

  }

  .flex-container {
    display: flex;
  }

  .hero {
display: flex;
flex-direction: column;
justify-content: center;
background-color: #007EA7;
background-image: url(/src/assets/home-banner.png);
background-repeat: no-repeat;
background-size: cover;
background-blend-mode:soft-light;
height: 85vh;

  .hero-container__content {
    max-width: 50ch;
    p {
        margin: 2em 0px 4em;
    }
  }
}

.services {
    padding: 2em;
    background-color: #007EA7;
    padding-top: 0px;
}

.cards-container {
    display: flex;
    gap: 1em;

}

.how-we-work {
  h3 {
     color: #000;
     margin-bottom: 3em;
  }

  .card:nth-of-type(1)::after {
  font-weight: 900;
  font-size: 4rem;
  color: var(--color-primary-lightblue);
  content: "01";
  position: absolute;
  top: -110px;
  opacity: 0.4;
  /* width: 80px */
}

  .card:nth-of-type(2)::after {
  font-weight: 900;
  font-size: 4rem;
  color: var(--color-primary-lightblue);
  content: "02";
  position: absolute;
  top: -110px;
  opacity: 0.4;
  /* width: 80px */
}

.card:nth-of-type(3)::after {
  font-weight: 900;
  font-size: 4rem;
  color: var(--color-primary-lightblue);
  content: "03";
  position: absolute;
  top: -110px;
  opacity: 0.4;
  /* width: 80px */
}

}

.card {
  position: relative;
    flex-shrink: 1;
    width: 100%;
    padding: 2em;
    border-radius: 1em;

    h3 {
        /* font-size: 1rem; */
        margin-bottom: 3rem;
    }

    p {
        margin: 1em 0px 2em;
    }
}

.card:nth-of-type(1) {
    color: #fff;
    background-color: var( --color-primary-dark);
}



.card:nth-of-type(2) {
    color: #000;
    background-color: var(--color-primary-lightblue);
    margin-top: 2em;
    h2 {
        color: #000;
    }
}


.card:nth-of-type(3) {
    color: #fff;
    background-color: var( --color-secondary-dark);
    margin-top: 4em;
}


.cta-banner,
.more-reasons {
    /* text-align: center; */
    color: #000;
    background-color: #fff;
    height: 100vh;

    .container,
    .flex-container {
      height: 100%;
    }

    .flex-container {
      align-items: center;
      justify-content: space-between;

      & > {
        flex-basis: 100%;
      }
    }
}

.cta-banner .left-col p,
.more-reasons .right-col p  {
  margin: 2em 0px 3em;
}

.innovative-solutions {
  color: #000;
  background-color: var(--color-primary-lightblue);
  padding-block: 6em;

  .left-col,
  .right-col {
    flex-basis: 100%;
  }

  .left-col  {
    margin-right: 12em;
    border-right: 1px solid #cecece;
  }
}

.how-we-work {
        background-color: #fff;
        padding-block: 6em;

        h2 {
            text-align: center;
            color: #000;
            margin-bottom: 2em;
        }
    }


  .more-reasons .left-col {
    /* justify-self: flex-end; */
    flex-basis: 55%;

  }

  .more-reasons .right-col {
    flex-basis: 35%;
  }


.faq {
  background-color: var( --color-primary-dark);
}

.faq .flex-container {
  justify-content: center;
  padding: 6em;
}



/* @media screen and (min-width: 900px) {
    .grid-container {
        grid-template-columns: 1fr 2fr;
    }

    .left-col-wrapper {
        height: 100vh;
    }

    .left-col-wrapper__body {
      display: grid;
      place-content: center;
      text-align: center;
      padding: 1.5rem;

        height: 100%;
    }

     .right-col-wrapper {
        display: flex;
        flex-direction: column;
        position: sticky;
        top: 0;
        width: 100%;
        height: 100vh;
    }


    .images-container .img {
        position: absolute;
        width: 100%;
        height: 100%;
    }

    .images-container img {
      height: 100%;
      object-fit: cover;
    }



} */

</style>
