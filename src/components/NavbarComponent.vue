<script setup>
    import logo from '@/assets/logo.png'
    import menuIcon from '@/components/icons/hamburger-menu.svg'
    import closeIcon from '@/components/icons/close-btn.svg'
    import { ref, watch } from "vue"
    import { RouterLink } from 'vue-router'

    let isActive = ref(false)

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
        <nav :class="[isActive ? 'active' : '', 'navigation-list']">
          <div class="container">
          <div class="nav-container">
            <div class="col">
              <div class="logo">
              <RouterLink to="/"><img :src="logo" alt="VantaBlack Technologies"/></RouterLink>
            </div>
            <div @click="toggleNavigationMenu" class="hamburger-menu">
              <img :src="menuIcon" alt="menu icon" width="50" height="50" />
            </div>
            <div @click="toggleNavigationMenu" class="close-btn" :class="isActive ? 'active' : ''">
              <img :src="closeIcon" alt="navigation close button" width="50" height="50">
            </div>
            </div>
            <div class="col">
              <ul class="list-items right">
              <li><RouterLink to="/" @click="closeNavigationMenu">Home</RouterLink></li>
              <li><RouterLink to="/about" @click="closeNavigationMenu">About Us</RouterLink></li>
              <li><RouterLink to="/services" @click="closeNavigationMenu">Services</RouterLink></li>
              <li><RouterLink to="/pricing" @click="closeNavigationMenu">Pricing</RouterLink></li>
            </ul>
            <ul class="list-items">
              <li>
                <RouterLink to="/contact" class="btn" @click="closeNavigationMenu">Hosting & Domains</RouterLink>
              </li>
              <li>
                <RouterLink to="/contact" @click="closeNavigationMenu">Contact Us</RouterLink>
              </li>
            </ul>
            </div>


          </div>

            <!-- <div>
                <div @click="toggleNavigationMenu" class="close-btn" :class="isActive ? 'active' : ''">
                    <img :src="closeIcon" alt="navigation close button" width="50" height="50">
                </div>
                <ul class="list-items right">
                  <li><RouterLink to="/" @click="closeNavigationMenu">Home</RouterLink></li>
                  <li><RouterLink to="/about" @click="closeNavigationMenu">About Us</RouterLink></li>
                  <li><RouterLink to="/services" @click="closeNavigationMenu">Services</RouterLink></li>
                  <li><RouterLink to="/pricing" @click="closeNavigationMenu">Pricing</RouterLink></li>
                </ul>
                <ul class="list-items">
                  <li>
                    <RouterLink to="/contact" class="btn" @click="closeNavigationMenu">Hosting & Domains</RouterLink>
                  </li>
                  <li>
                    <RouterLink to="/contact" @click="closeNavigationMenu">Contact Us</RouterLink>
                  </li>
                </ul>
            </div> -->
          </div>
          </nav>

    </header>
</template>

<style scoped>

header .list-items li {
    font-size: 1.5rem !important;
    margin: 0px;
    margin-top: 1em;
}

header .btn {
  /* font-size: 1.5rem !important;
  margin-top: 2em; */
  /* padding: 1rem; */
}

nav {
    display: flex;
    justify-content: space-between;
    align-items: center;


    ul {
      display: none;
    }

    a {
      font-weight: bold;
    }
}


ul li {
    margin-right: 1em;
}

.hamburger-menu,
.close-btn {
  max-width: 80px;
}

.hamburger-menu,
.close-btn {
    cursor: pointer;
}


/* .navigation-list .nav-container {
  text-align: center;
  display: none;
}

.active.navigation-list,
.active.navigation-list .close-btn {
    display: block;
} */

.navigation-list .nav-container {
  /* text-align: center; */
  display: flex;
  width: 100%;
  /* justify-content: space-between; */
  align-items: center;
}

.navigation-list .close-btn {
  display: none;
  opacity: 1;
  transition: opacity 500ms ease-in-out;
}

.navigation-list .close-btn:hover {
    opacity: 0.5;
}

.navigation-list .nav-container .col {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.navigation-list .nav-container .col:nth-of-type(2) {
  display: none;
}

/* Active nav display */

.active.navigation-list {
  position: relative;
  height: 100vh;
}

.active.navigation-list::before {
  content: "";
  position: absolute;
  inset: 0;
  height: 100%;
  background-color: rgba(8,4,17,0.7);;
}

.active.navigation-list .nav-container {
  /* text-align: center; */
  /* flex-direction: column; */
}


/* .active.navigation-list,
.active.navigation-list .close-btn {
    display: block;
} */

.active.navigation-list .nav-container {
    position: fixed;
    top: 0;
    left: 0;
    flex-direction: column;
    /* width: 85%;
    max-width: 400px; */
    height: 100vh;
    padding: 1em;
    background: rgb(8,4,17);
    background: linear-gradient(90deg, rgba(8,4,17,1) 0%, rgba(65,78,210,1) 100%);
    z-index: 1000;
}

/* .active.navigation-list {
    position: fixed;
    top: 0;
    left: 0;
    width: 85%;
    height: 100vh;
    padding: 1em;
    background: rgb(8,4,17);
    background: linear-gradient(90deg, rgba(8,4,17,1) 0%, rgba(65,78,210,1) 100%);
    z-index: 1000;
} */


/* .active.navigation-list::before {
    content: "";
    position: absolute;
    inset: 0;
    height: 100vh;
    background: rgba(8,4,17, 0.5);
} */

.active.navigation-list .list-items {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    transition: width, height 0.5s ease-in-out;
}

.active.navigation-list .list-items .btn {
  font-size: 1rem;
  /* padding: 1rem; */
}

.active.navigation-list .nav-container .col:nth-of-type(2) {
  display: block;
}


.active.navigation-list .nav-container .col:nth-of-type(1) {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
}

/* .navigation-list .close-btn {
    display: none;
    text-align: right;
    opacity: 1;
    transition: opacity 500ms ease-in-out;
} */


.active.navigation-list .close-btn {
  display: block;
}

.active.navigation-list .hamburger-menu {
  display: none;
}




/* .navigation-list .close-btn > img {
    max-width: 50px;
} */



@media screen and (min-width: 1250px) {
  ul li {
    margin-right: 0px;
  }

    .hamburger-menu,
    .close-btn {
        display: none;
    }

    .navigation-list .nav-container {
      gap: 6em;
    }

    .navigation-list .nav-container .col:nth-of-type(1) {
      max-width: max-content;
    }

    .navigation-list .nav-container .col:nth-of-type(2) {
      display: flex;
      justify-content: space-between;
      width: 100%;
      flex-grow: 2;
    }

    .navigation-list .nav-container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: unset;
        height: 100%;
        width: 100%;
        background-color: transparent;
    }

    .list-items {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 2em;
    }

    header .list-items li,
    header .btn {
      font-size: 1.2rem !important;
      margin-block: 0px;
    }
}

/* @media screen and (min-width: 53.125em) {
  ul li {
    margin-right: 0px;
  }

    .hamburger-menu,
    .close-btn {
        display: none;
    }

    .navigation-list {
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: unset;
        height: 100%;
        width: 80%;
        background-color: transparent;
    }

    .list-items {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 2em;
    }

    header .list-items li,
    header .btn {
      font-size: 1.2rem !important;
      margin-block: 0px;
    }
} */
</style>
