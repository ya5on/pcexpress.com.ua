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
      <li class="breadcrumb-item">
        <nuxt-link to="/category/610">{{ PRODUCT.path }}</nuxt-link>
      </li>

      <li class="breadcrumb-item d-none">
        <i class="ec ec-arrow-right-categproes"></i>
      </li>
      <li class="breadcrumb-item d-none">{{ PRODUCT.name }}</li>
    </ul>
    <!-- End breadcrumb -->
    <div class="product">
      <div class="product__imgs">
        <div class="tabs" v-if="PRODUCT.imgs">
          <div class="tabs__content">
            <img :src=content class="img-fluid"/>
          </div>
          <div class="tabs__nav">
            <div class="tabs__nav_tab"
                 v-for="(image, index) in PRODUCT.imgs"
                 :class="[index === active ? 'tabs__nav_tab--active' : '']"
                 @click="activate(index)">
              <img :src="image" class="img-fluid" :key="index"/></div>
          </div>
        </div>
        <div v-else>
          <img :src="`${PRODUCT.img}`" alt="">
        </div>
      </div>
      <div class="product__desc">
        <nuxt-link to="#" class="product__cat">category title</nuxt-link>
        <h2 class="product__name">
          {{ PRODUCT.name }}
        </h2>
        <div class="product__stock-code">
          <p>Наличие:
            <span class="text-green" v-if="PRODUCT.amnt"> {{ PRODUCT.amnt }} шт </span>
            <span class="text-green" v-else-if="PRODUCT.amnt === 0"> Закончился </span>
          </p>
          <p><strong>Код товара</strong>: {{ PRODUCT.code }} </p>
        </div>
        <div class="mb-2 short-specs d-block" v-if="PRODUCT.specs">
          <strong>Описание: </strong>
          <div class="specs" v-html-remove="PRODUCT.specs"></div>
        </div>
        <div v-if="PRODUCT.desc">
          <strong>Краткие технические характеристики: </strong><br>
          <p>{{ PRODUCT.desc }}</p>
        </div>
      </div>
      <div class="product__add">
        <div class="product__price">
          <div class="font-size-36">{{ PRODUCT.price | toFix | formattedPrice }}</div>
          <a href="#" class="pay-parts">
            <i class="ec ec-favorites mr-1 font-size-15"></i>
            Оплата частями
          </a>
        </div>
        <div class="add-cart">
          <button class="btn" @click="addToCart(PRODUCT)"><i class="ec ec-add-to-cart"></i>Купить</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
import toFix from "../../components/filters/toFixed";
import formattedPrice from "../../components/filters/priceFix";

export default {
  name: "product-page",
  components: {
  },
  head() {
    return {
      title: this.PRODUCT.name,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.PRODUCT.name
        }
      ]
    }
  },
  data() {
    return {
      active: 0,
    }
  },
  filters: {
    toFix,
    formattedPrice
  },
  computed: {
    ...mapGetters([
      'PRODUCT',
      'ALL_CATS',
    ]),
    content () {
      return this.PRODUCT.imgs[this.active]
    }
  },
  methods: {
    ...mapActions([
      'GET_PRODUCT',
      'GET_CATEGORIES_LIST',
      'addToCart'
    ]),
    activate (index) {
      this.active = index
    }
  },
  mounted() {
    this.$store.dispatch('GET_PRODUCT', {id: this.$route.params.id})
    this.GET_CATEGORIES_LIST()
  }
}
</script>

<style lang="sass" scoped>
.tabs
  height: 100%
  width: 100%

  &__nav
    display: flex

    &_tab
      display: flex
      justify-content: center
      align-items: center
      margin: .3rem
      background: #fff
      box-shadow: inset 0 -1rem 0.75rem -1rem rgba(0,0,0,0.25)
      border: 1px solid #aeaeae
      cursor: pointer
      opacity: 0.75
      transition: 100ms linear all
      max-width: 100px
      width: 100%

      &--active
        opacity: 1
        box-shadow: none
        border: 1px solid #fed700

  &__content
    display: flex
    justify-content: center
    align-items: center
    height: 565px
    margin-bottom: 10px
    +sm(height, 350px)

.product
  +row-flex
  justify-content: space-between
  margin-bottom: 7rem

  &__imgs
    +col
    +size(5)
    +size-lg(6)
    +size-sm(12)

  &__desc
    +col
    +size(4.2)
    +size-lg(6)
    +size-sm(12)
    display: flex
    flex-direction: column
    justify-content: space-between

  &__add
    +col
    +size(2.8)
    +size-lg(12)
    max-width: 300px
    border-radius: 1.063rem
    padding: 2rem
    border: 2px solid #dddddd
    display: flex
    flex-direction: column
    justify-content: space-between
    max-height: 300px
    +sm(max-width, 600px)

  &__cat
    font-size: 12px
    margin-bottom: 5px

  &__name
    font-size: 25px
    margin-bottom: 5px

  &__stock-code
    border-bottom: 1px solid #dddddd
    font-size: 0.875rem
    color: #8f8f8f
    padding-bottom: 0.5rem
    height: 34px
    display: flex
    justify-content: space-between
    margin-bottom: 1rem

    .text-green
      color: #5cb85c
      font-weight: 700

  .short-specs
    font-size: 14px
    margin-bottom: 1rem
    justify-content: center

    .two-column
      padding-left: 1rem

  &__price
    font-size: 32px
    margin-bottom: .5rem

    .pay-parts
      font-size: 14px

  .add-cart
    padding-bottom: 0.143rem
    margin-bottom: 0.5rem

    .btn
      cursor: pointer
      background-color: #fed700
      border-color: transparent
      outline: none
      width: 100%
      display: inline-block
      font-weight: 700
      color: #fff
      text-align: center
      user-select: none
      padding: 0.67rem 1rem
      font-size: 1rem
      line-height: 1.5
      border-radius: 1.4rem
      transition: all 0.2s ease-in-out


    .ec
      color: #fff
      font-size: 1.25038rem
      margin-right: 0.5rem


</style>
