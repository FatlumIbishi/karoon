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

    <section
      id="produkter"
      class="uk-section-default uk-section-overlap uk-dark"
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
            <div class="uk-grid-item-match uk-width-1-3@m uk-height-1-1">
              <div class="uk-panel uk-h3 uk-margin-remove uk-text-left@m uk-text-center">Våra</div>
              <h3 class="uk-h2 uk-margin-remove uk-text-left@m uk-text-center">
                Produkter
              </h3>
              <div class="uk-panel uk-text-large uk-margin-medium uk-text-left@m uk-text-center">Det passar lika bra till att vara en del av en huvudrätt, som att vara en ingrediens i en sallad eller efterrätt.</div>
            </div>
            <div class="uk-width-2-3@m">
              <div
                uk-slideshow="minHeight: 380;"
                class="uk-margin uk-slideshow"
              >
                <div class="uk-position-relative">
                  <ul class="uk-slideshow-items">
                    <li tabindex="-1">
                      <img
                        alt=""
                        uk-img="target: !.uk-slideshow-items"
                        src="../assets/produkter.png"
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
            </div>
          </div>
        </div>
      </div>
    </section>

    <section
      id="varderingar"
      class="uk-section-muted uk-section-overlap uk-dark"
    >
      <div
        uk-img
        class="uk-section uk-section-large uk-flex uk-flex-middle"
        uk-height-viewport="offset-bottom: 20"
      >
        <div class="uk-container uk-container-large">
          <h2 class="uk-h2 uk-text-center">Våra värderingar</h2>
          <div
            class="uk-child-width-1-3@m"
            uk-grid
          >
            <div>
              <div class="uk-card uk-card-default">
                <div class="uk-card-media-top uk-cover-container">
                  <img
                    class="rattvistImg"
                    src="../assets/varderingar.jpg"
                    alt=""
                    uk-cover
                  >
                  <canvas height="300"></canvas>
                </div>
                <div class="uk-card-body">
                  <h3 class="uk-card-title">Rättvist</h3>
                  <p>Givetvis får bönderna vi köper riset av rättvist betalt, likaså garanterar vi att det inte förekommer barnarbete i fabriken. För oss är detta en självklarhet, men vi känner ändå att vi behöver förmedla det till våra kunder, så det inte finns några oklarheter kring det.</p>
                </div>
              </div>
            </div>
            <div>
              <div class="uk-card uk-card-default">
                <div class="uk-card-media-top uk-cover-container">
                  <img
                    src="https://images.pexels.com/photos/886521/pexels-photo-886521.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                    alt=""
                    uk-cover
                  >
                  <canvas height="300"></canvas>
                </div>
                <div class="uk-card-body">
                  <h3 class="uk-card-title">Miljö</h3>
                  <p>Vi försöker att minimera skadliga effekter på miljön, genom att kontrollera jord, växtskyddsmedel, odlingar och att se till fabriken hanterar allt korrekt.
                    Miljöarbetet är ju en pågående process och vi försöker alltid att bli bättre.</p>
                </div>
              </div>
            </div>
            <div>
              <div class="uk-card uk-card-default">
                <div class="uk-card-media-top uk-cover-container">
                  <img
                    src="https://images.unsplash.com/photo-1586201375761-83865001e31c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80"
                    alt=""
                    uk-cover
                  >
                  <canvas height="300"></canvas>
                </div>
                <div class="uk-card-body">
                  <h3 class="uk-card-title">Kvalité</h3>
                  <p>Vårt mål har hela tiden varit att få fram det bästa riset på marknaden, utan att kompromissa med våra värderingar. Vi har kombinerat modern teknologi med traditionellt kunnande och omtanke.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="uk-section-default">
      <div
        uk-img
        class="uk-background-norepeat uk-background-cover uk-background-center-center uk-background-fixed uk-section uk-section-large uk-light uk-background-blend-hard-light uk-background-secondary"
        style="background-image: url('https://image.shutterstock.com/z/stock-photo-persian-honey-glazed-chicken-and-jeweled-rice-selective-focus-1006917820.jpg');"
      >
        <div class="uk-container uk-container-large">
          <div
            class="uk-child-width-1-1 uk-grid-margin uk-grid-stack"
            uk-grid
          >
            <div class="uk-width-1-1@m uk-first-column uk-text-center">
              <h2 class="uk-h2 uk-text-center">Inpiration till din matlagning</h2>
              <a
                class="uk-button uk-button-primary uk-button-large uk-border-pill uk-margin-medium-top"
                href="#"
              >
                Se recept</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section
      id="egenskaper"
      class="uk-section-default uk-section-overlap uk-dark"
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
            <div class="uk-grid-item-match uk-width-1-3@m uk-height-1-1">
              <div class="uk-panel uk-h3 uk-margin-remove uk-text-left@m uk-text-center">Karoons</div>
              <h3 class="uk-h2 uk-margin-remove uk-text-left@m uk-text-center">
                Egenskaper
              </h3>
              <div class="uk-panel uk-text-large uk-margin-medium uk-text-left@m uk-text-center">Det passar lika bra till att vara en del av en huvudrätt, som att vara en ingrediens i en sallad eller efterrätt.</div>
              <button class="uk-button uk-button-large uk-button-primary uk-border-pill uk-width-auto">Se näringsdeklaration</button>
            </div>
            <div class="uk-width-2-3@m">
              <div
                uk-slideshow="minHeight: 380;"
                class="uk-margin uk-slideshow"
              >
                <div class="uk-position-relative">
                  <ul class="uk-slideshow-items">
                    <li tabindex="-1">
                      <img
                        alt=""
                        uk-img="target: !.uk-slideshow-items"
                        src="https://image.shutterstock.com/z/stock-photo-green-peas-basmati-rice-or-matar-pulav-served-with-plain-dal-775904398.jpg"
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
            </div>
          </div>
        </div>
      </div>
    </section>

    <section
      id="omoss"
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
            <div class="uk-grid-item-match uk-width-2-3@m uk-height-1-1 uk-flex-last@m">
              <div class="uk-panel uk-h3 uk-margin-remove uk-text-left@m uk-text-center">Om</div>
              <h3 class="uk-h2 uk-margin-remove uk-text-left@m uk-text-center">
                Karoon
              </h3>
              <div class="uk-panel uk-text-large uk-margin-medium uk-text-left@m uk-text-center">Det passar lika bra till att vara en del av en huvudrätt, som att vara en ingrediens i en sallad eller efterrätt.</div>
            </div>
            <div class="uk-width-1-3@m">
              <div
                uk-slideshow="minHeight: 380;"
                class="uk-margin uk-slideshow"
              >
                <div class="uk-position-relative">
                  <ul class="uk-slideshow-items">
                    <li tabindex="-1">
                      <img
                        alt=""
                        uk-img="target: !.uk-slideshow-items"
                        src="../assets/omoss.jpg"
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
            </div>
          </div>
        </div>
      </div>
    </section>

    <div
      id="modal-example"
      uk-modal
    >
      <div class="uk-modal-dialog uk-modal-body">
        <h2 class="uk-modal-title">Headline</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <p class="uk-text-right">
          <button
            class="uk-button uk-button-primary"
            type="button"
          >Stäng</button>
        </p>
      </div>
    </div>

    <section
      id="video"
      class="uk-section uk-section-default uk-section-large"
    >
      <div class="uk-container uk-container-large">
        <div
          class="uk-child-width-1-3@m uk-grid-small uk-grid-match"
          uk-grid
        >
          <div
            v-for="(v, index) in videos"
            :key="index"
          >
            <div class="uk-card uk-card-default">
              <div class="uk-card-media-top">
                <iframe
                  :src="`https://www.youtube-nocookie.com/embed/${v.videokod}?autoplay=0&amp;showinfo=0&amp;rel=0&amp;modestbranding=1&amp;playsinline=1`"
                  width="1920"
                  height="1080"
                  frameborder="0"
                  allowfullscreen
                  uk-responsive
                  autoplay="false"
                  uk-video="automute: true"
                ></iframe>

              </div>
              <div class="uk-card-body">
                <h3 class="uk-card-title">{{ v.titel }}</h3>
                <p>{{ v.info }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

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
import allaVideos from "../shared/videos";

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
    videos: allaVideos,
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