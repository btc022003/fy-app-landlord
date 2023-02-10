import { defineStore } from "pinia";
import { ref } from "vue";
// 路由动画 状态存储
export const useTransitionStore = defineStore("transition", () => {
  const type = ref<string>("fade");
  let change = (a: string): void => {
    type.value = a;
  };
  return { type, change };
});
