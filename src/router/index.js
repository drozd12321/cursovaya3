import { createRouter, createWebHistory } from "vue-router";
import App from "@/App.vue";
import HomePage from "@/components/HomePage.vue";
import AllTascks from "@/components/AllTascks.vue";
import TheCreateTask from "@/components/TheCreateTask.vue";
import InfoTask from "@/components/InfoTask.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePage,
    },
    { path: "/createtask", component: TheCreateTask },
    { path: "/task/:taskid", component: InfoTask, name: "task" },
  ],
  linkActiveClass: "active",
  linkExactActiveClass: "active",
});
export default router;
