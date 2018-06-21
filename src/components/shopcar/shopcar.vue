<template>
  <div class="shopcarbox" ref="shopcarbox" >
    <div class="shopcarfix" @click="openShopCar(open)">
      <p>购</p>
      <p>物</p>
      <p>车</p>
      <p class="num">{{shopCarNum}}</p>
    </div>
    <div class="shopCarRight" ref="shopCarRight" >
      <h4>我的购物车</h4>
      <div class="shopCarList">
        <dl class="shop" v-for="(item,index) in shopCarList">
          <dt>
            <img :src="item.pic">
          </dt>
          <dd>
            <div class="addnum"><span @click="reduce(item.id,index)"><b>-</b></span><span><b>{{item.num}}</b></span><span @click="addNum(item.id,index)"><b>+</b></span></div>
            <h3>{{item.title}}</h3>
            <div class="priceRed">￥{{item.sum}}</div>
          </dd>
        </dl>
      </div>
      <div class="shopCarPrice">
        <p>
          <span>共{{shopCarList.length}}件商品</span>
          <span class="right">共计:￥{{shopCarPrice}}.00</span>
        </p>
        <p class="button">
          去购物车结算
        </p>
      </div>
    </div>
  </div>
</template>
<script>
  import {setCookie,getCookie} from '~config/cookie.js'
  export default {
    data () {
      return {
        open: false
      }
    },
    mounted(){
      this.product()
      this.getCookieId()
      this.getshopCar()
    },
    computed: {
      shopCarNum(){
       return this.$store.getters.shopCarList.sumNum
      },
      shopCarList(){
       return this.$store.getters.shopCarList.list
      },
      shopCarPrice(){
        return this.$store.getters.shopCarList.allSum
      }
    },
    mounted(){
      this.$refs.shopcarbox.style.width="35px"
      this.$refs.shopCarRight.style.visibility="hidden"
    },
    methods: {
      openShopCar(open){
        if(open== false)
        {
          this.$refs.shopCarRight.style.visibility="visible"
          this.$refs.shopcarbox.style.width="314px"
          this.open = true
        }else{
          this.$refs.shopCarRight.style.visibility="visible"
          this.$refs.shopcarbox.style.width="35px"
          this.open = false
        }
      },
      reduce(num,index){
        let cookieId = getCookie('userId')
        this.$store.dispatch('FETCH_REDUCENUM',{
          id:num,
          cookieId: cookieId,
          index: index
        })
      },
      addNum(num,index){
        let cookieId = getCookie('userId')
        this.$store.dispatch('FETCH_ADDNUM',{
          id:num,
          cookieId: cookieId,
          index: index
        })
      },
      getshopCar(){
        let cookieId = getCookie('userId')
        this.$store.dispatch('GET_SHOPCAR',{
          cookieId: cookieId
        })
      },
      getCookieId(){
        if(!getCookie('userId')){
          setCookie('userId',10,10)
        }
      },
      product(){
        let id = this.$route.params.id
        this.$store.dispatch('FETCH_PRODUCT_SINGLE',{
          id: id
        })
      }
    }
  }
</script>
