<template>
  <div>
    <header>
      <h1>房态</h1>
      <van-search
        shape="round"
        background="rgba(0,0,0,0)"
        placeholder="请输入搜索关键词"
        class="search"
      />
      <!-- <div class="selections">
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
      </div> -->
      <!-- <div class="options" v-show="show">
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
      </div> -->
      <div class="cut"></div>
    </header>
    <div class="content">
      <div class="item" v-for="item in houses" :key="item.id">
        <div class="left">
          <img
            :src="dalImg(item.images.split(',')[0])"
            alt=""
            @click="toRooms(item.id!)"
          />
        </div>
        <div class="info">
          <div class="title">{{ item.dwelling }}</div>
          <div class="address">{{ item.address }}</div>
          <div class="area">{{ item.community }}</div>
          <div class="status">
            {{ item.isWhole ? "整租" : "合租" }} | <span>正在出租</span>
          </div>
          <div class="position">{{ item.region }}|{{ item.street }}</div>
        </div>
      </div>
    </div>
    <van-button
      icon="plus"
      type="primary"
      style="border-radius: 50%; position: fixed; right: 8px; bottom: 120px"
      @click="addHouseHandle"
    />
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
import { useRouter } from "vue-router";
import { loadHousesListAPI } from "../services/houses";
import { dalImg } from "../utils/tools";
const flag = ref<boolean>(false);
const show = ref<boolean>(false);
const num = ref<number>(0);
const houses = ref<House.IHouse[]>();

const router = useRouter();

const addHouseHandle = () => {
  router.push({
    name: "AddHouse",
  });
};

loadHousesListAPI().then((res) => {
  houses.value = res.data;
});

const toRooms = (id: string) => {
  router.push({
    name: "HouseRooms",
    params: {
      id,
    },
  });
};
</script>
<style scoped lang="scss">
.search :deep(.van-search__content) {
  background-color: rgb(97, 111, 238, 0.3);
}
.search {
  padding-right: 24px;
  padding-left: 24px;
}
header {
  width: 100%;
  /* height: 220px; */
  background: #4354e7;
  border-radius: 0px 0px 40px 40px;
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
  width: 90%;

  margin: 0 auto;
  .item {
    display: flex;
    gap: 2px;
    margin: 12px 0;
    border-radius: 12px;
    .left {
      width: 100px;
      overflow: hidden;
      border-top-left-radius: 20px;
      border-bottom-left-radius: 20px;
      img {
        height: 100%;
      }
    }
    .info {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: start;
      justify-content: space-around;
      box-shadow: 1px 1px 0 gainsboro;

      padding: 8px;
      .title {
        font-size: 20px;
      }
      .address,
      .area {
        font-size: 10px;
        color: #999999;
      }
      .status {
        font-size: 10px;
        color: #ffcf7b;
      }
      .position {
        font-size: 12px;
      }
    }
  }
}
</style>
