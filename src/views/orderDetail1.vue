<style  lang="less" rel="stylesheet/less"  scoped>
  @import "../less/common.less";
  .header{
    background-color: #f9f9f9; border-bottom: .02666rem solid #d8d8d8;
  }
  .content {
    background: #f0f0f0;
  .order-detail{
    padding: 0 .34666rem; .font(.34666rem); background-color: #fff;
  .order-detail-1{
    line-height: 1.17333rem; border-bottom: 1px solid #f1f1f1;
  .order-detail-num{
    color: #333;
  }
  .order-detail-close{
    color: #666;.pull-right;
  &.close-active{
     color: #ea445a;
   }
  }
  }
  .order-detail-2{
    padding: .2666rem 0; border-bottom: 1px solid #f1f1f1;
  .order-detail-name{
    line-height: .6rem; color: #333;
  .order-detail-call{
  .font(.32rem); color: #999; margin-left: .5333rem;
  }
  }
  .order-detail-addr{
    line-height: .6rem; color: #666; .font(.32rem);
  }
  }
  .order-detail-3{
  .font(.32rem); line-height: 1.17333rem; border-bottom: 1px solid #f1f1f1;
  .order-3-left{
    color: #666;
  }
  .order-3-right{
  .pull-right;
  .order-3-firm{
    color: #999999;
  }
  .order-3-bill{
    color: #333;
  }
  }
  }
  .order-detail-4{
    border-top: 1px solid #f1f1f1; padding: .34666rem 0; overflow: hidden;
  .order-4-num{
    color: #666; margin-bottom: .1rem;
  .order-4-icon{
    width: .34666rem; height: .32rem; display: inline-block; background: url(../img/order-4-icon.png) no-repeat;
    background-size: contain;
  }
  }
  .order-4-status{
  .font(.32rem); color: #999; line-height: .5333rem; .pull-left;
  }
  .order-4-right{
    width: .17333rem; height: .29333rem; display: inline-block; background: url(../img/right-icon.png) no-repeat;
    background-size: contain; .pull-right; margin-top: .3rem;
  }
  }
  }
  .order-goods{
    padding: .4rem .34666rem; .font(.34666rem); background-color: #fff; margin-top: .2666rem; .pull-flex;
  .order-goods-pho{
    width: 2.37333rem; height: 2.37333rem; border: 1px solid #f1f1f1;
  }
  .order-goods-box{
  .flex; padding: .13333rem .266666rem 0;
  .order-goods-para{
    color: #333; line-height: .82666rem; overflow:hidden; text-overflow:ellipsis;
    white-space: nowrap;
  }
  .order-goods-txt{
  .font(.32rem); color: #999; margin:0 .6rem .5rem 0; display: inline-block;
  }
  .order-goods-pay{
    color: #333;
  }
  }
  }
  .order-menu{
    padding: .32rem .34666rem .5rem; background-color: #fff; margin-top: .2666rem; .font(.34666rem);
  .order-menu-list{
    line-height: .62rem;
  .order-menu-left{
    color: #666;
  }
  .order-menu-right{
  .pull-right; color: #333;
  }
  &.order-menu-last{
     margin-top: .14rem; padding-top: .14rem; border-top: 1px solid #f1f1f1;
  .order-menu-time{
  .text-right; .font(.32rem); color: #999;
  }
  }
  }
  }
  }
  .footer{
    height: 1.44rem; line-height: 0;
  }
  .popup-order{
    /*display: none;*/
    width: 100%; .pos-abs; top: 1rem; left: 0; right: 0; bottom: 0; background-color: rgba(0,0,0,.3);
  .popup-order-delete{
    width: 8.1334rem; background-color: #fff; margin: 3.9333rem auto 0; padding: 0 .4666rem .666rem;
  .font(.34666rem); .border-radius(.053rem); .text-center;
  .delete-title{
    line-height: 1.17333rem; color: #666; border-bottom: 1px solid #f1f1f1;
  }
  .delete-para{
    color: #333; margin: .666rem 0 .8rem;
  }
  .order-btn{
  .order-list-btn>.order-btn;
  &.order-btn1{
     margin-right: 1.12rem;
   }
  &.order-btn-none{
     margin-right: 0;
   }
  }
  }
  }

</style>
<template>
  <div>
<div class="container">
    <!--<div class="header">-->
        <!--<span class="header-left"></span>-->
        <!--订单详情-->
    <!--</div>-->
    <div class="content">
        <div class="order-detail">
            <div class="order-detail-1">
                <span class="order-detail-num">订单号：{{data.orderCode}}</span>
                <span class="order-detail-close close-active">
                  {{orderState}}
                </span>
            </div>
            <div class="order-detail-2">
                <p class="order-detail-name">李阿蛮<span class="order-detail-call">135****9210</span></p>
                <p class="order-detail-addr">四川省  成都市   高新区天府大道南段666号 大城际3栋2309号 如果显示不完请折行显示</p>
            </div>
            <div class="order-detail-3">
                <span class="order-3-left">发票</span>
                <div class="order-3-right">
                    <span class="order-3-firm">{{data.invoiceTxt}}</span>
                    <span class="order-3-bill">{{data.invoice}}</span>
                </div>
            </div>
            <div class="order-detail-4">
                <p class="order-4-num">
                    <span class="order-4-icon"></span>
                    快递单号：2831902 ，顺丰
                </p>
                <div class="order-4-status">
                    <span class="order-status-show">快递的最近状态显示</span><br/>
                    <span class="order-status-time">2016年11月17日13:31:20</span>
                </div>
                <span class="order-4-right"></span>
            </div>
        </div>
        <div class="order-goods">
            <img :src="data.imgUrl" alt="" class="order-goods-pho">
            <div class="order-goods-box">
                <p class="order-goods-para">
                    {{data.name}}
                </p>
                <span class="order-goods-txt">数量：{{data.goodsNum}}</span><span class="order-goods-txt">颜色：{{data.color}}</span>
                <div class="order-goods-pay">实付款：￥{{data.orderPrice}}</div>
            </div>
        </div>
        <ul class="order-menu">
            <li class="order-menu-list">
                <span class="order-menu-left">总金额</span>
                <span class="order-menu-right">￥{{data.goodsprice}}</span>
            </li>
            <li class="order-menu-list">
                <span class="order-menu-left">运费</span>
                <span class="order-menu-right">￥0</span>
            </li>
            <li class="order-menu-list">
                <span class="order-menu-left">优惠</span>
                <span class="order-menu-right">￥0</span>
            </li>
            <li class="order-menu-list order-menu-last">
                <span class="order-menu-left">实付款</span>
                <span class="order-menu-right">￥{{data.orderPrice}}</span>
                <p class="order-menu-time">下单时间：2016-11-17 11:23:43</p>
            </li>
        </ul>
    </div>
    <div class="footer">
        <div class="order-list-btn">
            <button class="order-btn order-btn1" @click="delOrder">删除订单</button><button class="order-btn order-btn2" @click="hrefGoodList">再次购买</button>
        </div>
    </div>
</div>
<div class="popup-order" v-show="popup">
    <div class="popup-order-delete">
        <h3 class="delete-title">删除订单</h3>
        <p class="delete-para">您是否确认删除该订单？</p>
        <button class="order-btn order-btn1" @click="cencelDel">取消</button><button class="order-btn order-btn1 order-btn-none" @click="confirmDel">删除</button>
    </div>
</div>
  </div>
</template>

<script>
  export default{
    data:function(){
      return{
        orderList:this.$store.state.orders,
        data:{},
        arrindex:null,
        popup:false
      }
    },
    computed:{
      orderState:function(){
        var state = '';
        if(this.data.orderState == 1){
          state = "待付款"
        }
        return state
      }
    },
    mounted(){
      var orderID = this.$route.query.orderid;
      for(var i=0;i<this.orderList.length;i++){
        if(this.orderList[i].orderID == orderID){
          this.data = this.orderList[i];
          this.arrindex = i;
        }
      }
    },
    methods:{
      delOrder:function(){
        this.popup = true;
      },
      cencelDel:function(){
        this.popup = false;
      },
      confirmDel:function(){
        this.$store.state.orders.splice(this.arrindex,1);
        this.popup = true;
        this.$router.push({name : "myOrder"});
      },
      hrefGoodList:function(){
        this.$router.push({name : "goodsList"});
      }
    }
  }
</script>
