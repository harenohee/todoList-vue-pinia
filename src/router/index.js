import { createRouter, createWebHistory } from "vue-router";
import TodoPiniaOption from "../components/TodoPiniaOption.vue";
import TodoPiniaSetup from "../components/TodoPiniaSetup.vue";
import Form from "../components/binding/Form.vue";
const routes = [
  {
    path: "/",
    name: "TodoPiniaOption",
    component: TodoPiniaOption,
  },
  {
    path: "/setup",
    name: "TodoPiniaSetup",
    component: TodoPiniaSetup,
  },
  {
    path: "/binding/form",
    component: Form,
  },
];
export const router = createRouter({
  history: createWebHistory(),
  routes,
});
