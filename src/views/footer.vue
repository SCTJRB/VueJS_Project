
<template>
  <div>
    <footer class="home-footer">
      <router-link to="/" class="home-footer-link" tag="a" exact>
      <span class="home-footer-icon home-footer-icon1"></span>
      首页
      </router-link>
      <router-link to="/classFiy" class="home-footer-link"  tag="a">
        <span class="home-footer-icon home-footer-icon2"></span>
          品类
      </router-link>
     <router-link to="usercenter" class="home-footer-link"  tag="a" >
        <span class="home-footer-icon home-footer-icon3"></span>
      我
     </router-link>
    </footer>
  </div>
</template>

<style lang="less" rel="stylesheet/less"  scoped>
  @import "../less/common.less";
  .home-footer{
    background: #fff;
    width: 100%; height: 1.2rem; .pull-flex; .text-center; .font(.346666rem); .pos-abs; left: 0;right: 0; bottom: 0;;
    border-top: 1px solid #f1f1f1;
    padding-bottom: .2rem;
    color: #333;
  .home-footer-link{
    text-decoration: none;
    color:#333;
  .flex;
  .home-footer-icon{
    width: .5333rem; height: .5333rem; display: block; margin: .21333rem auto .1333rem;
  &.home-footer-icon1{
     background: url(../img/home-footer-icon1.png) no-repeat; background-size: contain;
   }
  &.home-footer-icon2{
     background: url(../img/home-footer-icon2.png) no-repeat; background-size: contain;
   }
  &.home-footer-icon3{
     background: url(../img/home-footer-icon3.png) no-repeat; background-size: contain;
   }
  }
  &.router-link-active{
     color: #ea445a;
  .home-footer-icon{
    width: .5333rem; height: .5333rem; display: block; margin: .21333rem auto .1333rem;
  &.home-footer-icon1{
     background: url(../img/home-icon1-active.png) no-repeat; background-size: contain; color: #ea445a;
   }
  &.home-footer-icon2{
     background: url(../img/home-icon2-active.png) no-repeat; background-size: contain;
   }
  &.home-footer-icon3{
     background: url(../img/home-icon3-active.png) no-repeat; background-size: contain;
   }
  }
  }
  }
  }
</style>

