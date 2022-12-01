<template>
  <h1>Countries API</h1>
  <ApiData />
</template>

<script>
import ApiData from './components/ApiData.vue';

export default {
  name: 'App',
  components: {
    ApiData
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
