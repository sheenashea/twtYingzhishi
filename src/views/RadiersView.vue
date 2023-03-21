<template>攻略爆料
    
<Swiper :speed="2" :direction="'left'"></Swiper>
    <div class="rank">
    <div class="p0"><div v-for = "(post, index) in RadierPost" :key=index><img src="../assets/p1.png" alt=""></div><LikeComponents></LikeComponents><UnlikeComponents></UnlikeComponents></div>
    <div class="p1"><div v-for = "(post, index) in RadierPost" :key=index><img src="../assets/p2.png" alt=""></div><LikeComponents></LikeComponents><UnlikeComponents></UnlikeComponents></div>
    <div class="p2"><div v-for = "(post, index) in RadierPost" :key=index><img src="../assets/p3.png" alt=""></div><LikeComponents></LikeComponents><UnlikeComponents></UnlikeComponents></div>
    <div class="p3"><div v-for = "(post, index) in RadierPost" :key=index><img src="../assets/p4.png" alt=""></div><LikeComponents></LikeComponents><UnlikeComponents></UnlikeComponents></div>
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
        RadierPost:[
          {img: require('../assets/p1.png')},
          {img: require('../assets/p2.png')},
          {img: require('../assets/p3.png')},
          {img: require('../assets/p4.png')},
        ],

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
.rank{
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: center;
}
.p0{
  width: 80%;
  height: 150px;
  background-color: #ccc;
  margin-top: 10px;
  margin-left: 10%;
}
.p1{
  width: 80%;
  height: 150px;
  background-color: #ccc;
  margin-top: 10px;
  margin-left: 10%;
}
.p2{
  width: 80%;
  height: 150px;
  background-color: #ccc;
  margin-top: 10px;
  margin-left: 10%;
}
.p3{
  width: 80%;
  height: 150px;
  background-color: #ccc;
  margin-top: 10px;
  margin-left: 10%;
}

</style>