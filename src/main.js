import Vue from 'vue'
import App from './App.vue'
// 引入ajax库
import axios from 'axios'
//把axios挂载到Vue的原型链中
Vue.prototype.$axios = axios;
//一级路由
import Details from './pages/Details.vue'



//列表页
import List from './pages/List.vue'
Vue.prototype.$axios = axios;
//引进jq
import $ from "jquery"
Vue.prototype.$ = $;
//下拉刷新
import {
    PullRefresh
} from 'vant';

Vue.use(PullRefresh)



//引入Vant 为了不让他报错我改下下面的写法1564523
//二级路由
import Index from './pages/Index.vue'
import Classify from './pages/Classify.vue'
import Mine from './pages/Mine.vue'
import Cart from './pages/Cart.vue'

//引入vant 为了不让他报错我改下下面的写法
// import Vant from 'vant';
import 'vant'
import 'vant/lib/index.css';
import {
    Swipe,
    SwipeItem
} from 'vant';
import {
    Tab,
    Tabs
} from 'vant';

Vue.use(Tab).use(Tabs);
import './css/index.css'


//这个是引入需求的vant组件
Vue.use(Swipe).use(SwipeItem);

//引入路由
import VueRouter from 'vue-router'



Vue.use(VueRouter);
//注册路由
const routes = [

    {
        //域名重定向
        path: '/',
        redirect: {
            name: 'Index'
        }
    },
    //定义一级路由
    {
        path: '/App',
        component: App,
        //定义二级路由
        children: [{
            path: 'Index',
            name: 'Index',
            component: Index
        }, {
            path: 'Classify',
            name: 'Classify',
            component: Classify
        }, {
            path: 'Mine',
            name: 'Mine',
            component: Mine
        }, {
            path: 'Cart',
            name: 'Cart',
            component: Cart
        }]

    },
    {
        path: '/details',
        component: Details
    },
    {
        path: '/list',
        component: List
    },
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