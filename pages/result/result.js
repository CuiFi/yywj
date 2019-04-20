// pages/result/result.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    textData:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(options.id);
    var myselfID = wx.getStorageSync("resultID");
    var shareID = options.confusion
    // wx.setStorageSync("shareID", shareID)
    var _this = this;
    var resultid = shareID ? shareID : myselfID;
    // console.log("resultid:"+ resultid);
    wx.request({
      url: 'https://request.hejianzhiyang.com/Index/getResult',
      method:'POST',
      data:{
        confusion: resultid
      },
      success:function(res){
        console.log(res);
        _this.setData({
          textData:res.data
        });
      }
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
    return {
      title: ' ',
      path: '/pages/result/result?confusion=' + wx.getStorageSync("resultID")
    }
  }
})