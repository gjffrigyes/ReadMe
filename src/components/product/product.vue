<template>
  <div class="homebox">
    <h-banner :b-style="bannernum"></h-banner>
    <div class="product clearfix">
      <div class="productRight">
        <dl class="clearfix" v-for="item in productSingles">
          <dt>
            <img :src="item.pic">
          </dt>
          <dd>
            <h3>
              {{item.title}}
            </h3>
            <p>价格:<label class="font40">{{item.price}}</label><label class="tl-T">{{item.oldprice}}</label></p>
            <p>评论：0条</p>
            <p>购买数量:10 库存量：100 </p>
            <p>
              <span @click="addshop">加入购物车</span>
              <span class="sell" @click="purchase">购买</span>
            </p>
          </dd>
        </dl>
        <ul class="qiehuan">
          <li>产品详情</li>
          <li>产品评论(0)</li>
          <li>销售记录(11)</li>
        </ul>
        <div class="proDetail">
          <ul>
            <li v-for="(it,index) in productDetail">
              <img :src="it">
            </li>
          </ul>
        </div>
        <div class="msg">
          <ul>
            <li><span>产品评星：</span></li>
            <li><span>昵称：</span><input class="w150"/></li>
            <li><span>评论內容：</span><input class="w720"/></li>
            <li><span>验证码：</span><input/></li>
            <li><span>上传图片：</span></li>
          </ul>
          <p>提交评论</p>
        </div>
      </div>
      <div class="productLeft">
        <div class="coupon">
          <h3>优惠满减</h3>
          <ul>
            <li>
              <div class="couponSavePrice"><span class="priceSign">￥</span><span class="couponPrice">20</span></div>
              <div class="couponUseCondition"><span>满99</span><br><span>即可使用</span><br><span class="coupon-name coupon-name-pink">优惠大促</span></div>
              <div class="receiveCoupon font-color-pink" bg_id="5" coupon_id="103">立即领取</div>
              <div class="validTime">有效期：无时间限制</div>
            </li>
            <li>
              <div class="couponSavePrice"><span class="priceSign">￥</span><span class="couponPrice">50</span></div>
              <div class="couponUseCondition"><span>满199</span><br><span>即可使用</span><br><span class="coupon-name coupon-name-pink">优惠大促</span></div>
              <div class="receiveCoupon font-color-pink" bg_id="5" coupon_id="103">立即领取</div>
              <div class="validTime">有效期：无时间限制</div>
            </li>
            <li>
              <div class="couponSavePrice"><span class="priceSign">￥</span><span class="couponPrice">100</span></div>
              <div class="couponUseCondition"><span>满299</span><br><span>即可使用</span><br><span class="coupon-name coupon-name-pink">优惠大促</span></div>
              <div class="receiveCoupon font-color-pink" bg_id="5" coupon_id="103">立即领取</div>
              <div class="validTime">有效期：无时间限制</div>
            </li>
          </ul>
        </div>
        <div class="recommandProduct clearfix">
          <h3>推荐商品</h3>
          <dl v-for='item in reocmmandList'>
            <dt>
              <img :src="item.pic">
            </dt>
            <dd>
              <h4>{{item.title}}</h4>
              <p class="oldprice">￥{{item.oldprice}}</p>
              <p class="newprice">￥{{item.price}}</p>
            </dd>
          </dl>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import HBanner from '../../base/h-banner/h-banner.vue'
import {setCookie,getCookie} from '~config/cookie.js'
export default {
  data () {
    return {
      bannernum: this.$store.getters.pics,
      productSingle: this.$store.getters.productSingle
    }
  },
  computed: {
    reocmmandList(){
      return this.$store.getters.recommandList
    },
    shopCarList(){
     return this.$store.getters.shopCarList.list
    },
    productSingles(){
      return this.$store.state.productSingle.singerPro
    },
    productDetail(){
      console.log('sadf------------------------------------------------------------')
      console.log(this.$store.state.productSingle.list)
      console.log('detail------------------------------------------------------------')
      return this.$store.getters.productSingle.list
    },
    classOption () {
      return {
        step: 0.5,
        limitMoveNum: 5,
        openTouch: false
      }
    }
  },
  asyncData ({ store, route }) {
    return store.dispatch('FETCH_BANNER_PIC', {
      id:'2'
    })
  },
  created(){
    this.getrecommand()
  },
  mounted(){
    this.product()
    this.getCookieId()
    this.getshopCar()
  },
  methods: {
    reduce(num,index){
      let cookieId = getCookie('userId')
      this.$store.dispatch('FETCH_REDUCENUM',{
        id:num,
        cookieId: cookieId,
        index: index
      })
    },
    getrecommand(){
      this.$store.dispatch('FETCH_RECOMMAND')
    },
    addNum(num,index){
      let cookieId = getCookie('userId')
      this.$store.dispatch('FETCH_ADDNUM',{
        id:num,
        cookieId: cookieId,
        index: index
      })
    },
    purchase(){
      if(this.$store.getters.shopCarList.list.length== '0'){
        alert('购物车为空')
        return
      }
      this.$router.push({ path: '/purchase'})
    },
    addshop(){
      let id = this.$route.params.id
      //let cookieId=document.cookie.substring(7)
      //let cookiename=document.cookie.substring(0,6)
      let cookieId = getCookie('userId')
      console.log(cookieId)
      this.$store.dispatch('FETCH_ADDSHOP',{
        id: id,
        cookieId: cookieId
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
    },
  },
  components: {
    HBanner
  }
}
</script>
