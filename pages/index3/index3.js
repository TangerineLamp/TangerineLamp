// pages/index3/index3.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userinfo:{}
  },
  onShow(){
    const userinfo=wx.getStorageSync("userinfo");
    this.setData({userinfo})
  }
})