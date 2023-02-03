<template>
    <div class="post">
        <div class="card">
            <div class="top"></div>
            <div style="overflow:hidden">
                <div class="userinfo">
                    <a href="javascript:void(0);">
                    <img class="photo" :src="author.userinfo.photo">
                    </a>
                    <h3 style="margin-bottom:0%;margin-left: 300px;">LV:{{ author.userinfo.level }}</h3>
                </div>
                <div class="head">
                    <h2>{{ author.title }}</h2>
                    <span>作者:{{ author.userinfo.username }}</span><br>
                    <span>发帖时间{{ author.data }}</span><br>
                    <span>ip:{{ author.userinfo.address }}</span>
                </div>
            </div>
        </div>
        <div class="content">
         <p>{{ author.content }}
        </p>
        </div>
        <div class="footer">
            <div class="icon">
                <i class="iconfont like" :class="{ 'bef':!author.whetherLike,'aft':author.whetherLike }" @click="changelike()">&#xe61b;</i>{{ author.popular.likenum }}
                <i class="iconfont dislike" :class="{ 'bef':!author.whetherDislike,'aft':author.whetherDislike }" @click="changedislike()">&#xeb21;</i>{{ author.popular.dislikenum }}
                <i class="iconfont comm" @click="show()">&#xe607;</i>{{ len }}
            </div>
        </div>
        <div class="write" v-show="whetherShow">
             <ReplyPost @cancel="cancel()" :id1 = 'emp' :id2 = 'emp'></ReplyPost>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ReplyPost from './ReplyPost.vue';
import mybus from '../mybus'
import { getFirstPost,changeDislike,changeLike } from '../../api/getpost'
import { useRoute } from 'vue-router'
import type { MainPostInfo } from '../../api/types'
export default defineComponent({
    name:'FatherPost',
    components:{ ReplyPost },
    data () {
        return{
            // author:{
            //      id:1,
            //      title:'钢铁的反叛者-巫师攻略',
            //      username:'unknown',
            //      level:114,
            //      time:'2022年12月19日',
            //      address:'天津',
            //      content:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. 
            //               Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar 
            //               sic tempor. Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
            //               Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus pronin sapien 
            //               nunc accuan eget.
            //               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida 
            //               dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar sic tempor. Sociis natoque 
            //               penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, 
            //               felis tellus mollis orci, sed rhoncus pronin sapien nunc accuan eget.
            //               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida 
            //               dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar sic tempor. Sociis natoque 
            //               penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, 
            //               felis tellus mollis orci, sed rhoncus pronin sapien nunc accuan eget.`,
                          
            //      popular:{
            //              likenum:0,
            //              dislikenum:0,
            //              commentnum:0
            //              },
            // },
            len: 0,
            author:{} as MainPostInfo,
            whetherShow:false,
            route: useRoute(),
            emp: ''
        }
    },

    mounted(){
        //响应渲染
        getFirstPost(this.route.query.id)
        .then(response => {
            this.author = response.mainPost;
            this.len = response.comments.length
          })
//         //mybus传参
//         mybus.on('showcommentsnumber',data=>{
//  (this.author.popular.commentnum as any) = data;
//  console.log(data);
// })
    },

    updated(){
//mybus传参
        mybus.on('showcommentsnumber',data=>{
 (this.len as any) = data;
 console.log(data);
})
    },

    methods:{
        async changelike () {
            if (this.author.whetherLike == false)
            {
                this.author.whetherLike = true
                this.author.popular.likenum++;
            }else{
                this.author.whetherLike = false
                this.author.popular.likenum--;
            }
            const likeinfo = {
                status: this.author.whetherLike,
                num: this.author.popular.likenum,
            }
            await changeLike(likeinfo,this.route.query.id)
        },
        async changedislike () {
            if (this.author.whetherDislike == false)
            {
                this.author.whetherDislike = true
                this.author.popular.dislikenum++;
            }else{
                this.author.whetherDislike = false;
                this.author.popular.dislikenum--;
            }
            const dislikeinfo = {
                status: this.author.whetherDislike,
                num: this.author.popular.dislikenum,
            }
            await changeDislike(dislikeinfo,this.route.query.id)
        },
        show () {
            this.whetherShow = !this.whetherShow;
        },
        cancel(){
            this.whetherShow = false;
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
    flex-direction: column;;
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