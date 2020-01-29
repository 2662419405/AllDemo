//index.js
const app = getApp()
const db = wx.cloud.database()

Page({
  data: {
    userInfo: wx.getStorageSync('userinfo') || {},
    books: [],
    page: 0,
    more: true,
  },
  // onsHARE
  onPullDownRefresh() {
    console.log('pulldown')

    this.getList(true)

    // console.log('xx')
  },
  onReachBottom() {
    console.log("bottom")

    this.setData({
      page: this.data.page + 1
    }, () => {
      console.log(this.data.page)
      this.getList()

    })
  },


  getList(init) {
    if (init) {
      this.setData({
        page: 0,
        more: true
      })
      // 初始化

    }
    wx.showNavigationBarLoading()
    wx.showLoading({ title: '加载中' })
    const PAGE = 3
    const offset = this.data.page * PAGE
    console.log(offset)
    let ret = db.collection('doubanbooks').orderBy('create_time', 'desc')
    if (offset > 0) {
      ret = ret.skip(offset)
    }

    ret = ret.limit(PAGE).get().then(books => {

      if (books.data.length < Page && this.data.page > 0) {
        this.setData({
          more: false
        })
      }
      // books.data.length = PAGE
      if (init) {
        this.setData({
          books: books.data
        })
        wx.stopPullDownRefresh()
      } else {
        this.setData({
          books: [...this.data.books, ...books.data]
        })
        // 下拉刷新，不能直接覆盖books 而是累加
      }
      wx.hideLoading()
      wx.hideNavigationBarLoading()
    })
    // const offset = 




    //  .get({
    // success:(books)=>{
    //   if (books.data.length < Page && this.data.page > 0) {
    //     console.log(books.data)
    //     this.setData({
    //       more:false
    //     })
    //   }
    //   // books.data.length = PAGE
    //   if (init) {
    //     this.setData({
    //       books: books.data
    //     })
    //     wx.stopPullDownRefresh()
    //   } else {
    //     this.setData({
    //       books: [...this.data.books, ...books.data]
    //     })
    //     // 下拉刷新，不能直接覆盖books 而是累加
    //   }
    //   wx.hideLoading()
    //   wx.hideNavigationBarLoading()
    // }
    // }).then(ret=>{
    //   console.log(ret)
    // })

  },
  onLoad: function () {
    this.getList(true)
  },


})
