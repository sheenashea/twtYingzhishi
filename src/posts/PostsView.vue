<template>
    <div class="total">
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
          <a href="/login" class="menuItem" @click="removeLogin()">退出登录</a>
          <a href="/mypage" class="menuItem" >个人中心</a>
       </div>
    </div>
        <!--<FatherPost :mainPost = "reponse.postList" :authorInfo = "reponse.authorList" @changelike="changelike($event)" @changedislike="changedislike($event)" @update="update($event)"></FatherPost>-->
        <FatherPost :mainPost = "reponse.postList" :authorInfo = "reponse.authorList" @update = "update($event)"></FatherPost>
        <ChildPost :comments = "reponse.commentVoList"></ChildPost>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import FatherPost from './components/FatherPost.vue';
import ChildPost from './components/ChildPost.vue';
import { getPost, changeLike, changeDislike, addPost } from '@/api/getpost';
import type { getDiscussPost, addComment, commentVoList } from '@/api/types';
import { useRoute } from 'vue-router';
export default defineComponent({
    name: 'PostsView',
    components:{
        FatherPost,
        ChildPost,
    },
    data () {
        return {
            route: useRoute(),
            reponse: {} as getDiscussPost,
            dropdown: 'dropdown-content',
        }
    },
    created () {
        this.reponse = getPost(  )
    },
    methods: {
        //以下两个函数需要修改
        // async changelike (kind: number) {
        //       if (!kind) {
        //          const postid = ''
        //       }
        //       const likeInfo = {
        //            entityType: kind,
        //            entityId: kind,
        //            entityUserId: kind,
        //            postId: kind,
        //       }
        //       await changeLike(likeInfo)
        //       .then(response => {
        //        this.init(response)
        //        })
        // },
        
        // async changedislike (kind: number) {
        //       if (!kind) {
        //          const postid = ''
        //       }
        //       const likeInfo = {
        //            entityType: kind,
        //            entityId: kind,
        //            entityUserId: kind,
        //            postId: kind,
        //       }
        //       await changeDislike(likeInfo)
        //       .then(response => {
        //        this.init(response)
        //   })
        // },
        // async update (e: addComment) {
        //     await addPost(e, this.route.query.id as unknown as number)
        //     .then(response => {
        //        this.init(response)
        //       })
        // },
        //初始化
        // init (r: getDiscussPost) {
        //     console.log(r);
        //     console.log(r.postList.commentCount);
        //     for(let i = 0; i < r.postList.commentCount; i++)
        //         this.discussPost.commentVoLists[i].showinput = false,
        //         this.discussPost.commentVoLists[i].commentVoList = r.commentVoList[i],
        //         this.discussPost.authorList = r.authorList,
        //         this.discussPost.postList = r.postList
        // }
        update(e: commentVoList)
        {
            this.reponse.commentVoList.push(e);
            this.reponse.postList.commentCount++;
        },
        drop () {
            if(this.dropdown == 'dropdown-content') this.dropdown = 'dropdown-content2';
            else this.dropdown = 'dropdown-content'
        },
        removeLogin () {
            sessionStorage.removeItem('token')
            sessionStorage.removeItem('username')
        }
    }
})
</script>

<style lang="less" scoped>
.total{
    width: 100%;
    display: flex;
    flex-direction: column;
}

ul {
       list-style-type: none;
       margin: 0;
       padding: 0;
       overflow: hidden;
       background-color: lightgray;
    }

    li {
        float: right;
    }

    li a {
       display: block;
       color: black;
       text-align: center;
       padding: 14px 16px;
       text-decoration: none;
}

li a:hover{
  background-color: #ccc;
  text-decoration: none;
  color: black;
}

.dropdown-content {
     float: right;
     visibility: hidden;
     opacity: 0;
     transition: all 0.5s ease-in-out;
}
.dropdown-menu {
    float: right;
    margin-top: 7px;
    padding: 10px 8px 15px;
    color: black;
    background-color: #f3f3f3;
    border-radius: 4px;
    .menuItem {
    width: 100%;
    white-space: nowrap;
    padding: 10px 16px;
    font-size: 16px;
    color: black;
    cursor: pointer;
    border-radius: 4px;
    &:hover {
        background-color: #ccc;
    }
}

}
   
.dropdown-content2 {
    float: right;
    visibility: visible;
    opacity: 1;
    transition: all 0.6s ease-in-out;
}
</style>