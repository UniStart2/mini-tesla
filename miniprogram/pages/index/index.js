// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentSwiperIndex: 0,
    swiperItems: [
      {
        imageUrl: '../../images/tesla.png',
        title: 'Model S',
        config: [
          { title: "637",subtitle: "公里数续航" },
          { title: "637",subtitle: "公里数续航" },
          { title: "637",subtitle: "公里数续航" },
        ],  
      },
      {
        imageUrl: '../../images/modely.png',
        title: 'Model Y',
        config: [
          { title: "637",subtitle: "公里数续航" },
          { title: "637",subtitle: "公里数续航" },
          { title: "637",subtitle: "公里数续航" },
        ],  
      },
      {
        imageUrl: '../../images/tesla.png',
        title: 'Model 3',
        config: [
          { title: "637",subtitle: "公里数续航" },
          { title: "637",subtitle: "公里数续航" },
          { title: "637",subtitle: "公里数续航" },
        ],
      },
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */

  onSwiperChange(e){
    const {current} = e.detail;
    this.setData({
      currentSwiperIndex: current,
    })
  },

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