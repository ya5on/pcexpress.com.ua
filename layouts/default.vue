<template>
  <div id="app">
    <Header />
    <nuxt/>
    <Login />
    <Registration />
    <Footer />
    <ToTopBtn />
  </div>
</template>

<script>
  import Header from "../components/Header/Header";
  import Footer from "../components/Footer/Footer";
  import ToTopBtn from "../components/TopBtn";
  import Login from "../components/modal/Login";
  import Registration from "../components/modal/Registration";
  export default {
    components: {
      Registration,
      Login,
      ToTopBtn,
      Footer,
      Header
    },
    beforeMount () {
    },
    computed: {
      meta() {
        return [
          {charset: 'utf-8'},
          {
            name: 'viewport',
            content: 'width=device-width, initial-scale=1, maximum-scale=1 shrink-to-fit=no'
          },
          {hid: 'description', name: 'description', content: 'Главная'}
        ]
      }
    },

    head() {
      const canonical = `https://localhost:3000${this.$route.path
        .toLowerCase()
        .replace(/\/$/, '')}`
      return {
        meta: [
          ...this.meta

        ],
        script: [
        ],
        link: [{rel: 'canonical', href: canonical}]
      }
    }
  }
</script>
