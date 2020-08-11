<template>
  <div :class="[ openModal ? 'is-active' : '', 'modal' ]">
    <div class="modal-background"></div>
    <div class="modal-card">
      <header class="modal-card-head">
          <p v-if="!isUserLoggedIn" class="modal-card-title">{{ modalTitle }}</p>
          <p v-if="isUserLoggedIn" class="modal-card-title">{{ modalTitleLoggedIn }}</p>
          <button class="modal-close" aria-label="close" @click="closeModal"></button>
      </header>
      <form @submit="checkForm" action="#" method="post">
        <section class="modal-card-body">
          <div v-if="!isUserLoggedIn">
            <div class="field">
              <p class="control has-icons-left has-icons-right">
                  <input
                    :class="[highlightEmailWithError ? 'input is-danger' : 'input']"
                    type="email"
                    :placeholder="emailPlaceholder"
                    name="emailName"
                    v-model="email"
                    @keyup="checkEmailOnKeyUp(email)"
                  >
                  <span class="icon is-small is-left">
                    <i class="fa fa-envelope"></i>
                  </span>
                  <span v-if="highlightEmailWithError !== null" class="icon is-small is-right">
                    <i :class="[highlightEmailWithError ? 'fa fa-exclamation-circle' : 'fa fa-check']"></i>
                  </span>
                </p>
                <p v-if="highlightEmailWithError" class="help is-danger">{{ emailRequiredLabel }}</p>
            </div>
            <div class="field">
              <p class="control has-icons-left has-icons-right">
                <input
                  :class="[highlightPasswordWithError ? 'input is-danger' : 'input']"
                  type="password"
                  placeholder="Ваш пароль"
                  name="passwordName"
                  v-model="password"
                  @keyup="checkPasswordOnKeyUp(password)"
                >
                <span class="icon is-small is-left">
                  <i class="fa fa-lock"></i>
                </span>
                <span v-if="highlightPasswordWithError !== null" class="icon is-small is-right">
                  <i :class="[highlightPasswordWithError ? 'fa fa-exclamation-circle' : 'fa fa-check']"></i>
                </span>
              </p>
              <p v-if="highlightPasswordWithError" class="help is-danger">{{ passwordRequiredLabel }}</p>
            </div>
          </div>
          <div v-if="isUserLoggedIn" class="level">
            <div class="level-item has-text-centered">
              <div>
                <p class="title">Welcome back!</p>
                <p class="heading">Now you are logged in</p>
              </div>
            </div>
          </div>
        </section>
        <footer class="modal-card-foot">
          <button v-if="!isUserLoggedIn" type="submit" class="button is-info">{{ primaryBtnLabel }}</button>
          <button v-if="isUserLoggedIn" type="button" class="button is-info" @click="closeModal">{{ btnLoggedInLabel }}</button>
        </footer>
      </form>
    </div>
  </div>
</template>

<script>
import { isValidEmail } from '@/assets/validators';

export default {
  name: 'login',

  data () {
    return {
      modalTitle: 'Вход',
      modalTitleLoggedIn: 'Welcome!',
      primaryBtnLabel: 'Войти',
      emailRequiredLabel: 'Email обязательный',
      passwordRequiredLabel: 'Пароль обязательный',
      emailNotValidLabel: 'Valid email required',
      btnLoggedInLabel: 'Закрыть',
      emailPlaceholder: 'Ваш email',
      email: '',
      password: '',
      highlightEmailWithError: null,
      highlightPasswordWithError: null,
      isFormSuccess: false
    };
  },

  computed: {
    isUserLoggedIn () {
      return this.$store.getters.isUserLoggedIn;
    },
    openModal () {
      return !!this.$store.getters.isLoginModalOpen;
    }
  },

  methods: {
    closeModal () {
      this.$store.commit('showLoginModal', false);
    },
    checkForm (e) {
      e.preventDefault();

      if (this.email && this.password) {
        this.highlightEmailWithError = false;
        this.highlightPasswordWithError = false;
        this.isFormSuccess = true;
        this.$store.commit('isUserLoggedIn', this.isFormSuccess);
      }

      if (!this.email) {
        this.highlightEmailWithError = true;

        if (this.email && !isValidEmail(this.email)) {
          this.emailRequiredLabel = this.emailNotValidLabel;
        }
      } else {
        this.highlightEmailWithError = false;
      }

      this.highlightPasswordWithError = !this.password;
    },
    checkEmailOnKeyUp (emailValue) {
      if (emailValue && isValidEmail(emailValue)) {
        this.highlightEmailWithError = false;
      } else {
        this.highlightEmailWithError = true;

        if (!isValidEmail(emailValue)) {
          this.emailRequiredLabel = this.emailNotValidLabel;
        }
      }
    },
    checkPasswordOnKeyUp (passwordValue) {
      this.highlightPasswordWithError = !passwordValue;
    }
  }
};
</script>

<style lang="sass" scoped>
.fa-exclamation-circle
  color: red
.fa-check
  color: green
.modal.is-active
  display: flex

.modal
  align-items: center
  display: none
  flex-direction: column
  justify-content: center
  overflow: hidden
  position: fixed
  z-index: 40
  top: 0
  bottom: 0
  left: 0
  right: 0
  background-color: rgba(10, 10, 10, 0.86)

.modal-card
  display: flex
  flex-direction: column
  max-height: calc(100vh - 40px)
  overflow: hidden
  width: 450px
  border-radius: 6px
  +sm(width, 90%)

.modal-card-head
  border-bottom: 1px solid #dbdbdb

.modal-card-head,
.modal-card-foot
  align-items: center
  background-color: #fff
  display: flex
  flex-shrink: 0
  justify-content: flex-start
  padding: 20px
  position: relative

.modal-card-title
  color: #363636
  flex-grow: 1
  flex-shrink: 0
  font-size: 1.5rem
  line-height: 1

.modal-close
  background-color: rgba(10, 10, 10, 0.2)
  border: none
  border-radius: 290486px
  cursor: pointer
  pointer-events: auto
  display: inline-block
  flex-grow: 0
  flex-shrink: 0
  font-size: 0
  height: 20px
  max-height: 20px
  max-width: 20px
  min-height: 20px
  min-width: 20px
  outline: none
  position: relative
  width: 20px
  &:before
    height: 2px
    width: 50%
    background-color: white
    content: ""
    display: block
    left: 50%
    position: absolute
    top: 50%
    transform: translateX(-50%) translateY(-50%) rotate(45deg)
    transform-origin: center center

  &:after
    height: 50%
    width: 2px
    background-color: white
    content: ""
    display: block
    left: 50%
    position: absolute
    top: 50%
    transform: translateX(-50%) translateY(-50%) rotate(45deg)
    transform-origin: center center

.modal-card-body
  background-color: white
  flex-grow: 1
  flex-shrink: 1
  overflow: auto
  padding: 20px
  display: block

  .field:not(:last-child)
    margin-bottom: 0.75rem

  .control
    box-sizing: border-box
    clear: both
    font-size: 1rem
    position: relative
    text-align: left
    display: flex

    .input
      box-shadow: inset 0 1px 2px rgba(10, 10, 10, 0.1)
      max-width: 100%
      width: 100%
      background-color: white
      color: #363636
      align-items: center
      border: 1px solid #7F828B
      border-radius: 4px
      display: inline-flex
      font-size: 1rem
      height: 2.25em
      justify-content: flex-start
      line-height: 1.5
      padding: .3rem .3rem .3rem 2.25em
      position: relative


    .icon
      left: 0
      color: #dbdbdb
      height: 2.25em
      pointer-events: none
      position: absolute
      top: 0
      width: 2.25em
      z-index: 4
      align-items: center
      display: inline-flex
      justify-content: center
      font-style: inherit
      font-weight: inherit

.modal-card-foot
  border-top: 1px solid #dbdbdb

.button.is-info
  background-color: #23d160
  border-color: transparent
  color: #fff

.button
  padding-left: 10px
  padding-right: 10px
  background-color: white
  color: #363636
  cursor: pointer
  text-align: center
  white-space: nowrap
  align-items: center
  border: 1px solid transparent
  border-radius: 4px
  box-shadow: none
  display: inline-flex
  font-size: 1rem
  height: 2.25em
  justify-content: flex-start
  line-height: 1.5
  position: relative



</style>


