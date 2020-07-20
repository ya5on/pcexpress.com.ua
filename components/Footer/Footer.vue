<template>
    <div>
      <FeaturedOnsaleRated />
      <Newsletter />
      <FooterContent/>
      <Copyright />
    </div>
</template>

<script>
    import FeaturedOnsaleRated from "./FeaturedOnsaleRated";
    import Newsletter from "./Newsletter";
    import Copyright from "./Copyright";
    import FooterContent from "./FooterContent";
    export default {
        name: "Footer",
      components: {FooterContent, Copyright, Newsletter, FeaturedOnsaleRated}
    }
</script>

<style lang="sass" scoped>
</style>
