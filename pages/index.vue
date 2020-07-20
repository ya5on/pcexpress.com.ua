<template>
  <div>
    <MainBlock />
    <DealsOfDay />
    <BannerFull />
    <PopularCategories />
    <BannerHalf />
    <TabsFirstSection />
    <TabsSecondSection />
    <Recommendation />
    <BannerThird />
    <Brands />
  </div>
</template>

<script>
import MainBlock from "../components/Home/MainBlock/MainBlock";
import DealsOfDay from "../components/Home/DealsOfDay";
import BannerFull from "../components/Home/BannerFull";
import PopularCategories from "../components/Home/PopularCategories";
import BannerHalf from "../components/Home/BannerHalf";
import TabsFirstSection from "../components/Home/TabsFirstSection";
import TabsSecondSection from "../components/Home/TabsSecondSection";
import Recommendation from "../components/Home/Recommendation";
import BannerThird from "../components/Home/BannerThird";
import Brands from "../components/BrandsSection/Brands";
  export default {
    components: {
      Brands,
      BannerThird,
      Recommendation,
      TabsFirstSection,
      TabsSecondSection,
      BannerHalf,
      PopularCategories,
      DealsOfDay,
      MainBlock,
      BannerFull
    },
    computed: {

    },
    methods: {

    },
    mounted() {

    },
  }
</script>
<style lang="sass">

</style>
