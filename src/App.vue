<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <Weather msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import Weather from './components/weather.vue'

export default {
  name: 'app',
  components: {
    Weather
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
