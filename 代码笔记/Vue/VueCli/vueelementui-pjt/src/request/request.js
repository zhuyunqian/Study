import axios from 'axios';
import qs from 'qs';

//用axios的create方法创建实例
const instance = axios.create({})

//请求前拦截 use方法有个失败和 成功
instance.interceptors.request.use(config =>{
    //console.log(config)
    //定义token
    const token = localStorage.getItem('token');

    //请求前处理-- 转换字符串 判断请求
    if(config.method == 'put' || config.method == 'post'){
        if(token){
            //在params值为空或者不存在的情况下，赋值一个空对象 -- 这里判断的是传输值params不是data
            config.params = config.params || {}
            config.params.token = token
            
        }

        config.data = qs.stringify(config.data)
    }else if(config.method == 'get'){
        config.params = config.params || {}
        config.params.token = token
    }
    return config
},error => {

})

//返回结果后拦截
instance.interceptors.response.use(result =>{
    //console.log(result)
    return result
},error => {

})

//导出实例
export default instance