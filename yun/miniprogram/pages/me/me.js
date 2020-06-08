const db = wx.cloud.database()
// miniprogram/pages/me/me.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: wx.getStorageSync("userinfo") || {}
  },
  userName(e){
    let userInfo = e.detail.userInfo
    // 调用云函数,获取用户的openid
    wx.cloud.callFunction({
      name: "login",
      complete: res=>{
        userInfo.openid = res.result.openid
        this.setData({
          userInfo
        })
        // 写入本地缓存
        wx.setStorageSync('userinfo', userInfo)
      }
    })
  },
  // 添加图书
  addBook(isbn){
    // 调用云函数
    wx.cloud.callFunction({
      name: "book",
      data: {isbn},
      success: res=>{
        // 追加到数据库中
        // console.log(res)
        db.collection('doubanbooks').add({
          data: res.result
        }).then(result=>{
          console.log(result)
          if (result._id){
            wx.showModal({
              title: '添加成功',
              content: `[${res.result.title}]添加成功`,
            })
          }
        })
      }
    })
  },
  // 扫二维码
  ScanCode(){
    wx.scanCode({
      success:res=>{
        // 可以获取到图书的isbn
        // console.log(res)
        this.addBook(res.result)
      }
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

  }
})