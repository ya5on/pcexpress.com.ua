<template>
  <form class="search">
    <input type="text" class="searchTerm" placeholder="Поиск" v-model="searchValue">
    <button class="searchButton" @click.prevent="search(searchValue)">
      <i class="fa fa-search"></i>
    </button>
  </form>
</template>

<script>

import {mapActions, mapGetters} from "vuex";

export default {
  name: "Search",
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

<style lang="sass" scoped>
.search
  width: 100%
  position: relative
  display: flex

  .searchTerm
    width: 100%
    border: 3px solid #fed700
    border-right: none
    padding: 5px 5px 5px 2rem
    border-radius: 20px 0 0 20px
    outline: none
    color: #333e48
    font-size: 1rem

  .searchTerm:focus
    color: #333e48

  .searchButton
    width: 55px
    height: 40px
    border: 1px solid #fed700
    background: #fed700
    text-align: center
    color: #fff
    border-radius: 0 20px 20px 0
    cursor: pointer
    font-size: 22px
</style>
