<script setup>
  import icon1 from "@/assets/experience.png"
  import icon2 from "@/assets/target.png"
  import icon3 from "@/assets/idea.png"
  import CTA from "@/components/CTA.vue"
  // import Footer from "@/components/Footer.vue"
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
      <div class="container">
        <div class="about-us-text | text-center-mx-width">
          <p>Vantablack Technologies is a Jamaica-based company, owned and operated by a husband-and-wife team dedicated to empowering small businesses and individuals.</p>
        <p>We specialize in building and hosting websites, computer repairs, and social media content creation, providing innovative solutions that elevate your digital presence.</p>
        </div>
        <div class="why-choose-us-container">
        <h2>Why Choose Us?</h2>
        <ul>
          <li>
            <img :src="icon1" alt="">
            <h3>Expertise & Versatility</h3>
            <p>From website development to tech support, we handle it all.</p>
          </li>
          <li>
            <img :src="icon2" alt="">
            <h3>Client-Focused</h3>
            <p>Your success is our priority. We tailor solutions to fit your needs.</p>
          </li>
          <li>
            <img :src="icon3" alt="">
            <h3>Reliability & Innovation</h3>
            <p>We bring bold, future-ready solutions to every project.</p>
          </li>
        </ul>
      </div>
      <CTA />
      </div>
    </main>
  <!-- <Footer /> -->
</template>

<style scoped>
  main {
    color: #000;
    padding-block: 4em;
    background-color: #fff;
  }

  /* main > .container > p,
    .cta-container {
      text-align: center;
    } */

    .about-hero-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: #007EA7;
    background-image: url(/src/assets/banner-2.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    background-blend-mode:soft-light;
    height: 60vh;

    .about-hero-container__content {
      max-width: 50ch;
    }
  }

.about-us-text p {
  margin-bottom: 1em;
}

.why-choose-us-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-block: 4em;

  h2 {
    margin-bottom: 1em;
  }
}

.why-choose-us-container ul {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2em;

  li {
    /* color: #000; */
    text-align: center;
    padding: 2.5em;
    max-width: 450px;
    background: rgb(0,126,167);
    background: linear-gradient(27deg, rgb(93, 207, 245) 34%, rgba(202,240,248,1) 95%);
    border: 2px solid #fff;
    border-radius: 2em;

    img {
      /* display: block; */
      max-width: 100px;
      margin-bottom: 1em;
      /* margin-inline: auto; */
    }
  }
}

</style>
