import { createApp } from 'vue';
import App from './App.vue';
// import VueRouter from 'vue-router'

import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
import 'element-plus/lib/index.js';
import router from './router'

const app = createApp(App).use(router);
app.use(ElementPlus);
app.mount('#app');
