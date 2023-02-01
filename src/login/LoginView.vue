<template>
    <div class="navigate">
        <ul>
          <li><a href="javascript:void(0);"><i class="iconfont">&#xe60b;</i></a></li>
          <li><a href="/">Return to HomePage</a></li>
        </ul>
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
           showLogin:true
       }
    },
    methods:{
        skipLink(){
            this.showLogin = !this.showLogin;
            //console.log(this.showLogin); 
        }
    }
})
</script>

<style>
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

</style>