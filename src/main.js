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
import Detailpage from './components/detailpage'
Vue.config.productionTip = false

Vue.use(Vuerouter)
Vue.use(VueResource)
let router = new Vuerouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: Hello,
        },
        {
            path: '/jigou',
            component: Jigou,
            redirect:'/jigou/jwc',
            children: [
                {
                    path: 'jwc',
                    component: Detailpage
                }
            //     {
            //         path: 'zhk',
            //         component: Detailzhk
            //     },
            //     {
            //         path: 'jwk',
            //         component: Detailjwk
            //     },
            //     {
            //         path: 'xjk',
            //         component: Detailxjk
            //     },
            //     {
            //         path: 'kwk',
            //         component: Detailkwk
            //     },
            //     {
            //         path: 'jxz',
            //         component: Detailjxz
            //     },
            //     {
            //         path: 'sjk',
            //         component: Detailsjk
            //     },
            //     {
            //         path: 'jxy',
            //         component: Detailjxy
            //     },
            //     {
            //         path: 'jxj',
            //         component: Detailjxj
            //     }
              ]
        },
        // {
        //     path: '/jigou/jwc',
        //     component: Detailpage
        // },
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
