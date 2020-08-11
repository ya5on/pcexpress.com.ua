<template>
  <div :class="[ openModal ? 'is-active' : '', 'modal' ]">
    <div class="modal-background"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p v-if="!isUserSignedUp" class="modal-card-title">{{ modalTitle }}</p>
        <p v-if="isUserSignedUp" class="modal-card-title">{{ modalTitleRegistered }}</p>
        <button class="modal-close" @click="closeModal"></button>
      </header>
      <form @submit="checkForm" action="#" method="post">
        <section class="modal-card-body">
          <div v-if="!isUserSignedUp">
            <div class="field">
              <p class="control has-icons-left has-icons-right">
                <input
                  :class="[highlightNameWithError ? 'input is-danger' : 'input']"
                  type="text"
                  :placeholder="namePlaceholder"
                  v-model="name"
                  @keyup="checkNameOnKeyUp(name)"
                >
                <span class="icon is-small is-left">
                    <i class="fa fa-user"></i>
                  </span>
                <span v-if="highlightNameWithError !== null" class="icon is-small is-right">
                    <i :class="[highlightNameWithError ? 'fa fa-exclamation-circle' : 'fa fa-check']"></i>
                  </span>
              </p>
              <p v-if="highlightNameWithError" class="help is-danger">{{ nameErrorLabel }}</p>
            </div>
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
              <p v-if="highlightEmailWithError" class="help is-danger">{{ emailErrorLabel }}</p>
            </div>
            <div class="field">
              <p class="control has-icons-left has-icons-right">
                <input
                  :class="[highlightPasswordWithError ? 'input is-danger' : 'input']"
                  type="password"
                  :placeholder="passwordPlaceholder"
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
              <p v-if="highlightPasswordWithError" class="help is-danger">{{ passwordErrorLabel }}</p>
            </div>
            <div class="field">
              <p class="control has-icons-left has-icons-right">
                <input
                  :class="[highlightRepeatPasswordWithError ? 'input is-danger' : 'input']"
                  type="password"
                  :placeholder="repeatPasswordPlaceholder"
                  v-model="repeatPassword"
                  @keyup="checkRepeatPasswordOnKeyUp(repeatPassword)"
                >
                <span class="icon is-small is-left">
                    <i class="fa fa-lock"></i>
                  </span>
                <span v-if="highlightRepeatPasswordWithError !== null" class="icon is-small is-right">
                    <i :class="[highlightRepeatPasswordWithError ? 'fa fa-exclamation-circle' : 'fa fa-check']"></i>
                  </span>
              </p>
              <p v-if="highlightRepeatPasswordWithError" class="help is-danger">{{ notEqualErrorLabel }}</p>
            </div>
          </div>
          <div v-if="isUserSignedUp" class="level">
            <div class="level-item has-text-centered">
              <div>
                <p class="title">Welcome {{ name }}!</p>
              </div>
            </div>
          </div>
        </section>
        <footer class="modal-card-foot">
          <button v-if="!isUserSignedUp" class="button is-success">{{ primaryBtnLabel }}</button>
          <button v-if="isUserSignedUp" type="button" class="button is-info" @click="closeModal">{{
              btnRegisteredLabel
            }}
          </button>
        </footer>
      </form>
    </div>
  </div>
</template>

<script>
import {isValidEmail} from '@/assets/validators';

export default {
  name: 'registration',

  data() {
    return {
      modalTitle: 'Регистрация',
      modalTitleRegistered: 'Welcome ',
      primaryBtnLabel: 'Зарегистрироватся',
      btnRegisteredLabel: 'Закрыть',
      namePlaceholder: 'Имя*',
      emailPlaceholder: 'Email*',
      passwordPlaceholder: 'Пароль*',
      repeatPasswordPlaceholder: 'Повторить пароль*',
      notEqualErrorLabel: 'Пароли должны быть идентичны',
      passwordErrorLabel: 'Пароль обязательный',
      nameErrorLabel: 'Имя обязательно',
      emailErrorLabel: 'Email обязательный',
      emailNotValidLabel: 'Valid email required',
      name: '',
      email: '',
      password: '',
      repeatPassword: '',
      highlightNameWithError: null,
      highlightEmailWithError: null,
      highlightPasswordWithError: null,
      highlightRepeatPasswordWithError: null,
      isFormSuccess: false
    };
  },

  computed: {
    isUserSignedUp() {
      return this.$store.getters.isUserSignedUp;
    },
    openModal() {
      if (this.$store.getters.isSignupModalOpen) {
        return true;
      } else {
        return false;
      }
    }
  },

  methods: {
    closeModal() {
      this.$store.commit('showSignupModal', false);
    },
    checkForm(e) {
      e.preventDefault();

      if (this.name && this.email && this.password && this.repeatPassword) {
        this.highlightEmailWithError = false;
        this.highlightPasswordWithError = false;
        this.isFormSuccess = true;
        this.$store.commit('setUserName', this.name);
        this.$store.commit('isUserSignedUp', this.isFormSuccess);
        this.$store.commit('isUserLoggedIn', this.isFormSuccess);
      }

      if (!this.name) {
        this.highlightNameWithError = true;
      } else {
        this.highlightNameWithError = false;
      }

      if (!this.email) {
        this.highlightEmailWithError = true;

        if (this.email && !isValidEmail(this.email)) {
          this.emailErrorLabel = this.emailNotValidLabel;
        }
      } else {
        this.highlightEmailWithError = false;
      }

      if (!this.password) {
        this.highlightPasswordWithError = true;
      } else {
        this.highlightPasswordWithError = false;
      }

      if (!this.repeatPassword) {
        this.highlightRepeatPasswordWithError = true;
      } else {
        this.highlightRepeatPasswordWithError = false;
      }
    },
    checkNameOnKeyUp(nameValue) {
      if (nameValue) {
        this.highlightNameWithError = false;
      } else {
        this.highlightNameWithError = true;
      }
    },
    checkEmailOnKeyUp(emailValue) {
      if (emailValue && isValidEmail(emailValue)) {
        this.highlightEmailWithError = false;
      } else {
        this.highlightEmailWithError = true;

        if (!isValidEmail(emailValue)) {
          this.emailErrorLabel = this.emailNotValidLabel;
        }
      }
    },
    checkPasswordOnKeyUp(passwordValue) {
      if (passwordValue) {
        this.highlightPasswordWithError = false;

        if (this.repeatPassword === this.password) {
          this.highlightRepeatPasswordWithError = false;
        } else {
          this.highlightRepeatPasswordWithError = true;
        }
      } else {
        this.highlightPasswordWithError = true;
      }
    },
    checkRepeatPasswordOnKeyUp(repeatPasswordValue) {
      if (repeatPasswordValue) {
        if (repeatPasswordValue === this.password) {
          this.highlightRepeatPasswordWithError = false;
        } else {
          this.highlightRepeatPasswordWithError = true;
        }
      } else {
        this.highlightRepeatPasswordWithError = true;
      }
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
    background-color: #fff
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
    background-color: #fff
    content: ""
    display: block
    left: 50%
    position: absolute
    top: 50%
    transform: translateX(-50%) translateY(-50%) rotate(45deg)
    transform-origin: center center

.modal-card-body
  background-color: #fff
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

.button.is-success
  background-color: #23d160
  border-color: transparent
  color: #fff

.button
  padding-left: 10px
  padding-right: 10px
  background-color: #fff
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


