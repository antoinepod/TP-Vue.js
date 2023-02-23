<script setup>
import {defineProps} from "vue";

const {note, state} = defineProps(['note', 'state']);

</script>

<template>
  <div v-if="note.done.toString() === state">
    <div class="note">
      <p>{{ note.text }}</p>
      <div class="buttons">
        <button v-if="!note.done" class="trash-button" @click="$emit('delete')">🗑</button>
        <input class="checkbox" :checked="note.done" type="checkbox" @click="$emit('change')">
      </div>
    </div>
  </div>
</template>

<style scoped>
.note {
  width: 225px;
  height: 225px;
  border-radius: 15px;
  background-color: lightgrey;
  margin: 10px;
  padding: 20px;
}

.note p {
  font-size: 20px;
  position: absolute;
  top: 20px;
}

.note .buttons {
  display: flex;
  height: 100%;
}

.note .buttons .trash-button {
  border-radius: 50%;
  border-color: transparent;
  cursor: pointer;
  font-weight: bold;
  color: white;
  font-size: 20px;
  background-color: red;
  position: absolute;
  bottom: 0px;
}

.note .buttons .checkbox {
  position: absolute;
  cursor: pointer;
  width: 30px;
  height: 30px;
  bottom: 0;
  right: 0;
}
</style>