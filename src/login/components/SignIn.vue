<template>
    <div class = "form-wrapper">
    <form class = "form-text" :model="loginForm">
        <h2>Log in</h2>
        <span style="font-size:small">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod</span>
            <div class = "container"><!--用户名-->
                 Username<br>
                 <input class="input" type="text" name="username" v-model="loginForm.username"><br>
                 Password<br><!--密码-->
                 <input class="input" type="password" name="password" v-model.lazy="loginForm.password"><br>
                 <span class="details"><!--是否记住密码-->
                 <input class="checkbox" type="checkbox" name="rememberPassword" value="rememberPassword" v-model="loginForm.needToRemember">Remember Me
                 <a href="javascript:;" style="float:right" @click="skipToForget()">Forget Login Details?</a>
                 </span>
            </div>
        <div class="btn" @click="submitlogininfo()">Login</div><!--提交-->
        <div class="bottom">Don't have an account?
            <a href="javascript:void(0);" @click="signInSkip()">Sign Up</a>
        </div>
    </form>
    <br>
    <span>{{ message }}</span>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import{ getCookie,setCookie } from '../../utils/cookie'
import{ login } from '../../api/sign'
const Base64 = require('js-base64').Base64
export default defineComponent({
    name:'SignIn',
    data(){
        return {
            loginForm:{
                username: '',
                password: '',
                needToRemember: [] as string []
            },
            message:'',
            userToken:''
        }
    },
    created () {
        // 在页面加载时从cookie获取登录信息
        let username = getCookie("account")
        console.log(username);
        console.log(1);
        let password = Base64.decode(getCookie("remember"))
        // 如果存在赋值给表单，并且将记住密码勾选
        if(username){
            this.loginForm.username = username
            this.loginForm.password = password
            this.loginForm.needToRemember = ["rememberPassword"]
        }
    },
    methods:{
        signInSkip(){
            this.$emit('skipLink1');
        },
        // //此处开始重写
        // async submitlogininfo(){
        //     //校验
        //     if(this.check()){
        //     //登录信息发送begin
        //     const form = {
        //         loginName: this.loginForm.username,
        //         passWord: this.loginForm.password
        //     }
        //     await login(form)
        //          .then((successResponse) => {//回调函数当get成功后执行
        //             console.log(1);
        //             console.log(successResponse);
        //          if (successResponse.code === 200) {//如果返回的状态码是200
        //          this.userToken = successResponse.token
        //          //localStorage.setItem('token',this.userToken)
        //          this.setUserInfo() 
        //          this.init();
        //          this.$router.replace({
        //           path: '/'
        //          });
        //           }
        //          if (successResponse.code === 400 ) {//如果返回状态码为400
        //             this.open();
        //             this.$router.replace({
        //           path: '/login'
        //          });
        //          }
        //          })
        //          .catch((failResponse) => {
        //          console.log(2);
        //          this.open();
        //      });
        //    //end
        //     }
        // },
        // open(){
        //     this.message = "登录失败"
        // },
        check(){
            let okk = true;
            const checkuserName = /^[a-zA-Z0-9_-]{1,16}$/;
            if(!checkuserName.test(this.loginForm.username))
            {
                this.message = "用户名格式错误"
                okk = false;
            }else{
            const ckeckpassword = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,15}$/;
            if(!ckeckpassword.test(this.loginForm.password)){
                this.message = "密码格式错误"
                okk = false;
            }}
            return okk;
        },
        init(){
            this.message = ''
            this.loginForm.username = ''
            this.loginForm.password = ''
        },
        // 储存表单信息
        setUserInfo: function () {
            // 判断用户是否勾选记住密码，如果勾选，向cookie中储存登录信息，
            // 如果没有勾选，储存的信息为空
            if(this.loginForm.needToRemember.length){
                setCookie("account",this.loginForm.username)
                debugger
                // base64加密密码
                let passWord = Base64.encode(this.loginForm.password)
                setCookie("remember",passWord)    
            }else{
                setCookie("account","")
                setCookie("remember","") 
           }
        }, 
        //本地重写submitlogininfo()
        submitlogininfo () {
            if(this.loginForm.username === 'user' && this.loginForm.password === '1234abcd')
            {
                this.userToken = new Date().getTime().toString();
                sessionStorage.setItem('token',this.userToken);
                sessionStorage.setItem('username',this.loginForm.username)
                this.setUserInfo();
                this.init();
                this.$router.replace({
                    path: '/index'
                });
            }else{
                this.message = "登录失败"
            }
        },
        skipToForget () {
            this.$emit('skipLink4');
        }
    }
})
</script>

<style>
   @import './login.css';
</style>

<!--注释掉了存储token，记得添回来-->