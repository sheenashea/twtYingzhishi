<template>卡组排行<div class="rank">
    <div class="t0"><img src="../assets/p1.png"><span>作者：早八不如早六</span><h2>盘点十祸退环境单卡</h2></div>
    <div class="t1"><img src="../assets/p1.png"><span>作者：绫地宁宁</span><h2>这可能就是完爆吧</h2></div>
    <div class="t2"><img src="../assets/p1.png"><span>作者: Neko</span><h2>啊摆</h2></div>
    <div class="t3"><img src="../assets/p1.png"><span>作者: SekAo</span><h2>寄</h2></div>
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
  margin-left: 0px;
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