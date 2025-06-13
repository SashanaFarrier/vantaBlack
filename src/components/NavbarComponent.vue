<script setup>
    import logo from '@/assets/vb-logo.png'
    import menuIcon from '@/components/icons/hamburger-menu.svg'
    import closeIcon from '@/components/icons/close-btn.svg'
    import { ref, watch } from "vue"
    import { RouterLink } from 'vue-router'

    const isActive = ref(false)

    function toggleNavigationMenu() {
      isActive.value = !isActive.value;
    }

    function closeNavigationMenu() {
      isActive.value = false;
    }

    watch(isActive, (el) => {
      const app = document.getElementById("app");

      if (el) {
        app.style.position = "fixed";
        app.style.inset = "0";
      } else {
        app.style.position = "relative";
      }
    });

</script>

<template>
  <header>
    <div class="container">
      <div class="flex-container">
        <div class="logo">
          <RouterLink to="/"><img :src="logo" alt="VantaBlack Technologies"/></RouterLink>
        </div>
        <nav :class="[isActive ? 'active' : '', 'nav-menu']">
        <ul>
          <li><RouterLink to="/" @click="closeNavigationMenu">Home</RouterLink></li>
          <li><RouterLink to="/about" @click="closeNavigationMenu">About Us</RouterLink></li>
          <li><RouterLink to="/services" @click="closeNavigationMenu">Services</RouterLink></li>
          <li><RouterLink to="/contact" @click="closeNavigationMenu">Contact</RouterLink></li>
        </ul>
        <a href="https://www.vbhosting.store/" target="_blank" class="btn get-online-btn" @click="closeNavigationMenu">Get Online</a>
        </nav>
        <div class="mobile-nav-menu-icons">
         <div @click="toggleNavigationMenu" class="hamburger-menu">
            <img :src="menuIcon" alt="menu icon" width="50" height="50" />
          </div>
          <div @click="toggleNavigationMenu" class="close-btn">
            <img :src="closeIcon" alt="navigation close button" width="50" height="50">
          </div>
      </div>
      </div>
    </div>
  </header>
</template>

<style scoped>

header .flex-container {
  justify-content: space-between;
  align-items: center;
}

header .nav-menu {
  display: none;
}

header nav.active {
  position: absolute;
  inset: 0;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
  background-color: var(--color-dark);
  z-index: 1;
}

nav.active li a,
nav.active .btn {
  font-size: 2.5rem;
}

nav.active .btn {
  padding: .25em .5em;
}

nav.active .get-online-btn {
  margin-top: 2rem;
}

header .btn {
  color: var(--color-white);
  background-color: transparent;
  border: 1px solid var(--color-primary);
}

nav ul {
  gap: 4rem;
}

nav li a {
  font-weight: bold;
}

.hamburger-menu,
.close-btn {
  position: relative;
  max-width: 80px;
  cursor: pointer;
  z-index: 999;
}

.close-btn {
  display: none;
  background-color: var(--color-white);
  border-radius: 50%;
}

header:has(nav.active) .hamburger-menu {
  display: none;
}

header:has(nav.active) .close-btn {
  display: flex;
  justify-content: center;
  align-items: center;
}

@media screen and (min-width: 990px) {
  header .nav-menu {
  display: flex;
  flex-grow: 1;
  justify-self: flex-end;
  align-items: center;
  justify-content: flex-end;
  gap: 4rem;

  ul {
    display: flex;
  }

  .logo {
    margin-right: auto;
  }

  .get-online-btn {
    margin: 0px;
  }
}

.hamburger-menu,
.close-btn {
  display: none;
}

}

</style>
