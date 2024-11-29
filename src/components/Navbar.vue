<script setup>
    import logo from '@/assets/logo.png'
</script>

<template>
    <header>
        <nav>
                <ul class="left">
                    <li class="logo">
                        <a href="/">
                            <img :src="logo" alt=""/>
                        </a>
                    </li>
                    <li><a href="/about">About Us</a></li>
                    <li><a href="/services">Services</a></li>
                </ul>
          
            
                <ul class="right">
                    <li><a href="/pricing">Pricing</a></li>
               
                    <li><a href="/contact" class="accent-btn">Contact Us</a></li>
                </ul>
            
        </nav>
    </header>
</template>

<style scoped>

nav,
header ul {
    display: flex;
    /* justify-content: space-between; */
    align-items: center;
    width: 100%;
}

nav {
    justify-content: space-between;
    gap: 3em;
}

header .left {
    max-width: 45%;
}

header .right {
    justify-content: flex-end;
}

ul li {
    margin-right: 1em;
}

</style>