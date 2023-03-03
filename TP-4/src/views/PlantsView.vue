<template>
  <h1 class="title">Plantes</h1>
  <div class="plants">
    <Plant class="plant" v-for="plant in tasks" :key="plant.id" :plant="plant"/>
  </div>
</template>

<script setup>
import { ref } from "vue";
import axios from "axios";

import Plant from "@/components/Plant.vue";

const tasks = ref([]);

axios.get("https://plantii.grimille.fr/api/plants")
    .then(response => {
      tasks.value = response.data;
    })
    .catch(error => {
      console.log(error);
    });
</script>

<style scoped>
.title {
  margin-left: 80px;
  font-size: 50px;
  margin-top: 40px;
  margin-bottom: 2%;
  color: forestgreen;
}

.plants {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>