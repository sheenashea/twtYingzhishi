<template>
    <div class="notice-box">
        <p>当粉丝与你互动，而你也回应他们时，算法就会开始对你有利。你不仅可以从你的粉丝那里获得有用的信息和反馈，
            与他们接触将在短期和长期内帮助你。你的页面应该代表你作为个人和品牌的成长，你的粉丝会不断向你传达他们
            是否喜欢你正在做的事情，并希望根据他们的参与和评论水平看到更多的东西。尽可能保持真实的自我，同时也创
            造你的粉丝所期望和喜爱的内容。这将使你在未来几年创造一个忠诚的基础，你建立的联系很可能转化为现实生活
            中的客户和关系。
        </p>
        <button class="btu" @click="completeread()">阅读完毕</button>
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
    background-color: lightyellow;
    border: 2px solid yellow;
    border-radius: 3px;
    width:300px;
    display: flex;
    flex-direction: column;
}
.btu{
    border: 0;
    border-radius: 5px;
    font-size:10px;
    font-weight: 500;
    color:#fff;
    background-color: sandybrown;
    cursor:pointer;
    letter-spacing: 2px;
}
</style>