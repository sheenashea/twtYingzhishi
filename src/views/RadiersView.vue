<template>攻略爆料
    
<Swiper :speed="1" :direction="'left'"></Swiper>
    <div class="rank">
    <!-- <div class="p0"> -->
      <!-- <div v-for = "(post, index) in RadierPost" :key=index> -->
      <!-- <div class="imgBox">
      <img src="../assets/p1.png" alt=""></div><LikeComponents></LikeComponents><UnlikeComponents></UnlikeComponents></div> -->
    <div class="p1">
      <!-- <div v-for = "(post, index) in RadierPost" :key=index> -->
      <img class="imgBox" src="../assets/p2.png" alt=""><LikeComponents></LikeComponents><UnlikeComponents></UnlikeComponents></div>
    <div class="p2">
      <!-- <div v-for = "(post, index) in RadierPost" :key=index> -->
      <img class="imgBox" src="../assets/p3.png" alt=""><LikeComponents></LikeComponents><UnlikeComponents></UnlikeComponents></div>
    <div class="p3">
      <!-- <div v-for = "(post, index) in RadierPost" :key=index> -->
      <img class="imgBox" src="../assets/p4.png" alt=""><LikeComponents></LikeComponents><UnlikeComponents></UnlikeComponents></div>
  </div>

</template>
<script>
import LikeComponents from "../components/LikeComponents.vue"
import UnlikeComponents from "../components/UnlikeComponents.vue"
import Swiper from '../components/BaseSwiper.vue'
//const axios = require('axios').default;
export default {
  name: "RadiersView",
  components: {
    LikeComponents,UnlikeComponents,Swiper,
  },   
   data(){
        return{
        // RadierPost:[
        //   {img: require('../assets/p1.png')},
        //   {img: require('../assets/p2.png')},
        //   {img: require('../assets/p3.png')},
        //   {img: require('../assets/p4.png')},
        // ],

        }
      },
      // mounted() {
      //  this.RadierPost();
      // },
//     methods: {

//       getPost() {
//         axios.get('?').then((res) =>{
//   console.log(res);
//   this.RadierPost = res.data;
// })
//       }
//     },
  

  

}
</script>
<style>
.imgBox {
  height: 100%;
  width:30%;
  left: 0;
  top: 0;
  display: flex;}

.rank{
  width: 100%;
  height: 100%;
  justify-content: center;
}
.p0{
  width: 80%;
  height: 250px;
  background-color: #ccc;
  margin-top: 10px;
  margin-left: 10%;
  height: 130px;
  display: flex;

}
.p1{
  width: 80%;
  height: 250px;
  background-color: #ccc;
  margin-top: 10px;
  margin-left: 10%;
  display: flex;
  flex-direction: row;
}
.p2{
  width: 80%;
  height: 250px;
  background-color: #ccc;
  margin-top: 10px;
  margin-left: 10%;
  display: flex;
  flex-direction: row;
}
.p3{
  width: 80%;
  height: 250px;
  background-color: #ccc;
  margin-top: 10px;
  margin-left: 10%;
  display: flex;
  flex-direction: row;

}

</style>