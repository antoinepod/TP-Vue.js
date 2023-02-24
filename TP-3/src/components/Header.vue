<template>
  <div>
    <header>
      <RouterLink class="active" to="/swipe">Swipe</RouterLink>
      <RouterLink to="/recap">Recap'</RouterLink>
      <RouterLink to="/login">Login</RouterLink>
    </header>
    <h1>
      Zoonder !
    </h1>
  </div>
</template>

<script setup>
import {RouterLink} from 'vue-router';
</script>

<style scoped>
div {
  display: flex;
  flex-direction: row;
  background-color: lightgrey;
  border-radius: 10px;
  margin: 10px;
}

h1 {
  margin-top: 10px;
  text-align: center;
  font-size: 38px;
  width: 100%;
}

header {
  background-color: darkgray;
  width: 400px;
  max-width: 60%;
  display: flex;
  justify-content: space-around;
  border-radius: 10px;
  margin: 10px;
}

header a {
  color: whitesmoke;
  padding: 10px 20px;
  font-size: 20px;
  text-decoration: none;
  border-radius: 10px;
  margin: 4px 0;
}

header a:hover {
  background-color: lightgrey;
  color: black;
}
</style>