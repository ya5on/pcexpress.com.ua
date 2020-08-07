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
      <li class="breadcrumb-item">Отследить заказ НП</li>
    </ul>
    <!-- End breadcrumb -->
    <div class="track">
      <div class="track__item">
        <h1 class="">Track your Order</h1>
        <p class="text-grey">To track your order please enter your Order ID in the box below and press the "Track"
          button. This was given to you on your receipt and in the confirmation email you should have received.</p>
      </div>
      <div id="np-tracking" class="np-w-br-0">
        <div id="np-first-state">
          <div id="np-tracking-logo"></div>
          <div id="np-title">
            <div class="np-h1"><span class="np-h1-span1">ОТСЛЕЖИВАНИЕ</span> <br> <span
              class="np-h1-span2">ПОСЫЛОК</span></div>
          </div>
          <div id="np-input-container">
            <div id="np-clear-input"></div>
            <input id="np-user-input" type="text" name="number" placeholder="Номер посылки"></div>
          <div id="np-warning-message"></div>
          <button id="np-submit-tracking" type="button" disabled=""
                  style="background-color: rgb(209, 213, 218); border: 1px solid rgb(196, 196, 196);"><span
            id="np-text-button-tracking">ОТСЛЕДИТЬ</span>
            <div id="np-load-image-tracking"></div>
          </button>
          <div id="np-error-status"></div>
        </div>
        <div id="np-second-state">
          <div id="np-status-icon"></div>
          <div id="np-status-message"></div>
          <div class="np-track-mini-logo">
            <div class="np-line-right"></div>
            <div class="np-line-left"></div>
          </div>
          <a href="#" id="np-more">Подробнее на сайте</a>
          <div id="np-return-button"><span id="np-return-button-span">Другая посылка</span></div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    name: "index",
    mounted() {

    }
  }
</script>

<style lang="sass" scoped>
  #np-tracking
    margin: 0 auto 1.5rem
    width: 340px
    box-shadow: 0 0 10px rgba(75, 54, 124, .3)
    border-radius: 15px
    +xs(width, 100%)

  .track
    &__item
      text-align: center
      margin: 0 auto 2.5rem
      max-width: 75%
      +md(max-width, 100%)


      h1
        margin-bottom: 2.5rem
        font-weight: 400
        font-size: 2.5rem


</style>
