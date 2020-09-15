<template>
  <!--  public_key-->
  <!--  sandbox_i85703463867-->
  <!--  private_key-->
  <!--  sandbox_Y9zaCQf4SS1ydp1w7CPHh8jGys3LqqulXdIWyAPc-->
  <div>
    <!-- breadcrumb -->
    <ul class="breadcrumb">
      <li class="breadcrumb-item">
        <nuxt-link to="/">Главная</nuxt-link>
      </li>
      <li class="breadcrumb-item">
        <i class="ec ec-arrow-right-categproes"></i>
      </li>
      <li class="breadcrumb-item">Оформление заказа</li>
    </ul>
    <!-- End breadcrumb -->
    <div class="title d-block">
      <h1 class="text-center">Оформление заказа</h1>
    </div>
    <form class="order">
      <div class="order__box">
        <div class="order__form">
          <div class="">
            <!-- Title -->
            <div class="order__title">
              <h3 class="">Контактные данные</h3>
            </div>
            <!-- End Title -->
            <!-- Billing Form -->
            <div class="input-fields">
              <div class="input-fields__box">
                <!-- Input -->
                <div class="">
                  <label class="input-fields__label">
                    Имя
                    <span class="text-danger">*</span>
                  </label>
                  <input type="text" class="input-fields__control" name="firstName" placeholder="John" required="">
                </div>
                <!-- End Input -->
              </div>

              <div class="input-fields__box">
                <!-- Input -->
                <div class="js-form-message mb-6">
                  <label class="input-fields__label">
                    Фамилия
                    <span class="text-danger">*</span>
                  </label>
                  <input type="text" class="input-fields__control" name="lastName" placeholder="Doe" required="">
                </div>
                <!-- End Input -->
              </div>
            </div>
            <div class="input-fields">
              <div class="input-fields__box">
                <!-- Input -->
                <div class="">
                  <label class="input-fields__label">
                    Эл. Почта
                  </label>
                  <input type="email" class="input-fields__control" name="emailAddress"
                         placeholder="johndoe@gmail.com">
                </div>
                <!-- End Input -->
              </div>

              <div class="input-fields__box">
                <!-- Input -->
                <div class="">
                  <label class="input-fields__label">
                    Телефон
                    <span class="text-danger">*</span>
                  </label>
                  <input type="text" class="input-fields__control" placeholder="+38 (062) 109-9222" required="">
                </div>
                <!-- End Input -->
              </div>
            </div>
            <div class="order__title">
              <h3 class="">Доставка / Самовывоз</h3>
            </div>
            <div class="">
              <label class="input-fields__label">
                Способ доставки
                <span class="text-danger">*</span>
              </label>
              <div class="input-fields__dropdown">
                <div class="custom-control">
                  <input type="radio" class="custom-control-input" id="Radio1" value="a" v-model="checked">
                  <label class="custom-control-label" for="Radio1">
                    Самовывоз из магазина
                  </label>
                  <div class="check"></div>
                </div>
                <div class="custom-control">
                  <input type="radio" class="custom-control-input" id="Radio2" value="b" v-model="checked">
                  <label class="custom-control-label" for="Radio2">
                    Новой Почтой
                  </label>
                  <div class="check"></div>
                  <div class="custom-control-text" v-if="checked === 'b'">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet, ut.
                  </div>
                </div>
                <div class="custom-control">
                  <input type="radio" class="custom-control-input" id="Radio3" value="c" v-model="checked">
                  <label class="custom-control-label" for="Radio3">
                    Адресная доставка
                  </label>
                  <div class="check"></div>
                </div>
              </div>
            </div>
            <!-- End Input -->
            <!-- End Title -->
            <div class="textarea">
              <div class="mb-4">
                <label class="input-fields__label">Коментарий:</label>
                <div class="input-group">
                  <textarea class="form-control p-5" rows="4" name="text" placeholder="Примечания к вашему заказу, например особые примечания к доставке."></textarea>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="order__checkout--table">
          <div class="bg-gray-1 rounded-lg">
              <!-- Order Summary -->
              <div class="p-4 mb-4 checkout-table">
                <!-- Title -->
                <div class="order__title">
                  <h3 class="">Ваш заказ / Оплата</h3>
                </div>
                <!-- End Title -->
                <!-- Product Content -->
                <table class="table">
                  <thead>
                  <tr class="table__title">
                    <th class="table__name">Наименование</th>
                    <th class="table__total">Цена</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr class="cart_item" v-for="product in cart" :key="product.id">
                    <th class="cart_item--1">{{ product.name }}<strong class="product-quantity"> × {{
                        product.qty
                      }}</strong></th>
                    <th class="cart_item--2">{{ product.price * getDollar | toFix | formattedPrice }}</th>
                  </tr>
                  </tbody>
                  <tfoot>
                  <tr>
                    <th class="table__footer"><strong>Сумма:</strong></th>
                    <td class="table__footer"><strong>{{ cartTotalCost * getDollar | toFix | formattedPrice }}</strong></td>
                  </tr>
                  </tfoot>
                </table>
                <hr>
                <!-- End Product Content -->
                <div class="border-top border-width-3 border-color-1 pt-3 mb-3">
                  <!-- Basics Accordion -->
                    <!-- Card -->
                    <div class="input-fields__dropdown">
                      <div class="custom-control-order">
                        <input type="radio" class="custom-control-input" id="Radio4" value="a" v-model="checkedPay">
                        <label class="custom-control-label form-label " for="Radio4">
                          Наличными (Самовывоз / Курьером По Киеву)
                        </label>
                        <div class="custom-control-text" v-if="checkedPay === 'a'">
                          Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.
                        </div>
                        <div class="check"></div>
                      </div>
                      <div class="custom-control-order">
                        <input type="radio" class="custom-control-input" id="Radio5" value="b" v-model="checkedPay">
                        <label class="custom-control-label form-label" for="Radio5">
                          Картой На Сайте - <span>(VISA / MasterCard)</span>
                        </label>
                        <div class="custom-control-text" v-if="checkedPay === 'b'">
                          Please send a check to Store Name, Store Street, Store Town, Store State / County, Store Postcode.
                        </div>
                        <div class="check"></div>
                      </div>
                      <div class="custom-control-order">
                        <input type="radio" class="custom-control-input" id="Radio6" value="c" v-model="checkedPay">
                        <label class="custom-control-label form-label" for="Radio6">
                          Наложенный Платеж (Новая Почта)
                        </label>
                        <div class="custom-control-text" v-if="checkedPay === 'c'">
                          Pay with cash upon delivery.
                        </div>
                        <div class="check"></div>
                      </div>
                      <div class="custom-control-order">
                        <input type="radio" class="custom-control-input" id="Radio7" value="d" v-model="checkedPay">
                        <label class="custom-control-label form-label" for="Radio7">
                          Безналичный Расчет (ПДВ / ФОП)
                        </label>
                        <div class="custom-control-text" v-if="checkedPay === 'd'">
                          Pay via PayPal; you can pay with your credit card if you don’t have a PayPal account.
                        </div>
                        <div class="check"></div>
                      </div>
                    </div>
                  <!-- End Basics Accordion -->
                </div>

                <button type="submit" class="order-btn">
                  Оформить ЗАКАЗ
                </button>
              </div>
              <!-- End Order Summary -->
            </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import NovaPoshta from 'novaposhta';
import toFix from "../filters/toFixed";
import formattedPrice from "../filters/priceFix";
import {mapGetters} from "vuex";

const api = new NovaPoshta({apiKey: 'e6ac5221a16aa8bc3f1a08a8424c40b4'});
export default {
  name: "Checkout",
  data() {
    return {
      checked: 'a',
      checkedPay: '',
      cities: []
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
      'cart',
      'RATES'
    ]),
    cartTotalCost() {
      let result = []
      if (this.cart) {
        for (let product of this.cart) {
          result.push(product.price * product.qty)
        }
        result = result.reduce((sum, el) => sum + el, 0)
        return result;
      } else {
        return 0
      }
    },
    getDollar() {
      return this.RATES.map(e => e.rate).toString()
    },
  },
  mounted() {
    api.address
      .getCities()
      .then((response) => {
        (this.cities = response.data)
      })
      .catch((errors) => {
        if (Array.isArray(errors)) {
          errors.forEach((error) => console.log(`[${error.code || '-'}] ${error.en || error.uk || error.ru || error.message}`));
        }
      });
  }
}
</script>

<style lang="sass" scoped>
.title
  text-align: center
  margin-bottom: 2rem

  h1
    text-align: center
    font-weight: 400
    font-size: 2.5rem

.order
  margin: 0 auto
  width: 100%
  max-width: 1200px

  &__title
    border-color: #dddddd
    margin-bottom: 2rem
    border-bottom: 1px solid #e7eaf3

    h3
      position: relative
      font-size: 1.56275rem
      padding-bottom: 0.5rem
      margin-bottom: 0
      font-weight: 400

      &:after
        content: ''
        height: 2px
        width: 114px
        display: block
        background-color: #fed700
        position: absolute
        bottom: -1px
        left: 0

  &__box
    display: flex
    flex-wrap: wrap

  &__form
    +col
    +size(7)
    +size-md(12)

    .textarea
      margin-top: 1rem
      margin-bottom: 1.4rem

    .input-group
      position: relative
      display: flex
      flex-wrap: wrap
      align-items: stretch
      width: 100%

      .form-control
        margin-top: 0
        margin-bottom: 0
        position: relative
        flex: 1 1 auto
        display: block
        width: 100%
        height: 130px
        padding: 0.67rem 1rem
        font-size: 0.875rem
        font-weight: 400
        line-height: 1.5
        color: #818181
        background-color: #fff
        background-clip: padding-box
        border: 1px solid #dddddd
        border-radius: 1.4rem
        outline: none
        transition: all 0.3s

  &__checkout--table
    +col
    +size(5)
    +size-md(12)
    padding: 1rem
    background-color: #F5F5F5
    height: 100%
    border-radius: 10px

  .input-fields
    display: flex
    justify-content: space-between
    flex-wrap: wrap

    &__box
      +col
      +size(6)
      margin-bottom: 2.5rem

    &__label
      display: block
      text-transform: capitalize
      font-size: 0.875rem
      font-weight: 700
      margin-bottom: 0.5rem

    &__control
      display: block
      width: 100%
      height: calc(1.5em + 1.34rem + 2px)
      padding: 0.67rem 1rem
      font-size: 0.875rem
      font-weight: 400
      line-height: 1.5
      color: #818181
      background-color: #fff
      background-clip: padding-box
      border: 1px solid #dddddd
      border-radius: 1.4rem
      transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out
      outline: none

      &:focus
        border-color: #7f828b

    &__dropdown
      width: 100%

    &__select
      +col
      +size(12)
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
      border-radius: 1.4rem
      transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out
      outline: none
      cursor: pointer
      position: relative

      &:hover
        background-color: transparent

  .table

    &__name, &__total
      font-weight: 700
      padding: 5px 0

    .cart_item
      border-bottom: 1px solid #ddd
      border-top: 1px solid #ddd

      th
        padding: 5px 0
        &:last-of-type
          width: 15%

        &:first-of-type
          width: 80%

    &__footer
      padding: 10px 0

  .custom-control
    position: relative

  .custom-control-order
    position: relative
    border-bottom: 1px solid #dddddd

  .custom-control-input
    position: absolute
    visibility: hidden

  .custom-control-label
    display: block
    position: relative
    margin: 15px 0 15px 20px
    height: 20px
    z-index: 9
    cursor: pointer
    transition: all 0.3s linear

  .custom-control-text
    padding: 1rem
    background-color: #ECECEC

  .form-label
    font-size: 0.875rem
    font-weight: 700

    span
      color: #0062BD

  .check
    display: block
    position: absolute
    border: 5px solid #AAAAAA
    border-radius: 100%
    height: 15px
    width: 15px
    top: 3px
    left: 0
    z-index: 5
    transition: border .25s linear

    &:before
      display: block
      position: absolute
      content: ''
      border-radius: 100%
      height: 7px
      width: 7px
      top: 2px
      left: 2px
      margin: auto
      transition: background 0.25s linear

  input[type=radio]:checked ~ .check
    border: 2px solid #FED700

  input[type=radio]:checked ~ .check::before
    background: #FED700

  input[type=radio]:checked ~ label
    color: #000

.order-btn
    width: 100%
    cursor: pointer
    color: #333e48
    background-color: #fed700
    display: inline-block
    font-weight: 700
    text-align: center
    user-select: none
    border: 1px solid transparent
    padding: 1rem 2rem
    font-size: 1rem
    line-height: 1.5
    border-radius: 1.4rem
    transition: all 0.2s ease-in-out
    margin: 20px 0
</style>
