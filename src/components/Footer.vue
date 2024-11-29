<script setup>
    import bg from "@/assets/wavy-bg.jpg";
    import logo from "@/assets/logo.png"
</script>

<template>
    <footer>
        <div class="flex-container">
            <nav>
                <ul class="left">
                    <li class="logo">
                        <a href="/">
                            <img :src="logo" alt=""/>
                        </a>
                    </li>
                    <li><a href="/contact" class="accent-btn">Contact Us</a></li>
                    
                </ul>
          
                <div class="right">
                    <ul>
                        <li><a href="/">Home</a></li>
                        
                        <li><a href="/portfolio">Portfolio</a></li>
                        
                        <li><a href="/about">About Us</a></li>
                   
                    </ul>
                    <ul>
                        <li><a href="/services">Services</a></li>
                        <li><a href="/pricing">Pricing</a></li>
                    </ul>
                </div>
            </nav>
        </div>
    </footer>
</template>
<style scoped>

.flex-container {
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
        /* align-items: center; */
        gap: 5em;
    }

    .right > ul {
        border-left: 1px solid #CAF0F8 !important;
       
    }
</style>