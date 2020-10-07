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
      <li class="breadcrumb-item">Страница не найдена!</li>
    </ul>
    <!-- End breadcrumb -->
    <div class="error">
      <h1 class="">404!</h1>
      <p class="">Nothing was found at this location. Try searching, or check out the links below.</p>
    </div>
    <div class="search-form">
      <!-- Input -->
      <Search/>
      <!-- End Submit-->
    </div>
  </div>
</template>

<script>
import Search from "../components/Search/Search";

export default {
  name: "error",
  components: {Search}
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

.error
  text-align: center
  padding-bottom: 1rem
  margin-bottom: 2rem
  border-bottom: 1px solid #e7eaf3

  h1
    font-size: 3.2rem
    font-weight: 300
    margin-bottom: 1rem

  p
    color: #333e48
    font-size: 1.25038rem
    font-weight: 300
    margin-bottom: 0

.search-form
  margin-bottom: 2.5rem
  display: flex
  justify-content: center
  width: 100%

  &__form
    +row-flex
    justify-content: center
    align-items: center
    width: 50%
    +md(width, 80%)

  &__input
    +size(9)
    +size-sm(12)
    margin-bottom: 0
    margin-right: 5px
    +sm(margin-right, 0)
    +sm(margin-bottom, 10px)


    .form-control
      display: block
      width: 100%
      height: calc(1.5em + 1.34rem + 2px)
      padding: 0.67rem 1rem
      font-size: 0.875rem
      font-weight: 400
      line-height: 1.5
      color: #818181
      background-color: #fff
      background-clip: padding-box
      border: 1px solid #dddddd
      border-radius: 1.4rem
      transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out
      outline: none

      &:focus
        border-color: #7F828B

  &__submit
    +size(3)
    +size-sm(12)


    .btn
      outline: none
      cursor: pointer
      color: #333e48
      background-color: #fed700
      padding: 0.67rem 1.5rem
      display: block
      font-weight: 700
      text-align: center
      user-select: none
      border: 1px solid transparent
      font-size: 0.875rem
      line-height: 1.5
      border-radius: 1.4rem
      transition: all 0.2s ease-in-out
      +sm(width, 100%)


</style>
