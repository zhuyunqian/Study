// pages/pullpage/pullpage.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    lastCursor:'',
    list:[]
  },

  reqData(){
    wx.request({
      url: 'https://api.readhub.cn/topic',
      data: {
        lastCursor:this.data.lastCursor,
        pageSize:20
      },
      header: {'content-type':'application/json'},
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: (result)=>{
        // concat 合并重组数组
        this.setData({
          list:this.data.list.concat(result.data.data)
        })
        //console.log(result)

        // 成功后隐藏loading
        wx.hideLoading();

        // 更新lastCursor
        this.data.lastCursor = this.data.list[this.data.list.length-1].order
      },
      fail: ()=>{},
      complete: ()=>{}
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.reqData()
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
    wx.showLoading({
      title: '加载中',
      mask: true,
    });
    this.reqData()
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})