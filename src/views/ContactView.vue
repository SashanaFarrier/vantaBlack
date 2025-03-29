<template>
  <main>
    <div class="contact-container">
    <div class="container">
      <div class="contact-container__wrapper">
        <div class="left-col">
          <h1>Everything you need to elevate your digital presence.</h1>
          <ul>
            <li>
              <img src="" alt="">
              <h2>Work With Us</h2>
              <p>We are ready to help you find the right solution for your business needs. Whether you need a website, social media content, SEO, or tech support, we’ve got you covered.</p>
            </li>
            <li>
              <img src="" alt="">
              <h2>Custom Digital Solutions Tailored for You</h2>
              <p>Tell us about your business needs, and we'll provide a customized strategy that aligns with your goals. We work closely with you to ensure the best results.</p>
            </li>
            <li>
              <img src="" alt="">
              <h2>Seamless Project Execution</h2>
              <p>From concept to completion, we ensure a smooth and hassle-free experience. Our team manages each step efficiently, so you can focus on growing your business with confidence.</p>
            </li>
          </ul>
        </div>
        <div class="right-col">
          <form action="https://api.web3forms.com/submit" method="POST">
            <!-- Replace with your Access Key -->
            <input type="hidden" name="access_key" value="88f83081-4f27-4587-be2b-03c6fa6a44cf">
            <input type="hidden" name="subject" value="New Inquiry Form Submission for Web3Forms" />
            <input type="hidden" name="from_name" value="VantaBlack Technologies" />

            <!-- Form Inputs. Each input must have a name="" attribute -->
             <div class="row">
              <div class="col">
                <label for="firstname">First name</label>
                <input id="firstname" type="text" name="firstname" placeholder="John" required>
              </div>
              <div class="col">
                <label for="lastname">Last name</label>
                <input id="lastname" type="text" name="lastname" placeholder="Doe" required>
              </div>
             </div>
             <div class="row">
              <div class="col">
                <label for="email">Email</label>
                <input ide="email" type="email" name="email" placeholder="Work or personal email" required>
              </div>
              <div class="col">
                <label for="company">Company name</label>
              <input id="company" type="text" name="company" placeholder="Ex. Microsoft">
              </div>
             </div>
             <div class="row">
              <div class="col">
                <label for="website">Company website</label>
                <input id="website" type="text" name="website" placeholder="www.yourcompany.com">
              </div>
              <div class="col">
                <label for="inquiry">What’s your inquiry?</label>
                <select id="inquiry" name="services" required>
                  <option value="" selected disabled>Please Select</option>
                  <option value="Web design & development">Web Design & Development</option>
                  <option value="Computer Repairs and Troubleshooting">Computer Repairs & Troubleshooting</option>
                  <option value="social media content creation">Social Media Content Creation</option>
                </select>
              </div>
             </div>
             <div class="message-container">
              <label for="message">How can we help you?</label>
              <textarea id="mesage" name="message" rows="10" placeholder="Tell us in detail about how we can help you." required></textarea>
             </div>
            <!-- Honeypot Spam Protection -->
            <input type="checkbox" name="botcheck" class="hidden" style="display: none;">
            <!-- Custom Confirmation / Success Page -->
            <!-- <input type="hidden" name="redirect" value="https://mywebsite.com/thanks.html"> -->
            <input type="hidden" name="redirect" value="https://vbtechja.com/thanks.html">
            <button type="submit" class="btn">Submit Inquiry</button>
          </form>
        </div>
      </div>
    </div>
   </div>
  </main>
</template>
<style scoped>
  main {
    color: rgb(223, 226, 252);
  }

  h2 {
    color: var(--color-accent);
  }

  form {
    padding: 2em;
    height: 100%;
    background-color: #fff;
    border-radius: .25vw;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  }

  label {
    color: #000;
    display: block;
  }

  input,
  select,
  textarea {
    padding: .5em;
    width: 100%;
  }


  button[type="submit"] {
    text-transform: uppercase;
    padding: 1em 1.5em;
    margin-top: 2em;
    width: 100%;
    cursor: pointer;
  }


.contact-container {
  padding-bottom: 6em;
}

  .contact-container__wrapper {
    display: flex;
    justify-content: space-between;
    gap: 4em;
    padding-block: 4em;

    .left-col {
      max-width: 550px;
    }

    .right-col {
      flex-grow: .5;
    }
  }

  .row {
    display: flex;
    justify-content: space-between;
    gap: 2em;
    margin-block: 1em;
  }

  .col {
    width: 100%;
  }

  @media screen and (max-width: 76.625em) {
    .contact-container__wrapper {
      flex-direction: column;

      .left-col,
      .right-col {
      max-width: 100%;
    }
    }
  }

  @media screen and (max-width: 32.9375em) {
    .row {
      flex-direction: column;
      gap: 1em;
    }
  }

</style>


