<script setup>
import users from "@/data/users.json";
import Card from "@/components/Card.vue";

</script>


<template>
  <div class="container">
    <header>Utilisateurs</header>
    <Card v-for="user in users" :user="user"/>
  </div>
</template>

<style scoped>
.container {
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}

header {
  margin-bottom: 20px;
  margin-top: 30px;
  display: flex;
  align-items: center;
  font-size: 60px;
}
</style>
