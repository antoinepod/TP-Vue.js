<template>
  <h1 class="name">{{ plant.name }}</h1>
  <img :src="`https://plantii.grimille.fr/${plant.image}`" alt=""/>
  <div class="infos">
    <h2 class="type">{{ plant.type }}</h2>
    <h3 class="tips">{{ plant.tips }}</h3>
  </div>
  <hr/>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  plant: {
    type: Object,
    required: true
  }
});
</script>

<style scoped>
.name {
  text-align: center;
}

img {
  width: 300px;
  height: 300px;
  object-fit: cover;
  margin: 10px;
  border-radius: 20px;
}

.infos {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 5px;
}

.infos .tips {
  margin: 5px;
  font-style: italic;
  font-size: 15px;
}

hr {
  width: 20%;
  border: 1px solid darkslategrey;
}
</style>