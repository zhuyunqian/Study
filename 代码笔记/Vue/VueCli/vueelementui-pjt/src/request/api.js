// 封装网络请求
// import axios from 'axios';
// 引入封装request
import request from './request'


//登陆
export const apiLogin = data => request.post("/api/tokens", data);

//获取部门列表
export const getDepartment = data => request.get("/api/departments", {params: data});

//添加部门
//注意这里的传输get要求一定要根据要求，不然可能不会报错，但是不实现
export const addDepartment = data => request.post("/api/departments", data);

//编辑部门
export const getDepartmentId = data => request.put('/api/departments/'+ data.id, data)

//员工管理部门
export const getEmployees = data => request.get('/api/employees',{params:data});

//查看单个员工请求
export const getEditemployees = data => request.get('/api/employees/'+data.id, data);

//角色列表
export const getRoles = data => request.get('/api/roles',{params:data});