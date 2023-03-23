<template>
    <div class = "form-wrapper">
    <form class = "form-text" :model="forgetForm">
        <h2>Refind Password</h2>
        <span style="font-size:small">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod</span>
            <div class = "container">
                 Email<br><!--邮箱-->
                 <input class="input" type="email" name="emailAddress" v-model="forgetForm.emailAddress"><br>
                 Username<br><!--用户名-->
                 <input class="input" type="text" name="username" v-model="forgetForm.username"><br>
                 Password<br><!--密码-->
                 <input class="input" type="password" name="password" v-model.lazy="forgetForm.password"><br>
                 Confirm Password<br><!--确认密码-->
                 <input class="input" type="password" name="confirm" v-model.lazy="forgetForm.confirm"><br>
            </div>
        <div class="btn" @click="submit()">Submit</div><!--提交-->
        <div class="bottom">Remember your account?
            <a href="javascript:void(0);" @click="forgetSkip()">Log in</a>
        </div>
    </form>
    <br>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { submit } from '../../api/sign'
import { ElMessage } from 'element-plus';

export default defineComponent({
    name:'SignUp',
    data () {
        return{
            forgetForm:{
                emailAddress:'',
                username:'',
                password:'',
                confirm:''
            },
        };
    },
    methods:{
        forgetSkip(){
            this.$emit('skipLink3');
        },
        check(){
            let okk = true;
            if(this.forgetForm.confirm!==this.forgetForm.password){
                //this.message = "两次输入密码不一致"
                ElMessage({
                    message:'两次输入密码不一致',
                    duration:2000,
                })
                okk = false;
            }else{
            const checkuserName = /^[a-zA-Z0-9_-]{1,16}$/;
            if(!checkuserName.test(this.forgetForm.username))
            {
                //this.message = "用户名长度为1到16";
                ElMessage({
                    message:'用户名长度为1到16',
                    duration:2000,
                })
                okk = false;
            }else{
            const ckeckpassword = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,15}$/;
            if(!ckeckpassword.test(this.forgetForm.password)){
                //this.message = "密码长度为6到15且至少包含一个数字和字母"
                ElMessage({
                    message:'密码长度为6到15且至少包含一个数字和字母',
                    duration:2000,
                })
                okk = false;
            }}}
            return okk;
        },
        async submit(){
            if(this.check()){
            const form = {
                loginName: this.forgetForm.username,
                passWord: this.forgetForm.password,
                email: this.forgetForm.emailAddress
            }
          await submit(form),
          //this.message = '找回密码成功'
          ElMessage({
                    message:'找回密码成功',
                    duration:2000,
                })
          setTimeout(() => {
            this.forgetForm.emailAddress = ''
            this.forgetForm.username = ''
            this.forgetForm.password = ''
            this.forgetForm.confirm = ''
            this.forgetSkip();
          }, 1000);
        }
    }
    }
})
</script>

<style>
  @import './login.css';
</style>