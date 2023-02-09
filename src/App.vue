<template>
  <div class="view">
    <router-view class="pos" v-slot="{ Component }">
      <transition :name="store.type">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>
<script setup lang="ts">
// 路由过渡状态
import { useTransitionStore } from "./store/transitionStore";
let store = useTransitionStore();
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
// 下级页面切换动画 右进左出
.next-enter-from {
  transform: translateX(100%);
  opacity: 0;
}
.next-leave-to {
  transform: translateX(-100%);
  opacity: 0;
}
.next-enter-active,
.next-leave-active {
  transition: all 0.3s;
}

// 上级页面切换动画 左进右出
.prev-enter-from {
  transform: translateX(-100%);
}
.prev-leave-to {
  transform: translateX(100%);
}
.prev-enter-active,
.prev-leave-active {
  transition: all 0.3s;
}
</style>
