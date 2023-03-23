<template>
    <div class="box">
        <div class="input">
            <input type="text"
            class="text"
            placeholder="请输入评论 . . . "
            v-model="newcomment.newtext"
            />
        </div>
        <div class="input">
            <div class="foot">
                 <div :class="ahint">
                     <a href="javascript:void(0);" @click="shownotice()">发帖须知</a>
                     <input type="checkbox" v-model="newcomment.isChecked">我已阅读并同意
                 </div>
                 <div>
                     <button :class="{'btn':!newcomment.newtext.length,'btn2':newcomment.newtext.length}" style="top:0;right:131px;" @click="submit()">发布</button>
                     <button class="btn2" style="top:0;right:0px;" @click="cancel()">取消</button>
                 </div>
            </div>
        </div>
    </div>
        <div v-show="showNotice">
             <NoticeContent @completeread="completeread()"></NoticeContent>
        </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { uuid } from 'vue-uuid'
import NoticeContent from './NoticeContent.vue';
export default defineComponent({
    name:'ReplyPost',
    components:{
        NoticeContent
    },
    props:['id1','id2'],
    data () {
        return{
            newcomment:{
                newtext:'',
                isChecked:[],
            },
            showNotice:false,
            ahint: '',
        }
    },
    methods:{
        shownotice(){
            this.showNotice = true;
        },
        completeread(){
            this.showNotice = false;
        },
        cancel(){
            this.newcomment.isChecked = [];
            this.$emit('cancel');
        },
        submit(){
            if(this.newcomment.isChecked.length){
                console.log('ok');
                if(this.newcomment.newtext.length)
                {
                    this.tosubmit();
                    this.newcomment.isChecked = [];
                    this.newcomment.newtext = '';
                    this.$emit('cancel');
                }
            }else{
                 this.ahint = 'hint';
                 setTimeout(() => {
                    this.ahint = ''
	}, 2100);     
            }
        },
        tosubmit(){
            //开始实现submit功能
            //判断是几级评论，返回参数不同，同时传个值让评论区组件响应更新
            //这里需要修改!!!form几个参数代表的值要修改一下
            if(this.id1 == 0)
            {
                //包装一级评论
                const form = {
                     id: uuid.v1(),//缺少了
                     comment: this.newcomment.newtext,
                     author: {
                          id: '011',
                          loginName: sessionStorage.getItem('username'),
                          avatarurl: '../../assets/radier1.png',
                     },
                     likeCount: 0,
                     likeStatus: false,
                     dislikeCount: 0,
                     dislikeStatus: false,
                     replyList: [],
                     replyCount: 0,
                     showinput: false,
                }
                this.$emit('update', form)
            }else{
                //包装二级评论
                const form = {
                    id: uuid.v1(),//缺少了
                    reply: this.newcomment.newtext,
                    author: {
                    id: '011',
                    loginName: 'user',
                    avatarurl: '../../assets/1.jpg',
                    },
                    target: {
                    id: this.id2,
                    loginName: this.id2,
                    avatarurl: '../../assets/1.jpg',
                    },
                    likeCount: 0,
                    likeStatus: false,
                    dislikeCount: 0,
                    dislikeStatus: false,
                    showinput: false
                }
                this.$emit('update', form)
            }
            //传值结束
        }
    },
    

})
</script>

<style>
.box{
    height: 130px;
    width:850px;
    background-color: aliceblue;
    border: 2px solid lightseagreen;
    padding:0 20px;
    border-radius: 7px;
    font-family: 'Courier New', Courier, monospace;
    user-select: none;
}
.input{
    position:relative
}
.text{
    position:absolute;
    top:13px;
    left:17px;
    height:27px;
    border-radius: 5px;
    outline:none;
    width:65%;
    font-size: 10px;
    padding:0 20px;
    border: 2px solid #f8f8f8;
}
.btn{
    position:absolute;
    top:13px;
    right:30px;
    width:120px;
    height:27px;
    border: 0;
    border-radius: 5px;
    font-size:10px;
    font-weight: 500;
    color:#fff;
    letter-spacing: 2px;
    background-color: lightblue;
}

.btn2 {
    position:absolute;
    top:13px;
    right:30px;
    width:120px;
    height:27px;
    border: 0;
    border-radius: 5px;
    font-size:10px;
    font-weight: 500;
    color:#fff;
    cursor:pointer;
    letter-spacing: 2px;
    background-color:blue;
}

.foot{
    position:absolute;
    top: 83px;
    font-size: 5px;
    left:117px;
    width:650px;
    display: flex;
    justify-content: space-between;
}
.hint{
    animation-name: example;
    animation-duration: 2s;
}
@keyframes example {
  0%   {color: black;}
  25%  {background-color: palevioletred;}
}
</style>