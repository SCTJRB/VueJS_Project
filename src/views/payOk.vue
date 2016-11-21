<!--<!DOCTYPE html>-->
<!--<html lang="en" style="background: #f0f0f0">-->
<!--<head>-->
    <!--<meta charset="UTF-8">-->
    <!--<title>支付成功</title>-->
    <!--<meta charset="UTF-8"><link rel="stylesheet" href="../css/common.css">-->
    <!--<script src="../js/flexible.js"></script>-->
<!--</head>-->
<style scoped>
  .payOkDiv{
    text-align: center;
    margin-top: .266rem;
    padding: .4rem 0;
    background: #fff;
  }
  .payOkDiv img{
    width: 1.6rem;
    height: 1.6rem;
  }
  .payOkDiv p{
    font-family:微软雅黑;
    color: #666;
    font-size: .32rem;
    margin-top: .266rem;
  }
  .payBottoms{
    margin-top: .64rem;
  }
  .payBottoms button{
    border: 0;
    display: inline-block;
    border: 1px solid #ea445a;
    height: .906rem;
    line-height: .906rem;
    font-size: .346rem;
    font-family: 微软雅黑;
    background: #fff;
    color: #ea445a;
    border-radius: 4px;
    padding: 0 .933rem;
    margin: 0 .266rem;
  }
  .payBottoms button:first-child{

  }
  .payBottoms button:last-child{
    background: #ea445a;
    color: #fff;
  }

  .payTJ{
    margin-top: .266rem;
    background: #fff;
  }
  .payTJ p{
    text-align: center;
    color: #333333;
    font-size: .346rem;
    padding: .266rem 0;
    /*border: 1px solid #f1f1f1;*/
  }
  .payTJ ul{
    border-top: 1px solid #f1f1f1;
    white-space: nowrap;
    overflow-x: scroll;
    padding: 0 .32rem;
  }
  .payTJ ul li{
    display: inline-block;
    list-style: none;
    text-align: center;
    width: 3.73rem;
    overflow: hidden;
    font-family: 微软雅黑;
  }
  .payTJ ul li img{
    width: 3.73rem;
  }
  .payTJ ul li .payPrice{
    color: #ea445a;
    font-size: .373rem;
  }
</style>
<template>
<div>
    <div class="payOkDiv">
        <img src="../img/payOK.png">
        <p>支付成功</p>

        <div class="payBottoms">
            <button @click="hrefOrder">查看订单</button><button @click="hrefHome">继续购物</button>
        </div>
    </div>
    <div class="payTJ">
      <p>为你推荐</p>
      <ul>
        <li>
          <img src="../img/hot-goods.jpg">
          <p>GUESS 盖尔斯夏季新款时尚单肩包 套</p>
          <p class="payPrice">￥1990</p>
        </li>
        <li>
          <img src="../img/hot-goods.jpg">
          <p>GUESS 盖尔斯夏季新款时尚单肩包 套</p>
          <p class="payPrice">￥1990</p>
        </li>
        <li>
          <img src="../img/hot-goods.jpg">
          <p>GUESS 盖尔斯夏季新款时尚单肩包 套</p>
          <p class="payPrice">￥1990</p>
        </li>
        <li>
          <img src="../img/hot-goods.jpg">
          <p>GUESS 盖尔斯夏季新款时尚单肩包 套</p>
          <p class="payPrice">￥1990</p>
        </li>
      </ul>
    </div>
</div>
</template>

<script>
  export default{
    mounted(){
      var ids = this.$store.state.goodsInfo.id++;
      this.$store.state.orders.push({
        orderID:ids,
        orderCode:'msxf0'+ids,
        name:this.$store.state.goodsInfo.title,
        imgUrl:this.$store.state.goodsInfo.imgUrl,
        goodsNum:this.$store.state.goodsInfo.goodsNum,
        color:this.$store.state.goodsInfo.color,
        size:this.$store.state.goodsInfo.size,
        orderPrice:this.$store.state.goodsInfo.orderPrice,
        goodsprice:this.$store.state.goodsInfo.goodsprice,
        invoice:this.$store.state.goodsInfo.invoice,
        invoiceTxt:this.$store.state.goodsInfo.invoiceTxt,
        orderState:1
      });

//      console.log(this.$store.state.orders)
    },
    methods:{
      hrefOrder:function(){
        this.$router.push({name : "myOrder"});
      },
      hrefHome:function(){
        this.$router.push({name : "home"});
      }
    }
  }
</script>
