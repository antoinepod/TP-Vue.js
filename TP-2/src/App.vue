<script setup>

import {ref, watch} from "vue";
import Note from "./components/Note.vue";

const notes = ref([]);
const newNote = ref("");

const addNote = () => {
  notes.value.push({
    id: Math.floor(Math.random() * 100),
    text: newNote.value,
    done: false
  });
  newNote.value = "";
};

const removeNote = (index) => {
  notes.value.splice(index, 1);
};

const changeNoteState = (index) => {
  notes.value[index].done = !notes.value[index].done;
};

</script>


<template>
  <div id="app" class="container">
    <h1 class="title">Notes</h1>
    <input type="text" v-model.trim="newNote"/>
    <button @click="addNote">Add Note</button>

    <p>To do</p>
    <div class="notes-container">
      <div v-for="(note, index) in notes" :id="note.id">
        <Note :note="note" state="false" @delete="removeNote(index)" @change="changeNoteState(index)"/>
      </div>
    </div>

    <p>Done</p>
    <div class="notes-container">
      <div v-for="(note, index) in notes" :id="note.id">
        <Note :note="note" state="true" @delete="removeNote(index)" @change="changeNoteState(index)"/>
      </div>
    </div>

  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: center;
}

.title {
  font-size: 80px;
  color: #2c3e50;
  margin-top: 60px;
}

input {
  width: 300px;
  height: 30px;
  font-size: 20px;
  margin: 20px;
}

.notes-container {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
}

p {
  font-size: 30px;
  margin: 20px;
}

</style>