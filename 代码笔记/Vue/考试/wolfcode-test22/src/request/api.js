import request from './request'


//经纬度
export const getJwd = (data) => request.get("/api/v2/pois/23.128225,113.289752");

//食品分类列表
export const getList = () => request.get("/api/v2/index_entry");

//商品列表
export const getShop = () => request.get('/api/shopping/restaurants?latitude=23.128225&longitude=113.289752')
