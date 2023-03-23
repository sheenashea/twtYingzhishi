<template>卡组排行<div class="rank">
    <div class="t0"><img class="imgBox" src="../assets/radier1.png"><li>卡组：钢铁的反叛者-本家皇攻略</li><h5>投石姬攻略组</h5></div>
    <div class="t0"><img class="imgBox" src="../assets/radier2.png"><li>卡组：钢铁的反叛者-直伤巫师</li><h5>亚里莎攻略组</h5></div>
    <div class="t0"><img class="imgBox" src="../assets/radier3.png"><li>卡组: 钢铁的反叛者-圣狮主教</li><h5>投石姬攻略组</h5></div>
    <div class="t0"><img class="imgBox" src="../assets/radier4.png"><li>卡组: 钢铁的反叛者-机械暗夜</li><h5></h5></div>
    <div class="t0"><img class="imgBox" src="../assets/radier5.png"><li>卡组：扭曲次元加攻伯爵攻略</li><h5>盘点十祸退环境单卡</h5></div>
    <div class="t0"><img class="imgBox" src="../assets/radier6.png"><li>卡组：扭曲次元快攻精灵攻略</li><h5>投石姬攻略组</h5></div>
    <div class="t0"><img class="imgBox" src="../assets/radier7.png"><li>卡组: 钢铁的反叛者-潜伏皇</li><h5>亚里莎攻略组</h5></div>
    <div class="t0"><img class="imgBox" src="../assets/radier8.png"><li>卡组: 钢铁的反叛者-造物超越</li><h5>亚里莎攻略组</h5></div>
    <div class="t0"><img class="imgBox" src="../assets/radier9.png"><li>卡组: 钢铁的反叛者-进化裁缝</li><h5>亚里莎攻略组</h5></div>
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
li {
      content: ".";
      color: rgb(0, 0, 0);
      text-shadow:
                        0px -1px 0px #cece0c;
      font-size: large;
      


}
h5{
  color: rgb(130, 99, 9);
  margin-top: 0%;
  float: left;
}
</style>