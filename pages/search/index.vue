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
      <li class="breadcrumb-item">Поиск</li>
    </ul>
    <!-- End breadcrumb -->
    <!--SHOP-GRID-->
    <div class="shop">
      <CategoriesList class="shop__nav d-none" />
      <div class="shop__grid">

        <div class="shop__bar">
          <h3 class="font-size-25 mb-2 mb-md-0">Найдено товаров: {{ resultQuery.length }}</h3>

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
          <!--          <div v-if="PRODUCTS.length === 0" style="text-align: center; margin: 35px; font-size: 28px">Товаров нет</div>-->
          <div class="product-item" v-for="product in resultQuery" :key="product.id">
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
                      {{ product.price * getDollar  | toFix | formattedPrice }}
                    </div>
                    <div class="product-add-cart">
                      <button class="btn-add" @click="addToCart(product)"><i class="ec ec-add-to-cart"></i></button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="product-item__footer">
              <div class="border-top">
                <a href="#" class="">
                  <i class="ec ec-compare mr-1 font-size-15"></i>Сравнить</a>
                <a href="#" class="" @click="addToFavorites(product)">
                  <i class="ec ec-favorites mr-1 font-size-15"></i>Сохранить</a>
              </div>
            </div>
          </div>
          <!--          <div class="shop__pagination">-->
          <!--            <div class="page"-->
          <!--                 v-if="pages >= 2"-->
          <!--                 v-for="page in pages"-->
          <!--                 :key="page"-->
          <!--                 :class="{'page__selected' : page === pageNum}"-->
          <!--                 @click="pageClick(page)">-->
          <!--              {{ page }}-->
          <!--            </div>-->
          <!--          </div>-->
        </div>
      </div>
    </div>
    <!--END SHOP-GRID-->
  </div>
</template>


<script>
import {mapActions, mapGetters, mapState} from 'vuex'
import Catalogue from "../../components/MobileCatalogue";
import CategoriesList from "../../components/CategoriesList";
import toFix from "../../components/filters/toFixed";
import formattedPrice from "../../components/filters/priceFix";
import CustomSelect from "../../components/CustomSelect";
export default {
  components: {CustomSelect, Catalogue, CategoriesList},
  // head() {
  //   return {
  //     title: this.PRODUCT.name,
  //     meta: [
  //       {
  //         hid: 'description',
  //         name: 'description',
  //         content: this.PRODUCT.name
  //       }
  //     ]
  //   }
  // },
  data() {
    return {
      view: true,
    }
  },
  filters: {
    toFix,
    formattedPrice
  },
  created() {

  },
  computed: {
    ...mapGetters([
      'PRODUCTS',
      'SEARCH_VALUE',
      'RATES'
    ]),
    resultQuery(){
      if(this.SEARCH_VALUE){
        return this.PRODUCTS.filter((item)=>{
          return this.SEARCH_VALUE.toLowerCase().split(' ').every(v => item.name.toLowerCase().includes(v))
        })
      }else{
        return this.PRODUCTS;
      }
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
    toggleView(){
      this.view = !this.view;
    },
    addToFavorites(product) {
      this.$store.commit('addToFavorites', product);
    },
  },
  mounted() {
    this.$store.dispatch('GET_PRODUCTS', { cat: this.$route.params.id })
    return this.$store.dispatch('GET_RATES')
  },
}
</script>


<style lang="sass">

</style>
