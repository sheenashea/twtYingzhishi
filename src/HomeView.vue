<template>
  
    <div class="box">
      <div class="left">
        <div class="main">
  <div class="navigation1">
      <router-link to="/radiers" class="top-button hvr-grow-shadow">社区交流</router-link>
  </div>
  <div class="navigation2">
      <router-link to="/deck" class="bottom-button hvr-grow-shadow">卡组排行</router-link>
  </div>
  </div>
      </div>
      <div class="right">
        <div class="navigate">
        <ul>
          <li><a href="javascript:void(0);"><i class="iconfont" @click="drop()" style="color: white;">&#xe60b;</i></a></li>
          <li><a href="/radiers" style="color: white;">Return to HomePage</a></li>
        </ul>
    </div>
    <div :class="dropdown">
       <div class="dropdown-menu">
          <a href="/radiers" class="menuItem" >社区交流</a>
          <a href="/deck" class="menuItem" >卡组排行</a>
          <a href="/posts" class="menuItem">帖子页面</a>
          <a href="/mypage" class="menuItem" >个人中心</a>
       </div>
    </div>
        <!-- <div class="header">
          <div class="search">
            <el-input placeholder="请输入内容"
            v-model="queryInfo.query" clearable @clear="getUserList">
             <el-button @click="getUserList"><el-icon><search /></el-icon></el-button>
            </el-input>
            </div>
            <navMenu></navMenu> -->
          <!-- </div> -->
        <div class="main1"><router-view></router-view></div>
      </div>
    </div>
  </template>
  
  <script>
  // import navMenu from "./components/nav.vue"
  // import { defineComponent } from 'vue'
  //const axios = require('axios').default;
  export default {
    name: 'App',
    components: {
    },
    data () {
      return {
        dropdown: 'dropdown-content',
        // 获取帖子的参数对象
        // queryInfo: []
      }
    },
    // created () {
    //   axios.get('?').then((re) =>{
    // console.log(re);
    // this.queryInfo = re.data;
    //   })
    //   this.getUserList()
    // },
    methods: {
      drop () {
            if(this.dropdown == 'dropdown-content') this.dropdown = 'dropdown-content2';
            else this.dropdown = 'dropdown-content'
        },
      // async getUserList () {
      //   const { data: re } = await this.$http.get('users', {
      //     params: this.queryInfo
      //   })
      //   if (re.meta.status !== 200) return this.$message.error('没有找到你要的内容')
      //   this.userlist = re.data.users
      //   this.total = re.data.total
      //   console.log(re)
      // },
    }
  }
  </script>
  
  
  <style lang="less" scoped>
 .label{
       text-align: center;
    }

    ul {
       list-style-type: none;
       margin: 0;
       padding: 0;
       overflow: hidden;
       background-color: rgb(0, 0, 0);
       opacity: 0.5;
       border:1px solid #807e19;;
       border-top-right-radius: 2%;  
    }

    li {
        float: right;
    }

    li a {
       display: block;
       color: black;
       text-align: center;
       padding: 14px 16px;
       text-decoration: none;
}

li a:hover{
  background-color: lightblue;
  text-decoration: none;
  color: black;
}

.dropdown-content {
     float: right;
     visibility: hidden;
     opacity: 0;
     transition: all 0.5s ease-in-out;
}
.dropdown-menu {
    margin-top: 7px;
    float: right;
    padding: 10px 8px 15px;
    color: black;
    background-color: aliceblue;
    border-radius: 4px;
    .menuItem {
    width: 100%;
    white-space: nowrap;
    padding: 10px 16px;
    font-size: 16px;
    color: black;
    cursor: pointer;
    border-radius: 4px;
    &:hover {
        background-color: lightblue;
    }
}

}
   
.dropdown-content2 {
    float: right;
    visibility: visible;
    opacity: 1;
    transition: all 0.6s ease-in-out;
}
  a {
      color: #409EFF;
      text-decoration: none;
    }
.navigate{
  z-index: 10000;
  margin-left: 15.3%;

}
  .left {
  
    float: left;
    width: 15%;
    height: 830px;
    background-color: #000000+7a;
    opacity: 0.7;
    margin-right: -100%;
    position: fixed;
    z-index: 99;
    border:1px solid #807e19;;
    border-top-right-radius: 2%;
    
    ;
    
  
  }
  .right{
      background-color: rgb(239, 235, 235);
      width: 100%;
      height: 1510px;
      background:url(./assets/background1.png);
      background-size: cover; 
      
    
     
  }
  .box {
    padding: 0%;
    margin: 0%;
    justify-content:space-between;
    
  }
  .header {
    background-color: rgb(94, 208, 247);
    margin-left: 15%;
  }
  .main1 {
    margin-left: 15%;
    margin-top: 0%;
    height: 1010px;
    background:url(./assets/background1.png);
    background-size: cover;
    background: repeat;
    background-size:100% 100%;                   

  }
  .search{
    width:40%;
    height: 10px;
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
      text-align: center;
      position: relative;
  }
  .navigation2{
      height: 20%;
      text-align: center;
      position: relative;
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
    .hvr-grow-shadow {
  display: inline-block;
  vertical-align: middle;
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(6px) translateZ(0);
  box-shadow: 0 0 1px rgba(245, 30, 30, 0);
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -webkit-transition-property: box-shadow, transform;
  transition-property: box-shadow, transform;
}
.hvr-grow-shadow:hover, .hvr-grow-shadow:focus, .hvr-grow-shadow:active {
  box-shadow: 0 20px 20px -10px rgba(44, 128, 225, 0.5);
  -webkit-transform: scale(1.5);
  transform: scale(1.3);
}
  </style>
  