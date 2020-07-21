<template>
  <div class="menu">
      <div class="menu-title">
        <nuxt-link to="/categories/">Все категории</nuxt-link>
      </div>
    <ul class="menu-list">
      <li class="menu-item"
          v-for="category in MAIN_CATS"
          :key="category.id">
        <nuxt-link :to="`/category/${category.id}`" class="menu-button">{{ category.title }}</nuxt-link>
        <ul class="menu-sub-list">
          <li class="menu-item"
              v-for="sub in SUB_CATS(category.id)"
              :key="sub.id">
            <nuxt-link :to="`/category/${sub.id}`" class="menu-button">{{ sub.title }}</nuxt-link>
            <ul class="menu-sub-list">
              <li class="menu-item" v-for="subSub in SUB_CATS(sub.id)"
                  :key="subSub.id">
                <nuxt-link :to="`/category/${subSub.id}`" class="menu-button">{{ subSub.title }}</nuxt-link>
              </li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
  import {mapActions, mapGetters} from 'vuex'
  export default {
    data(){
      return{

      }
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

<style lang="sass">
  .menu
    width: 100%
    display: flex
    flex-direction: column
    background-color: #fff
    box-shadow: 0 10px 20px rgba(64, 64, 64, 0.15)

    ul
      list-style: none

    .menu-title
      background: #FED700
      padding: 8px

      a
        font-size: 14px
        padding: 8px

    .menu-list
      margin: 0
      display: block
      width: 100%
      padding: 8px

    .menu-sub-list
      display: none
      padding: 8px
      background-color: transparent
      border-radius: 10px
      /*box-shadow: 0 10px 20px rgba(64, 64, 64, 0.15)*/
      position: absolute
      left: 100%
      right: 0
      z-index: 100
      width: 100%
      top: 0
      flex-direction: column

      .menu-item
        border: none
        padding: 0

    .menu-sub-list:hover
      display: flex

    .menu-item
      position: relative
      /*border-bottom: 1px solid #000*/
      margin-bottom: 5px

      &:last-of-type
        border: none
        margin-bottom: 0

    .menu-button
      font: inherit
      border: 0
      padding: 8px 8px
      width: 100%
      border-radius: 8px
      display: flex
      align-items: center
      position: relative
      text-align: left
      background-color: lightgray

    .menu-button:hover
      background-color: lightskyblue

    .menu-button:hover + .menu-sub-list
      display: flex

</style>




