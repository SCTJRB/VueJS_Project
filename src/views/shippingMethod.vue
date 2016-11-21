<!--<!DOCTYPE html>-->
<!--<html lang="en" style="background: #f0f0f0">-->
<!--<head>-->
    <!--<meta charset="UTF-8">-->
    <!--<title>配送方式</title>-->
    <!--<meta charset="UTF-8"><link rel="stylesheet" href="../css/common.css">-->
    <!--<script src="../js/flexible.js"></script>-->
<!--</head>-->
<style>
  .shipMethodDiv{
    /*padding: 0 .346rem;*/
    margin-top: .2666rem;
  }
  .shipMethodDiv ul{
    padding: 0 .346rem;
    background: #fff;
  }
  .shipMethodDiv ul li{
    font-family: 微软雅黑;
    list-style: none;
    padding: .4rem 0;
    border-bottom: 1px solid #f1f1f1;
    font-size: .32rem;
    color: #666;
  }
  .shipMethodDiv ul .selectActive {
    background: url("../img/selectPic.png") no-repeat right center;
    background-size: .4266rem .32rem;
  }

  .shipButton{
    padding: .4rem .346rem;
  }
  .shipButton button{
    border: 0;
    display: inline-block;
    width: 100%;
    background: #ea445a;
    color: #fff;
    font-size: .3466rem;
    font-family: 微软雅黑;
    padding: .426rem 0;
  }
</style>
<template>
    <div class="shipMethodDiv">
      <ul id="MethodUl">
        <li class="selectActive" @click="addClass">快递</li>
        <li @click="addClass">邮政</li>
        <li @click="addClass">平邮</li>
      </ul>

      <div class="shipButton">
        <button @click="hrefConfirmOrder">确定</button>
      </div>
    </div>
</template>
<script>
  export default{
    methods:{
      data:function(){
        return{
          methodTxt:''
        }
      },
      addClass:function(event){
        var isclass = event.target.getAttribute('class');
        var ul = document.getElementById('MethodUl');
        var lis = ul.getElementsByTagName('li');
        if(isclass!=null){
          event.target.removeAttribute('class');
        }else {
          for(var i=0;i<lis.length;i++){
            lis[i].removeAttribute('class');
          }
          event.target.setAttribute('class','selectActive');
          this.methodTxt = event.target.innerHTML;
        }
      },
      hrefConfirmOrder:function(){
        this.$store.state.goodsInfo.shippingMethod = this.methodTxt;
        this.$router.push({name : "ConfirmOrder"});
      }
    }
  }
</script>
