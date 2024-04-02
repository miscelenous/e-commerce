import { createRouter, createWebHistory } from "vue-router";
import AdminView from "@/views/AdminView.vue";
import UserView from "@/views/UserView.vue";
export {};
declare module "vue-router" {
  interface RouteMeta {
    layout: string;
  }
}
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/admin",
      component: AdminView,
      meta: {
        layout: "admin",
      },
    },
    {
      path: "/user",
      component: UserView,
      meta: {
        layout: "user",
      }
    }
  ],
});

export default router;
