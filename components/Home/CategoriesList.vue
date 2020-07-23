<template>
  <div class="menu">
    <ul class="menu-categories">
      <li class="menu-item" v-for="category in MAIN_CATS"
          :key="category.id">
        <nuxt-link :to="`/category/${category.id}`" class="menu-button">
          {{ category.title }}{{ category.id }}
        </nuxt-link>
        <div class="submenu">
          <ul class="menu-sub-list" v-if="SUB_CATS.length !== 0">
            <li class="menu-item"
                v-for="sub in SUB_CATS(category.id)"
                :key="sub.id">
              <nuxt-link :to="`/category/${sub.id}`" style="color: #1869E5" class="menu-button">{{ sub.title }}</nuxt-link>
              <ul class="">
                <li class="menu-item" v-for="subSub in SUB_CATS(sub.id)"
                    :key="subSub.id">
                  <nuxt-link :to="`/category/${subSub.id}`" class="menu-button">{{ subSub.title }}</nuxt-link>
                </li>
              </ul>
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

<style lang="scss">
  .menu {
    position: relative;
  }

  .menu > ul {
    position: relative;
    background-color: #e9e9e9;
    display: block;
  }

  .menu > ul > li {
    display: block;
    width: 100%;
  }

  .menu > ul > li > a {
    padding: 10px 10px;
    color: #333;
    text-decoration: none;
    width: 100%;
    display: block;
    overflow: hidden;
    position: relative;
    border-bottom: 1px solid #ccc;
  }

  .menu > ul > li:last-child > a {
    border-bottom: 0;
  }

  .submenu {
    visibility: hidden;
    position: absolute;
    transition: width 0.3s;
    height: 100%;
  }

  .menu > ul > li:hover .submenu {
    top: 0;
    left: 100%;
    z-index: 99;
    visibility: visible;
  }
  .menu-sub-list {
    display: block;
    padding: 20px 30px;
    background-color: #fff;
    color: #fff;
    border: 1px solid #1E9ECF;
    width: 100%;
  }
  .submenu h2 {
    color: #1E9ECF;
    line-height: 1;
    margin: 0;
    padding-bottom: 10px;
    border-bottom: 1px solid #eee;
  }

  .submenu .submenu-content {
    display: block;
    overflow: hidden;
    position: relative;
  }

  .menu-item .submenu-content {
    margin-left: -15px;
    margin-right: -15px;
  }

  .menu-item .section {
    width: 33.333%;
    float: left;
    padding: 0 15px;
    position: relative;
  }

  .menu-item .links ul {
    margin: 0;
    padding: 0;
  }

  .menu-item .links ul li {
    display: block;
    border-bottom: 1px solid #eee;
  }

  .menu-item .links ul li:last-child {
    border-bottom: 0;
  }

  .menu-item .links ul li a {
    color: #555;
    display: block;
    text-decoration: none;
    padding: 15px 0;
  }

</style>




