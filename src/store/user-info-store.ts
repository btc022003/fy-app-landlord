import { defineStore } from "pinia";
import { ref } from "vue";
// 路由动画 状态存储
export const useUserInfoStore = defineStore("userInfo", () => {
  const info = ref<User.ILandLord>();
  return { info };
});
