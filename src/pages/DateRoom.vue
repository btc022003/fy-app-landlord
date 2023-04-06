<template>
  <div class="date-rooms">
    <van-nav-bar title="预约看房" left-arrow @click-left="goBack" />
    <div
      class="date-info shadow p-1 m-1 gap-1 flex flex-col"
      v-for="item in dateRooms"
    >
      <h3>{{ item.room.content }}|{{ item.room.house.address }}</h3>
      <p>姓名:{{ item.user.realName }}</p>
      <p>
        手机号:<a :href="`tel:${item.user.userName}`">{{
          item.user.userName
        }}</a>
      </p>
      <p>预约时间:{{ formatDate(item.dateTime) }}</p>
      <p>备注:{{ item.remarks }}</p>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import { loadDatesInfoAPI } from "../services/houses";
import { formatDate } from "../utils/tools";
const router = useRouter();

const goBack = () => router.back();

const dateRooms = ref<House.IDateRoom[] | undefined>();

loadDatesInfoAPI().then((res) => {
  // console.log(res.data);
  dateRooms.value = res.data;
});
</script>
<style lang="scss" scoped></style>
