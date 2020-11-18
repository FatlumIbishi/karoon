<template>
  <fragment>

    <section
      uk-height-viewport
      class="uk-section uk-section-xlarge uk-position-relative uk-flex uk-flex-middle"
    >
      <div class="uk-width-1-1">
        <div
          class="heroImage"
          uk-parallax="y: 0, -100"
        >
          <img src="https://images.pexels.com/photos/235925/pexels-photo-235925.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
        </div>
        <div
          class="uk-container uk-container-large"
          uk-parallax="y: 0, 200"
        >
          <div uk-grid>
            <div class="uk-width-2-3@m">
            </div>
            <div class="uk-width-1-3@m">
              <div
                class="uk-card uk-card-large uk-card-body uk-margin-remove-first-child uk-margin uk-text-center uk-scrollspy-inview uk-animation-slide-bottom-medium yellowGradient"
                uk-scrollspy-class
              >
                <div class="uk-h4 uk-margin-top uk-margin-remove-bottom">Ris med kärlek och kvalité</div>
                <h1 class="uk-h2 uk-margin-top uk-margin-remove-bottom">KAROON</h1>
                <div class="uk-h3 uk-margin-top">smakar helt<br>enkelt bättre</div>
              </div>
            </div>
          </div>
          <!-- <div
          class="uk-margin-remove-top"
          uk-grid
        >
          <div class="uk-width-2-3@m uk-first-column">
            <div
              class="uk-position-relative uk-position-z-index uk-scrollspy-inview uk-animation-slide-bottom-medium"
              uk-scrollspy-class
            >
              <img
                class="riceImage"
                src="../assets/karoon.png"
              />
            </div>
          </div>
          <div class="uk-width-1-3@m">
          </div>
        </div> -->
        </div>
      </div>
    </section>

    <section class="uk-section-default uk-section-overlap uk-dark">
      <div
        uk-img
        class="uk-section uk-section-large uk-flex uk-flex-middle"
        uk-height-viewport="offset-bottom: 20"
      >
        <div class="uk-container uk-container-large">
          <div
            class="uk-grid-large uk-margin-large"
            uk-grid
          >
            <div class="uk-grid-item-match uk-margin-xlarge-top uk-width-1-3@m uk-height-1-1">
              <div class="uk-panel uk-h3 uk-margin-small uk-text-left@m uk-text-center">Vid foten av</div>
              <h3 class="uk-h2 uk-margin-small uk-text-left@m uk-text-center">
                Himalaya
              </h3>
              <div class="uk-panel uk-text-large uk-margin-small uk-text-left@m uk-text-center">På de mest naturliga och bördiga marker odlas vårt långkorniga basmatiris.</div>
            </div>
            <div class="uk-width-2-3@m">
              <div
                uk-slideshow="minHeight: 610;"
                class="uk-margin uk-slideshow"
              >
                <div class="uk-position-relative">
                  <ul class="uk-slideshow-items">
                    <li tabindex="-1">
                      <img
                        class="uk-cover"
                        alt=""
                        uk-img="target: !.uk-slideshow-items"
                        uk-cover
                        src="https://images.pexels.com/photos/247597/pexels-photo-247597.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                      >
                    </li>
                  </ul>
                  <div class="uk-visible@s uk-light">
                    <a
                      class="uk-position-center-left uk-position-small uk-hidden-hover"
                      href="#"
                      uk-slidenav-previous
                      uk-slideshow-item="previous"
                    ></a>
                    <a
                      class="uk-position-center-right uk-position-small uk-hidden-hover"
                      href="#"
                      uk-slidenav-next
                      uk-slideshow-item="next"
                    ></a>
                  </div>
                </div>
              </div>
              <div>
                <p>Risets egenskaper och halten av kalcium, magnesium och kalium, som alla är nödvändiga för kroppens funktion och uppbyggnad, gör Karoon till ett utmärkt val för dig som vill äta god och näringsrik mat.
                  Riset innehåller även kostfiber, som gör att du håller dig mätt längre. </p>
                <a
                  href=""
                  class="uk-button uk-button-large uk-button-primary uk-border-pill"
                >Läs mer</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section
      id="adventures"
      class="uk-section-muted uk-section-overlap uk-dark"
    >
      <div
        uk-img
        class="uk-section uk-section-large uk-flex uk-flex-middle"
        uk-height-viewport="offset-bottom: 20"
      >
        <div class="uk-container uk-container-large">
          <div
            class="uk-grid-large uk-margin-large"
            uk-grid
          >
            <div class="uk-grid-item-match uk-width-1-3@m uk-height-1-1 uk-flex-last@m">
              <div class="uk-panel uk-h3 uk-margin-small uk-text-left@m uk-text-center">Lätt &amp; luftig konsistens</div>
              <h3 class="uk-h2 uk-margin-small uk-text-left@m uk-text-center">
                med nötaktig smak
              </h3>
              <div class="uk-panel uk-text-large uk-margin-small uk-text-left@m uk-text-center">Det passar lika bra till att vara en del av en huvudrätt, som att vara en ingrediens i en sallad eller efterrätt. </div>
            </div>
            <div class="uk-width-2-3@m">
              <div
                uk-slideshow="minHeight: 610;"
                class="uk-margin uk-slideshow"
              >
                <div class="uk-position-relative">
                  <ul class="uk-slideshow-items">
                    <li tabindex="-1">
                      <img
                        class="uk-cover"
                        alt=""
                        uk-img="target: !.uk-slideshow-items"
                        uk-cover
                        src="https://images.pexels.com/photos/4110260/pexels-photo-4110260.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                      >
                    </li>
                  </ul>
                  <div class="uk-visible@s uk-light">
                    <a
                      class="uk-position-center-left uk-position-small uk-hidden-hover"
                      href="#"
                      uk-slidenav-previous
                      uk-slideshow-item="previous"
                    ></a>
                    <a
                      class="uk-position-center-right uk-position-small uk-hidden-hover"
                      href="#"
                      uk-slidenav-next
                      uk-slideshow-item="next"
                    ></a>
                  </div>
                </div>
              </div>
              <div>
                <p>Risets egenskaper och halten av kalcium, magnesium och kalium, som alla är nödvändiga för kroppens funktion och uppbyggnad, gör Karoon till ett utmärkt val för dig som vill äta god och näringsrik mat.
                  Riset innehåller även kostfiber, som gör att du håller dig mätt längre. </p>
                <a
                  href=""
                  class="uk-button uk-button-large uk-button-primary uk-border-pill"
                >Läs mer</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div class="uk-section-default">
      <div
        uk-img
        class="uk-background-norepeat uk-background-cover uk-background-center-center uk-background-fixed uk-section uk-section-large uk-light"
        style="background-image: url('https://images.pexels.com/photos/1660898/pexels-photo-1660898.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260');"
      >
        <div class="uk-container uk-container-large">
          <div
            class="uk-child-width-1-1 uk-grid-margin uk-grid-stack"
            uk-grid
          >
            <div class="uk-width-1-1@m uk-first-column uk-text-center">
              <h2 class="uk-h2 uk-text-center">Se våra goda recept</h2>
              <div class="uk-text-large uk-text-center uk-margin-auto uk-width-xlarge">På de mest naturliga och bördiga marker odlas vårt långkorniga basmatiris.</div>
              <a
                class="uk-button uk-button-primary uk-button-large uk-border-pill uk-margin-medium-top"
                href="#"
              >
                Se recept</a>
            </div>
          </div>
        </div>

      </div>

    </div>

    <!-- <section
      id="about"
      class="uk-section uk-section-large uk-section-default"
      uk-height-viewport="offset-bottom: 20"
    >
      <div class="uk-container uk-container-large">
        <h3 class="uk-h1 uk-margin-large uk-text-left@m uk-text-center">
          About
        </h3>
        <div
          class="uk-grid-column-small uk-margin-small"
          uk-grid
        >
          <div class="uk-grid-item-match uk-flex-middle uk-width-2-3@s uk-first-column">
            <div class="uk-panel uk-width-1-1">
              <div class="uk-margin uk-text-center">
                <div
                  class="uk-child-width-1-1 uk-child-width-1-2@s uk-grid-small"
                  uk-grid
                >
                  <div class="uk-first-column">
                    <div class="uk-inline-clip uk-light">
                      <img
                        alt=""
                        uk-img
                        src="../assets/boat-1.jpg"
                      >
                    </div>
                  </div>
                  <div>
                    <div class="uk-inline-clip uk-light">
                      <img
                        alt=""
                        uk-img
                        src="../assets/boat-2.jpg"
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="uk-grid-item-match uk-flex-middle uk-width-1-3@s">
            <div class="uk-panel uk-width-1-1">
              <h3 class="uk-h4 uk-text-center uk-margin-remove-bottom">On the beautiful waters of Marco Island</h3>
              <hr class="uk-divider-small uk-text-center">
              <div class="uk-panel uk-margin uk-width-medium uk-margin-auto uk-text-center">Let us take you on a day time or dinner sunset cruise on the beautiful waters of Marco Island,
                Naples, Isles of Capri and 10,000 Islands along the Golf of Mexico coast line with daily excursions on our 40' yacht.
              </div>
            </div>
          </div>
        </div>

        <div
          class="uk-grid-column-small uk-margin-small"
          uk-grid
        >
          <div class="uk-grid-item-match uk-flex-middle uk-width-2-3@s">
            <div class="uk-panel uk-width-1-1">
              <div class="uk-margin-remove-vertical">
                <img
                  alt=""
                  uk-img
                  class="aboutImg"
                  src="../assets/joshua.jpg"
                >
              </div>
            </div>
          </div>
          <div class="uk-grid-item-match uk-flex-middle uk-width-1-3@s uk-flex-first@s uk-first-column">
            <div class="uk-panel uk-width-1-1">
              <h3 class="uk-h4 uk-text-center">Joshua James Skinner</h3>
              <hr class="uk-divider-small uk-text-center">
              <div class="uk-panel uk-margin uk-width-medium uk-margin-auto uk-text-center">Positive, soft spoken and funny. Josh is originally from Minocqua Wisconsin.
                He moved to Florida to pursue his dreams of living and working on the water.
                Josh then became a Licensed Master Captain and PADI Dive instructor.
                With careful consideration he bought the 40' yacht
                to offer dream vacations for one and all.</div>
            </div>
          </div>
        </div>

        <div
          class="uk-grid-column-small uk-margin-small"
          uk-grid
        >
          <div class="uk-grid-item-match uk-flex-middle uk-width-2-3@s uk-flex-first@s">
            <div class="uk-panel uk-width-1-1">
              <div class="uk-margin-remove-vertical">
                <img
                  alt=""
                  uk-img
                  class="aboutImg top"
                  src="../assets/luxury.jpg"
                >
              </div>
            </div>
          </div>
          <div class="uk-grid-item-match uk-flex-middle uk-width-1-3@s uk-flex-first@s uk-first-column">
            <div class="uk-panel uk-width-1-1">
              <h3 class="uk-h4 uk-text-center">Luxury vacations</h3>
              <hr class="uk-divider-small uk-text-center">
              <div class="uk-panel uk-margin uk-width-medium uk-margin-auto uk-text-center">We offer standard and custom charters, with industries most competitive
                pricing cruise which means everyone can experience luxury vacations.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section> -->

    <!-- <section
      id="contact"
      class="uk-section-muted uk-section uk-section-large"
    >
      <div class="uk-container uk-container-large">
        <div
          class="uk-grid-large uk-grid-margin-large"
          uk-grid
        >
          <div class="uk-grid-item-match uk-flex-middle uk-width-expand@m uk-visible@m">
            <div class="uk-panel uk-width-1-1">
              <div class="uk-margin uk-text-center">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4699.828306657711!2d-81.72726112300585!3d25.981852533741353!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88daef8596ccb7d7%3A0x9ffb99c7acee95da!2s387%20Capri%20Blvd%2C%20Naples%2C%20FL%2034113%2C%20USA!5e0!3m2!1sen!2sse!4v1604660147120!5m2!1sen!2sse"
                  width="600"
                  height="450"
                  frameborder="0"
                  style="border:0;"
                  allowfullscreen=""
                  aria-hidden="false"
                  tabindex="0"
                ></iframe>
              </div>
            </div>
          </div>
          <div class="uk-grid-item-match uk-flex-middle uk-width-expand@m uk-first-column">
            <div class="uk-panel uk-width-1-1">
              <h3 class="uk-h2">Contact us</h3>
              <form
                v-if="!loadingTxt"
                @submit.prevent="sendEmail"
                method="POST"
              >
                <div class="inputPlaceholder">
                  <input
                    class="uk-input uk-form-large"
                    type="text"
                    name="name"
                    v-model="nameMsg"
                    placeholder=" "
                  >
                  <label>Name*</label>
                </div>
                <div class="inputPlaceholder">
                  <input
                    class="uk-input uk-form-large"
                    type="email"
                    name="_replyto"
                    v-model="emailMsg"
                    placeholder=" "
                  >
                  <label>Mail*</label>
                </div>
                <div class="inputPlaceholder">
                  <textarea
                    class="uk-textarea uk-form-large"
                    type="text"
                    rows="3"
                    name="message"
                    v-model="messageMsg"
                    placeholder=" "
                  />
                  <label>Message (optional)</label>
                </div>
                <div
                  v-if="errorTxt"
                  class="uk-alert-danger"
                  uk-alert
                >
                  <p>{{errorTxt}}</p>
                </div>
                <Recaptcha />
                <button
                  type="submit"
                  class="uk-margin-top uk-button uk-button-secondary"
                >Send</button>
              </form>
              <p
                class="uk-text-large"
                v-if="loadingTxt"
              >Thank you, We'll be in touch soon!</p>
            </div>
          </div>
        </div>
      </div>
    </section> -->

  </fragment>
</template>

<script>
import axios from 'axios';

export default {
  name: "Home",
  components: {
  },
  computed: {
  },
  data: () => ({
    nameMsg: '',
    emailMsg: '',
    messageMsg: '',
    loadingTxt: false,
    errorTxt: "",
  }),
  methods: {
    sendEmail() {
      if (!this.nameMsg) {
        return this.errorTxt = "Please type your name"
      }
      if (!this.emailMsg) {
        return this.errorTxt = "Please type your email"
      }
      // if (!this.getVerification) {
      //   return this.errorTxt = "reCAPTCHA not done!"
      // }
      if (this.nameMsg && this.emailMsg) {
        this.loadingTxt = true;
      }
      axios.post('https://formspree.io/XXXXXX', {
        name: this.nameMsg,
        from: this.emailMsg,
        _subject: `${this.nameMsg} | Meddelande från karoon.se`,
        message: this.messageMsg,
        option: this.radioMsg
      },
      ).then(() => {
        this.nameMsg = '';
        this.emailMsg = '';
        this.messageMsg = '';
      }).catch((error) => {
        if (error.response) {
          this.errorText = error.response
        }
      });
    },
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