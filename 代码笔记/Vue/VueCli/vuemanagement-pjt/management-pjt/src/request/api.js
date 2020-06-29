import request from './request'

const url = 'http://kumanxuan1.f3322.net:8360/admin/auth';

export const loginApi = data => request.post(url+'/login',data);
