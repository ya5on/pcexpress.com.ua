<template>
  <client-only>
    <BackToTop bottom="50px" right="50px" visibleoffset="600">
      <span class="btn-to-top" style="display: inline-block; position: fixed; bottom: 15px; right: 15px;">
        <span class="fa fa-arrow-up u-go-to__inner"></span>
      </span>
    </BackToTop>
  </client-only>
</template>

<script>
export default {
  name: "ToTopBtn"
}
</script>

<style lang="sass" scoped>
.btn-to-top
  position: relative
  z-index: 100
  width: 2.5rem
  height: 2.5rem
  background-color: #fed700
  color: #000
  font-size: 0.75rem
  border-radius: 0.3125rem
  opacity: 0.5
  transition: 0.3s ease-out
  +md(display, none!important)

  &:hover
    opacity: 1

  .u-go-to__inner
    position: absolute
    top: 50%
    left: 50%
    transform: translate(-50%, -50%)


</style>
