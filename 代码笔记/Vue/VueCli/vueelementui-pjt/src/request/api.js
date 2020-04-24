// 封装网络请求
import axios from 'axios';
import qs from 'qs' //引入qs库，准备转换data为接口需要值

export const getDepartment = data => axios.get("/departments", {params: data});
export const getDepartmentId = data => axios.put('/departments/'+ data.id, qs.stringify(data))