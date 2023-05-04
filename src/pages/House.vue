<template>
  <div class="hh">
    <header>
      <h1>房态</h1>
      <van-search
        shape="round"
        background="rgba(0,0,0,0)"
        placeholder="请输入搜索关键词"
        class="search"
      />
      <div class="selections">
        <div @click="show = !show">
          <p>房源状态</p>
          <img src="../assets/images/xx-k.png" alt="" />
        </div>
        <div>
          <p>价格</p>
          <img src="../assets/images/xx-k.png" alt="" />
        </div>
        <div>
          <p>位置</p>
          <img src="../assets/images/xx-k.png" alt="" />
        </div>
      </div>
      <div class="options" v-show="show">
        <span :class="num == 1 ? 'active' : 'renttype'" @click="num = 1"
          >合租</span
        ><span :class="num == 2 ? 'active' : 'renttype'" @click="num = 2"
          >整租</span
        ><span :class="num == 3 ? 'active' : 'renttype'" @click="num = 3"
          >即将到期</span
        ><span :class="num == 4 ? 'active' : 'renttype'" @click="num = 4"
          >有欠款</span
        ><span :class="num == 5 ? 'active' : 'renttype'" @click="num = 5"
          >空房可租</span
        ><span :class="num == 6 ? 'active' : 'renttype'" @click="num = 6"
          >在租中</span
        >
      </div>
      <div class="cut"></div>
    </header>
    <div class="content">
      <div class="location">
        <span></span>
        <p>朗悦·公园道1号·玺园</p>
      </div>
      <div class="wrap">
        <div class="title">
          <h2>1栋3单元506</h2>
          <div>
            <img src="../assets/imgs/m.png" alt="" /> <span>3</span>
            <img src="../assets/imgs/c.png" alt="" /> <span>3</span>
            <img src="../assets/imgs/hs.png" alt="" /> <span>1</span>
            <img src="../assets/imgs/mt.png" alt="" /> <span>1</span>
          </div>
        </div>
        <ul>
          <li class="person">
            <div class="border"></div>
            <section>
              <div class="left">
                <p class="who">孙宇辉</p>
                <p class="pay">押一付三</p>
              </div>
              <div class="middle">
                <p>
                  <span class="where">主卧</span>
                  <span class="day">已入住306天</span>
                </p>
                <p class="start">入住:2021年12月27日</p>
              </div>
              <div class="right">
                <p>
                  <span class="out">3天</span>
                  <span class="price">￥1200</span>
                </p>
                <p class="end">到期:2022年12月27日</p>
              </div>
            </section>
            <img src="../assets/imgs/bi.png" alt="" @click="flag = !flag" />
          </li>
          <li class="person">
            <div class="border"></div>
            <section>
              <div class="left">
                <p class="who">孙宇辉</p>
                <p class="pay">押一付三</p>
              </div>
              <div class="middle">
                <p>
                  <span class="where">主卧</span>
                  <span class="day">已入住306天</span>
                </p>
                <p class="start">入住:2021年12月27日</p>
              </div>
              <div class="right">
                <p>
                  <span class="out">3天</span>
                  <span class="price">￥1200</span>
                </p>
                <p class="end">到期:2022年12月27日</p>
              </div>
            </section>
            <img src="../assets/imgs/bi.png" alt="" @click="flag = !flag" />
          </li>
          <li class="person">
            <div class="border"></div>
            <section>
              <div class="left">
                <p class="who">孙宇辉</p>
                <p class="pay">押一付三</p>
              </div>
              <div class="middle">
                <p>
                  <span class="where">主卧</span>
                  <span class="day">已入住306天</span>
                </p>
                <p class="start">入住:2021年12月27日</p>
              </div>
              <div class="right">
                <p>
                  <span class="out">3天</span>
                  <span class="price">￥1200</span>
                </p>
                <p class="end">到期:2022年12月27日</p>
              </div>
            </section>
            <img src="../assets/imgs/bi.png" alt="" @click="flag = !flag" />
          </li>
        </ul>
        <div class="fee">
          <div>
            <span class="greenlight"></span>
            <span>电费正常</span>
          </div>
          <div>
            <span class="redlight"></span>
            <span>水费欠费</span>
          </div>
        </div>
      </div>
      <div class="wrap">
        <div class="title">
          <h2>1栋3单元506</h2>
          <div>
            <img src="../assets/imgs/m.png" alt="" /> <span>3</span>
            <img src="../assets/imgs/c.png" alt="" /> <span>3</span>
            <img src="../assets/imgs/hs.png" alt="" /> <span>1</span>
            <img src="../assets/imgs/mt.png" alt="" /> <span>1</span>
          </div>
        </div>
        <ul>
          <li class="person">
            <div class="border"></div>
            <section>
              <div class="left">
                <p class="who">孙宇辉</p>
                <p class="pay">押一付三</p>
              </div>
              <div class="middle">
                <p>
                  <span class="where">主卧</span>
                  <span class="day">已入住306天</span>
                </p>
                <p class="start">入住:2021年12月27日</p>
              </div>
              <div class="right">
                <p>
                  <span class="out">3天</span>
                  <span class="price">￥1200</span>
                </p>
                <p class="end">到期:2022年12月27日</p>
              </div>
            </section>
            <img src="../assets/imgs/bi.png" alt="" @click="flag = !flag" />
          </li>
          <li class="person">
            <div class="border"></div>
            <section>
              <div class="left">
                <p class="who">孙宇辉</p>
                <p class="pay">押一付三</p>
              </div>
              <div class="middle">
                <p>
                  <span class="where">主卧</span>
                  <span class="day">已入住306天</span>
                </p>
                <p class="start">入住:2021年12月27日</p>
              </div>
              <div class="right">
                <p>
                  <span class="out">3天</span>
                  <span class="price">￥1200</span>
                </p>
                <p class="end">到期:2022年12月27日</p>
              </div>
            </section>
            <img src="../assets/imgs/bi.png" alt="" @click="flag = !flag" />
          </li>
          <li class="person">
            <div class="border"></div>
            <section>
              <div class="left">
                <p class="who">孙宇辉</p>
                <p class="pay">押一付三</p>
              </div>
              <div class="middle">
                <p>
                  <span class="where">主卧</span>
                  <span class="day">已入住306天</span>
                </p>
                <p class="start">入住:2021年12月27日</p>
              </div>
              <div class="right">
                <p>
                  <span class="out">3天</span>
                  <span class="price">￥1200</span>
                </p>
                <p class="end">到期:2022年12月27日</p>
              </div>
            </section>
            <img src="../assets/imgs/bi.png" alt="" @click="flag = !flag" />
          </li>
        </ul>
        <div class="fee">
          <div>
            <span class="greenlight"></span>
            <span>电费正常</span>
          </div>
          <div>
            <span class="redlight"></span>
            <span>水费欠费</span>
          </div>
        </div>
      </div>
    </div>
    <van-popup
      v-model:show="flag"
      round
      position="bottom"
      :style="{ height: '30%' }"
      class="tipper"
      style="padding: 17px 32px"
      :safe-area-inset-bottom="true"
      :safe-area-inset-top="true"
    >
      <div class="box">
        <h2>1栋3单元102</h2>
        <ul>
          <li @click="flag = false">设为脏房</li>
          <li @click="flag = false">设为维修房</li>
          <li @click="flag = false">锁房</li>
        </ul>
      </div>
    </van-popup>
    <div style="height: 50px"></div>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
let flag = ref<boolean>(false);
let show = ref<boolean>(false);
let num = ref<number>(0);
</script>
<style scoped>
.search :deep(.van-search__content) {
  background-color: rgb(97, 111, 238, 0.3);
}
.search {
  padding-right: 24px;
  padding-left: 24px;
}
.hh>header {
  width: 375px;
  /* height: 220px; */
  background: #0e47fe;
  /* border-radius: 0px 0px 40px 40px; */
  opacity: 1;
  margin-top: 0;
  padding-top: 58px;
  display: flex;
  flex-direction: column;
  position: sticky;
  top: 0;
}
header h1 {
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
  /* -webkit-background-clip: text; */
  /* -webkit-text-fill-color: transparent; */
}
header input {
  width: 293px;
  height: 30px;
  background: #616fee url(../assets/imgs/fdj1.png) no-repeat 16px 3px;
  border-radius: 20px 20px 20px 20px;
  margin: 0 auto;
  opacity: 1;
  font-size: 15px;
  font-weight: 400;
  color: #ffffff;
  border: none;
  outline: none;
  text-indent: 50px;
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
.selections {
  display: flex;
  justify-content: space-between;
  width: 293px;
  margin: 0 auto;
  font-weight: 600;
  color: #ffffff;
  font-size: 16px;
  margin-top: 17px;
}
.selections div {
  display: flex;
  align-items: center;
}
.selections div img {
  width: 10px;
  height: 10px;
}
.selections div > span {
  display: block;
  width: 0px;
  height: 6px;
  border-top: 6px solid white;
  border-left: 5px solid #4354e7;
  border-right: 5px solid #4354e7;
  margin-left: 4px;
  margin-top: 8px;
  background-color: #4354e7;
}
.options {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 293px;
  margin: 0 auto;
  margin-top: 13px;
}

.options span {
  width: 61px;
  height: 24px;
  background: #5062ff;
  border-radius: 12px 12px 12px 12px;
  opacity: 1;
  /* margin-right: 18px; */
  margin-bottom: 11px;
  font-size: 10px;
  line-height: 24px;
  text-align: center;
  font-weight: 400;
  color: #ffffff;
}
.options .active {
  color: #3445d9;
  width: 61px;
  line-height: 24px;
  background: white;
  border-radius: 12px 12px 12px 12px;
  opacity: 1;
  text-align: center;
  display: block;
  font-weight: 400;
  font-size: 12px;
}
.option span:nth-child(4n) {
  margin-right: 0;
  background-color: red;
}
/* .options span .active {
  background: #ffffff;
  color: #3445d9;
} */
.cut {
  width: 70px;
  height: 4px;
  background: #d9d9d9;
  border-radius: 3px 3px 3px 3px;
  opacity: 1;
  margin: 0 auto;
  margin-top: 20px;
}
.content {
  width: 330px;
  margin: 0 auto;
}
.location {
  margin: 24px 0px;
}
.location p {
  width: 118px;
  height: 12px;
  font-size: 12px;
  font-weight: 400;
  color: #8f95b2;
  line-height: 14px;
}
.title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 276px;
  height: 26px;
  font-size: 16px;
  font-weight: 600;
  color: #333333;
  line-height: 19px;
  margin-bottom: 9px;
}
.title h2 {
  font-size: 16px;
  font-weight: 600;
}
.title div {
  display: flex;
  align-items: center;
}
.title div img {
  width: 14px;
  height: 14px;
}
.title div span {
  width: 5px;
  height: 15px;
  font-size: 11px;
  font-weight: 400;
  color: #d7d7d7;
  margin-right: 13px;
  line-height: 15px;
}
.wrap {
  margin-bottom: 34px;
}
.wrap ul {
  width: 100%;
}
.person {
  list-style: none;
  display: flex;
  width: 100%;
  align-items: center;
  background: #ffffff;
  border-radius: 0px 20px 20px 0px;
  opacity: 1;
  margin-bottom: 5px;
}
.person .border {
  width: 4px;
  height: 53px;
  background: #8790e3;
  border-radius: 20px 0px 0px 20px;
  opacity: 1;
}
.person section {
  display: flex;
  align-items: center;
}
.person section .left {
  margin-left: 10px;
  height: 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.left .who {
  width: 49px;
  line-height: 22px;
  font-size: 14px;
  font-weight: 600;
  color: #666666;
}
.left .pay {
  line-height: 16px;
  font-size: 10px;
  font-weight: 400;
  color: #b7b5b5;
}
.middle {
  height: 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 3px;
}
.middle p:nth-child(1) {
  margin-top: 5px;
}
.middle .where {
  font-size: 11px;
  font-weight: 600;
  color: #f9ab21;
  line-height: 13px;
  margin-right: 3px;
}
.middle .start {
  width: 120px;
  line-height: 16px;
  font-size: 10px;
  font-weight: 400;
  color: #b7b5b5;
}
.right {
  height: 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 3px;
  text-align: end;
}
.right .end {
  width: 120px;
  line-height: 16px;
  font-size: 10px;
  font-weight: 400;
  color: #b7b5b5;
}
.right .price {
  font-size: 20px;
  font-weight: 600;
  color: #ffaf22;
  line-height: 23px;
}
.right .out {
  padding: 0px 5px;
  height: 13px;
  background: #ff5f33;
  border-radius: 4px 4px 4px 4px;
  opacity: 1;
  color: white;
}
.person img {
  width: 17px;
  height: 17px;
  margin-left: 5px;
}
.fee {
  display: flex;
  margin-left: 10px;
  margin-top: 5px;
}
.fee div {
  display: flex;
  margin-right: 20px;
  align-items: center;
}
.fee .redlight {
  width: 6px;
  height: 6px;
  background: #ff673d;
  opacity: 1;
  border-radius: 100%;
  margin-right: 5px;
}
.fee .greenlight {
  width: 6px;
  height: 6px;
  background: #34d196;
  opacity: 1;
  border-radius: 100%;
  margin-right: 5px;
}
.box h2 {
  height: 50px;
  text-align: center;
  font-weight: 600;
  color: #000000;
  line-height: 19px;
  font-size: 16px;
  height: 20px;
}
.box ul {
  width: 283px;

  margin: 0 auto;
  margin-top: 10px;
  text-align: center;
}
.box ul li {
  padding: 10px 0;
  border-bottom: 1px solid #e7e7e7;
  font-weight: 600;
  color: #818181;
  line-height: 14px;
  font-size: 12px;
}
.box ul li:nth-child(3) {
  border: none;
}

.content .item .left{
  border-radius: 0;
}
.info{
  border: none;
}
</style>
