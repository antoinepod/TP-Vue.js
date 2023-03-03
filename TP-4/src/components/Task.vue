<template>
  <div class="container" v-bind:style="[task.done ? {'background-color': 'darkgrey'} : {'background-color': 'darkseagreen'}]">
    <Plant :plant="task.plant"/>
    <div class="actions-container">
      <div v-for="action in task.actions" class="action">
        <input type="checkbox" :value="action" v-model="checkedActions"/>
        <h4 class="name">{{ action }}</h4>
      </div>
    </div>
  </div>
</template>

<script setup>
import {defineProps, ref, watch} from 'vue';

import Plant from "@/components/Plant.vue";

const props = defineProps({
  task: {
    type: Object,
    required: true
  }
});

const checkedActions = ref([]);
if (props.task.done) {
  checkedActions.value = props.task.actions;
}

watch(checkedActions, (newValue) => {
  props.task.done = newValue.length === props.task.actions.length;
});

</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: darkseagreen;
  max-width: 25%;
  min-height: 650px;
  padding: 5px;
  border-radius: 20px;
  box-shadow: 0 0 10px rgb(0 0 0 / 20%);
}

.actions-container {
  display: flex;
  flex-direction: column;
  align-items: start;
  margin: 5px;
}

.action {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 5px;
}

.action .name {
  margin-left: 10px;
}
</style>