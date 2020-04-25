// 封装网络请求
// import axios from 'axios';
// 引入封装request
import request from './request'


// 上线路由判断，小封装
//const path = '/api'
//如果是生产环境为空，否则（开发环境）为 /api代理
const path = process.env.NODE_ENV === 'production' ? '' : '/api'

//登陆
export const apiLogin = data => request.post(path + "/tokens", data);

//获取部门列表
export const getDepartment = data => request.get(path + "/departments", {params: data});

//添加部门
//注意这里的传输get要求一定要根据要求，不然可能不会报错，但是不实现
export const addDepartment = data => request.post(path + "/departments", data);

//编辑部门
export const getDepartmentId = data => request.put( path + '/departments/'+ data.id, data)

//员工管理部门
export const getEmployees = data => request.get( path + '/employees',{params:data});

//查看单个员工请求
export const getEditemployees = data => request.get( path + '/employees/'+data.id, data);

//角色列表
export const getRoles = data => request.get( path + '/roles',{params:data});

//保存单个员工信息
export const saveEmployee = data => request.put( path + '/employees/'+ data.id, data)

//导出员工列表
export const eportEmployee =   path + '/employees/xlses'

