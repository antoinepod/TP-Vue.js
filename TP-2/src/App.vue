<template>
  <div id="app" class="container">
    <h1 class="title">Notes</h1>
    <input type="text" v-model.trim="newNoteInput" @keyup.enter="addNote"/>
    <button @click="addNote" @keyup.enter="addNote">Add Note</button>
    {{  doubleAge }}

    <p>To do</p>
    <div class="notes-container">
      <div class="empty-state" v-if="progressNotes.length <= 0">
        <p>Aucune note en cours.</p>
      </div>
      <div v-for="note in progressNotes" :key="note.id">
        <Note :note="note" @delete="removeNote(note)" @change="changeNoteState(note)"/>
      </div>
    </div>

    <p>Done</p>
    <div class="notes-container">
      <div class="empty-state" v-if="doneNotes.length <= 0">
        <p>Aucune note terminées.</p>
      </div>
      <div v-for="note in doneNotes" :key="note.id">
        <Note :note="note" @delete="removeNote(note)" @change="changeNoteState(note)"/>
      </div>
    </div>
  </div>
</template>

<script setup>

import {computed, ref} from "vue";
import Note from "./components/Note.vue";

const notes = ref([]);
const newNoteInput = ref("");

const addNote = () => {
  notes.value.push({
    id: Math.floor(Math.random() * 1000),
    text: newNoteInput.value,
    done: false
  });
  newNoteInput.value = "";
};

const removeNote = (note) => {
  notes.value = notes.value.filter(n => n.id !== note.id);
};

const changeNoteState = (note) => {
  note.done = !note.done;
};

const doneNotes = computed(() => {
  return notes.value.filter((note) => note.done);
});

const progressNotes = computed(() => {
  return notes.value.filter((note) => !note.done);
});
</script>

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