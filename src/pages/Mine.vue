<template>
  <div>
    <div class="warp">
      <div class="header">
        <div class="header-top">
          <div class="touxiang">
            <img
              style="width: 100%; height: 100%; border-radius: 50%"
              :src="dalImg(info?.avatar!)"
              alt=""
            />
          </div>
          <div class="text">
            <p class="text-left">
              {{ info?.realName }},<span class="text-right">你好!</span
              ><span class="green"
                ><img src="../assets/images/green.png" alt=""
              /></span>
            </p>
            <p class="emil">{{ info?.userName }}</p>
          </div>
          <div class="bianji">
            <img src="../assets/images/bianji.png" alt="" />
          </div>
        </div>
      </div>

      <div class="content">
        <div class="one">
          <div @click="$router.push('/mine/add_house')">
            <img src="../assets/images/4.png" alt="" />
            <p>新增客源</p>
          </div>
          <div @click="$router.push('/mine/wdzd')">
            <img src="../assets/images/1.png" alt="" />
            <p>我的账单</p>
          </div>
          <div @click="$router.push('/mine/add_house')">
            <img src="../assets/images/2.png" alt="" />
            <p>添加房源</p>
          </div>
          <div @click="$router.push('/mine/sdcb')">
            <img src="../assets/images/3.png" alt="" />
            <p>手动抄表</p>
          </div>
        </div>

        <div class="two">
          <div class="t" @click="$router.push('/mine/notice')">
            <img src="../assets/images/6.png" alt="" />
            <span class="txt">通知</span>
          </div>
          <div class="w" @click="$router.push('/mine/setting')">
            <img src="../assets/images/7.png" alt="" />
            <span class="txt">设置</span>
          </div>
        </div>
        <div class="three">
          <div class="h" @click="$router.push('/mine/help')">
            <img src="../assets/images/5.png" alt="" />
            <span class="txt">帮助</span>
          </div>
          <div class="e" @click="$router.push('/mine/about')">
            <img src="../assets/images/8.png" alt="" />
            <span class="txt">关于</span>
          </div>
        </div>
        <div class="login" @click="logOutHandle">
          <img src="../assets/images/10.png" alt="" />
          <span class="txtLogin">退出登录</span>
        </div>
        <div class="img">
          <img src="../assets/images/9.png" alt="" />
        </div>
      </div>
      <div style="height: 50px"></div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import { storeToRefs } from "pinia";
import { useRouter } from "vue-router";
import { loadUserInfoAPI } from "../services/auth";
import { useUserInfoStore } from "../store/user-info-store";
import { dalImg } from "../utils/tools";

const store = useUserInfoStore();

const { info } = storeToRefs(store);

const router = useRouter();

loadUserInfoAPI().then((res) => {
  info.value = res.data;
});

const logOutHandle = () => {
  sessionStorage.removeItem("token");
  router.push("/login");
};
</script>
<style scoped>
.warp {
  width: 100vw;
  height: 100vh;
}
.header {
  height: 210px;
  background-color: #0e47fe;
  padding-top: 44px;
  /* background-image: url(../assets/images/tbbj.png); */
  background-size: 256px;
  background-repeat: no-repeat;
  background-position: 143px 29px;
}
.header-top {
  display: flex;
  margin-left: 37px;
  padding-top: 10px;
}
.touxiang {
  width: 60px;
  height: 60px;

  margin-right: 12px;
}
.text {
  height: 60px;
  width: 100px;
  color: #ffffffff;
  font-weight: 600;
}
.text-left {
  font-size: 20px;
  padding-top: 10px;
  width: 150px;
  font-weight: bold;
}
.text-right {
  font-size: 16px;
  font-weight: normal;
}
.green {
  margin-left: 8px;
}
.emil {
  font-size: 12px;
  padding-top: 4px;
  width: 150px;
}
.bianji {
  margin-left: 50px;
  height: 83px;
  line-height: 83px;
}
.content {
  margin-top: -90px;
  background-color: #f9f9faff;
  border-radius: 40px 40px 0px 0px;
}
.one {
  height: 99px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #fff;
  padding-left: 20px;
  padding-right: 20px;
  border-radius: 20px 20px 0px 0px;
  text-align: center;
  justify-content: space-between;
}
.one div{
  width: 20%;
}
.one div img{
  width: 90%;
  height: 90%;
  border-radius: 10px;
}
.one div p{
  line-height: 2;
}
.two,
.three {
  margin-top: 10px;
  background-color: #f9f9faff;
}

.t,
.w,
.h,
.e {
  display: flex;
  height: 50px;
  align-items: center;
  background-color: #fff;
  height: 50px;
  padding-left: 30px;
}
.txt {
  padding-left: 9px;
  font-size: 14px;
  font-family: PingFang SC-Regular, PingFang SC;
  font-weight: 400;
  color: #888888;
  line-height: 9px;
}
.w,
.e {
  margin-top: 2px;
}
.login {
  display: flex;
  align-items: center;
  height: 50px;
  margin-top: 9px;
  padding-left: 30px;
  background-color: #fff;
}
.txtLogin {
  padding-left: 9px;
  font-size: 14px;
  font-family: PingFang SC-Regular, PingFang SC;
  font-weight: 400;
  color: #ff5f33;
  line-height: 9px;
}
.img {
  margin-top: 4px;
  margin-left: 119px;
}
</style>
