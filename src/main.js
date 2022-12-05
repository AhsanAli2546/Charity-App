import App from "./App.vue";
import router from "./router";
import { createApp } from "vue";
import Vue3EasyDataTable from "vue3-easy-data-table";
import "vue3-easy-data-table/dist/style.css";

//===========================
//      Vue Utils
import axios from "axios";
import VueAxios from "vue-axios";
import store from "./stores";


//===========================================
//            Register Component
import DefaultLayout from './layouts/DefaultLayout.vue'


//===================================
//            Plugin Import
//import DataTable from 'datatables.net-vue3'
//import DataTablesLib from 'datatables.net';

//=============================
//          CSS Import
import "./assets/css/master.css";
import "./assets/css/header.css";
import "./assets/css/index-welcome-sec.css";
import "./assets/css/index-aboutus-sec.css";
import "./assets/css/index-card.css";
import "./assets/css/footer.css";

//===================================================
//                  Js Imports
import "./assets/lib/bootstrap-dist/js/bootstrap.min.js";
import "./assets/admin/js/sidebar";
//import './assets/lib/bootstrap-dist/css/bootstrap.min.css'
//import'./assets/lib/fontawesome/css/all.min.css'

<<<<<<< HEAD

const app = createApp(App)
app.component('App',App)
app.component('DefaultLayout',DefaultLayout)
=======
const app = createApp(App);
app.component("EasyDataTable", Vue3EasyDataTable);
>>>>>>> de9bc8662a73e0760fb11544a72cb9ad88e5f020

//app.use(createPinia())
app.use(router);
app.use(VueAxios, axios);
app.use(store);
//DataTable.use(DataTablesLib);

app.mount("#app");
