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
      <li class="breadcrumb-item">cat title</li>
    </ul>
    <!-- End breadcrumb -->
    <!--SHOP-GRID-->
    <div class="shop">
      <div class="shop__nav d-none">
        <ul>
          <li v-for="category in ALL_CATS"
              :key="category.id">
            <nuxt-link :to="`/category/${category.id}`">{{ category.title }}</nuxt-link>
          </li>
        </ul>
      </div>
      <div class="shop__grid">

        <div class="shop__bar">
          <h3 class="font-size-25 mb-2 mb-md-0">category title</h3>
          <p class="font-size-14 text-gray-90 mb-0">Товаров: {{ PRODUCTS.length }}</p>
        </div>

        <div class="shop__control">
          <div class="d-none">
            <ul class="nav">
              <li class="nav-item">
                <div class="d-md-flex">
                  <i class="fa fa-th"></i>
                </div>
              </li>
              <li class="nav-item">
                <div class="d-md-flex">
                  <i class="fa fa-list"></i>
                </div>
              </li>
            </ul>
          </div>
          <div class="d-flex">
            <form method="get">
              <!-- Select -->
              <div class="dropdown">
                <select class="">
                  <option value="one" selected="">Default sorting</option>
                  <option value="five">Sort by price: low to high</option>
                  <option value="six">Sort by price: high to low</option>
                </select>
              </div>
              <!-- End Select -->
            </form>
          </div>
        </div>

        <div class="shop__list">
          <div v-if="PRODUCTS.length === 0" style="text-align: center; margin: 35px; font-size: 28px">Товаров нет</div>
          <div v-else class="product-item" v-for="product in PRODUCTS" :key="product.id">
            <div class="product-item__inner">
              <div class="product-item__body">
                <h5 class="product-item__title">
                  <nuxt-link :to="`/product/${product.id}`">{{ product.name }}</nuxt-link>
                </h5>
                <div class="">
                  <nuxt-link :to="`/product/${product.id}`" class="d-block">
                    <img class="img-fluid" :src="`${product.img}`" alt="Image Description">
                  </nuxt-link>
                </div>
                <div>
                  <div class="product-code">
                    {{ product.code }}
                  </div>
                  <div class="product-get">
                    <div class="product-price">
                      ${{ product.price }}
                    </div>
                    <div class="product-add-cart">
                      <a href="#" class="btn-add">
                        <i class="ec ec-add-to-cart"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="product-item__footer">
              <div class="border-top">
                <a href="#" class="">
                  <i class="ec ec-compare mr-1 font-size-15"></i>Сравнить</a>
                <a href="#" class="">
                  <i class="ec ec-favorites mr-1 font-size-15"></i>Сохранить</a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
    <!--END SHOP-GRID-->
  </div>
</template>


<script>
  import {mapActions, mapGetters} from 'vuex'

  export default {
    data() {
      return {}
    },

    computed: {
      ...mapGetters([
        'PRODUCTS',
        'ALL_CATS',
      ]),
    },
    methods: {
      ...mapActions([
        'GET_PRODUCTS',
        'GET_CATEGORIES_LIST',
      ]),
    },
    mounted() {
      this.$store.dispatch('GET_PRODUCTS', { cat: this.$route.params.id })
      this.GET_CATEGORIES_LIST()
    },

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

  .shop
    +row-flex
    flex-wrap: nowrap !important
    justify-content: space-between

    &__nav
      +col
      +size(2.5)
      border: 1px solid red

    &__grid
      +col
      +size(9.5)
      +size-lg(12)
      display: flex
      flex-direction: column

    &__bar
      display: flex
      justify-content: space-between
      align-items: center
      margin-bottom: 1rem
      h3
        font-size: 1.56275rem
        line-height: 1.5

      p
        font-size: 0.875rem

    &__control
      display: flex
      align-items: center
      justify-content: space-between
      border-radius: 0.563rem
      padding: 0.5rem 1rem
      background-color: #f5f5f5

      .nav
        display: flex

        &-item
          margin-right: 7px

          i
            font-size: 1.2rem
            font-weight: 500

    &__list
      padding-top: 2rem
      display: flex
      flex-wrap: wrap

    .product-item
      max-width: 20%
      display: flex
      flex-direction: column
      justify-content: space-between
      transition: all .2s ease
      +sm(max-width, 50%)

      &:hover
        transition: all .2s ease
        transform: scale(1.01)
        box-shadow: 0 0 10px rgba(75, 54, 124, .5)

        .product-item__footer
          opacity: 1

      &__inner
        border-right: 1px solid #e7eaf3
        height: 100%

      &__body
        padding: 16px 24px
        display: flex
        flex-direction: column
        justify-content: space-between
        height: 100%

      &__title
        font-size: 0.875rem
        line-height: 1.125rem
        margin-bottom: 10px
        display: -webkit-box
        -webkit-line-clamp: 2
        -webkit-box-orient: vertical
        overflow: hidden

        &:hover

        a
          color: #0062bd
          font-weight: 700

    .product-get
      display: flex
      align-items: baseline
      justify-content: space-between

    .product-code
      padding: .3rem 0

    .product-price
      font-size: 1.25038rem
      +md(font-size, 1rem)

    .btn-add
      width: 2.188rem
      height: 2.188rem
      background-color: #e6e6e6
      color: #fff
      display: flex
      align-items: center
      justify-content: center
      border-radius: 6.1875rem
      transition: all 0.2s ease-in-out
      +sm(width, 1.6rem)
      +sm(height, 1.6rem)

      &:hover
        background-color: #fed700
        transform: translateY(-2px)
        transition: all 0.2s ease-in-out

      i
        font-size: 1.25rem
        color: #fff
        +sm(font-size, 1rem)

    .product-item__footer
      margin-top: 5px
      padding-left: 24px
      padding-right: 24px
      padding-bottom: 8px
      opacity: 0
      transition: all 0.4s ease-in-out
      +sm(display,none)

      .border-top
        border-top: 1px solid #e7eaf3
        padding-top: .5rem
        display: flex
        align-items: baseline
        justify-content: space-between
        font-size: 13px

        i
          font-size: 0.8rem
          margin-right: 4px

        a
          font-size: 12px

    .ec
      color: #333e48

</style>
