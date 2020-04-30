// pages/menu/menu.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showViter: true,
    banners: [
      "/images/banner/menubanner1.jpg",
      "/images/banner/menubanner2.jpg",
      "/images/banner/menubanner3.jpg"
    ],
    swiHeight: '350rpx',
    navList: [{
      id: "0",
      c_name: '人气Top',
      list: [{
        id: 1,
        url: '/images/menu/1-1.jpg',
        goodsName: '拿铁',
      },
      {
        id: 2,
        url: '/images/menu/1-1.jpg',
        goodsName: '桃桃芝士红宝石茶',
      },
      {
        id: 3,
        url: '/images/menu/1-1.jpg',
        goodsName: '咖啡风味安慕希',
      },
      {
        id: 4,
        url: '/images/menu/1-1.jpg',
        goodsName: '陨石拿铁',
      },
      {
        id: 5,
        url: '/images/menu/1-1.jpg',
        goodsName: '冲绳拿铁',
      }
      ]
    },
    {
      id: "1",
      c_name: '大师咖啡',
      list: [{
        id: 1,
        url: '/images/menu/1-1.jpg',
        goodsName: '冲绳黑糖拿铁',
      },
      {
        id: 2,
        url: '/images/menu/1-1.jpg',
        goodsName: '陨石拿铁',
      },
      {
        id: 3,
        url: '/images/menu/1-1.jpg',
        goodsName: '拿铁',
      },
      {
        id: 4,
        url: '/images/menu/1-1.jpg',
        goodsName: '香草拿铁',
      },
      {
        id: 5,
        url: '/images/menu/1-1.jpg',
        goodsName: '焦糖拿铁',
      },
      ]
    },
    {
      id: "2",
      c_name: '小鹿茶精选',
      list: [{
        id: 1,
        url: '/images/menu/1-1.jpg',
        goodsName: '标准美式',
      },
      {
        id: 2,
        url: '/images/menu/1-1.jpg',
        goodsName: '加浓美式',
      },
      {
        id: 3,
        url: '/images/menu/1-1.jpg',
        goodsName: '焦糖标准美式',
      },
      {
        id: 4,
        url: '/images/menu/1-1.jpg',
        goodsName: '焦糖加浓美式',
      },
      {
        id: 5,
        url: '/images/menu/1-1.jpg',
        goodsName: '银河气泡美式',
      },
      ]
    },
    {
      id: "3",
      c_name: '瑞纳冰',
      list: [{
        id: 1,
        url: '/images/menu/1-1.jpg',
        goodsName: '楽岛桃桃冰',
      },
      {
        id: 2,
        url: '/images/menu/1-1.jpg',
        goodsName: '巧克力瑞纳冰',
      },
      {
        id: 3,
        url: '/images/menu/1-1.jpg',
        goodsName: '抹茶瑞纳冰',
      },
      {
        id: 4,
        url: '/images/menu/1-1.jpg',
        goodsName: '卡布奇诺瑞纳冰',
      },
      {
        id: 5,
        url: '/images/menu/1-1.jpg',
        goodsName: '咖啡瑞纳冰',
      },
      ]
    },
    {
      id: "4",
      c_name: '鲜榨果蔬汁',
      list: [{
        id: 1,
        url: '/images/menu/1-1.jpg',
        goodsName: 'NFC鲜榨橙汁',
      },
      {
        id: 2,
        url: '/images/menu/1-1.jpg',
        goodsName: 'NFC鲜榨西柚汁',
      },
      {
        id: 3,
        url: '/images/menu/1-1.jpg',
        goodsName: '猕猴桃复合果汁',
      },
      {
        id: 4,
        url: '/images/menu/1-1.jpg',
        goodsName: 'NFC鲜榨蓝莓草莓混合果汁',
      },
      {
        id: 5,
        url: '/images/menu/1-1.jpg',
        goodsName: 'NFC鲜榨芒果汁',
      },
      ]
    },
    {
      id: "5",
      c_name: '经典饮品',
      list: [{
        id: 1,
        url: '/images/menu/1-1.jpg',
        goodsName: '巧克力',
      },
      {
        id: 2,
        url: '/images/menu/1-1.jpg',
        goodsName: '纯牛奶',
      },
      {
        id: 3,
        url: '/images/menu/1-1.jpg',
        goodsName: '巴黎水330ml',
      },
      {
        id: 4,
        url: '/images/menu/1-1.jpg',
        goodsName: '小红莓苏打水',
      },
      {
        id: 5,
        url: '/images/menu/1-1.jpg',
        goodsName: '苏打水',
      },
      ]
    },
    {
      id: "6",
      c_name: '健康轻食',
      list: [{
        id: 1,
        url: '/images/menu/1-1.jpg',
        goodsName: '京味烤鸭鲜蔬卷',
      },
      {
        id: 2,
        url: '/images/menu/1-1.jpg',
        goodsName: '夏威夷菠萝火腿卷',
      },
      {
        id: 3,
        url: '/images/menu/1-1.jpg',
        goodsName: '火腿芝士羊角',
      },
      {
        id: 4,
        url: '/images/menu/1-1.jpg',
        goodsName: '鸡肉卷',
      },
      {
        id: 5,
        url: '/images/menu/1-1.jpg',
        goodsName: '老北京鸡肉卷',
      },
      ]
    }
    ],
    leftid: 0,
    rightid: 0,
    areaHeight: [0],
  },

  // 左侧点击
  /*
    设置了左侧的id和右侧的id一样
    也就是在点击的时候，scroll-into-view = id 是两方相等，显示同一位置的
  
  */
  leftMenuTap(e){
    // 点击左侧的索引值 定义
    const dataset = e.target.dataset;
    this.setData({
      // 左侧右侧的索引值相等
      leftid: dataset.id,
      rightid: dataset.id
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})