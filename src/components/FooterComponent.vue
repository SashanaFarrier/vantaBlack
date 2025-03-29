<script setup>
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
                <li><RouterLink to="/contact">Contact Us</RouterLink></li>
              </ul>
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
  }

</style>
