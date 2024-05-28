import { defineStore } from 'pinia'

export const useAlertsStore = defineStore('alerts', ()=>{
  // other options...
  const count = ref(0);
  return {count};
})