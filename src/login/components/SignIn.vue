<template>
    <div class = "form-wrapper">
    <el-form class = "form-text" :model="loginForm">
        <h2>Log in</h2>
        <span style="font-size:small">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod</span>
            <div class = "container"><!--用户名-->
                 Username<br>
                 <el-form-item prop="username">
                 <input class="input" type="text" name="username" v-model="loginForm.username">
                 </el-form-item><br>
                 Password<br><!--密码-->
                 <el-form-item prop="username">
                 <input class="input" type="password" name="password" v-model.lazy="loginForm.password">
                 </el-form-item><br>
                 <span class="details"><!--是否记住密码-->
                 <input class="checkbox" type="checkbox" name="rememberPassword" value="rememberPassword" v-model="loginForm.needToRemember">Remember Me
                 <a href="javascript:;" style="float:right">Forget Login Details?</a><!--忘记密码的页面还没有-->
                 </span>
            </div>
        <div class="btn" @click="submitlogininfo()">Login</div><!--提交-->
        <div class="bottom">Don't have an account?
            <a href="javascript:void(0);" @click="signInSkip()">Sign Up</a>
        </div>
    </el-form>
    <br>
    <span>{{ message }}</span>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
//import request from '@/utils/request';
import axios from 'axios'
export default defineComponent({
    name:'SignIn',
    data(){
        return {
            loginForm:{
                username: '',
                password: '',
                needToRemember:[]
            },
            message:''
        }
    },
    methods:{
        signInSkip(){
            this.$emit('skipLink1');
        },
        async submitlogininfo(){
            //校验
            if(this.check()){
            //登录信息发送begin
            //本地mock测试接口
            console.log('http://127.0.0.1:4523/m1/2234118-0-default/user/list?username='+this.loginForm.username+'&password='+this.loginForm.password);
            await axios
                 .get('http://127.0.0.1:4523/m1/2234118-0-default/user/list?username='+this.loginForm.username+'&password='+this.loginForm.password)
                 .then((successResponse) => {//回调函数当get成功后执行
                    console.log(1);
                    console.log(successResponse);
                 if (successResponse.data.code === 200) {//如果返回的状态码是200
                 this.init(); 
                 this.$router.replace({
                  path: '/'
                 });
                  }
                 if (successResponse.data.code === 400 ) {//如果返回状态码为400
                    this.open();
                    this.$router.replace({
                  path: '/login'
                 });
                 }
                 })
                 .catch((failResponse) => {
                 console.log(2);
                 this.open();
             });
           //end
            }
        },
        open(){
            this.message = "登录失败"
        },
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
        }
    }
})
</script>

<style>
   @import './login.css'
</style>