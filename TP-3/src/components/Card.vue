<script setup>
import {defineProps, computed} from 'vue';

const props = defineProps({
  animal: {
    type: Object,
    required: true
  }
});

const getGenderSymbol = computed(() => {
  if (props.animal.gender === "male")
    return '♂';
  else
    return '♀';
});
</script>

<template>
  <div class="container">
    <img :src="`https://zoonder.grimille.fr${props.animal.picture}`" alt="">
    <div class="infos">
      <h1 class="firstname">{{ props.animal.firstname }}</h1>
      <div>
        <h2 class="gender">{{ getGenderSymbol }}</h2>
        <h2 class="age">{{ props.animal.age }} ans</h2>
      </div>
      <h2 class="search-for">Recherche: {{ props.animal.searchFor }}</h2>
      <h2 class="description">{{ props.animal.description }}</h2>
    </div>
  </div>
</template>

<style scoped>
.container {
  margin: 10px;
  /*background-color: grey;*/
  width: 80%;
}

img {
  border-radius: 120px;
  height: 800px;
  width: 600px;
  object-fit: cover;
  /*position: absolute;*/
  /*left: 10%;*/
  /*top: 0;*/
  /*margin-top: 40px;*/
}

.infos {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 40px;
  /*position: absolute;*/
  /*left: 50%;*/
  /*top: 0;*/
}

.infos .firstname {
  font-size: 50px;
  font-weight: bold;
}

.infos div {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 20px;
}

.infos div .gender {
  font-size: 25px;
  font-weight: bold;
}

.infos div .age {
  font-size: 25px;
  font-weight: lighter;
  margin-left: 20px;
}

.infos .search-for {
  font-size: 20px;
  color: darkgrey;
}

.infos .description {
  font-size: 20px;
  margin-top: 80px;
}
</style>