<template>
  <div class="date-rooms">
    <van-nav-bar title="投诉" left-arrow @click-left="goBack" />
    <div
      v-for="item in complains"
      :key="item.id"
      class="complain-item p-1 m-1 shadow flex flex-col gap-1"
    >
      <h3>
        {{ item.contract.room.content }} |
        {{ item.contract.room.house.address }}
      </h3>
      <p>姓名:{{ item.user?.realName }}</p>
      <p>
        联系方式:<a :href="`tel:${item.user.userName}`">{{
          item.user.userName
        }}</a>
      </p>
      <p>说明:{{ item.remarks }}</p>
      <div class="images flex flex-wrap gap-1">
        <img
          class="w-12 h-12 rounded"
          v-for="img in item.askImage.split(',')"
          :src="dalImg(img)"
          alt=""
        />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import { loadComplainInfoAPI } from "../services/houses";
import { dalImg } from "../utils/tools";
const router = useRouter();

const goBack = () => router.back();

const complains = ref<House.IComplain[] | undefined>();
loadComplainInfoAPI().then((res) => {
  // console.log(res.data);
  complains.value = res.data;
});
</script>
