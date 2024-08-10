import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import IndexPage from "../pages/IndexPage.vue";
import User from "../pages/User.vue";
import Login from "../pages/Login.vue";
import Register from "../pages/Register.vue";

const routes: RouteRecordRaw[] = [
  { path: "/", component: IndexPage },
  { path: "/login", component: Login },
  { path: "/register", component: Register },
  { path: "/user", component: User },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export { router };
