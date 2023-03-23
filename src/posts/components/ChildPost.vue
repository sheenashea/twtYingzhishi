<template>
    <div class="comments">
        <div class="first-box" v-for="item in comments" :key="item.id">
        <div class="first">
           <div style="display:flex;flex-direction:column">
           <a href="javascript:;" class="first-img">
              <img src= '../../assets/profile.jpg' />
           </a>
           <a href="javascript:;" style="font-size:xx-small;flex-shrink: 1;user-select: none;" ></a>
           </div>
           <div class="info">
              <p class="first-username">{{ item.author.loginName }}</p>
              <p class="first-data"> 2023-3-21 </p>
           </div>
           <div class="first-content">
               <p class="first-comment">{{ item.comment }}</p>
           </div>
           <div class="first-right">
                <i class="iconfont like" :class="{ 'bef':!item.likeStatus,'aft':item.likeStatus }" @click="changeFatherLike(item)">&#xe61b;</i>{{ item.likeCount }}
                <i class="iconfont dislike" :class="{ 'bef':!item.dislikeCount,'aft':item.dislikeCount }" @click="changeFatherDislike(item)">&#xeb21;</i>{{ item.dislikeCount }}
                <i class="iconfont comm" @click="show1(item)">&#xe607;</i>{{ item.replyCount }}
           </div>
    
           </div>
           <div class="writtte" v-show="item.showinput">
                <ReplyPost :id1 = 1 :id2 = "item.author.loginName" @cancel = "cancel(item)" @update ="update($event, item)"></ReplyPost>
            </div>
           <div>
                
                    <div class="second" v-for="son in item.replyList" :key="son.id">
                        <div class="lis">
                        <div class="topp">
                            <a href="JavaScript:;" class="second-img">
                                <img src="../../assets/profile.jpg">
                            </a>
                        </div>
                            <div class="info">
                                <p>
                                <span class="second-username">{{ son.author.loginName }}</span>
                                <span style="font-size:smaller;font-family:Arial, Helvetica, sans-serif">&nbsp;回复&nbsp;{{ son.target.loginName }}</span>
                                </p>
                                <div class="second-data">2023-3-21</div>
                            </div>
                            <div class="second-content">
                                <p class="second-comment">{{ son.reply }}</p>
                            </div>
                            <div class="second-right">
                                 <i class="iconfont like" :class="{ 'bef':!son.likeStatus,'aft':son.likeStatus }" @click="changeSonLike(son)">&#xe61b;</i>{{ son.likeCount }}
                                 <i class="iconfont dislike" :class="{ 'bef':!son.dislikeCount,'aft':son.dislikeCount }" @click="changeSonDislike(son)">&#xeb21;</i>{{ son.dislikeCount }}
                                 <i class="iconfont comm" @click="show2(item, son)">&#xe607;</i>
                            </div>
                    
                            </div>
                            <div class="writte" v-show="son.showinput">
                                  <ReplyPost :id1 = 2 :id2 = "son.author.loginName" @cancel = "cancel(son)" @update ="update($event, item)"></ReplyPost>
                            </div>
                    </div>
                 
           </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ReplyPost from './ReplyPost.vue'
import type { replyList, commentVoList } from '@/api/types';

export default defineComponent({
    name:'ChildPost',
    components:{
        ReplyPost
    },
    props:['comments'],
    data () {
        return{
          change: false,
          parentId: 0,
          currentId: 0,
        }
    },
     methods:{
        //这四个函数需要修改
        changeFatherLike( i:commentVoList ){
            if(i.likeStatus) i.likeCount--;
            else i.likeCount++;
            i.likeStatus = !i.likeStatus;
        },
        changeFatherDislike( i:commentVoList ){
            if(i.dislikeStatus) i.dislikeCount--;
            else i.dislikeCount++;
            i.dislikeStatus = !i.dislikeStatus;
        },
        changeSonLike(  i:replyList ){
            if(i.likeStatus) i.likeCount--;
            else i.likeCount++;
            i.likeStatus = !i.likeStatus;
        },
        changeSonDislike( i:replyList){
            if(i.dislikeStatus) i.dislikeCount--;
            else i.dislikeCount++;
            i.dislikeStatus = !i.dislikeStatus;
        },
        //这两个函数实现 输入框 
        show1 (i: commentVoList) {
            i.showinput = !i.showinput;
        },
        show2 (i: commentVoList, j : replyList) {
            j.showinput = !j.showinput;
        },
        cancel (i: commentVoList) {
            i.showinput = false;
        },
        update (e: replyList, i:commentVoList) {
             i.replyList.push(e);
             i.replyCount++;
        }
     },
})
</script>

<style>
.comments{
    margin-top:20px;
    flex:1;
    width:60%;
    margin-left: 300px;
    font-family:'Times New Roman', Times, serif;
}
.first-box{
    display: flex;
    flex-direction: column;
}
.first{
    display: flex;
    position:relative;
    padding: 10px 10px 0px 0;
    border:1px dashed lightblue;
    border-top: none; 
    border-left: none; 
    border-right: none;
}
.first-img{
    flex:1;
    text-align: center;
    user-select: none;
}
.first-box img{
    width:50px;
    height:50px;
    border-radius: 50%;
}
.first-content,
.second-content{
    flex:8;
    text-align: left;
}
.first-username,
.second-username{
    color:#504f4f;
    margin-left: 6px;
    font-weight: bolder;
}
.first-time,
.second-time{
    color:gray;
    margin-right: 0px;
}
.first-comment,
.second-comment{
    margin-top:12px;
    margin-left: 37px;
}
.first-right{
    position:absolute;
    right:1%;
    margin-top:10px;
    display: flex;
    user-select: none;
    font-family: 'Courier New', Courier, monospace;
}
.second{
    margin-top:7.5px;
    margin-left:85px;
}
.lis{
    padding:10px 10px 10px 0;
    border-bottom: 1px solid rgb(237,237,237);
    display: flex;
    margin-left:30px;
    background-color: #f3f3f3;
}
.topp{
    display: flex;
    position: relative;
    flex:1;
}
.second-img{
    flex:1;
    text-align: center;
    width:30px;
    height:30px;
    user-select: none;
}
.info{
    flex:1;
}
.second-right{
    position:absolute;
    right:20%;
    margin-top:10px;
    display: flex;
    user-select: none;
    font-family: 'Courier New', Courier, monospace;
}
a{
    text-decoration: none;
}
a:hover{
    color:darkred;
    text-decoration: underline;
}
.bef{
    color: black;
}
.aft{
    color:red;
}
.writte{
    margin-top:5px;
    margin-left: 17px;
}
.writtte{
    margin-top:5px;
    margin-left: -20px;
}
</style>