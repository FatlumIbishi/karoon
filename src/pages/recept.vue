<template>
  <fragment v-if="selectedProduct">
    <section class="noHero" />

    <section class="uk-section-default uk-section">
      <div class="uk-position-relative">
        <div class="uk-margin-medium uk-container">
          <div class="uk-grid-large uk-grid" uk-grid>
            <div class="uk-width-1-2@s uk-first-column">
              <div
                class="uk-position-relative uk-margin uk-text-left uk-position-z-index"
              >
                <img :src="selectedProduct.bild" :alt="selectedProduct.namn" />
              </div>
            </div>
            <div class="uk-grid-item-match uk-flex-middle uk-width-1-2@s">
              <div class="uk-panel uk-width-1-1">
                <h1
                  class="uk-position-relative uk-margin uk-width-large uk-text-left"
                >
                  {{ selectedProduct.namn }}
                </h1>
                <div
                  class="uk-panel uk-text-lead uk-position-relative uk-margin uk-width-large@m uk-text-left"
                >
                  <p>
                    {{ selectedProduct.desc }}
                  </p>
                </div>
                <div class="uk-position-relative uk-margin-large uk-text-left">
                  <div
                    class="uk-child-width-1-1 uk-child-width-auto@m uk-grid-medium uk-grid-divider uk-grid-match"
                    uk-grid
                  >
                    <div>
                      <div
                        class="uk-panel uk-margin-remove-first-child uk-transition-toggle"
                        uk-scrollspy="target: [uk-scrollspy-class];"
                      >
                        <div
                          class="uk-child-width-expand uk-grid-small uk-flex-middle"
                          uk-grid
                        >
                          <div class="uk-width-auto uk-first-column">
                            <div class="uk-inline-clip">
                              <img
                                src="https://demo.yootheme.com/demo/kitchen-daily/images/icon-clock-large.svg"
                                class="uk-text-secondary"
                                alt=""
                                uk-svg
                              />
                            </div>
                          </div>
                          <div class="uk-margin-remove-first-child">
                            <div class="uk-text-meta">Tid</div>
                            <div
                              class="uk-h6 uk-text-emphasis uk-margin-remove-top uk-margin-remove-bottom"
                            >
                              {{ selectedProduct.tid }}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="uk-visible@m uk-child-width-1-1 uk-grid-margin uk-grid-stack"
          uk-grid
        >
          <div
            class="uk-grid-item-match uk-width-1-1@m uk-visible@m uk-first-column"
          >
            <div class="uk-panel uk-width-1-1">
              <div
                class="uk-visible@m uk-position-absolute uk-width-1-1"
                style="top: -1020px;"
              >
                <img
                  src="https://demo.yootheme.com/wordpress/themes/kitchen-daily/wp-admin/admin-ajax.php?p=theme%2Fimage&src=WyIuLlwvZGVtb1wva2l0Y2hlbi1kYWlseVwvaW1hZ2VzXC9yZWNpcGVzLWhlcm8ucG5nIixbWyJkb1Jlc2l6ZSIsWzc2OCwxMjE1LDc2OCwxMjE1XV0sWyJkb0Nyb3AiLFs3NjgsMTIxNSwwLDBdXV1d&hash=a8a5e289a7f4c5b22a54d8961b1d13e4&action=kernel"
                  alt=""
                  target="!*"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="uk-section-muted uk-section uk-section-large">
      <div class="uk-margin-xlarge uk-container">
        <div class="uk-grid-column-large uk-grid" uk-grid>
          <div class="uk-width-1-3@m">
            <h2 class="uk-h4">
              Ingredienser
            </h2>
            <ul class="uk-list uk-margin-large uk-margin-remove-top">
              <li
                v-for="(ing, index) in selectedProduct.ingredienser"
                :key="index"
              >
                <div class="uk-child-width-expand uk-grid-column-small" uk-grid>
                  <div class="uk-width-small uk-text-break uk-first-column">
                    <div class="uk-margin-remove uk-text-bold">
                      {{ ing.matt }}
                    </div>
                  </div>
                  <div>
                    <div class="uk-panel">{{ ing.ingrediens }}</div>
                  </div>
                </div>
              </li>
            </ul>
            <!-- <h2 class="uk-h4 uk-margin-small"> Total tid </h2>
            <ul class="uk-list uk-list-divider uk-margin-large uk-margin-remove-top">
              <li>
                <div
                  class="uk-child-width-auto uk-grid-column-collapse uk-grid-row-small uk-flex-middle uk-grid"
                  uk-grid
                >
                  <div class="uk-width-expand uk-first-column">
                    <div class="uk-margin-remove">Förberedning</div>
                  </div>
                  <div>
                    <div>15 min</div>
                  </div>
                </div>
              </li>
              <li>
                <div
                  class="uk-child-width-auto uk-grid-column-collapse uk-grid-row-small uk-flex-middle uk-grid"
                  uk-grid
                >
                  <div class="uk-width-expand uk-first-column">
                    <div class="uk-margin-remove">Tillagning</div>
                  </div>
                  <div>
                    <div>45 min</div>
                  </div>
                </div>
              </li>
            </ul> -->
          </div>

          <div
            class="uk-width-2-3@m uk-flex-first@m uk-first-column uk-position-z-index"
          >
            <h2 class="uk-h4">
              Gör så här
            </h2>
            <ol
              class="uk-list uk-list-decimal uk-list-secondary uk-list-large uk-width-2xlarge@m"
            >
              <li v-for="(m, index) in selectedProduct.metod" :key="index">
                <div class="uk-panel">
                  <p>{{ m }}</p>
                </div>
              </li>
            </ol>
            <div class="uk-panel uk-margin-remove-first-child uk-margin-large">
              <h3 class="uk-h5 uk-margin-top uk-margin-remove-bottom">
                Anteckningar
              </h3>
              <div class="uk-panel uk-margin-small-top">
                <p>{{ selectedProduct.anteckningar }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </fragment>
</template>

<script>
import allProducts from "../shared/recept";

export default {
  name: "Recept",
  components: {},
  computed: {},
  data: () => ({
    selectedProduct: null,
  }),
  methods: {
    fetchProduct(urlCode) {
      var count = 0;
      for (let i = 0; i < allProducts.length; i++) {
        count++;
        if (allProducts[i].sn === urlCode) {
          return (this.selectedProduct = allProducts[i]);
        }
        if (count === allProducts.length) {
          this.empty();
        }
      }
    },
    empty() {
      this.$router.push("/");
    },
  },
  mounted() {
    setTimeout(() => {
      console.log(this.selectedProduct);
    }, 500);
  },
  created() {
    setTimeout(() => {
      this.fetchProduct(this.$route.params.recept.toLowerCase());
    }, 100);
  },
};
</script>
