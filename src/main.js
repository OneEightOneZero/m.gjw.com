import Vue from 'vue'
import App from './App.vue'
import Vant from 'vant';
import 'vant/lib/index.css';
import { Swipe, SwipeItem } from 'vant';
import './css/index.css'

Vue.use(Swipe).use(SwipeItem);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
