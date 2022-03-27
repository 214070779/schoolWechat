// pages/teacher/sign_home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title: '标题',
    sign_status: '待激活',
    type: '上课签到',
    signList: [
      {
        activity: '上课签到',
        // 待激活，进行中，查看
        status: '查看'
      },
      {
        activity: '下课签到',
        status: '进行中'
      }
    ]
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

  navtoSign: function () {
    wx.navigateTo({
      url: '/pages/teacher/sign_launch',
    })
  },

  navtoInfo: function (e) {
    var index = e.currentTarget.id;
    console.log(index); 
    console.log(this.data.signList);
    if(this.data.signList[index].status == '查看') {
      wx.navigateTo({
        url: '/pages/teacher/sign_result',
      })
    }
    else if(this.data.signList[index].status == '进行中') {
      wx.navigateTo({
        url: '/pages/teacher/sign_info',
      })
    }
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