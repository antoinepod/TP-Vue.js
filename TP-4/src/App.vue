<template>
  <Header/>
  <RouterView/>
  <div class="footer-container">
    <Footer/>
  </div>
</template>

<script setup>
import { RouterView } from "vue-router";

import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
</script>

<style scoped>
.footer-container {
  height: 40px;
}
</style>