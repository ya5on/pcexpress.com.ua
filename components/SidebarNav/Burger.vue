<template>
  <div class="header">
    <nav class="header__nav">
      <ul class="header__navbar">
        <li class="header__item">
          <div class="header__link">
            <transition name="slide-fade">
              <!-- Header Navigation Menu Icons -->
              <button class="header--button" v-if="show" key="on" @click="show = false">
                <svg viewBox="0 0 24 24" class="header--icon">
                  <title>Close</title>
                  <path d="M0 0h24v24H0V0z" fill="none"/>
                  <path fill="currentColor"
                        d="M18.3 5.71c-.39-.39-1.02-.39-1.41 0L12 10.59 7.11 5.7c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41L10.59 12 5.7 16.89c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L12 13.41l4.89 4.89c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z"/>
                </svg>
              </button>
              <button class="header--button" v-else key="off" @click="show = true">
                <i class="fa fa-bars"></i>
              </button>
            </transition>
          </div>
          <!-- Dropdown Menu -->
          <transition name="dropdown">
            <div class="dropdown__menu" v-bind:class="{ active: show }" v-if="show">
              <ul class="dropdown__menu-nav">
                <li class="dropdown__menu-item" @click.prevent="toggle">
                  <div class="dropdown__menu-link user-login">
                    <a v-if="!isUserLoggedIn" class="u-header-topbar__nav-link" style="cursor: pointer"
                       @click="showSignupModal">
                        <span class="icon">
                          <i class="fa fa-user-plus"></i>
                        </span>
                      <span>{{ signupLabel }}</span>
                    </a>
                    <a v-if="!isUserLoggedIn" class="u-header-topbar__nav-link" style="cursor: pointer"
                       @click="showLoginModal">
                        <span class="icon">
                          <i class="fa fa-user"></i>
                        </span>
                      <span>{{ loginLabel }}</span>
                    </a>

                    <div v-if="isUserLoggedIn" class="navbar-item has-dropdown is-hoverable">
                      <a class="u-header-topbar__nav-link">
                        Здравствуйте <span style="font-weight: bold">{{ getUserName }}</span>,
                        <a class="u-header-topbar__nav-link" style="cursor: pointer" @click="logout">
                          {{ logoutLabel }}
                        </a>
                      </a>
                    </div>
                  </div>
                </li>
                <li class="dropdown__menu-item" @click.prevent="toggle">
                  <nuxt-link exact no-prefetch active-class="link-active" to="/" class="dropdown__menu-link">
                    <div class="dropdown__menu-svg">
                      <i class="fa fa-home"></i>
                    </div>
                    <div class="dropdown__menu-text">Главная</div>
                  </nuxt-link>
                </li>
                <li class="dropdown__menu-item" @click.prevent="toggle">
                  <nuxt-link exact no-prefetch active-class="link-active" to="/category/"
                             class="dropdown__menu-link">
                    <div class="dropdown__menu-svg">
                      <img style="width: 19px" src="../../assets/img/menu-icon/grid.png"/>
                    </div>
                    <div class="dropdown__menu-text">Каталог товаров</div>
                  </nuxt-link>
                </li>
                <li class="dropdown__menu-item d-flex" @click.prevent="toggle">
                  <nuxt-link exact no-prefetch active-class="link-active" to="/user/wishlist"
                             class="dropdown__menu-link">
                    <div class="dropdown__menu-svg">
                      <i class="ec ec-favorites"></i>
                    </div>
                    <div class="dropdown__menu-text">Список желаний</div>
                    <span class="fav-count" v-if="$store.state.favorites.length > 0 ">{{ $store.state.favorites.length }}</span>
                  </nuxt-link>
                </li>
                <li class="dropdown__menu-item" @click.prevent="toggle">
                  <nuxt-link exact no-prefetch active-class="link-active" to="/info" class="dropdown__menu-link">
                    <div class="dropdown__menu-svg">
                      <i class="fa fa-info"></i>
                    </div>
                    <div class="dropdown__menu-text">Информация</div>
                  </nuxt-link>
                </li>
                <li class="dropdown__menu-item" @click.prevent="toggle">
                  <nuxt-link exact no-prefetch active-class="link-active" to="/contacts" class="dropdown__menu-link">
                    <div class="dropdown__menu-svg">
                      <i class="ec ec-map-pointer"></i>
                    </div>
                    <div class="dropdown__menu-text">Контакты</div>
                  </nuxt-link>
                </li>
                <li class="dropdown__menu-item" @click.prevent="toggle">
                  <nuxt-link exact no-prefetch active-class="link-active" to="/track-your-order"
                             class="dropdown__menu-link">
                    <div class="dropdown__menu-svg">
                      <i class="ec ec-transport"></i>
                    </div>
                    <div class="dropdown__menu-text">Отследить заказ НП</div>
                  </nuxt-link>
                </li>
                <!-- Dropdown Menu Separator -->
                <hr>
                <ul class="d-flex">
                  <li class="dropdown__menu-item">
                    <a class="social--link" href="viber://chat?number=+380676043468" target="_blank">
                      <img src="../../assets/svg/components/viber.svg" alt="" title="Написать в Viber">
                    </a>
                  </li>
                  <li class="dropdown__menu-item">
                    <a class="social--link" href="https://t.me/Mikola_Dziuba" title="Написать в Telegram"
                       target="_blank">
                      <img src="../../assets/svg/components/telegram.svg" alt="">
                    </a>
                  </li>
                </ul>
              </ul>
            </div>
          </transition>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Burger",
  data() {
    return {
      show: false,
      wishlistLabel: 'Wishlist',
      logoutLabel: 'Выйти',
      loginLabel: 'Войти',
      signupLabel: 'Регистрация'
    }
  },
  methods: {
    toggle() {
      this.show = !this.show
    },
    logout() {
      this.$store.commit('isUserLoggedIn', false);
      this.$store.commit('isUserSignedUp', false);
      this.$store.commit('removeFromFavorites');

      // redirect to homepage
      this.$router.push({name: 'index'});
    },
    showLoginModal() {
      this.$store.commit('showLoginModal', true);
    },
    showSignupModal() {
      this.$store.commit('showSignupModal', true);
    }
  },
  computed: {
    isUserLoggedIn() {
      return this.$store.getters.isUserLoggedIn;
    },
    getUserName() {
      let name = this.$store.getters.getUserName;

      if (name === '') {
        return 'user';
      } else {
        return name;
      }
    }
  },
}
</script>

<style lang="scss" scoped>
:root {
  --font-primary: 'Open Sans', sans-serif;
  --color-gray: #dadce0;
}
.user-login {
  display: flex;
  flex-direction: column;
  align-items: flex-start!important;

  a:first-child {
    margin-bottom: 10px;
  }
}
// Global
hr {
  border: 0;
  height: 0;
  margin: 1.5rem 0;
  border-top: 1px solid #333e48;
}

.link-active {
  color: #0062BD !important;
}

// Header Menu

.header {
  padding-right: 10px;

  &__nav {
    position: relative;
  }

  &__navbar {
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }

  &__item {
    padding: 1rem 1rem 1rem 0;
  }

  &--icon {
    width: 1.65rem;
    height: 1.65rem;
  }

  &--button {
    top: 0;
    right: 0;
    position: absolute;
    margin: 0;
    padding: 0;
    color: gray;
    cursor: pointer;
    border: 1px solid transparent;
    background-color: transparent;

    &:focus {
      outline: 0;
    }

    .fa {
      font-size: 28px;
      color: #333e48;
      font-weight: initial;
    }
  }
}

// Dropdown Menu

.dropdown__menu {
  top: 100%;
  left: -20px;
  position: absolute;
  z-index: 10;
  height: 30rem;
  min-width: 300px;
  margin-top: 1rem;
  overflow-y: auto;
  padding: 2rem 1rem;
  background-color: #fff;
  border: 1px solid #333e48;
  background-clip: padding-box;
  box-shadow: 0 0 10px rgba(75, 54, 124, .3);

  &-link {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    text-decoration: none;
    color: #000;
    padding: 0.4rem 0 0.4rem 0;
    margin-top: 0.1rem;
    margin-bottom: 0.1rem;
    border-radius: 0 50px 50px 0;

    &:hover {
      color: #0062BD;
      background-color: rgba(79, 192, 141, 0.1);
    }
  }

  &-svg {
    i {
      font-size: 24px;
      color: #333e48;
      width: 20px;
      margin: 0 auto;
      text-align: center;
    }
  }

  &-text {
    font-weight: 300;
    margin-left: 1rem;
    margin-right: 1rem;
    font-size: 16px;
  }

  .social--link {
    display: inline-block;
    padding-left: .8rem;

    img {
      width: 35px;
    }
  }
  .fav-count {
    width: 22px;
    height: 22px;
    background-color: #fed700;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    color: #333e48;
  }
}

// Animation Menu Icon

.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.6s;
}

.slide-fade-enter,
.slide-fade-leave-active {
  opacity: 0;
}

.slide-fade-enter {
  transform: translateX(31px);
}

.slide-fade-leave-active {
  transform: translateX(-31px);
}

// Dropdown Menu Animation

.dropdown-enter-active,
.dropdown-leave-active {
  transition: all .5s;
}

.dropdown-enter,
.dropdown-leave-to {
  opacity: 0;
  transform: translateX(-30px);
}

</style>
