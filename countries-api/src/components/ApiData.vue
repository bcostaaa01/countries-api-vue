<template>
  <div>
    <div v-for="(item, index) in data" :key="index">
      <div id="country-card">
        <div class="header">
          <h1>{{ item.name.common }}</h1>
        </div>
        <div>
          {{ item.name.common }}
          <div>Currency: {{ item.currencies }}</div>
        </div>
        {{ item.flag }}
      </div>
    </div>
    <button @click="getData">get data</button>
  </div>
</template>

<script>
export default {
  name: "ApiData",
  data() {
    return {
      data: [],
    };
  },
//   methods: {
//     async getData() {
//       try {
//         const response = await fetch("https://restcountries.com/v3.1/all");

//         this.data = await response.json();
//       } catch (err) {
//         console.log(err);
//       }
//     },
//   },
    mounted() {
        this.$store.dispatch("store/getCountriesData")
    }
};
</script>

<style>
.card {
  padding: 2px 16px;
  align-content: center;
}

#country-card {
  margin: 20px;
  padding: 20px;
  width: 500px;
  min-height: 200px;
  display: grid;
  grid-template-rows: 20px 50px 1fr 50px;
  border-radius: 10px;
  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.25);
  transition: all 0.2s;
}

.header {
  height: 30%;
  background: pink;
  color: white;
  text-align: center;
}
</style>
