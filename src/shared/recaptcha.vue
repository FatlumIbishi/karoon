<template>
  <div
    id="g-recaptcha"
    class="g-recaptcha"
    :data-sitekey="sitekey"
  >
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      sitekey: 'XXXXXXXX',
      widgetId: 0
    }
  },
  methods: {
    ...mapActions([ "setVerification" ]),
    render() {
      var self = this
      try {
        if (window.grecaptcha.render === undefined) {
          return setTimeout(() => {
            self.render();
          }, 2000)
        }
        window.grecaptcha.render('g-recaptcha', {
          sitekey: this.sitekey,
          theme: 'dark',
          // the callback executed when the user solve the recaptcha
          callback: () => {
            this.setVerification("true")
          },
          'expired-callback': () => {
            this.setVerification("false")
          }
        })
      } catch {
        setTimeout(() => {
          self.render();
        }, 2000)
      }
    }
  },
  mounted() {
    // render the recaptcha widget when the component is mounted
    this.render()
  }
}
</script>