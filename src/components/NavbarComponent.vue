<script setup>
    import logo from '@/assets/logo.png'
    import menuIcon from '@/components/icons/hamburger-menu.svg'
    import closeIcon from '@/components/icons/close-btn.svg'
    import { ref } from "vue"
    import { RouterLink } from 'vue-router'

    let isActive = ref(false)

    function toggleNavigationMenu() {
      isActive.value = !isActive.value;
    }

    function closeNavigationMenu() {
      isActive.value = false;
    }

</script>

<template>
    <header>
      <div class="container">
        <nav>
          <div class="logo">
              <RouterLink to="/"><img :src="logo" alt="VantaBlack Technologies"/></RouterLink>
            </div>
            <div @click="toggleNavigationMenu" class="hamburger-menu">
                <img :src="menuIcon" alt="menu icon" width="50" height="50" />
            </div>
            <div :class="[isActive ? 'active' : '', 'navigation-list']">
                <div @click="toggleNavigationMenu" class="close-btn" :class="isActive ? 'active' : ''">
                    <img :src="closeIcon" alt="navigation close button" width="50" height="50">
                </div>
                <ul class="list-items right">
                  <li><RouterLink to="/" @click="closeNavigationMenu">Home</RouterLink></li>
                  <li><RouterLink to="/about" @click="closeNavigationMenu">About Us</RouterLink></li>
                  <li><RouterLink to="/services" @click="closeNavigationMenu">Services</RouterLink></li>
                  <li><RouterLink to="/pricing" @click="closeNavigationMenu">Pricing</RouterLink></li>
                  <li><RouterLink to="/contact" class="accent-btn" @click="closeNavigationMenu">Contact Us</RouterLink></li>
                </ul>
            </div>
        </nav>
      </div>
    </header>
</template>

<style scoped>

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

.navigation-list {
    display: none;
}

.active.navigation-list,
.active.navigation-list .close-btn {
    display: block;
}

.active.navigation-list {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    padding: 1em;
    background: rgb(8,4,17);
    background: linear-gradient(90deg, rgba(8,4,17,1) 0%, rgba(65,78,210,1) 100%);
    z-index: 1000;
}

.active.navigation-list .list-items {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    transition: width, height 0.5s ease-in-out;
}

.navigation-list .close-btn {
    display: none;
    text-align: right;
    opacity: 1;
    transition: opacity 500ms ease-in-out;
}

.navigation-list .close-btn:hover {
    opacity: 0.5;
}

.navigation-list .close-btn > img{
    max-width: 50px;
}

header .list-items li {
    font-size: 2rem !important;
    margin-top: 1em;
}

ul li {
    margin-right: 1em;
}

.hamburger-menu,
.close-btn {
    cursor: pointer;
}

@media screen and (min-width: 53.125em) {
  ul li {
    margin-right: 0px;
  }

    .hamburger-menu,
    .close-btn {
        display: none;
    }

    .navigation-list {
        display: flex;
        justify-content: flex-end;
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

    header .list-items li {
        font-size: 1.2rem !important;
        margin-top: 0px;
    }

}
</style>
