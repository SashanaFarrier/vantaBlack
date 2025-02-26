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

</script>

<template>
    <header>
      <div class="container">
        <nav>
            <a class="logo" href="/">
                <img :src="logo" alt=""/>
            </a>
            <div @click="toggleNavigationMenu" class="hamburger-menu">
                <img :src="menuIcon" alt="menu icon" width="50" height="50" />
            </div>
            <div :class="[isActive ? 'active' : '', 'navigation-list']">
                <div @click="toggleNavigationMenu" class="close-btn" :class="isActive ? 'active' : ''">
                    <img :src="closeIcon" alt="navigation close button" width="50" height="50">
                </div>
                <ul class="list-items left">
                    <!-- <li><a href="/about">About Us</a></li> -->
                    <li><RouterLink to="/about">About Us</RouterLink></li>
                    <li><a href="/services">Services</a></li>
                </ul>
                <ul class="list-items right">
                    <li><a href="/pricing">Pricing</a></li>
                    <li><a href="/contact" class="accent-btn">Contact Us</a></li>
                </ul>
            </div>
        </nav>
      </div>
    </header>
</template>

<style scoped>

nav {
    display: flex;
    /* justify-content: space-between; */
    align-items: center;
    width: 100%;
}

header {
    position: relative;
}

nav {
    justify-content: space-between;
    gap: 3em;
    height: 100%;
}

nav > ul {
    display: none;
}


.navigation-list {
    display: none;
    /* width: 0px;
    height: 0px; */
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
    background-color: #0D1B2A;
    z-index: 1000;
}

.active.navigation-list .list-items {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    /* height: 100%; */
    height: max-content;
    transition: width, height 0.5s ease-in-out;
}

.list-items {
    /* width: 0px;
    height: 0px; */
}

.navigation-list .close-btn {
    display: none;
    text-align: right;
}

.navigation-list .close-btn > img{
    max-width: 50px;
}

.list-items li {
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

@media screen and (min-width: 650px){
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
        width: 100%;
        background-color: transparent;
    }

    .list-items {
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    .list-items li {
        font-size: 1rem !important;
        margin-top: 0;
    }
/*
    .list-items .left {
        background-color: white;
    } */

}
</style>
