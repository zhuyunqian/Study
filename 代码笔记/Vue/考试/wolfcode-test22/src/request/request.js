import axios from 'axios';
import qs from 'qs';

//用axios的create方法创建实例
const instance = axios.create({})

//请求前拦截 use方法有个失败和 成功
instance.interceptors.request.use(config =>{
    console.log(config)
    //请求前处理-- 转换字符串 判断请求
    if(config.method == 'put' || config.method == 'post'){
        config.data = qs.stringify(config.data)
    }
    return config
},error => {

})

//返回结果后拦截
instance.interceptors.response.use(result =>{
    console.log(result)
    return result
},error => {

})

//导出实例
export default instance
