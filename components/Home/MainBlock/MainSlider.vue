<template>
  <div class="swiper">
    <div class="slide-item">
      <div class="slide-text">
        <h1>THE NEW <br> STANDARD</h1>
        <h6>UNDER FAVORABLE SMARTWATCHES</h6>
        <div>
          <span>FROM</span>
          <div class="price">$749</div>
        </div>
      </div>
      <div class="slide-img">
        <img src="../../../assets/img/400X400/img1.png" alt="Image Description">
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    name: "MainSlider",
    components: {},
    data() {
      return {
        swiperOptions: {
          slidesPerView: 1,
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          },
        }
      }
    },
    computed: {},
  }
</script>

<style lang="sass" scoped>
  .swiper
    width: 100%

    .swiper-pagination-bullet
      width: 20px
      height: 20px
      text-align: center
      line-height: 20px
      font-size: 12px
      color: #000
      opacity: 1
      background: rgba(0, 0, 0, 0.2)


    .swiper-pagination-bullet-active
      color: #fff
      background: #007aff

    .slide-item
      background: #EEF7F9
      padding: 24px 64px
      display: flex
      justify-content: space-between
      +sm(padding, 0)

    .slide-img
      +sm(padding, 20px 0)

      img
        max-width: 270px
        +sm(max-width, 160px)

    .slide-text
      display: flex
      flex-direction: column
      align-items: flex-start
      justify-content: center

      h1
        margin-bottom: .5rem
        line-height: 3.56212rem
        font-size: 50px
        font-weight: 300
        +sm(line-height, 1.75rem)
        +sm(font-size, 1.5rem)


      h6
        font-weight: 700
        font-size: 0.938rem
        margin-bottom: 1rem
        +sm(font-size, 0.75rem)
        +sm(margin-bottom, .5rem)

      .price
        font-size: 3.12462rem
        line-height: 2.80875rem
        font-weight: 700
        +sm(font-size, 2rem)


</style>
