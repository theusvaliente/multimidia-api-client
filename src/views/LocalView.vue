<template>
      <div class="container">
      <div v-for="gocoffee in gocoffees" :key="gocoffee.id">
        <card-local :gocoffee="gocoffee"></card-local>
    </div>
  </div>
</template>
  

<script>
import CardLocal from '@/components/CardLocal.vue';


const API_URL = "http://localhost:3333/gocoffee";

export default {
  data: () => ({
    gocoffee: {},
    converted: "USDBRL",
  }),
  methods: {
    async getGocoffee() {
      const response = await fetch(API_URL);
      const data = await response.json();

      this.gocoffee = data;
    },
  },
  created() {
    this.getGocoffee();
  },
  components: {
    CardLocal,
  },
};
</script>

<style>
body {
  background-color: black;
}

.title {
  color: #ffe807;
}

.type {
  color: white;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  text-align: center;
}

.row {
  text-align: start;
  align-content: center;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  margin: 0;
}

.header {
  color: #ffe807;
  font-weight: bold;
  font-size: 14px;
  background-color: #121212 !important;
}

.row li {
  background-color: white;
  display: inline-block;
  padding: 10px;
  border: 1px solid black;
}

.col-l {
  width: 100px;
}

.col-m {
  width: 200px;
}

.col-g {
  width: 250px;
}

.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
}

.card {
  background-color: white;
  border-radius: 10px;
  margin: 20px;
  height: 250px;
  width: 400px;
  text-align: center;
  align-content: center;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}

.card-title {
  color: #ffe807;
  font-size: 20px;
  font-weight: bold;
  text-shadow: 1px 1px 5px black;
}

.card-description {
  font-size: 14px;
  text-align: center;
  padding-left: 50px;
}
</style>
