<template>卡组排行<div class="rank">
    <div class="t0"></div>
    <div class="t1"></div>
    <div class="t2"></div>
    <div class="t3"></div>
  </div>
</template>
<script>
const axios = require('axios').default;
export default {
  name: "DeckView",
data(){
        return{
        DeckView:[]
        }
      },
      mounted() {
       this.DeckView();
      },
    methods: {
      getDeck() {
        axios.get('?').then((res) =>{
  console.log(res);
  this.DeckView = res.data;
})
      }
    },
}
</script>
<style>
.rank{
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: center;
}
.t0{
  width: 80%;
  height: 150px;
  background-color: #ccc;
  margin-top: 10px;
  margin-left: 10%;
}
.t1{
  width: 80%;
  height: 150px;
  background-color: #ccc;
  margin-top: 10px;
  margin-left: 10%;
}
.t2{
  width: 80%;
  height: 150px;
  background-color: #ccc;
  margin-top: 10px;
  margin-left: 10%;
}
.t3{
  width: 80%;
  height: 150px;
  background-color: #ccc;
  margin-top: 10px;
  margin-left: 10%;
}
</style>