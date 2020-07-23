<template>
    <div class="container">
      <div >
        <ul class="menu-list">
          <li class="menu-item"
              v-for="category in SUB_CATS"
              :key="category.id">
            <nuxt-link :to="`/categories/${(category.id)}`" class="menu-button">{{ category.title}},{{ category.count }}</nuxt-link>
          </li>
        </ul>
      </div>
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
        'MAIN_CATS',
        'SUB_CATS',
        'ALL_CATS'
      ])
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

<style scoped>

</style>
