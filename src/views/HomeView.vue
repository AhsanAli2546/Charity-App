<script setup>
import DefaultLayout from "../layouts/DefaultLayout.vue";
import AboutUsSec from "../components/AboutUsSec.vue";
import WelcomeSec from "../components/WelcomeSec.vue";
import CausesSec from "../components/CausesSec.vue";
import CarouselSec from "../components/CarouselSec.vue";
import FunfactSec from "../components/FunfactSec.vue";
import LatestnewsSec from "../components/LatestnewsSec.vue";
import SponserSec from "../components/SponsersSec.vue";
</script>

<template>
  <DefaultLayout>
    <main class="m-0 p-0">
      <AboutUsSec />

      <WelcomeSec />

      <CausesSec />

      <CarouselSec />

      <FunfactSec />

      <LatestnewsSec />

      <SponserSec />
    </main>
  </DefaultLayout>
</template>
