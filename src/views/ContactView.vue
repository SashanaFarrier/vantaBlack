<script setup>
  import { ref, computed } from 'vue';
  import { useRouter } from "vue-router";
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

  const router = useRouter();

  const WEB3FORMS_ACCESS_KEY = "88f83081-4f27-4587-be2b-03c6fa6a44cf";
  const firstname = ref('');
  const lastname = ref('');
  const email = ref('');
  const inquiry = ref('');
  const message = ref('');

  const errors = ref({});

  const isFirstNameValid = computed(() => firstname.value !== '');
  const isLastNameValid = computed(() => lastname.value !== '');
  const isEmailValid = computed(() => /^\S+@\S+\.\S+$/.test(email.value));
  const isMessageValid = computed(() => message.value !== '');
  const isInquiryValid = computed(() => inquiry.value !== '');


const validateField = (field) => {
  errors.value[field] = ''; // Clear previous error for the field
  if (field === 'firstname' && !isFirstNameValid.value) {
    errors.value.firstname = 'First name is required.';
  }
  if (field === 'lastname' && !isLastNameValid.value) {
    errors.value.lastname = 'Last name is required.';
  }

  if (field === 'email' && !isEmailValid.value) {
    errors.value.email = 'Invalid email address.';
  }

  if (field === 'message' && !isMessageValid.value) {
    errors.value.message = 'Please include a message with any aditional information about your inquiry.';
  }
  if (field === 'inquiry' && !isInquiryValid.value) {
    errors.value.inquiry = 'Please select an inquiry';
  }
};

  const submitForm = async (event) => {
    if (event) event.preventDefault(); // Prevent page reload

    errors.value = {}; // Clear previous errors

    validateField('firstname');
    validateField('lastname');
    validateField('email');
    validateField('message');
    validateField('inquiry');

    if (Object.values(errors.value).some(error => error !== '')) {
      console.log('Form has validation errors.', errors.value);
      return;
    }


    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: WEB3FORMS_ACCESS_KEY,
        firstname: firstname.value,
        lastname: lastname.value,
        email: email.value,
        inquiry: inquiry.value,
        message: message.value,
      }),
    });

    const result = await response.json();
    if (result.success) {
      router.push("/thanks");
      console.log(result);
    }
}

</script>

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
              <h3>Custom Digital Solutions Tailored for You</h3>
              <p>Tell us about your business needs, and we'll provide a customized strategy that aligns with your goals. We work closely with you to ensure the best results.</p>
            </li>
            <li>
              <img src="" alt="">
              <h3>Seamless Project Execution</h3>
              <p>From concept to completion, we ensure a smooth and hassle-free experience. Our team manages each step efficiently, so you can focus on growing your business with confidence.</p>
            </li>
          </ul>
        </div>
        <div class="right-col">
          <form @submit.prevent="submitForm">
            <!-- <input type="hidden" name="access_key" value="88f83081-4f27-4587-be2b-03c6fa6a44cf">
            <input type="hidden" name="subject" value="New Inquiry Form Submission for Web3Forms" />
            <input type="hidden" name="from_name" value="VantaBlack Technologies" /> -->
             <div class="row">
              <div class="col">
                <label for="firstname">First name</label>
                <input id="firstname" type="text" name="firstname" placeholder="John" v-model="firstname" @blur="validateField('firstname')">
                <span class="error" v-if="errors.firstname && !isFirstNameValid">
                  <FontAwesomeIcon :icon="['fas', 'circle-exclamation']" />
                  {{ errors.firstname }}</span>
              </div>
              <div class="col">
                <label for="lastname">Last name</label>
                <input id="lastname" type="text" name="lastname" placeholder="Doe" v-model="lastname" @blur="validateField('lastname')">
                <span class="error" v-if="errors.lastname && !isLastNameValid">
                  <FontAwesomeIcon :icon="['fas', 'circle-exclamation']" />
                  {{ errors.lastname }}</span>
              </div>
             </div>
             <div class="row">
              <div class="col">
                <label for="email">Email</label>
                <input ide="email" type="email" name="email" placeholder="Work or personal email" v-model="email"
                @blur="validateField('email')">
                <span class="error" v-if="errors.email && !isEmailValid">
                  <FontAwesomeIcon :icon="['fas', 'circle-exclamation']" />
                  {{ errors.email }}</span>
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
                <select id="inquiry" name="inquiry" v-model="inquiry">
                  <option value="" selected disabled>Please Select</option>
                  <option value="Web design & development">Web Design & Development</option>
                  <option value="Computer Repairs and Troubleshooting">Computer Repairs & Troubleshooting</option>
                  <option value="social media content creation">Social Media Content Creation</option>
                </select>
                <span class="error" v-if="errors.inquiry && !isInquiryValid">
                  <FontAwesomeIcon :icon="['fas', 'circle-exclamation']" />
                  {{ errors.inquiry }}</span>
              </div>
             </div>
             <div class="message-container">
              <label for="message">How can we help you?</label>
              <textarea id="message" name="message" rows="10" placeholder="Tell us in detail about how we can help you." v-model="message" @blur="validateField('message')"></textarea>
              <span class="error" v-if="errors.message && !isMessageValid">
                <FontAwesomeIcon :icon="['fas', 'circle-exclamation']" />
                {{ errors.message }}</span>
             </div>
            <!-- Honeypot Spam Protection -->
            <input type="checkbox" name="botcheck" class="hidden" style="display: none;">
            <!-- Custom Confirmation / Success Page -->
            <!-- <input type="hidden" name="redirect" value="https://vbtechja.com/thanks"> -->
            <button type="submit" class="btn">Submit</button>
          </form>
          <div class="contact-info">
            <p><span> <FontAwesomeIcon :icon="['fas', 'location-dot']" /></span>Manchester, Jamaica</p>
            <p><span> <FontAwesomeIcon :icon="['fas', 'phone']" /></span>876-545-9806</p>
            <p><span> <FontAwesomeIcon :icon="['fas', 'message']" /></span>vbtechnologies876@gmail.com</p>
          </div>
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

  form,
  .contact-info {
    padding: 2em;
    /* height: 100%; */
    background-color: #fff;
    border-radius: .25vw;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  }

  .contact-info {
    font-weight: bold;
    font-size: clamp(.8rem, calc(.8rem + .25vw), 3rem);
    color: #000;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 2em;
    background-color: var(--color-accent);
    p {
      margin-bottom: .5em;
    }
    span {

      /* color: var(--color-accent); */
     margin-right: .5em;
    }
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

  /* email validation */

  .error {
    font-size: 0.8rem;
    display: inline-block;
    line-height: 1.5;
    color: red;
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


