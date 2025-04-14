<template>
 <div class="pricing-hero-container">
    <div class="container">
      <div class="pricing-hero-container__content">
        <h1>VantaBlack Technologies Pricing</h1>
      </div>
    </div>
  </div>
  <main>
    <div class="container">
      <div id="web-development" class="service | border-outline">
        <div class="header | flex-container">
          <div class="col-left">
            <h2>Web Development</h2>
          </div>
          <div id="pricing-details" class="col-right">
            <h2>Prices (USD)</h2>
          </div>
      </div>
        <div class="body">
          <div class="row | flex-container">
            <div class="col-left">
              <p>Basic Website (5 pages, CMS-based)</p>
            </div>
            <div class="col-right">
              <p>$300</p>
            </div>
          </div>
          <div class="row | flex-container">
            <div class="col-left">
              <p>E-commerce Store (Up to 10 products, CMS-based)</p>
            </div>
            <div class="col-right">
              <p>$500</p>
            </div>
          </div>
          <div class="row | flex-container">
            <div class="col-left">
              <p>Custom-Coded Website (From scratch, tailored to your needs)</p>
            </div>
            <div class="col-right">
              <p>Starting at $600</p>
            </div>
          </div>
          <div class="row | flex-container">
            <div class="col-left">
              <p>Website Maintenance (Updates, security, performance fixes)</p>
            </div>
            <div class="col-right">
              <p>$50/month</p>
            </div>
          </div>
        </div>
        <RouterLink to="/contact" class="btn">Contact us</RouterLink>
      </div>
      <div id="appsheet" class="service | border-outline">
        <div class="header | flex-container">
          <div class="col-left">
            <h2>Google AppSheet Development</h2>
          </div>
          <div id="pricing-details" class="col-right">
            <h2>Prices (USD)</h2>
          </div>
        </div>
        <div class="body">
          <div class="row | flex-container">
            <div class="col-left">
              <p>Basic App (Simple data management app)</p>
            </div>
            <div class="col-right">
              <p>$400</p>
            </div>
          </div>
          <div class="row | flex-container">
            <div class="col-left">
              <p>Advanced App (Workflow automation, integrations)</p>
            </div>
            <div class="col-right">
              <p>Starting at $700</p>
            </div>
          </div>
        </div>
        <RouterLink to="/contact" class="btn">Contact us</RouterLink>
      </div>
      <div id="computer" class="service | border-outline">
        <div class="header | flex-container">
          <div class="col-left">
            <h2>Computer Repairs & Troubleshooting</h2>
          </div>
          <div id="pricing-details" class="col-right">
            <h2>Prices (USD)</h2>
          </div>
        </div>
        <div class="body">
          <div class="row | flex-container">
            <div class="col-left">
              <p>Diagnostics & Troubleshooting</p>
            </div>
            <div class="col-right">
              <p>$30</p>
            </div>
          </div>
          <div class="row | flex-container">
            <div class="col-left">
              <p>Software Installation & Optimization</p>
            </div>
            <div class="col-right">
              <p>$50</p>
            </div>
          </div>
          <div class="row | flex-container">
            <div class="col-left">
              <p>Hardware Repair (Pricing based on issue)</p>
            </div>
            <div class="col-right">
              <p>Quote Provided</p>
            </div>
          </div>
        </div>
        <RouterLink to="/contact" class="btn">Contact us</RouterLink>
      </div>
    </div>
  </main>
</template>
<style scoped>
  main {
    padding-block: 4em;
  }

  h2 {
    font-size: 1.5rem;
  }

  .pricing-hero-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: rgba(65,78,210,1);
    background-image: url(/src/assets/banner-2.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    background-blend-mode:screen;
    background-position: 100%;
    padding-block: 4em;

    .pricing-hero-container__content {
      max-width: 50ch;
    }
  }

  .service {
    text-align: center;
    margin-bottom: 2em;
    padding: 2em;
    max-width: 1100px;

    .btn{
      margin-top: 2em;
    }

  }

 .service .flex-container {
    flex-direction: column;
    align-items: center;
  }

  .body .row {
    padding: 2em;
    max-width: 300px;
    margin-inline: auto;
  }

  .col-left {
    font-size: 1rem;

    p {
      padding-inline: .5em;
    }
  }

  .col-right p {
    font-size: 1.5rem;
    color: var(--color-primary);
    margin-bottom: 0px;
  }

  .body {
    font-weight: bold;
  }

  .body .row {
    border-radius: 100%;
  }

  .body .row {
    color: var(--color-dark);
    margin-bottom: 2em;
    background-color: var(--color-light);
    box-shadow: rgba(65, 78, 210, 0.18) 0px 7px 29px 0px;
  }

  @media screen and (min-width: 700px) {
    .pricing-hero-container {
      height: 90vh;
    }

    .service {
      text-align: left;
    }

    .service .flex-container {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      gap: 2em;
    }

    .header,
    .body .row {
      padding: 1em 1.5em;
    }

    .body p {
      margin-bottom: 0px;
    }

    .col-right {
      text-align: right;
      justify-self: flex-end;
      width: 40%;
    }

    .body .row {
      max-width: 100%;
      border-radius: 2em;
    }

  }


</style>