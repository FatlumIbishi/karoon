<template>
  <fragment>
    <section class="uk-section-default">
      <div
        :style="`background-image: url(${receptImg});`"
        class="overlaybg uk-background-norepeat uk-background-cover uk-background-center-center uk-section uk-section-large"
      >
        <div class="uk-container uk-container-xlarge">
          <div class="uk-child-width-1-1 uk-grid-margin uk-grid-stack" uk-grid>
            <div class="uk-width-1-1@m uk-first-column">
              <h1
                class="uk-heading-medium uk-margin-remove-top uk-width-xlarge"
              >
                Aktuellt
              </h1>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div class="uk-section-muted uk-section">
      <div class="uk-container uk-container-xlarge">
        <div class="uk-child-width-1-1 uk-margin-large uk-grid-stack" uk-grid>
          <div class="uk-width-1-1@m">
            <div class="uk-margin uk-text-left">
              <div
                class="uk-grid-column-large uk-grid-margin"
                uk-grid
                v-for="(a, index) in aktuellt"
                :key="index"
              >
                <div
                  class="uk-grid-item-match uk-width-2-3@m"
                >
                  <div class="uk-panel uk-width-1-1">
                    <div
                      uk-slideshow="ratio: 4:3; autoplay: 1; autoplayInterval: 10000;"
                      class="uk-margin uk-container-item-padding-remove-left uk-slideshow"
                    >
                      <div class="uk-position-relative">
                        <ul class="uk-slideshow-items">
                          <li v-for="(b, i) in a.bild" :key="i" tabindex="-1">
                            <img
                              alt=""
                              uk-img="target: !.uk-slideshow-items"
                              uk-cover
                              :src="b"
                            />
                          </li>
                        </ul>

                        <div
                          class="uk-position-bottom-right uk-position-small uk-light"
                        >
                          <ul class="uk-dotnav uk-flex-right">
                            <li  v-for="(b, i) in a.bild" :key="i" :uk-slideshow-item="i">
                              <a href="#"></a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div :class="{'uk-flex-first': index % 2 === 1, 'uk-flex-last': index % 2 === 0}" class="uk-grid-item-match uk-flex-middle uk-width-1-3@m">
                  <div class="uk-panel uk-width-1-1">
                    <div
                      class="uk-panel uk-margin-remove-first-child uk-margin-remove-vertical uk-width-large@s"
                    >
                      <div class="uk-text-primary uk-margin-top">
                        {{ a.typ }} {{ a.datum ? `| ${a.datum}` : "" }}
                      </div>
                      <h2 class="uk-h3 uk-margin-top uk-margin-remove-bottom">
                        {{ a.namn }}
                      </h2>
                      <div v-html="a.text" class="uk-panel uk-margin-medium-top">

                      </div>
                      <!-- <div class="uk-margin-medium-top">
                            <a
                              href="https://demo.yootheme.com/wordpress/themes/creative-hub.white-turquoise/?company=speedwagon"
                              class="uk-button uk-button-secondary"
                              >Read more</a
                            >
                          </div> -->
                    </div>
                  </div>
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
import allaAktuellt from "../shared/aktuellt";
import receptImg from "../assets/recept.jpg";

export default {
  name: "Aktuellt",
  components: {},
  computed: {},
  data: () => ({
    aktuellt: allaAktuellt,
    receptImg: receptImg,
  }),
  methods: {},
};
</script>
