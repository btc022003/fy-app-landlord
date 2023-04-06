<template>
  <div class="date-rooms">
    <van-nav-bar title="报修" left-arrow @click-left="goBack" />
    <div
      v-for="item in repairs"
      class="repair-item p-1 m-1 shadow flex flex-col gap-1"
    >
      <h3>
        {{ item.roomContract.room.content }} |
        {{ item.roomContract.room.house.address }}
      </h3>
      <p>姓名:{{ item.roomContract.user.realName }}</p>
      <p>
        联系方式:<a :href="`tel:${item.roomContract.user.userName}`">{{
          item.roomContract.user.userName
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
      <div class="replay border-red-300">
        <p class="text-red-600 font-bold" v-if="item.isReplyed">
          回复:{{ item.replyContent }}
        </p>
      </div>
      <van-button
        v-if="!item.isReplyed"
        size="mini"
        type="danger"
        @click="replayHandle(item.id)"
        >回复</van-button
      >
      <van-button v-else disabled>已回复</van-button>
    </div>
    <van-popup
      v-model:show="show"
      closeable
      round
      :close-on-click-overlay="false"
      position="bottom"
      @close="currentId = ''"
      :style="{ padding: '64px' }"
    >
      <van-form @submit="onSubmit">
        <van-cell-group inset>
          <van-field
            v-model="replay"
            name="replay"
            placeholder="请输入回复内容"
            type="textarea"
            :rules="[{ required: true, message: '请输入回复内容' }]"
          />
        </van-cell-group>
        <div style="margin: 16px">
          <van-button round block type="primary" native-type="submit">
            提交
          </van-button>
        </div>
      </van-form>
    </van-popup>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import { loadRepairsInfoAPI, replyRepairsAPI } from "../services/houses";
import { dalImg } from "../utils/tools";
const router = useRouter();

const repairs = ref<House.IRepair[] | undefined>();
const show = ref(false);
const replay = ref("");
const currentId = ref("");
const goBack = () => router.back();

/**
 * 加载数据
 */
const loadData = () =>
  loadRepairsInfoAPI().then((res) => {
    // console.log(res.data);
    repairs.value = res.data;
  });

const replayHandle = (id: string) => {
  show.value = true;
  currentId.value = id;
};

const onSubmit = async (v: any) => {
  // console.log(v);
  // 回复用户的报修
  await replyRepairsAPI(currentId.value, replay.value, "");
  show.value = false;
  loadData();
};

loadData();
</script>
