<script setup>
import {useRouter} from "vue-router";
import {ref} from "vue";

const router = useRouter();

const email = ref("");
const password = ref("");
const error = ref(false);

const login = () => {
  if (email.value === "" || password.value === "")
    error.value = true;
  else {
    error.value = false;
    console.log("login");
  }
};
</script>

<template>
  <div class="container">
    <h1>Login</h1>
    <form>
      <input type="email" v-model.trim="email"/>
      <input type="password" v-model.trim="password"/>
      <p v-if="error">Email or password incorrect</p>
      <button @click="login()">Connexion</button>
    </form>
  </div>
</template>

<style scoped>
.container {
  margin-top: 250px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

h1 {
  font-size: 80px;
  margin-bottom: 30px;
}

input {
  margin: 10px;
  width: 300px;
  font-size: 20px;
}

button {
  margin-top: 30px;
  font-size: 25px;
}

p {
  font-size: 20px;
  color: red;
}

</style>