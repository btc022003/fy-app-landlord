<template>
  <div style="background-color: #f9f9fa">
    <div class="safe-head"></div>
    <div class="wrap">
      <div class="head-bg"></div>
      <div class="content">
        <van-search
          shape="round"
          background="rgba(0,0,0,0)"
          placeholder="请输入搜索关键词"
          class="search"
        />
        <div class="wel-wrap">
          <div class="user">
            <img src="../assets/head_img.png" alt="" />
            <p>
              <span>{{ info?.realName || "某某" }}</span
              >，你好
            </p>
          </div>
          <ul class="info-wrap">
            <li @click="$router.push('/page/emptyhouse')">
              <img src="../assets/search_title.png" alt="" />
              <p>{{ homeData?.emptyRoomCount }}</p>
            </li>
            <li>
              <img src="../assets/tenant_title.png" alt="" />
              <p>
                <span>+</span>{{ homeData?.fullRoomCount }}<span>入住</span>
              </p>
            </li>
          </ul>
          <ul class="icons">
            <li>
              <router-link to="/mine/dates">
                <img src="../assets/room_look.png" alt="" />
                <p>预约看房</p>
              </router-link>
            </li>
            <li>
              <router-link to="/mine/repairs">
                <img src="../assets/repair.png" alt="" />
                <p>维修工单</p>
              </router-link>
            </li>
            <li>
              <router-link to="/mine/qa">
                <img src="../assets/complaint.png" alt="" />
                <p>投诉工单</p>
              </router-link>
            </li>
            <li>
              <router-link to="/house">
                <img src="../assets/contract.png" alt="" />
                <p>全部合同</p>
              </router-link>
            </li>
            <li>
              <router-link to="/house">
                <img src="../assets/create_contract.png" alt="" />
                <p>新建合同</p>
              </router-link>
            </li>
          </ul>
        </div>
        <!-- 待确认合同 -->
        <div class="await-contract">
          <TitleText
            title="待确认合同"
            :sub-title="`还有${homeData?.needCheckedContract.length}份合同待确认，打个电话吧～`"
          />
        </div>
        
        <ul class="qrht">
          <li v-for="item in homeData?.needCheckedContract">
            <h3>{{ item.user.realName }}</h3>
            <img class="dz" src="../assets/dz.png" alt="" /><span>{{
              item.room.content
            }}</span>
            <p>{{ item.room.house.address }}</p>
            <p>￥{{ item.price }}/月</p>
            <a :href="`tel:${item.user.userName}`"
              ><img class="dh" src="../assets/dh.png" alt=""
            /></a>
          </li>
        </ul>
        <TitleText title="待收租金" sub-title="近期还有待收租金哦～" />
        <ul class="dszj">
          <li v-for="item in homeData?.needPayedContract">
            <div class="l">
              <h3>
                {{ item.roomContract.user.realName
                }}<span class="oranges">3天</span>
              </h3>
              <p>{{ item.roomContract.room.house.address }}</p>
              <img src="../assets/hdb.png" alt="" />
              <span>{{ item.roomContract.room.content }}</span>
            </div>
          </li>
        </ul>
        <!-- <TitleText
          title="合同到期"
          sub-title="有13位租客合同即将到期，提醒续约吧～"
          @getMore="tip"
        />
        <ul class="dszj">
          <li>
            <div class="l">
              <h3>孙宇辉<span class="oranges">3天</span></h3>
              <p>1栋2单元302</p>
              <img src="../assets/hdb.png" alt="" />
              <span>朗悦·公园道1号·玺园</span>
            </div>
            <div class="r">
              <p class="orange">押一付三</p>

              <span class="orange" id="tim">2022年12月04日到期</span>
              <p>入住时间:2021年12月27日</p>
            </div>
            <div class="foot">
              <p class="grn"></p>
              <span>电费正常</span>
              <p class="rd"></p>
              <span>水费正常</span>
            </div>
          </li>
          <li>
            <div class="l">
              <h3>孙宇辉<span class="orangess">10天</span></h3>
              <p>1栋2单元302</p>
              <img src="../assets/hdb.png" alt="" />
              <span>朗悦·公园道1号·玺园</span>
            </div>
            <div class="r">
              <p class="orange">押一付三</p>

              <span class="orange" id="tim">2022年12月04日到期</span>
              <p>入住时间:2021年12月27日</p>
            </div>
            <div class="foot">
              <p class="grn"></p>
              <span>电费正常</span>
              <p class="rd"></p>
              <span>水费正常</span>
            </div>
          </li>
          <li>
            <div class="l">
              <h3>孙宇辉<span class="greens">15天</span></h3>
              <p>1栋2单元302</p>
              <img src="../assets/hdb.png" alt="" />
              <span>朗悦·公园道1号·玺园</span>
            </div>
            <div class="r">
              <p class="orange">押一付三</p>

              <span class="orange" id="tim">2022年12月04日到期</span>
              <p>入住时间:2021年12月27日</p>
            </div>
            <div class="foot">
              <p class="grn"></p>
              <span>电费正常</span>
              <p class="rd"></p>
              <span>水费正常</span>
            </div>
          </li>
        </ul> -->
      </div>
    </div>

    <div style="height: 50px"></div>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import { storeToRefs } from "pinia";
import { loadUserInfoAPI } from "../services/auth";
import { useUserInfoStore } from "../store/user-info-store";
import { homePageDataAPI } from "../services/houses";
import TitleText from "../components/TitleText.vue";
import { showToast } from "vant";
let tip = () => {
  // alert("查看更多");
  showToast({
    type: "loading",
    message: "稍等",
  });
};

const store = useUserInfoStore();

const { info } = storeToRefs(store);
const homeData = ref<House.IHome>();

loadUserInfoAPI().then((res) => {
  info.value = res.data;
});

homePageDataAPI().then((res) => {
  // console.log(res.data);
  homeData.value = res.data;
});
</script>
<style scoped lang="scss">
.safe-head {
  height: 40px;
  background-color: #0e47fe;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 5;
}
.icons {
  text-align: center;
  display: flex;
  justify-content: space-around;
  font-size: 12px;
  color: #333;
  margin: 40px 0;
  img {
    width: 50px;
    height: 50px;
    border-radius: 10px;
  }
  p{
    line-height: 2;
  }
}
.user {
  margin-top: 10px;
  display: flex;
  align-items: center;
  img {
    width: 63px;
    height: 63px;
    margin-right: 10px;
  }
  p {
    color: white;
    font-size: 12px;
    span {
      font-size: 20px;
    }
  }
}
.info-wrap {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  li {
    width: 48%;
    height: 80px;
    background-color: white;
    border-radius: 10px;
    background-size: 107px 107px;
    background-repeat: no-repeat;
    background-position: 70px bottom;
    &:nth-child(1) {
      background-image: url(../assets/search_bg.png);
    }
    &:nth-child(2) {
      background-image: url(../assets/tenant_bg.png);
      img {
        height: 26px;
        margin-top: 14px;
      }
    }
    img {
      margin-left: 10px;
      margin-top: 10px;
      width: 89px;
      height: 32px;
    }
    p {
      margin-right: 15px;
      // float: right;
      margin-left: 10px;
      line-height: 30px;
      font-size: 28px;
      // color: #fdb207;
      font-weight: bolder;
      span {
        font-size: 14px;
        font-weight: normal;
      }
    }
  }
}
.wrap {
  position: relative;
  margin: 10px 0;
}
.head-bg {
  background: #0e47fe;
  height: 260px;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  // border-radius: 0 0 10px 10px;
}
.content {
  padding: 0 10px;
  padding-top: 45px;
  position: relative;
  z-index: 2;
}
.search :deep(.van-search__content) {
  background-color: rgb(97, 111, 238, 0.3);
}
.search {
  padding-right: 0;
  padding-left: 0;
}

.qrht {
  // width: 323px;
  margin: 0 auto;
  // margin-bottom: 22px;
  // margin-top: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.qrht li {
  width: 48%;
  // height: 60px;
  padding: 12px;
  position: relative;
  border-radius: 10px;
  box-shadow: 0px 4px 9px 0px rgba(14, 71, 254, 0.09);
  opacity: 1;
  background-image: url(../assets/htbj.png);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 0;
  margin: 10px 0;
  box-sizing: border-box;
}
.qrht li .dz {
  width: 8px;
  height: 8px;
  position: absolute;
  top: 18px;
  right: 60px;
}
.qrht li .dh {
  width: 25px;
  height: 25px;
  position: absolute;
  top: 48px;
  right: 14px;
}
.qrht li span {
  width: 40px;
  position: absolute;
  top: 14px;
  right: 14px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.qrht li h3 {
  font-size: 16px;
  margin-bottom: 5px;
  color: #35417d;
}
.qrht li p {
  line-height: 20px;
  font-size: 10px;
  color: #979797;
}
.dszj {
  width: 323px;
  margin: 0 auto;
  margin-top: 10px;
}
.dszj li {
  height: 102px;
  border-radius: 20px;
  background: #fff;
  padding: 10px;
  position: relative;
  margin: 10px 0;
}
.dszj .l {
  position: absolute;
  left: 15px;
}
.dszj .l h3 {
  font-size: 16px;
  margin-bottom: 5px;
  color: #35417d;
}
.dszj .l h3 span {
  width: 22px;
  height: 16px;
  margin-left: 8px;
  border-radius: 5px;
  font-size: 10px;
  padding: 3px 5px;
  color: #fff;
}
.dszj .l .oranges {
  background-color: #ff9534;
}
.dszj .l .greens {
  background-color: #34d196;
}
.dszj .l .orangess {
  background-color: #ff5f33;
}
.dszj .l p {
  font-size: 10px;
  margin-top: 10px;
  color: #8f95b2;
}
.dszj .l img {
  width: 10px;
  height: 12px;
}
.dszj .l span {
  font-size: 12px;
  color: #8f95b2;
  margin-left: 2px;
}
.dszj .r {
  margin-top: 10px;
  position: absolute;
  right: 15px;
  text-align: right;
}
.dszj .r p {
  font-size: 10px;
  color: #8f95b2;
  letter-spacing: 0.5px;
}
.dszj .r #tim {
  font-size: 14px;
}
.dszj .r .orange {
  color: #f9ab21;
}
.dszj .r span {
  font-size: 16px;
  margin-left: 12px;
  font-weight: 700;
  color: #8f95b2;
  line-height: 20px;
}
.dszj li .foot {
  position: absolute;
  left: 15px;
  bottom: 10px;
  width: 293px;
  height: 29px;
  border-top: 2px #f2f5ff solid;
  display: flex;
}
.dszj li .foot p {
  width: 6px;
  height: 6px;
  border-radius: 3px;
  margin-top: 13px;
}
.dszj li .foot span {
  margin-right: 15px;
  margin-left: 5px;
  margin-top: 8px;
}
.dszj li .foot .grn {
  background-color: #34d196;
}
.dszj li .foot .rd {
  background-color: #ff673d;
}
.content{
  padding-top: 20px;
}
// .search .van-search{
//   div{
//     background: rgb(255 255 255 )!important;
//     box-shadow: 0 0 10px #fff;
//   }
// }
</style>
