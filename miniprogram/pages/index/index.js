// pages/index/index.js
Page({
    

  /**
   * 页面的初始数据
   */
  data: {
      user:{
        name:"无名",
        sex:'男'
      },
      myitem:[
        { descripe:"暂无",
          type:"卡",
          name:"一卡通",
          place:"校门",
          time:"昨天",
          money:100
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
  ButtonClick: function (){
    console.log("Hello World")
  },
  onSearch:function(e){
    console.log(e.detail);
  },
  onCancel:function(){
    console.log("cancle");
  },
  onConfirm:function() {
    this.selectComponent('#item').toggle();
  },

  onSwitch1Change:function({ detail }) {
    this.setData({ switch1: detail });
  },

  onSwitch2Change:function({ detail }) {
    this.setData({ switch2: detail });
  },
})

