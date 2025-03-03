<script setup>
    // import bg from "@/assets/wavy-bg.jpg";
    import logo from "@/assets/logo.png"
</script>

<template>
    <footer>
      <div class="container">
        <div class="footer-container">
          <div class="footer-container__wrapper">
            <div class="logo">
              <RouterLink to="/"><img :src="logo" alt=""/></RouterLink>
            </div>
            <nav>
              <ul>
                <li><RouterLink to="/">Home</RouterLink></li>
                <li><RouterLink to="/about">About Us</RouterLink></li>
                <li><RouterLink to="/services">Services</RouterLink></li>
                <!-- <li><a href="/pricing">Pricing</a></li> -->
                <!-- <li><RouterLink to="/contact" class="accent-btn">Contact Us</RouterLink></li> -->
              </ul>
                <!-- <ul class="left-col">
                    <li class="logo">
                        <a href="/">
                            <img :src="logo" alt=""/>
                        </a>
                    </li>
                    <li><a href="/contact" class="accent-btn">Contact Us</a></li>

                </ul> -->

                <!-- <div class="right-col">
                    <ul>
                        <li><a href="/">Home</a></li>

                        <li><a href="/portfolio">Portfolio</a></li>

                        <li><a href="/about">About Us</a></li>
                        <li><a href="/services">Services</a></li>
                        <li><a href="/pricing">Pricing</a></li>

                    </ul> -->
                    <!-- <ul>
                        <li><a href="/services">Services</a></li>
                        <li><a href="/pricing">Pricing</a></li>
                    </ul>
                </div>-->
            </nav>
          </div>
        </div>
      </div>
      <div class="copyright-container">
        <p>&copy; 2025 | VantaBlack Technologies</p>
      </div>
    </footer>
</template>
<style scoped>
 nav ul {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1em;
  }

  .right-col ul {
    display: flex;
    flex-direction: column;

  }

  @media screen and (min-width: 48.75em) {
    footer {
      text-align: left;
    }

    nav ul {
      flex-direction: row;
      justify-content: center;
      gap: 2em;
    }

    nav ul li:not(:last-child) {
      padding-right: 2em;
      border-right: 1px solid rgba(255, 255, 255, 0.03);
    }

    nav ul li:nth-of-type(n + 1) {

    }
  }

/* .flex-container {
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 1100px;
    margin: auto;
}
    nav {
        display: flex;
        justify-content: space-between;
        width: 100%;
    }

    nav li:not(:last-child) {
        margin-bottom: 1em;
    }

    nav li {
        margin-left: 1.5em;
    }

    .right {
        display: flex;
        gap: 5em;
    }

    .right > ul {
        border-left: 1px solid #CAF0F8 !important;

    } */
</style>
