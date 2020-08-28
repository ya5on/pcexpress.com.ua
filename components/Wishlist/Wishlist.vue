<template>
<div>
  <!-- breadcrumb -->
  <ul class="breadcrumb">
    <li class="breadcrumb-item">
      <nuxt-link to="/">Главная</nuxt-link>
    </li>
    <li class="breadcrumb-item">
      <i class="ec ec-arrow-right-categproes"></i>
      <nuxt-link to="/user/wishlist">Список желаний</nuxt-link>
    </li>
  </ul>
  <!-- End breadcrumb -->
  <div class="cart">
    <div v-if="$store.state.favorites.length > 0" class="cart__main">
      <h1 class="">Список желаний</h1>
      <div class="cart__table">
        <form class="cart__form" action="#" method="post">
          <div class="cart__grid cart__title">
            <div class="product-remove"></div>
            <div class="product-thumbnail"></div>
            <div class="product-name">Наименование</div>
            <div class="product-price">Цена</div>
          </div>
          <div class="cart__grid"
               v-for="product in $store.state.favorites"
               :key="product.id">
            <div class="product-remove">
                <span class="removeBtn"
                      title="Удалить из корзины"
                      @click="removeFromFavorites(product)"
                      >×</span>
            </div>
            <div class="product-thumbnail">
              <img class="img-fluid" :src="`${product.img}`" alt="Image Description">
            </div>
            <nuxt-link :to="`/product/${product.id}`" class="product-name">
              <p>{{ product.name }}</p>
            </nuxt-link>
            <div class="product-price">
              <p class="product__sub">Цена:</p>
              <p>{{ product.price * getDollar | toFix | formattedPrice }}</p>
            </div>
            <div class="add-cart">
              <button class="btn" @click.prevent="addToCart(product)"><i class="ec ec-add-to-cart"></i>Купить</button>
            </div>
          </div>
          <hr class="navbar-divider">
          <div class="cart__grid">
<!--            <nuxt-link class="total-price" to="">-->
<!--              Итого: {{ toFix | formattedPrice }}-->
<!--            </nuxt-link>-->
          </div>
        </form>
      </div>
    </div>
    <div v-else class="cart__main">
      <h1 class="">Список желаний пуст</h1>
    </div>
  </div>
</div>
</template>

<script>
import toFix from "../filters/toFixed";
import formattedPrice from "../filters/priceFix";
import {mapActions, mapGetters} from "vuex";
export default {
name: "Wishlist",
  filters: {
    toFix,
    formattedPrice
  },
  created() {
    return this.$store.dispatch('GET_RATES')
  },
  methods: {
    ...mapActions([
      'addToCart',
    ]),
    removeFromFavorites(product) {
      this.$store.commit('removeFromFavorites', product);
    }
  },
  computed:{
    ...mapGetters([
      'RATES'
    ]),
    getDollar() {
      return this.RATES.map(e => e.rate).toString()
    },
  }
}
</script>

<style lang="sass" scoped>
.add-cart
  padding-bottom: 0.143rem
  margin-bottom: 0.5rem
  display: flex
  justify-content: center
  align-items: center
  width: 170px

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
