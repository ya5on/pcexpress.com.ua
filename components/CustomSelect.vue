<template>
  <div class="select">
    <div class="title" @click="optionsVisible = !optionsVisible">
      <p class="">
        Сортировка
      </p>
      <i class="ec ec-arrow-down-search"></i>
    </div>
    <div class="options" v-if="optionsVisible">
      <p @click="sortByPriceLow">От дешевых к дорогим</p>
      <p @click="sortByPriceHigh">От дорогих к дешевым</p>
    </div>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "CustomSelect",
  props: {
    options: {
      type: Array,
      default(){
        return []
      }
    }
  },
  data(){
    return {
      optionsVisible: false
    }
  },
  computed: {
    ...mapGetters([
      'PRODUCTS',
    ]),
  },
  methods: {
    sortByPriceLow(){
      this.PRODUCTS.sort((a,b) => a.price - b.price)
      this.optionsVisible = false
    },
    sortByPriceHigh(){
      this.PRODUCTS.sort((a,b) => b.price - a.price)
      this.optionsVisible = false
    },
    hideSelect(){
      this.optionsVisible = false
    }
  },
  mounted() {
    document.addEventListener("click", this.hideSelect.bind(this), true)
  },
  beforeDestroy() {
    document.removeEventListener("click", this.hideSelect)
  }
}
</script>

<style lang="sass" scoped>

.select
  position: relative
  width: 200px
  p
    margin: 0

.title
  display: flex
  align-items: center
  justify-content: space-between
  border: 1px solid #aeaeae
  padding-left: 3px
  cursor: pointer

  .ec
    color: #333e48

.options
  position: absolute
  top: 22px
  right: 0
  width: 100%
  border: 1px solid #aeaeae
  background-color: #fff

  p
    padding: 3px
    cursor: pointer

    &:hover
      background: #1869E5
      color: #dadce0









</style>
