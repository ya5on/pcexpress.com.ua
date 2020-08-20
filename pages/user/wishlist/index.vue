<template>
  <div class="container">
    <Wishlist />
  </div>
</template>

<script>

import Wishlist from "../../../components/Wishlist/Wishlist";
export default {
	name: 'user-wishlist',

	data () {
    return {
      pageTitle: 'Your Wishlist',
      noProductLabel: 'Your wishlist is empty'
    }
  },
  components: {Wishlist},
  computed: {

  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>

</style>


