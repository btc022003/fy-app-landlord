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
            屋内设施:<span class="device" v-for="d in item.roomAndDevices">{{
              d.device.name
            }}</span>
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
  padding: 12px;
  box-shadow: 1px 1px 1px gainsboro;
  background-color: beige;
  margin: 12px;
  p {
    margin: 4px 0;
  }
}
.item {
  display: flex;
  padding: 12px;
  box-shadow: 1px 1px 1px gainsboro;
  margin: 12px;
  img {
    width: 120px;
    height: 120px;
    border-radius: 8px;
  }
  .detail {
    padding: 12px;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: space-between;
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
  padding: 4px;
  background-color: olivedrab;
  color: white;
  margin: 4px;
  display: inline-block;
}
</style>
