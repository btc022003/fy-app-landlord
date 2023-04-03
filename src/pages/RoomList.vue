<template>
  <div class="rooms">
    <van-nav-bar title="房源详情" left-arrow @click-left="goBack" />
    <div class="info">
      <h3>小区名字</h3>
      <p>详细地址</p>
      <p>是否整租</p>
    </div>
    <div class="item">
      <img src="../assets/images/hh.png" alt="" />
      <div class="detail">
        <p>主卧-1200</p>
        <p>价格:1300</p>
        <p>描述</p>
      </div>
    </div>
    <van-button
      icon="plus"
      type="primary"
      style="border-radius: 50%; position: fixed; right: 8px; bottom: 120px"
      @click="addRoomHandle"
    />
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
const router = useRouter();

const goBack = () => router.back();

const addRoomHandle = () => {};
</script>
