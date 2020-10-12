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

window.vm = new Vue({
    router,
    render: h => h(App)
}).$mount('#app')