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
      <li class="breadcrumb-item">Контакты</li>
    </ul>
    <!-- End breadcrumb -->
    <div class="title d-block">
      <h1 class="text-center">Контакты</h1>
    </div>
    <div class="contacts">
      <div class="contacts__content">
        <div class="contacts__title">
          <h3 class="section-title">Наш адрес</h3>
        </div>
        <address class="contacts__address">
          г. Киев, ул. Амвросия Бучмы 5, офис 201
          <div class="">(067) 604-34-68</div>
          <div class="">(066) 096-00-12</div>
          <div class="">Email: <a class="" href="mailto:nikolink.com@gmail.com">nikolink.post@gmail.com</a>
          </div>
        </address>
        <h5 class="">График работы </h5>
        <div class="">Понедельник - Пятница с 9:00 до 18:00</div>
        <div class="mb-6">Суббота - Воскресенье online и отправка товара</div>
        <h5 class="">Карьера</h5>
        <p class="mb-6">If you’re interested in employment opportunities at Electro, please email us: <br>
          <a class="text-decoration-on" href="mailto:nikolink.com@gmail.com">nikolink.com@gmail.com</a></p>

      </div>
      <div class="contacts__map">
        <div class="mb-6">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2541.494459879468!2d30.602668315730668!3d50.43188997947282!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4c5031dedf7df%3A0x17fef0a8066a6e5d!2zTmlrb0xpbmsgLSDQmtC-0LzQv9GM0Y7RgtC10YDRiyB8INCd0L7Rg9GC0LHRg9C60LggfCDQodC10YDQstC40YE!5e0!3m2!1sru!2spl!4v1583884851761!5m2!1sru!2spl"
            width="100%" height="288" frameborder="0" style="border:0;" allowfullscreen=""></iframe>
        </div>
        <div class="contacts__title">
          <h3 class="section-title">Сотрудничество / Вопросы / Предложения</h3>
        </div>
        <p class="mb-6">Aenean massa diam, viverra vitae luctus sed, gravida eget est. Etiam
          nec ipsum porttitor, consequat libero eu, dignissim eros. Nulla auctor lacinia enim id mollis. Curabitur
          luctus interdum eleifend. Ut tempor lorem a turpis fermentum.</p>
        <form class="form">
          <div class="form__items">
            <div class="form__item">
              <div class="mb-4">
                <label class="form-label">Имя<span class="text-danger">*</span></label>
                <input type="text" class="form-control" placeholder="" required="">
              </div>
            </div>
            <div class="form__item">
              <div class="mb-4">
                <label class="form-label">Телефон<span class="text-danger">*</span></label>
                <input type="text" class="form-control" name="lastName" placeholder="" aria-label="" required="">
              </div>
            </div>
          </div>
          <div class="textarea">
            <div class="mb-4">
              <label class="form-label">Текст сообщения</label>
              <div class="input-group">
                <textarea class="form-control p-5" rows="4" name="text" placeholder=""></textarea>
              </div>
            </div>
          </div>
          <div class="mb-3">
            <button type="submit" class="btn">Отправить сообщение</button>
          </div>
        </form>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    name: "index"
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

  .contacts
    +row-flex
    flex-wrap: nowrap
    justify-content: space-between
    margin-bottom: 45px
    +md(flex-wrap, wrap)

    &__content
      +col
      +size(6)
      +size-md(12)
      margin-right: 2.5rem
      +md(margin-right, 0)

    &__map
      +col
      +size(6)
      +size-md(12)

    &__title
      margin-bottom: 2rem
      border-bottom: 1px solid #e7eaf3

      .section-title
        position: relative
        font-size: 1.56275rem
        padding-bottom: 0.5rem
        margin-bottom: 0

        &:after
          content: ' '
          height: 2px
          width: 114px
          display: block
          background-color: #fed700
          position: absolute
          bottom: -1px
          left: 0

    &__address
      line-height: 1.438rem
      margin-bottom: 2.5rem

    h5
      font-size: 0.875rem
      font-weight: 700
      margin-bottom: 1rem

    .mb-6
      margin-bottom: 2.5rem

    .text-decoration-on
      color: #0062bd
      text-decoration: underline

  .form
    &__items
      +row-flex

    &__item
      +col
      +size(6)

      .mb-4
        display: flex
        flex-direction: column
        margin-bottom: 1.5rem

    .form-label
      margin-bottom: 0.5rem
      display: block
      text-transform: capitalize
      font-size: 0.875rem
      font-weight: 700

    .form-control
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
        border-color: #7F828B

    .text-danger
      color: #de4437

    .textarea
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
        height: 180px
        position: relative
        flex: 1 1 auto
        width: 1%

    .mb-3
      margin-bottom: 1rem

      .btn
        cursor: pointer
        color: #333e48
        background-color: #fed700
        display: inline-block
        font-weight: 700
        text-align: center
        user-select: none
        border: 1px solid transparent
        padding: 0.8rem 2rem
        font-size: 0.875rem
        line-height: 1.5
        border-radius: 1.4rem
        transition: all 0.2s ease-in-out

</style>
