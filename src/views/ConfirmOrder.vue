<!--<!DOCTYPE html>-->
<!--<html lang="en" style="background: #f0f0f0">-->
<!--<head>-->
    <!--<meta charset="UTF-8">-->
    <!--<meta charset="UTF-8"><link rel="stylesheet" href="../css/common.css">-->
    <!--<script src="../js/flexible.js"></script>-->
    <!--<title>确认订单</title>-->
<!--</head>-->
<style>
  .confirmDiv{
    /*padding: 0 .34666rem;*/
    font-family: 微软雅黑;
    background: #f0f0f0;
    position: absolute;
    top: 0;
    left: 0;
    right:0;
    bottom: 0;
  }
  .confirmDiv >p{
    padding: .4rem 0;
    background: #fff;

    font-size: .34666rem;
    border-bottom: 1px solid #f1f1f1;
  }
  .confirmDiv p .r_left{
    margin-left: .34666rem;
    color: #333;
    display: inline-block;
    padding-left: .5rem;
    background: url("../img/car.png")no-repeat left center;
    background-size: .34666rem .32rem;
  }
  .confirmDiv p .r_right{
    float: right;
    margin-right: .35rem;
    color: #333;
    display: inline-block;
    padding-right: .34666rem;
    background: url("../img/rightJt.png")no-repeat right center;
    background-size: .17333rem .29333rem;
  }
  .confirmDiv .addDiv{
    padding: .4rem 0;
    text-align: center;
    background: url("../img/rightJt.png") no-repeat 96.5% center,#fff;
    background-size: .17333rem .29333rem;
  }
  .confirmDiv  .addDiv img{
    width: 1.16rem;
    height: 1.2rem;
  }
  .confirmDiv  .addDiv p{
    width: 100%;
    text-align: center;
    font-size: .32rem;
    color: #666666;
    padding-top: .1rem;
  }

  .confirmGoods{
    position: relative;
    background: #fff;
    padding: 0 .346rem;
    margin-top: .2666rem;
  }
  .confirmGoods img{
    border: 1px solid #f1f1f1;
    box-sizing: border-box;
    width: 2.4rem;
    height: 2.4rem;
  }
  .confirmContent{
    padding: .4rem 0;
    border-bottom: 1px solid #f1f1f1
  }
  .confirmGoods .confirmText{
    position: absolute;
    width: 70%;
    top: .4rem;
    left: 2.746rem;
    padding-left: .266rem;
    padding-right: .346rem;
    font-size: .346rem;
    height: 2.4rem;
  }
  .confirmGoods .confirmText p:first-child{
    color: #333;
  }
  .confirmGoods .confirmText .confirmColor{
    color: #999;
    padding: .266rem 0;
  }
  .confirmGoods .confirmText p:last-child{
    position: absolute;
    bottom: 0;
  }
  .confirmGoods .confirmText i{
    font-style: normal;
    color: #ea445a;
    display: inline-block;
    padding:.06rem .16rem;
    border: 1px solid #ea445a;
    font-size: .293rem;
    border-radius: 10px;
    margin-right: .1rem;
  }
  .confirmNum{
    padding: .266rem 0;
    font-size: .346rem;
    color: #666666;
    line-height: .8266rem;
  }
  .confirmNum div{
    display: inline-block;
    /*margin-left: 60%;*/
    float: right;
    font-style: normal;
  }
  .confirmNum div i{
    font-style: normal;
    font-size: .4rem;
    display: inline-block;
    width: .8266rem;
    height: .8266rem;
    border: 1px solid #b2b2b2;
    text-align: center;
    line-height: .8266rem;
    vertical-align: middle;
    border-radius: .1rem;
    color: #666666;
  }
  .confirmNumActive{
    border: 1px solid #333333 !important;
  }
  .confirmFp{margin-top: .266rem}
  .r_left2{margin-left: .34666rem;color: #666666}
  .r_right2{
    float: right;
    color: #333;
    display: inline-block;
    padding-right: .34666rem;
  }
  .confirmInfo{
    background: #fff;
    margin-top: .266rem;
    font-size: .3466rem;
    padding: .4rem 0;
  }
  .confirmInfo p{
    line-height: .65rem;
  }
  .confirmBottom{
    background: #fff;
    position: fixed;
    bottom: 0;
    width: 100%;
  }
  .confirmBottom p{
    font-family: 微软雅黑;
    display: inline-block;
    width: 50%;
    height: 1.333rem;
    line-height: 1.333rem;
    text-align: center;
    border: none;
    font-size: .35rem;
  }
  .confirmBottom p:first-child{
    background: #fff;
    color: #666;
  }
  .confirmBottom p:last-child{
    background: #ea445a;
    color: #fff;
    font-size: .346rem;
  }
  .confirmBottom p:first-child span{
    color: #ea445a;
    display: inline-block;
    padding: 0 .15rem;
  }
  .confirmBottom p:first-child span i{
    font-style: normal;
    font-size: .45rem;
  }
</style>
<template>
    <div class="confirmDiv">
        <p @click="shippingMethod">
          <span class="r_left">配送方式</span>
          <span class="r_right">{{shippingMethodTxt}}</span>
        </p>
        <div class="addDiv">
            <img src="../img/addPic.png">
            <p>你还没有收货地址，点击这里添加哦！</p>
        </div>

        <div class="confirmGoods">
            <div class="confirmContent">
              <img :src="confirmOrder.imgUrl">
              <div class="confirmText">
                <p>{{confirmOrder.title}}</p>
                <p class="confirmColor">{{confirmOrder.color}} {{confirmOrder.size}}</p>
                <p><i v-for="i in confirmOrder.active">{{i.title}}</i></p>
              </div>
            </div>
            <div class="confirmNum">
              <span>购买数量</span>
              <div>
                <i @click="jian">-</i>
                <span>{{goodsNum}}</span>
                <i class="confirmNumActive" @click="jia">+</i>
              </div>
              <br style="clear: both">
            </div>
        </div>

        <p class="confirmFp" @click="invoice">
          <span class="r_left2">发票信息</span>
          <span class="r_right">{{invoicetxt}}</span>
        </p>

        <div class="confirmInfo">
          <p>
            <span class="r_left2">总金额</span>
            <span class="r_right2">￥{{confirmOrder.countprice}}</span>
          </p>
          <p>
            <span class="r_left2">运费</span>
            <span class="r_right2">￥0</span>
          </p>
          <p>
            <span class="r_left2">优惠</span>
            <span class="r_right2">￥0</span>
          </p>
        </div>

        <div class="confirmBottom">
          <p>应付金额<span>￥<i>{{confirmOrder.goodsPrice}}</i></span></p><p @click="hrefCashier">提交订单</p>
        </div>
    </div>
</template>

<script>
  export default{
    data:function(){
      return{
        confirmOrder:{
          title:this.$store.state.goodsInfo.title,
          imgUrl:this.$store.state.goodsInfo.imgUrl,
          price:this.$store.state.goodsInfo.price,
          countprice:this.$store.state.goodsInfo.goodsprice,
          periods:this.$store.state.goodsInfo.periods,
          goodsPrice:(this.$store.state.goodsInfo.goodsprice/this.$store.state.goodsInfo.periods).toFixed(2),
          color:this.$store.state.goodsInfo.color,
          size:this.$store.state.goodsInfo.size,
          active:this.$store.state.goodsInfo.active
        },
        goodsNum:this.$store.state.goodsInfo.goodsNum,
        shippingMethodTxt:'请选择',
        invoicetxt:'不开发票'
      }
    },
    mounted(){
//      alert(this.$store.state.goodsInfo.goodsprice);
      if(this.$store.state.goodsInfo.shippingMethod==undefined){
        this.shippingMethodTxt = '请选择'
      }else {
        this.shippingMethodTxt = this.$store.state.goodsInfo.shippingMethod;
//        this.$store.state.goodsInfo.shippingMethod = '';
      }

      if(this.$store.state.goodsInfo.invoice==undefined){
        this.invoicetxt = '不开发票'
      }else {
        this.invoicetxt = this.$store.state.goodsInfo.invoice;
//        this.$store.state.goodsInfo.invoice = '';
      }
//
    },
    methods:{
      shippingMethod:function (){
        this.$router.push({name : "shippingMethod"});
      },
      jia:function(){
        this.goodsNum++;
        this.$store.state.goodsInfo.goodsNum = this.goodsNum;
        this.confirmOrder.countprice = (this.confirmOrder.price*this.goodsNum).toFixed(2);
        this.$store.state.goodsInfo.goodsprice= this.confirmOrder.countprice;


        this.confirmOrder.goodsPrice = (this.$store.state.goodsInfo.price/this.$store.state.goodsInfo.periods*this.goodsNum).toFixed(2);
      },
      jian:function(){
        if(this.goodsNum<=1){
          this.goodsNum = 1;
        }else {
          this.goodsNum--;
        }

        this.$store.state.goodsInfo.goodsNum = this.goodsNum;
        this.confirmOrder.countprice = (this.confirmOrder.price*this.goodsNum).toFixed(2);
        this.$store.state.goodsInfo.goodsprice= this.confirmOrder.countprice;
        this.confirmOrder.goodsPrice = (this.$store.state.goodsInfo.price/this.$store.state.goodsInfo.periods*this.goodsNum).toFixed(2)
      },
      invoice:function(){
        this.$router.push({name : "invoice"});
      },
      hrefCashier:function(){
        this.$store.state.goodsInfo.orderPrice = this.confirmOrder.goodsPrice;
        this.$store.state.goodsInfo.goodsNum = this.goodsNum;

//        alert(this.$store.state.goodsInfo.orderPrice);
        this.$router.push({name : "Cashier"});
      }
    }
  }
</script>
