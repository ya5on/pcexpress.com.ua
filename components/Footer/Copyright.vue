<template>
  <!-- Footer-copy-right -->
    <div class="copyright">
      <div class="container">
        <div class="copyright__items">
          <div class="copyright__item">
            ©<nuxt-link to="/" class="text">Electro</nuxt-link> All rights Reserved {{ new Date().getFullYear() }}
          </div>
          <div class="copyright__item copyright__item--2">
            <span class="d-inline-block">
              <img src="~/assets/img/100X60/img1.jpg" alt="Image Description">
            </span>
            <span class="d-inline-block">
              <img src="~/assets/img/100X60/img2.jpg" alt="Image Description">
            </span>
            <span class="d-inline-block">
              <img src="~/assets/img/100X60/img3.jpg" alt="Image Description">
            </span>
            <span class="d-inline-block">
              <img src="~/assets/img/100X60/img4.jpg" alt="Image Description">
            </span>
            <span class="d-inline-block">
              <img src="~/assets/img/100X60/img5.jpg" alt="Image Description">
            </span>
          </div>
        </div>
    </div>
  </div>
  <!-- End Footer-copy-right -->
</template>

<script>
  export default {
    name: "Copyright"
  }
</script>

<style lang="sass" scoped>
  .copyright
    background: #EAEAEA
    padding-bottom: 0.5rem
    padding-top: 0.5rem

    &__items
      +row-flex
      justify-content: space-between
      align-items: center

    &__item

      .text
        font-weight: 700
        cursor: pointer

      &--2
        height: 60px
        +md(height, auto)
        +sm(margin-top, 10px)

      span
        margin-left: 10px

        img
          +sm(max-width, 50px)



</style>
