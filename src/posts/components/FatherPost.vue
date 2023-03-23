<template>
    <div class="post">
        <div class="card">
            
            <div style="overflow:hidden">
                <div class="userinfo">
                    <a href="javascript:void(0);">
                    <img class="photo" :src="pic">
                    </a>
                    <h3 style="margin-bottom:0%;margin-left: 300px;">LV:114</h3>
                </div>
                <div class="head">
                    <h2>{{ mainPost.title }}</h2>
                    <span>作者:{{ authorInfo.loginName }}</span><br>
                    <span>发帖时间:{{ mainPost.createTime }}</span><br>
                    <span>ip: 天津 </span>
                </div>
            </div>
        </div>
        <div class="content">
         <p>&nbsp;&nbsp;&nbsp;&nbsp;{{ mainPost.content }}
        </p>
        </div>
        <div class="footer">
            <div class="icon">
                <i class="iconfont like" :class="{ 'bef':!authorInfo.likeStatus,'aft':authorInfo.likeStatus }" @click="changelike(authorInfo)">&#xe61b;</i>{{ authorInfo.likeCount }}
                <i class="iconfont dislike" :class="{ 'bef':!authorInfo.dislikeStatus,'aft':authorInfo.dislikeStatus }" @click="changedislike(authorInfo)">&#xeb21;</i>{{ authorInfo.dislikeCount }}
                <i class="iconfont comm" @click="show()">&#xe607;</i>{{ mainPost.commentCount }}
            </div>
        </div>
        <div class="write" v-show="whetherShow">
             <ReplyPost :id1 = 0 :id2 = '0' @update="update($event)" @cancel ="cancel()"></ReplyPost>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import type { addComment, authorList, commentVoList } from '@/api/types';
import ReplyPost from './ReplyPost.vue';

export default defineComponent({
    name:'FatherPost',
    components:{ ReplyPost },
    props:['mainPost', 'authorInfo'] ,
    data () {
        return {
           whetherShow: false,
           pic: require('../../assets/' + this.authorInfo.avatarurl)
        }
    },

    methods: {
        changelike (s: authorList) {
           if(s.likeStatus) s.likeCount--;
           else s.likeCount++;
           s.likeStatus = !s.likeStatus;
        },
        changedislike (s: authorList) {
            if(s.dislikeStatus) s.dislikeCount--;
            else s.dislikeCount++;
            s.dislikeStatus = !s.dislikeStatus;
        },
        update (e: commentVoList) {
            this.$emit('update', e)
        },
        show () {
            this.whetherShow = !this.whetherShow;
        },
        cancel () {
            this.whetherShow = false
        }
    },
})
</script>

<style>
.post{
    flex:2;
    font-family: 'Courier New', Courier, monospace;
    position: relative;
    display: flex;
    flex-direction: column;
}
.card{
    overflow: hidden;
    display: flex;
    flex-direction: column;
}
.top{
    background-color: lightgray;
    flex-shrink: 1;
    overflow: hidden;
    height: 30px;
    margin-top:0px;
}
.userinfo{
    width:50%;
    height: 100%;
    float: left;
}
.photo{
    height: 80px;
    width:80px;
    margin-top: 0px;
    user-select: none;
    margin-left: 300px;
}
.head{
    width:50%;
    float:right;
    height: 100%;
    text-align: left;
}
.content{
    margin-left: 300px;
    margin-right: 300px;
    margin-top: 50px;
}
.footer{
    margin-top:20px;
}
.icon{
    text-align: left;
    margin-left: 310px;
    font-size:large;
    user-select: none;
}
.like{
    user-select: none;
}
.dislike{
    margin-left: 20px;
    user-select: none;
}
.comm{
    margin-left: 20px;
    user-select: none;
}
.bef{
    color: black;
}
.aft{
    color:red;
}
.write{
    margin-left: 300px;
    margin-top:37px;
}
</style>