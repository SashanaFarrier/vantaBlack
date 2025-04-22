<template>
  <div class="cta-container | text-center-mx-width">
        <p>Whether you’re launching a brand, need tech support, or want to streamline your workflow with custom Google AppSheet solutions—we’re here to help. Let’s build something amazing together!</p>
        <RouterLink class="cta-bg-none" to="/contact">Let's Talk</RouterLink>
        <div class="cta-btn">
        </div>
      </div>
</template>

<style scoped>
  .cta-container {
    text-align: center;
    color: var(--color-dark);
    /* padding: calc(1rem + 5vw); */
    padding: 4rem 2rem;
    background-color: var(--vt-c-white-mute);
    border-radius: 2em;
  }

  a {
    font-weight: bold;
    font-size: 3rem;
    color: var(--vt-c-black-mute) !important;
    text-decoration-color: var(--color-accent);
    margin-top: .5em;
    transition: all 500ms ease-in-out;
  }

  p {
    font-size: clamp(1rem, calc(1rem + .5vw), 3rem);
    max-width: 55ch;
    margin-inline: auto;
  }

  a:hover {
    opacity: 0.8;
  }

</style>
