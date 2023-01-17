<template>
    <div class = "form-wrapper">
    <form class = "form-text" method="" action="">
        <h2>Log in</h2>
        <span style="font-size:small">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod</span>
            <div class = "container"><!--用户名-->
                 Username<br>
                 <input class="input" type="text" name="username" v-model="loginForm.username" required pattern="^[0-9a-zA-Z~@_/+:]{1,32}$"><br>
                 Password<br><!--密码-->
                 <input class="input" type="password" name="password" v-model.lazy="loginForm.password" required pattern="^[0-9a-zA-Z~@_/+:]{6,32}$"><br>
                 <span class="details"><!--是否记住密码-->
                 <input class="checkbox" type="checkbox" name="rememberPassword" value="rememberPassword" v-model="loginForm.needToRemember">Remember Me
                 <a href="javascript:;" style="float:right">Forget Login Details?</a><!--忘记密码的页面还没有-->
                 </span>
            </div>
        <button class="btn">Login</button><!--提交-->
        <div class="bottom">Don't have an account?
            <a href="javascript:void(0);" @click="signInSkip()">Sign Up</a>
        </div>
    </form>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
    name:'SignIn',
    data(){
        return {
            loginForm:{
                username: '',
                password: '',
                needToRemember:[]
            },
        }
    },
    methods:{
        signInSkip(){
            this.$emit('skipLink1');
        }
    }
})
</script>

<style>
   @import './login.css'
</style>