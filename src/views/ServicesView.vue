<script setup>
  import CTA from '@/components/CTA.vue';
</script>

<template>
  <div class="services-hero-container">
    <div class="container">
      <div class="services-hero-container__content">
        <h1>Our Services</h1>
        <p class="tagline">What We Offer</p>
      </div>
    </div>
  </div>
  <main>
    <div class="container">
      <!-- <div class="about-us-text">
        <p>Vantablack Technologies is a Jamaica-based company, owned and operated by a husband-and-wife team dedicated to empowering small businesses and individuals.</p>
      <p>We specialize in building and hosting websites, computer repairs, and social media content creation, providing innovative solutions that elevate your digital presence.</p>
      </div> -->
      <div class="services-container">
        <ul>
          <li>
            <h2>Website Design & Hosting</h2>
            <p>Your website is your digital storefront, and we make sure it stands out. Whether you need a simple portfolio, an eCommerce store, or a custom-coded site, we’ve got you covered. Our hosting solutions ensure speed, security, and reliability.</p>
            <ul>
              <li>WordPress | Wix | Squarespace | Shopify | Custom Code</li>
              <li>Fully responsive and optimized for all devices</li>
              <li>SEO-friendly designs to help you get found online</li>
            </ul>
          </li>
          <li>
            <h2>Computer Repairs & Troubleshooting</h2>
            <p>Tech issues slowing you down? We provide expert computer repairs and troubleshooting services, ensuring your devices perform at their best.</p>
            <ul>
              <li>Hardware and software repairs</li>
              <li>System diagnostics and optimization</li>
              <li>Virus removal and data recovery</li>
            </ul>
          </li>
          <li>
            <h2>Social Media Content Creation</h2>
            <p>Stay ahead with professional social media content that captures attention and drives engagement. Using Canva, we design custom posts that align with your brand and marketing goals.</p>
            <ul>
              <li>Custom graphics and promotional posts</li>
              <li>Engaging content for Facebook, Instagram, and more</li>
              <li>Brand-consistent templates and visuals</li>
            </ul>
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

.services-hero-container {
display: flex;
flex-direction: column;
justify-content: center;
background-color: #007EA7;
background-image: url(/src/assets/banner-2.jpg);
background-repeat: no-repeat;
background-size: cover;
background-blend-mode:soft-light;
height: 60vh;

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
      padding: 2em;
      width: min(100%, 450px);
      background: rgb(0,126,167);
      background: linear-gradient(27deg, rgb(93, 207, 245) 34%, rgba(202,240,248,1) 95%);
      border: 2px solid #fff;
      border-radius: 2em;

      img {
        max-width: 100px;
        margin-bottom: 1em;
      }
    }
  }

}

.services-container ul > li > ul > li {
  font-weight: bold;
  font-size: .976rem;
  padding: 1.5em;
  margin-bottom: 1em;
  background: #fff;
  border: none;
  border-radius: 99vw;
  box-shadow: rgba(13, 27, 42, 0.2) 0px 7px 29px 0px;
}

.cta-container {
text-align: center;
max-width: 80ch;
margin-inline: auto;

 .cta-btns {
    display: flex;
    justify-content: center;
    gap: 2em;
    margin-block: 4em;
  }

}

</style>
