import Vue from 'vue'
import { Toast } from 'vant'
import router from '../router'
import axios from 'axios'

// 把axios挂载到vue的原型
Vue.prototype.$axios = axios

const URL = "http://localhost:3000"
axios.defaults.baseURL = URL
Vue.prototype.$base = URL

// 给axios配置默认的baseURL ,基准地址
axios.defaults.baseURL = 'http://localhost:3000'

// 给axios配置拦截器
axios.interceptors.request.use(function(config) {

    // config指的是请求的配置信息
    // console.log('拦截到了请求', config)
    const token = localStorage.getItem('token')
    if (token) {
        config.headers.Authorization = token
    }
    return config
})
axios.interceptors.response.use(function(response) {
    // console.log('拦截到了响应', response)
    const { statusCode, message } = response.data
    if (statusCode === 401 && message === '用户信息验证失败') {
        // console.log('token失效拉')
        // 1. 跳转到登录页面
        router.push('/login')
            // 2. 清除失效的信息
        localStorage.removeItem('token')
        localStorage.removeItem('userId')
            // 3. 给提示  用户验证失败
        Toast.fail('登录信息失效')
    }
    return response
})