// pages/pull/pull.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

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
    // 用户下拉更新页面，触发这个函数
    // 需要设置json
    //        - "enablePullDownRefresh":true,  -- 允许下拉事件
    //        - "backgroundTextStyle":"dark"  --  设置背景字的颜色为黑色
    console.log('用户下拉动作触发')
    //关闭下拉
    setTimeout(()=>{
      wx.stopPullDownRefresh()
    },3000)
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    // 下拉动作需要有足够的内容高度
    // 需要设置json
    //        - "onReachBottomDistance":100,  -- 设置距离底部多少px触发下拉函数
    console.log('下拉动作')
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})