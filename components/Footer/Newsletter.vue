<template>
  <!-- Footer-newsletter -->
  <div class="newsletter">
    <div class="container">
      <div class="newsletter__items">
        <div class="newsletter__item">
          <div class="newsletter__text">
            <i class="ec ec-newsletter"></i>
            <h2>Подписывайся на нашу рассылку!</h2>
          </div>
        </div>
        <div class="newsletter__item form">
          <!-- Subscribe Form -->
          <form class="sub-form">
            <label class="sr-only" for="subscribeSrEmail">Ваш Email</label>
            <div class="input-group">
              <input type="email" class="form-control" name="email" id="subscribeSrEmail" placeholder="Впишите Ваш Email" required>
              <div class="input-group-append">
                <button type="submit" class="btn" id="subscribeButton">Подпишись</button>
              </div>
            </div>
          </form>
          <!-- End Subscribe Form -->
        </div>
      </div>
    </div>
  </div>
  <!-- End Footer-newsletter -->
</template>

<script>
  export default {
    name: "Newsletter"
  }
</script>

<style lang="sass" scoped>
  .newsletter
    background-color: #fed700
    padding-top: 1rem
    padding-bottom: 1rem

    &__items
      +row-flex
      justify-content: space-between

    &__item
      +col
      +size(6)
      +size-md(12)

    &__text
      display: flex
      align-items: center
      +md(justify-content, center)
      +md(margin-bottom, 15px)

    .ec
      font-size: 40px
      color: #333e48

    h2
      font-size: 20px
      margin-left: 1rem

    .form
      display: flex
      justify-content: flex-end
      align-items: center
      +md(justify-content, center)

  .sub-form
    width: 80%
    +md(width, 100%)

  .input-group
    display: flex
    position: relative
    align-items: stretch
    width: 100%

  .sr-only
    position: absolute
    width: 1px
    height: 1px
    padding: 0
    overflow: hidden
    clip: rect(0, 0, 0, 0)
    white-space: nowrap
    border: 0

  .form-control
    display: block
    width: 100%
    height: 40px
    padding: 1rem
    font-size: 0.875rem
    font-weight: 400
    line-height: 1.5
    color: #818181
    background-color: #fff
    background-clip: padding-box
    border: 1px solid #dddddd
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out
    border-top-left-radius: 6.1875rem
    border-bottom-left-radius: 6.1875rem
    outline: none

  .input-group-append
    margin-left: -1px
    min-width: 8.4375rem


    .btn
      border-top-right-radius: 6.1875rem
      border-bottom-right-radius: 6.1875rem
      display: block
      height: 40px
      font-weight: 700
      text-align: center
      user-select: none
      border: 1px solid transparent
      padding-left: 20px
      padding-right: 20px
      font-size: 0.875rem
      line-height: 1.5
      transition: all 0.2s ease-in-out
      color: #fff
      background-color: #333e48
      cursor: pointer



</style>
