<template>
    <div class="total">
        <FatherPost/>
        <ChildPost/>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import FatherPost from './components/FatherPost.vue';
import ChildPost from './components/ChildPost.vue';
export default defineComponent({
    name: 'PostsView',
    components:{
        FatherPost,
        ChildPost,
    },
})
</script>

<style>
.total{
    width: 100%;
    display: flex;
    flex-direction: column;
}
</style>