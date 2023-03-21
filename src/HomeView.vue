<template>
  
    <div class="box">
      <div class="left">
        <div class="main">
  <div class="navigation1">
      <router-link to="/radiers" class="top-button">攻略爆料</router-link>
  </div>
  <div class="navigation2">
      <router-link to="/deck" class="bottom-button">卡组排行</router-link>
  </div>
  </div>
      </div>
      <div class="right">
        <div class="header">
          <div class="search">
            <el-input placeholder="请输入内容"
            v-model="queryInfo.query" clearable @clear="getUserList">
             <el-button @click="getUserList"><el-icon><search /></el-icon></el-button>
            </el-input>
            </div>
          </div>
        <div class="main1"><router-view></router-view></div>
      </div>
    </div>
  </template>
  
  <script>
  
  const axios = require('axios').default;
  export default {
    name: 'App',
    components: {
    },
    data () {
      return {
        // 获取帖子的参数对象
        queryInfo: []
      }
    },
    created () {
      axios.get('?').then((re) =>{
    console.log(re);
    this.queryInfo = re.data;
      })
      this.getUserList()
    },
    methods: {
      async getUserList () {
        const { data: re } = await this.$http.get('users', {
          params: this.queryInfo
        })
        if (re.meta.status !== 200) return this.$message.error('没有找到你要的内容')
        this.userlist = re.data.users
        this.total = re.data.total
        console.log(re)
      },
    }
  }
  </script>
  
  
  <style scoped>
  a {
      color: #409EFF;
      text-decoration: none;
    }
  .left {
    float: left;
    width: 15%;
    height: 780px;
    background-color: rgb(244,204,156);
    margin-right: -100%;
    position: fixed;
    z-index: 99999;
    border:1px solid black;
    border-top-right-radius: 2%;
  
  }
  .right{
      background-color: rgb(239, 235, 235);
      width: 100%;
      height: 1000px;
      opacity: 0.5;
     
  }
  .box {
    padding: 0%;
    margin: 0%;
    justify-content:space-between
  }
  .header {
    background-color: aquamarine;
    margin-left: 15%;
  }
  .main1 {
    margin-left: 15%;
    margin-top: 0%;
    height: 80%;
    background-color: rgb(238, 238, 244);
  }
  .search{
    width:100%;
    height: 4rem;
    background-color: rgb(94, 208, 247);
  }
  .searchInput{
    width: 92%;
    margin-top :.5rem;
    margin-left: 4%;
    line-height: 2rem;
    border: #ccc 1px solid;
    text-align: center;
    font-size :18pxV
  }
  html,body,#app{
   height:980px;
   width: 100%;
   margin: 0px;
  padding: 0px;
        }
        .top-button{
      flex-wrap: wrap;
      flex-direction: row;
      text-align: justify;
      text-shadow: 50ch;
      color: rgb(247, 247, 247);
      font-size: 40px;
      font-style: italic;
      font-weight: bold;
  }
  .bottom-button{
      flex-wrap: wrap;
      flex-direction: row;
      text-shadow: 50ch;
      color: rgb(252, 252, 252);
      font-size: 40px;
      text-align: justify;
      font-style: italic;
      font-weight: bold;
  
  }
  .navigation1{
      height: 20%;
      margin-top: 60%;
  }
  .navigation2{
      height: 20%
  }
  .main{
      flex-direction: row;
      margin-left: 0px;
      margin-right: 0%;
      height: 1000px;
  }
  .router-link-active {
      text-decoration: none;
    }
  </style>
  