import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";

import HomePage from "./pages/HomePage.vue";
import Publication from "./pages/Publication.vue";
import Services1 from "./pages/Services1.vue";
import Services from "./pages/Services.vue";
import AboutUs from "./pages/AboutUs.vue";
import "./global.css";

const routes = [
  {
    path: "/",
    name: "HomePage",
    component: HomePage,
  },
  {
    path: "/publication",
    name: "Publication",
    component: Publication,
  },
  {
    path: "/services",
    name: "Services1",
    component: Services1,
  },
  {
    path: "/services1",
    name: "Services",
    component: Services,
  },
  {
    path: "/about-us",
    name: "AboutUs",
    component: AboutUs,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((toRoute, _, next) => {
  const metaTitle = toRoute?.meta?.title;
  const metaDesc = toRoute?.meta?.description;

  window.document.title = metaTitle || "RAVI";
  if (metaDesc) {
    addMetaTag(metaDesc);
  }
  next();
});

const addMetaTag = (value) => {
  const element = document.querySelector(`meta[name='description']`);
  if (element) {
    element.setAttribute("content", value);
  }
};

createApp(App).use(router).mount("#app");

export default router;
