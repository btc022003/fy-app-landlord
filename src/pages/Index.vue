<template>
  <div>
    <!-- 切换tabbar页面 -->
    <div class="view">
      <router-view class="pos" v-slot="{ Component }">
        <transition name="fade">
          <component :is="Component" />
        </transition>
      </router-view>
    </div>
    <Tabbar />
  </div>
</template>
<script setup lang="ts">
import Tabbar from "../components/Tabbar.vue";
</script>
<style scoped lang="scss">
// 给页面容器添加定位属性 在路由过渡时 位置不会产生冲突
.view {
  .pos {
    position: absolute;
    width: 100%;
    left: 0;
    top: 0;
    min-height: 100vh;
    background-color: white;
  }
}
// 动画类
// tabbar切换动画 渐隐渐显
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s;
}
</style>
