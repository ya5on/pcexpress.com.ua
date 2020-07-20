<template>
  <div class="container">
    <div class="deals">
      <div class="deals__timer">
        <div class="d-flex">
          <h3 class="deals__title">Deals of The Day</h3>
          <div class="countdown">
            <Timer deadline="12/26/2022"/> <!--  таймер: месяц число год-->
          </div>
        </div>
        <nuxt-link to="/">
          Go to Daily Deals Section
          <i class="ec ec-arrow-right-categproes"></i>
        </nuxt-link>
      </div>
      <div class="deals__list">
        <div class="product-item">
          <div class="product-item__inner">
            <div class="product-item__body">
              <div class="text">
                <a href="../shop/product-categories-7-column-full-width.html" class="text__cat">Speakers</a></div>
              <h5 class="product-item__title">
                <a href="../shop/single-product-fullwidth.html"
                >Wireless Audio System
                  Multiroom 360 degree Full base audio</a></h5>
              <div class="text">
                <a href="../shop/single-product-fullwidth.html" class="d-block">
                  <img class="img-fluid" src="~/assets/img/212X200/img2.jpg" alt="Image Description"></a>
              </div>
              <div class="product-get">
                <div class="prodcut-price">
                  $685,00
                </div>
                <div class="prodcut-add-cart">
                  <a href="../shop/single-product-fullwidth.html" class="btn-add">
                    <i class="ec ec-add-to-cart"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="product-item__footer">
            <div class="border-top">
              <a href="../shop/compare.html" class="font-size-13">
                <i class="ec ec-compare mr-1 font-size-15"></i> Compare</a>
              <a href="../shop/wishlist.html" class="font-size-13">
                <i class="ec ec-favorites mr-1 font-size-15"></i> Wishlist</a>
            </div>
          </div>
        </div>
        <div class="product-item">
          <div class="product-item__inner">
            <div class="product-item__body">
              <div class="text">
                <a href="../shop/product-categories-7-column-full-width.html" class="text__cat">Speakers</a></div>
              <h5 class="product-item__title">
                <a href="../shop/single-product-fullwidth.html"
                >Wireless Audio System
                  Multiroom 360 degree Full base audio</a></h5>
              <div class="text">
                <a href="../shop/single-product-fullwidth.html" class="d-block">
                  <img class="img-fluid" src="~/assets/img/212X200/img2.jpg" alt="Image Description"></a>
              </div>
              <div class="product-get">
                <div class="prodcut-price">
                  $685,00
                </div>
                <div class="prodcut-add-cart">
                  <a href="../shop/single-product-fullwidth.html" class="btn-add">
                    <i class="ec ec-add-to-cart"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="product-item__footer">
            <div class="border-top">
              <a href="../shop/compare.html" class="font-size-13">
                <i class="ec ec-compare mr-1 font-size-15"></i> Compare</a>
              <a href="../shop/wishlist.html" class="font-size-13">
                <i class="ec ec-favorites mr-1 font-size-15"></i> Wishlist</a>
            </div>
          </div>
        </div>
        <div class="product-item">
          <div class="product-item__inner">
            <div class="product-item__body">
              <div class="text">
                <a href="../shop/product-categories-7-column-full-width.html" class="text__cat">Speakers</a></div>
              <h5 class="product-item__title">
                <a href="../shop/single-product-fullwidth.html"
                >Wireless Audio System
                  Multiroom 360 degree Full base audio</a></h5>
              <div class="text">
                <a href="../shop/single-product-fullwidth.html" class="d-block">
                  <img class="img-fluid" src="~/assets/img/212X200/img2.jpg" alt="Image Description"></a>
              </div>
              <div class="product-get">
                <div class="prodcut-price">
                  $685,00
                </div>
                <div class="prodcut-add-cart">
                  <a href="../shop/single-product-fullwidth.html" class="btn-add">
                    <i class="ec ec-add-to-cart"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="product-item__footer">
            <div class="border-top">
              <a href="../shop/compare.html" class="font-size-13">
                <i class="ec ec-compare mr-1 font-size-15"></i> Compare</a>
              <a href="../shop/wishlist.html" class="font-size-13">
                <i class="ec ec-favorites mr-1 font-size-15"></i> Wishlist</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Timer from "./Timer";

  export default {
    name: "DealsOfDay",
    components: {Timer},
    data() {
      return {
        swiperOption: {
          autoplay: 1000,
          loop: true,
          pagination: '.swiper-pagination',
          slidesPerView: 1,
          paginationClickable: true,
          spaceBetween: 30,
        }
      }
    },
  }
</script>

<style lang="sass">
  .deals
    margin-top: 40px
    margin-bottom: 1rem

    &__timer
      display: flex
      justify-content: space-between
      align-content: center
      border-bottom: 1px solid #dddddd
      +sm(flex-direction, column)

      .d-flex
        align-items: baseline
        +sm(flex-direction, column)

    &__title
      font-size: 22px
      position: relative
      padding-bottom: 0.5rem
      margin-right: 2rem
      +sm(margin-bottom, 5px)

      &:after
        content: ' '
        height: 2px
        width: 100%
        display: block
        background-color: #fed700
        position: absolute
        bottom: -1px
        left: 0

    &__list
      padding-top: 2rem
      display: flex
      +md(overflow-x, auto)

    .product-item
      max-width: 200px
      transition: all .2s ease

      &:hover
        transition: all .2s ease
        transform: scale(1.01)
        box-shadow: 0 0 10px rgba(75, 54, 124, .5)

        .product-item__footer
          opacity: 1

      &__inner
        border-right: 1px solid #e7eaf3

      &__body
        padding: 16px 24px

      .text
        margin-bottom: 10px

        &__cat
          font-size: 0.74987rem

      &__title
        font-size: 0.875rem
        line-height: 1.125rem
        margin-bottom: 10px
        display: -webkit-box
        -webkit-line-clamp: 2
        -webkit-box-orient: vertical
        overflow: hidden

        a
          color: #0062bd
          font-weight: 700

    .product-get
      display: flex
      align-items: baseline
      justify-content: space-between

    .prodcut-price
      font-size: 1.25038rem
      +md(font-size, 1rem)

    .btn-add
      width: 2.188rem
      height: 2.188rem
      background-color: #e6e6e6
      color: #fff
      display: flex
      align-items: center
      justify-content: center
      border-radius: 6.1875rem
      transition: all 0.2s ease-in-out
      +sm(width, 1.6rem)
      +sm(height, 1.6rem)

      &:hover
        background-color: #fed700
        transform: translateY(-2px)
        transition: all 0.2s ease-in-out

      i
        font-size: 1.25rem
        color: #fff
        +sm(font-size, 1rem)

    .product-item__footer
      margin-top: 5px
      padding-left: 24px
      padding-right: 24px
      padding-bottom: 8px
      opacity: 0
      transition: all 0.4s ease-in-out

      .border-top
        border-top: 1px solid #e7eaf3
        padding-top: .5rem
        display: flex
        align-items: center
        justify-content: space-between
        font-size: 13px

        i
          font-size: 0.8rem

    .ec
      color: #333e48


</style>
