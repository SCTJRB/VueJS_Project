import Vue from 'vue'
import App from './App.vue'    //index

import VueRouter from 'vue-router'
import mintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import flexible from './js/flexible'

import store from './store/storeTest'
Vue.use(mintUI);
Vue.use(VueRouter);

import home from './views/home.vue';
import calssfiy from './views/classify.vue'    //calssfiy
import goodsList from './views/goodsList.vue'
import brandList from './views/brandList.vue'
import goodsDetali from './views/goodsDetail.vue'
import ConfirmOrder from './views/ConfirmOrder.vue'
import shippingMethod from './views/shippingMethod.vue'
import invoice from './views/invoice.vue'
import Cashier from './views/Cashier.vue'
import payOK from './views/payOK.vue'
import myOrder from './views/myOrder.vue'
import orderDetail1 from './views/orderDetail1.vue'
const router = new VueRouter({
  base: __dirname,
  routes:[{
    path:'/',
    name:'home',
    component:home
  },
  {
    path:'/classFiy',
    name:'classFiy',
    component:calssfiy
  },
  {
    path:'/goodsList',
    name:'goodsList',
    component:goodsList
  },
  {
    path:'/brandList',
    name:'brandList',
    component:brandList
  },
  {
    path:'/goodsDetali',
    name:'goodsDetali',
    component:goodsDetali
  },
  {
    path:'/ConfirmOrder',
    name:'ConfirmOrder',
    component:ConfirmOrder
  },
  {
    mode: 'history',
    path:'/shippingMethod',
    name:'shippingMethod',
    component:shippingMethod
  },
    {
      mode: 'history',
      path:'/invoice',
      name:'invoice',
      component:invoice
    },
    {
      path:'/Cashier',
      name:'Cashier',
      component:Cashier
    },
    {
      path:'/payOK',
      name:'payOK',
      component:payOK
    },
    {
      path:'/myOrder',
      name:'myOrder',
      component:myOrder
    },
    {
      path:'/orderDetail1',
      name:'orderDetail1',
      component:orderDetail1
    }
  ]
});
new Vue({
    router:router,
    store,
    render: h => h(App)
}).$mount('#app');

