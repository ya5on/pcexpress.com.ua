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
      <li class="breadcrumb-item">{{ cat.title }}
        <!--        <nuxt-link :to="`/category/${category.id}`">{{ category }}</nuxt-link>-->
      </li>
    </ul>
    <!-- End breadcrumb -->
    <client-only>
      <notifications group="foo" position="top right" width="170" />
    </client-only>
    <!--SHOP-GRID-->
    <div class="shop">
      <div class="shop__nav d-none">
        <CategoriesList/>
        <div class="filters" v-if="cat.id === 610">
          <h3 class="filters__title">
            <i class="fa fa-filter"></i>
            Фильтры</h3>
          <ul class="filters__list">
            <li class="filters__bold">Производитель:</li>
            <li>
              <input type="radio" id="Dell" value="Dell" v-model="selectBrand">
              <label for="Dell">Dell</label>
            </li>
            <li>
              <input type="radio" id="Fujitsu" value="Fujitsu" v-model="selectBrand">
              <label for="Fujitsu">Fujitsu</label>
            </li>
            <li>
              <input type="radio" id="Acer" value="Acer" v-model="selectBrand">
              <label for="Acer">Acer</label>
            </li>
            <li>
              <input type="radio" id="HP" value="HP" v-model="selectBrand">
              <label for="HP">HP</label>
            </li>
            <li>
              <input type="radio" id="Lenovo" value="Lenovo" v-model="selectBrand">
              <label for="Lenovo">Lenovo</label>
            </li>
          </ul>
          <ul class="filters__list">
            <li class="filters__bold">Socket:</li>
            <li>
              <input type="checkbox" id="1150" value="1150" v-model="selectSocket">
              <label for="1150">1150</label>
            </li>
            <li>
              <input type="checkbox" id="1155" value="1155" v-model="selectSocket">
              <label for="1155">1155</label>
            </li>
          </ul>
          <ul class="filters__list">
            <li class="filters__bold">Прооцессор:</li>
            <li>
              <input type="checkbox" id="i3" value="i3" v-model="selectCPU">
              <label for="i3">Intel Core i3</label>
            </li>
            <li>
              <input type="checkbox" id="i5" value="i5" v-model="selectCPU">
              <label for="i5">Intel Core i5</label>
            </li>
            <li>
              <input type="checkbox" id="i7" value="i7" v-model="selectCPU">
              <label for="i7">Intel Core i7</label>
            </li>
<!--            <li>-->
<!--              <input type="checkbox" id="xeon" value="xeon" v-model="selectCPU">-->
<!--              <label for="xeon">Intel Xeon</label>-->
<!--            </li>-->
          </ul>
          <button @click="clear" class="primary small">Сбросить фильтры</button>
        </div>
        <div class="filters" v-if="cat.id === 24">
          <h3 class="filters__title">
            <i class="fa fa-filter"></i>
            Фильтры</h3>
          <ul class="filters__list">
            <li class="filters__bold">Прооцессор:</li>
            <li>
              <input type="checkbox" id="i33" value="i3" v-model="selectCPU">
              <label for="i3">Intel Core i3</label>
            </li>
            <li>
              <input type="checkbox" id="i55" value="i5" v-model="selectCPU">
              <label for="i5">Intel Core i5</label>
            </li>
            <li>
              <input type="checkbox" id="i77" value="i7" v-model="selectCPU">
              <label for="i7">Intel Core i7</label>
            </li>
            <li>
              <input type="checkbox" id="xeon" value="xeon" v-model="selectCPU">
              <label for="xeon">Intel Xeon</label>
            </li>
          </ul>
          <button @click="clear" class="primary small">Сбросить фильтры</button>
        </div>
        <div class="filters" v-if="cat.id === 54">
          <h3 class="filters__title">
            <i class="fa fa-filter"></i>
            Фильтры</h3>
          <ul class="filters__list">
            <li class="filters__bold">Диагональ:</li>
            <li>
              <input type="radio" id="19" value='19"' v-model="selectInches">
              <label for="19">19"</label>
            </li>
            <li>
              <input type="radio" id="20" value='20"' v-model="selectInches">
              <label for="20">20"</label>
            </li>
            <li>
              <input type="radio" id="22" value='22"' v-model="selectInches">
              <label for="22">22"</label>
            </li>
            <li>
              <input type="radio" id="23" value='23"' v-model="selectInches">
              <label for="23">23"</label>
            </li>
            <li>
              <input type="radio" id="24" value='24"' v-model="selectInches">
              <label for="24">24"</label>
            </li>
          </ul>
          <ul class="filters__list">
            <li class="filters__bold">Разрешение:</li>
            <li>
              <input type="checkbox" id="1280x1024" value="1280x1024" v-model="selectResolution">
              <label for="1280x1024">1280x1024px</label>
            </li>
            <li>
              <input type="checkbox" id="1600x900" value="1600x900" v-model="selectResolution">
              <label for="1600x900">1600x900px</label>
            </li>
            <li>
              <input type="checkbox" id="1680x1050" value="1680x1050" v-model="selectResolution">
              <label for="1680x1050">1680x1050px</label>
            </li>
            <li>
              <input type="checkbox" id="1920x1080" value="1920x1080" v-model="selectResolution">
              <label for="1920x1080">1920x1080px</label>
            </li>
            <li>
              <input type="checkbox" id="1920x1200" value="1920x1200" v-model="selectResolution">
              <label for="1920x1200">1920x1200px</label>
            </li>
          </ul>
          <button @click="clear" class="primary small">Сбросить фильтры</button>
        </div>
        <div class="filters" v-if="cat.id === 27">
          <h3 class="filters__title">
            <i class="fa fa-filter"></i>
            Фильтры</h3>
          <ul class="filters__list">
            <li class="filters__bold">Тип памяти:</li>
            <li>
              <input type="radio" id="DDR3" value="DDR3" v-model="selectDDR">
              <label for="DDR3">DDR3</label>
            </li>
            <li>
              <input type="radio" id="DDR4" value="DDR4" v-model="selectDDR">
              <label for="DDR4">DDR4</label>
            </li>
          </ul>
          <ul class="filters__list">
            <li class="filters__bold">Объем памяти:</li>
            <li>
              <input type="checkbox" id="2GB" value="2GB" v-model="selectM">
              <label for="2GB">2GB</label>
            </li>
            <li>
              <input type="checkbox" id="4GB" value="4GB" v-model="selectM">
              <label for="4GB">4GB</label>
            </li>
            <li>
              <input type="checkbox" id="8GB" value="8GB" v-model="selectM">
              <label for="8GB">8GB</label>
            </li>
          </ul>
          <ul class="filters__list">
            <li class="filters__bold">Частота памяти:</li>
            <li>
              <input type="checkbox" id="1066MHz" value="1066Mhz" v-model="selectMHz">
              <label for="1066MHz">1066MHz</label>
            </li>
            <li>
              <input type="checkbox" id="1333MHz" value="1333Mhz" v-model="selectMHz">
              <label for="1333MHz">1333MHz</label>
            </li>
            <li>
              <input type="checkbox" id="1600MHz" value="1600Mhz" v-model="selectMHz">
              <label for="1600MHz">1600MHz</label>
            </li>
            <li>
              <input type="checkbox" id="1866MHz" value="1866Mhz" v-model="selectMHz">
              <label for="1866MHz">1866MHz</label>
            </li>
            <li>
              <input type="checkbox" id="2133MHz" value="2133Mhz" v-model="selectMHz">
              <label for="2133MHz">2133MHz</label>
            </li>
            <li>
              <input type="checkbox" id="2400MHz" value="2400Mhz" v-model="selectMHz">
              <label for="2400MHz">2400MHz</label>
            </li>
          </ul>

          <button @click="clear" class="primary small">Сбросить фильтры</button>
        </div>
      </div>
      <div class="shop__grid">
        <div class="shop__bar">
          <h3 class="font-size-25 mb-2 mb-md-0">{{ cat.title }}</h3>
          <p class="font-size-14 text-gray-90 mb-0">Товаров: {{ filteredProducts.length }}</p>
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
          <input class="d-none" v-model.trim="inputSearch" type="text" placeholder="Поиск по категории"/>
          <div class="d-flex">
            <!-- Select -->
            <div class="dropdown">
              <CustomSelect/>
            </div>
            <!-- End Select -->
          </div>
        </div>

        <div :class="[view ? 'shop__list' : 'shop__plate']">
          <div class="product-item" v-for="product in paginatedProducts" :key="product.id">
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
                      {{ product.price * getDollar | toFix | formattedPrice }}
                    </div>
                    <div class="product-add-cart">
                      <button class="btn-add" @click="addToCart(product); pushNotification()"><i class="ec ec-add-to-cart"></i></button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="product-item__footer">
              <div class="border-top">
                <a href="#" v-if="" @click="addToFavorites(product)">
                  <i class="ec ec-favorites mr-1 font-size-15"></i>Сохранить</a>
              </div>
            </div>
          </div>
          <div class="shop__pagination">
            <div class="page"
                 v-if="filteredProducts.length > 20"
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
import Catalogue from "../../components/MobileCatalogue";
import CategoriesList from "../../components/CategoriesList";
import toFix from "../../components/filters/toFixed";
import formattedPrice from "../../components/filters/priceFix";
import CustomSelect from "../../components/CustomSelect";

export default {
  components: {CustomSelect, Catalogue, CategoriesList},
  head() {
    return {
      title: this.cat.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.cat.title
        }
      ]
    }
  },
  data() {
    return {
      view: true,
      productsPerPage: 20,
      pageNum: 1,
      inputSearch: '',
      selectBrand: [],
      selectSocket: [],
      selectCPU: [],
      selectInches: [],
      selectResolution: [],
      selectDDR: [],
      selectM: [],
      selectMHz: []
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
      'PRODUCTS',
      'ALL_CATS',
      'MAIN_CATS',
      'RATES'
    ]),
    pages() {
      return Math.ceil(this.PRODUCTS.length / this.productsPerPage);
    },
    paginatedProducts() {
      let from = (this.pageNum - 1) * this.productsPerPage,
        to = from + this.productsPerPage;
      return this.filteredProducts.slice(from, to);
    },
    getDollar() {
      return this.RATES.map(e => e.rate).toString()
    },
    category() {
      return this.ALL_CATS.find(x => x.id === Number(this.$route.params.id))
    },
    cat() {
      return {...this.category}
    },
    filteredProducts() {
      // Фильтруем товары
      return this.PRODUCTS
        // По брендам
        .filter(x => x.name.includes(this.selectBrand))
        //Socket
        .filter(x => x.name.includes(this.selectSocket))
        //CPU
        .filter(x => x.name.toLowerCase().includes(this.selectCPU))
        //Дюймы
        .filter(x => x.name.toLowerCase().includes(this.selectInches))
        //Resolution
        .filter(x => x.name.toLowerCase().includes(this.selectResolution))
        //DDR
        .filter(x => x.name.includes(this.selectDDR))
        //Memory
        .filter(x => x.name.includes(this.selectM))
        //MHz
        .filter(x => x.name.includes(this.selectMHz))
        //Быстрый поиск покатегории
        .filter(x => x.name.toLowerCase().includes(this.inputSearch.toLowerCase()))

    },
  },
  methods: {
    ...mapActions([
      'GET_PRODUCTS',
      'GET_CATEGORIES_LIST',
      'addToCart',
    ]),
    removeFromFavorites(product) {
      this.$store.commit('removeFromFavorites', product);
    },
    pushNotification(){
      this.$notify({
        group: 'foo',
        text: 'Товар добавлен!',
        duration: 2000,
      });
    },
    toggleView() {
      this.view = !this.view;
    },
    pageClick(page) {
      this.pageNum = page;
    },
    addToFavorites(product) {
      this.$store.commit('addToFavorites', product);
    },
    clear() {
      this.inputSearch = '';
      this.selectBrand = [];
      this.selectSocket = [];
      this.selectCPU = [];
      this.selectInches = [];
      this.selectResolution = [];
      this.selectDDR = [];
    },
  },
  mounted() {
    this.$store.dispatch('GET_PRODUCTS', {cat: this.$route.params.id})
    this.GET_CATEGORIES_LIST()
  },
}
</script>


<style lang="sass">
.shop
  +row-flex
  flex-wrap: nowrap !important
  justify-content: space-between
  margin-bottom: 4rem

  &__nav
    +col
    +size(2.8)
    height: 100%
    display: flex
    flex-direction: column

    .filters
      padding: 16px
      font-size: 14px
      box-sizing: border-box

      &__title
        position: relative
        font-size: 1rem
        padding-bottom: 0.2rem
        margin-bottom: 0
        font-weight: 400
        border-bottom: 1px solid #e7eaf3

        &:after
          content: ' '
          height: 2px
          width: 114px
          display: block
          background-color: #fed700
          position: absolute
          bottom: -1px
          left: 0

      &__list
        margin-bottom: 5px
        border-bottom: 1px solid #e7eaf3

        li
          padding: 3px 0

      &__bold
        font-weight: 600
        margin-top: 10px

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
      +md(font-size, 1.2rem)

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
          //overflow: initial
          //z-index: 10
          //position: initial

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
      +sm(display, none)

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
    +sm(margin-top, 15px)

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
