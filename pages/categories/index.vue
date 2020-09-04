<template>
  <div class="container">
    <h1>Категории: {{total}}шт.</h1>
    <ul class="menu-list">
      <li class="menu-item" v-for="category in ALL_CATS" :key="category.id" v-if="category.title">
        <nuxt-link :to="`/category/${category.id}`" class="menu-button">
          {{ category.title }}
          <span v-if="category.count">
            - товаров: {{ category.count }}
          </span>
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  data() {
    return {
      posts: [],
    }
  },
  computed: {
    ...mapGetters([
      'ALL_CATS',
    ]),
      total() {
        return this.ALL_CATS.length
      }

  },
  methods: {
    loadPosts() {
      this.$axios.get('https://jsonplaceholder.typicode.com/comments')
        .then(res => {
          this.posts = res.data
        })
    }
  },
  created() {
    this.loadPosts()
  }
}
</script>
<style lang="sass" scoped>
.menu-item
  margin: 10px
.menu-button
  padding: 5px
  box-shadow: -4px -4px 15px rgba(255, 255, 255, 0.6), 4px 4px 15px rgba(0, 0, 0, 0.1)
  &:hover
    color: #0062BD
    box-shadow: inset -4px -4px 10px rgba(215, 225, 253, 0.35), inset 4px 4px 10px rgba(0, 0, 0, 0.05)

</style>
