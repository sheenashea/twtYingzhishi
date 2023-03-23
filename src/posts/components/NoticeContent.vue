<template>
    <div class="notice-box">
        <p class="notice">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;禁止发布任何违法违禁之物，严禁宣传发布交易国家濒危珍惜保护动物骨及角制品。
            如若违反，管理员有权将所发内容屏蔽、删除，并对发言者作出禁言、帐号封禁等处理，
            情况严重者将提交由相关监督部门处理；禁止发布任何商业贴、软广告、招代理、求加盟
            等社区主题，禁止发布低劣恶俗的主题帖，禁止留手机号、微信号、
            微博、微店、二维码等任何其他平台的联系方式。
        </p>
        <div class="btut">
        <button class="btu" @click="completeread()">阅读完毕</button>
       </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
    name:'NoticeContent',
    methods:{
        completeread(){
            this.$emit('completeread');
        }
    }
})
</script>

<style>
.notice-box{
    position:absolute;
    right:37%;
    top:25%;
    background-color: white;
    border: 2px solid gray;
    border-radius: 3px;
    width:300px;
    display: flex;
    flex-direction: column;
}

.notice {
    margin: 20px;
    margin-top: 50px;
    margin-bottom: 30px;
}

.btu{
    border: 0;
    border-radius: 5px;
    font-size:10px;
    font-weight: 500;
    color:#fff;
    background-color: red;
    cursor:pointer;
    letter-spacing: 2px;
    width: 130px;
    height: 30px;
}

.btut {
    text-align: center;
    margin-bottom: 20px;
}
</style>