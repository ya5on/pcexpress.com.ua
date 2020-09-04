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
                <div class="p-3">
                  <div class="custom-control">
                    <input type="radio" class="custom-control-input" id="Radio1" name="stylishRadio1" checked="">
                    <label class="custom-control-label form-label" for="Radio1">
                      Самовывоз из магазина
                    </label>
                  </div>
                </div>
                <div class="p-3">
                  <div class="custom-control">
                    <input type="radio" class="custom-control-input" id="Radio2" name="stylishRadio1">
                    <label class="custom-control-label form-label" for="Radio2">
                      Новой Почтой
                    </label>
                  </div>
                </div>
                <div class="p-3">
                  <div class="custom-control">
                    <input type="radio" class="custom-control-input" id="Radio3" name="stylishRadio1">
                    <label class="custom-control-label form-label" for="Radio3">
                      Адресная доставка
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <!-- End Input -->
            <!-- End Title -->
            <div class="js-form-message mb-6">
              <label class="form-label">
                Коментарий:
                <div class="input-group">
                  <textarea class="form-control p-5" rows="4" name="text"
                            placeholder="Notes about your order, e.g. special notes for delivery."></textarea>
                </div>
              </label></div>
          </div>
        </div>
        <div class="order__checkout--table">
          <div class="">
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
                  <tr>
                    <th class="product-name">Наименование</th>
                    <th class="product-total">Цена</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr class="cart_item">
                    <td>Ultra Wireless S50 Headphones S50 with Bluetooth&nbsp;<strong class="product-quantity">×
                      1</strong></td>
                    <td>$1,100.00</td>
                  </tr>
                  <tr class="cart_item">
                    <td>Widescreen NX Mini F1 SMART NX&nbsp;<strong class="product-quantity">× 1</strong></td>
                    <td>$685.00</td>
                  </tr>
                  </tbody>
                  <tfoot>
                  <tr>
                    <th>Сумма</th>
                    <td><strong>$2,085.00</strong></td>
                  </tr>
                  </tfoot>
                </table>
                <!-- End Product Content -->

                <div class="border-top border-width-3 border-color-1 pt-3 mb-3">
                  <!-- Basics Accordion -->
                  <div id="basicsAccordion1">
                    <!-- Card -->
                    <div class="border-bottom border-color-1 border-dotted-bottom">
                      <div class="p-3" id="basicsHeadingOne">
                        <div class="custom-control custom-radio">
                          <input type="radio" class="custom-control-input" id="stylishRadio1" name="stylishRadio"
                                 checked="">
                          <label class="custom-control-label form-label" for="stylishRadio1" data-toggle="collapse"
                                 data-target="#basicsCollapseOnee" aria-expanded="true"
                                 aria-controls="basicsCollapseOnee">
                            Наличными (Самовывоз / Курьером по Киеву)
                          </label>
                        </div>
                      </div>
                      <div id="basicsCollapseOnee"
                           class="collapse show border-top border-color-1 border-dotted-top bg-dark-lighter"
                           aria-labelledby="basicsHeadingOne" data-parent="#basicsAccordion1">
                        <div class="p-4">
                          Make your payment directly into our bank account. Please use your Order ID as the payment
                          reference. Your order will not be shipped until the funds have cleared in our account.
                        </div>
                      </div>
                    </div>
                    <!-- End Card -->

                    <!-- Card -->
                    <div class="border-bottom border-color-1 border-dotted-bottom">
                      <div class="p-3" id="basicsHeadingTwo">
                        <div class="custom-control custom-radio">
                          <input type="radio" class="custom-control-input" id="secondStylishRadio1" name="stylishRadio">
                          <label class="custom-control-label form-label" for="secondStylishRadio1"
                                 data-toggle="collapse" data-target="#basicsCollapseTwo" aria-expanded="false"
                                 aria-controls="basicsCollapseTwo">
                            Картой на сайте <a href="#" class="text-blue">- (VISA / MasterCard)</a>
                          </label>
                        </div>
                      </div>
                      <div id="basicsCollapseTwo"
                           class="collapse border-top border-color-1 border-dotted-top bg-dark-lighter"
                           aria-labelledby="basicsHeadingTwo" data-parent="#basicsAccordion1">
                        <div class="p-4">
                          Please send a check to Store Name, Store Street, Store Town, Store State / County, Store
                          Postcode.
                        </div>
                      </div>
                    </div>
                    <!-- End Card -->

                    <!-- Card -->
                    <div class="border-bottom border-color-1 border-dotted-bottom">
                      <div class="p-3" id="basicsHeadingThree">
                        <div class="custom-control custom-radio">
                          <input type="radio" class="custom-control-input" id="thirdstylishRadio1" name="stylishRadio">
                          <label class="custom-control-label form-label" for="thirdstylishRadio1" data-toggle="collapse"
                                 data-target="#basicsCollapseThree" aria-expanded="false"
                                 aria-controls="basicsCollapseThree">
                            Наложенный платеж (Новая Почта)
                          </label>
                        </div>
                      </div>
                      <div id="basicsCollapseThree"
                           class="collapse border-top border-color-1 border-dotted-top bg-dark-lighter"
                           aria-labelledby="basicsHeadingThree" data-parent="#basicsAccordion1">
                        <div class="p-4">
                          Pay with cash upon delivery.
                        </div>
                      </div>
                    </div>
                    <!-- End Card -->

                    <!-- Card -->
                    <div class="border-bottom border-color-1 border-dotted-bottom">
                      <div class="p-3" id="basicsHeadingFour">
                        <div class="custom-control custom-radio">
                          <input type="radio" class="custom-control-input" id="FourstylishRadio1" name="stylishRadio">
                          <label class="custom-control-label form-label" for="FourstylishRadio1" data-toggle="collapse"
                                 data-target="#basicsCollapseFour" aria-expanded="false"
                                 aria-controls="basicsCollapseFour">
                            Безналичный расчет (ПДВ / ФОП)
                          </label>
                        </div>
                      </div>
                      <div id="basicsCollapseFour"
                           class="collapse border-top border-color-1 border-dotted-top bg-dark-lighter"
                           aria-labelledby="basicsHeadingFour" data-parent="#basicsAccordion1">
                        <div class="p-4">
                          Pay via PayPal; you can pay with your credit card if you don’t have a PayPal account.
                        </div>
                      </div>
                    </div>
                    <!-- End Card -->
                  </div>
                  <!-- End Basics Accordion -->
                </div>

                <button type="submit" class="btn btn-primary-dark-w btn-block btn-pill font-size-20 mb-3 py-3">Оформить
                  ЗАКАЗ
                </button>
              </div>
              <!-- End Order Summary -->
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>

export default {
  name: "Checkout",
  data() {
    return {}
  },
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

  &__checkout--table
    +col
    +size(5)

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


</style>
