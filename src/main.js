import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import router from './router'
import './style/global.scss'

createApp(App).use(store).use(router).mount("#app");