<template>社区交流
    
<Swiper :speed="1" :direction="'left'"></Swiper>
    <div class="rank">
    <!-- <div class="p0"> -->
      <!-- <div v-for = "(post, index) in RadierPost" :key=index> -->
      <!-- <div class="imgBox">
      <img src="../assets/p1.png" alt=""></div><LikeComponents></LikeComponents><UnlikeComponents></UnlikeComponents></div> -->
    <div class="p1">
      <!-- <div v-for = "(post, index) in RadierPost" :key=index> -->
      <img class="imgBox" src="../assets/radier1.png" alt="">
      <div class="post12">
        <div class="text">
          <H3>用户</H3>
          <img src="../assets/profile2.jpg" class="profile"><span>双叶</span>
          <h1>[破事水]为啥都说新耶拉是终端</h1>
        </div>
      <div class="component">
      <LikeComponents></LikeComponents><UnlikeComponents></UnlikeComponents><div class="comment"><i class="iconfont comm" @click="show1(item)">&#xe607;</i></div></div></div></div>
    <div class="p1">
      <!-- <div v-for = "(post, index) in RadierPost" :key=index> -->
      <img class="imgBox" src="../assets/radier2.png" alt="">
      <div class="post12">
        <div class="text">
          <H3>用户</H3>
          <img src="../assets/profile.jpg" class="profile"><span>尼姆露</span>
          <h1>[国际服]鏡音リン，鏡音レン进化动作 </h1>
        </div>
      <div class="component">
      <LikeComponents></LikeComponents><UnlikeComponents></UnlikeComponents><div class="comment"><i class="iconfont comm" @click="show1(item)">&#xe607;</i></div></div></div></div>
    <div class="p1">
      <!-- <div v-for = "(post, index) in RadierPost" :key=index> -->
      <img class="imgBox" src="../assets/radier5.png" alt="">
      <div class="post12">
        <div class="text">
          <H3>用户</H3>
          <img src="../assets/1.jpg" class="profile"><span>year—-</span>
          <h1>武装龙太bt了吧</h1>
        </div>
        <div class="component">
      <LikeComponents></LikeComponents><UnlikeComponents></UnlikeComponents><div class="comment"><i class="iconfont comm" @click="show1(item)">&#xe607;</i></div></div></div></div>
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
  display: flex;
}

.rank{
  width: 100%;
  height: 100%;
  justify-content: center;
  margin-top: 5%;
}
.p0{
  width: 80%;
  height: 250px;
  background-color: #ccc;
  margin-top: 10%;
  margin-left: 10%;
  height: 130px;
  display: flex;


}
.p1{
  width: 80%;
  height: 250px;
  background-color: #ccc;
  margin-top: 5%;
  margin-left: 10%;
  display: flex;
  flex-direction: row;
  border-radius: 8px;
  flex-wrap: nowrap;
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
  margin-top: 5%;
  margin-left: 10%;
  display: flex;
  flex-direction: row;

}
.comment{
  align-self: flex-end;
  margin-bottom: 0.4%;
}
.post12{
  display: flex;
  width: 100%;
  height: 100%;
  flex-wrap: nowrap;
  flex-direction: column;
}
.component{
  display: flex;
  width: 100%;
  align-content: flex-end;
  float: right;
  height: 20%;
  align-content: end;
  align-items: flex-end;
}
.text{

  margin-left: 5%;
  height: 80%;
}
.profile{
  vertical-align:middle;
  border-radius: 50%;
  width: 60px;
  height: 60px;
}

</style>