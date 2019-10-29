//index.js
//获取应用实例
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    isPlayingMusic:false
  },
bgm:null,
  music_url: 'http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E06DCBDC9AB7C49FD713D632D313AC4858BACB8DDD29067D3C601481D36E62053BF8DFEAF74C0A5CCFADD6471160CAF3E6A&fromtag=46',
music_coverImgUrl:"/images/a.png",
callGroom:function(){
  wx.makePhoneCall({
    phoneNumber: '13700000000',
  })
},
callBride:function(){
  wx.makePhoneCall({
    phoneNumber: '15600000000',
  })
},
play:function(e){
  if (this.data.isPlayingMusic)
  {
    this.bgm.pause()
  }else{
    this.bgm.play()
  }
  this.setData({isPlayingMusic:!this.data.isPlayingMusic})
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
    this.bgm=wx.getBackgroundAudioManager()
    this.bgm.title='marry me'
    this.bgm.epname='wedding'
    this.bgm.singer='singer'
    this.bgm.coverImgUrl=whis.music_coverImgUrl
    this.bgm.onCanplay(()=>{this.bgm.pause()})
    this.bgm.src=this.music_url
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
