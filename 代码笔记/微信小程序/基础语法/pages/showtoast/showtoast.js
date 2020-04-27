// pages/showtoast/showtoast.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  showbox(e){
    wx.showModal({
      title: '提示框',
      content: '请选择确认或者是取消',
      showCancel: true,
      cancelText: '取消',
      cancelColor: '#000000',
      confirmText: '确定',
      confirmColor: '#3CC51F',
      success: (result) => {
        if(result.confirm){
          console.log('点击确认')
          wx.showToast({
            title: '提示',
            icon: 'loading', // 默认success
            // image: '',
            duration: 1500,
            mask: true,
            //增加透明图层
            success: (result)=>{
              console.log(result)
            },
          })
        }else{
          console.log('点击取消')
        }
      },
      fail: ()=>{},
      complete: ()=>{}
    });
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
    wx.showToast({
      title: '提示',
      icon: 'loading', // 默认success
      // image: '',
      duration: 1500,
      mask: true,
      //增加透明图层
      success: (result)=>{
        console.log(result)
      },
      fail: ()=>{},
      complete: ()=>{}
    });
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