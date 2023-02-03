<template>
    <div class="comments">
        <div class="first-box" v-for="item in commentsed" :key="item.fatherComment.firstComment.id">
        <div class="first">
           <div style="display:flex;flex-direction:column">
           <a href="javascript:;" class="first-img">
              <img :src="item.fatherComment.firstComment.userinfo.photo"/>
           </a>
           <a href="javascript:;" style="font-size:xx-small;flex-shrink: 1;user-select: none;" @click="showSon(item)">{{ item.fatherComment.showSonsInfo }}</a>
           </div>
           <div class="info">
              <p class="first-username">{{ item.fatherComment.firstComment.userinfo.username }}</p>
              <p class="first-data">{{ item.fatherComment.firstComment.data }}</p>
           </div>
           <div class="first-content">
               <p class="first-comment">{{ item.fatherComment.firstComment.content }}</p>
           </div>
           <div class="first-right">
                <i class="iconfont like" :class="{ 'bef':!item.fatherComment.firstComment.whetherLike,'aft':item.fatherComment.firstComment.whetherLike }" @click="changeFatherLike(item)">&#xe61b;</i>{{ item.fatherComment.firstComment.popular.likenum }}
                <i class="iconfont dislike" :class="{ 'bef':!item.fatherComment.firstComment.whetherDislike,'aft':item.fatherComment.firstComment.whetherDislike }" @click="changeFatherDislike(item)">&#xeb21;</i>{{ item.fatherComment.firstComment.popular.dislikenum }}
                <i class="iconfont comm" @click="showf(item)">&#xe607;</i>
           </div>
           </div>
           <div class="writte" v-show="item.fatherComment.showinput">
                 <ReplyPost @cancel="cancelf(item)" :id1="item.fatherComment.firstComment.id" :id2 = "emp" @update="update($event)"></ReplyPost>
           </div>
           <div v-show="item.fatherComment.showSons">
                
                    <div class="second" v-for="son in item.secondComment" :key="son.soncomments.mainpostinfo.id">
                        <div class="lis">
                        <div class="topp">
                            <a href="JavaScript:;" class="second-img">
                                <img :src="son.soncomments.mainpostinfo.userinfo.photo">
                            </a>
                        </div>
                            <div class="info">
                                <p>
                                <span class="second-username">{{ son.soncomments.mainpostinfo.userinfo.username }}</span>
                                <span style="font-size:smaller;font-family:Arial, Helvetica, sans-serif">回复&nbsp;{{ son.soncomments.tosomeone }}</span>
                                </p>
                                <div class="second-data">{{ son.soncomments.mainpostinfo.data }}</div>
                            </div>
                            <div class="second-content">
                                <p class="second-comment">{{ son.soncomments.mainpostinfo.content }}</p>
                            </div>
                            <div class="second-right">
                                 <i class="iconfont like" :class="son.soncomments.mainpostinfo.whetherLike" @click="changeSonLike(item,son)">&#xe61b;</i>{{ son.soncomments.mainpostinfo.popular.likenum }}
                                 <i class="iconfont dislike" :class="son.soncomments.mainpostinfo.whetherDislike" @click="changeSonDislike(item,son)">&#xeb21;</i>{{ son.soncomments.mainpostinfo.popular.dislikenum }}
                                 <i class="iconfont comm" @click="shows(son)">&#xe607;</i>
                            </div>
                            </div>
                            <div class="writtte" v-show="son.showinput">
                                 <ReplyPost @cancel="cancels(son)" :id1 = "item.fatherComment.firstComment.id" :id2="son.soncomments.mainpostinfo.id" @update="update($event)"></ReplyPost>
                            </div>
                    </div>
                 
           </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ReplyPost from './ReplyPost.vue'
import mybus from '../mybus'
import { getFirstPost,changeDislike2,changeLike2,addPost } from '../../api/getpost'
import { useRoute } from 'vue-router'
import { UserCommentInfo,SonComments,CommentType,SubmitComment } from '../../api/types'

export default defineComponent({
    name:'ChildPost',
    components:{
        ReplyPost
    },
    data () {
        return{
            // comments:[
            //      {
            //          id:1,
            //          username:'熊童子',
            //          data:'2023-1-1',
            //          content:'沙发',
            //          popular:{
            //                  likenum:0,
            //                  dislikenum:0,
            //                  },
            //          whetherLike:'bef',
            //          whetherDislike:'bef',
            //          showinput:false,//需要添加
            //          showSons: false,//需要添加
            //          showSonsInfo:'点击查看更多',//需要添加
            //          sons:[
            //               {
            //                  id:1,
            //                  username:'youknowwho',
            //                  data:'2023-1-2',
            //                  tosomeone:'熊童子',
            //                  content:'你真无聊',
            //                  popular:{
            //                      likenum:0,
            //                      dislikenum:0,
            //                          },
            //                   whetherLike:'bef',
            //                   whetherDislike:'bef',
            //                   showinput:false,//需要添加
            //               },
            //           ]
            //      },
            // ],
            route:useRoute(),
            comments: [] as UserCommentInfo[],
            commentsed: [] as CommentType[],
            emp: ''
        }
    },

    mounted(){
        getFirstPost(this.route.query.id)
        .then(response => {
            this.comments = response.comments;
          })
          this.forinit()
    },

    updated(){
        mybus.emit('showcommentsnumber',this.comments.length);
    },

     methods:{
        async changeFatherLike(i:CommentType){
            if(i.fatherComment.firstComment.whetherLike == false){
                i.fatherComment.firstComment.whetherLike = true;
                i.fatherComment.firstComment.popular.likenum++;
            }else{
                i.fatherComment.firstComment.whetherLike = false;
                i.fatherComment.firstComment.popular.likenum--
            }
            const likeinfo = {
                postId: i.fatherComment.firstComment.id,
                commentId:'',
                status: i.fatherComment.firstComment.whetherLike,
                num: i.fatherComment.firstComment.popular.likenum,
            }
            await changeLike2(likeinfo,this.route.query.id)
        },
        async changeFatherDislike(i:CommentType){
            if(i.fatherComment.firstComment.whetherDislike == false){
                i.fatherComment.firstComment.whetherDislike = true;
                i.fatherComment.firstComment.popular.dislikenum++;
            }else{
                i.fatherComment.firstComment.whetherDislike = false;
                i.fatherComment.firstComment.popular.dislikenum--
            }
            const dislikeinfo = {
                postId: i.fatherComment.firstComment.id,
                commentId:'',
                status: i.fatherComment.firstComment.whetherDislike,
                num: i.fatherComment.firstComment.popular.dislikenum,
            }
            await changeDislike2(dislikeinfo,this.route.query.id)
        },
        async changeSonLike(i:CommentType,j:SonComments){
            if(j.soncomments.mainpostinfo.whetherLike == false){
                j.soncomments.mainpostinfo.whetherLike = true;
                j.soncomments.mainpostinfo.popular.likenum++;
            }else{
                j.soncomments.mainpostinfo.whetherLike = false;
                j.soncomments.mainpostinfo.popular.likenum--
            }
            const likeinfo = {
                postId: i.fatherComment.firstComment.id,
                commentId:j.soncomments.mainpostinfo.id,
                status: j.soncomments.mainpostinfo.whetherLike,
                num: j.soncomments.mainpostinfo.popular.likenum,
            }
            await changeLike2(likeinfo,this.route.query.id)
        },
        async changeSonDislike(i:CommentType,j:SonComments){
            if(j.soncomments.mainpostinfo.whetherDislike == false){
                j.soncomments.mainpostinfo.whetherDislike = true;
                j.soncomments.mainpostinfo.popular.dislikenum++;
            }else{
                j.soncomments.mainpostinfo.whetherDislike = false;
               j.soncomments.mainpostinfo.popular.dislikenum--;
            }
            const dislikeinfo = {
                postId: i.fatherComment.firstComment.id,
                commentId:j.soncomments.mainpostinfo.id,
                status: j.soncomments.mainpostinfo.whetherDislike,
                num: j.soncomments.mainpostinfo.popular.dislikenum,
            }
            await changeDislike2(dislikeinfo,this.route.query.id)
        },
        showSon(i:CommentType){
            i.fatherComment.showSons = !i.fatherComment.showSons;
            if(i.fatherComment.showSons){
                i.fatherComment.showSonsInfo = '折叠评论';
            }else{
                i.fatherComment.showSonsInfo = '点击查看更多';
            }
        },
        cancelf(i:CommentType){
            i.fatherComment.showinput = false;
        },
        showf ( i:CommentType ) {
            i.fatherComment.showinput = !i.fatherComment.showinput;
        },
        cancels(i:SonComments){
            i.showinput = false;
        },
        shows ( i:SonComments ) {
            i.showinput = !i.showinput;
        },
        //初始化
        forinit() {
            //循环一次给新数组赋初始值
          for(let i = 0; i < this.comments.length; i++)
          {
            this.commentsed[i].fatherComment.firstComment = this.comments[i].mainpostinfo
            this.commentsed[i].fatherComment.showSons = false
            this.commentsed[i].fatherComment.showSonsInfo = '点击查看更多'
            this.commentsed[i].fatherComment.showinput = false
            for(let j = 0; j < this.comments[i].sons.length; j++)
            {
                this.commentsed[i].secondComment[j].soncomments = this.comments[i].sons[j]
                this.commentsed[i].secondComment[j].showinput = false
            }
          }
          //循环end
        },
        async update(e: SubmitComment){
           await addPost(e,this.route)
           .then((response) => {
            this.comments = response.comments;
           })
           this.forinit()
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
    margin-top:37px;
    margin-left: 0;
}
.writtte{
    margin-top:30px;
    margin-left: -85px;
}
</style>