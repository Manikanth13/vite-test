import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/home/index.vue";
import ProductDetail from "../components/ProductDetails.vue";
import ProductCart from "../views/cart/index.vue";
import WishList from "../views/wishlist/index.vue";
import Checkout from "../views/checkout/index.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/about/index.vue"),
    },
    {
      path: "/contact",
      name: "contact",
      // route level code-splitting
      // this generates a separate chunk (Contact.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/contact/index.vue"),
    },
    {
      path: "/product-detail/:id",
      name: "product-detail",
      component: ProductDetail,
      props: true,
    },
    {
      path: "/cart",
      name: "cart",
      component: ProductCart,
      props: true,
    },
    {
      path: "/check-out",
      name: "check-out",
      component: Checkout,
      props: true,
    },
    {
      path: "/wish-list",
      name: "wish-list",
      component: WishList,
      props: true,
    },
  ],
});

export default router;
