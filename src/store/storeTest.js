
  import Vue from 'vue'
  import vuex from 'vuex'
  Vue.use(vuex);
  export default new vuex.Store({
    state:{
      goodsInfo:{},
      orders:[
        //{orderID:'123',
        //  orderCode:'1223212',
        //  name:'3333',
        //  imgUrl:'qeqweqwe',
        //  goodsNum:12,
        //  color:'123213',
        //  size:'12',
        //  orderPrice:1234,
        //  goodsprice:2324,
        //  invoice:'21312',
        //  invoiceTxt:'123123',
        //  orderState:2
        //},
        //{orderID:'423456',
        //  orderCode:'1223423212',
        //  name:'3333',
        //  imgUrl:'qeqweqwe',
        //  goodsNum:34,
        //  color:'234',
        //  size:'12',
        //  orderPrice:657,
        //  goodsprice:879,
        //  invoice:'234',
        //  invoiceTxt:'234',
        //  orderState:2
        //},
        //{orderID:'423456',
        //  orderCode:'1223423212',
        //  name:'11111',
        //  imgUrl:'qeqweqwe',
        //  goodsNum:34,
        //  color:'234',
        //  size:'12',
        //  orderPrice:657,
        //  goodsprice:879,
        //  invoice:'234',
        //  invoiceTxt:'234',
        //  orderState:1
        //},
        //{orderID:'423456',
        //  orderCode:'1223423212',
        //  name:'33333',
        //  imgUrl:'qeqweqwe',
        //  goodsNum:34,
        //  color:'234',
        //  size:'12',
        //  orderPrice:657,
        //  goodsprice:879,
        //  invoice:'234',
        //  invoiceTxt:'234',
        //  orderState:3
        //}
      ],
      ids:1
    },
    mutations:{
      jia:function(state,n){
        state.count+=n;
      },
      jian:function(state,n){
        state.count-=n;
      },
      pusha:function(state,n){
        state.shoppings.push(n)
      }
    },
    actions:{
      increment:function(context,n){
          context.commit('pusha',n)
      }
    }
  });



