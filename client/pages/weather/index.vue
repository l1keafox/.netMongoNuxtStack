<template>
  <h1>Weather</h1>
  <p>{{ data }}!</p>
</template>

<script setup lang="ts">
const {data} = await useFetch('http://localhost:5011/WeatherForecast');

console.log(data.value);
</script>