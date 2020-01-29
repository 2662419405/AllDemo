const db = wx.cloud.database()
// miniprogram/pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    books: [],
    page: 0,
  },
  onReachBottom(){
    console.log('触发底部了')
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getList(true)
  },
  getList(){
    const PAGE = 3
    const offest = this.data.page * PAGE
    let ret = db.collection('doubanbooks').orderBy('create_time', 'desc')
    if(this.data.page>1){
      ret = ret.skip(offest)
    }
    ret = ret.limit(PAGE).get().then(res=>{
      this.setData({
        books: res.data
      })
    })
    // db.collection('doubanbooks').orderBy('create_time', 'desc').get().then(res => {
    //   this.setData({
    //     books: res.data
    //   })
    // })
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