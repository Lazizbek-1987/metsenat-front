import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from "@/vuex/store";

import 'tw-elements';
import './index.css'

const app = createApp(App)

app
    .use(router)
    .use(store)

app.mount('#app')
