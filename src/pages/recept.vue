<template>
  <fragment>

    <section class="uk-section-secondary uk-section uk-flex uk-flex-middle hero uk-light">
      <video
        src="../assets/video.mp4"
        loop
        muted
        playsinline
        uk-video="autoplay: inview"
      ></video>
      <div class="uk-width-1-1">
        <div class="uk-container uk-container-large">
          <div class="uk-grid-item-match uk-flex-middle uk-width-expand@m uk-margin-xlarge-bottom">
            <div class="uk-panel uk-width-1-1">
              <h2 class="uk-h1 uk-margin-remove-vertical uk-text-center">
                <img
                  uk-svg
                  src="../assets/karoon-logo.svg"
                />
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>

  </fragment>
</template>

<script>
export default {
  name: "Recept",
  components: {
  },
  computed: {
  },
  data: () => ({
  }),
  methods: {
    checkEdge() {
      if (window.navigator.userAgent.indexOf("Edge") > -1) return 1
      return 0
    },
    checkMoz() {
      if (window.navigator.userAgent.indexOf("Firefox") > 0) return 1
      return 0
    },
  }
}
</script>