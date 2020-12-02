<template>
  <fragment>

    <!-- MOBILE -->
    <div
      class="tm-header-mobile uk-hidden@m"
      uk-sticky="sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky"
    >
      <div class="uk-navbar-container">
        <nav uk-navbar>
          <div class="uk-navbar-left">
            <a
              class="uk-navbar-toggle"
              href="#tm-mobile"
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
        </nav>
      </div>

      <div
        id="tm-mobile"
        uk-offcanvas
        mode="push"
        overlay
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
                  <li>
                    <a
                      uk-scroll
                      href="#produkter"
                    >Produkter</a>
                  </li>
                  <li>
                    <a
                      uk-scroll
                      href="#aterforsaljare"
                    >
                      Återförsäljare
                    </a>
                  </li>
                  <li>
                    <a
                      uk-scroll
                      href="#varderingar"
                    >
                      Värderingar
                    </a>
                  </li>
                  <li>
                    <a
                      uk-scroll
                      href="#egenskaper"
                    >
                      Egenskaper
                    </a>
                  </li>
                  <li>
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
            <div class="uk-grid-margin uk-first-column">
              <div class="uk-panel">
                <ul
                  class="uk-flex-inline uk-flex-middle uk-flex-nowrap uk-grid-medium uk-grid-stack"
                  uk-grid
                >
                  <li>
                    <a
                      href="https://facebook.com/"
                      class="uk-icon-link uk-icon"
                    >
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://instagram.com/"
                      class="uk-icon-link uk-icon"
                    >
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://pinterest.com/"
                      class="uk-icon-link uk-icon"
                    >
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.youtube.com/channel/UCScfGdEgRCOh9YJdpGu82eQ"
                      class="uk-icon-link uk-icon"
                    >
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
      uk-sticky="animation: uk-animation-slide-top; sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky; cls-inactive: uk-navbar-transparent uk-light mainMenu; top: 80vh"
    >
      <nav class="uk-navbar-container">
        <div class="uk-container uk-container-large uk-position-relative">
          <div uk-navbar>
            <div class="uk-navbar-center">
              <div class="uk-navbar-center-left">
                <ul class="uk-navbar-nav">
                  <li>
                    <a
                      uk-scroll
                      href="#produkter"
                    >Produkter</a>
                  </li>
                  <li>
                    <a
                      uk-scroll
                      href="#aterforsaljare"
                    >
                      Återförsäljare
                    </a>
                  </li>
                  <li>
                    <router-link to="/recept">Recept</router-link>
                  </li>
                </ul>
              </div>
              <a
                href="/"
                class="uk-navbar-item uk-logo"
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
                  <li>
                    <a
                      uk-scroll
                      href="#varderingar"
                    >
                      Värderingar
                    </a>
                  </li>
                  <li>
                    <a
                      uk-scroll
                      href="#egenskaper"
                    >
                      Egenskaper
                    </a>
                  </li>
                  <li>
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
            <a href=""><i class="fab fa-facebook-square"></i></a>
            <a href=""><i class="fab fa-instagram"></i></a>
            <a href=""><i class="fab fa-youtube"></i></a>
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
  }),
  computed: {
  },
  components: {
  },
  mounted() { },
  methods: {
    hideMenu() {
      const element = this.$refs.dropDownMenu;
      // eslint-disable-next-line no-undef
      UIkit.drop(element).hide();
    },
  },
}
</script>