import axios from 'axios'

// 调用create方法创建实例
const instance = axios.create({
  timeout: 5000
})

// 请求前拦截 -- 拦截器
instance.interceptors.request.use(config => {
    console.log(config)
    // 封装优势-- 还可以进行参数再处理 -- 比如每个请求都需要传递参数token可以在请求前，统一添加token参数请求
    config.params.a=1;
    config.params.token ='fdsahfjhsadkfhal'
  return config
}, err => {
  return Promise.reject(err)
})

// 返回结果拦截
instance.interceptors.response.use(result => {
    //返回结果前拦截 -- 栗子：可以做一个token验证，如果过期，统一跳转到登录页面
    console.log(result)
  return result
}, err => {
  return Promise.reject(err)
})

export default instance