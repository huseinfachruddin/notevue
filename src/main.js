import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import 'bootstrap/dist/css/bootstrap.css'
import Toaster from '@meforma/vue-toaster';
import 'bootstrap'
import axios from 'axios'

axios.defaults.baseURL = 'http://127.0.0.1:8000'

const app = createApp(App)
app.use(router)
app.use(Toaster)
app.mount('#app');
