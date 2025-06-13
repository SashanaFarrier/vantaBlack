<script setup>
    import logo from "@/assets/logo.png"
</script>

<template>
  <footer>
    <div class="container">
      <div class="logo">
        <RouterLink to="/"><img :src="logo" alt=""/></RouterLink>
      </div>
      <div class="flex-container">
        <div class="left-col">
          <div class="company-info">
            <div class="flex-container">
              <div class="socials">
              <ul>
                <li><a href="https://www.facebook.com/profile.php?id=61575259618230" target="_blank">
                  <font-awesome-icon :icon="['fab', 'facebook']" />
                </a></li>
                <li><a href="https://www.instagram.com/vantablacktechnologies?igsh=czh5YnQwNTl6dmZ6" target="_blank">
                  <font-awesome-icon :icon="['fab', 'instagram']" />
                </a></li>
              </ul>
            </div>
            <div class="contact-details">
              <div class="location">
                <h3>Location</h3>
                <p>Manchester</p>
                <p>Jamaica</p>
              </div>
              <div class="phone">
                <p>(876)545-9806</p>
                <p>(876)480-6892</p>
              </div>
              <div class="email">
                <h3>Send us a email</h3>
                <p>vbtechnologies876@gmail.com</p>
              </div>
            </div>
            </div>
          </div>
        </div>
        <div class="right-col">
          <nav>
              <ul>
                <li><RouterLink to="/">Home</RouterLink></li>
                <li><RouterLink to="/about">About Us</RouterLink></li>
                <li><RouterLink to="/services">Services</RouterLink></li>
                 <li><RouterLink to="/contact">Contact</RouterLink></li>
                <li><a href="https://www.vbhosting.store/" target="_blank">Hosting & Domain</a></li>
              </ul>
            </nav>
        </div>
      </div>
      <div class="copyright-container">
        <p>&copy; 2025 | VantaBlack Technologies</p>
      </div>
    </div>
  </footer>

</template>
<style scoped>

  footer {
    color: var(--color-accent);
    background-color: var(--color-dark);
    background-image: none;
    padding-block: 4em;
  }

  h3, p {
    margin-bottom: 0px;
  }

  footer p,
  footer nav a {
    font-size: clamp(.8rem, calc(.8rem + .25vw), 1.5rem);
  }

  .logo {
    margin-bottom: 4em;
    margin-inline: auto;
  }

.flex-container:not(.left-col .flex-container) {
  flex-direction: column;
  gap: 4em;
}

.left-col .flex-container {
  justify-content: center;
  gap: 1em;
}

.left-col,
.right-col {
  flex-basis: 100%;
}

nav {
  text-align: center;
}

nav li a {
  font-weight: bold;
}

nav li a,
.socials svg {
  color: var(--color-accent);
}

.socials {
  padding-right: 1em;
  border-right: 1px solid var(--color-primary);
}

.socials svg {
  font-size: 2rem;
}

.contact-details {
  font-size: clamp(1rem, calc(1rem + .25vw), 1.5rem);
}

.contact-details div + div {
  margin-top: 2em;
}

footer .copyright-container {
  font-size: .8rem;
  text-align: center;
  padding-top: 4em;
}

  footer ul li a,
  .socials svg {
    transition: all 500ms ease-in-out;
}

footer ul li a:hover,
.socials svg:hover {
  color: var(--color-primary);
}

  @media screen and (min-width: 780px) {
    .flex-container:not(.left-col .flex-container) {
    justify-content: space-between;
    flex-direction: row;
  }

  .left-col .flex-container {
    justify-content: flex-start;
    gap: 6em;
  }

  .right-col {
    justify-self: flex-end;
    margin-left: auto;
  }

  nav,
  .copyright-container {
    text-align: left;
  }

  nav ul {
    max-width: max-content;
    margin-left: auto;
  }


  .logo {
    margin-inline: 0px;
  }

  .socials {
    padding-right: 4em;
  }

  }

</style>
