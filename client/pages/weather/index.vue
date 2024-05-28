<template>
  <h1>Weather</h1>
  <!-- <p>{{ data }}!</p> -->
  <p>{{ count }}</p>
  <h2>{{ doubleCount }}</h2>
  <button @click="increment"> Add Increment</button>

</template>

<script setup lang="ts">
import { useCounterStore } from '@/composables/useCounterStore';
import { storeToRefs } from 'pinia';
const counterStore = useCounterStore();
const { increment } = counterStore;
const { count,doubleCount } = storeToRefs(counterStore);
//const {data} = await useFetch('http://localhost:5011/WeatherForecast');
</script>