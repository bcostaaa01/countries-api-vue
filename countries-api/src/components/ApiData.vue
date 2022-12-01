<template>
  <div>
    <div v-for="(item, index) in data" :key="index">{{ item.name.common }}</div>
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
  methods: {
    async getData() {
      try {
        const response = await fetch(
          "https://restcountries.com/v3.1/all"
        );

        this.data = await response.json();
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>
