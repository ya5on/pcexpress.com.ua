<template>
  <!-- Topbar -->
  <div class="u-header-topbar">
    <div class="container">
      <div class="u-header-topbar__nav-items">
        <ul class="u-header-topbar__left">
          <li class="u-header-topbar__nav-item">
            <a href="tel:+380676043468" class="u-header-topbar__nav-link"><i class="ec ec-phone"></i>+38(067)604-34-68</a>
          </li>
          <li class="u-header-topbar__nav-item">
            <a href="tel:+380660960012" class="u-header-topbar__nav-link"><i class="ec ec-phone"></i>+38(066)096-00-12</a>
          </li>
          <li class="u-header-topbar__nav-item">
            <a href="mailto:info@electro.com" class="u-header-topbar__nav-link"><i class="ec ec-mail"></i>nikolink.post@gmail.com</a>
          </li>
        </ul>
        <ul class="u-header-topbar__right">
          <li class="u-header-topbar__nav-item">
            <nuxt-link to="/contacts" exact no-prefetch active-class="active" class="u-header-topbar__nav-link"><i class="ec ec-map-pointer"></i>Контакты</nuxt-link>
          </li>
          <li class="u-header-topbar__nav-item">
            <nuxt-link to="/terms-and-conditions" class="u-header-topbar__nav-link"><i class="ec ec-support"></i>info</nuxt-link>
          </li>
          <li class="u-header-topbar__nav-item">
            <nuxt-link to="/track-your-order" class="u-header-topbar__nav-link"><i class="ec ec-transport"></i> Отследить заказ</nuxt-link>
          </li>
          <li class="u-header-topbar__nav-item">
            <!-- Account Sidebar Toggle Button -->
            <AccountSideBar class="acc" />
            <!-- End Account Sidebar Toggle Button -->
          </li>
        </ul>
      </div>
    </div>
  </div>
  <!-- End Topbar -->
</template>

<script>
  import AccountSideBar from "../AccountSideBar/AccountSideBar";
    export default {
        name: "Topbar",
      components: {
          AccountSideBar
        },
    }
</script>

<style lang="sass" scoped>
  .acc
    display: inline-block

  .u-header-topbar
    display: flex
    flex-direction: column
    padding-top: .5rem
    padding-bottom: .5rem
    border-bottom: 1px solid #e8e8e8
    font-size: 0.813rem
    +lg(display, none)

    &__nav-items
      +row-flex
      justify-content: space-between

    &__nav-item
      margin-right: 15px

      &:last-of-type
        margin-right: 0

    &__left
      +col
      +size(6)
      display: flex

    &__right
      +col
      +size(6)
      display: flex
      justify-content: flex-end

      .ec
        color: #334141

      .u-header-topbar__nav-item
        margin-right: 0

        &:before
          content: '|'
          color: #cad5d5
          margin: 0 .875rem
          -webkit-font-smoothing: antialiased
        &:first-of-type
          &:before
            display: none

    &__nav-link

      .ec
        margin-right: 5px


</style>
