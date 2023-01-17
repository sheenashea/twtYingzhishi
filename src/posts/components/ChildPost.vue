<template>
    <div class="comments">
        <div class="first-box" v-for="item in comments" :key="item.id">
        <div class="first">
           <div style="display:flex;flex-direction:column">
           <a href="javascript:;" class="first-img">
              <img src="../../assets/1.jpg"/>
           </a>
           <a href="javascript:;" style="font-size:xx-small;flex-shrink: 1;user-select: none;" @click="showSon(item)">{{ item.showSonsInfo }}</a>
           </div>
           <div class="info">
              <p class="first-username">{{ item.username }}</p>
              <p class="first-data">{{ item.data }}</p>
           </div>
           <div class="first-content">
               <p class="first-comment">{{ item.content }}</p>
           </div>
           <div class="first-right">
                <i class="iconfont like" :class="item.whetherLike" @click="changeFatherLike(item)">&#xe61b;</i>{{ item.popular.likenum }}
                <i class="iconfont dislike" :class="item.whetherDislike" @click="changeFatherDislike(item)">&#xeb21;</i>{{ item.popular.dislikenum }}
                <i class="iconfont comm" @click="show(item)">&#xe607;</i>
           </div>
           </div>
           <div class="writte" v-show="item.showinput">
                 <ReplyPost @cancel="cancel(item)"></ReplyPost>
           </div>
           <div v-show="item.showSons">
                
                    <div class="second" v-for="son in item.sons" :key="son.id">
                        <div class="lis">
                        <div class="topp">
                            <a href="JavaScript:;" class="second-img">
                                <img src="../../assets/1.jpg">
                            </a>
                        </div>
                            <div class="info">
                                <p>
                                <span class="second-username">{{ son.username }}</span>
                                <span style="font-size:smaller;font-family:'Courier New', Courier, monospace;">回复&nbsp;{{ son.tosomeone }}</span>
                                </p>
                                <div class="second-data">{{ son.data }}</div>
                            </div>
                            <div class="second-content">
                                <p class="second-comment">{{ son.content }}</p>
                            </div>
                            <div class="second-right">
                                 <i class="iconfont like" :class="son.whetherLike" @click="changeSonLike(son)">&#xe61b;</i>{{ son.popular.likenum }}
                                 <i class="iconfont dislike" :class="son.whetherDislike" @click="changeSonDislike(son)">&#xeb21;</i>{{ son.popular.dislikenum }}
                                 <i class="iconfont comm" @click="show(son)">&#xe607;</i>
                            </div>
                            </div>
                            <div class="writtte" v-show="son.showinput">
                                 <ReplyPost @cancel="cancel(son)"></ReplyPost>
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

export default defineComponent({
    name:'ChildPost',
    components:{
        ReplyPost
    },
    data () {
        return{
            comments:[
                 {
                     id:1,
                     username:'熊童子',
                     data:'2023-1-1',
                     content:'沙发',
                     popular:{
                             likenum:0,
                             dislikenum:0,
                             },
                     whetherLike:'bef',
                     whetherDislike:'bef',
                     showinput:false,
                     showSons: false,
                     showSonsInfo:'点击查看更多',
                     sons:[
                          {
                             id:1,
                             username:'youknowwho',
                             data:'2023-1-2',
                             tosomeone:'熊童子',
                             content:'你真无聊',
                             popular:{
                                 likenum:0,
                                 dislikenum:0,
                                     },
                              whetherLike:'bef',
                              whetherDislike:'bef',
                              showinput:false,
                          },
                      ]
                 },
            ],
        }
    },

    mounted(){
        mybus.emit('showcommentsnumber',this.comments.length);
    },

     methods:{
        changeFatherLike(i:object){
            if((i as any).whetherLike == 'bef'){
                (i as any).whetherLike = 'aft';
                (i as any).popular.likenum++;
            }else{
                (i as any).whetherLike = 'bef';
                (i as any).popular.likenum--
            }
        },
        changeFatherDislike(i:object){
            if((i as any).whetherDislike == 'bef'){
                (i as any).whetherDislike = 'aft';
                (i as any).popular.dislikenum++;
            }else{
                (i as any).whetherDislike = 'bef';
                (i as any).popular.dislikenum--
            }
        },
        changeSonLike(i:object){
            if((i as any).whetherLike == 'bef'){
                (i as any).whetherLike = 'aft';
                (i as any).popular.likenum++;
            }else{
                (i as any).whetherLike = 'bef';
                (i as any).popular.likenum--
            }
        },
        changeSonDislike(i:object){
            if((i as any).whetherDislike == 'bef'){
                (i as any).whetherDislike = 'aft';
                (i as any).popular.dislikenum++;
            }else{
                (i as any).whetherDislike = 'bef';
                (i as any).popular.dislikenum--;
            }
        },
        showSon(i:object){
            (i as any).showSons = !(i as any).showSons;
            if((i as any).showSons){
                (i as any).showSonsInfo = '折叠评论';
            }else{
                (i as any).showSonsInfo = '点击查看更多';
            }
        },
        cancel(i:object){
            (i as any).showinput = false;
        },
        show ( i:object ) {
            (i as any).showinput = !(i as any).showinput;
        },
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