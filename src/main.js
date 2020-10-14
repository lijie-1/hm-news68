import Vue from 'vue'
import App from './App.vue'
import router from './router'

import './utils/global.js'
import './utils/request.js'
import './utils/filters.js'
import './utils/vants'
// 导入通用的样式
import './styles/base.less'
import './styles/iconfont.css'

// 导入amfe-flexible库
import 'amfe-flexible'

Vue.config.productionTip = false

// 创建一个bus
const bus = new Vue()

// 把bus挂载到vue原型
Vue.prototype.$bus = bus

window.vm = new Vue({
    router,
    render: h => h(App)
}).$mount('#app')