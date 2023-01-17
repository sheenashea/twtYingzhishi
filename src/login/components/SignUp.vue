<template>
    <div class = "form-wrapper">
    <form class = "form-text" method="" action="">
        <h2>Sign Up</h2>
        <span style="font-size:small">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod</span>
            <div class = "container">
                 Email<br><!--邮箱-->
                 <input class="input" type="email" name="emailAddress" v-model="signUpForm.emailAddress" required><br>
                 Username<br><!--用户名-->
                 <input class="input" type="text" name="username" v-model="signUpForm.username" required pattern="^[0-9a-zA-Z~@_/+:]{1,32}$"><br>
                 Password<br><!--密码-->
                 <input class="input" type="password" name="password" v-model.lazy="signUpForm.password" required pattern="^[0-9a-zA-Z~@_/+:]{6,32}$"><br>
                 Confirm Password<br><!--确认密码-->
                 <input class="input" type="password" name="confirm" v-model.lazy="signUpForm.confirm" required pattern="^[0-9a-zA-Z~@_/+:]{6,32}$"><br>
            </div>
        <button class="btn">Sign Up</button><!--提交-->
        <div class="bottom">Already have an account?
            <a href="javascript:void(0);" @click="signUpSkip()">Log in</a>
        </div>
    </form>
    <span>{{ message }}</span>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
//import axios from 'axios'
export default defineComponent({
    name:'SignUp',
    data () {
        return{
            signUpForm:{
                emailAddress:'',
                username:'',
                password:'',
                confirm:''
            },
            message:'',//返回注册是否成功的信息
        };
    },
    methods:{
        signUpSkip(){
            this.$emit('skipLink2');
        }
    }
})
</script>

<style>
  @import './login.css';
</style>