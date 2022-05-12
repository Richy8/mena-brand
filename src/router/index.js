import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    alias: "/home",
    component: () =>
      import(/* webpackChunkName: "home" */ "@/layouts/base-layout"),
    children: [
      {
        path: "",
        name: "Home",
        component: () => import(/* webpackChunkName: "home" */ "@/pages/home"),
      },
      {
        path: "/portfolio",
        name: "Portfolio",
        component: () =>
          import(/* webpackChunkName: "portfolio" */ "@/pages/portfolio"),
      },
      {
        path: "/contact",
        name: "Contact",
        component: () =>
          import(/* webpackChunkName: "contact" */ "@/pages/contact"),
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
