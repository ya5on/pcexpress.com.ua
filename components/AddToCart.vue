<template>
  <div class="add-to-cart">

    <button class="btn-add" @click="addToCart"> Add to Cart </button>

  </div>
</template>

<script>
export default {
  name: "add-to-cart",
  props: {},
  data(){
    return {}
  },
  computed: {
    isProductAdded () {
      return this.products.find(p => p.id === this.product.id)
    }
  },
  methods:{
    addToCart(){
      this.$store.commit('addToCart', this.item)
    }
  }
};
</script>

<style scoped lang="sass">
</style>
