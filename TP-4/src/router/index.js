import {createRouter, createWebHistory} from "vue-router";
import TasksView from "@/views/TasksView.vue";
import PlantsView from "@/views/PlantsView.vue";
import SearchView from "@/views/SearchView.vue";
import AuthView from "@/views/AuthView.vue";
import NotFound from "@/views/NotFoundView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Tasks",
      component: TasksView
    },
    {
      path: "/tasks",
      redirect: "/"
    },
    {
      path: "/plants",
      name: "Plants",
      component: PlantsView
    },
    {
      path: "/search",
      name: "Search",
      component: SearchView
    },
    {
      path: "/auth",
      name: "Auth",
      component: AuthView
    },
    {
      path: "/:catchall(.*)*",
      name: "NotFound",
      component: NotFound
    }
  ]
});

export default router;