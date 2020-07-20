<template>
  <div class="container">
    <div class="carousel">
      <div class="item">
          <img class="img-fluid" src="~/assets/img/200X60/img1.png" alt="Image Description">
      </div>
      <div class="item">
          <img class="img-fluid" src="~/assets/img/200X60/img2.png" alt="Image Description">
      </div>
      <div class="item">
          <img class="img-fluid" src="~/assets/img/200X60/img3.png" alt="Image Description">
      </div>
      <div class="item">
          <img class="img-fluid" src="~/assets/img/200X60/img4.png" alt="Image Description">
      </div>
      <div class="item">
          <img class="img-fluid" src="~/assets/img/200X60/img5.png" alt="Image Description">
      </div>
      <div class="item">
          <img class="img-fluid m-auto max-height-50" src="~/assets/img/200X60/img6.png" alt="Image Description">
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Brands"
  }
</script>

<style lang="sass" scoped>
  .carousel
    display: flex
    justify-content: space-between
    margin-bottom: 3.5rem
    border-top: 1px solid #E7EAF3
    border-bottom: 1px solid #E7EAF3
    padding: 8px 0

    .item
      height: 60px
      filter: opacity(60%)
      &:hover
        filter: opacity(100%)

    .img-fluid
      max-height: 60px







</style>
