<template>
    <div class="post">
        <div class="card">
            <div class="top"></div>
            <div style="overflow:hidden">
                <div class="userinfo">
                    <a href="javascript:void(0);">
                    <img class="photo" src="../../assets/1.jpg">
                    </a>
                    <h3 style="margin-bottom:0%">LV:{{ author.level }}</h3>
                </div>
                <div class="head">
                    <h2>{{ author.title }}</h2>
                    <span>作者:{{ author.username }}</span><br>
                    <span>发帖时间{{ author.time }}</span><br>
                    <span>ip:{{ author.address }}</span>
                </div>
            </div>
        </div>
        <div class="content">
         <p>{{ author.content }}
        </p>
        </div>
        <div class="footer">
            <div class="icon">
                <i class="iconfont like" :class="likecolor" @click="changelike()">&#xe61b;</i>{{ author.popular.likenum }}
                <i class="iconfont dislike" :class="dislikecolor" @click="changedislike()">&#xeb21;</i>{{ author.popular.dislikenum }}
                <i class="iconfont comm" @click="show()">&#xe607;</i>{{ author.popular.commentnum }}
            </div>
        </div>
        <div class="write" v-show="whetherShow">
             <ReplyPost @cancel="cancel()"></ReplyPost>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ReplyPost from './ReplyPost.vue';
import mybus from '../mybus'

export default defineComponent({
    name:'FatherPost',
    components:{ ReplyPost },
    data () {
        return{
            author:{
                 id:1,
                 title:'钢铁的反叛者-巫师攻略',
                 username:'unknown',
                 level:114,
                 time:'2022年12月19日',
                 address:'天津',
                 content:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. 
                          Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar 
                          sic tempor. Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
                          Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus pronin sapien 
                          nunc accuan eget.
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida 
                          dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar sic tempor. Sociis natoque 
                          penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, 
                          felis tellus mollis orci, sed rhoncus pronin sapien nunc accuan eget.
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida 
                          dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar sic tempor. Sociis natoque 
                          penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, 
                          felis tellus mollis orci, sed rhoncus pronin sapien nunc accuan eget.`,
                          
                 popular:{
                         likenum:0,
                         dislikenum:0,
                         commentnum:0
                         },
            },
            likecolor:'bef',
            dislikecolor:'bef',
            whetherShow:false,
        }
    },

    mounted(){
        mybus.on('showcommentsnumber',data=>{
 (this.author.popular.commentnum as any) = data;
 console.log(data);
})

    },

    methods:{
        changelike () {
            if (this.likecolor == 'bef')
            {
                this.likecolor = 'aft';
                this.author.popular.likenum++;
            }else{
                this.likecolor = 'bef';
                this.author.popular.likenum--;
            }
        },
        changedislike () {
            if (this.dislikecolor == 'bef')
            {
                this.dislikecolor = 'aft';
                this.author.popular.dislikenum++;
            }else{
                this.dislikecolor = 'bef';
                this.author.popular.dislikenum--;
            }
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
    margin-right: 0px;
    margin-top: 0px;
    user-select: none;
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