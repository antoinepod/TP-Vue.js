import {createRouter, createWebHistory} from "vue-router";
import SwipeView from "@/views/SwipeView.vue";
import LoginView from "@/views/LoginView.vue";
import RecapView from "@/views/RecapView.vue";
import NotFound from "@/views/NotFoundView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/swipe",
      name: "Swipe",
      component: SwipeView
    },
    {
      path: "/",
      redirect: "/swipe"
    },
    {
      path: "/login",
      name: "Login",
      component: LoginView
    },
    {
      path: "/recap",
      name: "Recap",
      component: RecapView
    },
    {
      path: "/:catchall(.*)*",
      name: "NotFound",
      component: NotFound
    }
  ]
});

export default router;