<style lang="less" rel="stylesheet/less"  scoped>
  @import "../less/common.less";
  .prefer .prefer-item {
    border-top: 2px solid #f0f0f0;
    background-color: #f0f0f0;
    overflow: hidden;
  }
  .prefer .prefer-item .prefer-list {
    width: 49.25%;
    margin: 0 1.5% .13333333rem 0;
    background-color: #fff;
    float: left;
    padding-bottom: .3733333rem;
  }
  .prefer .prefer-item .prefer-list:nth-child(even) {
    margin-right: 0;
  }
  .prefer .prefer-item .prefer-list .prefer-list-pho {
    width: 100%;
    height: 3.386666rem;
    display: block;
    margin: .68rem auto .73333rem;
  }
  .prefer .prefer-item .prefer-list .prefer-info {
    height: 1.3066666rem;
    padding: 0 .29333333rem;
    overflow: hidden;
    line-height: .6rem;
    color: #333;
    font-size: 0.346666rem;
  }
  .prefer .prefer-item .prefer-list .prefer-money {
    padding: 0 .16rem 0 .2933333rem;
    color: #ea445a;
    font-size: 0.373333rem;
  }
  .prefer .prefer-item .prefer-list .prefer-old-money {
    color: #999;
    font-size: 0.32rem;
    text-decoration: line-through;
  }
  body {
    font-size: 0.3466666rem;
  }
  .Listnav {
    width: 100%;
    height: 1.066666rem;
    overflow: hidden;
    overflow-x: scroll;
  }
  .Listnav .nav-item {
    width: 184%;
  }
  .Listnav .nav-item .nav-list {
    width: 9.9%;
    float: left;
    padding: .3333rem 0;
    text-align: center;
    border-top: 1px solid #f1f1f1;
    border-bottom: 1px solid #f1f1f1;
  }
  .Listnav .nav-item .nav-list .nav-list-link {
    color: #666;
    padding-bottom: .15rem;
    text-decoration: none;
  }
  .Listnav .nav-item .nav-list .nav-list-link.nav-active {
    border-bottom: .064rem solid #ea445a;
    color: #333;
  }
  .top {
    width: 100%;
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
  }
  .top .top-list {
    -webkit-box-flex: 1;
    -moz-box-flex: 1;
    -webkit-flex: 1;
    -ms-flex: 1;
    flex: 1;
    text-align: center;
    margin-right: .5rem;
    color: #999;
    padding: .333333rem 0;
  }
  .top .top-list .top-list-icon {
    width: .4rem;
    height: .36rem;
    margin-left: 1rem;
  }
  .top .top-list .top-list-icon1 {
    width: .16rem;
    height: .106666rem;
    display: inline-block;
    background: url(../img/top-list-icon1.png) center no-repeat;
    vertical-align: middle;
    background-size: contain;
  }
  .top .top-list .top-list-icon2 {
    width: .16rem;
    height: .2133333rem;
    display: inline-block;
    background: url(../img/top-list-icon2.png) center no-repeat;
    vertical-align: initial;
    background-size: contain;
  }
  .top .top-list.top-list-active {
    color: #e94559;
  }
  .top .top-list.top-list-active .top-list-icon1 {
    background-image: url(../img/top-list-active.png);
  }
  .goods .prefer-item {
    border-top: 2px solid #f0f0f0;
    background-color: #f0f0f0;
    overflow: hidden;
  }
  .goods .prefer-item .prefer-list {
    width: 49.25%;
    margin: 0 1.5% .13333333rem 0;
    background-color: #fff;
    float: left;
    padding-bottom: .3733333rem;
  }
  .goods .prefer-item .prefer-list:nth-child(even) {
    margin-right: 0;
  }
  .goods .prefer-item .prefer-list .prefer-list-pho {
    width: 100%;
    height: 4.773333rem;
    display: block;
    /*margin: .68rem auto .73333rem;*/
  }
  .goods .prefer-item .prefer-list .prefer-info {
    height: 1.3066666rem;
    padding: 0 .29333333rem;
    overflow: hidden;
    line-height: .6rem;
    color: #333;
    font-size: 0.346666rem;
  }
  .goods .prefer-item .prefer-list .prefer-money {
    padding: 0 .16rem 0 .2933333rem;
    color: #ea445a;
    font-size: 0.373333rem;
  }
  .goods .prefer-item .prefer-list .prefer-old-money {
    color: #999;
    font-size: 0.32rem;
    text-decoration: line-through;
  }
  .goods .prefer-item {
    padding-top: .133333rem;
    border-top: 0;
  }

</style>
<template>
  <div>
    <div class="Listnav">
      <ul class="nav-item">
        <li class="nav-list" v-for="(li,index) in calssfiy" @click="active(li.id,index)">
          <a href="javascript:void(0)" :class="li.current==true?'nav-active':''" class="nav-list-link ">{{li.title}}</a>
        </li>
      </ul>
    </div>
    <ul class="top">
      <li :class="defaultCurrent==true? 'top-list-active':'top-list'" class="top-list" @click="defaultBy">
        综合 <span class="top-list-icon1"></span>
      </li>
      <li :class="timeCurrent==true? 'top-list-active':'top-list'" class="top-list" @click="timeBy">最新</li>
      <li :class="priceCurrent==true? 'top-list-active':'top-list'" class="top-list" @click="priceBy">
        价格 <span class="top-list-icon2"></span>
      </li>
      <li class="top-list">
        <img src="../img/top-list-icon.png" alt="" class="top-list-icon">
      </li>
    </ul>
    <div class="goods">
      <mt-loadmore :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore">
        <ul class="prefer-item">
          <li class="prefer-list" v-for="li in goodsList" @click="goodsDetali(li)">
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
</template>

<script>
  import Vue from 'vue'
  import img from '../img/prefer-list-pho.jpg'
  import img1 from '../img/prefer-list-pho1.jpg'

  import bannerPC from '../img/bannerPC.png'
  import bannerPhone from '../img/bannerPhone.png'

  import detaliPC from '../img/detaliPC.png'
  import detaliPhone from '../img/detaliPhone.png'

  import { Loadmore } from 'mint-ui';
  Vue.component(Loadmore.name, Loadmore);

  export default{
    data:function(){
      return{
        allLoaded:false,
        loadmore:'',
        calssfiy:[
          {id:1,title:'全部',current:true},
          {id:2,title:'手机',current:false},
          {id:3,title:'笔记本',current:false}
        ],
        goodsList:[
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
        timeCurrent:false,
        typeid:1
      }
    },
    methods:{
      loadBottom:function(id){
        var _this = this;
        switch (_this.typeid){
          case 1:
            setTimeout(function(){
              _this.goodsList.push(
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
            },1500);
          break;
          case 2:
            setTimeout(function(){
              _this.goodsList.push(
                {id:5,goodsCode:'sdwr22313',title:'iphone 7',imgUrl:img,bannerImg:bannerPhone,detaliImg:detaliPhone,price:'4560',oldPrice:'5670',time:'2016',address:'江苏发货',periods:'24',active:[
                  {title:'6期免息',txt:'全场6期内免息（限3/6期使用）',isActive:false},
                  {title:'费率5折',txt:'全场12期服务费5折（限分12期使用）',isActive:true}
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
                {id:5,goodsCode:'sdwr22313',title:'iphone 7',imgUrl:img,bannerImg:bannerPhone,detaliImg:detaliPhone,price:'4560',oldPrice:'5670',time:'2016',address:'江苏发货',periods:'24',active:[
                  {title:'6期免息',txt:'全场6期内免息（限3/6期使用）',isActive:false},
                  {title:'费率5折',txt:'全场12期服务费5折（限分12期使用）',isActive:true}
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
                {id:5,goodsCode:'sdwr22313',title:'iphone 7',imgUrl:img,bannerImg:bannerPhone,detaliImg:detaliPhone,price:'4560',oldPrice:'5670',time:'2016',address:'江苏发货',periods:'24',active:[
                  {title:'6期免息',txt:'全场6期内免息（限3/6期使用）',isActive:false},
                  {title:'费率5折',txt:'全场12期服务费5折（限分12期使用）',isActive:true}
                ],
                  goodSpec:[
                    {title:'颜色',name:'color',txt:['银白色','深空黑','金色']},
                    {title:'尺寸',name:'size',txt:['12寸','13.3寸','14寸','15寸']}
                  ]}
              );
              _this.$refs.loadmore.onBottomLoaded(id);
            },1500);
            break;
          case 3:
            setTimeout(function(){
              _this.goodsList.push(
                {id:4,goodsCode:'ff2qsa12313',title:'Apple MacBook Air 13.3英寸笔记本电脑 银色（core i5 处理器）',imgUrl:img1,bannerImg:bannerPC,detaliImg:detaliPC,price:'5670',oldPrice:'6780',time:'2011',address:'深圳发货',periods:'12',active:[
                  {title:'6期免息',txt:'全场6期内免息（限3/6期使用）',isActive:true},
                  {title:'家电免息',txt:'家电12期内免息（限3/6/12期使用）',isActive:false},
                  {title:'费率5折',txt:'全场12期服务费5折（限分12期使用）',isActive:false}
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
                {id:4,goodsCode:'ff2qsa12313',title:'Apple MacBook Air 13.3英寸笔记本电脑 银色（core i5 处理器）',imgUrl:img1,bannerImg:bannerPC,detaliImg:detaliPC,price:'5670',oldPrice:'6780',time:'2011',address:'深圳发货',periods:'12',active:[
                  {title:'6期免息',txt:'全场6期内免息（限3/6期使用）',isActive:true},
                  {title:'家电免息',txt:'家电12期内免息（限3/6/12期使用）',isActive:false},
                  {title:'费率5折',txt:'全场12期服务费5折（限分12期使用）',isActive:false}
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
                {id:4,goodsCode:'ff2qsa12313',title:'Apple MacBook Air 13.3英寸笔记本电脑 银色（core i5 处理器）',imgUrl:img1,bannerImg:bannerPC,detaliImg:detaliPC,price:'5670',oldPrice:'6780',time:'2011',address:'深圳发货',periods:'12',active:[
                  {title:'6期免息',txt:'全场6期内免息（限3/6期使用）',isActive:true},
                  {title:'家电免息',txt:'家电12期内免息（限3/6/12期使用）',isActive:false},
                  {title:'费率5折',txt:'全场12期服务费5折（限分12期使用）',isActive:false}
                ],
                  goodSpec:[
                    {title:'颜色',name:'color',txt:['银白色','深空黑','金色']},
                    {title:'尺寸',name:'size',txt:['12寸','13.3寸','14寸','15寸']}
                  ]}
              );
              _this.$refs.loadmore.onBottomLoaded(id);
            },1500);
            break;
        }
      },
      active:function(id,index){
        for(var i=0;i<this.calssfiy.length;i++){
          this.calssfiy[i].current = false;
        }
        this.calssfiy[index].current=true;
        this.typeid = id;
        this.priceCurrent=false;
        this.defaultCurrent=true;
        this.timeCurrent=false;
        switch (id){
          case 1:
            this.goodsList.length=0;
            this.goodsList.push(
              {id:5,goodsCode:'sdwr22313',title:'iphone 7',imgUrl:img,bannerImg:bannerPhone,detaliImg:detaliPhone,price:'4560',oldPrice:'5670',time:'2016',address:'江苏发货',periods:'24',active:[
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
              {id:5,goodsCode:'sdwr22313',title:'iphone 7',imgUrl:img,bannerImg:bannerPhone,detaliImg:detaliPhone,price:'4560',oldPrice:'5670',time:'2016',address:'江苏发货',periods:'24',active:[
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
                ]}
            );
          break;
          case 2:
            this.goodsList.length=0;
            this.goodsList.push(
              {id:5,goodsCode:'sdwr22313',title:'iphone 7',imgUrl:img,bannerImg:bannerPhone,detaliImg:detaliPhone,price:'4560',oldPrice:'5670',time:'2016',address:'江苏发货',periods:'24',active:[
                {title:'6期免息',txt:'全场6期内免息（限3/6期使用）',isActive:false},
                {title:'费率5折',txt:'全场12期服务费5折（限分12期使用）',isActive:true}
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
              {id:5,goodsCode:'sdwr22313',title:'iphone 7',imgUrl:img,bannerImg:bannerPhone,detaliImg:detaliPhone,price:'4560',oldPrice:'5670',time:'2016',address:'江苏发货',periods:'24',active:[
                {title:'6期免息',txt:'全场6期内免息（限3/6期使用）',isActive:false},
                {title:'费率5折',txt:'全场12期服务费5折（限分12期使用）',isActive:true}
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
              {id:5,goodsCode:'sdwr22313',title:'iphone 7',imgUrl:img,bannerImg:bannerPhone,detaliImg:detaliPhone,price:'4560',oldPrice:'5670',time:'2016',address:'江苏发货',periods:'24',active:[
                {title:'6期免息',txt:'全场6期内免息（限3/6期使用）',isActive:false},
                {title:'费率5折',txt:'全场12期服务费5折（限分12期使用）',isActive:true}
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
              {id:5,goodsCode:'sdwr22313',title:'iphone 7',imgUrl:img,bannerImg:bannerPhone,detaliImg:detaliPhone,price:'4560',oldPrice:'5670',time:'2016',address:'江苏发货',periods:'24',active:[
                {title:'6期免息',txt:'全场6期内免息（限3/6期使用）',isActive:false},
                {title:'费率5折',txt:'全场12期服务费5折（限分12期使用）',isActive:true}
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
              {id:5,goodsCode:'sdwr22313',title:'iphone 7',imgUrl:img,bannerImg:bannerPhone,detaliImg:detaliPhone,price:'4560',oldPrice:'5670',time:'2016',address:'江苏发货',periods:'24',active:[
                {title:'6期免息',txt:'全场6期内免息（限3/6期使用）',isActive:false},
                {title:'费率5折',txt:'全场12期服务费5折（限分12期使用）',isActive:true}
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
                ]}
            );
          break;
          case 3:
            this.goodsList.length=0;
            this.goodsList.push(
              {id:4,goodsCode:'ff2qsa12313',title:'Apple MacBook Air 13.3英寸笔记本电脑 银色（core i5 处理器）',imgUrl:img1,bannerImg:bannerPC,detaliImg:detaliPC,price:'5670',oldPrice:'6780',time:'2011',address:'深圳发货',periods:'12',active:[
                {title:'6期免息',txt:'全场6期内免息（限3/6期使用）',isActive:true},
                {title:'家电免息',txt:'家电12期内免息（限3/6/12期使用）',isActive:false},
                {title:'费率5折',txt:'全场12期服务费5折（限分12期使用）',isActive:false}
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
              {id:4,goodsCode:'ff2qsa12313',title:'Apple MacBook Air 13.3英寸笔记本电脑 银色（core i5 处理器）',imgUrl:img1,bannerImg:bannerPC,detaliImg:detaliPC,price:'5670',oldPrice:'6780',time:'2011',address:'深圳发货',periods:'12',active:[
                {title:'6期免息',txt:'全场6期内免息（限3/6期使用）',isActive:true},
                {title:'家电免息',txt:'家电12期内免息（限3/6/12期使用）',isActive:false},
                {title:'费率5折',txt:'全场12期服务费5折（限分12期使用）',isActive:false}
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
              {id:4,goodsCode:'ff2qsa12313',title:'Apple MacBook Air 13.3英寸笔记本电脑 银色（core i5 处理器）',imgUrl:img1,bannerImg:bannerPC,detaliImg:detaliPC,price:'5670',oldPrice:'6780',time:'2011',address:'深圳发货',periods:'12',active:[
                {title:'6期免息',txt:'全场6期内免息（限3/6期使用）',isActive:true},
                {title:'家电免息',txt:'家电12期内免息（限3/6/12期使用）',isActive:false},
                {title:'费率5折',txt:'全场12期服务费5折（限分12期使用）',isActive:false}
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
              {id:4,goodsCode:'ff2qsa12313',title:'Apple MacBook Air 13.3英寸笔记本电脑 银色（core i5 处理器）',imgUrl:img1,bannerImg:bannerPC,detaliImg:detaliPC,price:'5670',oldPrice:'6780',time:'2011',address:'深圳发货',periods:'12',active:[
                {title:'6期免息',txt:'全场6期内免息（限3/6期使用）',isActive:true},
                {title:'家电免息',txt:'家电12期内免息（限3/6/12期使用）',isActive:false},
                {title:'费率5折',txt:'全场12期服务费5折（限分12期使用）',isActive:false}
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
              {id:4,goodsCode:'ff2qsa12313',title:'Apple MacBook Air 13.3英寸笔记本电脑 银色（core i5 处理器）',imgUrl:img1,bannerImg:bannerPC,detaliImg:detaliPC,price:'5670',oldPrice:'6780',time:'2011',address:'深圳发货',periods:'12',active:[
                {title:'6期免息',txt:'全场6期内免息（限3/6期使用）',isActive:true},
                {title:'家电免息',txt:'家电12期内免息（限3/6/12期使用）',isActive:false},
                {title:'费率5折',txt:'全场12期服务费5折（限分12期使用）',isActive:false}
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
          );
        }
      },
      priceBy:function(){
          this.priceCurrent=true;
          this.defaultCurrent=false;
          this.timeCurrent=false;

          this.goodsList.sort(function(a,b){
            return a.price - b.price;
          });
      },
      timeBy:function(){

          this.priceCurrent=false;
          this.defaultCurrent=false;
          this.timeCurrent=true;

          this.goodsList.sort(function(a,b){
            return b.time - a.time;
          });
      },
      defaultBy:function(){
        this.priceCurrent=false;
        this.defaultCurrent=true;
        this.timeCurrent=false;

        this.goodsList.sort(function(a,b){
          return a.id - b.id;
        });
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
