<template>
  <div class="menu">
    <div class="menu-title" @click="toggle">
      <div>Каталог товаров</div>
      <i v-if="!show" class="fa fa-plus"/>
      <i v-else class="fa fa-minus"/>
    </div>
    <ul class="menu-list" v-bind:class="{ active: show}">
      <li class="menu-item"
          v-for="(category, index) in MAIN_CATS"
          :key="index"
          :class="[
        'accordion',
        { 'is-open': isOpen.includes(index) }
      ]"
      >
        <div class="menu-button"
             @click="toggleAccordion(index)"
             v-if="SUB_CATS(category.id).length !== 0">
          {{ category.title }}
          <i v-if="!isOpen.includes(index)" class="fa fa-plus"/>
          <i v-else class="fa fa-minus"/>
        </div>
        <nuxt-link :to="`/category/${category.id}`"
                   class="menu-button"
                   v-else="SUB_CATS(category.id).length === 0">
          {{ category.title }}
        </nuxt-link>
        <div class="menu-sub-list">
          <ul class="sub-list">
            <li class="menu-item"
                v-for="sub in SUB_CATS(category.id)"
                :key="sub.id">
              <nuxt-link :to="`/category/${sub.id}`" class="menu-button">
                {{ sub.title }}</nuxt-link>
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
  name: "Catalogue",
  data() {
    return {
      isOpen: [],
      show: false
    }
  },
  computed: {
    ...mapGetters([
      'MAIN_CATS',
      'SUB_CATS'
    ]),

  },
  methods: {
    ...mapActions([
      'GET_CATEGORIES_LIST',
    ]),
    toggleAccordion(index) {
      if (this.isOpen.includes(index)) {
        this.isOpen = this.isOpen.filter(i => i !== index);
        return;
      }
      this.isOpen.push(index);
    },
    toggle() {
      this.show = !this.show;
    },
    // beforeEnter: function(el) {
    //   el.style.height = '0';
    // },
    // enter: function(el) {
    //   el.style.height = el.scrollHeight + 'px';
    // },
    // beforeLeave: function(el) {
    //   el.style.height = el.scrollHeight + 'px';
    // },
    // leave: function(el) {
    //   el.style.height = '0';
    // }
  },
  mounted() {
    this.GET_CATEGORIES_LIST()

  },
}
</script>

<style lang="sass" scoped>
.link-active
  color: #0062BD

.accordion:not(.is-open) .menu-sub-list
  display: none

.menu
  width: 100%
  display: flex
  flex-direction: column
  box-shadow: 0 10px 20px rgba(64, 64, 64, 0.15)
  height: 100%

  ul
    list-style: none

  .menu-title
    background: #fed700
    padding: 8px
    display: flex
    justify-content: space-between
    align-items: center
    font-size: 18px

  .menu-list
    margin: 0
    display: none
    flex-direction: column-reverse
    width: 100%
    padding: 5px
    background: #E9E9E9

  .active
    display: flex

  .menu-sub-list
    padding: 5px
    background-color: transparent
    width: 100%
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

    &.open
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
    font-size: 13px
    padding: 8px 5px
    width: 100%
    position: relative
    cursor: pointer

    .ec
      color: #333e48
      font-size: 14px

    &:hover
      color: #0062BD

      + .ec
        color: #0062BD


</style>
