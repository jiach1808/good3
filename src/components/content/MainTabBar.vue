<template>
    <div id="main-tab-bar">
      <tabBar>
        <tabBarItem path="/home" activeColor="yellow">
            <img slot="img" src="@/assets/img/tabbar/home.svg" alt="">
            <img slot="img-active" src="@/assets/img/tabbar/home_active.svg" alt="">
            <span slot="text">首页</span>
        </tabBarItem>
        <tabBarItem path="/category">

            <img slot="img" src="@/assets/img/tabbar/category.svg" alt="">
           <img slot="img-active" src="@/assets/img/tabbar/category_active.svg" alt="">
          <span slot="text">分类</span>
        </tabBarItem>
        <tabBarItem path="/cart">

            <img slot="img" src="@/assets/img/tabbar/shopcart.svg" alt="">
            <img slot="img-active" src="@/assets/img/tabbar/shopcart_active.svg" alt="">
          <span slot="text">购物车</span>
        </tabBarItem>
        <tabBarItem path="/profile">

            <img slot="img" src="@/assets/img/tabbar/profile.svg" alt="">
           <img slot="img-active" src="@/assets/img/tabbar/profile_active.svg" alt="">
          <span slot="text">我的</span>
        </tabBarItem>
      </tabBar>
    </div>
</template>

<script>
  import tabBar from '@/components/common/tabbar/tabBar'
  import tabBarItem from '@/components/content/tabBarItem'
    export default {
      name: "MainTabBar",
      components: {
        tabBar,
        tabBarItem
      }
    }
</script>

<style scoped>

</style>
