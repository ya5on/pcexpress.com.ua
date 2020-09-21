<template>
  <form class="search">
    <button class="btn" type="button">
      <i class="fa fa-search"></i>
    </button>
  </form>
</template>

<script>

import {mapActions, mapGetters} from "vuex";

export default {
  name: "MobileSearch",
  data() {
    return {
      searchValue: '',
    }
  },
  computed: {
    ...mapGetters([
      'SEARCH_VALUE'
    ])
  },
  methods: {
    ...mapActions([
      'GET_SEARCH_VALUE'
    ]),
    search(value) {
      this.GET_SEARCH_VALUE(value);
      this.$router.push('/search')
    }
  },
}
</script>

<style scoped>

</style>
