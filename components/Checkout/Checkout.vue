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
    <form v-if="cart.length > 0" class="order" @submit.prevent="formSubmit">
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
                  <input type="text" class="input-fields__control" name="firstName" placeholder="John" v-model="orderName">
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
                  <input type="text" class="input-fields__control" name="lastName" placeholder="Doe" v-model="orderSecondName">
                </div>
                <!-- End Input -->
              </div>
            </div>
            <div class="input-fields">
              <div class="input-fields__box">
                <!-- Input -->
                <div class="">
                  <label class="input-fields__label">
                    Телефон
                    <span class="text-danger">*</span>
                  </label>
                  <input type="text" class="input-fields__control" placeholder="+38 (000) 000-00-00"
                         v-mask="'+38 (###) ###-##-##'"
                         v-model="orderPhone">
                </div>
                <!-- End Input -->
              </div>

              <div class="input-fields__box">
                <!-- Input -->
                <div class="">
                  <label class="input-fields__label">
                    Эл. Почта
                  </label>
                  <input type="email" class="input-fields__control" name="emailAddress"
                         placeholder="johndoe@gmail.com" v-model="orderEmail">
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
                  <input type="radio" class="custom-control-input" id="Radio1" value="Самовывоз из магазина" v-model="orderDelivery">
                  <label class="custom-control-label" for="Radio1">
                    Самовывоз из магазина
                  </label>
                  <div class="check"></div>
                </div>
                <div class="custom-control">
                  <input type="radio" class="custom-control-input" id="Radio2" value="Новой Почтой" v-model="orderDelivery">
                  <label class="custom-control-label" for="Radio2">
                    Новой Почтой
                  </label>
                  <div class="check"></div>
<!--                  <div class="custom-control-text" v-if="checked === 'b'">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet, ut.</div>-->
                </div>
                <div class="custom-control">
                  <input type="radio" class="custom-control-input" id="Radio3" value="Адресная доставка" v-model="orderDelivery">
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
                  <textarea v-model="orderComment" class="form-control p-5" rows="4" name="text" placeholder="Примечания к вашему заказу, например особые примечания к доставке."></textarea>
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
                    <tr class="cart_item" v-for="product in cart" :key="product.id" >
                      <th class="cart_item--1">{{ product.name }}<strong class="product-quantity"> × {{ product.qty }}шт</strong></th>
                      <th class="cart_item--2">{{ product.price * getDollar * product.qty  | toFix | formattedPrice }}</th>
                    </tr>
                  </tbody>
                  <tfoot>
                  <tr>
                    <th class="table__footer"><strong>Сумма:</strong></th>
                    <td class="table__footer"><strong>{{ cartTotalCost | toFix | formattedPrice }}</strong></td>
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
                        <input type="radio" class="custom-control-input" id="Radio4" value="Наличными (Самовывоз / Курьером По Киеву)" v-model="orderPay">
                        <label class="custom-control-label form-label " for="Radio4">
                          Наличными (Самовывоз / Курьером По Киеву)
                        </label>
                        <div class="custom-control-text" v-if="orderPay === 'Наличными (Самовывоз / Курьером По Киеву)'">
                          Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.
                        </div>
                        <div class="check"></div>
                      </div>
                      <div class="custom-control-order">
                        <input type="radio" class="custom-control-input" id="Radio5" value="Картой На Сайте - (VISA / MasterCard)" v-model="orderPay">
                        <label class="custom-control-label form-label" for="Radio5">
                          Картой На Сайте - <span>(VISA / MasterCard)</span>
                        </label>
                        <div class="custom-control-text" v-if="orderPay === 'Картой На Сайте - (VISA / MasterCard)'">
                          Please send a check to Store Name, Store Street, Store Town, Store State / County, Store Postcode.
                        </div>
                        <div class="check"></div>
                      </div>
                      <div class="custom-control-order">
                        <input type="radio" class="custom-control-input" id="Radio6" value="Наложенный Платеж (Новая Почта)" v-model="orderPay">
                        <label class="custom-control-label form-label" for="Radio6">
                          Наложенный Платеж (Новая Почта)
                        </label>
                        <div class="custom-control-text" v-if="orderPay === 'Наложенный Платеж (Новая Почта)'">
                          Pay with cash upon delivery.
                        </div>
                        <div class="check"></div>
                      </div>
                      <div class="custom-control-order">
                        <input type="radio" class="custom-control-input" id="Radio7" value="Безналичный Расчет (ПДВ / ФОП)" v-model="orderPay">
                        <label class="custom-control-label form-label" for="Radio7">
                          Безналичный Расчет (ПДВ / ФОП)
                        </label>
                        <div class="custom-control-text" v-if="orderPay === 'Безналичный Расчет (ПДВ / ФОП)'">
                          Pay via PayPal; you can pay with your credit card if you don’t have a PayPal account.
                        </div>
                        <div class="check"></div>
                      </div>
                    </div>
                  <!-- End Basics Accordion -->
                </div>
                <button :submit="true" class="order-btn">
                  Оформить ЗАКАЗ
                </button>
              </div>
            <div id="liqpay_checkout"></div>
              <!-- End Order Summary -->
            </div>
        </div>
      </div>
    </form>
    <div v-else class="cart__main">
      <h1 class="">пусто</h1>
    </div>
<!--    <Novaposhta />-->
  </div>
</template>

<script>
import Vue from 'vue';
import toFix from "../filters/toFixed";
import formattedPrice from "../filters/priceFix";
import {mapGetters} from "vuex";
import axios, * as others from 'axios'
import Novaposhta from "../Novaposhta";

export default {
  name: "Checkout",
  components: {Novaposhta},
  head: {
    // script: [
    //   {
    //     src: '//static.liqpay.ua/libjs/checkout.js'
    //   }
    // ]
  },
  data() {
    return {
      orderName: '',
      orderSecondName: '',
      orderPhone: '',
      orderEmail: '',
      orderComment: '',
      orderDelivery: 'Самовывоз из магазина',
      orderPay: 'Наличными (Самовывоз / Курьером По Киеву)',
      errs: [],
      token: '721569016:AAGj-BkOM-ni_Pd-7tyRONMAs2jNVqLoRC8',
      chatId: '-354813176',
      product:[
        {
          name: ''
        }
      ]
    }
  },
  filters: {
    toFix,
    formattedPrice,
    // currency: num => `$${num / 100}`,
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
          result.push(product.price * product.qty * this.getDollar)
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
  methods: {
    formSubmit: function () {
      let name = this.orderName;
      let secondName = this.orderSecondName;
      let phone = this.orderPhone;
      let email = this.orderEmail;
      let comment = this.orderComment;
      let delivery = this.orderDelivery;
      let payMethod = this.orderPay;
      let total = this.cartTotalCost;
      let cart = [];
      for (let p of this.cart) {
        cart.push(p.name + ' ',
          '\n Код продукта: ' + p.code,
          '\n Количество: ' + p.qty + ' шт',
          '\n Цена: ' + Math.ceil(p.price * p.qty * this.getDollar).toFixed(0)  + ' грн' +
          '\n ------------------------\n ')
      }

      if(name.length > 0){
        this.removeError('name');
      } else {
        this.addError('name');
      }
      if(secondName.length > 0){
        this.removeError('secondName');
      } else {
        this.addError('secondName');
      }
      if(phone.length > 0){
        this.removeError('phone');
      } else {
        this.addError('phone');
      }

      if (this.checkErrors()) {
        let msg = 'Новый заказ от <b>' + name + ' ' + secondName + '!</b>\n';
        msg += 'Номер телефона: <b>' + phone + '.</b>\n';
        msg += 'Email: <b>' + email + '.</b>\n';
        msg += 'Способ доставки: <b>' + delivery + '.</b>\n';
        msg += 'Коментарий: <b>' + comment + '.</b>\n';
        msg += 'Способ оплаты: <b>' + payMethod + '.</b>\n';
        msg += 'Товары: <b>\n' + cart + '</b>\n';
        msg += 'Сумма: <b>' + Math.ceil(total).toFixed(0) + ' грн' + '.</b>\n';
        this.sendForm(msg);

      } else {
        let msg = "";
        Array.prototype.forEach.call(this.errs, function (err) {
          if (err === 'name') {
            msg += 'Поле имя не должно быть пустое' + '!<br>\n';
          }
          if (err === 'secondName') {
            msg += 'Поле фамилия не должно быть пустое' + '!<br>\n';
          }
          if (err === 'phone') {
            msg += 'Поле телефон не должно быть пустое' + '!<br>\n';
          }
        });
        this.showErrorAlert(msg);
      }
    },
    checkError(err){
      return this.errs.indexOf(err);
    },
    addError(err){
      if(this.checkError(err) === -1){
        this.errs.push(err);
      }
    },
    removeError(err){
      if(this.checkError(err) !== -1){
        this.errs.splice(this.checkError(err), 1);
      }
    },
    checkErrors(){
      return this.errs.length === 0;
    },
    showErrorAlert(msg){
      Vue.swal("Ошибка", msg, "error");
      console.log(msg);
    },
    showSuccessAlert(){
      Vue.swal("Успешно!", "Ваш заказ принят", "success",);
      this.orderName = '';
      this.orderSecondName = '';
      this.orderPhone = '';
      this.orderEmail = '';
      this.orderComment= '';
      this.$store.commit("clearCart");
      this.$router.push('/category')
    },
    sendForm(msg){
      let url = 'https://api.telegram.org/bot' + this.token + '/sendMessage?chat_id=' + this.chatId + '&text=' + encodeURI(msg) + '&parse_mode=html';
      let $this = this;

      axios.get(url).then((response) => {
        let ok = response.data.ok;
        if(ok){
          $this.showSuccessAlert();
        } else {
          $this.showErrorAlert('Случилась какая-то ошибка. Повторите еще раз.');
        }
      }).catch((error) => {
        console.log(error);
        $this.showErrorAlert('Случилась какая-то ошибка. Повторите еще раз.');
      });
    },
    },
  mounted() {

    // window.LiqPayCheckoutCallback = function() {
    //   LiqPayCheckout.init({
    //     data: "data",
    //     signature: "QvJD5u9Fg55PCx/Hdz6lzWtYwcI=",
    //     embedTo: "#liqpay_checkout",
    //     language: "ru",
    //     mode: "popup" // embed || popup
    //   }).on("liqpay.callback", function(data){
    //     console.log(data.status);
    //     console.log(data);
    //   }).on("liqpay.ready", function(data){
    //     // ready
    //   }).on("liqpay.close", function(data){
    //     // close
    //   });
    // };
  }
}
</script>

<style lang="sass" scoped>
.hidden
  display: none

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
      +size(6)
      +size-sm(12)
      margin-bottom: 2.5rem
      +sm(margin-bottom, 1rem)
      +sm(width, 100%)

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
