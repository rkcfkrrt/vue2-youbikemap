import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui';
import lottie from 'vue-lottie';
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.component('lottie', lottie)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
