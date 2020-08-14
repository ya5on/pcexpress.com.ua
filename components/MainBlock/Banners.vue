<template>
  <ul class="list-group">
    <li class="list-group-item">
      <nuxt-link to="/category/24" class="list-group-link">
        <img class="img-fluid" src="../../assets/img/main-block-pics/intel.jpg" alt="Image Description">
        <h6 class="">Процессоры</h6>
      </nuxt-link>
    </li>
    <li class="list-group-item">
      <nuxt-link to="/category/13" class="list-group-link">
        <img class="img-fluid" src="../../assets/img/main-block-pics/hdd.jpg" alt="Image Description">
        <h6 class="">Жесткие диски (HDD)</h6>
      </nuxt-link>
    </li>
    <li class="list-group-item">
      <nuxt-link to="/category/27" class="list-group-link">
        <img class="img-fluid" src="../../assets/img/main-block-pics/ozu.jpg" alt="Image Description">
        <h6 class="">Оперативная память</h6>
      </nuxt-link>
    </li>
    <li class="list-group-item">
      <nuxt-link to="/category/599" class="list-group-link">
        <img class="img-fluid" src="../../assets/img/main-block-pics/motherboard.jpg" alt="Image Description">
        <h6 class="">Материнские платы</h6>
      </nuxt-link>
    </li>
    <li class="list-group-item">
      <nuxt-link to="/category/14" class="list-group-link">
        <img class="img-fluid" src="../../assets/img/main-block-pics/acc.jpg" alt="Image Description">
        <h6 class="">Комплектующие для ПК</h6>
      </nuxt-link>
    </li>
  </ul>
</template>

<script>
    export default {
        name: "Banners"
    }
</script>

<style lang="sass" scoped>
  .list-group
    display: flex
    +sm(overflow, auto)

  .list-group-item
    flex-shrink: 1
    padding: 8px 20px
    background-color: #fff
    font-size: 0.875rem
    border-right: 1px solid #e7eaf3
    transition: all .3s ease

    &:first-of-type
      border-left: 1px solid #e7eaf3

    &:hover
      transition: all .3s ease
      box-shadow: 0 0 10px rgba(75,54,124,.5)
      z-index: 9999

  .list-group-link
    display: flex
    flex-direction: column
    align-items: center
    text-align: center
    padding: .5rem 0

    img
      margin-bottom: 0.25rem
      max-height: 124.5px
      max-width: 124.5px
      +sm(max-width, 100px)

    h6
      color: #333e48
      font-size: 0.875rem
      font-weight: 600
      margin-bottom: 0

</style>
