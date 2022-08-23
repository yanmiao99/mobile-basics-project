import {createApp} from 'vue'
import {createPinia} from 'pinia'

import App from './App.vue'
import router from './router'

import './assets/style/global.scss'
import request from "./utils/request";

const app = createApp(App)

window.$request = request

app.use(createPinia())
app.use(router)

app.mount('#app')
