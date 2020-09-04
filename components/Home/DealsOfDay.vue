<template>
  <div class="container">
    <div class="deals">
      <div class="deals__timer">
        <div class="d-flex">
          <h3 class="deals__title">Компьютеры Б/У</h3>
<!--          <div class="countdown">-->
<!--            <Timer deadline="12/26/2022"/> &lt;!&ndash;  таймер: месяц число год&ndash;&gt;-->
<!--          </div>-->
        </div>
        <nuxt-link to="/category/610" class="deals__link">
          Смотреть все
          <i class="ec ec-arrow-right-categproes"></i>
        </nuxt-link>
      </div>
      <div class="deals__list">
        <div class="product-item" v-for="product in filteredSix" :key="product.id">
          <div class="product-item__inner">
            <div class="product-item__body">
              <div class="text">
                <div class="text__wish">
                  <button class="text__wish" @click="addToFavorites(product)">
                    <i class="ec ec-favorites"></i>
                  </button>
                </div>
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
                <div class="prodcut-price">
                  {{ product.price * getDollar | toFix | formattedPrice }}
                </div>
                <div class="prodcut-add-cart">
                  <button class="btn-add" v-if="" @click="addToCart(product)"><i class="ec ec-add-to-cart"></i></button>
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
  import Timer from "./Timer";
  import {mapActions, mapGetters} from 'vuex'
  import toFix from "../../components/filters/toFixed";
  import formattedPrice from "../../components/filters/priceFix";
  export default {
    name: "DealsOfDay",
    components: {Timer},
    data() {
      return {}
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
        'PRODUCTS',
        'RATES'
      ]),
      filteredSix(){
        return this.PRODUCTS.slice(0, 6)
      },
      getDollar() {
        return this.RATES.map(e => e.rate).toString()
      },
    },
    methods: {
      ...mapActions([
        'GET_PRODUCTS',
        'addToCart',
      ]),
      addToFavorites(product) {
        this.$store.commit('addToFavorites', product);
      }
    },
    mounted() {
      this.$store.dispatch('GET_PRODUCTS', {cat: 610})
    }
  }
</script>

<style lang="sass" scoped>
  .deals
    margin-top: 40px
    margin-bottom: 1rem

    &__timer
      display: flex
      justify-content: space-between
      align-content: center
      border-bottom: 1px solid #dddddd
      +sm(flex-direction, column)

      .d-flex
        align-items: baseline
        +sm(flex-direction, column)

    &__title
      font-size: 22px
      position: relative
      padding-bottom: 0.5rem
      margin-right: 2rem
      +sm(margin-bottom, 5px)


      &:after
        content: ' '
        height: 2px
        width: 100%
        display: block
        background-color: #fed700
        position: absolute
        bottom: -1px
        left: 0

    &__link
      +sm(padding, 5px 0)

    &__list
      padding-top: 2rem
      display: flex
      justify-content: space-between
      +md(flex-wrap, wrap)
      +sm(justify-content, center)
      +xs(justify-content, space-around)

    .product-item
      +size(2)
      +size-md(4)
      width: 100%
      max-width: 230px
      transition: all .4s ease
      display: flex
      flex-direction: column
      justify-content: space-between
      margin-bottom: 20px
      +sm(margin-bottom, 0)
      +sm(max-width, 50%)
      +sm(width, 100%)
      +sm(border, 1px solid #e7eaf3)


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

    .prodcut-price
      font-size: 1.25038rem
      +md(font-size, 1rem)

    .ec
      color: #333e48


</style>
