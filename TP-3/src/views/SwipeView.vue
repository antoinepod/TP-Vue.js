<script setup>
import {onBeforeMount, ref} from 'vue';
import axios from 'axios';

import Card from '@/components/Card.vue';
import Crushs from "@/components/Crushs.vue";
import { computed } from '@vue/reactivity';

let animal = ref(null);
let crushs = ref(0);
let loaded = computed(() => animal.value !== null);

function getCrushs() {
  axios.get('https://zoonder.grimille.fr/api/crushs')
      .then(response => crushs = response.data.crushs)
      .catch(error => console.log(error));
}

function getProfile() {
  return axios.get('https://zoonder.grimille.fr/api/profiles/random')
      .then(response => { 
        animal.value = response.data;  
      })
      .catch(error => console.log(error));
}

function likeProfile() {
  getProfile();
  axios.post(`https://zoonder.grimille.fr/api/match?id=${animal.value.id}`)
      .then(response => {
        if (response.data['match'] === true)
          crushs++;
      })
      .catch(error => console.log(error));
}

function dislikeProfile() {
  getProfile();
}

onBeforeMount(() => {
  getCrushs();
  getProfile();
});

</script>

<template>
  <div class="container" v-if="loaded">
    <Card :animal="animal"/>
    <div class="d-flex justify-center align-center p-2 mt-2">
      <img src="https://cdn.freebiesupply.com/logos/large/2x/facebook-love-logo-png-transparent.png" alt="" @click="likeProfile"/>
      <img src="data:image/png;base64,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"
           alt="" @click="dislikeProfile"/>
    </div>
    <Crushs class="crushs" :crushs="crushs"/>
  </div>
  <div v-else>
    <p>"On load tranquille"</p>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  align-items: center;
  margin: 20px;
}

img {
  height: 100px;
  width: 100px;
  cursor: pointer;
  margin: 20px;
}

.crushs {
  margin-right: 40px;
}

</style>