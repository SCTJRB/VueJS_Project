<!--<!DOCTYPE html>-->
<!--<html lang="en" style="background: #f0f0f0;">-->
<!--<head>-->
    <!--<meta charset="UTF-8">-->
    <!--<meta charset="UTF-8"><link rel="stylesheet" href="../css/common.css">-->
    <!--<script src="../js/flexible.js"></script>-->
    <!--<title>收银台</title>-->
<!--</head>-->
<style scoped>
  .cashierDiv{
    font-family: 微软雅黑;
    position: absolute;
    top: 0;
    left: 0;
    right:0;
    bottom: 0;
    background: #f0f0f0;
  }
  .cashierDiv .cahierHead{
    border-top: 1px solid #f1f1f1;
    color: #666666;
    font-size: .346rem;
    padding: .4rem .346rem;
    background: #fff;
  }
  .cashierRight{float: right}
  .cashierCenter{
    margin-top: .2666rem;
    padding: 0 .346rem;
    background: #fff;
  }
  .cashierCenter .cashierDivOne img{
    border: 1px solid #f1f1f1!important;
    width: 1.04rem;
    height: 1.04rem;
  }
  .cashierDivOne{
    position: relative;
    padding: .346rem 0;
    border-bottom:1px solid #f1f1f1 ;
    overflow: hidden;
  }
  .cashierDivOne .cashierTxt{
    position: absolute;
    left: 1.3066rem;
    top: .346rem;
    width: 100%;
    height: 1.04rem;
  }
  .cashierDivOne .cashierTxt p:first-child{
    position: absolute;
    top: -10px;
    width: 100%;
  }
  .cashierDivOne .cashierTxt p:last-child{
    position: absolute;
    bottom: -10px;
  }
  .cashierDivOne .cashierTxt p b{
    color: #333;
    font-size: .373rem;
  }
  .cashierDivOne .cashierTxt p i{
    color: #999;
    font-size: .32rem;
    margin-left: .2rem;
  }
  .cashierDivOne .cashierTxt p .cashierED{
    color: #999;
    font-size: .32rem;
  }
  .cashierDivOne .cashierTxt p .cashierYE{
    color: #ea445a;
    font-size: .426rem;
  }

  .cashierCenter .cashierDivTwo{
    padding: .4rem 0;
    border-bottom: 1px solid #f1f1f1;
  }
  .cashierCenter .cashierDivTwo{
    color: #666;
    font-size: .346rem;
  }
  .cashierCenter .cashierDivTwo i{
    color: #ea445a;
    display: inline-block;
    border:1px solid #ea445a;
    font-style: normal;
    padding: .0666rem .2133rem;
    border-radius: .1rem;
    margin-left: .2rem;
  }
  .cashierDivTwo p .r_right{
    float: right;
    color: #999;
    display: inline-block;
    padding-right: .34666rem;
    background: url("../img/rightJt.png")no-repeat right center;
    background-size: .17333rem .29333rem;
    font-size: .346rem;
  }
  .cashierAction{
    padding: .4rem 0;
    font-family: 微软雅黑;
  }
  .cashierAction ul{
    white-space: nowrap;
    margin-top: .2666rem;
    overflow-x: scroll;
    padding-bottom: .05rem;
  }
  .cashierAction ul li{
    box-sizing: border-box;
    display: inline-block;
    position: relative;
    list-style: none;
    border: 1px solid #666;
    text-align: center;
    width: 4rem;
    padding: .4rem 0;
    color: #666;
    border-radius: .1rem;
  }
  .cashierAction ul li b{
    font-size: .3466rem;
  }
  .cashierAction ul li p{
    font-size: .32rem;
  }

  .cashierAction .cashierActive{
    border: 1px solid #ea445a;
    color: #ea445a;
  }
  .cashierAction .cashierActive :after{
    display: inline-block;
    position: absolute;
    right: .1rem;
    top: .1rem;
    width: .4266rem;
    height: .32rem;
    content: "";
    background: url("../img/selectPic.png") no-repeat;
    background-size: .4266rem .32rem;
  }
  .acshierBtn{
    padding: .4rem .346rem;
    font-family: 微软雅黑;
  }
  .acshierBtn button{
    border: 0;
    background: #ea445a;
    font-size: .346rem;
    color: #fff;
    width: 100%;
    padding: .4266rem 0;
    border-radius: .1rem;
  }
</style>
<template>
  <div class="cashierDiv">
      <p class="cahierHead">
        <span>订单金额</span>
        <span class="cashierRight">￥{{orderPrice}}</span>
      </p>

      <div class="cashierCenter">
          <div class="cashierDivOne">
            <img src="../img/msxflogo.png">
            <div class="cashierTxt">
              <p><b>闪购分期</b><i>马上消费金融旗下</i></p>
              <p><span class="cashierED">可用额度：</span><span class="cashierYE">8933.0元</span></p>
            </div>
          </div>
          <div class="cashierDivTwo">
              <p>优惠方式<i>3种优惠</i><span class="r_right">请选择分期优惠方式</span></p>
          </div>
          <div class="cashierAction">
              <span>分期方式</span>
              <ul>
                <li class="cashierActive">
                  <b>30天免息</b>
                  <p>含服务费0元/期</p>
                  <p>费率0%/月</p>
                </li>
                <li>
                  <b>30天免息</b>
                  <p>含服务费0元/期</p>
                  <p>费率0%/月</p>
                </li>
                <li>
                  <b>30天免息</b>
                  <p>含服务费0元/期</p>
                  <p>费率0%/月</p>
                </li>
              </ul>
          </div>
      </div>

      <div class="acshierBtn">
          <button @click="payorder">分期付{{orderPrice}}元</button>
      </div>
  </div>
</template>

<script>
  export default{
    data:function(){
      return{
        orderPrice:this.$store.state.goodsInfo.orderPrice
      }
    },
    mounted(){
      var ul = document.getElementsByClassName('cashierAction')[0];
      var lis  = ul.getElementsByTagName('li');
      for(var i=0;i<lis.length;i++){
        lis[i].onclick = function(){
          for(var j=0;j<lis.length;j++){
             lis[j].setAttribute('class','')
          }
          this.setAttribute('class','cashierActive');
        }
      }
    },
    methods:{
      payorder:function(){
//        console.log(this.$store.state.goodsInfo.title)
//        console.log(this.$store.state.goodsInfo.imgUrl)
//        console.log(this.$store.state.goodsInfo.goodsNum)
//        console.log(this.$store.state.goodsInfo.color)
//        console.log(this.$store.state.goodsInfo.size)
//        console.log(this.$store.state.goodsInfo.orderPrice)


//        console.log(this.$store.state.orders)

        this.$router.push({name : "payOK"});
      }
    }
  }
</script>

