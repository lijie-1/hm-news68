import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'

import './styles/base.less'
import './styles/iconfont.css'


// 把axios挂载到vue的原型
Vue.prototype.$axios = axios

// 给axios配置默认的baseURL ,基准地址
axios.defaults.baseURL = 'http://localhost:3000'

import Vant from 'vant'
import 'vant/lib/index.css'
import 'amfe-flexible'
Vue.use(Vant)

// 全局组件
import HmHeader from './components/HmHeader.vue'
import HmLogo from './components/HmLogo.vue'


Vue.component('hm-header', HmHeader)
Vue.component('hm-logo', HmLogo)

Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')