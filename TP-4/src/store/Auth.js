import { defineStore } from 'pinia'
import {computed, ref} from "vue";

export const useAuthStore = defineStore('auth', () => {
  const connected = ref(false);

  const isConnected = computed(() => connected.value);

  function connect() {
    connected.value = true;
  }

  function disconnect() {
    connected.value = false;
  }

  return {connected, isConnected, connect, disconnect};
});