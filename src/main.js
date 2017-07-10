// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Hello from './components/Hello.vue'
import Jigou from './components/jigou.vue'
import Major from './components/major.vue'
import Guanli from './components/guanli.vue'
import Banshi from './components/banshi.vue'
import Ziliao from './components/ziliao.vue'
import Jiaowu from './components/jiaowu.vue'
import Vuerouter from 'vue-router'
Vue.config.productionTip = false

Vue.use(Vuerouter)
let router = new Vuerouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: Hello,
        },
        {
            path: '/jigou',
            component: Jigou
        },
        {
            path: '/major',
            component: Major
        },
        {
            path: '/guanli',
            component: Guanli
        },
        {
            path: '/banshi',
            component: Banshi
        },
        {
            path: '/ziliao',
            component: Ziliao
        },
        {
            path: '/jiaowu',
            component: Jiaowu
        }
    ]
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
