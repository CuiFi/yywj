Page({

  /**
   * 页面的初始数据
   */
  data: {
    date: '',
    q5Data: '其他',
    q5value: '',
    q5if: false,
    q1_1Data: '其他',
    q1_1value: '',
    q1_1if: false,
    array20_1: ['木质类', '皮质类', '布艺类', '绿植类', '石材类', '金属类'],
    array20_2: ['热闹', '幽静', '温馨', '浪漫', '明丽', '祥和', '其他'],
    index: 0,
    cznamenv:"",
    cznamenan:'',
    cznamelao: '',
    cznamehai: '',
    bjnamenv:'',
    bjnamenan: '',
    bjnamelao: '',
    bjnamehai: '',
  },

  // Q5
  bindKeyInput5: function (e) {
    console.log(e);
    this.setData({
      q5Data: e.detail.value
    })
  },
  radioChange5: function (e) {
    if (e.detail.value == "其他") {
      this.setData({
        q5if: true
      });
    } else {
      this.setData({
        q5if: false,
        q5Data: '其他',
        q5value: ''
      });
    }
  },

  // Q1_1
  bindKeyInput1_1: function (e) {
    this.setData({
      q1_1Data: e.detail.value
    })
  },
  checkboxChange1_1: function (e) {
    // console.log(e.detail.value.includes("其他"));
    if (e.detail.value.includes("其他")) {
      this.setData({
        q1_1if: true
      });
    } else {
      this.setData({
        q1_1if: false,
        q1_1Data: '其他',
        q1_1value: ''
      });
    }
  },

  // Q20_1_1
  bindPickerChange1_1: function (e) {
    var sjs = this.data.array20_1[e.detail.value];
    this.setData({
      cznamenv: sjs
    })
  },

  // Q20_1_2
  bindPickerChange1_2: function (e) {
    var sjs = this.data.array20_1[e.detail.value];
    this.setData({
      cznamenan: sjs
    })
  },

  // Q20_1_3
  bindPickerChange1_3: function (e) {
    var sjs = this.data.array20_1[e.detail.value];
    this.setData({
      cznamelao: sjs
    })
  },

  // Q20_1_4
  bindPickerChange1_4: function (e) {
    var sjs = this.data.array20_1[e.detail.value];
    this.setData({
      cznamehai: sjs
    })
  },

  // Q20_2_1
  bindPickerChange2_1: function (e) {
    var sjs = this.data.array20_2[e.detail.value];
    this.setData({
      bjnamenv: sjs
    })
  },

  // Q20_2_2
  bindPickerChange2_2: function (e) {
    var sjs = this.data.array20_2[e.detail.value];
    this.setData({
      bjnamenan: sjs
    })
  },

  // Q20_2_3
  bindPickerChange2_3: function (e) {
    var sjs = this.data.array20_2[e.detail.value];
    this.setData({
      bjnamelao: sjs
    })
  },

  // Q20_2_4
  bindPickerChange2_4: function (e) {
    var sjs = this.data.array20_2[e.detail.value];
    this.setData({
      bjnamehai: sjs
    })
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

  formSubmit: function (e) {
    var formData = e.detail.value;
    // var cityTabs = wx.getStorageSync("cityid");
    console.log(e);

    // var objform = Object.assign(formData, { "cityID": cityTabs });
    if (formData.q1) {
      wx.request({
        url: 'https://request.hejianzhiyang.com/Index/two',
        method: "POST",
        data: formData,
        header: {
          'Content-Type': 'application/json'
        },
        success: function (res) {
          wx.setStorageSync("resultID", res.data.confusion);
          wx.navigateTo({
            url: '/pages/okpage/okpage'
          })
        }
      });
    } else {
      wx.showModal({
        title: '警告',
        content: '请填写姓名,对接人',
        showCancel: false,
        success(res) {
          if (res.confirm) {
            console.log('用户点击确定')
          } else if (res.cancel) {
            console.log('用户点击取消')
          }
        }
      })
    }
  }
})