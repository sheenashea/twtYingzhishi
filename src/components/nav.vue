<template>

    <div>
  
  <h1>  {{name}}</h1>
  
  <ul>
  
  <li v-for="(item,i) in items" :key="i">
  
      <a class="" @click="flagChange(item)">
  
  <i :class="item.icon"></i> {{item.name}}
  
  <b v-show="!item.flag">^</b>
  
  <b v-show="item.flag">！</b>
  
  </a>
  
  <ul class="" v-show="item.flag">
  
      <li v-for="(sub,j) in item.subItems" :key="j">
  
  <router-link :to="sub.link">{{sub.name}}</router-link>
  
      </li>
  
  </ul>
  
  </li>
  
  </ul>
  
   
  
    </div>
  
  </template>
  
   
  
  <script>
  
  export default {
    name: "navMenu",
    components:{},
  
    data () {
  
      return {
  
        name: "个人中心",
  
        items:[
  
  {name:"我的",icon:"fa fa-at",flag:true,
  
  subItems:[
  
  {name:"我的关注",link:"Form0324"},
  
  {name:"我的消息",link:"Productlisttwo"},
  
  {name:"我的管理",link:"Productlistone"}
  
  ]},
  
   
  
  {name:"Sport",icon:"fa fa-automobile",flag:false,
  
  subItems:[
  
  {name:"Sport 1",link:"Productlistone"},
  
  {name:"Sport 2",link:"Productlistone"},
  
  {name:"Sport3",link:"Productlistone"}
  
  ]},
  
   
  
  {name:"Trend",icon:"fa fa-bank",flag:false,
  
  subItems:[
  
  {name:"Trend 1",link:"Productlistone"},
  
  {name:"Trend 2",link:"Productlistone"},
  
  {name:"Trend 3",link:"Productlistone"}
  
  ]},
  
   
  
        ]}
  
      },
  
    computed:{},
  
    methods:{flagChange:function(item){
  
  item.flag=!item.flag;
  
  this.items.forEach(function(v)
  
  {v.flag=false;}
  
  );
  
  item.flag=true;
  
    }
  
    
  
    
  
    }
  
  }
  
  </script>
  
  
   
  
  <style scoped>
  
  @import "https://cdn.staticfile.org/font-awesome/4.7.0/css/font-awesome.css";
  
  ul{background:#e5e6a7}
  
  li{color:rgb(26, 77, 122)}
  
  </style>