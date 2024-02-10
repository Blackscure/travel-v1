import Vue from "vue";
import VueRouter from "vue-router";
import RouterPrefetch from 'vue-router-prefetch'
import App from "./App";
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
// TIP: change to import router from "./router/starterRouter"; to start with a clean layout
import router from "./router/index";
import CreateAgent from '../src/pages/CreateAgent.vue';
import CreateAccomodation from '../src/pages/CreateAccomodation.vue';
import CreateContract from '../src/pages/CreateContract.vue';
import Login from '../src/pages/Login.vue';

import BlackDashboard from "./plugins/blackDashboard";
import i18n from "./i18n"
import './registerServiceWorker'
Vue.use(BlackDashboard);
Vue.use(VueRouter);
Vue.use(RouterPrefetch);
Vue.use(BootstrapVue);

axios.defaults.baseURL = process.env.VUE_APP_API_URL
axios.interceptors.request.use(function (config) {
  config.headers['X-Binarybox-Api-Key'] = process.env.VUE_APP_API_KEY;
  return config;
});


const routes = [
  { path: '/create-agent', component: CreateAgent },
  { path: '/create-accomodation', component:  CreateAccomodation },
  { path: '/create-contract', component:  CreateContract },
  { path: '/login', component:  Login },
  // Add other routes as needed
];



/* eslint-disable no-new */
new Vue({
  router,
  i18n,
  render: h => h(App)
}).$mount("#app");
