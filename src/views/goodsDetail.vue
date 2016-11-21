<style lang="less" rel="stylesheet/less"  scoped>
  @import "../less/common.less";
  .content {
    width: 100%;
    position: absolute;
    top: 1.053rem;
    bottom: 1.30666rem;
    overflow: auto;
  }
  .show{
    width: 100%; overflow: hidden;
  .show-item{
    width: 300%;
  .show-list{
    width: 33.333%; .pull-left;
  .show-list-pho{
    width: 100%; height: 8.266666rem;
  }
  }
  }
  }
  .info{
    padding: 0.3466666rem; border-top:.02666666rem solid #f1f1f1; border-bottom: .26666rem solid #f1f1f1;
  .info-name{
    width: 100%; padding: .266666rem 0; border-bottom: 1px solid #f1f1f1;
  .info-name-txt{
    width: 100%; height: 1.26666rem; line-height: .666666rem; overflow: hidden; .font(.3733333rem);
    color: #333; font-weight: bold;
  }
  }
  .info-price{
    width: 100%; padding: .2rem 0 .3rem; border-bottom: 1px solid #f1f1f1;
  .info-price-new{
  .font(.42666666rem); color: #ea445a; font-weight: bold;
  }
  .info-price-old{
  .font(.2933333rem); color: #999; margin-left: .133333rem; text-decoration: line-through;
  }
  .info-price-txt{
  .font(.3466666rem); color: #333; margin-top: .2rem;
  .info-price-icon{
    width: .32rem; height: .32rem; display: inline-block; background: url(../img/info-price-icon.png) no-repeat;
    background-size: contain;
  }
  }
  }
  .info-act{
    padding: .4rem 0; border-bottom: 1px solid #f1f1f1;
  .info-act-label{
    width: 1.466666rem; height: .4266666rem; display: inline-block; color: #ea445a; .font(.293333rem);
    line-height: .4266666rem; .text-center; border: 1px solid #ea445a; margin-right: .1rem;
  .border-radius(3px);
  &.label-active{
     color: #fff; background-color: #ea445a;
   }
  }
  .info-act-icon{
    width: .173333rem; height: .2933333rem; display: inline-block; background-image: url(../img/right-icon.png);
    background-size: contain;.pull-right;
  }
  }
  .info-desc{
    padding: .4rem 0; overflow: hidden;
  .info-desc-list{
    padding-left: .2133333rem; .pull-left; background: url(../img/list-style-img.png) left center no-repeat;
    background-size: .08rem .08rem; .font(.32rem); color: #333; margin-right: .2rem;
  }
  }
  }
  .size{
    padding: .4rem .3466666rem; .font(.3466666rem); color: #666; .pull-flex; border-bottom: .26666rem solid #f1f1f1;
  .size-input{
  .flex; .text-right; padding-right: .21rem; color: #333;
  }
  .size-icon{
    width: .173333rem; height: .36rem; display: inline-block; background: url(../img/right-icon.png) center no-repeat;
    background-size: contain;
  }
  }
  .drag{
  .font(.32rem); color: #666; line-height: 1.146666rem; .text-center;
  .drag-icon{
    width: .1866666rem; height: .2rem; display: inline-block; background: url(../img/top-icon.png) center no-repeat;
    background-size: contain; margin-left: .13333rem;
  }
  }
  .popup{
    width: 100%; background-color: rgba(0,0,0,.5);left: 0; right: 0; bottom: 0;
    top: 1.053rem; .pos-abs;
  .popup-item{
    width: 100%; padding: 0 3.5%; background: #fff; .pos-abs; bottom: 0; color: #333;
  .popup-item-list{
    border-bottom: 1px solid #f1f1f1; padding: .4rem; .font(.32rem);
  .popup-list-title{
  .text-center; .font(.346666rem);
  }
  .popup-list-close{
    width: .32rem; height: .32rem; display: inline-block;  background: url(../img/close-icon.png) no-repeat;
    background-size: contain; .pull-right; padding-bottom: .4rem;
  }
  .popup-list-label{
  .info>.info-act>.info-act-label;
  }
  }
  }
  .popup-size{
    width: 100%;  background: #fff; .pos-abs; bottom: 0;
  .size-top{
    padding: .4rem 3.5%; border-bottom: 1px solid #f1f1f1; .pos-rel;
  .size-para1{
    margin-left: 2.6666rem; color: #666;
  .size-icon{
  .font(.32rem); color: #ea445a;
  }
  .size-money{
  .font(.48rem); color: #ea445a;
  }
  }
  .size-para2{
    color: #999; .font(.29333rem); margin: .2rem 0 0 2.6666rem;
  }
  .goods-show{
    width: 2.4rem; height: 2.4rem; border: 1px solid #f1f1f1; .pos-abs; bottom: .4rem;
  }
  }
  .size-list{
    overflow: hidden; padding: .05rem 3.5%;
  .size-list-name{
  .font(.32rem); color: #666; margin: .4rem 0 .26666rem;
  }
  .size-list-box{
    width: 2rem; height: .6666rem; display: inline-block; .text-center; line-height: .6666rem; .font(.34666rem);
  .border-radius(3px); margin-right: .2666rem;
  &.box-state1{
     color: #ea445a; border: 1px solid #ea445a;
   }
  &.box-state2{
     color: #333; border: 1px solid #333;
   }
  &.box-state3{
     color: #999; border: 1px solid #999;
   }
  }
  }
  .size-num{
  .pull-right; margin-bottom: .4rem;
  .num-box{
    width: .8rem; height: .8rem; display: inline-block; .border-radius(3px); .text-center; line-height: .8rem;
  &.box-state2{
     color: #333; border: 1px solid #333;
   }
  &.box-state3{
     color: #999; border: 1px solid #999;
   }
  }
  .number{
  .font(.34666rem); color: #333; margin: 0 .346666rem;
  }
  }
  .size-btn{
    width: 100%; height: 1.17333rem; background-color: #ea445a; color: #fff; .font(.37333rem);
  }
  }
  }

  /*商品介绍*/
  .goods-img{
    width: 100%;
  .goods-img-show{
    width: 100%; height: 7.333rem;
  }
  }
  .box{
    border-bottom: 0;
  }

  /*参数规格*/
  .goods-num{
    margin-top: .26666rem;
  .num-item{
    padding: 0 .34666rem;
  .num-item-list{
    border-bottom: 1px solid #f1f1f1; line-height: 1.226rem;
  .num-1{
  .font(.32rem); color:#666; margin-right: .4rem;
  }
  .num-2{
  .font(.34666rem); color:#333;
  }
  }
  }
  }
  .content{
    /*background-color: #f0f0f0;*/
  .detail-nav{
    background-color: #fff;
  }
  .goods-num{
    background-color: #fff;
  }
  }

</style>
<template>
  <div>
    <div class="container">
        <div class="header">
            <span class="header-left" @click="handleClick"></span>
            <span class="header-right"></span>
        </div>
        <div class="content">
            <div class="show">
                <ul class="show-item">
                    <li class="show-list">
                        <a href="javascript:void(0)">
                            <img :src="goodsObj.bannerImg" alt="" class="show-list-pho">
                        </a>
                    </li>
                    <!--<li class="show-list">-->
                        <!--<a href="javascript:void(0)">-->
                            <!--<img src="../img/show-list-pho.jpg" alt="" class="show-list-pho">-->
                        <!--</a>-->
                    <!--</li>-->
                    <!--<li class="show-list">-->
                        <!--<a href="javascript:void(0)">-->
                            <!--<img src="../img/show-list-pho.jpg" alt="" class="show-list-pho">-->
                        <!--</a>-->
                    <!--</li>-->
                </ul>
            </div>
            <div class="info">
                <div class="info-name">
                    <p class="info-name-txt">{{goodsObj.title}}</p>
                </div>
                <div class="info-price">
                    <span class="info-price-new">&yen;{{goodsObj.price}}</span>
                    <span class="info-price-old">&yen;{{goodsObj.oldPrice}}</span>
                    <p class="info-price-txt">
                        <span class="info-price-icon"></span>
                        {{goodsObj.address}}
                    </p>
                </div>
                <div class="info-act" @click="Goodsaction">
                    <span :class="sp.isActive==true?'label-active':''" class="info-act-label" v-for="sp in goodsObj.active">{{sp.title}}</span>
                    <!--<span class="info-act-label">费率五折</span>-->
                    <!--<span class="info-act-label label-active">六折免息</span>-->
                    <span class="info-act-icon"></span>
                </div>
                <ul class="info-desc">
                    <li class="info-desc-list">正品保障</li>
                    <li class="info-desc-list">权威鉴定</li>
                    <li class="info-desc-list">七天退换</li>
                </ul>
            </div>
            <div class="size" @click="goodsInfo">
                商品规格
                <span class="size-input">已选择：{{goodsObj.color}} {{goodsObj.size}}</span>
                <span class="size-icon"></span>
            </div>
          <mt-loadmore :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore" bottomPullText=" " bottomDropText=" " bottomLoadingText=" ">
            <div class="box">
                <h2 class="box-title">GUESS 盖尔斯</h2>
                <div class="hot-goods">
                    <ul class="hot-item">
                        <li class="hot-item-list">
                            <a href="javascript:void(0)">
                                <img src="../img/hot-goods.jpg" alt="" class="hot-goods-pho">
                                <p class="hot-info">67home现代美式新古典老虎椅高背 沙发单人</p>
                                <span class="hot-price">&yen; 1980</span>
                            </a>
                        </li>
                        <li class="hot-item-list">
                            <a href="javascript:void(0)">
                                <img src="../img/hot-goods1.jpg" alt="" class="hot-goods-pho">
                                <p class="hot-info">67home现代美式新古典老虎椅高背 沙发单人</p>
                                <span class="hot-price">&yen; 1980</span>
                            </a>
                        </li>
                        <li class="hot-item-list">
                            <a href="javascript:void(0)">
                                <img src="../img/hot-goods.jpg" alt="" class="hot-goods-pho">
                                <p class="hot-info">67home现代美式新古典老虎椅高背 沙发单人</p>
                                <span class="hot-price">&yen; 1980</span>
                            </a>
                        </li>
                        <li class="hot-item-list hot-list-last">
                            <span class="list-last-check">查看全部</span>
                            <span class="list-last-more">MORE</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="box">
                <h2 class="box-title">同类热销商品</h2>
                <div class="hot-goods">
                    <ul class="hot-item">
                        <li class="hot-item-list">
                            <a href="javascript:void(0)">
                                <img src="../img/hot-goods.jpg" alt="" class="hot-goods-pho">
                                <p class="hot-info">67home现代美式新古典老虎椅高背 沙发单人</p>
                                <span class="hot-price">&yen; 1980</span>
                            </a>
                        </li>
                        <li class="hot-item-list">
                            <a href="javascript:void(0)">
                                <img src="../img/hot-goods1.jpg" alt="" class="hot-goods-pho">
                                <p class="hot-info">67home现代美式新古典老虎椅高背 沙发单人</p>
                                <span class="hot-price">&yen; 1980</span>
                            </a>
                        </li>
                        <li class="hot-item-list">
                            <a href="javascript:void(0)">
                                <img src="../img/hot-goods.jpg" alt="" class="hot-goods-pho">
                                <p class="hot-info">67home现代美式新古典老虎椅高背 沙发单人</p>
                                <span class="hot-price">&yen; 1980</span>
                            </a>
                        </li>
                        <li class="hot-item-list hot-list-last">
                            <span class="list-last-check">查看全部</span>
                            <span class="list-last-more">MORE</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="drag">
                拖动查看商品详情<span class="drag-icon"></span>
            </div>
          </mt-loadmore>
          <i v-if="loadeI">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</i>
          <div v-show="detaliflag">
            <ul class="detail-nav">
              <li class="nav-list nav-active" @click="goodsJS">商品介绍</li>
              <li class="nav-list" @click="goodsGE">参数规格</li>
              <li class="nav-list" @click="goodsSD">晒单评价</li>
            </ul>

            <div class="r_goodsInfo" v-show="goodJS">
                <div class="goods-img">
                  <img :src="goodsObj.detaliImg" alt="" class="goods-img-show">
                </div>
                <div class="box">
                  <h2 class="box-title">GUESS 盖尔斯</h2>
                  <div class="hot-goods">
                    <ul class="hot-item">
                      <li class="hot-item-list">
                        <a href="javascript:void(0)">
                          <img src="../img/hot-goods.jpg" alt="" class="hot-goods-pho">
                          <p class="hot-info">67home现代美式新古典老虎椅高背 沙发单人</p>
                          <span class="hot-price">&yen; 1980</span>
                        </a>
                      </li>
                      <li class="hot-item-list">
                        <a href="javascript:void(0)">
                          <img src="../img/hot-goods1.jpg" alt="" class="hot-goods-pho">
                          <p class="hot-info">67home现代美式新古典老虎椅高背 沙发单人</p>
                          <span class="hot-price">&yen; 1980</span>
                        </a>
                      </li>
                      <li class="hot-item-list">
                        <a href="javascript:void(0)">
                          <img src="../img/hot-goods.jpg" alt="" class="hot-goods-pho">
                          <p class="hot-info">67home现代美式新古典老虎椅高背 沙发单人</p>
                          <span class="hot-price">&yen; 1980</span>
                        </a>
                      </li>
                      <li class="hot-item-list hot-list-last">
                        <span class="list-last-check">查看全部</span>
                        <span class="list-last-more">MORE</span>
                      </li>
                    </ul>
                  </div>
                </div>
            </div>

            <div class="goods-num" v-show="goodGE">
              <ul class="num-item">
                <li class="num-item-list">
                  <span class="num-1">商品编号</span><span class="num-2">237234792347029</span>
                </li>
                <li class="num-item-list">
                  <span class="num-1">商品编号</span><span class="num-2">237234792347029</span>
                </li>
                <li class="num-item-list">
                  <span class="num-1">商品编号</span><span class="num-2">237234792347029</span>
                </li>
              </ul>
            </div>

          </div>
        </div>

        <div class="footer">
            <div class="footer-left">
                最低 <span class="footer-left-icon">￥</span>
                <span class="footer-left-money">{{goodsObj.goodsPrice}}</span> X {{goodsObj.periods}}期
            </div>
            <div class="footer-right" @click="hrefConfirmOrder">立即购买</div>
        </div>
    </div>
    <div class="popup" v-show="popupFlag" @click.self="popclose">
        <ul class="popup-item" v-show="actionInfo">
            <li class="popup-item-list">
                <h3 class="popup-list-title">
                    促销信息<span class="popup-list-close" @click="popclose"></span>
                </h3>
            </li>
            <li class="popup-item-list" v-for="li in goodsObj.active">
                <span class="popup-list-label">{{li.title}}</span>
                {{li.txt}}
            </li>
            <!--<li class="popup-item-list">-->
                <!--<span class="popup-list-label">费率5折</span>-->
                <!--全场12期服务费5折（限分12期使用）-->
            <!--</li>-->
            <!--<li class="popup-item-list">-->
                <!--<span class="popup-list-label">6期免息</span>-->
                <!--全场6期内免息（限分3/6期使用）-->
            <!--</li>-->
        </ul>
        <div class="popup-size" v-show="goodsInfos">
            <div class="size-top">
                <p class="size-para1">
                    最低 <span class="size-icon">￥</span>
                    <span class="size-money">{{goodsObj.goodsPrice}}</span> X {{goodsObj.periods}}期
                </p>
                <p class="size-para2">商品编号：{{goodsObj.goodsCode}}</p>
                <img :src="goodsObj.imgUrl" alt="" class="goods-show">
            </div>

            <div :data="'spec'+index" class="size-list r_paceli" v-for="(spec,index) in goodsObj.goodSpec">
                <h4 class="size-list-name">{{spec.title}}</h4>
                <span :data="'spec'+index" class="size-list-box box-state3" v-for="text in spec.txt" @click="selSpec(index,spec.title,spec.name,$event)">{{text}}</span>
            </div>

            <!--<div class="size-list">-->
                <!--<h4 class="size-list-name">尺寸</h4>-->
                <!--<span class="size-list-box box-state1">L</span><span class="size-list-box box-state2">M</span><span class="size-list-box box-state3">S</span>-->
            <!--</div>-->

            <div class="size-list">
                <h4 class="size-list-name">数量</h4>
                <div class="size-num">
                    <span class="num-box box-state3" @click="jianNum">-</span><span class="number">{{goodsNum}}</span><span class="num-box box-state2" @click="jiaNum">+</span>
                </div>
            </div>
            <button class="size-btn" @click="popclose">确定</button>
        </div>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue'
  import { Loadmore } from 'mint-ui';
  Vue.component(Loadmore.name, Loadmore);

  export default{
    data:function(){
      return{
        goodsObj:{
          id:this.$store.state.goodsInfo.id,
          title:this.$store.state.goodsInfo.title,
          imgUrl:this.$store.state.goodsInfo.imgUrl,
          price:this.$store.state.goodsInfo.price,
          oldPrice:this.$store.state.goodsInfo.oldPrice,
          address:this.$store.state.goodsInfo.address,
          active:this.$store.state.goodsInfo.active,
          goodSpec:this.$store.state.goodsInfo.goodSpec,
          periods:this.$store.state.goodsInfo.periods,
          bannerImg:this.$store.state.goodsInfo.bannerImg,
          detaliImg:this.$store.state.goodsInfo.detaliImg,
          goodsCode:this.$store.state.goodsInfo.goodsCode,
          goodsPrice:(this.$store.state.goodsInfo.price/this.$store.state.goodsInfo.periods).toFixed(2),
          color:'',
          size:'',
          textColor:'',
          textSize:''
        },
        selspce:{
//          goodcolor:'',
//          goodsize:''
        },
        goodsNum:1,
        popupFlag:false,
        actionInfo:false,
        goodsInfos:false,
        allLoaded:false,
        detaliflag:false,
        loadeI:true,
        loadmore:'',
        goodJS:true,
        goodGE:false,
        goodSD:false,
        hrefFlag:false
      }
    },
    mounted(){
      this.$store.state.goodsInfo.color="";
      this.$store.state.goodsInfo.size="";
    },
    methods:{
      handleClick:function(){
        this.$router.go(-1);
      },
      selSpec:function(index,title,name,event){
        this.hrefFlag = true;
        var parentData = event.target.getAttribute('data');
        if(parentData == 'spec'+index){
            var spans = event.target.parentNode.getElementsByTagName('span');
            for(var i=0;i<spans.length;i++){
              spans[i].setAttribute('class','size-list-box box-state3')
            }
          event.target.setAttribute('class','box-state1 size-list-box');
        }

        this.$store.state.goodsInfo[name] =event.target.innerHTML;

        this.goodsObj.color = this.$store.state.goodsInfo.color;
        this.goodsObj.size = this.$store.state.goodsInfo.size;

        console.log(this.$store.state.goodsInfo);
      },
      Goodsaction:function(){
        this.popupFlag = true;
        this.actionInfo = true;
        this.goodsInfos = false;
      },
      goodsInfo:function(){
        this.popupFlag = true;
        this.actionInfo = false;
        this.goodsInfos = true;
      },
      popclose:function(){
        this.popupFlag = false;
        this.actionInfo = false;
        this.goodsInfos = false;
      },
      loadBottom:function(id){
        this.loadeI = false;
        this.detaliflag = true;
        this.allLoaded = true;
        this.$refs.loadmore.onBottomLoaded(id);
      },
      goodsJS:function(){
        if(this.allLoaded){
          this.goodJS=true;
          this.goodGE=false;
          this.goodSD=false;
        }
      },
      goodsGE:function(){
        if(this.allLoaded){
          this.goodJS=false;
          this.goodGE=true;
          this.goodSD=false;
        }
      },
      goodsSD:function(){
        if(this.allLoaded){
          this.goodJS=false;
          this.goodGE=false;
          this.goodSD=true;
        }
      },
      jiaNum:function(){
        this.goodsNum++;
        this.$store.state.goodsInfo.goodsNum=this.goodsNum;
        this.goodsObj.goodsPrice = (this.goodsObj.price/this.goodsObj.periods*this.goodsNum).toFixed(2);
        this.$store.state.goodsInfo.goodsprice = (this.goodsObj.price*this.goodsNum).toFixed(2);
      },
      jianNum:function(){
        if(this.goodsNum<=1){
          this.goodsNum = 1;
          this.$store.state.goodsInfo.goodsNum=this.goodsNum;
        }else {
          this.goodsNum--;
          this.$store.state.goodsInfo.goodsNum=this.goodsNum;
        }
        this.goodsObj.goodsPrice = (this.goodsObj.price/this.goodsObj.periods*this.goodsNum).toFixed(2);
        this.$store.state.goodsInfo.goodsprice = (this.goodsObj.price*this.goodsNum).toFixed(2);
      },
      hrefConfirmOrder:function(){
        if(this.hrefFlag){
          this.$store.state.goodsInfo.goodsNum=this.goodsNum;
          this.goodsObj.goodsPrice = (this.goodsObj.price/this.goodsObj.periods*this.goodsNum).toFixed(2);
          this.$store.state.goodsInfo.goodsprice = (this.goodsObj.price*this.goodsNum).toFixed(2);
          this.$router.push({name : "ConfirmOrder"});
//          console.log(this.$store.state.goodsInfo)
        }else {
          alert('请选择规格');
        }

      }
    },
    filters:{
      tofixed:function(value){
        return value.toFixed(2);
      }
    }
  }
</script>
