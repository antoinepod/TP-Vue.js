<script setup>
import {defineProps} from 'vue';

const props = defineProps({
  crushs: {
    type: Number,
    required: true
  }
});

</script>

<template>
  <div class="container">
    <h1>Crushs</h1>
    <p>Vous avez {{crushs}} crushs</p>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
}

h1 {
  font-size: 40px;
  margin-bottom: 0;
}

p {
  font-size: 20px;
  text-align: center;
}
</style>