import { createApp } from "vue";
import "./main.css";
import App from "./App.vue";
import { createPinia } from "pinia";
import { router } from "./router";
import { Quasar } from "quasar";
import "quasar/src/css/index.sass";

const app = createApp(App);
const pinia = createPinia();
app.use(Quasar, {
  plugins: {}, // import Quasar plugins and add here
});
app.use(pinia);
app.use(router);
app.mount("#app");
