<template>
  <div class="g-contract">
    <van-nav-bar title="生成合同" left-arrow @click-left="goBack" />
    <!-- 表单 -->
    <van-form @submit="onSubmit">
      <van-cell-group inset>
        <van-field
          v-model="name"
          name="name"
          label="客户姓名"
          placeholder="姓名"
          :rules="[{ required: true, message: '姓名' }]"
        />
        <van-field
          v-model="price"
          name="price"
          label="租金"
          placeholder="租金"
          :rules="[{ required: true, message: '租金' }]"
        />
        <van-field
          v-model="mobile"
          name="mobile"
          label="客户手机号"
          placeholder="手机号"
          :rules="[{ required: true, message: '手机号' }]"
        />
        <van-cell
          title="开始日期"
          :value="startDate"
          @click="showStart = true"
          is-link
        />
        <van-cell
          title="结束日期"
          :value="endDate"
          @click="showEnd = true"
          is-link
        />
        <van-field
          v-model="remarks"
          name="remarks"
          label="备注"
          placeholder="备注"
          type="textarea"
        />
      </van-cell-group>
      <van-calendar v-model:show="showStart" @confirm="onStartConfirm" />
      <van-calendar v-model:show="showEnd" @confirm="onEndConfirm" />
      <div style="margin: 16px">
        <van-button round block type="primary" native-type="submit">
          提交
        </van-button>
      </div>
    </van-form>
  </div>
</template>
<script lang="ts" setup>
import { ref } from "vue";
import { useRouter, useRoute } from "vue-router";
import { formatDate } from "../utils/tools";
import { generateContractAPI } from "../services/houses";
import { showToast } from "vant";
const router = useRouter();
const goBack = () => router.back();

const { params } = useRoute();

const name = ref("");
const mobile = ref("");
const startDate = ref("");
const endDate = ref("");
const remarks = ref("");
const price = ref(0);
const showStart = ref(false);
const showEnd = ref(false);
const onStartConfirm = (value: any) => {
  // console.log(value);

  showStart.value = false;
  startDate.value = formatDate(value);
};

const onEndConfirm = (value: any) => {
  showEnd.value = false;
  console.log(formatDate(value));
  endDate.value = formatDate(value);
};

const onSubmit = async (v: any) => {
  // console.log(v);
  const res = await generateContractAPI({
    userMobile: mobile.value,
    roomId: params.id as string,
    startTime: startDate.value,
    endTime: endDate.value,
    price: price.value * 1,
    payCategory: 1,
    remarks: remarks.value,
  });
  if (res.success) {
    showToast("合同生成成功");
    router.back();
  } else {
    showToast({
      type: "fail",
      message: res.errorMessage,
    });
  }
};
</script>
