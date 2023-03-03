<template>
  <div class="container">
    <RouterLink class="title" to="/">🌱 Plantii 🌱</RouterLink>
    <img v-if="!menu.isShow" class="burger" src="https://files.nohat.cc/file-tmp/m2i8G6G6b1m2A0G6.png" alt="" @click="menu.toogle()"/>
    <nav v-show="menu.isShow">
      <div class="menu">
        <img class="cross" src="https://www.nicepng.com/png/full/52-521935_close-button-png.png" alt="" @click="menu.toogle()"/>
        <div class="options">
          <RouterLink class="element" to="/" @click="menu.toogle()">TÂCHES</RouterLink>
          <RouterLink class="element" to="/plants" @click="menu.toogle()">PLANTES</RouterLink>
          <RouterLink class="element" to="/search" @click="menu.toogle()">RECHERCHER</RouterLink>
          <RouterLink v-if="!auth.isConnected" class="element" to="/auth" @click="menu.toogle()">CONNEXION</RouterLink>
          <RouterLink v-else class="element" to="/" @click="menu.toogle(); auth.disconnect()">DÉCONNEXION</RouterLink>
        </div>
      </div>
    </nav>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router';

import { useMenuStore } from "@/store/Menu";
import { useAuthStore } from "@/store/Auth";

const menu = useMenuStore();
const auth = useAuthStore();
</script>

<style scoped>
.container {
  background-color: forestgreen;
  color: white;
  height: 50px;
  display: flex;
  justify-content: space-between;
  box-shadow: 0 0 20px rgb(0 0 0 / 40%);
}

.container .title {
  padding-top: 5px;
  padding-left: 20px;
  text-align: left;
  line-height: 40px;
  font-size: 40px;
  text-decoration: none;
  color: white;
}

.burger {
  position: relative;
  height: 25px;
  cursor: pointer;
  top: 12px;
  right: 15px;
}

nav .menu {
  z-index: 2;
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  right: 0;
  width: 280px;
  height: 100vh;
  background-color: darkseagreen;
}

nav .menu .cross {
  position: absolute;
  top: 10px;
  right: 10px;
  height: 30px;
  cursor: pointer;
}

nav .menu .options {
  margin-top: 100px;
  display: flex;
  flex-direction: column;
}

nav .menu .element {
  margin: 20px;
  font-size: 30px;
  cursor: pointer;
  color: white;
  text-decoration: none;
}

nav .menu .element:hover {
  color: forestgreen;
  font-weight: bold;
}

</style>