<template>
  <div class="rooms">
    <van-nav-bar title="房源详情" left-arrow @click-left="goBack" />
    <div class="info">
      <h3>{{ house?.dwelling }}</h3>
      <p>{{ house?.address }}</p>
      <p>{{ house?.isWhole ? "整租" : "合租" }}</p>
    </div>
    <van-swipe-cell v-for="item in house?.rooms" :key="item.id">
      <div class="item">
        <img :src="dalImg(item.images.split(',')[0])" alt="" />
        <div class="detail">
          <p>{{ item.content }}</p>
          <p>价格:{{ item.price }}</p>
          <p>
           <b> 屋内设施:</b> <b><span class="device" v-for="d in item.roomAndDevices">{{
              d.device.name
            }}</span></b>
          </p>
          <van-button
            size="small"
            type="primary"
            @click="generateContractHandle(item)"
            >{{ item.isFull ? "查看合同" : "生成合同" }}</van-button
          >
        </div>
      </div>
      <template #right>
        <div class="r-op">
          <van-button
            square
            type="danger"
            text="删除"
            @click="delRoomHandle(item.id)"
          />
          <van-button
            square
            type="primary"
            text="修改"
            @click="editRoomHandle(item.id)"
          />
        </div>
      </template>
    </van-swipe-cell>

    <van-button
      icon="plus"
      type="primary"
      style="border-radius: 50%; position: fixed; right: 8px; bottom: 120px"
      @click="addRoomHandle"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRouter, useRoute } from "vue-router";
import {
  loadHouseByIdAPI,
  loadHouseRoomByIdAPI,
  delRoomByIdAPI,
  generateContractAPI,
} from "../services/houses";
import { dalImg } from "../utils/tools";
const router = useRouter();
const { params } = useRoute();
const house = ref<House.IHouse>();

const goBack = () => router.back();

const loadHouseInfo = () => {
  loadHouseByIdAPI(params.id as string).then((res) => {
    // console.log(res);
    house.value = res.data;
  });
};

const addRoomHandle = () => {
  router.push({
    name: "HouseRoomsAdd",
    params: {
      id: params.id,
    },
  });
};

const delRoomHandle = async (id: string) => {
  await delRoomByIdAPI(id);
  loadHouseInfo();
};

const editRoomHandle = async (id: string) => {
  router.push({
    name: "HouseRoomsAdd",
    params: {
      id: params.id,
    },
    query: {
      room: id,
    },
  });
};

const generateContractHandle = (room: House.IRoom) => {
  // generateContractAPI()
  router.push({
    name: "GenerateContract",
    params: {
      id: room.id,
    },
    query: {
      cid: room.isFull ? room.roomContracts[0].id : "",
    },
  });
};

loadHouseInfo();
</script>
<style scoped lang="scss">
.info {
  padding: 20px;
  // box-shadow: 1px 1px 1px gainsboro;
  // background-color: ;
  // margin: 12px;
  color: #fff;
  overflow: hidden;
  border-radius: 0 0 20px 20px;
  background: #0e47fe url(../assets/7fa06c592566ac39f1cbd6ddb21142ffa94dd45159303-8SyHpq.png);
  background-size: 100px;
  background-position: right;
  background-repeat: no-repeat;
  h3{
    font-size: 18px;
  }
  p {
    margin: 5px 0;
    font-size: 16px;
  }
  p:nth-child(2)~p{
    border: 1px solid #fff;
    border-radius: 5px;
    float: left;
    font-size: 12px;
    padding: 2px 5px;
    margin-right: 10px;
  }
}
.item {
  display: flex;
  padding: 12px;
  // box-shadow: 1px 1px 1px gainsboro;
  margin: 12px;
  img {
    width: 100px;
    height: 100px;
    border-radius: 5px;
  }
  .detail {
    padding: 0px 0 0 12px;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: space-between;
    flex: 1;
    p:nth-child(1){
      font-size: 18px;
      font-weight: bold;
      margin-bottom: 10px;
    }
    p:nth-child(2){
      font-size: 16px;
      color: Red;
      font-weight: bold;
    }
    p:nth-child(3){
      display: flex;
      flex-direction: column;
      margin: 10px 0;
      // flex-direction: column;
      b{
        font-weight: normal;

      }
      b:nth-child(1){
        // width: 60px;
        font-size: 14px;
        line-height: 2;
      }
      b:nth-child(2){
        // flex: 1;
      }
    }
  }
}
.r-op {
  display: flex;
  height: 100%;
  flex-direction: column;
  button {
    height: 50%;
  }
}
.device {
  padding: 2px 4px;
  // background-color: olivedrab;
  color: white;
  margin: 4px 2px;
  font-size: 10px;
  display: inline-block;
  border: 1px solid olivedrab;
  border-radius: 4px;
  color: olivedrab;
}


button{
  background: #0e47fe;
}
.rooms>button{
  box-shadow: 0 0 10px #ccc;

}
</style>
