// pages/video/video.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    src:'http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4',
    danmuList: [
      {text:'第1s出现的弹幕',color:'#ff0000',time:1},
      {text:'第3s出现的弹幕',color:'#ff00ff',time:3}
    ],
    movieList:[{
      create_time:'2018-7-30 19:55:54',title:'点滴记忆',
      src:'http://vjs.zencdn.net/v/oceans.mp4'
    },
    {
      create_time:"2019",title:'我还记得',
    }]
  },
  videoContext:null,
  inputValue:'',


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.videoContext=wx.createVideoContext('myVideo')
    const TxvContext=requirePlugin('tencentvideo')
    var txvContext=TxvContext.getTxvContext('txv1')
    txvContext.play()
    txvContext.pause()
  },
  bindInputBlur:function(e){
    this.inputValue=e.detail.value
  },
  bindSendDanmu:function(){
    this.videoContext.sendDanmu({
      text:this.inputValue,
      color:'#f90'
    })
  },
  bindButtonTap:function(){
    wx.chooseVideo({
      sourceType:['album','crmera'],
      maxDurration:60,
      camera:'back',
      success:res=>{
        this.setData({
          src:res.tempFilePath
        })
      }
    })
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