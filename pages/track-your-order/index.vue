<template>
  <div class="container">
    <!-- breadcrumb -->
    <ul class="breadcrumb">
      <li class="breadcrumb-item">
        <nuxt-link to="/">Home</nuxt-link>
      </li>
      <li class="breadcrumb-item">
        <i class="ec ec-arrow-right-categproes"></i>
      </li>
      <li class="breadcrumb-item">Отследить заказ</li>
    </ul>
    <!-- End breadcrumb -->
    <div class="track">
      <div class="track__item">
        <h1 class="">Track your Order</h1>
        <p class="text-grey">To track your order please enter your Order ID in the box below and press the "Track" button. This was given to you on your receipt and in the confirmation email you should have received.</p>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    name: "index"
  }
</script>

<style lang="sass" scoped>
  .breadcrumb
    display: flex
    margin-bottom: 1rem
    margin-top: 1rem

    &-item
      margin-right: 10px

    .ec
      color: #333e48
      font-size: 14px

  .track

    &__item
      text-align: center
      margin: 0 auto 2.5rem
      max-width: 75%
      +md(max-width, 100%)


      h1
        margin-bottom: 2.5rem
        font-weight: 400
        font-size: 2.5rem


</style>
