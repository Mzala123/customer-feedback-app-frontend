import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import './assets/styles.css'
import Vue3EasyDataTable from 'vue3-easy-data-table';
import 'vue3-easy-data-table/dist/style.css';
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import VueApexCharts from "vue3-apexcharts";


const app = createApp(App)

app.use(VueSweetalert2)
app.use(VueApexCharts)
window.Swal =  app.config.globalProperties.$swal;
app.use(router)
app.component('EasyDataTable', Vue3EasyDataTable)
app.use(createPinia())
//app.use(pinia)
app.mount('#app')
