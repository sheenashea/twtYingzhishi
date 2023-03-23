<template>
    <div class = "form-wrapper">
    <form class = "form-text" :model="signUpForm">
        <h2>Sign Up</h2>
        <span style="font-size:small">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod</span>
            <div class = "container">
                 Email<br><!--邮箱-->
                 <input class="input" type="email" name="emailAddress" v-model="signUpForm.emailAddress"><br>
                 Username<br><!--用户名-->
                 <input class="input" type="text" name="username" v-model="signUpForm.username"><br>
                 Password<br><!--密码-->
                 <input class="input" type="password" name="password" v-model.lazy="signUpForm.password"><br>
                 Confirm Password<br><!--确认密码-->
                 <input class="input" type="password" name="confirm" v-model.lazy="signUpForm.confirm"><br>
            </div>
        <div class="btn" @click="register()">Sign Up</div><!--提交-->
        <div class="bottom">Already have an account?
            <a href="javascript:void(0);" @click="signUpSkip()">Log in</a>
        </div>
    </form>
    <br>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { ElMessage } from 'element-plus';
import { register } from '../../api/sign'

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
        };
    },
    methods:{
        signUpSkip(){
            this.$emit('skipLink2');
        },
        check(){
            let okk = true;
            if(this.signUpForm.confirm!==this.signUpForm.password){
                //this.message = "两次输入密码不一致"
                ElMessage({
                    message:'两次输入的密码不一致',
                    duration:2000,
                })
                okk = false;
            }else{
            const checkuserName = /^[a-zA-Z0-9_-]{1,16}$/;
            if(!checkuserName.test(this.signUpForm.username))
            {
                //this.message = "用户名长度为1到16";
                ElMessage({
                    message:'用户名长度为1到16',
                    duration:2000,
                })
                okk = false;
            }else{
            const ckeckpassword = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,15}$/;
            if(!ckeckpassword.test(this.signUpForm.password)){
                //this.message = "密码长度为6到15且至少包含一个数字和字母"
                ElMessage({
                    message:'密码长度为6到15且至少包含一个数字和字母',
                    duration:2000,
                })
                okk = false;
            }}}
            return okk;
        },
        async register(){
            if(this.check()){
            const form = {
                loginName: this.signUpForm.username,
                passWord: this.signUpForm.password,
                email: this.signUpForm.emailAddress
            }
          await register(form),
          //this.message = '注册成功'
          ElMessage({
                    message:'注册成功',
                    duration:2000,
                })
          setTimeout(() => {
            this.signUpForm.emailAddress = ''
            this.signUpForm.username = ''
            this.signUpForm.password = ''
            this.signUpForm.confirm = ''
            this.signUpSkip();
          }, 1000);
        }
    }
    }
})
</script>

<style>
  @import './login.css';
</style>