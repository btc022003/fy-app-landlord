<template>
  <div class="setting">
    <van-nav-bar title="实名认证" left-arrow @click-left="goBack" />
    <dir
      style="
        display: flex;
        align-items: center;
        justify-content: center;
        padding-top: 20px;
      "
    >
      <van-uploader :max-count="1" :after-read="afterRead" v-model="fileList" />
    </dir>

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
import { post } from "../utils/request";
import { dalImg } from "../utils/tools";

const store = useUserInfoStore();
const { info } = storeToRefs(store);
const router = useRouter();
const realName = ref(info.value?.realName);
const idNum = ref(info.value?.idNum);
const fileList = ref<{ url?: string }[] | undefined>([]);
const imgUrl = ref(info.value?.avatar!);

const goBack = () => {
  router.back();
};

fileList.value = [
  {
    url: dalImg(info.value?.avatar!),
  },
];

const afterRead = (file: any) => {
  // 此时可以自行将文件上传至服务器
  // console.log(file);
  const formData = new FormData();
  formData.append("file", file.file);
  post("/api/v1/common/upload", formData).then((res) => {
    // console.log(res.data);
    imgUrl.value = res.data;
    fileList.value = [
      {
        url: dalImg(res.data),
      },
    ];
  });
};

const onSubmit = async (values: User.IRealInfo) => {
  await setInfoAPI({ ...values, avatar: imgUrl.value });
  showToast("实名认证成功");
  setTimeout(() => {
    goBack();
  }, 1000);
};
</script>
