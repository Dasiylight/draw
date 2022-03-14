import { createApp } from 'vue'
import App from './App.vue'
import registerElement from './register-element';
// import ElementPlus from 'element-plus'
import router from './config/router'
import "element-plus/dist/index.css";


createApp(App).use(registerElement).use(router).mount('#app')

