<template>
  <div>
    <select id="currency" name="currencylist" form="carform">
      <option value="USD">Dólar Americano</option>
      <option value="EUR">Euro</option>
      <option value="BTC">Bitcoin</option>
      <option value="CAD">Dólar Canadense</option>
      <option value="ARS">Peso Argentino</option>
    </select>
    
    <div class="container">
      <card :currency="currency" :converted="converted"></card>
    </div>
  </div>
</template>
  

<script>
import Card from '../components/Card.vue';

const API_URL = "https://economia.awesomeapi.com.br/json/last/USD";

export default {
  data: () => ({
    currency: {},
    converted: "USDBRL",
  }),
  methods: {
    async getCurrency() {
      const response = await fetch(API_URL);
      const data = await response.json();

      this.currency = data;
    },
  },
  created() {
    this.getCurrency();
  },
  components: {
    Card,
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
