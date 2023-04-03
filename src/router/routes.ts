export default [
  {
    path: "/",
    component: () => import("../pages/Index.vue"),
    // tabbar页面
    children: [
      {
        path: "/home",
        component: () => import("../pages/Home.vue"),
      },
      {
        path: "/house",
        component: () => import("../pages/House.vue"),
      },
      {
        path: "/msg",
        component: () => import("../pages/Msg.vue"),
      },
      {
        path: "/mine",
        component: () => import("../pages/Mine.vue"),
      },
      // 防止首页图标高亮显示异常
      {
        path: "",
        redirect: "/home",
      },
    ],
  },
  // 不带tabbar的页面 为了区分页面层级去做路由切换动效
  // 需要根据页面层级设置路径 如二级页面两个 / /page/search   三级页面三个 / /page/list/detail
  {
    path: "/login",
    component: () => import("../pages/Login.vue"),
  },
  {
    path: "/reg",
    component: () => import("../pages/Reg.vue"),
  },
  {
    path: "/page/emptyhouse",
    component: () => import("../pages/EmptyHouse.vue"),
  },
  {
    path: "/mine/setting",
    component: () => import("../pages/Setting.vue"),
  },
];
