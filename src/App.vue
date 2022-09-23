<template>
  <div id = "app">
  </div>

</template>

<script>
import axios from "axios"

export default {
  name: "App", 
  data() {
    return{
      APIkey: "a9d8874be240443cdb782496cfa287d5",
      city: "Detroit",
    };

  },
  created() {
    this.getCurrentWeather();

  },

  methods: {
    getCurrentWeather() {
      axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&units=imperial&APPID=${this.APIkey}`
      ).then(res => {
        console.log(res.data);
      });
      
    },
  },
};
</script>



<style lang = "scss">
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Quicksand", sans-serif;

  }


</style>
