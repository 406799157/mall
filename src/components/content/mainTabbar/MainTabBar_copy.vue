<template>
  <tab-bar>
    <tab-bar-item v-for="t in tabInfo" :key="t.url" path="t.url">
      <img slot="item-icon" :src="t.icon">
      <img slot="item-icon-active" :src="t.icon_active">
      <div slot="item-text">{{ t.text }}</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
import TabBar from './tabbar/TabBar';
import TabBarItem from './tabbar/TabBarItem';

export default {
  data() {
    return {
      tabInfo: [
        {
          text: '首页',
          url: '/home',
          icon: '../assets/img/tabbar/home.svg',
          active_icon: '../assets/img/tabbar/home_active.svg'
        },
        {
          text: '分类',
          url: '/category',
          icon: '../assets/img/tabbar/category.svg',
          active_icon: '../assets/img/tabbar/category_active.svg'
        },
        {
          text: '购物车',
          url: '/shopcart',
          icon: '../assets/img/tabbar/shopcart.svg',
          active_icon: '../assets/img/tabbar/shopcart_active.svg'
        },
        {
          text: '我的',
          url: '/profile',
          icon: '../assets/img/tabbar/profile.svg',
          active_icon: '../assets/img/tabbar/profile_active.svg'
        }
      ]
    }
  },
  components: {
    TabBar,
    TabBarItem
  }
}
</script>