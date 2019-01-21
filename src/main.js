import Vue from 'vue'
import App from './App.vue'
// 引入Details
import Details from './pages/Details.vue'

//引入Vant 为了不让他报错我改下下面的写法1564523
// import Vant from 'vant';
import 'vant'
import 'vant/lib/index.css';
import { Swipe, SwipeItem } from 'vant';
import './css/index.css'

//这个是引入需求的vant组件
Vue.use(Swipe).use(SwipeItem);

//引入路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
//注册路由
const routes = [
    {path : '/',component:App},
    {path : '/details',component:Details}
];
//创建一个VueRouter的实例
let router = new VueRouter({
    routes
});

Vue.config.productionTip = false;

new Vue({
  render: h => h('router-view'),
    router
}).$mount('#app');
