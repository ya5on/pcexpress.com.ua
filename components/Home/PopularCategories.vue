<template>
  <div class="container">
    <div class="popular">
        <div class="d-flex">
          <h3 class="popular__title">Компьютерные комплектующие</h3>
        </div>
      <div class="popular__items">
        <div class="popular__list">
          <ul class="list-group">
            <li class="list-group-item" v-for="category in SUB_CATS(681)" :key="category.id" @click="activeCategory = category.id">
              <button class="d-block tab-btn" >{{category.title}}</button>
            </li>
          </ul>
        </div>
<!--        <div class="popular__banner">-->
<!--          <nuxt-link to="/shop" class="d-block">-->
<!--            <img class="img-fluid" src="../../assets/img/370X608/img1.jpg" alt="Image Description">-->
<!--          </nuxt-link>-->
<!--        </div>-->
        <div class="popular__carts">
          <div class="carts-list">
            <div class="product-item" v-for="product in filteredProducts">
              <div class="product-item__inner">
                <div class="product-item__body">
                  <div class="text">
                    <button class="text__wish" @click="addToFavorites(product)">
                      <i class="ec ec-favorites"></i>
                    </button>
                  </div>
                  <h5 class="product-item__title">
                    <nuxt-link :to="`/product/${product.id}`">{{ product.name }}</nuxt-link>
                  </h5>
                  <div class="text">
                    <nuxt-link :to="`/product/${product.id}`" class="d-block">
                      <img class="img-fluid" :src="`${product.img}`" alt="">
                    </nuxt-link>
                  </div>
                  <div class="product-get">
                    <div class="product-price">
                      {{ product.price * getDollar | toFix | formattedPrice }}
                    </div>
                    <div class="product-add-cart">
                      <button class="btn-add" v-if="" @click="addToCart(product)"><i class="ec ec-add-to-cart"></i></button>
                    </div>
                  </div>
                </div>
              </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
import toFix from "../filters/toFixed";
import formattedPrice from "../filters/priceFix";
    export default {
        name: "PopularCategories",
      data() {
        return {
          activeCategory: 13,
        }
      },
      filters: {
        toFix,
        formattedPrice
      },
      created() {
        return this.$store.dispatch('GET_RATES')
      },
      computed: {
        ...mapGetters([
          'SUB_CATS',
          'TAB_PRODUCTS',
          'RATES'
        ]),
        filteredProducts(){
          return this.TAB_PRODUCTS.slice(0, 10)
        },
        getDollar() {
          return this.RATES.map(e => e.rate).toString()
        },
      },
      methods: {
        ...mapActions([
          'GET_CATEGORIES_LIST',
          'addToCart',
        ]),
        addToFavorites(product) {
          this.$store.commit('addToFavorites', product);
        }
      },
      mounted() {
        this.GET_CATEGORIES_LIST()
        this.$store.dispatch('TAB_PRODUCTS', { cat: this.activeCategory })
        },
    }
</script>

<style lang="sass" scoped>
  .d-flex
    border-bottom: 1px solid #dddddd

  .popular
    margin-top: 40px
    padding-bottom: 2.5rem

    &__title
      font-size: 22px
      position: relative
      padding-bottom: 0.5rem
      margin-right: 2rem

      &:after
        content: ' '
        height: 2px
        width: 100%
        max-width: 150px
        display: block
        background-color: #fed700
        position: absolute
        bottom: -1px
        left: 0

    &__items
      +row-flex
      justify-content: space-between
      margin-top: 1rem

    &__list
      +col
      +size(2)
      +size-lg(4)
      +size-md(12)

    &__carts
      +col
      +size(10)
      +size-lg(8)
      +size-md(12)


  .list-group
    +md(display, flex)
    +md(overflow-x, auto)


  .list-group-item
    font-size: 0.875rem
    border-top: 1px solid #dddddd
    padding: 0.7rem 1rem
    transition: all .3s ease
    +md(flex-shrink, 0)
    +md(border-top, none)
    +md(padding, 5px 15px 5px 0)

    &:hover
      font-weight: 700
      transition: all .3s ease

    &:first-of-type
      border-top: none

    .tab-btn
      border: none
      outline: none
      background: transparent
      text-align: left
      cursor: pointer

      &:hover
        color: #0062BD

  .carts-list
    +row-flex
    padding-top: 2rem
    +md(flex-wrap, wrap)
    +sm(justify-content, center)
    +xs(justify-content, space-around)


  .product-item
    +size(2)
    +size-md(4)
    +size-sm(6)
    width: 100%
    max-width: 230px
    transition: all .4s ease
    display: flex
    flex-direction: column
    justify-content: space-between
    margin-bottom: 20px
    +xs(border, 1px solid #e7eaf3)


    &:hover
      transition: all .4s ease
      box-shadow: 0 0 10px rgba(75, 54, 124, .5)

      .product-item__footer
        opacity: 1

    &__inner
      height: 100%
      border-right: 1px solid #e7eaf3
      +xs(border-right, none)

    &__body
      padding: 16px 20px
      display: flex
      flex-direction: column
      justify-content: space-between
      height: 100%
      +lg(padding, 10px 10px)

    .text
      display: flex
      justify-content: space-between

      .img-fluid
        max-height: 200px
        margin-top: 5px

      &__cat
        font-size: 0.74987rem

      &__wish
        margin-left: auto
        border: none
        background: transparent
        outline: none
        cursor: pointer

        .ec
          color: #fed700
          font-size: 22px

    &__title
      font-size: 0.875rem
      line-height: 1.125rem
      margin-bottom: auto
      display: -webkit-box
      -webkit-line-clamp: 3
      -webkit-box-orient: vertical
      overflow: hidden
      +lg(font-size, .7rem)
      +lg(-webkit-line-clamp, 2)

      a
        color: #0062bd
        font-weight: 700

    .product-get
      display: flex
      align-items: baseline
      justify-content: space-between

    .product-price
      font-size: 1.25038rem
      +md(font-size, 1rem)

</style>
