<template>
  <div class="house-add">
    <van-nav-bar title="添加房源" left-arrow @click-left="goBack" />

    <van-popup v-model:show="show" position="bottom"
      ><van-area title="地区选择" :area-list="areaList" @confirm="selArea"
    /></van-popup>

    <van-form @submit="onSubmit">
      <van-cell-group inset>
        <van-cell
          is-link
          @click="show = true"
          :title="region ? region : '选择地区'"
        ></van-cell>
        <van-field
          v-model="dwelling"
          name="dwelling"
          label="小区名字"
          placeholder="小区名字"
          :rules="[{ required: true, message: '小区名字' }]"
        />
        <van-field
          name="street"
          v-model="street"
          label="街道"
          placeholder="街道"
          :rules="[{ required: true, message: '街道' }]"
        />
        <van-field
          name="community"
          v-model="community"
          label="社区"
          placeholder="社区"
          :rules="[{ required: true, message: '社区' }]"
        />
        <van-field
          name="address"
          v-model="address"
          label="地址"
          placeholder="地址"
          :rules="[{ required: true, message: '地址' }]"
        />
        <van-field name="radio" label="单选框">
          <template #input>
            <van-radio-group v-model="isWhole" direction="horizontal">
              <van-radio :name="true">整租</van-radio>
              <van-radio :name="false">合租</van-radio>
            </van-radio-group>
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
<script lang="ts" setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { areaList } from "@vant/area-data";
import { addHouseInfoAPI } from "../services/houses";
import { post } from "../utils/request";
import { dalImg } from "../utils/tools";
const router = useRouter();

const dwelling = ref("");
const street = ref("");
const community = ref("");
const address = ref("");
const show = ref(false);
const region = ref("");
const isWhole = ref(true);
const fileList = ref<any>([]);
const imgs = ref<any>([]); // 上传之后的图片地址

const goBack = () => {
  router.back();
};

const selArea = (v: any) => {
  // console.log(v.selectedOptions.map((item: any) => item.text).join("-"));
  region.value = v.selectedOptions.map((item: any) => item.text).join("-");
  show.value = false;
};

const afterRead = (file: any) => {
  // 此时可以自行将文件上传至服务器
  // console.log(file);
  const formData = new FormData();
  formData.append("file", file.file);

  post("/api/v1/common/upload", formData).then((res) => {
    // console.log(res.data);
    // imgUrl.value = res.data;
    // fileList.value.push({
    //   url: dalImg(res.data),
    //   originUrl: res.data,
    // });
    imgs.value.push(res.data);
  });
};
const delFromFileList = (file: any, detail: any) => {
  // console.log(detail);
  fileList.value.splice(detail.index, 1);
  imgs.value.splice(detail.index, 1);
};

const onSubmit = async () => {
  await addHouseInfoAPI({
    region: region.value,
    dwelling: dwelling.value,
    street: street.value,
    community: community.value,
    address: address.value,
    isWhole: isWhole.value,
    images: imgs.value.join(","),
  });
  router.back();
};
</script>
