<template>
  <div class="container">
    <ul>
      <li v-for="category in ALL_CATS"
          :key="category.id">
        {{category.title}}
      </li>
    </ul>
  </div>
</template>

<script>
  import {mapActions, mapGetters} from 'vuex'

  export default {
    data() {
      return {}
    },
    computed: {
      ...mapGetters([
        'ALL_CATS',
        'SUB_CATS',
        'MAIN_CATS',
      ]),

    },
    methods: {
      ...mapActions([
        'GET_CATEGORIES_LIST'
      ]),
    },
    mounted() {
      this.GET_CATEGORIES_LIST()
    },
  }
</script>

<style lang="sass" scoped>

</style>
