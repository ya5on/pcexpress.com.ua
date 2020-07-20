<template>
  <ul class="list-group">
    <li class="list-group-item">
      <nuxt-link to="/" class="list-group-link">
        <img class="img-fluid" src="../../../assets/img/300X300/img6.jpg" alt="Image Description">
        <h6 class="">Accessories</h6>
      </nuxt-link>
    </li>
    <li class="list-group-item">
      <nuxt-link to="/" class="list-group-link">
        <img class="img-fluid" src="../../../assets/img/300X300/img6.jpg" alt="Image Description">
        <h6 class="">Laptop Speakers</h6>
      </nuxt-link>
    </li>
    <li class="list-group-item">
      <nuxt-link to="/" class="list-group-link">
        <img class="img-fluid" src="../../../assets/img/300X300/img6.jpg" alt="Image Description">
        <h6 class="">All in One</h6>
      </nuxt-link>
    </li>
    <li class="list-group-item">
      <nuxt-link to="/" class="list-group-link">
        <img class="img-fluid" src="../../../assets/img/300X300/img6.jpg" alt="Image Description">
        <h6 class="">Audio Speakers</h6>
      </nuxt-link>
    </li>
    <li class="list-group-item">
      <nuxt-link to="/" class="list-group-link">
        <img class="img-fluid" src="../../../assets/img/300X300/img6.jpg" alt="Image Description">
        <h6 class="">Camera</h6>
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
    transition: all .2s ease

    &:first-of-type
      border-left: 1px solid #e7eaf3

    &:hover
      transition: all .2s ease
      transform: scale(1.01)
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
      +sm(max-width, 100px)

    h6
      color: #333e48
      font-size: 0.875rem
      font-weight: 600
      margin-bottom: 0

</style>
