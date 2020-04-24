// 封装网络请求
import axios from 'axios';
import qs from 'qs' //引入qs库，准备转换data为接口需要值

export const getDepartment = data => axios.get("/departments", {params: data});
//注意这里的传输get要求一定要根据要求，不然可能不会报错，但是不实现
export const addDepartment = data => axios.post("/departments", qs.stringify(data));
export const getDepartmentId = data => axios.put('/departments/'+ data.id, qs.stringify(data))