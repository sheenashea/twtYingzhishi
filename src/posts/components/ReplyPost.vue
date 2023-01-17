<template>
    <div class="box">
        <div class="input">
            <input type="text"
            class="text"
            placeholder="请输入评论 . . . "
            v-model="newcomment.newtext"
            />
            <button class="btn">上传图片</button>
        </div>
        <div class="input">
            <div class="foot">
                 <div :class="ahint">
                     <a href="javascript:void(0);" @click="shownotice()">发帖须知</a>
                     <input type="checkbox" v-model="newcomment.isChecked">我已阅读并同意
                 </div>
                 <div>
                     <button class="btn" style="top:0;right:131px;background-color: blue;" @click="submit()">发布</button>
                     <button class="btn" style="top:0;right:0;background-color: blue;" @click="cancel()">取消</button>
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
import { nanoid } from 'nanoid'
import NoticeContent from './NoticeContent.vue';
export default defineComponent({
    name:'ReplyPost',
    components:{
        NoticeContent
    },
    data () {
        return{
            newcomment:{
                newtext:'',
                newphoto:'',
                isChecked:[],
                toname:'熊童子',
            },
            showNotice:false,
            ahint: '',
            currentType:0,
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
                this.newcomment.isChecked = [];
                this.newcomment.newtext = '';
                this.$emit('cancel');
            }else{
                 this.ahint = 'hint';
                 setTimeout(() => {
                    this.ahint = ''
	}, 2100);     
            }
        }
    },

})
</script>

<style>
.box{
    height: 130px;
    width:850px;
    background-color: lightblue;
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
    background-color: rgb(118,211,248);
    cursor:pointer;
    letter-spacing: 2px;
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