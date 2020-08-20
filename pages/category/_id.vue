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
      <li class="breadcrumb-item">cat title</li>
    </ul>
    <!-- End breadcrumb -->
    <!--SHOP-GRID-->
    <div class="shop">
      <CategoriesList class="shop__nav d-none" />
      <div class="shop__grid">

        <div class="shop__bar">
          <h3 class="font-size-25 mb-2 mb-md-0">category title</h3>
          <p class="font-size-14 text-gray-90 mb-0">Товаров: {{ PRODUCTS.length }}</p>
        </div>

        <div class="shop__mobile">
          <Catalogue class="shop__mobile--catalog"/>
        </div>

        <div class="shop__control">
          <div>
            <ul class="nav">
              <li class="nav-item">
                <div class="d-md-flex">
                  <i class="fa" :class="[view ? 'fa-th-list' : 'fa-th']" @click="toggleView()" title="Сменить вид"></i>
                </div>
              </li>
            </ul>
          </div>
          <div class="d-flex">
              <!-- Select -->
              <div class="dropdown">
                <CustomSelect />
              </div>
              <!-- End Select -->
          </div>
        </div>

        <div :class="[view ? 'shop__list' : 'shop__plate']">
          <div v-if="PRODUCTS.length === 0" style="text-align: center; margin: 35px; font-size: 28px">Товаров нет</div>
          <div v-else class="product-item" v-for="product in paginatedProducts" :key="product.id">
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
                    Код: {{ product.code }}
                  </div>
                  <div class="product-get">
                    <div class="product-price">
                      {{ product.price | toFix | formattedPrice }}
                    </div>
                    <div class="product-add-cart">
                      <button class="btn-add" v-if="" @click="addToCart(product)"><i class="ec ec-add-to-cart"></i></button>
<!--                      <button class="button is-text" v-if="isProductAdded" @click="removeFromCart(product.id, false)">delete</button>-->
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
          <div class="shop__pagination">
            <div class="page"
                 v-for="page in pages"
                 :key="page"
                 :class="{'page__selected' : page === pageNum}"
                 @click="pageClick(page)">
            {{ page }}
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
  import Catalogue from "../../components/Catalogue";
  import CategoriesList from "../../components/CategoriesList";
  import toFix from "../../components/filters/toFixed";
  import formattedPrice from "../../components/filters/priceFix";
  import CustomSelect from "../../components/CustomSelect";
  export default {
    components: {CustomSelect, Catalogue, CategoriesList},
    data() {
      return {
        view: true,
        productsPerPage: 20,
        pageNum: 1,
        // options: [
        //   {name: 'От дешевых к дорогим', value: 1},
        //   {name: 'От дорогих к дешевым', value: 2},
        // ]
      }
    },
    filters: {
      toFix,
      formattedPrice
    },
    created() {},
    computed: {
      ...mapGetters([
        'PRODUCTS',
        'ALL_CATS',
        'MAIN_CATS',
        'SEARCH_VALUE',
      ]),
      pages(){
        return Math.ceil(this.PRODUCTS.length / this.productsPerPage);
      },
      paginatedProducts(){
        let from = (this.pageNum -1) * this.productsPerPage,
            to = from + this.productsPerPage;
        return this.PRODUCTS.slice(from, to);
      }
    },
    methods: {
      ...mapActions([
        'GET_PRODUCTS',
        'GET_CATEGORIES_LIST',
      ]),
      toggleView(){
        this.view = !this.view;
      },
      addToCart (product) {
        this.$store.commit('addToCart', product);
      },
      removeFromCart(product) {
        this.$store.commit('removeFromCart', product);
      },
      pageClick(page){
        this.pageNum = page;
      },
    },
    mounted() {
      this.$store.dispatch('GET_PRODUCTS', { cat: this.$route.params.id })
      this.GET_CATEGORIES_LIST()
      console.log(this.$route.params.id)
    },
  }
</script>


<style lang="sass" scoped>
  .shop
    +row-flex
    flex-wrap: nowrap !important
    justify-content: space-between
    margin-bottom: 4rem

    &__nav
      +col
      +size(2.8)
      height: 100%

    &__grid
      +col
      +size(9.2)
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

    &__mobile
      display: none
      margin-bottom: 1rem
      +lg(display, flex)


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
          cursor: pointer

          i
            font-size: 1.6rem
            font-weight: 500

    &__list
      padding-top: 2rem
      display: flex
      flex-wrap: wrap
      +sm(padding-top, 1rem)

      .product-item
        max-width: 20%
        display: flex
        flex-direction: column
        justify-content: space-between
        transition: all .3s ease
        +sm(max-width, 50%)

        &:hover
          transition: all .3s ease
          box-shadow: 0 0 10px rgba(75, 54, 124, .5)

          .product-item__footer
            opacity: 1

        &__inner
          border-right: 1px solid #e7eaf3
          height: 100%
          +sm(border, 1px solid #e7eaf3)

        &__body
          padding: 16px 20px
          display: flex
          flex-direction: column
          justify-content: space-between
          height: 100%
          +sm(padding, 10px 10px)

          .img-fluid
            max-height: 200px

        &__title
          font-size: 0.875rem
          line-height: 1.125rem
          margin-bottom: 10px
          display: -webkit-box
          -webkit-line-clamp: 3
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
        font-size: .7rem

      .product-price
        font-size: 1.25038rem
        +md(font-size, 1rem)

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

    &__plate
      padding-top: 2rem
      display: flex
      flex-direction: column

      .product-item
        width: 100%
        display: flex
        flex-direction: column
        transition: all .2s ease
        margin-bottom: 10px
        border: 1px solid #e7eaf3

        &__inner
          height: 100%

        &__body
          padding: 16px 24px
          display: flex
          flex-direction: column
          justify-content: space-between
          height: 100%

          .img-fluid
            max-width: 20%
            +sm(max-width, 30%)
            +xs(max-width, 50%)

        &__title
          font-size: 0.875rem
          line-height: 1.125rem
          margin-bottom: 10px
          display: -webkit-box
          -webkit-line-clamp: 3
          -webkit-box-orient: vertical
          overflow: hidden
          a
            color: #0062bd
            font-weight: 700

      .product-get
        display: flex
        align-items: baseline
        justify-content: space-between

      .product-code
        padding: .3rem 0
        font-size: .7rem

      .product-price
        font-size: 1.25038rem
        +md(font-size, 1rem)

      .btn-add
        width: 2.188rem
        height: 2.188rem
        background-color: #fed700
        color: #fff
        display: flex
        align-items: center
        justify-content: center
        border-radius: 6.1875rem
        transition: all 0.2s ease-in-out
        border: none
        outline: none
        cursor: pointer
        +sm(width, 2rem)
        +sm(height, 2rem)

        &:hover
          transform: translateY(-2px)
          transition: all 0.2s ease-in-out

        i
          font-size: 1.25rem
          color: #fff
          +sm(font-size, 1.3rem)

      .product-item__footer
        margin-top: 5px
        padding-left: 24px
        padding-right: 24px
        padding-bottom: 8px
        transition: all 0.4s ease-in-out

        i
            font-size: 1.4rem
            margin-right: 4px

        a
            font-size: 12px

      .ec
        color: #333e48

    &__pagination
      width: 100%
      display: flex
      justify-content: center
      flex-wrap: wrap

      .page
        width: 35px
        height: 35px
        line-height: 34px
        text-align: center
        border-radius: 20px
        border: 1px solid #e6e6e6
        padding: 0
        color: #7d7d7d
        margin: 0 5px
        cursor: pointer

        &:hover
          background-color: #E6E6E6

        &__selected
          font-weight: 700
          color: #262626
          background-color: #fed700
          border-color: #fed700
</style>
