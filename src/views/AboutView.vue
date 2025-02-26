<script setup>
  import Footer from "@/components/Footer.vue"
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
        <div class="about-us-text">
          <p>Vantablack Technologies is a Jamaica-based company, owned and operated by a husband-and-wife team dedicated to empowering small businesses and individuals.</p>
        <p>We specialize in building and hosting websites, computer repairs, and social media content creation, providing innovative solutions that elevate your digital presence.</p>
        </div>
        <div class="why-choose-us-container">
        <h2>Why Choose Us?</h2>
        <ul>
          <li>
            <h3>Expertise & Versatility</h3>
            <p>From website development to tech support, we handle it all.</p>
          </li>
          <li>
            <h3>Client-Focused</h3>
            <p>Your success is our priority. We tailor solutions to fit your needs.</p>
          </li>
          <li>
            <h3>Reliability & Innovation</h3>
            <p>We bring bold, future-ready solutions to every project.</p>
          </li>
        </ul>
      </div>
      <div class="cta-container">
        <p>Whether you’re launching a brand, need tech support, or want to enhance your social media presence, we’re here to help. Let’s build something amazing together!</p>
        <div class="cta-btns">
          <a class="cta-btn" href="">Let’s Talk</a>
          <a class="cta-btn outline-btn" href="">Get a Quote</a>
        </div>
      </div>
      </div>


    </main>
  <Footer />
</template>

<style scoped>
  h1 {
    font-size: clamp(1rem, calc(1rem + 2vw), 3rem);
    text-transform: uppercase;
    line-height: 1.2;
    color: #fff;
  }

  main {
    color: #000;
    padding: 4em;
    background-color: #fff;
  }

  main > .container > p,
  .cta-container {
    text-align: center;
  }

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

.about-us-text,
.cta-container {
  text-align: center;
  max-width: 80ch;
  margin-inline: auto;
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
  gap: 2em;

  li {
    /* color: #000; */
    padding: 2.5em;
    max-width: 350px;
    background: rgb(0,126,167);
    background: linear-gradient(27deg, rgba(0,126,167,1) 34%, rgba(202,240,248,1) 95%);
    border: 2px solid #fff;
    border-radius: 2em;
  }
}

.cta-container > .cta-btns {
  display: flex;
  justify-content: center;
  gap: 2em;
  margin-block: 4em;
}




/* @media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
} */
</style>
