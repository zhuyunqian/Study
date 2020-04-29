// pages/login/login.js
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
    // 判断token是否有效，有效进入，无效重新申请
    wx.checkSession({
      success: (result)=>{
        console.log('验证token有效')
      },
      fail: (error)=>{
        console.log('验证token无效')
        console.log(error)
        this.wxLogin();
        console.log(code)
      },
      complete: ()=>{}
    });
  },

  wxLogin(){
    // 获取code传送给后台，获得token
    wx.login({
      success: (result)=>{
        console.log(result.code)
        let code = result.code;
        wx.request({
          url: 'http://localhost:8888/wx/login',
          data: {
            code : code
          },
          header: {'content-type':'application/x-www-form-urlencoded'},
          method: 'POST',
          dataType: 'json',
          responseType: 'text',
          success: (result)=>{
            // 获取到token
            console.log(result.data.data.token)
          },
          fail: ()=>{},
          complete: ()=>{}
        });
      },
      fail: ()=>{},
      complete: ()=>{}
    });
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