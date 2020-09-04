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
      <div v-if="cart.length > 0" class="cart__main">
        <h1 class="">Корзина</h1>
        <div class="cart__table">
          <div class="cart__form">
            <div class="cart__grid cart__title">
              <div class="product-remove"></div>
              <div class="product-thumbnail"></div>
              <div class="product-name">Наименование</div>
              <div class="product-price">Цена</div>
              <div class="product-quantity">Количество</div>
              <div class="product-subtotal">Сумма</div>
            </div>
            <div class="cart__grid"
                 v-for="product in cart"
                 :key="product.id">
              <div class="product-remove">
                <span class="removeBtn"
                      title="Удалить из корзины"
                      @click.prevent="removeFromCart(product.id)">×</span>
              </div>
              <div class="product-thumbnail">
                <img class="img-fluid" :src="`${product.img}`" alt="Image Description">
              </div>
              <nuxt-link :to="`/product/${product.id}`" class="product-name">
                <p>{{ product.name }}</p>
              </nuxt-link>
              <div class="product-price">
                <p class="product__sub">Цена:</p>
                <p>{{ product.price * getDollar| toFix | formattedPrice }}</p>
              </div>
              <div class="product-quantity">
                <p class="product__sub">Количество:</p>
                <div class="border">
                  <div class="quantity">
                    {{ product.qty }}
                  </div>
                  <div class="col-auto">
                    <button class="btn" @click="reduceQty(product.id)">
                      <i class="fa fa-minus btn-icon__inner"></i>
                    </button>
                    <button class="btn" @click="addQty(product.id)">
                      <i class="fa fa-plus btn-icon__inner"></i>
                    </button>
                  </div>
                </div>
              </div>
              <div class="product-subtotal">
                <p class="product__sub">Сумма:</p>
                <p>{{ product.price * getDollar * product.qty | toFix | formattedPrice }}</p>
              </div>
            </div>
            <div class="cart__grid">
              <div class="total-price">
                Итого: {{ cartTotalCost * getDollar | toFix | formattedPrice }}
              </div>
            </div>
            <div class="cart__block">
              <div class="cart__coupon d-none">
                <!-- Apply coupon Form -->
                <label class="sr-only" for="subscribeSrEmailExample1">Активировать код</label>
                <div class="input-group">
                  <input type="text" class="form-control" name="text" id="subscribeSrEmailExample1"
                         placeholder="Введите код" required="">
                  <div class="input-group-append">
                    <button class="btn" type="button" id="subscribeButtonExample2"><span
                      class="">Активировать скидку</span></button>
                  </div>
                </div>
                <!-- End Apply coupon Form -->
              </div>
              <div class="d-flex">
                <nuxt-link to="/category" class="btn-next">Продолжить покупки</nuxt-link>
                <nuxt-link v-if="cart.length > 0" to="/checkout" class="btn-order">Оформить заказ</nuxt-link>
              </div>
            </div>
          </div>
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
import {mapActions, mapGetters} from "vuex";

export default {
  name: "Cart",
  filters: {
    toFix,
    formattedPrice
  },
  created() {
    return this.$store.dispatch('GET_RATES')
  },
  computed: {
    ...mapGetters([
      'cart',
      'RATES'
    ]),
    cartTotalCost() {
      let result = []
      if (this.cart) {
        for (let product of this.cart) {
          result.push(product.price * product.qty)
        }
        result = result.reduce(function (sum, el) {
          return sum + el;
        })
        return result;
      } else {
        return 0
      }
    },
    getDollar() {
      return this.RATES.map(e => e.rate).toString()
    },
  },
  methods: {
    ...mapActions(['addQty', 'reduceQty', 'removeFromCart']),
  }
}
</script>

<style lang="sass">
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
    color: #747474 !important
    font-size: 14px !important
    +sm(display, none !important)

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
        max-height: 150px
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

      .border
        width: 80%
        padding: 0.25rem 1rem
        border-radius: 50rem
        border: 1px solid #ddd
        display: flex
        justify-content: space-between
        +md(width, 100%)
        +lg(padding, .25rem .3rem)
        +sm(width, 30%)

      .col-auto
        .btn
          outline: none
          background: transparent
          border: none
          cursor: pointer
          font-size: 0.75rem
          width: 1.5rem
          height: 1.5rem
          padding: 0
          border-radius: 50%
          color: #333e48
          transition: all .4s ease

          &:hover
            background: #333e48
            color: #dadce0

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

    .total-price
      font-weight: bold
      border-top: 1px solid #dadce0
      padding: 10px

  &__block
    padding-top: 1rem
    display: flex
    flex-wrap: wrap
    justify-content: space-between
    align-items: center

  &__coupon
    width: 40%
    +md(width, 100%)

    .input-group
      position: relative
      display: flex
      align-items: stretch
      width: 100%
      +md(width, 50%)

    .form-control
      border-radius: 1.4rem 0 0 1.4rem
      position: relative
      flex: 1 1 auto
      margin-bottom: 0
      display: block
      height: calc(1.5em + 1.34rem + 2px)
      padding: 0.67rem 1rem
      font-size: 0.875rem
      font-weight: 400
      line-height: 1.5
      color: #818181
      background-color: #fff
      background-clip: padding-box
      border: 1px solid #dddddd
      transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out


    .input-group-append
      margin-left: -1px
      display: flex

      .btn
        border-radius: 0 1.4rem 1.4rem 0
        position: relative
        z-index: 2
        cursor: pointer
        color: #fff
        background-color: #333e48
        border-color: #333e48
        display: inline-block
        font-weight: 700
        text-align: center
        user-select: none
        padding: 0.67rem 1rem
        font-size: 0.875rem
        transition: all 0.2s ease-in-out
        outline: none
        box-sizing: border-box

  .btn-next
    display: inline-block
    color: #333e48
    text-align: center
    user-select: none
    font-size: 0.875rem
    line-height: 1.5
    border-radius: 1.4rem
    transition: all 0.2s ease-in-out
    background: rgba(119, 131, 143, 0.1)
    border-color: transparent
    padding: 0.67rem 2rem
    margin-right: 10px

    &:hover
      color: #dadce0
      background-color: #333e48

  .btn-order
    color: #333e48
    background-color: #fed700
    border-color: #fed700
    display: inline-block
    font-weight: 700
    text-align: center
    user-select: none
    padding: 0.67rem 2rem
    font-size: 0.875rem
    line-height: 1.5
    border-radius: 1.4rem
    transition: all 0.2s ease-in-out

    &:hover
      color: #dadce0
      background-color: #333e48

</style>
