<template>
  <div class="main-block">
    <div class="container">
      <div class="main-block__items">
        <div class="main-block__categories d-none">
          <CategoriesList/>
        </div>
        <div class="main-block__slider">
          <MainSlider />
          <Banners />
        </div>
        <div class="main-block__other">
          <Other/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import CategoriesList from "../CategoriesList";
  import Other from "./Other";
  import MainSlider from "./MainSlider";
  import Banners from "./Banners";

  export default {
    name: "MainBlock",
    components: {
      Banners,
      MainSlider,
      Other,
      CategoriesList
    },
  }
</script>

<style lang="sass" scoped>
  .main-block
    background-color: #f5f5f5
    padding-bottom: 1.5rem

    &__items
      display: flex
      justify-content: space-between
      +lg(flex-direction, column)

    &__categories
      +size(3)

    &__slider
      +size(7.5)
      +lg(width, 100%)
      display: flex
      flex-direction: column

    &__other
      +size(2.5)
      height: auto
      +lg(width, 100%)


</style>
