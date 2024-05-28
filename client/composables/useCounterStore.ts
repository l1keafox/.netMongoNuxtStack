import { defineStore } from 'pinia'

export const useCounterStore  = defineStore('counter', ()=>{
  // other options...
  const count = ref(0);
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }  
  return { count, doubleCount, increment }
})