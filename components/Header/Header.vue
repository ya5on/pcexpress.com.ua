<template>
  <div>
    <Topbar />
    <Navbar />
  </div>
</template>

<script>
import Topbar from "./Topbar"
import Navbar from "./Navbar"
  export default {
    name: "Header",
    components: {
      Topbar, Navbar
    }
  }
</script>

<style lang="sass">

</style>
