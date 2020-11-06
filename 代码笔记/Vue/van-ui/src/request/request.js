import axios from "axios";
import qs from "qs";
const instance = axios.create({
    timeout: 10000
})
// 请求前拦截
/* instance.interceptors.request.use(config => {
    // const token = localStorage.getItem('token')
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxNCwiaWF0IjoxNTkwMzk1MDIwfQ.sS0JoMicUjtJpKYLVWGF2eJS4bAuqGhxbtMtR77Mju8';
    if (config.method === 'post' || config.method === 'put') {
        if (token) {
            config.data.token = token
        }
        config.data = qs.stringify(config.data, { allowDots: true, arrayFormat: 'repeat' })
    } else if (config.method === 'get' || config.method === 'delete') {
        if (token) {
            config.params.token = token
        }
        config.url = config.url + '?' + qs.stringify(config.params, {arrayFormat: 'repeat'})
        delete config.params
        // config.params  = qs.stringify(config.params, {arrayFormat: 'repeat'})
    }
    console.log(config)
    return config
}, err => {
    return Promise.reject(err)
}) */

// 返回结果拦截
instance.interceptors.response.use(result => {
    const data = result.data
    return data
}, err => {
    return Promise.reject(err)
})


export default instance