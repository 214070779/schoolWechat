// var url=require('../config/config.js')
// pages/total/total.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
     datalist:[]
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
    var that=this
    that.getlist()
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

  },
  getlist:function(){
    var that =this
    wx.request({
      url: url["getsigntotal"],
       header: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'X-Nideshop-Token': wx.getStorageSync('token'),
        'jhq-request-from': 'true'
      },
      success:function(res){
       console.log(res)
       that.setData(
        {
          datalist: res.data.list
        }
       )
      },fail:function(res){

      }
    })
  }
})