<template>
  <div class="container">
    <h1>CATEGORIES</h1>
    <ul class="menu-list">
      <li class="menu-item"
          v-for="category in MAIN_CATS"
          :key="category.id">
        <nuxt-link :to="`/category/${category.id}`" class="menu-button">{{ category.title}},{{ category.count }}</nuxt-link>
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
        'MAIN_CATS',
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
