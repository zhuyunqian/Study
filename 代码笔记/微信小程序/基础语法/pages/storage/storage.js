// pages/storage/storage.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 缓存数据，一定要在data内定义
    name:{}
  },

  setStorage(e){
    wx.setStorageSync('name',{'key1': '111111111','key2': '222222'});
  },
  getStorage(e){
    var sy = wx.getStorageSync('name');
    console.log(sy)
  },
  clearStorage(e){
    wx.removeStorageSync('name');
    this.getStorage();
  },
  clearAll(){
    wx.clearStorageSync();
    this.getStorage();
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log('1. - onload -- 页面加载')

    wx.setNavigationBarColor({
      frontColor: '#ffffff',
      backgroundColor: '#000000',
      success: (result)=>{
        console.log('成功了')
      },
      fail: ()=>{},
      complete: ()=>{}
    });
    wx.setNavigationBarTitle({
      title: 'api修改title',
      success: (result)=>{
        console.log(result)
      }
    });
    wx.showNavigationBarLoading();
    setTimeout(()=>{
      wx.hideNavigationBarLoading();
    },3000)

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log('2. - onShow -- 页面显示（数据从逻辑层传输到view）')
    console.log('5. - onshow - 从后台切换到回来，显示')
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log('3. - onReady -- 页面渲染（初次完成）')
  },

  

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log('4. - onhide - 从后台切换到其他app，未退出')
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