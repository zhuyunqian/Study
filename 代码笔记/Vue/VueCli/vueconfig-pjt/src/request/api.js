import request from './request.js'
//import axios from 'axios'
// 导出封装函数  
// 优势 -- 可以随时修改请求链接，集中管理
export var getAxios = function(params){ return request.get("https://cnodejs.org/api/v1/topics",{params:params})}