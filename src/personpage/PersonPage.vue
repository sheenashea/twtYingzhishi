<template>
<div>
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
          <a href="/login" class="menuItem" @click="removeLogin()">退出登录</a>
       </div>
    </div>
    <!--导航栏结束，以下是个人中心-->
    <div>
        <div class="PersonTop">
           <div class="PersonTop_img">
              <img v-img-preview src="../assets/1.jpg" style="width:130px;height:130px;border-radius: 20px;"/>
           </div>
           <div class="PersonTop_text">
               <div class="user_text">
                <div class="user_name">
                    <span>{{ userInfo.username }}</span>
                </div>
                <div class="user_anniu">
                    <button class="el-icon-edit" @click="click()">
                        {{ operate }}
                    </button>
                </div>
               </div>
               <div class="popular">
                  <div style="font-weight: bolder;">{{ userInfo.totalLikenum }}</div>
                  <span style="color:gray">&nbsp;&nbsp;获赞&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;</span>
                  <div style="font-weight: bolder;">{{ userInfo.totalDislikenum }}</div>
                  <span style="color:gray">&nbsp;&nbsp;被踩</span>
               </div>
           </div>
        </div>
        <!--主体部分-->
        <div class="person_body">
            <span class="margin">个人简介</span>
            <div class="body">
                <div class="one">用户密码</div>
                <div class="two" v-if="!toEdit">{{ password }}</div>
                <div class="two" v-else>
                    <input type="password" v-model="userInfo.passWord" placeholder="用户密码">
                </div>
                <div class="one">用户名</div>
                <div class="two" v-if="!toEdit">{{ userInfo.username }}</div>
                <div class="two" v-else>
                    <input v-model="userInfo.username" placeholder="用户名">
                </div>
                <div class="one">头像</div>
                <div class="two">
                    <img src="../assets/1.jpg">
                </div>
                <div class="one">ip地址</div>
                <div class="two" >{{ userInfo.address }}</div>
                <div class="one">LV</div>
                <div class="two">{{ userInfo.level }}</div>
                <div class="one">email</div>
                <div class="two" v-if="!toEdit">{{ userInfo.email }}</div>
                <div class="two" v-else>
                    <input v-model="userInfo.email" placeholder="email">
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { getPersonPage } from '../api/person'
import type { UserInfoRes } from '@/api/types'
export default defineComponent({
    name: 'PersonPage',
    data () {
          return {
                dropdown: 'dropdown-content',
                userInfo: {} as UserInfoRes,
                toEdit: false,
                operate: "编辑",
                password: '******'
           }
    },
    mounted () {
        if(sessionStorage.getItem('username') != undefined)
        this.userInfo = getPersonPage();
        
    },
    methods: {
        drop () {
            if(this.dropdown == 'dropdown-content') this.dropdown = 'dropdown-content2';
            else this.dropdown = 'dropdown-content'
        },
        removeLogin () {
            sessionStorage.removeItem('token')
            sessionStorage.removeItem('username')
        },
        click () {
            console.log(this.userInfo.username?.length);
            
            if (this.toEdit && this.check( this.userInfo.username ,this.userInfo.passWord)) {
                
                this.operate = "编辑";
                this.toEdit = false;
                
                //sessionStorage.setItem("username",this.userInfo.username);
            }
            else if(!this.toEdit){
                this.operate = "保存"
                this.toEdit = true;
            }else {
                alert('用户名或密码不合规范，修改失败')
            }
        },
        check(a: string | undefined, b:string){
            let okk = true;
            const checkuserName = /^[a-zA-Z0-9_-]{1,16}$/;
            if(!a) okk = false;
            else if(a && !checkuserName.test(a))
            {
                console.log(1);
                
                okk = false;
            }else{
            const ckeckpassword = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,15}$/;
            if(!ckeckpassword.test(b)){
                console.log(2);
                
                okk = false;
            }}
            return okk;
        },
    }
})

</script>

<style lang = 'less' scoped>
   @import './theme.scss';

.PersonTop {
    width: 1000px;
    height: 140px;
    padding-top: 20px;
    background-color: white;
    margin-top: 53px;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    border-radius: 5px;
}

.PersonTop_img{
     width:132px;
     height:132px;
     background-color: #ccc;
     margin-left: 20px;
     overflow: hidden;
     border-radius: 20px;
}
.PersonTop_text {
     height: 120px;
     width: 880px;
     margin-left: 20px;
     display: flex;
}

.user_text{
      width: 60%;
      height: 100%;
      line-height: 30px;
      margin-top: 37px;
}

.user_name{
    font-weight: bolder;
    font-family: 'Courier New', Courier, monospace
}

.user_anniu{
  margin-top: 27.5px;
}

button {
    width: 84px;
    border-radius: 20px;
    border: 2px solid #0e92b3;
    background-color: white;
}

.el-icon-edit{
    font-family: 'Courier New', Courier, monospace;
   &:hover{
    background-image: linear-gradient(120deg,#84fab0 0%,#8fdef4 100%);
   }
}

.popular {
    margin-top :60px;
    font-size:medium;
    display: flex;
    font-family: 'Courier New', Courier, monospace;
}

.person_body {
    width: 1000px;
    margin-top: 270px;
    display: flex;
    flex-direction: column;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 5px;
    font-family: 'Courier New', Courier, monospace;
}

.margin {
    font-weight: bolder;
    color: gray;
    text-shadow: 1px 1px 0.5px black;
    font-size: large;
}

.body {
    display: inline-grid;
    height: 330px;
    width: 1000px;
    margin-top: 40px;
    grid-gap: 7px;
    border-radius: 50px;
    grid-template-columns:repeat(4,1fr); // 显示为三列每一列宽度100px 
    grid-template-rows:repeat(3,1fr);  //同上
}

.one{
    padding: 3px;
    margin: 0px;
    text-align: center;
    font-size: medium;
    font-weight: normal;
    line-height: 40px;
    border-bottom: 1px solid;
    border-image: -webkit-linear-gradient(-270deg, rgba(255, 255, 255, 0.00) 0%, #00BBF2 20%, rgba(255, 255, 255, 0.00) 99%) 2 2 2 2;
    border-image: -moz-linear-gradient(-270deg, rgba(255, 255, 255, 0.00) 0%, #00BBF2 20%, rgba(255, 255, 255, 0.00) 99%) 2 2 2 2;
    border-image: linear-gradient(-270deg, rgba(255, 255, 255, 0.00) 0%, #00BBF2 20%, rgba(255, 255, 255, 0.00) 99%) 2 2 2 2;
    border-radius: 17px;
}

.two {
    padding: 3px;
    margin: 0px;
    text-align: center;
    font-size: medium;
    font-weight: bold;
    line-height: 40px;
    border-bottom: 1px solid;
    border-image: -webkit-linear-gradient(-270deg, rgba(255, 255, 255, 0.00) 0%, #e4507a 20%, rgba(255, 255, 255, 0.00) 99%) 2 2 2 2;
    border-image: -moz-linear-gradient(-270deg, rgba(255, 255, 255, 0.00) 0%, #e4507a 20%, rgba(255, 255, 255, 0.00) 99%) 2 2 2 2;
    border-image: linear-gradient(-270deg, rgba(255, 255, 255, 0.00) 0%, #e4507a 20%, rgba(255, 255, 255, 0.00) 99%) 2 2 2 2;
    border-radius: 17px;
}

.body img {
    width:75px;
    height: 75px;
}

input{
  border-radius: 3px;
  
}

</style>