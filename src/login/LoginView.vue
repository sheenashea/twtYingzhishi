<template>
    <div class="navigate">
        <ul>
          <li><a href="javascript:void(0);"><i class="iconfont" @click="drop()">&#xe60b;</i></a></li>
          <li><a href="/index">Return to HomePage</a></li>
        </ul>
    </div>
    <div :class="dropdown">
       <div class="dropdown-menu">
          <a href="/radiers" class="menuItem" >攻略爆料</a>
          <a href="/deck" class="menuItem" >卡组排行</a>
          <a href="/posts" class="menuItem">帖子页面</a>
          <a href="/mypage" class="menuItem" >个人中心</a>
       </div>
    </div>
    <div v-show="showLogin" class="label">
         <SignIn @skipLink1="skipLink()"></SignIn>
    </div>
    <div v-show="!showLogin" class="label">
        <SignUp @skipLink2="skipLink()"></SignUp>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import SignIn from './components/SignIn.vue'
import SignUp from './components/SignUp.vue'
export default defineComponent ({
    name: 'LoginView',
    components: {
        SignIn,
        SignUp
    },
    data(){
       return{
           showLogin: true,
           dropdown: 'dropdown-content',
       }
    },
    methods:{
        skipLink(){
            this.showLogin = !this.showLogin;
            //console.log(this.showLogin); 
        },
        drop () {
            if(this.dropdown == 'dropdown-content') this.dropdown = 'dropdown-content2';
            else this.dropdown = 'dropdown-content'
        },
    }
})
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
       background-color: aliceblue;
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
</style>