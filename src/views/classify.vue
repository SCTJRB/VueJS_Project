
<style scoped>
    .classIfyDiv{
      /*position: relative;*/
      border-width: 1px 0;
      border-style: solid;
      border-color: #e1e1e1;
    }
  .classIfyDiv .OneClass{
      position: absolute;
      top: 0;
      left: 0;
      bottom: 1.2rem;
      width: 25%;
      border-right: 1px solid #e1e1e1;
      font-family: 微软雅黑;
    overflow-y: auto;
  }
    .classIfyDiv .OneClass ul{
      /*padding: .546rem .293rem;*/
      padding: .546rem 0;
    }
    .classIfyDiv .OneClass li{
      list-style: none;
      padding: .25rem 0;
      text-align: center;
    }
    .classIfyDiv .OneClass li a{
      font-size: .373rem;
      padding: .04rem .2rem;
      text-decoration:none;
      color: #666666;
    }
    .activeSty{
      background: #ea445a;
      color: #fff !important;
      border-radius: .33333rem;
    }

    .TwoClass{
      position: absolute;
      top: 0;
      bottom: 1.2rem;
      right: 0;
      width: 75%;
      padding:0 .293rem ;
      font-family: 微软雅黑;
      overflow-y: auto;
    }
    .TwoClassTwo>p{
      padding: .373rem 0;
      font-size: .373rem;
    }
    .TwoClassTwo ul{
      overflow: hidden;
      padding: 0;
    }
    .TwoClassTwo .TwoClassImg li{
      list-style: none;
      float: left;
      /*margin: .1rem .285rem;*/
    }
    .TwoClassTwo .TwoClassImg li img{width: 2.29333rem;height: 2.29333rem}
    .TwoClassTwo ul li p{text-align: center;padding: .2rem 0;color: #666666}

</style>

<template>
    <div class="classIfyDiv">
        <div class="OneClass">
            <ul>
              <li v-for="(title,index) in classfiy"><a :class="title.current==true?'activeSty':''" @click="active(title.id,index)">{{ title.title }}</a></li>
            </ul>
        </div>
        <div class="TwoClass">
            <div class="TwoClassTwo" v-for="fiy in TwoClassFiy">
              <p>{{ fiy.title }}</p>
              <ul class="TwoClassImg">
                <li v-for="lis in fiy.goodsArr" @click="hrefGoodsList">
                  <img src="../img/calssfiy3.png"/>
                  <p>{{ lis.title}}</p>
                </li>
              </ul>
            </div>
        </div>
      <common-foot></common-foot>
    </div>

</template>

<script>
    import CommonFoot from './footer.vue'

    export default{
        data:function(){
          return {
             classfiy:[
               {id:1,title:'潮流女装',current:true},
               {id:2,title:'品牌男装',current:false},
               {id:3,title:'个护化妆',current:false},
               {id:4,title:'家用电器',current:false},
               {id:5,title:'电脑办公',current:false},
               {id:6,title:'手机数码',current:false},
               {id:7,title:'母婴童装',current:false},
               {id:8,title:'图书',current:false}
             ],
             TwoClassFiy:[
                {parentID:2,title:'热卖品类',goodsArr:[{id:101,title:'新品连衣裙',img:''},{id:102,title:'小脚牛仔裤',img:''},{id:102,title:'针织连衣裙',img:''},{id:102,title:'毛呢外套',img:''}]},
                {parentID:3,title:'裙装',goodsArr:[{id:101,title:'秋冬连衣裙',img:''},{id:102,title:'长袖连衣裙',img:''}]}
             ]
          }
        },
      components:{
        CommonFoot
      },
      methods:{
        active:function(id,index){

          var _this = this;
          for(var i=0;i<_this.classfiy.length;i++){
            _this.classfiy[i].current = false;
          }
          this.classfiy[index].current=true;


          this.TwoClassFiy.length=0;
          if(id==1){
              this.TwoClassFiy.push(
                {parentID:2,title:'热卖品类',goodsArr:[
                  {id:101,title:'新品连衣裙',img:''},
                  {id:102,title:'小脚牛仔裤',img:''},
                  {id:102,title:'针织连衣裙',img:''},
                  {id:102,title:'毛呢外套',img:''}
                ]},
                {parentID:3,title:'裙装',goodsArr:[
                  {id:101,title:'秋冬连衣裙',img:''},
                  {id:102,title:'长袖连衣裙',img:''}
                ]});
          }else if(id==2){
              this.TwoClassFiy.push(
                {parentID:2,title:'热卖选购',goodsArr:[
                  {id:101,title:'时尚羽绒服',img:''},
                  {id:102,title:'修身夹克',img:''}
                ]},
                {parentID:2,title:'羽绒服',goodsArr:[
                  {id:101,title:'加厚羽绒服',img:''},
                  {id:102,title:'轻羽绒服',img:''},
                  {id:102,title:'毛呢大衣',img:''}
                ]});
          }else if(id==3){
              this.TwoClassFiy.push(
                {parentID:2,title:'面部护肤',goodsArr:[
                  {id:101,title:'卸妆',img:''},
                  {id:102,title:'爽肤水',img:''},
                  {id:102,title:'精华',img:''},
                  {id:102,title:'眼霜',img:''},
                  {id:102,title:'面膜',img:''},
                  {id:102,title:'防晒',img:''}
                ]},
                {parentID:2,title:'身体护理',goodsArr:[
                  {id:101,title:'沐浴',img:''},
                  {id:102,title:'润肤',img:''},
                  {id:102,title:'美胸',img:''},
                  {id:102,title:'护法',img:''},
                  {id:102,title:'纤体塑形',img:''},
                  {id:102,title:'香皂',img:''}
                ]});

          }else if(id==4){
              this.TwoClassFiy.push(
                {parentID:2,title:'大家电',goodsArr:[
                  {id:101,title:'平板电视',img:''},
                  {id:102,title:'饮水机',img:''},
                  {id:102,title:'吸尘器',img:''},
                  {id:102,title:'加湿器',img:''},
                  {id:102,title:'净化器',img:''}
                ]},
                  {parentID:2,title:'卧室',goodsArr:[
                  {id:101,title:'除螨机',img:''},
                  {id:102,title:'卧室空调',img:''},
                  {id:102,title:'衣柜',img:''},
                  {id:102,title:'加湿器',img:''}
                ]});
          }else if(id==5){
              this.TwoClassFiy.push(
                {parentID:2,title:'电脑整机',goodsArr:[
                  {id:101,title:'笔记本',img:''},
                  {id:102,title:'台式机',img:''},
                  {id:101,title:'服务器',img:''},
                  {id:102,title:'一体机',img:''}
                ]},
                {parentID:2,title:'电脑配件',goodsArr:[
                  {id:101,title:'CPU',img:''},
                  {id:102,title:'显示器',img:''},
                  {id:101,title:'键盘鼠标',img:''}
                ]});
          }else if(id==6){
            this.TwoClassFiy.push(
              {parentID:2,title:'手机',goodsArr:[
                {id:101,title:'苹果',img:''},
                {id:102,title:'华为',img:''},
                {id:101,title:'三星',img:''}
              ]},
              {parentID:2,title:'手机配件',goodsArr:[
                {id:101,title:'钢化膜',img:''},
                {id:102,title:'手机保护套',img:''},
                {id:101,title:'耳机',img:''}
              ]});
          }else if(id==7){
            this.TwoClassFiy.push(
              {parentID:2,title:'婴儿用品',goodsArr:[
                {id:101,title:'干爽纸尿裤',img:''},
                {id:102,title:'爽身粉',img:''},
                {id:101,title:'花露水',img:''},
                {id:101,title:'学步机',img:''},
                {id:101,title:'奶粉',img:''}
              ]},
              {parentID:2,title:'洗护用品',goodsArr:[
                {id:101,title:'宝宝护肤',img:''},
                {id:102,title:'洗发沐浴',img:''},
                {id:101,title:'洗澡用具',img:''}
              ]});
          }else if(id==8){
            this.TwoClassFiy.push(
              {parentID:2,title:'文学馆',goodsArr:[
                {id:101,title:'小说',img:''},
                {id:102,title:'文学',img:''},
                {id:101,title:'青春',img:''},
                {id:101,title:'传奇',img:''},
                {id:101,title:'动漫',img:''},
                {id:101,title:'言情',img:''}
              ]},
              {parentID:2,title:'人文社科馆',goodsArr:[
                {id:101,title:'历史',img:''},
                {id:102,title:'心理学',img:''},
                {id:102,title:'政治',img:''},
                {id:102,title:'法律',img:''},
                {id:101,title:'哲学',img:''}
              ]});
          }
        },
        hrefGoodsList:function(){
          this.$router.push({name : "goodsList"})
        },
        priceBy:function(){
          this.goodsList.sort(function(a,b){
            return a.price - b.price;
          });
        },
        timeBy:function(){
          this.goodsList.sort(function(a,b){
            return b.time - a.time;
          });
        }
      }
    }
</script>
