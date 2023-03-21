<template>
    <div class="total">
        <!--<FatherPost :mainPost = "reponse.postList" :authorInfo = "reponse.authorList" @changelike="changelike($event)" @changedislike="changedislike($event)" @update="update($event)"></FatherPost>-->
        <FatherPost :mainPost = "reponse.postList" :authorInfo = "reponse.authorList" ></FatherPost>
        <ChildPost :comments = "reponse.commentVoList"></ChildPost>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import FatherPost from './components/FatherPost.vue';
import ChildPost from './components/ChildPost.vue';
import { getPost, changeLike, changeDislike, addPost } from '@/api/getpost';
import type { getDiscussPost, addComment } from '@/api/types';
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
    }
})
</script>

<style>
.total{
    width: 100%;
    display: flex;
    flex-direction: column;
}
</style>