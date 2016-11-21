
<style>
  .mint-swipe-indicator{width: .2rem;height: .2rem;border: 1px solid #a0a0a0;background: #fff;opacity: 1;}
  .mint-swipe-indicator.is-active{border: 1px solid #ea445a !important;background: #ea445a !important;}
  .mint-swipe-items-wrap > div img{width: 100%;height: 100%}

</style>

<style lang="less" rel="stylesheet/less" scoped>

  @import "../less/common.less";
  body{
    width:100%; color: #333;
  }
  .homeMaxDiv{position: absolute;left:0;top:0;bottom: 1.2rem;right:0;overflow-y: auto}
  .banner{
    width: 100%; overflow: hidden;height: 6.133333rem;
  .banner-item{
    width: 300%;
  .banner-list{
    width: 33.3333%; .pull-left;
  .banner-pho{
    width: 100%;
    height: 100%;
  }
  }
  }
  }
  .nav{
    width: 100%;
  .nav-item{
    border-top: 2px solid #f1f1f1; overflow: hidden;
    img{width: .90666rem;height: .90666rem}
  .nav-list{
    width: 20%; .pull-left; .text-center; margin: .48rem 0 .32rem;
  .nav-list-icon{
    width: .6133333rem; height: .4933333rem; display: inline-block; background: url(../img/nav-list-icon.png) center no-repeat; background-size: contain;
  }
  .nav-list-title{
    margin-top: .32rem; color: #666; .font(.32rem);
  }
  }
  }
  }
  .line{
    width: 100%; height: .266666rem; background-color: #f0f0f0;
  }
  .content1{
  .content1-title{
    width: 100%; .font(.3466666rem); color: #333; .text-center; margin: .4266666rem 0;
  }
  .content1-pho{
    width: 100%; padding: .2666666rem; border-top: 2px solid #f1f1f1; border-bottom: 2px solid #f1f1f1; overflow: hidden;
  .content1-pho-link{
    width: 48%; display: block; .pull-left;
  &.content1-link1{
     margin-right: 4%;
   }
  .content1-pho-list{
    width: 100%; height: 3.293333rem;
  }
  }
  }
  }
  .hot-sale{
    width: 100%;
  .hot-title{
  .font(.32rem); color: #333; margin: .333333rem 0; .text-center;
  }
  .hot-goods{
    width: 100%;
  //height: 5.6rem;
    overflow-x: scroll;
  .hot-item{
    width: 148%;white-space: nowrap;
  .hot-item-list{
    width: 26%; margin-bottom: .4rem; display: inline-block;
  .hot-goods-pho{
    width: 100%; height: 3.733333rem;
  }
  .hot-info{
    width: 100%; height: 1rem; overflow: hidden; .font(.3466666rem); color: #333; line-height: .5rem;
    padding: 0 .26666rem;
    text-align: center;
  }
  .hot-price{
    display: block; .text-center; color: #ea445a; .font(.373333rem);
  }
  &.hot-list-last{
     height:3.733333rem;vertical-align: top; border: 1px solid #e1e1e1; .text-center; .font(.346666rem);
  .list-last-check{
    display: block; margin: 1.4rem 0 .133333rem;
  }
  .list-last-more{
    display: block; color: #ea445a;
  }
  }
  }
  }
  }
  }
  .content2{
    width:100%;
  .content2-title{
    width: 100%; .font(.3466666rem); color: #333; .text-center; margin: .453333rem 0 .453333rem;
  }
  .content2-pho{
    width: 100%; height: 5.546666rem; display: block;
  }
  .content2-goods{
    width: 100%; padding: .266666rem; background-color: #f0f0f0; .pull-flex;
  .goods-link{
  .flex; border: 2px solid #fff;
  &.goods-link1{
     margin-right: .333333rem;
   }
  .goods-link-pho{
    width: 100%;
    height: 2.586666rem;
  }
  }
  }
  }
  .brand{
  .brand-title{
  .content1>.content1-title;
  }
  .brand-goods{
    width: 100%; border-top: 2px solid #f1f1f1; overflow: hidden;
  .brand-goods-link{
    width: 25%; display: inline-block; .pull-left; .text-center; margin-bottom: .2rem;
  .brand-pho{
    width: 2.50666666rem; height: 2.0133333rem; display: block;
  }
  &.brand-last{
   .text-center; .font(.32rem);
  .brand-last-check{
    display: block; margin: .8rem 0 .1rem; color: #333;
  }
  .brand-last-more{
    display: block; color: #ea445a;
  }
  }
  }
  }
  }
  .content2{
  .hot-goods{
  .hot-sale>.hot-goods;
  }
  }
  .prefer{
  .prefer-title{
  .brand>.brand-title;
  }
  }

  .content3 {
    width: 100%;
    position: relative;
  }
  .content3 .content3-pho {
    width: 100%;
    height: 4rem;
  }
  .content3 .content3-label {
    width: 1.58666rem;
    height: .61333rem;
    display: inline-block;
    background-color: #6dcff6;
    position: absolute;
    left: 0;
    top: 0;
    line-height: .61333rem;
    color: #fff;
    font-size: 0.2666rem;
  }
  .content3 .content3-label .label-icon {
    width: .37333rem;
    height: .37333rem;
    display: inline-block;
    background: url(../img/content3-label-icon.png) no-repeat;
    background-size: contain;
    vertical-align: middle;
    margin-right: .0666rem;
  }

</style>



<template>
  <div >
    <div class="homeMaxDiv">
    <div class="banner">
      <mt-swipe :auto="4000" >
        <mt-swipe-item>
          <a href="javascript:void(0)"><img src="../img/banner-1.jpg" alt="闪购" class="banner-pho"></a>
        </mt-swipe-item>
        <mt-swipe-item>
          <a href="javascript:void(0)"><img src="../img/banner-1.jpg" alt="闪购" class="banner-pho"></a>
        </mt-swipe-item>
        <mt-swipe-item>
          <a href="javascript:void(0)"><img src="../img/banner-1.jpg" alt="闪购" class="banner-pho"></a>
        </mt-swipe-item>
      </mt-swipe>
    </div>
    <div class="nav">
      <ul class="nav-item">
        <li class="nav-list" v-for="fiy in classfiy">
          <img :src="fiy.img"/>
          <!--<span class="nav-list-icon"></span>-->
          <h3 class="nav-list-title">{{ fiy.title }}</h3>
        </li>
        <li class="nav-list" @click='hrefClassList'>
          <img src="../img/icon10.png"/>
          <!--<span class="nav-list-icon"></span>-->
          <h3 class="nav-list-title">全部</h3>
        </li>
      </ul>
    </div>
      <div class="line"></div>
      <div class="content3">
        <img src="../img/content3-pho.jpg" alt="" class="content3-pho">
        <div class="content3-label">
          <span class="label-icon"></span>支付专享
        </div>
      </div>
    <div class="line"></div>
    <div class="content1">
      <h2 class="content1-title">折扣·免息</h2>
      <div class="content1-pho">
        <a href="javascript:void(0)" class="content1-pho-link content1-link1">
          <img src="../img/content1-pho-list1.png" alt="" class="content1-pho-list">
        </a>
        <a href="javascript:void(0)" class="content1-pho-link">
          <img src="../img/content1-pho-list2.png" alt="" class="content1-pho-list">
        </a>
      </div>
    </div>
    <div class="hot-sale">
      <h2 class="hot-title">- 热卖排行 -</h2>
      <div class="hot-goods">
        <ul class="hot-item">
          <li class="hot-item-list" v-for="hot in hotList">
            <a href="javascript:void(0)">
              <img :src="hot.imgUrl" alt="" class="hot-goods-pho">
              <p class="hot-info">{{hot.title}}</p>
              <span class="hot-price">&yen; {{hot.price}}</span>
            </a>
          </li>
          <li class="hot-item-list hot-list-last">
            <span class="list-last-check">查看全部</span>
            <span class="list-last-more">MORE</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="line"></div>
    <div class="content2">
      <h2 class="content2-title">轻奢馆上新</h2>
      <a href="javascript:void(0)">
        <img src="../img/content2-pho1.png" alt="" class="content2-pho">
      </a>
      <div class="content2-goods">
        <a href="javascript:void(0)" class="goods-link goods-link1">
          <img src="../img/goods-link-pho.png" alt="" class="goods-link-pho">
        </a>
        <a href="javascript:void(0)" class="goods-link">
          <img src="../img/goods-link-pho2.png" alt="" class="goods-link-pho">
        </a>
      </div>
    </div>
    <div class="brand">
      <h2 class="brand-title">热门品牌</h2>
      <div class="brand-goods">
        <a href="javascript:void(0)" class="brand-goods-link" v-for="brand in hotbrand" @click="hrefBrandList">
          <img :src="brand.imgUrl" alt="" class="brand-pho">
        </a>
      </div>
    </div>
    <div class="content2">
      <h2 class="content2-title">专题名称区域一</h2>
      <a href="javascript:void(0)">
        <img src="../img/content2-pho.jpg" alt="" class="content2-pho">
      </a>
      <div class="hot-goods">
        <ul class="hot-item">
          <li class="hot-item-list" v-for="hot in hotList2">
            <a href="javascript:void(0)">
              <img :src="hot.imgUrl" alt="" class="hot-goods-pho">
              <p class="hot-info">{{hot.title}}</p>
              <span class="hot-price">&yen; {{hot.price}}</span>
            </a>
          </li>
          <li class="hot-item-list hot-list-last">
            <span class="list-last-check">查看全部</span>
            <span class="list-last-more">MORE</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="prefer">
      <h2 class="prefer-title">你可能喜欢</h2>
      <mt-loadmore :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore">
      <ul class="prefer-item">
        <li class="prefer-list" v-for="li in maybeLike" @click="goodsDetali(li)">
          <a href="javascript:void(0)">
            <img :src="li.imgUrl" alt="" class="prefer-list-pho">
            <p class="prefer-info">{{li.title}}</p>
            <span class="prefer-money">&yen;{{li.price}}</span>
            <span class="prefer-old-money">&yen;{{li.oldPrice}}</span>
          </a>
        </li>
      </ul>
      </mt-loadmore>
    </div>
    </div>
    <common-foot></common-foot>
  </div>
</template>

<script>
    import CommonFoot from './footer.vue'
    import Vue from 'vue'

    import icon1 from '../img/icon1.png'
    import icon2 from '../img/icon2.png'
    import icon3 from '../img/icon3.png'
    import icon4 from '../img/icon4.png'
    import icon5 from '../img/icon5.png'
    import icon6 from '../img/icon6.png'
    import icon7 from '../img/icon7.png'
    import icon8 from '../img/icon8.png'
    import icon9 from '../img/icon9.png'


    import img from '../img/prefer-list-pho.jpg';
    import img1 from '../img/prefer-list-pho1.jpg';

    import hotimg from '../img/hot-goods.jpg';
    import hotimg1 from '../img/hot-goods1.jpg';
    import hotimg2 from '../img/hot-goods.jpg';
    import hotimg3 from '../img/hot-goods1.jpg';

    import hot2img from '../img/goods-pho1.jpg';
    import hot2img1 from '../img/goods-pho2.jpg';
    import hot2img2 from '../img/goods-pho3.jpg';
    import hot2img3 from '../img/goods-pho1.jpg';

    import brandImg from '../img/brand-pho.jpg'
    import brandImg1 from '../img/brand-pho1.jpg'
    import brandImg2 from '../img/brand-pho2.jpg'
    import brandImg3 from '../img/brand-pho3.jpg'



    import bannerPC from '../img/bannerPC.png'
    import bannerPhone from '../img/bannerPhone.png'

    import detaliPC from '../img/detaliPC.png'
    import detaliPhone from '../img/detaliPhone.png'

    import { Loadmore } from 'mint-ui';
    Vue.component(Loadmore.name, Loadmore);


    export default {
      data:function(){
        return {
          allLoaded:false,
          loadmore:'',
          classfiy:[
            {title:'数码',img:icon1},
            {title:'服饰',img:icon2},
            {title:'家居',img:icon3},
            {title:'食品',img:icon4},
            {title:'教育',img:icon5},
            {title:'食品',img:icon6},
            {title:'教育',img:icon7},
            {title:'食品',img:icon8},
            {title:'生活',img:icon9}
          ],
          hotList:[
            {id:1,title:'Apple MacBook Air 13.3英寸笔记本电脑 银色（core i5 处理器）',imgUrl:hotimg,price:'12000'},
            {id:2,title:'iphone 7',imgUrl:hotimg1,price:'7890'},
            {id:3,title:'Apple MacBook Air 13.3英寸笔记本电脑 银色（core i5 处理器）',imgUrl:hotimg2,price:'9890'},
            {id:4,title:'iphone 7',imgUrl:hotimg3,price:'7689'}
          ],
          hotList2:[
            {id:1,title:'home现代美式新古典老虎椅高背',imgUrl:hot2img,price:'1980'},
            {id:1,title:'home现代美式沙发单人',imgUrl:hot2img1,price:'3689'},
            {id:1,title:'home现代美式新古典老虎椅',imgUrl:hot2img2,price:'2908'},
            {id:1,title:'home现代美式新古典老虎椅高背',imgUrl:hot2img3,price:'3672'}
          ],
          maybeLike:[
            {id:1,goodsCode:'123456',title:'Apple MacBook Air 13.3英寸笔记本电脑 银色（core i5 处理器）',imgUrl:img1,bannerImg:bannerPC,detaliImg:detaliPC,price:'7890',oldPrice:'8910',time:'2010',address:'上海发货',periods:'12',active:[
              {title:'家电免息',txt:'家电12期内免息（限3/6/12期使用）',isActive:true}
            ],
              goodSpec:[
                {title:'颜色',name:'color',txt:['银白色','深空黑','金色']},
                {title:'尺寸',name:'size',txt:['12寸','13.3寸','14寸','15寸']}
              ]
            },
            {id:2,goodsCode:'vd221235',title:'iphone 7',imgUrl:img,bannerImg:bannerPhone,detaliImg:detaliPhone,price:'6780',oldPrice:'7890',time:'2013',address:'北京发货',periods:'24',active:[
              {title:'家电免息',txt:'家电12期内免息（限3/6/12期使用）',isActive:false},
              {title:'6期免息',txt:'全场6期内免息（限3/6期使用）',isActive:true},
              {title:'费率5折',txt:'全场12期服务费5折（限分12期使用）',isActive:false}
            ],
              goodSpec:[
                {title:'颜色',name:'color',txt:['银白色','深空黑','金色']},
                {title:'尺寸',name:'size',txt:['12寸','13.3寸','14寸','15寸']}
              ]},
            {id:3,goodsCode:'t43se2131',title:'iphone 7',imgUrl:img,bannerImg:bannerPhone,detaliImg:detaliPhone,price:'8890',oldPrice:'5670',time:'2016',address:'成都发货',periods:'12',active:[
              {title:'6期免息',txt:'全场6期内免息（限3/6期使用）',isActive:false},
              {title:'费率5折',txt:'全场12期服务费5折（限分12期使用）',isActive:true}
            ],
              goodSpec:[
                {title:'颜色',name:'color',txt:['银白色','深空黑','金色']},
                {title:'尺寸',name:'size',txt:['12寸','13.3寸','14寸','15寸']}
              ]},
            {id:4,goodsCode:'ff2qsa12313',title:'Apple MacBook Air 13.3英寸笔记本电脑 银色（core i5 处理器）',imgUrl:img1,bannerImg:bannerPC,detaliImg:detaliPC,price:'5670',oldPrice:'6780',time:'2011',address:'深圳发货',periods:'12',active:[
              {title:'6期免息',txt:'全场6期内免息（限3/6期使用）',isActive:true},
              {title:'家电免息',txt:'家电12期内免息（限3/6/12期使用）',isActive:false},
              {title:'费率5折',txt:'全场12期服务费5折（限分12期使用）',isActive:false}
            ],
              goodSpec:[
                {title:'颜色',name:'color',txt:['银白色','深空黑','金色']},
                {title:'尺寸',name:'size',txt:['12寸','13.3寸','14寸','15寸']}
              ]},
            {id:5,goodsCode:'sdwr22313',title:'iphone 7',imgUrl:img,bannerImg:bannerPhone,detaliImg:detaliPhone,price:'4560',oldPrice:'5670',time:'2016',address:'江苏发货',periods:'24',active:[
              {title:'6期免息',txt:'全场6期内免息（限3/6期使用）',isActive:false},
              {title:'费率5折',txt:'全场12期服务费5折（限分12期使用）',isActive:true}
            ],
              goodSpec:[
                {title:'颜色',name:'color',txt:['银白色','深空黑','金色']},
                {title:'尺寸',name:'size',txt:['12寸','13.3寸','14寸','15寸']}
              ]},
            {id:6,goodsCode:'qd23423r121',title:'Apple MacBook Air 13.3英寸笔记本电脑 银色（core i5 处理器）',imgUrl:img1,bannerImg:bannerPC,detaliImg:detaliPC,price:'5670',oldPrice:'6780',time:'2011',address:'广州发货',periods:'36',active:[
              {title:'家电免息',txt:'家电12期内免息（限3/6/12期使用）',isActive:false},
              {title:'家电免息',txt:'家电12期内免息（限3/6/12期使用）',isActive:false},
              {title:'费率5折',txt:'全场12期服务费5折（限分12期使用）',isActive:true}
            ],
              goodSpec:[
                {title:'颜色',name:'color',txt:['银白色','深空黑','金色']},
                {title:'尺寸',name:'size',txt:['12寸','13.3寸','14寸','15寸']}
              ]}
          ],
          hotbrand:[
            {id:1,imgUrl:brandImg},
            {id:2,imgUrl:brandImg1},
            {id:3,imgUrl:brandImg2},
            {id:4,imgUrl:brandImg3}
          ]
        }
      },
      components:{
        CommonFoot
      },
      methods:{
        loadBottom:function(id){
          var _this = this;
          setTimeout(function(){
            _this.maybeLike.push(
              {id:5,title:'Apple MacBook Air 13.3英寸笔记本电脑 银色（core i5 处理器）',imgUrl:img,price:'1230',oldPrice:'2340'},
              {id:6,title:'iphone 7 ',imgUrl:img1,price:'2340',oldPrice:'3450'}
            );
            _this.$refs.loadmore.onBottomLoaded(id);
          },1500);
        },
        hrefClassList:function(){
          this.$router.push({name : "classFiy"})
        },
        hrefBrandList:function(){
          this.$router.push({name : "brandList"})
        },
        goodsDetali:function(obj){
//        console.log(this.$store.state.goodsInfo);
          this.$store.state.goodsInfo.id=obj.id;
          this.$store.state.goodsInfo.imgUrl=obj.imgUrl;
          this.$store.state.goodsInfo.oldPrice=obj.oldPrice;
          this.$store.state.goodsInfo.price=obj.price;
          this.$store.state.goodsInfo.time=obj.time;
          this.$store.state.goodsInfo.title=obj.title;
          this.$store.state.goodsInfo.address=obj.address;
          this.$store.state.goodsInfo.active=obj.active;
          this.$store.state.goodsInfo.goodSpec=obj.goodSpec;
          this.$store.state.goodsInfo.periods=obj.periods;
          this.$store.state.goodsInfo.bannerImg=obj.bannerImg;
          this.$store.state.goodsInfo.detaliImg=obj.detaliImg;
          this.$store.state.goodsInfo.goodsCode=obj.goodsCode;

          this.$router.push({name : "goodsDetali"});
        }
      }
    }
</script>
