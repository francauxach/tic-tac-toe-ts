import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import './themes/index.css'

createApp(App).use(store).mount('#app')
