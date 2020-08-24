import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

const routes = [
  {
    path: '',
    redirect: '/home'
  },
  /* Home Begin */
  {
    path: '/home',
    name: 'Home',
    meta: {
      title: '首页'
    },
    component: () => import('@/views/home/Home')
  },
  /* Home End */
  /* Category Begin */
  {
    path: '/category',
    name: 'Category',
    meta: {
      title: '全部分类'
    },
    component: () => import('@/views/category/Category')
  },
  /* Category End */
  /* Shopcart Begin */
  {
    path: '/shopcart',
    name: 'Shopcart',
    meta: {
      title: '购物车'
    },
    component: () => import('@/views/shopcart/Shopcart')
  },
  /* ShopcartEnd */
  /* Profile Begin */
  {
    path: '/profile',
    name: 'Profile',
    meta: {
      title: '个人主页'
    },
    component: () => import('@/views/profile/Profile')
  },
  /* Profile End */
];

const router = new VueRouter({
  routes,
  mode: 'history'
});

router.beforeEach((to, from, next) => {
  document.title = to.matched[0].meta.title;
  next();
});

export default router;