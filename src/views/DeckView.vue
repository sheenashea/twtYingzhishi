<template>卡组排行<div class="rank">
    <div class="t0"><img class="imgBox" src="../assets/deck1.png"><span>卡组：刀贼</span><h2>盘点十祸退环境单卡</h2></div>
    <div class="t0"><img class="imgBox" src="../assets/deck2.png"><span>卡组：野兽德</span><h2>这可能就是完爆吧</h2></div>
    <div class="t0"><img class="imgBox" src="../assets/deck3.png"><span>卡组: T7猎</span><h2>啊摆</h2></div>
    <div class="t0"><img class="imgBox" src="../assets/deck4.png"><span>卡组: 快攻德</span><h2>寄</h2></div>
    <div class="t0"><img class="imgBox" src="../assets/deck1.png"><span>卡组：刀贼</span><h2>盘点十祸退环境单卡</h2></div>
    <div class="t0"><img class="imgBox" src="../assets/deck2.png"><span>卡组：野兽德</span><h2>这可能就是完爆吧</h2></div>
    <div class="t0"><img class="imgBox" src="../assets/deck3.png"><span>卡组: T7猎</span><h2>啊摆</h2></div>
    <div class="t0"><img class="imgBox" src="../assets/deck4.png"><span>卡组: 快攻德</span><h2>寄</h2></div>
    <div class="t0"><img class="imgBox" src="../assets/deck4.png"><span>卡组: 快攻德</span><h2>寄</h2></div>
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
.imgBox {
  height: 100%;
  width:100%;
  left: 0;
  top: 0;
  display: flex;
}
.rank{
  width: 100%;
  height: 100%;
  flex-direction: row;
  flex-wrap: wrap;
  margin-left: 0px;
  display: flex;
  align-content:flex-start;
}
.t0{
  width: 20%;
  height: 150px;
  background-color: #ccc;
  margin-top: 10px;
  margin-left: 10%;
  margin-bottom: 10%;
}
.t1{
  width: 20%;
  height: 150px;
  background-color: #ccc;
  margin-top: 10px;
  margin-left: 10%;
}
.t2{
  width: 20%;
  height: 150px;
  background-color: #ccc;
  margin-top: 10px;
  margin-left: 10%;
}
.t3{
  width: 20%;
  height: 150px;
  background-color: #ccc;
  margin-top: 10px;
  margin-left: 10%;
}
</style>