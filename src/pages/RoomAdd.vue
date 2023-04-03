<template>
  <div class="room-add">
    <van-nav-bar title="房源新增" left-arrow @click-left="goBack" />
    <van-form @submit="onSubmit">
      <van-cell-group inset>
        <van-field
          v-model="content"
          name="content"
          label="详细信息"
          placeholder="详细信息"
          :rules="[{ required: true, message: '详细信息' }]"
        />
        <van-field
          v-model="price"
          name="price"
          label="价格"
          placeholder="价格"
          :rules="[{ required: true, message: '价格' }]"
        />
        <van-field name="radio" label="屋内设施">
          <template #input
            ><van-checkbox-group v-model="devices" direction="horizontal">
              <van-checkbox
                style="margin: 4px"
                :name="item.id"
                shape="square"
                v-for="item in allDevices"
                :key="item.id"
                >{{ item.name }}</van-checkbox
              >
            </van-checkbox-group>
          </template>
        </van-field>
        <van-field name="radio" label="房屋照片">
          <template #input>
            <van-uploader
              :max-count="6"
              :after-read="afterRead"
              v-model="fileList"
              :before-delete="delFromFileList"
            />
          </template>
        </van-field>
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
import { useRouter, useRoute } from "vue-router";
import { post } from "../utils/request";
import { addRoomInfoAPI, loadDevicesAPI } from "../services/houses";
const router = useRouter();
const { params } = useRoute();

const content = ref("");
const price = ref(0);
const devices = ref([]);
const allDevices = ref<House.IDevice[]>([]); // 设备

const goBack = () => router.back();

loadDevicesAPI().then((res) => (allDevices.value = res.data));

const fileList = ref<any>([]);
const imgs = ref<any>([]); // 上传之后的图片地址
const afterRead = (file: any) => {
  // 此时可以自行将文件上传至服务器
  // console.log(file);
  const formData = new FormData();
  formData.append("file", file.file);

  post("/api/v1/common/upload", formData).then((res) => {
    imgs.value.push(res.data);
  });
};
const delFromFileList = (file: any, detail: any) => {
  // console.log(detail);
  fileList.value.splice(detail.index, 1);
  imgs.value.splice(detail.index, 1);
};

const onSubmit = async () => {
  // 新增
  await addRoomInfoAPI(params.id as string, {
    content: content.value,
    price: price.value * 1,
    devices: devices.value.join(","),
    images: imgs.value.join(","),
  });
  router.back();
};
</script>
