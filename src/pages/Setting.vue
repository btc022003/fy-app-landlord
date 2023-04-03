<template>
  <div class="setting">
    <van-nav-bar title="实名认证" left-arrow @click-left="goBack" />
    <van-form @submit="onSubmit">
      <van-cell-group inset>
        <van-field
          v-model="realName"
          name="realName"
          label="姓名"
          placeholder="姓名"
          :rules="[{ required: true, message: '请填写姓名' }]"
        />
        <van-field
          v-model="idNum"
          type="text"
          name="idNum"
          label="身份证号"
          placeholder="身份证号"
          :rules="[{ required: true, message: '请填写身份证号' }]"
        />
      </van-cell-group>
      <div style="margin: 16px">
        <van-button round block type="primary" native-type="submit">
          提交
        </van-button>
      </div>
    </van-form>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import { storeToRefs } from "pinia";
import { showToast } from "vant";
import { setInfoAPI } from "../services/auth";
import { useUserInfoStore } from "../store/user-info-store";

const store = useUserInfoStore();
const { info } = storeToRefs(store);
const router = useRouter();
const realName = ref(info.value?.realName);
const idNum = ref(info.value?.idNum);

const goBack = () => {
  router.back();
};

const onSubmit = async (values: User.IRealInfo) => {
  await setInfoAPI(values);
  showToast("实名认证成功");
  setTimeout(() => {
    goBack();
  }, 1000);
};
</script>
