<template>
  <h1 class="title">Tâches</h1>
  <div class="tasks">
    <Task class="task" v-for="task in tasks" :key="task.id" :task="task"/>
  </div>
</template>

<script setup>
import { ref } from "vue";
import axios from "axios";

import Task from "@/components/Task.vue";

const tasks = ref([]);

axios.get("https://plantii.grimille.fr/api/user/plants/tasks")
  .then(response => {
    tasks.value = response.data;
  })
  .catch(error => {
    console.log(error);
  });
</script>

<style scoped>
.title {
  margin-left: 80px;
  font-size: 50px;
  margin-top: 40px;
  margin-bottom: 2%;
  color: forestgreen;
}

.tasks {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

.task {
  margin: 2%;
}
</style>