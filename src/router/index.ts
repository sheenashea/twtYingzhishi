import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/login/LoginView.vue')
  },
  {
    path: '/posts',
    name: 'posts',
    component: () => import('@/posts/PostsView.vue')
  },
  {
    path: '/radiers',
    name: 'radiers',
    component: () => import(/* webpackChunkName: "about" */ '../views/RadiersView.vue')
  },
  {
    path: '/deck',
    name: 'deck',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/DeckView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

//路由守卫begin
// router.beforeEach((to, from, next) => {
//   //如果去往登录页和主页则放行 
//     if (to.path === '/login' || to.path === '/') {
//       next();
//     } else {
//       // 从本地存储里获取token
//       const token = localStorage.getItem('token');
//       // 判断token是否为空如果为空则跳转到登录页 如果有则放行
//       if (token === null || token === '') {
//         next({path:'/login'});
//       } else {
//         next();
//       }
//     }
//   });
//路由守卫end

export default router

//注释掉了路由守卫，记得添回来