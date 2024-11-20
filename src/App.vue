<template>
  <div class="main">
    <mobileMenu></mobileMenu>

    <!-- Header -->

    <header>
      <div class="logo">
        <div class="image">
          <img src="./assets/logo.webp" />
        </div>
        <div class="text">
          <p>BlueBrain</p>
        </div>
      </div>
      <nav>
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/services">Services</router-link>
        <router-link to="/contact">Contact</router-link>
      </nav>
      <div @click="openMenu" ref="hamburger" class="hamburger">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </header>

    <router-view v-slot="{ Component }">
      <transition name="fade">
        <Component :is="Component" />
      </transition>
    </router-view>

    <!-- Footer -->

    <footer v-motion-slide-visible-once-bottom>
      <div class="wave">
        <img src="./assets/wave.svg" />
      </div>
      <div class="main-footer-content">
        <div class="logo">
          <img src="./assets/alternate-logo.png" />
        </div>
        <div class="footer-text">
          <div class="contact">
            <h3>Contact</h3>
            <div>
              <i class="bi bi-telephone"></i>
              <a href="tel:+234 902 932 3576">+234 902 932 3576</a>
            </div>
            <div>
              <i class="bi bi-telephone"></i>
              <a href="tel:+234 706 405 3899">+234 706 405 3899</a>
            </div>
            <div>
              <i class="bi bi-envelope"></i>
              <a href="mailto:naryilois@gmail.com">naryilois@gmail.com</a>
            </div>
            <div>
              <a href="#"><i class="bi bi-facebook"></i></a>
              <a href="#"><i class="bi bi-instagram"></i></a>
              <a href="#"><i class="bi bi-twitter-x"></i></a>
              <a href="#"><i class="bi bi-linkedin"></i></a>
            </div>
          </div>

          <div class="address">
            <h3>Address</h3>
            <div>
              <h4>Main Office</h4>
              <div>
                <i class="bi bi-geo-alt"></i>
                <p>26 T. OS Benson Crescent Utako, FCT Abuja</p>
              </div>
            </div>
            <div>
              <h4>Branch Office</h4>
              <div>
                <i class="bi bi-geo-alt"></i>
                <p>
                  (The Farm Service Centre) Sharp Corner, Kamuru Station.
                  Z/Kataf LGA
                </p>
              </div>
            </div>
          </div>

          <div class="links">
            <h3>Links</h3>
            <router-link to="/">Home</router-link>
            <router-link to="/about">About</router-link>
            <router-link to="/services">Services</router-link>
            <router-link to="/contact">Contact</router-link>
          </div>
        </div>
      </div>
      <div class="copyright">
        <p>
          &copy; {{ new Date().getFullYear() }} BlueBrain Agro & Allied Services
          Ltd.
        </p>
      </div>
    </footer>
  </div>
</template>

<script>
import mobileMenu from "./components/mobileMenu.vue";
export default {
  components: { mobileMenu },
  methods: {
    openMenu() {
      this.$refs.hamburger.classList.toggle("active");
      document.getElementById("mobileMenu").classList.toggle("active");
    },
  },
};
</script>

<style lang="scss">
@import "./assets/main.scss";

/* Router transition */

.fade-enter-from,
.fade-leave-to {
  transform: translateX(-100%);
}

.fade-enter-active,
.fade-leave-active {
  transition: transform 0.5s ease-out;
}

/* Header */

.main {
  width: 100%;
  background-color: $background-color;
  header {
    position: sticky;
    top: 0;
    width: 100%;
    height: 75px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: $primary-color;
    padding: 0 5%;
    z-index: 10;
    .logo {
      width: 40%;
      height: 75%;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 10px;
      .image {
        height: 100%;
        padding: 2.5%;
        img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }
      }
      .text {
        font-family: $logo-font;
        color: $white-text-color;
        font-size: 20px;
      }
    }
    nav {
      display: none;
      width: 50%;
      justify-content: center;
      gap: 25px;
      a {
        color: $white-text-color;
        font-family: $alternate-font;
        position: relative;
        &:before {
          content: "";
          width: 0;
          height: 2px;
          position: absolute;
          left: 0;
          bottom: 0;
          background-color: $accent-color;
          border-radius: 5px;
          transition: 0.25s;
        }
        &:hover {
          &:before {
            width: 100%;
          }
        }
      }
      .router-link-exact-active {
        &:before {
          width: 100%;
        }
      }
    }
    .hamburger {
      width: 20px;
      height: 25px;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      position: relative;
      cursor: pointer;
      span {
        width: 100%;
        height: 1.5px;
        border-radius: 10px;
        background-color: $white-text-color;
        transition: 0.25s transform;
      }
      &.active {
        span {
          position: absolute;
        }
        :nth-child(1) {
          transform: rotate(45deg);
        }
        :nth-child(2) {
          opacity: 0;
        }
        :nth-child(3) {
          transform: rotate(-45deg);
        }
      }
    }
  }
}

@include md {
  .main {
    header {
      .logo {
        width: 25%;
        .image {
          padding: 5%;
        }
      }
    }
  }
}

@include lg {
  .main {
    header {
      .logo {
        justify-content: center;
        gap: 10px;
        .image {
          padding: 2.5%;
        }
      }
      nav {
        display: flex;
      }
      .hamburger {
        display: none;
      }
    }
  }
}

.main {
  footer {
    background-color: $primary-color;
    .wave {
      width: 100%;
      img {
        width: 100%;
      }
    }
    .main-footer-content {
      padding: 0 5%;
      .logo {
        width: 100%;
        img {
          width: 100%;
          padding: 5%;
        }
      }
      .footer-text {
        display: flex;
        flex-direction: column;
        gap: 25px;
        .contact,
        .address,
        .links {
          display: flex;
          flex-direction: column;
          gap: 10px;
          h3 {
            font-family: $header-font;
            color: $white-text-color;
          }
        }
        .contact {
          > div {
            display: flex;
            align-items: center;
            gap: 10px;
            padding-left: 5px;
            i {
              color: $white-text-color;
            }
            a {
              color: $white-text-color;
              font-family: $body-font;
              i {
                &:hover {
                  color: $accent-color;
                }
              }
              &:hover {
                color: $accent-color;
              }
            }
          }
        }
      }
      .address {
        h4 {
          font-family: $alternate-font;
          color: $white-text-color;
        }
        > div {
          padding: 0 5px;
          display: flex;
          flex-direction: column;
          gap: 5px;
          > div {
            display: flex;
            gap: 10px;
            align-items: center;
            color: $white-text-color;
            padding: 0 5px;
            font-family: $body-font;
          }
        }
      }
      .links {
        a {
          color: $white-text-color;
          font-family: $body-font;
          padding-left: 5px;
          &:hover {
            color: $accent-color;
          }
        }
      }
    }
    .copyright {
      padding: 2.5% 0 2.5% 5%;
      color: $white-text-color;
      font-family: $alternate-font;
      background-color: darken($color: $primary-color, $amount: 2.5);
    }
  }
}

@include md {
  .main {
    footer {
      .main-footer-content {
        .logo {
          height: 200px;
          padding: 0;
          img {
            height: 100%;
            object-fit: contain;
          }
        }
        .footer-text {
          width: 100%;
          flex-direction: row;
          justify-content: space-evenly;
        }
      }
      .copyright {
        margin-top: 5px;
      }
    }
  }
}

@include lg {
  .main {
    footer {
      .main-footer-content {
        display: flex;
        align-items: center;
        .logo {
          width: 35%;
          height: auto;
        }
      }
      .copyright {
        font-size: 17.5px;
        padding: 20px 0 20px 5%;
      }
    }
  }
}
</style>
