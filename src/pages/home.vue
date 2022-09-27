<template>
  <div>
    <section
      class="uk-section-secondary uk-section uk-flex uk-flex-middle hero uk-light"
    >
      <video
        src="../assets/video.mp4"
        loop
        muted
        playsinline
        uk-video="autoplay: inview"
      ></video>
      <div class="uk-width-1-1">
        <div class="uk-container uk-container-large">
          <div
            class="uk-grid-item-match uk-flex-middle uk-width-expand@m uk-margin-xlarge-bottom"
          >
            <div class="uk-panel uk-width-1-1">
              <h2 class="uk-h1 uk-margin-remove-vertical uk-text-center">
                <img uk-svg src="../assets/karoon-logo.svg" />
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section
      id="produkter"
      class="uk-section-default uk-section uk-section-large"
    >
      <div class="uk-container uk-container-large">
        <div class="uk-grid-margin" uk-grid>
          <div class="uk-grid-item-match uk-flex-middle uk-width-1-3@m">
            <div class="uk-panel uk-width-1-1">
              <h2 class="uk-h1 uk-margin-remove-top">
                Våra produkter
              </h2>
              <div class="uk-margin-medium uk-margin-remove-top">
                Ett naturligt gott och hälsosamt basmatiris. Våra påsar finns i
                1, 2, 5, 10 eller 20 kilo. 1kg räcker till ca 13 måltider för 1
                person.
              </div>
              <div class="uk-margin-medium">
                <a
                  class="uk-button uk-button-primary uk-button-large uk-border-pill"
                  uk-scroll
                  href="#aterforsaljare"
                >
                  Hitta återförsäljare
                </a>
              </div>
            </div>
          </div>
          <div class="uk-grid-item-match uk-flex-middle uk-width-2-3@m">
            <div class="uk-panel uk-width-1-1">
              <div class="uk-margin">
                <img alt="" uk-img src="../assets/produkter.png" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section
      id="varderingar"
      class="uk-section uk-section-large uk-section-muted"
    >
      <div class="uk-container uk-container-large">
        <h2 class="uk-h2 uk-text-center">Våra värderingar</h2>
        <div
          class="uk-panel uk-text-center uk-margin-medium uk-margin-remove-top uk-text-large"
        >
          På våra tillverkningsanläggningar ser vi alltid till att våra
          medarbetare har en trygg, rättvis och jämställd arbetsmiljö. Målet är
          att våra värderingar respekteras i varje steg av produktionen. Odlarna
          vi samarbetar med får givetvis också rättvist betalt.
        </div>
        <div class="uk-child-width-1-3@m uk-grid-match" uk-grid>
          <div>
            <div class="uk-card uk-card-default">
              <div class="uk-card-media-top uk-cover-container">
                <img
                  class="rattvistImg"
                  src="../assets/varderingar.jpg"
                  alt=""
                  uk-cover
                />
                <canvas height="300"></canvas>
              </div>
              <div class="uk-card-body">
                <h3 class="uk-card-title">Rättvist</h3>
                <p>
                  Givetvis får bönderna vi köper riset av rättvist betalt,
                  likaså garanterar vi att det inte förekommer barnarbete i
                  fabriken. För oss är detta en självklarhet, men vi känner ändå
                  att vi behöver förmedla det till våra kunder, så det inte
                  finns några oklarheter kring det.
                </p>
              </div>
            </div>
          </div>
          <div>
            <div class="uk-card uk-card-default">
              <div class="uk-card-media-top uk-cover-container">
                <img src="../assets/miljo.jpg" alt="" uk-cover />
                <canvas height="300"></canvas>
              </div>
              <div class="uk-card-body">
                <h3 class="uk-card-title">Miljö</h3>
                <p>
                  Vi försöker att minimera skadliga effekter på miljön, genom
                  att kontrollera jord, växtskyddsmedel, odlingar och att se
                  till fabriken hanterar allt korrekt. Miljöarbetet är ju en
                  pågående process och vi försöker alltid att bli bättre.
                </p>
              </div>
            </div>
          </div>
          <div>
            <div class="uk-card uk-card-default">
              <div class="uk-card-media-top uk-cover-container">
                <img src="../assets/kvalite.jpg" alt="" uk-cover />
                <canvas height="300"></canvas>
              </div>
              <div class="uk-card-body">
                <h3 class="uk-card-title">Kvalité</h3>
                <p>
                  Vårt mål har hela tiden varit att få fram det bästa riset på
                  marknaden, utan att kompromissa med våra värderingar. Vi har
                  kombinerat modern teknologi med traditionellt kunnande och
                  omtanke.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="uk-section-default">
      <div
        uk-img
        class="uk-background-norepeat uk-background-cover uk-background-center-center uk-background-fixed uk-section uk-section-large uk-light uk-background-primary"
        :style="`background-image: url(${receptImg});`"
      >
        <div class="uk-container uk-container-large">
          <div class="uk-child-width-1-1 uk-grid-margin uk-grid-stack" uk-grid>
            <div class="uk-width-1-1@m uk-text-center">
              <h2 class="uk-h2 uk-text-center">
                Inpiration till din matlagning
              </h2>
              <router-link
                class="uk-button uk-button-primary uk-button-large uk-border-pill uk-margin-medium-top"
                to="/recept"
              >
                Se recept
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section
      id="egenskaper"
      class="uk-section-default uk-section uk-section-large"
    >
      <div class="uk-container uk-container-large">
        <div class="uk-grid-margin" uk-grid>
          <div
            class="uk-grid-item-match uk-flex-middle uk-width-1-2@m uk-flex-last@m"
          >
            <div class="uk-panel uk-width-1-1">
              <h2 class="uk-h1 uk-margin-remove-top">
                Risets Egenskaper
              </h2>
              <div class="uk-panel uk-margin-medium uk-margin-remove-top">
                Karoon ris har en lätt, luftig konsistens med en lite nötaktig
                smak. Den passar lika bra till att vara en del av en huvudrätt,
                som att vara en ingrediens i en sallad eller efterrätt.
              </div>
              <div class="uk-margin-medium">
                <a
                  class="uk-button uk-button-primary uk-button-large uk-border-pill"
                  href="#modal-naringsdeklaration"
                  uk-toggle
                >
                  Se näringsdeklaration
                </a>
              </div>
            </div>
          </div>
          <div class="uk-grid-item-match uk-flex-middle uk-width-1-2@m">
            <div class="uk-panel uk-width-1-1">
              <div class="uk-margin">
                <img alt="" uk-img src="../assets/egenskaper.jpg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div id="modal-naringsdeklaration" uk-modal>
      <div class="uk-modal-dialog uk-modal-body">
        <h2 class="uk-modal-title uk-text-center">Näringsdeklaration</h2>
        <p class="uk-text-center">
          Energideklaration per 100 g:
        </p>
        <div
          class="uk-grid-collapse uk-width-medium uk-margin-auto"
          uk-grid
          v-for="(naring, index) in naringsdeklaration"
          :key="index"
        >
          <div class="uk-width-expand" uk-leader="fill: .">
            {{ naring.typ }}
          </div>
          <div>
            {{ naring.varde }}
          </div>
        </div>
        <p class="uk-text-center">
          Innehållet är noga kontrollerat av företaget J.S. Hamilton<br />
          Karoon har ett lågt glykemiskt index(58) och är glutenfritt.
        </p>
        <p class="uk-text-center">
          <button
            class="uk-button uk-button-default uk-modal-close"
            type="button"
          >
            Stäng
          </button>
        </p>
      </div>
    </div>

    <section id="omoss" class="uk-section-muted uk-section uk-section-large">
      <div class="uk-container uk-container-large">
        <div class="uk-grid-margin" uk-grid>
          <div class="uk-grid-item-match uk-flex-middle uk-width-2-3@m">
            <div class="uk-panel uk-width-1-1">
              <h2 class="uk-h1 uk-margin-remove-top" uk-scrollspy-class>
                Om Karoon
              </h2>
              <div
                class="uk-grid-large uk-child-width-1-1 uk-grid-margin-large uk-grid-stack"
                uk-grid
              >
                <div class="uk-width-1-1@m">
                  <div class="uk-margin">
                    <div
                      class="uk-child-width-1-1 uk-child-width-1-2@s uk-grid-large uk-grid-match"
                      uk-grid
                    >
                      <div>
                        <div class="uk-panel uk-margin-remove-first-child">
                          <h3 class="uk-margin-top uk-margin-remove-bottom">
                            Odlingar
                          </h3>
                          <div class="uk-panel uk-margin-top">
                            Vi har erfarna medarbetare som köper ris direkt från
                            lokala bönder. Riskornen sköljs sedan flera gånger
                            innan det börjar behandlas, vilket är viktigt för
                            både kvalité och smak. Då vi är med i hela
                            processen, från odlingar och fram till färdig
                            produkt, så har vi även inblick i användandet av
                            gödsel och växtskyddsmedel. Detta gör att halter av
                            rester från bekämpningsmedel är mycket låga. Riset
                            testas regelbundet i både Sverige och Tyskland för
                            att säkerställa det. Vi vill att alla ska kunna
                            känna sig trygga med att äta Karoon.
                          </div>
                        </div>
                      </div>
                      <div>
                        <div class="uk-panel uk-margin-remove-first-child">
                          <h3 class="uk-margin-top uk-margin-remove-bottom">
                            Anläggningar
                          </h3>
                          <div class="uk-panel uk-margin-top">
                            Under senare år har hela anläggningen uppdaterats
                            och allt görs nu digitalt, vilket underlättar hela
                            framställningen. Sensorer känner av, så att
                            temperatur och luftfuktighet alltid är på rätt
                            nivåer när det torkas och lagras. Den noggranna
                            kontrollen gör, att riset kan bevara sin doft och
                            smak samt att Karoon inte har några brutna riskorn.
                            Den digitala utrustningen som används i vår
                            anläggning är från
                            <a
                              href="https://satake-group.com/"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Satake </a
                            >, ett företag vars apparaturer är världsledande
                            inom risframställning.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="uk-grid-item-match uk-flex-middle uk-width-1-3@m">
            <div class="uk-panel uk-width-1-1">
              <div
                class="uk-margin uk-scrollspy-inview uk-animation-slide-right-medium"
                uk-scrollspy-class
              >
                <img alt="" uk-img src="../assets/omoss.jpg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section
      id="aterforsaljare"
      class="uk-section uk-section-large uk-section-default"
    >
      <div class="uk-container uk-container-large">
        <h2 class="uk-h2 uk-text-center">Återförsäljare</h2>
        <div
          class="uk-panel uk-text-center uk-margin-medium uk-margin-remove-top uk-text-large"
        >
          Vårt ris finns att köpa i de flesta asiatiska livsmedelsbutiker och
          orienthus i
          <strong
            >Göteborg, Helsingborg, Karlstad, Malmö, Mellerud, Vänersborg,
            Lysekil, Uddevalla och Stockholm.</strong
          >
        </div>
        <div class="uk-margin-medium">
          <div class="uk-child-width-1-3@m uk-grid-match" uk-grid>
            <div>
              <div class="uk-card">
                <div class="uk-card-media-top uk-text-center">
                  <img src="../assets/stora-coop.png" alt="" />
                </div>
                <div class="uk-card-body uk-text-center">
                  <h3 class="uk-card-title">Stora Coop</h3>
                </div>
              </div>
            </div>
            <div>
              <div class="uk-card">
                <div class="uk-card-media-top uk-text-center">
                  <img src="../assets/oob.png" alt="" />
                </div>
                <div class="uk-card-body uk-text-center">
                  <h3 class="uk-card-title">ÖoB</h3>
                </div>
              </div>
            </div>
            <div>
              <div class="uk-card">
                <div class="uk-card-media-top uk-text-center">
                  <img src="../assets/icakvantum.svg" alt="" />
                </div>
                <div class="uk-card-body uk-text-center">
                  <h3 class="uk-card-title">ICA Kvantum</h3>
                  <p>Kungsbacka, Kungsmässan</p>
                </div>
              </div>
            </div>
            <div>
              <div class="uk-card">
                <div class="uk-card-media-top uk-text-center">
                  <img src="../assets/icanara.svg" alt="" />
                </div>
                <div class="uk-card-body uk-text-center">
                  <h3 class="uk-card-title">ICA Nära</h3>
                  <p>Mölnlycke</p>
                </div>
              </div>
            </div>
            <div>
              <div class="uk-card">
                <div class="uk-card-media-top uk-text-center">
                  <img src="../assets/orienthus.png" alt="" />
                </div>
                <div class="uk-card-body uk-text-center">
                  <h3 class="uk-card-title">Göteborgs Orienthus</h3>
                </div>
              </div>
            </div>
            <div>
              <div class="uk-card">
                <div class="uk-card-media-top uk-text-center">
                  <img src="../assets/nawras.png" alt="" />
                </div>
                <div class="uk-card-body uk-text-center">
                  <h3 class="uk-card-title">Nawras</h3>
                </div>
              </div>
            </div>
            <div>
              <div class="uk-card">
                <div class="uk-card-media-top uk-text-center">
                  <img src="../assets/simmo.png" alt="" />
                </div>
                <div class="uk-card-body uk-text-center">
                  <h3 class="uk-card-title">Simmo World Food AB</h3>
                </div>
              </div>
            </div>
            <div>
              <div class="uk-card">
                <div class="uk-card-media-top uk-text-center">
                  <img src="../assets/gladjegron.jpg" alt="" />
                </div>
                <div class="uk-card-body uk-text-center">
                  <h3 class="uk-card-title">Glädje Grön</h3>
                </div>
              </div>
            </div>
            <div>
              <div class="uk-card">
                <div class="uk-card-media-top uk-text-center">
                  <img src="../assets/balkanfood.jpg" alt="" />
                </div>
                <div class="uk-card-body uk-text-center">
                  <h3 class="uk-card-title">Balkan Food</h3>
                </div>
              </div>
            </div>
            <div>
              <div class="uk-card">
                <div class="uk-card-media-top uk-text-center">
                  <img src="../assets/nassim.jpg" alt="" />
                </div>
                <div class="uk-card-body uk-text-center">
                  <h3 class="uk-card-title">Nassim</h3>
                </div>
              </div>
            </div>
            <div>
              <div class="uk-card">
                <div class="uk-card-media-top uk-text-center">
                  <img src="../assets/lebsan.svg" alt="" />
                </div>
                <div class="uk-card-body uk-text-center">
                  <h3 class="uk-card-title">Lebsan Food AB</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="uk-child-width-1-1 uk-width-1-2 uk-margin-auto uk-grid uk-grid-stack"
          uk-grid=""
        >
          <div class="uk-width-1-1@m uk-first-column">
            <div class="uk-margin">
              <div
                class="uk-child-width-1-1 uk-child-width-1-2@s uk-grid-match uk-grid"
                uk-grid=""
              >
                <div class="uk-first-column">
                  <div class="uk-panel uk-margin-remove-first-child">
                    <h2
                      class="uk-h4 uk-heading-bullet uk-margin-top uk-margin-remove-bottom"
                    >
                      Vårt ris sälj idag till följande länder
                    </h2>
                    <div class="uk-panel uk-margin-top">
                      Turkiet, Storbritannien, Norge, Polen, Irak, Libanon,
                      Kurdistan
                    </div>
                  </div>
                </div>
                <div>
                  <div class="uk-panel uk-margin-remove-first-child">
                    <h2
                      class="uk-h4 uk-heading-bullet uk-margin-top uk-margin-remove-bottom"
                    >
                      Vill du bli återförsäljare/ grossist?
                    </h2>
                    <div class="uk-panel uk-margin-top">
                      Skicka förfrågan till
                      <a href="mailto:info@karoon.se">info@karoon.se</a> eller
                      <a
                        href="#kontakt"
                        v-on:click.stop="intresseradKnapp()"
                        uk-scroll
                        class="uk-button uk-button-primary uk-border-pill uk-margin-top"
                      >
                        kontakta oss här
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="video" class="uk-section uk-section-muted uk-section-large">
      <div class="uk-container uk-container-large">
        <div class="uk-child-width-1-3@m uk-grid-small uk-grid-match" uk-grid>
          <div v-for="(v, index) in videos" :key="index">
            <div class="uk-card uk-card-default">
              <div class="uk-card-media-top">
                <iframe
                  :src="
                    `https://www.youtube-nocookie.com/embed/${v.videokod}?autoplay=0&amp;showinfo=0&amp;rel=0&amp;modestbranding=1&amp;playsinline=1`
                  "
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

    <section
      id="kontakt"
      class="uk-section uk-section-large uk-section-default uk-padding-remove-bottom"
    >
      <div class="uk-container uk-container-large">
        <div uk-grid>
          <div class="uk-width-1-3@m">
            <div class="uk-card">
              <h3 class="uk-card-title">Kontakta oss</h3>
              <ul class="uk-list uk-width-medium">
                <li>
                  <div
                    class="uk-child-width-auto uk-grid-small uk-flex-bottom"
                    uk-grid
                  >
                    <div class="uk-width-expand">
                      <div class="uk-margin-remove">
                        <i class="fas fa-map-marker-alt" /><span
                          class="uk-margin-small-left"
                          >Vart</span
                        >
                      </div>
                    </div>
                    <div>
                      Business Center Marieholm
                    </div>
                  </div>
                  <div
                    class="uk-child-width-auto uk-grid-small uk-flex-bottom uk-margin-remove-top"
                    uk-grid
                  >
                    <div class="uk-width-expand"></div>
                    <div>
                      Marieholmsgatan 42
                    </div>
                  </div>
                  <div
                    class="uk-child-width-auto uk-grid-small uk-flex-bottom uk-margin-remove-top"
                    uk-grid
                  >
                    <div class="uk-width-expand"></div>
                    <div>
                      402 52 Göteborg
                    </div>
                  </div>
                </li>
                <li>
                  <div
                    class="uk-child-width-auto uk-grid-small uk-flex-bottom"
                    uk-grid
                  >
                    <div class="uk-width-expand">
                      <div class="uk-margin-remove">
                        <i class="fas fa-mobile-alt" /><span
                          class="uk-margin-small-left"
                          >Tel</span
                        >
                      </div>
                    </div>
                    <div>
                      <a href="tel:0317800200">+46 31-780 02 00</a><br />
                    </div>
                  </div>
                </li>
                <li>
                  <div
                    class="uk-child-width-auto uk-grid-small uk-flex-bottom"
                    uk-grid
                  >
                    <div class="uk-width-expand">
                      <div class="uk-margin-remove">
                        <i class="far fa-envelope-open" /><span
                          class="uk-margin-small-left"
                          >Mail</span
                        >
                      </div>
                    </div>
                    <div>
                      <a href="mailto: info@karoon.se">info@karoon.se</a>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div class="uk-width-2-3@m">
            <form
              v-if="!loadingTxt"
              @submit.prevent="sendEmail"
              method="POST"
              class="uk-form-stacked"
            >
              <div uk-grid class="uk-margin">
                <div class="uk-width-1-2@s">
                  <label class="uk-form-label" for="form-stacked-text"
                    >Ditt namn*</label
                  >
                  <div class="uk-form-controls">
                    <input
                      class="uk-input"
                      id="form-stacked-text"
                      name="name"
                      v-model="nameMsg"
                      placeholder="Skriv in ditt namn"
                    />
                  </div>
                </div>
                <div class="uk-width-1-2@s">
                  <label class="uk-form-label" for="form-stacked-text"
                    >Email*</label
                  >
                  <div class="uk-form-controls">
                    <input
                      class="uk-input"
                      id="form-stacked-text"
                      type="email"
                      name="_replyto"
                      v-model="emailMsg"
                      placeholder="Skriv in din mailadress"
                    />
                  </div>
                </div>
              </div>
              <div uk-grid class="uk-margin">
                <div class="uk-width-1-2@s">
                  <label class="uk-form-label" for="form-stacked-text"
                    >Telefon</label
                  >
                  <div class="uk-form-controls">
                    <input
                      class="uk-input"
                      id="form-stacked-text"
                      type="tel"
                      name="phone"
                      v-model="phoneMsg"
                      placeholder="Skriv ditt telefonnummer"
                    />
                  </div>
                </div>
                <div class="uk-width-1-2@s">
                  <label class="uk-form-label" for="form-stacked-text"
                    >Företag</label
                  >
                  <div class="uk-form-controls">
                    <input
                      class="uk-input"
                      id="form-stacked-text"
                      type="text"
                      name="company"
                      v-model="companyMsg"
                      placeholder=" "
                    />
                  </div>
                </div>
              </div>
              <div class="uk-margin">
                <label class="uk-form-label" for="form-stacked-text"
                  >Meddelande</label
                >
                <div class="uk-form-controls">
                  <textarea
                    class="uk-textarea"
                    type="text"
                    rows="3"
                    name="message"
                    v-model="messageMsg"
                    placeholder="Skriv ett meddelande"
                  ></textarea>
                </div>
              </div>
              <div v-if="errorTxt" class="uk-alert-warning" uk-alert>
                <p>{{ errorTxt }}</p>
              </div>
              <div class="uk-margin">
                <button
                  type="submit"
                  class="uk-button uk-button-primary uk-button-large uk-border-pill"
                >
                  Skicka
                </button>
              </div>
            </form>
            <p v-if="loadingTxt" class="uk-h4">
              Tack för ert meddelande, vi hör av oss så fort vi kan.
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import axios from "axios";
import allaVideos from "../shared/videos";
import receptImg from "../assets/recept.jpg";

export default {
  name: "Home",
  components: {},
  computed: {},
  data: () => ({
    code: "myybnkdd",
    nameMsg: "",
    emailMsg: "",
    phoneMsg: "",
    companyMsg: "",
    messageMsg: "",
    loadingTxt: false,
    errorTxt: "",
    videos: allaVideos,
    receptImg: receptImg,
    intresserad: "Är intresserad av att bli återförsäljare/grossist.",
    naringsdeklaration: [
      {
        typ: "Energivärde",
        varde: "1253 kJ/359 kcal",
      },
      {
        typ: "Fett",
        varde: "1 g",
      },
      {
        typ: "- varav mättat fett",
        varde: "0,5 g",
      },
      {
        typ: "Kolhydrater",
        varde: "77,6 g",
      },
      {
        typ: "- varav sockerarter",
        varde: "0,3 g",
      },
      {
        typ: "Protein",
        varde: "8,7 g",
      },
      {
        typ: "Salt",
        varde: "0,04 g",
      },
      {
        typ: "Kalcium",
        varde: "2,82 mg",
      },
      {
        typ: "Magnesium",
        varde: "21,4 mg",
      },
      {
        typ: "Kalium",
        varde: "132 mg",
      },
      {
        typ: "Järn",
        varde: "0,63 mg",
      },
      {
        typ: "Zink",
        varde: "0,67 mg",
      },
      {
        typ: "Selen",
        varde: "0,068 mg",
      },
      {
        typ: "Krom",
        varde: "0,1 mg",
      },
    ],
  }),
  methods: {
    sendEmail() {
      if (!this.nameMsg) {
        return (this.errorTxt = "Vänligen skriv in ditt namn");
      }
      if (!this.emailMsg) {
        return (this.errorTxt = "Vänligen skriv in din mailadress");
      }
      // if (!this.getVerification) {
      //   return (this.errorTxt = "reCAPTCHA not done!");
      // }
      if (this.nameMsg && this.emailMsg) {
        this.loadingTxt = true;
      }
      axios
        .post(`https://formspree.io/f/${this.code}`, {
          name: this.nameMsg,
          from: this.emailMsg,
          _subject: `${this.nameMsg} | Meddelande från Karoon.se`,
          message: this.messageMsg,
          phone: this.phoneMsg,
          company: this.companyMsg,
        })
        .then(() => {
          this.nameMsg = "";
          this.emailMsg = "";
          this.messageMsg = "";
          this.phoneMsg = "";
          this.companyMsg = "";
        })
        .catch((error) => {
          if (error.response) {
            this.errorText = error.response;
          }
        });
    },
    intresseradKnapp() {
      this.messageMsg = this.intresserad;
    },
  },
};
</script>
