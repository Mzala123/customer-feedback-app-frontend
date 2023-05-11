import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import './assets/styles.css'
import Vue3EasyDataTable from 'vue3-easy-data-table';
import 'vue3-easy-data-table/dist/style.css';


const app = createApp(App)


app.use(createPinia())
app.use(router)
app.component('EasyDataTable', Vue3EasyDataTable)

app.mount('#app')
