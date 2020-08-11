<template>
  <div>
    <!-- breadcrumb -->
    <ul class="breadcrumb">
      <li class="breadcrumb-item">
        <nuxt-link to="/">Главная</nuxt-link>
      </li>
      <li class="breadcrumb-item">
        <i class="ec ec-arrow-right-categproes"></i>
        <nuxt-link to="/cart">Корзина</nuxt-link>
      </li>
    </ul>
    <!-- End breadcrumb -->
    <div class="cart">
      <div v-if="$store.state.cart.length > 0" class="cart__main">
        <h1 class="">Корзина</h1>
        <div class="cart__table">
          <form class="cart__form" action="#" method="post">
            <div class="cart__grid cart__title">
              <div class="product-remove"></div>
              <div class="product-thumbnail"></div>
              <div class="product-name">Наименование</div>
              <div class="product-price">Цена</div>
              <div class="product-quantity">Количество</div>
              <div class="product-subtotal">Сумма</div>
            </div>
            <div class="cart__grid"
                       v-for="product in $store.state.cart"
                       :key="product.id">
              <div class="product-remove">
                <span class="removeBtn"
                      title="Удалить из корзины"
                      @click.prevent="removeFromCart(product)">×</span>
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
              <div class="product-quantity">
                <p class="product__sub">Количество:</p>
<!--                <span class="quantity__btn" @click="decrement">-</span>-->
                <p>{{ product.quantity > 0 ? ` ${product.quantity}` : '' }}</p>
<!--                <span class="quantity__btn" @click="increment">+</span>-->
              </div>
              <div class="product-subtotal">
                <p class="product__sub">sub_total:</p>
                <p>{{ product.price * product.quantity | toFix | formattedPrice}}</p>
              </div>
            </div>
            <hr class="navbar-divider">
            <div class="cart__grid">
              <nuxt-link class="total-price" to="">
                Итого: {{ cartTotalCost | toFix | formattedPrice }}
              </nuxt-link>
            </div>
          </form>
        </div>
      </div>
      <div v-else class="cart__main">
        <h1 class="">Корзина пуста</h1>
        <nuxt-link to="/category" class="cart__empty-link">
          <h2>Но это никогда не поздно исправить :)</h2>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import toFix from "../filters/toFixed";
import formattedPrice from "../filters/priceFix";
export default {
  name: "Cart",
  filters: {
    toFix,
    formattedPrice
  },
  props: [],
  // mounted() {
  //   this.$store.commit('saveCart', window.localStorage.getItem('cart'))
  //   this.$store.commit('saveCart', window.localStorage.getItem('cartCount'))
  // },
  computed: {
    // buyLabel() {
    //   let totalProducts = this.$store.state.cart.length,
    //     productsAdded = this.$store.state.cart,
    //     pricesArray = [],
    //     productLabel = '',
    //     finalPrice = '',
    //     quantity = 1;
    //
    //   productsAdded.forEach(product => {
    //
    //     if (product.quantity >= 1) {
    //       quantity = product.quantity;
    //     }
    //
    //     pricesArray.push((product.price * quantity));
    //   });
    //
    //   finalPrice = pricesArray.reduce((a, b) => a + b, 0);
    //
    //   if (totalProducts > 1) {
    //     productLabel = 'товара';
    //   } else {
    //     productLabel = 'товар';
    //   }
    //   return `${totalProducts} ${productLabel} на сумму: ${finalPrice}`;
    // },
    cartTotalCost() {
      let result = []
      if (this.$store.state.cart) {
        for (let product of this.$store.state.cart) {
          result.push(product.price * product.quantity)
        }
        result = result.reduce(function (sum, el) {
          return sum + el;
        })
        return result;
      } else {
        return 0
      }
    }
  },
  methods: {
    removeFromCart(product) {
      this.$store.commit('removeFromCart', product);
    },
  }
}
</script>

<style lang="sass" scoped>
.total-price
  display: flex
  justify-content: flex-end
  width: 100%

.removeBtn
  color: #a7a7a7
  font-size: 1.62488rem
  cursor: pointer
  +sm(font-size, 2rem)

  &:hover
    color: red

.cart
  margin: 0 auto
  width: 100%
  max-width: 1200px
  +sm(padding-left, 10px)
  +sm(padding-right, 10px)

  &__main
    margin-bottom: 2.5rem

    h1
      text-align: center
      font-weight: 400
      font-size: 2.5rem
      margin-bottom: 35px
      +sm(font-size, 1.9rem)

  &__empty-link
    text-decoration: underline
    color: #1869E5

    h2
      text-align: center
      font-size: 1rem
      margin-top: 35px
      margin-bottom: 35px
      +sm(font-size, .8rem)

  &__table
    margin-bottom: 4rem

  &__form
    margin-bottom: 1.5rem
    display: flex
    flex-direction: column

  &__title
    border-bottom: 1px solid #dadce0
    padding: 15px 0
    color: #747474!important
    font-size: 14px!important
    +sm(display, none!important)

  &__grid
    display: flex
    flex-wrap: nowrap
    margin: 10px 0
    font-size: 17px
    color: #333e48

    +sm(flex-direction, column)
    +sm(border-bottom, 1px solid #dadce0)

    .product-remove
      +col
      +size(1)
      +size-sm(12)
      display: flex
      justify-content: center
      align-items: center
      +sm(justify-content, flex-end)

    .product-thumbnail
      +col
      +size(2)
      +size-sm(12)
      display: flex
      justify-content: center
      align-items: center

      .img-fluid
        border: 1px solid #e7eaf3
        padding: 0.25rem
        max-width: 150px
        +md(max-width, 100px)

    .product-name
      +col
      +size(4)
      +size-sm(12)
      display: flex
      justify-content: flex-start
      align-items: center
      +sm(justify-content, space-between)
      +sm(align-items, flex-start)
      +sm(padding, .5rem 0)

      &:hover
        text-decoration: underline


    .product-price
      +col
      +size(2)
      +size-sm(12)
      display: flex
      justify-content: center
      align-items: center
      +sm(justify-content, space-between)
      +sm(align-items, flex-start)
      +sm(padding, .5rem 0)

    .product-quantity
      +col
      +size(2)
      +size-sm(12)
      display: flex
      justify-content: center
      align-items: center
      +sm(justify-content, space-between)
      +sm(align-items, flex-start)
      +sm(padding, .5rem 0)

    .product-subtotal
      +col
      +size(2)
      +size-sm(12)
      display: flex
      justify-content: center
      align-items: center
      +sm(justify-content, space-between)
      +sm(align-items, flex-start)
      +sm(padding, .5rem 0)

    .product__sub
      display: none
      padding-right: 10px
      +sm(display, inline-block)

</style>
