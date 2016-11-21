<style lang="less" rel="stylesheet/less"  scoped>
  @import "../less/common.less";

  .header{
    background-color: #f9f9f9; border-bottom: .02666rem solid #d8d8d8;
  }

  .content{
    background: #f0f0f0; bottom: 0;
  .order-nav{
    padding: .26666rem 6.9% .21rem; .font(.34666rem); color: #666; overflow: hidden; background-color: #fff;
  .order-nav-list{
  .pull-left; .text-center; margin-right: 18%;padding-bottom:0.05666rem;
  &:last-child{
     margin-right: 0;
   };
  &.nav-list-active{
    color: #333!important;
    border-bottom: 0.05333rem solid #ea445a;
   }
  }
  }
  }
  .order-item{
    width: 100%;
  .order-item-list{
    background-color: #fff; margin-top: .2666rem; padding: 0 .34666rem; .font(.34666rem);
  .order-list-top{
    border-bottom: 1px solid #f1f1f1; line-height: 1.17333rem;
  .order-top-left{
    color: #333;
  }
  .order-top-right{
    color: #ea445a; .pull-right;
  }
  }
  .order-list-info{
    border-bottom: 1px solid #f1f1f1; padding: .4rem 0; .pull-flex;
  .order-info-pho{
    width: 2.37333rem; height: 2.37333rem; border: 1px solid #f1f1f1;
  }
  .order-info-box{
  .flex; padding: .13333rem .266666rem 0;
  .order-info-para{
    color: #333; line-height: .5rem; height: .98666rem;  overflow:hidden; text-overflow:ellipsis;
  }
  .order-info-txt{
  .font(.32rem); color: #999; margin: .6rem .6rem 0 0; display: inline-block;
  }
  }
  }
  .order-list-top{
  .order-top-left1{
    color: #666;
  }
  .order-top-right1{
    color: #333; .pull-right;
  }
  }
  }
  }
</style>
<template>
<div class="container">
    <!--<div class="header">-->
        <!--<span class="header-left"></span>-->
        <!--我的订单-->
    <!--</div>-->
    <div class="content">
        <ul class="order-nav">
            <li class="order-nav-list nav-list-active" @click="orderTab(0,$event)">全部</li>
            <li class="order-nav-list" @click="orderTab(1,$event)">待付款</li>
            <li class="order-nav-list" @click="orderTab(2,$event)">待发货</li>
            <li class="order-nav-list" @click="orderTab(3,$event)">待收货</li>
        </ul>
        <ul class="order-item">
            <li class="order-item-list" v-for="li in orderArr" >
                <div class="order-list-top">
                    <span class="order-top-left">闪购</span>
                    <span class="order-top-right">待付款</span>
                </div>
                <div class="order-list-info" @click="orderDetali(li.orderID)">
                    <img :src="li.imgUrl" alt="" class="order-info-pho">
                    <div class="order-info-box">
                        <p class="order-info-para">
                            {{li.name}}
                        </p>
                        <span class="order-info-txt">数量：{{li.goodsNum}}</span><span class="order-info-txt">颜色：{{li.color}}</span>
                    </div>
                </div>
                <div class="order-list-top">
                    <span class="order-top-left1">共<span class="order-top-num">{{li.goodsNum}}</span>件商品</span>
                    <span class="order-top-right1">实付款：<span class="order-top-num">￥{{li.orderPrice}}</span></span>
                </div>
                <div class="order-list-btn">
                    <button class="order-btn order-btn1" @click="delOrder(li.orderID)">删除订单</button><button class="order-btn order-btn2" >付款</button>
                </div>
            </li>
            <div v-show="orderFlag">{{orderTips}}</div>
        </ul>
    </div>
</div>
</template>

<script>
  export default{
    data:function(){
      return{
        orderArr:[],
        orderList:this.$store.state.orders,
        orderFlag:false,
        orderTips:''
      }
    },
    mounted(){
      for(var s=0;s<this.orderList.length;s++){
        this.orderArr.push(this.orderList[s]);
      }
    },
    methods:{
      delOrder:function(id){
        for(var i=0;i<this.orderList.length;i++){
            if(this.orderList[i].orderID == id){
              this.orderArr = this.$store.state.orders.splice(i,1);
            }
        }
      },
      orderDetali:function(id){
        this.$router.push({name : "orderDetail1",query: {orderid:id}});
      },
      orderTab:function(id,event){
          var _this = this;
          _this.orderArr.length = 0;
          var ul = document.getElementsByClassName('order-nav')[0];
          var lis = ul.getElementsByTagName('li');
          for(var i=0;i<lis.length;i++){
            lis[i].setAttribute('class','order-nav-list')
          }
         event.target.setAttribute('class','order-nav-list nav-list-active');
         if(this.$store.state.orders.length<=0){
           this.orderFlag = true;
//           this.orderTips = '暂无数据'
         }else {
           if(id == 0){
              for(var s=0;s<_this.orderList.length;s++){
                _this.orderArr.push(_this.orderList[s]);
              }
           }else {
             for(var j=0;j<_this.orderList.length;j++){
               if(_this.orderList[j].orderState == id){
                 _this.orderArr.push(_this.orderList[j]);
                 _this.orderFlag = false;
               }else {
                 _this.orderArr.push();
               }
             }
           }
         }
      }
    }
  }
</script>
