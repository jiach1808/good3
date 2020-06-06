//1.导入组件
import Vue from 'vue'
import VueRouter from 'vue-router'


const Home = () => import('@/views/home/Home')
const  Category = ()=>import('@/views/category/Category')
const Cart = ()=>import('@/views/cart/Cart')
const Profile =() => import('@/views/profile/Profile')


//2.使用组件
Vue.use(VueRouter)

  const routes = [
    {
      path: '',
      redirect:'/home'
    },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/category',
    component: Category
  },
    {
      path: '/cart',
      component: Cart
    },
    {
      path: '/profile',
      component: Profile
    }
]
//3.创建路由对象
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
//导出router

export default router







