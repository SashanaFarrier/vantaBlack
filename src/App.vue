<script setup>
import { RouterView } from 'vue-router'
import Navbar from '@/components/NavbarComponent.vue'
import Footer from './components/FooterComponent.vue';

</script>

<template>
  <Navbar />
  <RouterView />
  <Footer />
</template>

