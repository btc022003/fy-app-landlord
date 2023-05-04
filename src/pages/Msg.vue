<template>
  <div>
    <div class="header">
      <div class="header-content">
        <div class="xx">消息</div>
        <van-search
          shape="round"
          background="rgba(0,0,0,0)"
          placeholder="请输入搜索关键词"
          class="search"
        />
      </div>
    </div>
    <div class="content">
      <ul>
        <li>
          <img src="../assets/images/Slice12(3).png" alt="" />
          <div class="tuB">
            <img src="../assets/images/Slice13.png" alt="" />
          </div>
          <div class="right-imgs">
            <p class="hello">系统信息</p>
            <p class="hei">系统功能升级通知</p>
          </div>
        </li>
        <li>
          <img src="../assets/images/Slice12(4).png" alt="" />
          <div class="tuB">
            <img src="../assets/images/Slice13.png" alt="" />
          </div>
          <div class="right-imgs">
            <p class="hello">退租提醒</p>
            <p class="hei">您有一条新退租提醒</p>
          </div>
        </li>
        <li>
          <img src="../assets/images/Slice12(1).png" alt="" />
          <div class="tuB">
            <img src="../assets/images/Slice13.png" alt="" />
          </div>
          <div class="right-imgs">
            <p class="hello">预约提醒</p>
            <p class="hei">您有一条新预约申请</p>
          </div>
        </li>
        <li>
          <img src="../assets/images/Slice12(2).png" alt="" />
          <div class="kong"></div>
          <div class="right-imgs">
            <p class="hello">财务信息</p>
            <p class="hei">无新消息</p>
          </div>
        </li>
        <li @click="$router.push('/fsxx')">
          <img src="../assets/images/Slice12(5).png" alt="" />
          <div class="kong"></div>
          <div class="right-imgs">
            <p class="hello">孙宇辉</p>
            <p class="hei">无新消息</p>
          </div>
        </li>
        <li @click="$router.push('/fsxx')">
          <img src="../assets/images/Slice12.png" alt="" />
          <div class="kong"></div>
          <div class="right-imgs">
            <p class="hello">赵宇辉</p>
            <p class="hei">无新消息</p>
          </div>
        </li>
      </ul>
      <div style="height: 80px"></div>
    </div>
  </div>
</template>
<script setup lang="ts"></script>
<style scoped>
.search :deep(.van-search__content) {
  background-color: rgb(97, 111, 238, 0.3);
}
.search {
  padding-right: 24px;
  padding-left: 24px;
}
.xx {
  padding-top: 58px;
  color: #ffffffff;
  font-size: 20px;
  width: 53px;
  height: 24px;
  font-size: 20px;
  /* font-family: PingFang SC-Semibold, PingFang SC; */
  font-weight: 600;
  text-align: center;
  color: #ffffff;
  line-height: 20px;
  margin: 0 auto;
  margin-bottom: 11px;
}
.header {
  background-color: #0e47fe;
  height: 283px;
}
.header p {
  text-align: center;
  font-size: 20px;
  color: white;
  line-height: 40px;
}

.header-content {
  text-align: center;
  box-sizing: border-box;
}
.header-content input {
  width: 293px;
  height: 30px;
  margin: 15px;
  background: #616fee;
  border-radius: 20px 20px 20px 20px;
  opacity: 1;
  border-style: none;
  font-size: 15px;
  color: #ffffffff;
  text-indent: 35px;
  background-image: url(../assets/images/seacher.png);
  background-size: 22px;
  background-repeat: no-repeat;
  background-position: 8px 3px;
}
:-ms-input-placeholder {
  font-size: 15px;
  font-weight: 400;
  color: #ffffff;
}
:-moz-placeholder {
  font-size: 15px;
  font-weight: 400;
  color: #ffffff;
}
::-webkit-input-placeholder {
  font-size: 15px;
  font-weight: 400;
  color: #ffffff;
}
.content {
  margin-top: -130px;
  border-radius: 20px 20px 0px 0px;
  z-index: 2000;
  background-color: #ffffff;
}
.van-nav-bar {
  background-color: #4354e7;
}
.van-nav-bar__title {
  color: #ffffff;
  font-size: 20px;
}
ul {
  margin: 0 auto;
  padding-top: 20px;
  margin-top: 20px;
}
ul li {
  padding-left: 22px;
  padding-right: 22px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  margin: 8px 0;
}
li .tuB {
  position: relative;
  left: -10px;
  bottom: -20px;
  box-sizing: border-box;
}
li .kong {
  width: 15px;
}
li .tuB img {
  width: 15px;
  height: 15px;
}
img {
  width: 49px;
  height: 49px;
  /* background-color: red; */
  position: relative;
}
.right-imgs {
  /* background-color: blue; */
  width: 300px;
}
.right-imgs .hello {
  font-size: 16px;
  font-weight: 800;
  margin: 5px;
  margin-left: 0;
}
.right-imgs .hei {
  font-size: 12px;
  color: #999999ff;
  margin-top: 10px;
}
</style>
