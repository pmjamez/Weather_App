
<template>
  <div class = "main">
    <Navigation />
    <router-view v-bind:cities="cities"></router-view>
  </div>

</template>

<script>

import axios from "axios"
import db from "./firebase/firebaseinit"
import Navigation from "@/components/Navigation.vue"



export default {
  name: "App", 
  components: {
    Navigation
},
  data() {
    return{
      APIkey: "a9d8874be240443cdb782496cfa287d5",
      cities: [],
    };

  },
  created() {
    this.getCityWeather();
  
  },
  methods: {
    getCityWeather() {
      let firebaseDB = db.collection('cities');

      firebaseDB.onSnapshot((snap) => {
        snap.docChanges().forEach(async(doc) => {
          if (doc.type === 'added') {
            try{
              const response = await axios.get(
                `https://api.openweathermap.org/data/2.5/weather?q=${doc.doc.data().city}&units=imperial&APPID=${this.APIkey}`
              );
              const data = response.data;
              firebaseDB
              .doc(doc.doc.id)
              .update({
                currentWeather: data,
                }).then(() => {
                this.cities.push(doc.doc.data());
               })
            } catch (err) {
              console.log(err);
            }
          }

        })
      })
      // firebase real time listener

    },
    getCurrentWeather() {
     
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
  .main{
    max-width: 1024px;
    margin: 0 auto;
    height: 100vh;
   
  }
  .container {
    padding: 0 20px;
  }


</style> 
