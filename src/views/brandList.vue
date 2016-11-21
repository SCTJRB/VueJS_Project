<style lang="less" rel="stylesheet/less"  scoped>
  @import "../less/common.less";
  .banner{
    height:6.133333rem;
    width: 100%; .pos-rel; border-bottom: .0666666rem solid #f0f0f0;
  .banner-pho{
    width: 100%;
  }
  .banner-bottom{
    width: 100%; height: .7733333rem; background-color:#000; opacity: .5; .pos-abs; bottom: 0;
    color: #f1f1f1; .font(.32rem); line-height: .7733333rem; padding-left: .32rem;
  }
  }
  .goods{
  .prefer;
  .prefer-item{
    padding-top: .133333rem; border-top: 0;
  }
  }
</style>
<template>
  <div>
    <div class="banner">
      <mt-swipe :auto="4000" >
        <mt-swipe-item>
          <img src="../img/banner-pho.jpg" alt="" class="banner-pho">
          <div class="banner-bottom">Apple 苹果品牌旗舰店</div>
        </mt-swipe-item>
        <mt-swipe-item>
          <img src="../img/banner-pho.jpg" alt="" class="banner-pho">
          <div class="banner-bottom">Apple 苹果品牌旗舰店</div>
        </mt-swipe-item>
        <mt-swipe-item>
            <img src="../img/banner-pho.jpg" alt="" class="banner-pho">
            <div class="banner-bottom">Apple 苹果品牌旗舰店</div>
        </mt-swipe-item>
      </mt-swipe>
    </div>
    <ul class="top">
        <li class="top-list" :class="defaultCurrent==true? 'top-list-active':'top-list'" @click="defaultBy">
            综合
            <span class="top-list-icon1"></span>
        </li>
        <li :class="timeCurrent==true? 'top-list-active':'top-list'" class="top-list" @click="timeBy">最新</li>
        <li :class="priceCurrent==true? 'top-list-active':'top-list'" class="top-list" @click="priceBy">
            价格
            <span class="top-list-icon2"></span>
        </li>
        <li class="top-list">
            <img src="../img/top-list-icon.png" alt="" class="top-list-icon">
        </li>
    </ul>
    <div class="goods">
      <mt-loadmore :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore">
        <ul class="prefer-item">
            <li class="prefer-list" v-for="li in brandList" @click="goodsDetali(li)">
                <a href="javascript:void(0)">
                    <img :src="li.imgUrl" alt="" class="prefer-list-pho">
                    <p class="prefer-info">{{li.title}}</p>
                    <span class="prefer-money">&yen;{{li.price}}</span>
                    <span class="prefer-old-money">&yen;{{li.oldPrice}}</span>
                </a>
                <span v-if="li.isActive" class="list-label">标签</span>
            </li>
        </ul>
        </mt-loadmore>
    </div>
  </div>
</template>

<script>
    import Vue from 'vue'
    import { Loadmore } from 'mint-ui';
    Vue.component(Loadmore.name, Loadmore);

    import img from '../img/prefer-list-pho.jpg'
    import img1 from '../img/prefer-list-pho1.jpg'

    import bannerPC from '../img/bannerPC.png'
    import bannerPhone from '../img/bannerPhone.png'

    import detaliPC from '../img/detaliPC.png'
    import detaliPhone from '../img/detaliPhone.png'

    export default {
      data:function(){
        return{
          allLoaded:false,
          loadmore:'',
          brandList:[
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
          defaultCurrent:true,
          priceCurrent:false,
          timeCurrent:false
        }
      },
      methods:{
        loadBottom:function(id){
          var _this = this;
          setTimeout(function(){
            _this.brandList.push(
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
            );
            _this.$refs.loadmore.onBottomLoaded(id);
          },500);
        },
        priceBy:function(){
          this.priceCurrent=true;
          this.defaultCurrent=false;
          this.timeCurrent=false;

          this.brandList.sort(function(a,b){
            return a.price - b.price;
          });
        },
        timeBy:function(){
          this.priceCurrent=false;
          this.defaultCurrent=false;
          this.timeCurrent=true;

          this.brandList.sort(function(a,b){
            return b.time - a.time;
          });
        },
        defaultBy:function(){
          this.priceCurrent=false;
          this.defaultCurrent=true;
          this.timeCurrent=false;

          this.brandList.sort(function(a,b){
            return a.id - b.id;
          });
        },
        goodsDetali:function(obj){
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
