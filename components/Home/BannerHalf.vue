<template>
  <div class="container">
    <!-- Banner -->
    <div class="banner">
        <div class="banner__item">
          <nuxt-link to="/">
            <img class="img-fluid" src="~/assets/img/690X150/img1.jpg" alt="Image Description">
          </nuxt-link>
        </div>
        <div class="banner__item">
          <nuxt-link to="/">
            <img class="img-fluid" src="~/assets/img/690X150/img2.jpg" alt="Image Description">
          </nuxt-link>
        </div>
    </div>
    <!-- End Banner -->
  </div>
</template>

<script>
    export default {
        name: "BannerHalf"
    }
</script>

<style lang="sass" scoped>
  .banner
    +row-flex
    justify-content: space-between
    margin-bottom: 1rem
    +sm(justify-content, center)

    &__item
      +col
      +size(6)
      +size-sm(12)





</style>
