import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import router from './router'
import 'vant/lib/index.css'
import 'amfe-flexible'
import '@/assets/fonts/stylesheet.css'
createApp(App).use(createPinia()).use(router).mount('#app')
