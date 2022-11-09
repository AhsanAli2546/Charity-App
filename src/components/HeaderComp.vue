<script>
import NavbarPartials from "./partials/NavbarPartials.vue";

export default {
  name: "HeaderComp",
  components: {
    NavbarPartials,
  },
};
</script>

<template>
  <header class="w-100">
    <NavbarPartials />
    <section class="container text-center py-5">
      <h4 class="h6 font-montserrat text-white">Give Hope For Homeless</h4>
      <h1 class="text-white header-sec-heading font-playfair py-1">
        Helping Each Other <br />
        Can Make World Better
      </h1>
      <h6 class="header-sec-detail text-white font-montserrat">
        We Seek Out World Changers And Differece Makers Around The
      </h6>
      <h6 class="header-sec-detail text-white font-montserrat">
        Globe, And Equip Them To Fullfill Their Unique Purpose.
      </h6>

      <button class="ch-btn ch-primary-btn me-2">Donate Now</button>
      <button class="ch-btn ch-primary-outline-btn text-white">Know About Us</button>
    </section>
  </header>
</template>

<style>
/*@import url('../assets/css/index-header.css');*/
</style>
