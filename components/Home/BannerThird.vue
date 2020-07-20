<template>
  <!-- Banners -->
  <div class="container">
    <div class="banner">
      <div class="banner__item">
        <nuxt-link to="/">
          <div class="text">
            <h2 class="text__title">G9 Laptops with Ultra 4K HD Display</h2>
            <p class="text__subtitle">and the fastest Intel Core i7 processor ever</p>
            <div class="text__price">
              <span class="fz18">from</span>
              <span class="fz46"><sup>$</sup>399</span>
            </div>
          </div>
        </nuxt-link>
      </div>
      <div class="banner__item">
        <nuxt-link to="/">
          <img class="img-fluid" src="~/assets/img/446X262/img3.jpg" alt="Image Description">
        </nuxt-link>
      </div>
      <div class="banner__item">
        <nuxt-link to="/">
          <img class="img-fluid" src="~/assets/img/446X262/img3.jpg" alt="Image Description">
        </nuxt-link>
      </div>
    </div>
    <!-- End Banner -->
  </div>
  <!-- End Banners -->
</template>

<script>
  export default {
    name: "BannerThird"
  }
</script>

<style lang="sass" scoped>
  .banner
    +row-flex
    justify-content: space-between
    margin-bottom: 2.5rem
    +sm(justify-content, center)

    &__item
      +col
      +size(4)
      +size-sm(12)
      background: url("../../assets/img/446X262/img3.jpg") no-repeat center
      background-size: cover
      +sm(margin-bottom, 15px)

  .text
    margin-left: 3rem
    display: flex
    flex-direction: column
    justify-content: center
    height: 100%

    &__title
      max-width: 16.875rem
      line-height: 1.2
      font-size: 1.75rem
      font-weight: 400

    &__subtitle
      font-size: 1.12525rem
      font-weight: 300
      margin-bottom: 1.875rem

  .fz18
    font-size: 1.12525rem

  .fz46
    font-size: 2.87525rem
    font-weight: 600
  sup
    font-size: 60%
    top: -.5em


</style>
