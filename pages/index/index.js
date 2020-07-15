const app = getApp()

Page({
  data: {
    
  },
  onLoad: function () {

  },
  defaultTap(){
    tt.chooseImage({
      success: (res) => {
       console.log(res) 
       wx.navigateTo({
          url: '/pages/cutImage/cutImage?path='+res.tempFilePaths[0]+'&des='+1+'&len='+300,
        })
      }
    });
  }
})
