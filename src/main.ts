import { createApp } from "vue";
import "./style.scss";
import App from "./App.vue";
// rem换算插件
import "lib-flexible";
// 引入路由对象和pinia
import router from "./router";
import { createPinia } from "pinia";

createApp(App).use(router).use(createPinia()).mount("#app");
