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

  // 右侧菜单滚动
  rightMenuScroll(e) {
    // console.log(e);
    // .detail.scrollTop 滚动高度 < data.areaHeight[i] i对应盒子高度  = i-1 复制给id，给左边menu选中改变
    const scrollTop = e.detail.scrollTop; // 滚动的高度
    for (var i = 1; i < this.data.areaHeight.length; i++) {
      if (scrollTop <= this.data.areaHeight[i]) {
        this.setData({
          leftid: i -1
        })
        return;
      }

    }
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

    // 这里是引入wx的一个函数，用于判断出来#id的高度
    // #id的高度放置进一个数组里面，即可得到每个的模块的高度

    const query = wx.createSelectorQuery()
    const lists = this.data.navList
    const _this = this;
    for (let i = 0; i < lists.length; i++) {

      // #rment+i 每个索引值循环出来lists也就是便数组的长度，来获取有几个右边的盒子
      query.select('#rmenu' + i).boundingClientRect()
      query.selectViewport().scrollOffset()
      query.exec(res => {
        // console.log(res)  //res[0].height 盒子的高度 循环出来，每个盒子的高度都是这么获取
        // console.log(_this.data.areaHeight[i] )
        // console.log(_this.data.areaHeight[i] )
        // console.log(_this.data.areaHeight[i] + res[0].height)
        
        _this.data.areaHeight.push(_this.data.areaHeight[i] + res[0].height);
        // console.log(_this.data.areaHeight)

        // 这种方法不存在多的值遍历，但是无法完成第一个
        // if(i-1 <0){
        //   _this.data.areaHeight[i] = res[0].height;

        // }else{
        //   _this.data.areaHeight[i] = _this.data.areaHeight[i-1] + res[0].height;
        // }
        console.log(_this.data.areaHeight)
      })
    }

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