import request from './request'
// 登录接口

// console.log(process.env.NODE_ENV)
let preUrl = process.env.NODE_ENV == 'development' ? '/api' : ''

// 请求首页数据
export const GetHomeLists = (params) => request.get(`${preUrl}/index/index`, { params });

// 请求专题页数据
export const GetTopicList = (params) => request.get(`${preUrl}/topic/list`, params);

// 请求分类页数据
export const GetCatalogList = (params) => request.get(`${preUrl}/catalog/index`, params);

// 请求分类目录当前分类数据接口
export const GetCatalogDetailsList = (params) => request.get(`${preUrl}/catalog/current`, params);

// 请求购物车数据
export const GetCartList = (params) => request.get(`${preUrl}/cart/index`, params);

// 请求搜索界面数据
export const GetSearchList = (params) => request.get(`${preUrl}/search/index`, params);

// 删除历史记录
export const DelHistory = (params) => request.post(`${preUrl}/search/clearhistory`, params);

// 历史记录点击标签搜索
export const SearchTag = (params) => request.get(`${preUrl}/goods/list`, params);

// 根据输入框的值动态搜索数据
export const ActiveSearch = (params) => request.get(`${preUrl}/search/helper`, params);

// 进入品牌商详情页请求banner区块数据
export const BrandDetailBanner = (params) => request.get(`${preUrl}/brand/detail`, params);

// 进入品牌商详情页请求商品列表数据
export const BrandDetailList = (params) => request.get(`${preUrl}/goods/list`, params);

// 获取商品详情页的商品参数
export const GoodsDetail = (params) => request.get(`${preUrl}/goods/detail`, params);

// 在商品详情页获取购物车数量
export const GoodsCount = (params) => request.get(`${preUrl}/cart/goodscount`, params);

// 在商品详情页获取相关商品列表
export const RelatedGoods = (params) => request.get(`${preUrl}/goods/related`, params);

// 加入购物车
export const AddToCart = (params) => request.post(`${preUrl}/cart/add`, params);

// 获取Channel页标题栏
export const ChannelTab = (params) => request.get(`${preUrl}/goods/category`, params);

// 获取Channel页商品数据
export const ChannelList = (params) => request.get(`${preUrl}/goods/list`, params);

// 登录接口
export const UserLogin = (params) => request.post(`${preUrl}/auth/loginByWeb`, params);

// 购物车商品删除
export const DelProduct = (params) => request.post(`${preUrl}/cart/delete`, params);








