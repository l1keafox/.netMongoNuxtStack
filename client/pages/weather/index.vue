<template>
  <h1>Weather</h1>
  <p>{{ data }}!</p>
</template>

<script setup lang="ts">
import { useAlertsStore } from '@/composables/useCounterStore';
const {data} = await useFetch('http://localhost:5011/WeatherForecast');
const store = useAlertsStore();
console.log(store.count);
console.log(data.value);
</script>