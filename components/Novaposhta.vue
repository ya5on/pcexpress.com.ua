<template>
  <div class="container">
    <label for="searchCity">Город: </label>
    <input id="searchCity" type="text" v-model="searchCity">

    <form class="">
      <label>Select</label>
      <select class="form-control select2">
        <option>Select</option>
        <option>Car</option>
        <option>Bike</option>
        <option>Scooter</option>
        <option>Cycle</option>
        <option>Horse</option>
      </select>
    </form>

    <label for="searchWarehouses">Отделение: </label>
    <input id="searchWarehouses" type="text">
    <ul id="previewWarehouses"></ul>
  </div>
</template>

<script>
import axios, * as others from 'axios'
import {mapGetters} from "vuex";
const url = 'https://api.novaposhta.ua/v2.0/json/';

export default {
  name: "NP",
  data() {
    return {
      // citiesArr: [],
      searchCity: 'киев',
      // previewCity: []
    }
  },
  created() {
    return this.$store.dispatch('GET_CITY')
  },
  computed: {
    ...mapGetters([
      'city',
    ]),
    filteredProducts() {
      return this.city.map(e => e.DescriptionRu)
    },
    cities() {
      return this.filteredProducts.filter(d => this.searchCity.split('^').every(v => d.toLowerCase().includes(v.toLowerCase())))
    },
  },
  mounted() {

  },
  methods: {

  }
}
</script>

<style scoped>

</style>
