<template>
  <main
    class="newsletter"
    aria-labelledby="main-title"
    :class="{embed: embed}"
    :style="{'background': background}"
  >
    <div id="mc_embed_signup" :style="cssVars" :class="{origin: origin}">
        <h2 v-if="headline">{{headline}}</h2>
        <form action="https://battleaxe.us2.list-manage.com/subscribe/post?u=4cc8eea30236019bbfce85300&amp;id=0898372b84"
            method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank"
            novalidate>
            <div id="mc_embed_signup_scroll" style="display: flex; flex-wrap: wrap">
              <div class="mc-field-group">
                <input 
                  type="email" 
                  value="" 
                  name="EMAIL" 
                  class="email-input-primary" 
                  id="mce-EMAIL"
                  placeholder="Email" style="margin: 0 8px 8px 0">
              </div>
  
              <!-- <div class="mc-field-group input-group" style="display:none">
                  <strong>Freebie</strong>
                  <ul>
                      <li><input type="checkbox" value="128" name="group[17082][128]" id="mce-group[17082]-17082-0"
                              checked><label for="mce-group[17082]-17082-0">Buttcapper</label></li>
                      <li><input type="checkbox" value="256" name="group[17082][256]" id="mce-group[17082]-17082-1"><label
                              for="mce-group[17082]-17082-1">Hylian</label></li>
                      <li><input type="checkbox" value="512" name="group[17082][512]" id="mce-group[17082]-17082-2"><label
                              for="mce-group[17082]-17082-2">Beatgrid</label></li>
                  </ul>
              </div> -->
              <div class="mc-field-group input-group" style="display:none">
                <strong>Interests </strong>
                <ul><li><input type="checkbox" value="1" checked name="group[17078][1]" id="mce-group[17078]-17078-0"><label for="mce-group[17078]-17078-0">Freebies</label></li>
              </ul>
              </div>
              <div id="mce-responses" class="clear">
                <div class="response" id="mce-error-response" style="display:none"></div>
                <div class="response" id="mce-success-response" style="display:none"></div>
              </div>    <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
              <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_4cc8eea30236019bbfce85300_0898372b84" tabindex="-1" value=""></div>
              <div>
                <input 
                  type="submit" 
                  value="Subscribe" 
                  name="subscribe" 
                  id="mc-embedded-subscribe" 
                  class="submit-button-primary">
              </div>
            </div>
        </form>
        <p style="margin-top: 24px">{{footer}}</p>

        
    </div>
  </main>
</template>

<script>
const _ = require('lodash')

export default {
  name: 'Newsletter',
  props: {
    embed: {
      type: Boolean,
      default: false
    },
    origin: {
      type: Boolean,
      default: false
    },
    headline: {
      type: String,
      default: ''
    },
    footer: {
      type: String,
      default: 'Download link is emailed momentarily. Unsubscribe any time. We never ever share your info.'
    },
    background: {
      type: String,
      default: 'transparent'
    },
    accent: {
      type: String,
      default: '#fff'
    },
  },
  data: () => ({
    
  }),
  methods: {
    
  },
  computed: {
    cssVars () {
        return{
          /* variables you want to pass to css */
          '--accent': (this.embed) ? this.accent : '',
          // '--accent': this.accent,
        }
    }
  },
}
</script>

<style scoped>
.newsletter {
  font-family: 'Fira Mono';
}
.newsletter > * {
  color: var(--accent) !important;
}
.embed {
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  margin-top: 0 !important;
  display: flex;
}
.embed #mc_embed_signup {
  padding: 32px 16px;
}

#mc_embed_signup {  
  line-height: 1.6em;
  overflow: hidden;
  align-self: center;
}
.origin {
  padding: 0 !important;
  align-self: flex-start !important;
}
#mc_embed_signup h2 {
  line-height: 1.1em;
  margin-bottom: 24px;
  margin-top: 0;
}
.email-input-primary {
  font-family: 'Fira Mono';
  padding: 11.5px 8px;
  height: 20px;
  border: 2px solid var(--accent) !important;
  outline-style: none;
  width: 240px;
  background: #fff !important;
  color: #222;
}

.submit-button-primary {
  font-family: Poppins;
  border: 2px solid var(--accent) !important;
  appearance: button;
  text-transform: uppercase;
  padding: 16px;
  padding: 0.6rem 1.002rem;
  letter-spacing: .1em;
  background: transparent;
  color: var(--accent);
  font-weight: 400;
  font-size: 1rem;
  transition: .1s all linear;
}
.submit-button-primary:hover {
  color: #000;
  background: var(--accent) !important;
}

</style>
