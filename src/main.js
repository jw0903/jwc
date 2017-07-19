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
import VueResource from 'vue-resource'
import JGjwc from './components/article/JGjwc'
import JGjwk from './components/article/JGjwk.vue'
import JGjsj from './components/article/JGjsj.vue'
import JGjxy from './components/article/JGjxy.vue'
import JGjxz from './components/article/JGjxz.vue'
import JGkwk from './components/article/JGkwk.vue'
import JGsjk from './components/article/JGsjk.vue'
import JGxjk from './components/article/JGxjk.vue'
import JGzhk from './components/article/JGzhk.vue'
Vue.config.productionTip = false

Vue.use(Vuerouter)
Vue.use(VueResource)
let router = new Vuerouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: Hello
        },
        {
            path: '/jigou',
            component: Jigou,
            children: [
                {
                    path: 'jwc',
                    component: JGjwc
                },
                {
                    path: 'zhk',
                    component: JGzhk
                },
                {
                    path: 'jwk',
                    component: JGjwk
                },
                {
                    path: 'xjk',
                    component: JGxjk
                },
                {
                    path: 'kwk',
                    component: JGkwk
                },
                {
                    path: 'jxz',
                    component: JGjxz
                },
                {
                    path: 'sjk',
                    component: JGsjk
                },
                {
                    path: 'jxy',
                    component: JGjxy
                },
                {
                    path: 'jsj',
                    component: JGjsj
                }
              ]
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
