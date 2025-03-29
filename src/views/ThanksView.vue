<script setup>
   import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
</script>

<template>
  <main>
    <div class="container">
      <div class="card | border-outline">
        <FontAwesomeIcon :icon="['fas', 'circle-check']" />
        <p>Form submitted successfully!</p>
        <p>Thank you! Your request has been submitted successfully.</p>
        <p>We will reply to you soon!</p>
        <RouterLink to="https://www.vbtechja.com">Go back</RouterLink>
      </div>

    </div>
  </main>
</template>

<style scoped>
  main {
    text-align: center;
    color: var(--color-dark);
    display: grid;
    place-content: center;
    height: 85vh;
  }

  p:first-of-type {
    font-weight: bold;
    font-size: 1.5rem;
    color: var(--color-primary);
  }

  .card {
    padding: 2em;
    background-color: #fff;
  }

  svg {
    font-size: 4rem;
    color: var(--color-primary);
    margin-bottom: .5em;
  }

  a:hover {
    opacity: 0.8;
  }
</style>