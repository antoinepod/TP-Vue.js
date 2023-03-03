import { defineStore } from 'pinia'
import {computed, ref} from "vue";

export const useMenuStore = defineStore('menu', () => {
  const show = ref(false);

  const isShow = computed(() => show.value);

  function toogle() {
    show.value = !show.value;
    console.log('show.value: ', show.value);
  }

  return {show, isShow, toogle};
});