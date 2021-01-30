// pages/index1/wordsIndex/wordsIndex.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    words:[]
  },

  clouddata:{
    words:[
      {
        wid:0,
        name:"抑郁"
      },
      {
        wid:1,
        name:"双相障碍"
      },
      {
        wid:2,
        name:"恋爱挫折综合征"
      },
      {
        wid:3,
        name:"学习逃避症"
      },
      {
        wid:4,
        name:"网络综合症"
      },
      {
        wid:5,
        name:"考试综合征"
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getWords();
  },

    /**
   * 从云数据库获取数据
   */
  getWords() {
    let words = this.clouddata.words;
    this.setData({
      words
    })
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