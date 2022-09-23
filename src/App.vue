<template>
  <div id = "app">
  </div>

</template>

<script>
import axios from "axios"
import db from "./firebase/firebaseinit"

export default {
  name: "App", 
  data() {
    return{
      APIkey: "a9d8874be240443cdb782496cfa287d5",
      city: "Detroit",
      cities: [],
    };

  },
  created() {
    this.getCityWeather();
  
  },

  methods: {
    getCityWeather() {
      let firebaseDB = db.collection('cities');

      firebaseDB.onSnapshot( snap => {
        snap.docChanges().forEach(async(doc) => {
          if (doc.type === 'added') {
            try{
              const response = await axios.get(
                `https://api.openweathermap.org/data/2.5/weather?q=${this.city}&units=imperial&APPID=${this.APIkey}`
              );
              const data = response.data;
              firebaseDB.doc(doc.doc.id).update({
                currentWeather: data,
              }).then(() => {
                this.cities.push(doc.doc.data());
              })
              .then(() => {
                console.log(this.cities);
              });
          
            } catch (err) {
              console.log(err);
            }
          }

        })
      })
      // firebase real time listener

    },
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
