<template>
  <main
    class="contact"
    aria-labelledby="main-title"
  >
    <!-- <button @click="submittedMessage = !submittedMessage">submittedMessage: {{submittedMessage}}</button> -->

    <div style="margin-bottom: 64px">
      <!-- <div class="row">
        <div>
          <h1>Contact us</h1>
        </div>
      </div> -->

      <div class="row">
        <div class="block half">
          <h2>Message Topics</h2>
          <ul>
            <li> <a @click="selectedForm = 'license'; goto('form')">License support</a> </li>
            <li> <a @click="selectedForm = 'discount'; goto('form')">Student + volume discount</a> </li>
            <li> <a @click="selectedForm = 'refund'; goto('form')">Request refund</a> </li>
          </ul>
        </div>

        <div class="block half">
          <h2>Conversation</h2>
          <p>Messages are reserved for sales and license requests. For product support, ideas, sharing, and everything else, join us on Discord.</p>
          <a href="https://discord.gg/Up4aQbey" target="_blank" class="nav-link action-button">Join Discord</a>
        </div>
      </div>
      

      <div class="form-container" ref="form">
          <iframe v-if="selectedForm == 'discount'" src="https://docs.google.com/forms/d/e/1FAIpQLSceTn6Lw5IavE3x9dnV2g5yfnnSEPezeLfz7XBPEhH4JwpmpQ/viewform?embedded=true" height="1500" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
          <iframe v-else-if="selectedForm == 'license'" src="https://docs.google.com/forms/d/e/1FAIpQLSfKW5BZxrUeXGVIglfQp-FV4jD7M-K3X-vSJC-wyFTMO5UhOw/viewform?embedded=true" height="1640" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
          <iframe v-else-if="selectedForm == 'refund'" src="https://docs.google.com/forms/d/e/1FAIpQLSdb-KC6F-dQ6yQCmRqpEf9cJzyHoJb8UffoCqW8iUlUaPfAaQ/viewform?embedded=true" height="1600" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
      </div>

      
    </div>



    <!-- <Content class="theme-default-content custom" /> -->

    <Footer />

  </main>
</template>

<script>
const _ = require('lodash')
import Footer from '@theme/components/Footer.vue'

export default {
  name: 'Home',
  components: { Footer },
  data: () => ({
    selectedForm: 'license',
  }),
  methods: {
    goto(refName) {
      var element = this.$refs[refName];
      var top = element.offsetTop;

      window.scrollTo(0, top);
    }
  },
  computed: {
  },
}
</script>

<style>
.form-container {
  position: relative;
  /* width: 100%; */
  /* overflow: hidden; */
  /* background: rgba(200,200,200,.3); */
  /* margin: auto -16px; */
  margin-left: -16px;
  margin-right: -16px;
  padding-top: 80vh;
}
.form-container iframe {
  /* width: -webkit-fill-available; */
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
  border: none;
  padding-top: 32px;
  padding-bottom: 32px;
}
.product-block h3 {
  margin-top: 0;
  margin-bottom: 8px;
}
.block li {
  list-style-type: "ᳵ ";
  /* cursor: pointer; */
}
.block li a {
  cursor: pointer;
  text-decoration: underline;
}
.action-button > .product-block {
  text-decoration: none;
}
.contact {
  padding: 3.6rem 2rem 0;
  max-width: 960px;
  margin: 0px auto;
  display: block;
}
.formulate-input .formulate-input-element {
  max-width: inherit;
}
.contact-form {
  width: 100%;
}
.form-aside {
  padding: 16px;
  border-radius: 4px;
  border: 1px solid rgba(128,128,128,.2);
  font-size: .875rem;
  line-height: 1.3125rem;
  /* font-weight: 300; */
  margin-bottom: 16px;
}
.formulate-input[data-classification=button] button {
    padding: 0.7rem 1.1rem !important;
    font-weight: 400;
}
@media screen and (min-width: 768px) and (max-width: 1023px) {
  .contact-form {
    width: calc((((100% - (11 * 1.5rem))/ 12) * 7) + (6 * 1.5rem));
  }
}
@media screen and (min-width: 1024px) {
  .contact-form {
    display: grid;
    grid-template-columns: repeat(12,1fr);
    grid-template-rows: minmax(min-content, max-content);
    column-gap: 1.5rem;
  }
  /* .form-name {
    grid-area: 2/1/2/8;
  } */
  .form-topic {
    grid-area: 1/1/1/8;
  }
  .form-aside {
    grid-area: 1/8/3/12;
    margin-top: 1.25rem;
  }
  .form-content {
    grid-area: 2/1/7/8;
  }
  .double-wide {
    display: flex;
  }
  .double-wide .formulate-input {
    flex-grow: 1;
    width: calc(50% - .5em);
  }
  .double-wide .formulate-input:first-child {
    margin-right: .5em;
  }
  .double-wide .formulate-input:last-child {
    margin-left: .5em;
  }
}

.form-content textarea {
  height: 300px;
  resize: none;
}
.contact h1 {
  margin-left: 0;
}
.contact h3 {
  font-size: 18px;
}
.icon {
  font-size: 24px;
  margin: 4px auto -4px;
}
.form-aside li {
  list-style-type: "ᳵ "
}
.form-aside li a {
  list-style-type: "ᳵ "
}

.submitted-message {
  padding: 16px;
  border-radius: 4px;
  border: 1px solid rgba(0,0,0,.1);
  font-size: .875rem;
  line-height: 1.3125rem;
  margin-bottom: 16px;
  margin-top: 96px;

  position: absolute;
  z-index: 10;
  transition: all .4s;
  transition-delay: .25s;
}
.submitted-message.hide {
  pointer-events: none;
  margin-top: 84px;
}

.hide {
  opacity: 0;
  transition: opacity .5s;
}
.form-hide {
  opacity: 0;
  height: 0;
  margin: 0;
}

</style>
