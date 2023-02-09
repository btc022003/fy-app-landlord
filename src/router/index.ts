import { createRouter, createWebHashHistory } from "vue-router";
import routes from "./routes";
// 引入路由过渡状态
import { useTransitionStore } from "../store/transitionStore";

let router = createRouter({
  history: createWebHashHistory(),
  routes,
});
// 全局前置守卫
router.beforeEach((from, to, next) => {
  // 根据路径段数 控制路由过渡效果
  let { change } = useTransitionStore();
  let pathTo = to.path.split("/").length,
    pathFrom = from.path.split("/").length;
  console.log("to:" + pathTo, "from:" + pathFrom);
  if (pathTo < pathFrom) {
    // 访问下级页面 右进左出
    change("next");
  } else if (pathTo == pathFrom) {
    // 同级页面 渐隐渐显
    change("fade");
  } else {
    // 访问上级页面 左进右出
    change("prev");
  }
  next();
});
export default router;
