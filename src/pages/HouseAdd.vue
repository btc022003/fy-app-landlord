<template>
  <div class="house-add">
    <van-nav-bar title="添加房源" left-arrow @click-left="goBack" />
    <van-form @submit="onSubmit">
      <van-cell-group inset>
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
const router = useRouter();

const dwelling = ref("");
const street = ref("");
const community = ref("");
const address = ref("");

const goBack = () => {
  router.back();
};

const onSubmit = () => {};
</script>
