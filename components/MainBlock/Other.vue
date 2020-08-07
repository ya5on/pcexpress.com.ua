<template>
  <div class="other">
    <div class="other__item">
      <nuxt-link to="/" class="other__link">
        <div class="other__img">
          <img class="" src="../../assets/img/140X140/img1.png" alt="Image Description">
        </div>
        <div class="other__content">
          <div class="other__text">
            Нашли дешевле?<strong>СКИДКА</strong> до 5%
          </div>
          <div class="">
            <strong>Нашел</strong>
            <span class="other__icon">
                  <i class="ec ec-arrow-right-categproes"></i>
                </span>
          </div>
        </div>
      </nuxt-link>
    </div>
    <div class="other__item">
      <nuxt-link to="/" class="other__link">
        <div class="other__img">
          <img class="" src="../../assets/img/140X140/img1.png" alt="Image Description">
        </div>
        <div class="other__content">
          <div class="other__text">
            Расширяйте <strong>ГАРНТНИЮ</strong> до 3-х лет!
          </div>
          <div class="">
            <strong>Хочу</strong>
            <span class="other__icon">
                  <i class="ec ec-arrow-right-categproes"></i>
                </span>
          </div>
        </div>
      </nuxt-link>
    </div>
    <div class="other__item">
      <nuxt-link to="/" class="other__link">
        <div class="other__img">
          <img class="" src="../../assets/img/140X140/img1.png" alt="Image Description">
        </div>
        <div class="other__content">
          <div class="other__text">
            При заказе от 1500грн. <strong>БЕСПЛАТНАЯ </strong>доставка ВСЕМ!
          </div>
          <div class="">
            <strong>К заказам</strong>
            <span class="other__icon">
                  <i class="ec ec-arrow-right-categproes"></i>
                </span>
          </div>
        </div>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Other"
    }
</script>

<style lang="sass" scoped>
  .other
    display: flex
    flex-direction: column
    flex-wrap: nowrap
    justify-content: center
    align-content: stretch
    align-items: stretch
    height: 100%
    +lg(flex-direction, row)
    +sm(flex-direction, column)

    &__item
      order: 0
      flex: 1 1 auto
      align-self: auto
      background-color: #fff

    &__link
      border-top: 1px solid #e7eaf3
      overflow: hidden
      position: relative
      display: block
      color: #333e48
      z-index: 1

      &:hover .other__img
        transform: rotate(0)

    &__img
      position: absolute
      bottom: -30px
      right: -10px
      width: 110px
      height: auto
      transform: rotate(-16deg)
      transition: all .5s ease
      z-index: -1

    &__content
      /*min-height: 10.75rem*/
      padding: 2.5rem 1.5rem

    &__text
      letter-spacing: -.4px
      line-height: 1.438rem
      font-size: 1.12525rem
      font-weight: 300
      padding-bottom: 0.25rem
      margin-bottom: 0.5rem

    &__icon
      line-height: .7
      display: inline-block
      vertical-align: middle
      text-align: center
      width: 1.063rem
      height: 1.063rem
      font-size: 1rem
      color: #377dff
      background-color: #fed700
      border-radius: 50%
      transition: 0.3s
      margin-left: 0.25rem

    .ec
      color: #fff
</style>
