// pages/index0/index0.js
const app = getApp()

Page({
  data: {
    passageIconSrc: '/icons/passage-icon.jpg',
    musicIconSrc: '/icons/music-icon.jpg',
    comicIconSrc: '/icons/comic-icon.jpg',
    radioIconSrc: '/icons/radio-icon.jpg',
    contactIconSrc: '/icons/contact-icon.jpg'
  },
 
  onLoad: function() {
    var that = this
    var picList = []
    picList.push("http://psyhelp.cqu.edu.cn/__local/7/3C/C9/9CAD953BE2E601CB4C43B8DED09_5E067D77_7862.jpg")
    picList.push("http://psyhelp.cqu.edu.cn/__local/4/B3/F0/99C465764EF6C44E1E135455D6D_C1C5E3D5_662F.jpg")
    picList.push("http://psyhelp.cqu.edu.cn/__local/1/92/9E/5C150AA892CD571F2850AF99F26_28411FCE_9F4D.jpg")
    that.setData({
      picList: picList,
    })
  }
})
