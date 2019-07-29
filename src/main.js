import Vue from 'vue';
import '@Plugins/axios';
import App from './App.vue';
import router from '@Router/router.js';
import store from '@Store/index';
import vuetify from '@Plugins/vuetify';

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
