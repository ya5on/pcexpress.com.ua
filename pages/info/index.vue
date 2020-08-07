<template>
<div class="container">
  <!-- breadcrumb -->
  <ul class="breadcrumb">
    <li class="breadcrumb-item">
      <nuxt-link to="/">Главная</nuxt-link>
    </li>
    <li class="breadcrumb-item">
      <i class="ec ec-arrow-right-categproes"></i>
    </li>
    <li class="breadcrumb-item">Информация</li>
  </ul>
  <!-- End breadcrumb -->
  <div class="info">
    <div class="info__item text-center">
      <h1>Terms and Conditions</h1>
      <p class="">This Agreement was last modified on 18th february 2019</p>
    </div>
    <div class="info__item">
      <h3 class="">Intellectual Propertly</h3>
      <ol>
        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam quis diam erat. Duis velit lectus, posuere a blandit sit amet, tempor at lorem. Donec ultricies, lorem sed ultrices interdum.</li>
        <li>Leo metus luctus sem, vel vulputate diam ipsum sed lorem. Donec tempor arcu nisl, et molestie massa scelerisque ut. Nunc at rutrum leo. Mauris metus mauris, tristique quis sapien eu, rutrum vulputate enim.</li>
        <li>Mauris tempus erat laoreet turpis lobortis, eu tincidunt erat fermentum.</li>
        <li>Aliquam non tincidunt urna. Integer tincidunt nec nisl vitae ullamcorper. Proin sed ultrices erat. Praesent varius ultrices massa at faucibus.</li>
        <li>Aenean dignissim, orci sed faucibus pharetra, dui mi dignissim tortor, sit amet condimentum mi ligula sit amet augue.</li>
        <li>Pellentesque vitae eros eget enim mollis placerat.</li>
      </ol>
    </div>
    <div class="info__item">
      <h3 class="">Termination</h3>
      <ol>
        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam quis diam erat. Duis velit lectus, posuere a blandit sit amet, tempor at lorem. Donec ultricies, lorem sed ultrices interdum.</li>
        <li>Leo metus luctus sem, vel vulputate diam ipsum sed lorem. Donec tempor arcu nisl, et molestie massa scelerisque ut. Nunc at rutrum leo. Mauris metus mauris, tristique quis sapien eu, rutrum vulputate enim.</li>
        <li>Mauris tempus erat laoreet turpis lobortis, eu tincidunt erat fermentum.</li>
        <li>Aliquam non tincidunt urna. Integer tincidunt nec nisl vitae ullamcorper. Proin sed ultrices erat. Praesent varius ultrices massa at faucibus.</li>
        <li>Aenean dignissim, orci sed faucibus pharetra, dui mi dignissim tortor, sit amet condimentum mi ligula sit amet augue.</li>
        <li>Pellentesque vitae eros eget enim mollis placerat.</li>
      </ol>
    </div>
    <div class="info__item">
      <h3 class="">Changes To This Agreement</h3>
      <p class="text-grey">We reserve the right, at our sole discretion, to modify or replace these Terms and Conditions by posting the updated terms on the Site. Your continued use of the Site after any such changes constitutes your acceptance of the new Terms and Conditions.</p>
    </div>
    <div class="info__item">
      <h3 class="">Contact Us</h3>
      <p class="text-grey">If you have any questions about this Agreement, please contact us filling this
        <nuxt-link to="/contacts" class="">contact form</nuxt-link></p>
    </div>
  </div>
</div>
</template>

<script>
    export default {
        name: "index"
    }
</script>

<style lang="sass" scoped>

  .info

    &__item
      margin-bottom: 4.5rem

      h1
        font-size: 2.5rem
        margin-bottom: .5rem

      h3
        font-size: 1.56275rem
        padding-bottom: 0.5rem
        margin-bottom: 2.5rem

      .text-grey
        color: #333e48
      p
        color: #9f9f9f

        a
          color: #0062bd
          font-weight: 700

      ol
        margin-top: 0
        margin-bottom: 1rem

  .text-center
    text-align: center


</style>
