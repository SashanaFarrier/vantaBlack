<script setup>
    // import logo from '@/assets/logo.png'
    
    import webDevImg from '@/assets/website.png'
    import socialMediaImg from '@/assets/social-media.png'
    import computerRepairsImg from '@/assets/computer-repairs.png'
    import { onMounted } from "vue"
    import { gsap } from "gsap";
    import { ScrollTrigger } from "gsap/ScrollTrigger";

    gsap.registerPlugin(ScrollTrigger);

    onMounted(() => {
        let screenSize = gsap.matchMedia();
        //const textContents = gsap.utils.toArray(".text-content text")
        const imgEls = gsap.utils.toArray(".img")
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
                <h3>Let’s Build, Grow & Fix Together!</h3>
                <p>Your digital success starts here. Whether you need a website that stands out, social media that engages, or tech support that keeps you running, we’re ready to help. Let’s turn your vision into reality—get in touch today! </p>
                <RouterLink to="/contact" class="cta-btn">Contact us</RouterLink>
            </div>
        </section>
        <section class="how-we-work">
            <div class="container">
                <h2>How We Work</h2>
                <div class="cards-container">
            <div class="card">
                <font-awesome-icon icon="globe" />
                <h2>Web Development</h2>
                <ol>
                    <li><strong>Consultation </strong>– We understand your business goals and requirements for your website.</li>
                    <li><strong>Strategy & Planning </strong>– We design a website that reflects your brand and meets your objectives, whether it’s for e-commerce or a simple portfolio.</li>
                    <li><strong>Execution </strong>– Our developers bring your site to life with the latest technologies, ensuring responsiveness and performance.</li>
                    <li><strong>Launch & Support </strong>– We launch your website and provide ongoing support, ensuring it stays updated and functional.</li>
                </ol>
            </div>
            <div class="card">
                <h2>Social Media Management</h2>
                <ol>
                    <li><strong>Consultation </strong>– We discuss your brand’s voice and target audience to understand your goals on social media.</li>
                    <li><strong>Strategy & Planning </strong>– We create a content plan and strategy that engages your audience and drives results.</li>
                    <li><strong>Execution </strong>– We handle content creation, scheduling, and community engagement to boost your social presence.</li>
                    <li><strong>Launch & Support </strong>– We analyze performance and adjust strategies for continuous growth, keeping you updated along the way.</li>
                </ol>
            </div>
            <div class="card">
                <h2>Computer Repairs & Troubleshooting</h2>
                <ol>
                    <li><strong>Consultation </strong>– We listen to your tech issues and gather details about your device's problems.</li>
                    <li><strong>Diagnosis & Planning </strong>– We diagnose the problem and outline a repair or solution plan.</li>
                    <li><strong>Execution </strong>– We perform the necessary repairs or troubleshooting efficiently, ensuring your devices run smoothly.</li>
                    <li><strong>Support & Maintenance </strong>– We provide ongoing support and advice to prevent future issues and optimize your systems.</li>
                </ol>
            </div>
            
        </div>
            </div>
        </section>
      <!-- <div class="container">
        <div class="about-us">
            <div class="content">
                <h2>Who We Are & What We Do</h2>
                <p>We are a passionate team dedicated to helping businesses and individuals navigate the digital space with ease. Our expertise spans across web development, social media management, and computer troubleshooting, ensuring that our clients have the technology and online presence they need to succeed.</p>
                <p>From crafting stunning, high-performance websites to managing social media campaigns that drive engagement, we focus on delivering custom solutions that align with your unique goals. Whether you're looking to establish an online presence, grow your audience, or fix technical issues, we’re here to help.</p>
            </div>
        </div>
      </div> -->
    </main>
</template>

<style scoped>

  h2 {
    font-size: clamp(1rem, calc(1rem + 2vw), 3rem);
    text-transform: uppercase;
    line-height: 1.2;
    color: #fff;
  }

  main {
    /* height: 100vh; */
    
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

.card {
    flex-shrink: 1;
    width: 100%;
    padding: 2em;
    border-radius: 1em;

    h2 {
        font-size: 1rem;
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

    h2 {
        color: #000;
    }
}

.card:nth-of-type(3) {
    color: #fff;
    background-color: var( --color-secondary-dark);
}


.cta-banner {
    text-align: center;
    color: #000;
    background-color: #fff;
    padding: 6em;

    h3 {
        font-size: clamp(1.5rem, calc(1rem + 2vw), 3rem);
        color: var(--color-primary-lightblue);
    }

    p {
        margin-bottom: 3em;
    }
}

.how-we-work {
        background-color: var(--color-primary-lightblue);
        padding-block: 6em;

        h2 {
            text-align: center;
            margin-bottom: 2em;
        }

        .card:nth-of-type(2) {
    
            background-color: #fff;

        }
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
