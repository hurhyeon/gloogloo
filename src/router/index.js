import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import App from "../App.vue";

import MainmainB from "../pages/MainmainB.vue";
import SecurityAssistantW from "../pages/SecurityAssistantW.vue";


const routes = [
  {
    path: "/",
    name: "MainmainB",
    component: MainmainB,
  },
  {
    path: "/security-assistant-w",
    name: "SecurityAssistantW",
    component: SecurityAssistantW,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((toRoute, fromRoute, next) => {
  const documentTitle =
    toRoute?.meta && toRoute?.meta?.title ? toRoute?.meta?.title : "Yu-pik";
  window.document.title = documentTitle;
  if (toRoute?.meta?.description) {
    addMetaTag(toRoute?.meta?.description);
  }
  next();
});

const addMetaTag = (value) => {
  let element = document.querySelector(`meta[name='description']`);

  if (element) {
    element.setAttribute("content", value);
  } else {
    element = `<meta name="description" content="${value}" />`;
    document.head.insertAdjacentHTML("beforeend", element);
  }
};

createApp(App).use(router).mount("#app");

export default router;