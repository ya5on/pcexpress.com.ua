<template>
  <div class="container">
    <!-- breadcrumb -->
    <ul class="breadcrumb">
      <li class="breadcrumb-item">
        <nuxt-link to="/">Главная</nuxt-link>
      </li>
      <li class="breadcrumb-item">
        <i class="ec ec-arrow-right-categproes"></i>
      </li>
      <li class="breadcrumb-item">Оформление заказа</li>
    </ul>
    <!-- End breadcrumb -->
    <div class="title d-block">
      <h1 class="text-center">Оформление заказа</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: "index"
}
</script>

<style lang="sass" scoped>
.title
  text-align: center
  margin-bottom: 2rem

  h1
    text-align: center
    font-weight: 400
    font-size: 2.5rem
</style>
