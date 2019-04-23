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
    array20_5: ['咖啡', '茶', '中餐', '西餐', '素餐居多', '荤餐居多', '其他'],
    array20_6: ['晨跑居多', '健身居多', '瑜伽居多', '球类运动', '其他'],
    index: 0,
    cznamenv:"",
    cznamenan:'',
    cznamelao: '',
    cznamehai: '',
    bjnamenv:'',
    bjnamenan: '',
    bjnamelao: '',
    bjnamehai: '',
    ysnamenv: '',
    ysnamenan: '',
    ysnamelao: '',
    ysnamehai: '',
    hdnamenv: '',
    hdnamenan: '',
    hdnamelao: '',
    hdnamehai: '',
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

  // Q20_5_1
  bindPickerChange5_1: function (e) {
    var sjs = this.data.array20_5[e.detail.value];
    this.setData({
      ysnamenv: sjs
    })
  },

  // Q20_5_2
  bindPickerChange5_2: function (e) {
    var sjs = this.data.array20_5[e.detail.value];
    this.setData({
      ysnamenan: sjs
    })
  },

  // Q20_5_3
  bindPickerChange5_3: function (e) {
    var sjs = this.data.array20_5[e.detail.value];
    this.setData({
      ysnamelao: sjs
    })
  },

  // Q20_5_4
  bindPickerChange5_4: function (e) {
    var sjs = this.data.array20_5[e.detail.value];
    this.setData({
      ysnamehai: sjs
    })
  },

  // Q20_6_1
  bindPickerChange6_1: function (e) {
    var sjs = this.data.array20_6[e.detail.value];
    this.setData({
      hdnamenv: sjs
    })
  },

  // Q20_5_2
  bindPickerChange6_2: function (e) {
    var sjs = this.data.array20_6[e.detail.value];
    this.setData({
      hdnamenan: sjs
    })
  },

  // Q20_5_3
  bindPickerChange6_3: function (e) {
    var sjs = this.data.array20_6[e.detail.value];
    this.setData({
      hdnamelao: sjs
    })
  },

  // Q20_5_4
  bindPickerChange6_4: function (e) {
    var sjs = this.data.array20_6[e.detail.value];
    this.setData({
      hdnamehai: sjs
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
        url: 'https://request.hejianzhiyang.com/Index/yy_dyd',
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
        content: '请填写姓名',
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