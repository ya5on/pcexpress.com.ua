<template>
  <div class="container">
    <!-- Full banner -->
    <nuxt-link to="/" class="d-block">
      <div class="banner-bg">
        <div class="d-flex">
          <h1>SHOP AND <strong>SAVE BIG</strong> ON HOTTEST TABLETS</h1>
          <div class="price-box">
            <em>STARTING AT</em>
            <div class="price">$79</div>
          </div>
        </div>
      </div>
    </nuxt-link>
    <!-- End Full banner -->
  </div>
</template>

<script>
  export default {
    name: "Banner_1"
  }
</script>

<style lang="sass" scoped>
  .banner-bg
    background: url(../../assets/img/1400X206/img1.jpg) no-repeat center
    background-size: cover
    padding: 46px 46px 20px
    margin-bottom: 2.5rem

    .d-flex
      align-items: center

    h1
      line-height: 2.375rem
      font-size: 2.00025rem
      +sm(font-size, 1.8rem)
      +sm(line-height, 1.8rem)

    .price-box
      padding: 0.5rem 2rem
      border-radius: 0.4375rem
      background-color: #fed700
      text-align: left
      margin-left: 2rem
      +sm(margin-left, 0)
      +sm(padding, 0.5rem 1rem)

      em
        font-size: 0.875rem
        font-style: italic

      .price
        line-height: 1
        font-size: 1.87512rem
        font-weight: 700


</style>
