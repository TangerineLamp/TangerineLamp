Page({
  data: {
    currentIndex:0,
    scrollTop:0,
    leftMenuList:[],
    rightTestList:[],
  },

  //从云端获取的数据
  Cates:{
    left:["专业测评","娱乐测评"],
    right:[
      [
        {
          tid:0,
          title:"童年阴影测试",
          img:"https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3812393301,2329645096&fm=26&gp=0.jpg",
          type:"情感",
          des:"童年受到的伤害，改变了你什么？"
        },
        {
          tid:1,
          title:"抑郁测试",
          img:"https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=405757228,3196131689&fm=26&gp=0.jpg",
          type:"健康",
          des:"测测你的抑郁有多深？"
        },
        {
          tid:2,
          title:"影子人格测试",
          img:"https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=333358049,3511313393&fm=26&gp=0.jpg",
          type:"性格",
          des:"你的背后隐藏着哪些影子人格？"
        },
        {
          tid:3,
          title:"大脑优势评估",
          img:"https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1622435809,957750092&fm=15&gp=0.jpg",
          type:"能力",
          des:"溢出测试溢出测试溢出测试溢出测试溢出测试溢出测试溢出测试溢出测试溢出测试溢出测试溢出测试溢出测试溢出测试溢出测试溢出测试"
        },
        {
          tid:4,
          title:"恋爱体质测试",
          img:"https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=395487156,3062274823&fm=26&gp=0.jpg",
          type:"情感",
          des:"测测你是哪种恋爱体质？"
        },
        {
          tid:5,
          title:"爱情底色测试",
          img:"https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3840350717,2210481427&fm=26&gp=0.jpg",
          type:"情感",
          des:"从颜色透视你的爱情观"
        }
      ],
      [
        {
          tid:500,
          title:"假面人格测试",
          img:"https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=4112329300,1871547202&fm=26&gp=0.jpg",
          type:"人际",
          des:"测测你隐藏了哪些人格？"
        },
        {
          tid:501,
          title:"原生家庭边界评估",
          img:"https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1060753041,4225328984&fm=26&gp=0.jpg",
          type:"亲子",
          des:"父母缺乏边界感，该怎么办？"
        }
      ]
    ]
  },

  //首次加载页面时，调用onload
  onLoad: function(options){
    const Cates = wx.getStorageSync("cates");
    // 缓存技术
    if(!Cates){
      //不存在缓存，发送请求获取数据
      this.getCates();
    }else{
      //数据过期，时间5min
      if(Date.now()-Cates.time>1000*60*5){
        this.getCates();
      }else{
        //可以使用旧数据
        this.Cates = Cates.data;
        let leftMenuList = this.Cates.left;
        let rightTestList = this.Cates.right[0];
        this.setData({
          leftMenuList,
          rightTestList
        })
      }
    }
  },

  //接口返回的数据
  getCates(){
    // request({
    //   url:""
    // })
    //   .then(res=>{
    //     this.Cates=res.data.message;
    //     //把接口数据存入本地存储
    //     wx.setStorageSync("cates", {time:Date.now(),data:this.Cates});
    //     //左右列表数据构造
    //     let leftMenuList = this.Cates.left;
    //     let rightTestList = this.Cates.right[0];
    //     this.setData({
    //       leftMenuList,
    //       rightTestList
    //     })
    //   })
    
    //引入云开发后请删除以下全部↓↓↓↓↓
    wx.setStorageSync("cates", {time:Date.now(),data:this.Cates});
    let left = this.Cates.left;
    let right = this.Cates.right[0];
    this.setData({
      leftMenuList:left,
      rightTestList:right
    })
  },
  

  //导航至心理咨询
  bindViewTap1() {
    wx.navigateTo({
      url: "/pages/index1/adviceIndex/adviceiIndex"
    })
  },
  //导航至心理课程
  bindViewTap2() {
    wx.navigateTo({
      url: "/pages/index1/courseIndex/courseIndex"
    })
  },

  //左侧菜单点击事件,重新渲染右侧列表
  switchRightTab(e){
    const {index}=e.currentTarget.dataset;
    let hhh = this.Cates.right[index];
    this.setData({
      currentIndex:index,
      rightTestList:hhh,
      //重新设置，右侧内容的scroll-view标签距离顶部的距离
      scrollTop:0
    })
  },

  getUrl() {
    if(currentIndex==0){
      return "/pages/paidTestDetail/paidTestDetail?tid="
    }
  }

})  