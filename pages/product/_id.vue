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
      <li class="breadcrumb-item">category title</li>
      <li class="breadcrumb-item">
        <i class="ec ec-arrow-right-categproes"></i>
      </li>
      <li class="breadcrumb-item">{{ PRODUCT.name }}</li>
    </ul>
    <!-- End breadcrumb -->
    <div class="product">
      <div class="product__imgs">
<!--          <div v-for="(image, imageIndex) in PRODUCT.imgs">-->
<!--            <img :src="image" class="img-fluid" :key="imageIndex" />-->
<!--          </div>-->
        <img :src="`${PRODUCT.img}`" alt="">
      </div>
      <div class="product__desc">
        <nuxt-link to="#" class="product__cat">category title</nuxt-link>
        <h2 class="product__name">
          {{ PRODUCT.name}}
        </h2>
        <div class="product__stock-code">
          <p>Наличие:
            <span class="text-green" v-if="PRODUCT.amnt"> {{PRODUCT.amnt}} </span>
            <span class="text-green" v-else-if="PRODUCT.amnt === 0"> Закончился </span>
          </p>


          <p><strong>Код товара</strong>: {{PRODUCT.code}}</p>
        </div>
        <div class="mb-2 short-specs d-flex">
          <ul class="font-size-14 one-column">
            <li><strong>Производитель: </strong></li>
            <li><strong>Дизайн корпуса: </strong></li>
            <li><strong>Процессор: </strong></li>
            <li><strong>Количество ядер: </strong></li>
            <li><strong>Оперативная память: </strong></li>
            <li><strong>Накопитель: </strong></li>
            <li><strong>Видеовыходы: </strong></li>
            <li><strong>Операционная система: </strong></li>
            <li><strong>Комплектация: </strong></li>
          </ul>
          <ul class="font-size-14 two-column">
            <li> Fujitsu-Siemens</li>
            <li> SLIM (SFF)</li>
            <li> Intel i5-3470 (4x3.2GHz)</li>
            <li> 4 Quad Core</li>
            <li> 8GB</li>
            <li> SSD 120GB</li>
            <li> DVI / Display Port</li>
            <li> Win 7pro апгерейд Win 10pro</li>
            <li> Кабель питания / Системный блок</li>
          </ul>
        </div>
        <div><strong>Краткие технические характеристики: </strong><br><p>{{ PRODUCT.desc }}</p></div>
      </div>
      <div class="product__add">
        <div class="product__price">
          <div class="font-size-36">${{PRODUCT.price}}</div>
          <a href="#" class="pay-parts">
            <i class="ec ec-favorites mr-1 font-size-15"></i>
            Оплата частями
          </a>
        </div>
        <div class="add-cart">
          <a href="#" class="btn"><i class="ec ec-add-to-cart"></i> Add to Cart</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapGetters, mapActions} from 'vuex'

  export default {
    name: "product-page",
    props: {},
    data () {
      return {

      }
    },
    filters: {},
    computed: {
      ...mapGetters([
        'PRODUCT'
      ]),
    },
    methods: {
      ...mapActions([
        'GET_PRODUCT',
      ]),
    },
    mounted() {
      this.$store.dispatch('GET_PRODUCT', { id: this.$route.params.id })
    }
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


  .product
    +row-flex
    justify-content: space-between
    margin-bottom: 6.5rem

    &__imgs
      +col
      +size(5)
      +size-lg(6)
      +size-sm(12)
      max-height: 565px

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
        border-color: #fed700
        width: 100%
        display: inline-block
        font-weight: 700
        color: #fff
        text-align: center
        user-select: none
        padding: 0.67rem 1rem
        font-size: 0.875rem
        line-height: 1.5
        border-radius: 1.4rem
        transition: all 0.2s ease-in-out

      .ec
        color: #fff
        font-size: 1.25038rem
        margin-right: 0.5rem


</style>
