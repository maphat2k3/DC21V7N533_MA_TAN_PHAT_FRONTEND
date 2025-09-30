import { createApp } from "vue";
import App from "./App.vue";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import router from "./router";

// Tạo app
const app = createApp(App);

// Đăng ký router
app.use(router);

// Mount vào #app
app.mount("#app");
