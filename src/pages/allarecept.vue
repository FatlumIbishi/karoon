<template>
  <fragment>
    <section class="uk-section-default">
      <div
        :style="`background-image: url(${receptImg});`"
        class="overlaybg uk-background-norepeat uk-background-cover uk-background-center-center uk-section uk-section-xlarge"
      >
        <div class="uk-container uk-container-xlarge">
          <div class="uk-child-width-1-1 uk-grid-margin uk-grid-stack" uk-grid>
            <div class="uk-width-1-1@m uk-first-column">
              <h1
                class="uk-heading-medium uk-margin-remove-top uk-width-xlarge"
              >
                Inpiration till din matlagning
              </h1>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div class="uk-section-muted uk-section">
      <div class="uk-container uk-container-xlarge">
        <div class="uk-child-width-1-1 uk-margin-large uk-grid-stack" uk-grid>
          <div class="uk-width-1-1@m uk-first-column">
            <div class="uk-margin uk-text-left">
              <div
                class="uk-child-width-1-2 uk-child-width-1-3@s uk-child-width-1-4@m uk-child-width-1-5@l uk-grid-column-medium uk-grid-match"
                uk-grid
              >
                <div v-for="(r, index) in recept" :key="index">
                  <router-link
                    class="uk-panel uk-margin-remove-first-child uk-transition-toggle uk-link-toggle uk-display-block"
                    :to="`/recept/${r.sn}`"
                  >
                    <div class="uk-inline-clip">
                      <img
                        :src="r.bild"
                        class="uk-transition-scale-up uk-transition-opaque"
                        :alt="r.namn"
                      />
                    </div>
                    <h2 class="uk-h5 uk-margin-top uk-margin-remove-bottom">
                      {{ r.namn }}
                    </h2>
                    <div
                      class="uk-text-meta uk-text-secondary uk-margin-small-top"
                    >
                      <img
                        class="uk-margin-small-right"
                        uk-svg
                        src="https://demo.yootheme.com/demo/kitchen-daily/images/icon-clock-small.svg"
                      />
                      {{ r.tid }}
                    </div>
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </fragment>
</template>

<script>
import allaRecept from "../shared/recept";
import receptImg from "../assets/recept.jpg";

export default {
  name: "Alla Recept",
  components: {},
  computed: {},
  data: () => ({
    recept: allaRecept,
    receptImg: receptImg,
  }),
  methods: {},
};
</script>
