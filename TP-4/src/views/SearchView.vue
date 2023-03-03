<template>
  <h1 class="title">Rechercher</h1>
  <input type="text" placeholder="Nom de la plante" v-model.trim="search">
  <div class="plants">
    <Plant v-for="plant in plants" :key="plant.id" :plant="plant"/>
  </div>
</template>

<script setup>
import {ref, watch} from "vue";
import axios from "axios";

import Plant from "@/components/Plant.vue";

const search = ref("");
const plants = ref([]);

const config = {
  method: 'post',
  url: 'https://plantii.grimille.fr/api/plants/search',
  headers: {
    'Content-Type': 'application/json'
  }
};

watch(search, () => {
  console.log(search.value);
  if (search.value === "") {
    plants.value = [];
    return;
  }
  config.data = {
    "search": search.value
  };
  axios(config)
      .then(response => {
        plants.value = response.data.results;
        console.log(response.data.results)
      })
      .catch(error => console.log(error));
});
</script>

<style scoped>
.title {
  margin-left: 80px;
  font-size: 50px;
  margin-top: 40px;
  color: forestgreen;
}

input {
  margin-left: 80px;
  margin-top: 40px;
  margin-bottom: 40px;
  width: 300px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid #ccc;
  padding: 10px;
}

.plants {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>