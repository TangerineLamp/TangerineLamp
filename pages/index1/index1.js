Page({
  data: {
    currentIndex:0,
    leftMenuList:[],
    rightTestList:[],
    clouddata:{
      left:["专业测评","娱乐测评"],
      right:[
        [
          {
            title:"童年阴影测试",
            img:"https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3812393301,2329645096&fm=26&gp=0.jpg",
            type:"情感",
            des:"童年受到的伤害，改变了你什么？"
          },
          {
            title:"抑郁测试",
            img:"https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=405757228,3196131689&fm=26&gp=0.jpg",
            type:"健康",
            des:"测测你的抑郁有多深？"
          },
          {
            title:"影子人格测试",
            img:"https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=333358049,3511313393&fm=26&gp=0.jpg",
            type:"性格",
            des:"你的背后隐藏着哪些影子人格？"
          },
          {
            title:"大脑优势评估",
            img:"https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1622435809,957750092&fm=15&gp=0.jpg",
            type:"能力",
            des:"溢出测试溢出测试溢出测试溢出测试溢出测试溢出测试溢出测试溢出测试溢出测试溢出测试溢出测试溢出测试溢出测试溢出测试溢出测试"
          },
          {
            title:"恋爱体质测试",
            img:"https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=395487156,3062274823&fm=26&gp=0.jpg",
            type:"情感",
            des:"测测你是哪种恋爱体质？"
          },
          {
            title:"爱情底色测试",
            img:"https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3840350717,2210481427&fm=26&gp=0.jpg",
            type:"情感",
            des:"从颜色透视你的爱情观"
          }
        ],
        [
          {
            title:"假面人格测试",
            img:"https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=4112329300,1871547202&fm=26&gp=0.jpg",
            type:"人际",
            des:"测测你隐藏了哪些人格？"
          },
          {
            title:"原生家庭边界评估",
            img:"https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1060753041,4225328984&fm=26&gp=0.jpg",
            type:"亲子",
            des:"父母缺乏边界感，该怎么办？"
          }
        ]
      ]
    }
  },  

  //首次加载页面时，调用onload
  onLoad: function(options){
    this.getCates();
  },

  //从服务器获取数据，录入clouddata
  getCates(){
    // request({
    //   url:""
    // })
    //   .then(res=>{
    //     this.data.clouddata=res.data.message;
    //     let leftMenuList = this.data.clouddata.left;
    //     let rightTestList = this.data.clouddata.right[0];
    //     this.setData({
    //       leftMenuList,
    //       rightTestList
    //     })
    //   })
    let left = this.data.clouddata.left;
    let right = this.data.clouddata.right[0];
    this.setData({
      leftMenuList:left,
      rightTestList:right
    })
  },
  

  //导航至心理咨询
  bindViewTap1:function() {
    wx.navigateTo({
      url: "/pages/adviceIndex/adviceiIndex"
    })
  },
  //导航至心理课程
  bindViewTap2() {
    wx.navigateTo({
      url: "/pages/courseIndex/courseIndex"
    })
  },

  //左侧菜单点击事件,重新渲染右侧列表
  switchRightTab(e){
    const {index}=e.currentTarget.dataset;
    let hhh = this.data.clouddata.right[index];
    this.setData({
      currentIndex:index,
      rightTestList:hhh
    })
  }
})  