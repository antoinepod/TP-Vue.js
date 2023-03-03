<template>
  <div class="container">
    <h1>Connexion</h1>
    <input type="email" placeholder="Email" v-model.trim="email"/>
    <input type="password" placeholder="Password" v-model.trim="password"/>
    <p class="success" v-if="success">{{ success }}</p>
    <p class="error" v-if="error">{{ error }}</p>
    <button @click="login()">Se connecter</button>
  </div>
</template>

<script setup>
import {useRouter} from "vue-router";
import {ref} from "vue";
import axios from "axios";
import { useAuthStore } from "@/store/Auth";

const auth = useAuthStore();

const router = useRouter();

const email = ref("");
const password = ref("");
const success = ref("")
const error = ref("");

const config = {
  method: 'post',
  url: 'https://plantii.grimille.fr/auth/login',
  headers: {
    'Content-Type': 'application/json'
  },
};

function login() {
  if (email.value === "" || password.value === "") {
    error.value = "Merci de remplir tous les champs";
    return;
  }

  config.data = {
    "username": email.value,
    "password": password.value
  };

  console.log(config)

  axios(config)
      .then(response => {
        console.log(response.data)
        if (response.data['success'] === true) {
          error.value = "";
          success.value = "🌱 Connexion réussie ! 🌱";
          auth.connect();
          setTimeout(function () {
            router.push("/");
          }, 1500);
        } else {
          error.value = "Email ou mot de passe incorrect";
        }
      })
      .catch(error => console.log(error));
}
</script>

<style scoped>
.container {
  margin-top: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

h1 {
  font-size: 80px;
  margin-bottom: 30px;
  color: forestgreen;
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

.success {
  font-size: 20px;
  color: green;
  text-align: center;
}

.error {
  font-size: 20px;
  color: red;
  text-align: center;
}

</style>