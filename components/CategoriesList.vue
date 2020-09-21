<template>
  <div class="menu">
    <div class="menu-title">
      <nuxt-link to="/categories" class="">Все категории</nuxt-link>
    </div>
    <ul class="menu-list">
      <li class="menu-item">
        <nuxt-link class="menu-button" to="/category/">Все товары</nuxt-link>
      </li>
      <li class="menu-item" v-for="category in MAIN_CATS" :key="category.id">
        <nuxt-link :to="`/category/${category.id}`" class="menu-button">
          {{ category.title }}
          <i class="ec ec-arrow-right-categproes" v-if="SUB_CATS(category.id).length !== 0"></i>
        </nuxt-link>
        <div class="menu-sub-list">
          <ul class="sub-list">
            <li class="menu-item"
                v-for="sub in SUB_CATS(category.id)"
                :key="sub.id">
              <nuxt-link :to="`/category/${sub.id}`" class="menu-button">
                {{ sub.title }}
                <i class="ec ec-arrow-right-categproes" v-if="SUB_CATS(sub.id).length !== 0"></i></nuxt-link>
              <div class="menu-sub-list">
                <ul class="sub-list">
                  <li class="menu-item" v-for="subSub in SUB_CATS(sub.id)"
                      :key="subSub.id">
                    <nuxt-link :to="`/category/${subSub.id}`" class="menu-button">
                      {{ subSub.title }}
                    </nuxt-link>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </li>
    </ul>

  </div>
</template>

<script>
  import {mapActions, mapGetters} from 'vuex'

  export default {
    data() {
      return {

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

<style lang="sass" scoped>
  .menu
    display: flex
    flex-direction: column
    box-shadow: 0 10px 20px rgba(64, 64, 64, 0.15)
    ul
      list-style: none

    .menu-title
      background: #fed700
      padding: 8px

      a
        font-size: 14px
        padding: 8px

    .menu-list
      margin: 0
      display: flex
      flex-direction: column-reverse
      width: 100%
      padding: 5px
      background: #E9E9E9

    .menu-sub-list
      display: none
      padding: 5px
      background-color: transparent
      position: absolute
      left: 98%
      right: 0
      z-index: 100
      width: 100%
      top: 0
      flex-direction: column

      .sub-list
        box-shadow: 0 10px 20px rgba(64, 64, 64, 0.3)
        background-color: #e9e9e9

      .menu-item
        border-bottom: 1px solid #CCCCCC
        padding: 0

        &:last-of-type
          border: none
          margin-bottom: 0

        &:first-of-type
          border-bottom: 1px solid #CCCCCC

      &:hover
        display: flex

    .menu-item
      position: relative
      border-bottom: 1px solid #CCCCCC

      &:first-of-type
        border: none
        margin-bottom: 0

    .menu-button
      display: flex
      justify-content: space-between
      align-items: center
      font-size: 14px
      padding: 8px
      width: 100%
      position: relative

      .ec
        color: #333e48
        font-size: 14px

      &:hover
        color: #0062BD

        + .menu-sub-list
          display: flex

        + .ec
          color: #0062BD


</style>




