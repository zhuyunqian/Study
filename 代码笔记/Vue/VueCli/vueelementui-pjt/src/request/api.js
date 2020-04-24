// 封装网络请求
import axios from 'axios';
import qs from 'qs' //引入qs库，准备转换data为接口需要值

//获取部门列表
export const getDepartment = data => axios.get("/api/departments", {params: data});

//添加部门
//注意这里的传输get要求一定要根据要求，不然可能不会报错，但是不实现
export const addDepartment = data => axios.post("/api/departments", qs.stringify(data));

//编辑部门
export const getDepartmentId = data => axios.put('/api/departments/'+ data.id, qs.stringify(data))

//员工管理部门
export const getEmployees = data => axios.get('/api/employees',{params:data});