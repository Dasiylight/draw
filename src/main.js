import { createApp } from 'vue'
import App from './App.vue'
import registerElement from './register-element';
// import ElementPlus from 'element-plus'

import "element-plus/dist/index.css";


createApp(App).use(registerElement).mount('#app')
