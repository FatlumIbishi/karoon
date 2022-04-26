<template>
  <fragment>

    <!-- MOBILE -->
    <div
      class="uk-hidden@m"
      uk-sticky="sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky"
    >
      <div class="uk-navbar-container">
        <nav uk-navbar>
          <div class="uk-navbar-left">
            <a
              class="uk-navbar-toggle"
              href="#karoon-mobile"
              uk-toggle
            >
              <div
                uk-navbar-toggle-icon
                class="uk-icon uk-navbar-toggle-icon"
              />
            </a>
          </div>
          <div class="uk-navbar-center">
            <a
              href="/"
              class="uk-navbar-item uk-logo"
            >
              <img
                alt="Karoon Logo"
                src="../assets/karoon-logo.svg"
                class="logoImg"
              ></a>
          </div>
          <div class="uk-navbar-right mobileSocial uk-margin-right">
            <a
              href="https://facebook.com/karoonrice"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="fab fa-facebook-square"></i>
            </a>
            <a
              href="https://instagram.com/karoonrice"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="fab fa-instagram"></i>
            </a>
            <a
              href="https://www.youtube.com/channel/UCJalskm9MKT3oEcrpOaCfzQ"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="fab fa-youtube"></i>
            </a>
          </div>
        </nav>
      </div>

      <div
        id="karoon-mobile"
        uk-offcanvas
        overlay
        ref="offCanvas"
      >
        <div class="uk-offcanvas-bar">
          <button
            class="uk-offcanvas-close uk-icon uk-close"
            type="button"
            uk-close
          ></button>
          <div
            class="uk-child-width-1-1 uk-grid-stack"
            uk-grid
          >
            <div class="uk-first-column">
              <div class="uk-panel">
                <ul class="uk-nav uk-nav-default">
                  <li v-if="notHome">
                    <router-link
                      uk-scroll
                      @click.native="hideMenu"
                      :to="{name: 'Home', hash: '#produkter'}"
                    >
                      Produkter
                    </router-link>
                  </li>
                  <li v-else>
                    <a
                      uk-scroll
                      @click="hideMenu"
                      href="#produkter"
                    >
                      Produkter
                    </a>
                  </li>
                  <li v-if="notHome">
                    <router-link
                      uk-scroll
                      @click.native="hideMenu"
                      :to="{name: 'Home', hash: '#aterforsaljare'}"
                    >
                      Återförsäljare
                    </router-link>
                  </li>
                  <li v-else>
                    <a
                      uk-scroll
                      @click="hideMenu"
                      href="#aterforsaljare"
                    >
                      Återförsäljare
                    </a>
                  </li>
                  <li>
                    <router-link
                      @click.native="hideMenu"
                      to="/recept"
                    >
                      Recept
                    </router-link>
                  </li>
                  <li v-if="notHome">
                    <router-link
                      uk-scroll
                      @click.native="hideMenu"
                      :to="{name: 'Home', hash: '#varderingar'}"
                    >
                      Värderingar
                    </router-link>
                  </li>
                  <li v-else>
                    <a
                      uk-scroll
                      @click="hideMenu"
                      href="#varderingar"
                    >
                      Värderingar
                    </a>
                  </li>
                  <li>
                    <router-link
                      @click.native="hideMenu"
                      to="/aktuellt"
                    >
                      Aktuellt
                    </router-link>
                  </li>
                  <li v-if="notHome">
                    <router-link
                      uk-scroll
                      @click.native="hideMenu"
                      :to="{name: 'Home', hash: '#egenskaper'}"
                    >
                      Egenskaper
                    </router-link>
                  </li>
                  <li v-else>
                    <a
                      uk-scroll
                      @click="hideMenu"
                      href="#egenskaper"
                    >
                      Egenskaper
                    </a>
                  </li>
                  <li v-if="notHome">
                    <router-link
                      uk-scroll
                      @click.native="hideMenu"
                      :to="{name: 'Home', hash: '#kontakt'}"
                    >
                      Kontakt
                    </router-link>
                  </li>
                  <li v-else>
                    <a
                      uk-scroll
                      @click="hideMenu"
                      href="#kontakt"
                    >
                      Kontakt
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- DESKTOP -->
    <div
      class="uk-visible@m"
      :class="{'darktext': notHome}"
      uk-sticky="animation: uk-animation-slide-top; sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky; cls-inactive: uk-navbar-transparent uk-light mainMenu; top: 80vh"
    >
      <nav class="uk-navbar-container">
        <div class="uk-container uk-container-large uk-position-relative">
          <div uk-navbar>
            <div class="uk-navbar-center">
              <div class="uk-navbar-center-left">
                <ul class="uk-navbar-nav">
                  <li v-if="notHome">
                    <router-link
                      uk-scroll
                      :to="{name: 'Home', hash: '#produkter'}"
                    >
                      Produkter
                    </router-link>
                  </li>
                  <li v-else>
                    <a
                      uk-scroll
                      href="#produkter"
                    >
                      Produkter
                    </a>
                  </li>
                  <li v-if="notHome">
                    <router-link
                      uk-scroll
                      :to="{name: 'Home', hash: '#aterforsaljare'}"
                    >
                      Återförsäljare
                    </router-link>
                  </li>
                  <li v-else>
                    <a
                      uk-scroll
                      href="#aterforsaljare"
                    >
                      Återförsäljare
                    </a>
                  </li>
                  <li>
                    <router-link to="/recept">
                      Recept
                    </router-link>
                  </li>
                </ul>
              </div>
              <a
                href="/"
                class="uk-navbar-item uk-logo"
                :class="{nothome: notHome}"
              >
                <img
                  uk-svg
                  src="../assets/karoon-logo.svg"
                  alt="Logo"
                  class="logoImg"
                />
              </a>
              <div class="uk-navbar-center-right">
                <ul class="uk-navbar-nav">
                  <li v-if="notHome">
                    <router-link
                      uk-scroll
                      :to="{name: 'Home', hash: '#varderingar'}"
                    >
                      Värderingar
                    </router-link>
                  </li>
                  <li v-else>
                    <a
                      uk-scroll
                      href="#varderingar"
                    >
                      Värderingar
                    </a>
                  </li>
                  <li>
                    <router-link to="/aktuellt">Aktuellt</router-link>
                  </li>
                  <li v-if="notHome">
                    <router-link
                      uk-scroll
                      :to="{name: 'Home', hash: '#egenskaper'}"
                    >
                      Egenskaper
                    </router-link>
                  </li>
                  <li v-else>
                    <a
                      uk-scroll
                      href="#egenskaper"
                    >
                      Egenskaper
                    </a>
                  </li>
                  <li v-if="notHome">
                    <router-link
                      uk-scroll
                      :to="{name: 'Home', hash: '#kontakt'}"
                    >
                      Kontakt
                    </router-link>
                  </li>
                  <li v-else>
                    <a
                      uk-scroll
                      href="#kontakt"
                    >
                      Kontakt
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="socialmediamenu">
            <a
              href="https://facebook.com/karoonrice"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="fab fa-facebook-square"></i>
            </a>
            <a
              href="https://instagram.com/karoonrice"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="fab fa-instagram"></i>
            </a>
            <a
              href="https://www.youtube.com/channel/UCJalskm9MKT3oEcrpOaCfzQ"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="fab fa-youtube"></i>
            </a>
          </div>
        </div>
      </nav>
    </div>

  </fragment>
</template>

<script>
export default {
  name: "Menu",
  data: () => ({
    notHome: false,
  }),
  computed: {
  },
  components: {
  },
  mounted() {
    if (this.$route.path !== "/") {
      this.notHome = true;
    }
  },
  watch: {
    $route(to) {
      if (to.path !== "/") {
        return this.notHome = true;
      }
      this.notHome = false;
    }
  },
  methods: {
    hideMenu() {
      const element = this.$refs.offCanvas;
      // eslint-disable-next-line no-undef
      UIkit.offcanvas(element).hide();
    },
  },
}
</script>