import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import './assets/styles.css'
import Vue3EasyDataTable from 'vue3-easy-data-table';
import 'vue3-easy-data-table/dist/style.css';
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';


const app = createApp(App)


app.use(createPinia())
app.use(VueSweetalert2)
window.Swal =  app.config.globalProperties.$swal;
app.use(router)
app.component('EasyDataTable', Vue3EasyDataTable)

app.mount('#app')
