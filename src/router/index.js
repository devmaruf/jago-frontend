import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/pages/Home.vue";
const CategoryPage = ()=> import(/* webpackChunkName: "CategoryPage" */ "../views/pages/CategoryPage");

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/category-page",//will it be dynamic | {politics}| {sports}|{entertainment}|{economy}|{national}....
    name: "CategoryPage",
    component: CategoryPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
