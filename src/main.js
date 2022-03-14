import { createApp } from 'vue'
import BootstrapVue3 from 'bootstrap-vue-3'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'

// External css
import 'normalize.css/normalize.css';
import './assets/styles/main.scss';

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

const app = createApp(App)
app.use(BootstrapVue3)
app.use(createPinia())
app.use(router)

app.mount('#app')


