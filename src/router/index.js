import Vue from 'vue'
import Router from 'vue-router'

// import Login from '@/views/pages/login/login'
// import NotFound from '@/views/pages/errorPage/404'
// import Forbidden from '@/views/pages/errorPage/403'
// import Layout from '@/views/pages/layout/index'
// import Home from '@/views/pages/home/index'

import Home from '@/views/Home'

Vue.use(Router)

/* 初始路由 */
export default new Router({
  routes: [
    // {
    //   path: '/login',
    //   component: Login
    // },
    {
      path: '/home',
      component: Home
    }
  ]
})

/* 准备动态添加的路由 */
// export const DynamicRoutes = [
//   {
//     path: '',
//     component: Layout,
//     name: 'container',
//     redirect: 'home',
//     meta: {
//       requiresAuth: true,
//       name: '首页'
//     },
//     children: [
//       {
//         id: 1,
//         path: 'home',
//         component: Home,
//         name: 'home',
//         meta: {
//           name: '首页',
//           icon: 'tree'
//         }
//       }
//     ]
//   },
//   {
//     path: '/403',
//     component: Forbidden
//   },
//   {
//     path: '*',
//     component: NotFound
//   }
// ]
