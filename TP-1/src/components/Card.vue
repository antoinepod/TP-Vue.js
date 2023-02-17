<script setup>
import {defineProps} from "vue";

const {user} = defineProps(['user']);

const getLogo = (social) => {
  if (social.toString().includes("github"))
      return "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png";
  else if (social.toString().includes("facebook"))
      return "https://png.pngtree.com/png-vector/20221018/ourmid/pngtree-facebook-social-media-icon-png-image_6315968.png";
  else if (social.toString().includes("instagram"))
      return "https://www.lespetitsbilingues.com/wp-content/uploads/2021/02/logo-rond-insta-300x300.png";
  else if (social.toString().includes("twitter"))
      return "https://cdn4.iconfinder.com/data/icons/social-media-icons-the-circle-set/48/twitter_circle-512.png";
  else
      return "https://cdn2.iconfinder.com/data/icons/symbol-gray-set-3b/100/1-40-512.png";
}
</script>

<template>
  <div class="card">
    <h1 class="title">Utilisateur n°{{ user.id }}</h1>
    <div class="header">
      <img :src="user.avatar" alt="">
      <div class="infos">
        <p class="name">{{ user.firstname }} {{ user.lastname }}</p>
        <p class="age">{{ user.age }} ans</p>
      </div>
    </div>
    <div v-for="social in user.socials" class="socials">
      <img :src="getLogo(social)" alt="">
      <h4><a :href="social" target="_blank">{{ social }}</a></h4>
    </div>
  </div>
</template>

<style scoped>
.card {
  background-color: lightgrey;
  border-radius: 10px;
  padding-left: 10px;
  padding-right: 10px;
  margin: 20px;
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.title {
  font-size: 20px;
  padding-top: 10px;
  padding-bottom: 10px;
}

.header {
  display: flex;
  align-items: center;
  margin-right: 40px;
  margin-bottom: 20px;
}

img {
  border-radius: 100%;
  margin-right: 20px;
}

.infos {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.name {
  font-size: 40px;
  margin-left: 20px;
  margin-bottom: -20px;
}

.age {
  font-size: 20px;
  margin-top: 20px;
}

.socials {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.socials img {
  width: 40px;
  height: 40px;
  margin-right: 10px;
  border-radius: 100%;
}

a:link {
  color: black;
}

a:hover {
  color: blue;
}

</style>