// pages/teacher/sign_launch.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    types: ["上课签到"],
    typeIndex: "0",
    activities: ["上课签到", "下课签到", "全部"],
    activityIndex: "0",
    title: '',
    desc: '',
    time_req: ''
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

  //改变签到类型
  bindTypeChange: function (e) {
    this.setData({
      typeIndex: e.detail.value
    })
  },
  //改变签到环节
  bindActivityChange: function (e) {
    this.setData({
      activityIndex: e.detail.value
    })
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