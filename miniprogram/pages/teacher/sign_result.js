// pages/teacher/sign_result.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentTab: 0,
    userList: [{
        userpic: '../../images/e.jpg',
        name: '错错',
        time: '10:00'
      },
      {
        userpic: '../../images/d.jpg',
        name: '布布',
        time: '10:00'
      },
      {
        userpic: '../../images/c.jpg',
        name: '壮壮',
        time: '10:00'
      },
    ],
    unsignUserList: [{
        userpic: '../../images/e.jpg',
        name: '错错',
        time: '10:00'
      },
      {
        userpic: '../../images/d.jpg',
        name: '布布',
        time: '10:00'
      },
      {
        userpic: '../../images/c.jpg',
        name: '壮壮',
        time: '10:00'
      },
    ]
  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数

  },
  //滑动切换
  swiperTab: function (e) {
    var that = this;
    that.setData({
      currentTab: e.detail.current
    });
  },
  //点击切换
  clickTab: function (e) {
    var that = this;
    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentTab: e.target.dataset.current
      })
    }
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