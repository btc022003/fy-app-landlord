<template>
  <van-tabbar
    route
    v-model="active"
    active-color="#4354E7"
    inactive-color="#8F95B2"
    :placeholder="true"
    :safe-area-inset-bottom="true"
    z-index="5"
  >
    <van-tabbar-item replace to="/home" icon="send-gift-o"
      >首页</van-tabbar-item
    >
    <van-tabbar-item replace to="/house" icon="wap-home-o"
      >房态</van-tabbar-item
    >
    <van-tabbar-item replace to="/msg" icon="chat-o">消息</van-tabbar-item>
    <van-tabbar-item replace to="/mine" icon="manager-o">我的</van-tabbar-item>
  </van-tabbar>
</template>
<script setup lang="ts">
import { ref } from "vue";
import { useRoute } from "vue-router";
let active = ref<string>(useRoute().path);
</script>
