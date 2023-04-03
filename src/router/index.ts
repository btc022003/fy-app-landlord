import { createRouter, createWebHashHistory } from "vue-router";
import routes from "./routes";
// 引入路由过渡状态
import { useTransitionStore } from "../store/transitionStore";

let router = createRouter({
  history: createWebHashHistory(),
  routes,
});
// 全局前置守卫
router.beforeEach((to, from, next) => {
  // 根据路径段数 控制路由过渡效果
  let { change } = useTransitionStore();
  let pathTo = to.path.split("/").length,
    pathFrom = from.path.split("/").length;
  if (pathTo < pathFrom) {
    // 访问下级页面;
    change("prev");
  } else if (pathTo == pathFrom) {
    // 同级页面 渐隐渐显
    change("fade");
  } else {
    // 访问上级页面
    change("next");
  }
  if (
    !sessionStorage.getItem("token") &&
    to.path != "/login" &&
    to.path != "/reg"
  ) {
    next("/login");
  } else {
    next();
  }
});
export default router;
