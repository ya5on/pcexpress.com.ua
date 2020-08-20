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
    <div v-if="$store.state.favourites.length > 0" class="cart__main">
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
               v-for="product in $store.state.favourites"
               :key="product.id">
            <div class="product-remove">
                <span class="removeBtn"
                      title="Удалить из корзины">×</span>
            </div>
            <div class="product-thumbnail">
              <img class="img-fluid" :src="`${product.img}`" alt="Image Description">
            </div>
            <nuxt-link :to="`/product/${product.id}`" class="product-name">
              <p>{{ product.name }}</p>
            </nuxt-link>
            <div class="product-price">
              <p class="product__sub">Цена:</p>
              <p>{{ product.price | toFix | formattedPrice }}</p>
            </div>
          </div>
          <hr class="navbar-divider">
          <div class="cart__grid">
            <nuxt-link class="total-price" to="">
              Итого: {{ toFix | formattedPrice }}
            </nuxt-link>
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
export default {
name: "Wishlist",
  filters: {
    toFix,
    formattedPrice
  },
  methods: {


  }
}
</script>

<style scoped>

</style>
