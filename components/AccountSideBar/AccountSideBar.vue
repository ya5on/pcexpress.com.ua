<template>
  <div>
    <a v-if="!isUserLoggedIn" class="u-header-topbar__nav-link" style="cursor: pointer" @click="showSignupModal">
						<span class="icon">
							<i class="fa fa-user-plus"></i>
						</span>
      <span>{{ signupLabel }}</span>
    </a>
    <a v-if="!isUserLoggedIn" class="u-header-topbar__nav-link" style="cursor: pointer" @click="showLoginModal">
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
</template>

<script>
export default {
  name: 'VmMenu',
  data() {
    return {
      wishlistLabel: 'Wishlist',
      logoutLabel: 'Выйти',
      loginLabel: 'Войти',
      signupLabel: 'Регистрация'
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

  methods: {
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
  }
}
</script>

<style lang="sass" scoped>

</style>
