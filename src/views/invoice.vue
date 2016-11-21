<!--<!DOCTYPE html>-->
<!--<html lang="en"  style="background: #f0f0f0">-->
<!--<head>-->
    <!--<meta charset="UTF-8">-->
    <!--<title>发票</title>-->
    <!--<meta charset="UTF-8"><link rel="stylesheet" href="../css/common.css">-->
    <!--<script src="../js/flexible.js"></script>-->
<!--</head>-->
<style scoped>
  .shipMethodDiv{
    font-family: 微软雅黑;
    margin-top: .2666rem;
  }
  .shipMethodDiv ul{
    padding: 0 .346rem;
    background: #fff;
  }
  .shipMethodDiv ul li{

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

  .shipMethodDiv input{
    width: 100%;
    border: 0;
    margin-top: .2666rem;
    color: #999999;
    font-size: .3466rem;
    padding: .4rem .3466rem;
  }
</style>
<template>
    <div class="shipMethodDiv">
      <ul id="MethodUl">
        <li class="selectActive" @click="addClass" data="false">不开发票</li>
        <li @click="addClass" data="false">个人</li>
        <li @click="addClass" data="true">公司</li>
      </ul>

      <input placeholder="请输入公司发票抬头" id="inputTxt">

      <div class="shipButton">
        <button @click="hrefConfirmOrder">确定</button>
      </div>
    </div>
</template>

<script>
  export default{
    data:function(){
      return{
        invoice:'',
        flag:false
      }
    },
    methods:{
      addClass:function(event){
        var isclass = event.target.getAttribute('class');
        var ul = document.getElementById('MethodUl');
        var lis = ul.getElementsByTagName('li');
        var data = event.target.getAttribute('data');

        if(isclass!=null){
          event.target.removeAttribute('class');
        }else {
          for(var i=0;i<lis.length;i++){
            lis[i].removeAttribute('class');
          }
          event.target.setAttribute('class','selectActive');

          if(data=='true'){
             this.flag = true;
          }else {
            this.flag = false;
            document.getElementById('inputTxt').value=""
          }
          this.invoice = event.target.innerHTML;
        }
      },
      hrefConfirmOrder:function(){
        var txt = document.getElementById('inputTxt').value;
        if(this.flag){
          this.$store.state.goodsInfo.invoiceTxt = txt;
          this.$store.state.goodsInfo.invoice = this.invoice;
        }else {
          this.$store.state.goodsInfo.invoice = this.invoice;
        }
        this.$router.push({name : "ConfirmOrder"});
      }
    }
  }
</script>

