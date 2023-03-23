
<template>
    <div class="swiperBox">
        <img class="imgLeft" @click="clickLeft" src="../assets/left.png" alt="">
        <img class="imgRight" @click="clickRight" src="../assets/right.png" alt="">
        <div id="swiper">
            <div class="imgBox">
                <div class="imgDiv" v-for="(item,index) of imgList" :key="index">
                    <img :src="item" />
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'BaseSwiper',
    props: {
        speed: Number,
        direction: String,
    },
    data() {
        return {
            imgList: [
                require('../assets/radier3.png'),
                require('../assets/radier8.png'),
                require('../assets/radier9.png'),
                require('../assets/radier10.png'),
            ],
            timer: null,
            theSpeed: this.speed,
            imgWidth: 260,
            theDirection: this.direction,
        }
    },
    methods: {
        clickLeft() {
            this.theDirection = 'left';
        },
        clickRight() {
            this.theDirection = 'right';
        },
    },
    mounted() {
        let imgBox = document.getElementsByClassName('imgBox')[0];
        //将imgBox下的图片进行拼接 循环展示图片
        imgBox.innerHTML += imgBox.innerHTML;
        let imgDiv = document.getElementsByClassName('imgDiv');
        imgBox.style.width = imgDiv.length * this.imgWidth + 'px';//设置div的宽度使图片可以放下
        let self = this;
        console.log(imgBox.offsetWidth,imgBox.style.width )
        function autoScroll() {
            if (imgBox.offsetLeft < -(imgBox.offsetWidth / 2)) {//提前更新left值，实现循环展示
                imgBox.style.left = 0;
            }
            if (imgBox.offsetLeft > 0) {//向右滚动 提前更新left值，实现循环展示
                imgBox.style.left = -(imgBox.offsetWidth / 2) + 'px';
            }
            if (self.theDirection == 'left') { //向左滚动,值为负
                self.theSpeed = -Math.abs(self.theSpeed)
            } else { //向右滚动
                self.theSpeed = Math.abs(self.theSpeed)
            }
            // 求出总的left值，等于left值加上移动的速度（px值）
            imgBox.style.left = imgBox.offsetLeft + self.theSpeed + 'px';
        }
        this.timer = setInterval(autoScroll, 30);//全局变量 ，保存返回的定时器
    },
    beforeUnmount() {
        clearInterval(this.timer);
        this.timer = null;
    }
}
</script>
<style scoped lang='less'>
.swiperBox {
    height: 20%;
    width: 100%;
    position: relative;
    margin-left: 0.5%;
    .imgLeft {
        width: 50px;
        left: 0;
        top: 40%;
        opacity: 90%;
    }
    .imgLeft,
    .imgRight {
        width: 50px;
        height: 38px;
        position: absolute;
        cursor: pointer;
        opacity: 0.5;
    }
    .imgRight {
        right: 0;
        top: 40%;
        opacity: 50%;
    }
    .directionIcon:hover {
        opacity: 1;
    }
    #swiper {
        width: 90%;
        height: 100%;
        margin: 0 auto;
        overflow: hidden;
        position: relative;
        .imgBox {
            height: 100%;
            position: absolute;
            left: 0;
            top: 0;
            overflow: hidden;
            display: flex;
            .imgDiv {
                width: 100%;
                margin-left: 15px;
                img {
                    height: 100%;
                    width: 280px;
                    // width: 260px;
                    // height: 120px;
                }
            }
        }
    }
}
</style>
