<template>
  <div class="homebox">
    <h-banner :b-style="bannernum"></h-banner>
    <div class="content mb60 clearfix">
      <t-h3>
        订单结算
      </t-h3>
    </div>
    <div class="content mb60 clearfix purchase">
      <h3>收货人信息</h3>
      <div class="addInfo" :class="personInfot" @click="addInfo('index')" v-show="personInfot">
        <p>
        </p>
        添加信息
      </div>
      <div class="addInfo borderf false" :class="personInfof">
        <div class="headerBg"></div>
        <ul>
          <li class="clearfix">
            <i class="msgIcon msgIconName">
            </i>

            {{this.$store.getters.personInfo.title}}
          </li>
          <li class="clearfix">
            <i class="msgIcon msgIconPhone">
            </i>
            {{this.$store.getters.personInfo.tel}}
          </li>
          <li class="clearfix">
            <i class="msgIcon msgIconAddr">
            </i>
            {{this.$store.getters.personInfo.address}}
          </li>
        </ul>
        <div class="bottomSelected mstl_selectFlag"></div>
      </div>
      <div class="clear"></div>
      <div class="distribution">
        <h3>配送方式</h3>
        <div>
          <select class="shopSelect" @change="selectVal">
            <option v-for="(item,index) in selects" :value="index" v-model="item.value">{{ item.value }}</option>
          </select>
          <p class="shopPrice">
            配送费:￥{{price}}
          </p>
        </div>
      </div>
      <div class="clearfix">
        <h3>支付方式</h3>
        <div class="payListWrap clearfix">
          <div class="paySelList clearfix">
            <p class="rank">
            </p>
            <p class="cash">
            </p>
          </div>
          <div class="clearfix">
            <h4>卖家账户信息：</h4>
            <div class="sellerBanksWrap">
              <span>中国XX银行</span><span>帐号:4100 0000 1111 2222</span><span>开户名:张三</span>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h3>购物清单</h3>
        <div class="goodsListWrap">
          <table>
            <tr>
              <th>名称</th>
              <th>价格</th>
              <th>数量</th>
              <th>小计</th>
            </tr>
            <tr v-for="(item,index) in shopCarList">
              <td>{{item.title}}</td>
              <td>{{item.price}}</td>
              <td style="position:relative"><p class="addnum right30"><span @click="reduce(item.id,index)"><b>-</b></span><span><b>{{item.num}}</b></span><span @click="addNum(item.id,index)"><b>+</b></span></p></td>
              <td>{{item.sum}}</td>
            </tr>
            <tr>
              <td colspan="4" class="pd20">给卖家留言<input class="mess" ref="message"/>(200字)</td>
            </tr>
            <tr>
              <td colspan="4" style="text-align:right">使用优惠卷<select class="shopSelect"></select></td>
            </tr>
          </table>
        </div>
      </div>
      <div class="mstlTotalWarp">
        <p>商品总金额：￥{{this.$store.getters.shopCarList.allSum}}</p>
        <p>运费：￥{{price}}</p>
        <p>应付总金额：￥{{this.$store.getters.shopCarList.allSum + price}}</p>
        <p><span @click="submitOrder">提交订单</span></p>
      </div>
    </div>
    <router-view></router-view>
  </div>

</template>
<script>
import TH3 from '../../base/titleH3/titleH3'
import HSArea from '../../base/h-s-area/h-s-area'
import HBanner from '../../base/h-banner/h-banner.vue'
import {getCookie,delCookie} from '../../util/cookie.js'
export default {
  data () {
    return {
      bannernum: this.$store.state.pics,
      hotList:this.$store.getters.hotList,
      hotadv: this.$store.getters.hotadv,
      hotListre:this.$store.getters.hotListre,
      price:5,
      selected:'',
      selects:[
        {value:'平邮'},
        {value:'快递'},
        {value:'EMS'}
      ]
    }
  },
  computed: {
    shopCarList(){
     return this.$store.getters.shopCarList.list
    },
    personInfof() {
      return this.$store.getters.personInfo.boolf
    },
    personInfot() {
      return this.$store.getters.personInfo.boolt
    },
    ordersubmit() {
      return this.$store.getters.postSubmitOrder
    }
  },
  mounted() {
    this.sellList()
    this.getPersonInfo()
  },
  asyncData ({ store, route }) {
    return store.dispatch('FETCH_BANNER_PIC', {
      id:'1'
    })
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
    addNum(num,index){
      let cookieId = getCookie('userId')
      this.$store.dispatch('FETCH_ADDNUM',{
        id:num,
        cookieId: cookieId,
        index: index
      })
    },
    getPersonInfo(){
      let cookieId = getCookie('userId')
      this.$store.dispatch('GET_PERSONINFO',{
        cookieId: cookieId
      })
    },
    selectVal(ele) {
      let v = ele.target.value
      if(v==0){
        this.price = 5
        this.selected = '平邮'
      }else if(v==1){
        this.price = 10
        this.selected = '快递'
      }else if(v==2){
        this.price = 100
        this.selected = 'EMS'
      }
    },
    sellList() {
      let cookieId = getCookie('userId')
      this.$store.dispatch('GET_SHOPCAR',{
        cookieId: cookieId
      })
    },
    submitOrder() {
      let cookieId = getCookie('userId')
      if(this.selected==''){
        this.selected = '平邮'
      }
      this.$store.dispatch('POST_SUBMIT_ORDER',{
        cookieId: cookieId,
        allPrice: this.$store.getters.shopCarList.allSum + this.price,
        message: this.$refs.message.value,
        kedi:this.selected
      })
      /*if(this.ordersubmit.code == '0'){
        delCookie('userId')
        //this.$router.push({ path: '/'})
        location.href='/'
      }*/

    },
    addInfo(index) {
      this.$router.push({
        path: `/purchase/${index}`
      })
    }
  },
  components: {
    TH3,
    HBanner
  }
}
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  .purchase
    display:block
    h3
      display:block
      font-size: 18px
      font-family: "微软雅黑"
      color: #333
      margin-bottom:25px
    div.addInfo
      position: relative
      width: 332px
      height: 212px
      text-align:center
      border: 1px solid #ddd
      border-radius: 8px
      margin-right: 30px
      margin-bottom: 20px
      overflow: hidden
      font-size: 20px
      float:left
      display:inline
      font-family: "微软雅黑"
      color: #9a9a9a
      cursor: pointer
      .headerBg
        width: 100%
        height: 12px
        background: url(../../common/image/vbg01.png?v=201801311332) -138px 0 no-repeat
      .bottomSelected
        display: block
      .mstl_selectFlag
        background-position: -138px -28px
      .bottomSelected
          position: absolute
          bottom: 0
          right: 0
          width: 55px
          height: 55px
          background: url(../../common/image/vbg01.png?v=201801311332) -138px -28px no-repeat
      ul
        padding: 0 10px
        li
          display:block
          height:50px
          border-bottom:1px dashed #ebebeb
          line-height:50px
          text-align:left
          font-size:14px
          i
            float: left
            width: 15px
            height: 18px
            margin: 15px 10px 10px 14px
            background: url(../../common/image/vbg01.png?v=201801311332) 0 -440px no-repeat
          i.msgIconName
            background-position: 0 -410px
          i.msgIconPhone
            background-position: 0 -440px
          i.msgIconAddr
            background-position: 0 -480px;
      p
        width: 50px
        height: 50px
        margin-left: 144px
        margin-top: 61px
        background:url("../../common/image/vbg01.png")-140px -240px no-repeat
        cursor: pointer
    div.borderf
      border: 1px solid #ff6537
    div.false
      display:none
    div.false.true
      display:block
  .distribution
    padding: 30px
    border: 1px solid #eee
    margin-top: 22px
    overflow: hidden
    margin-bottom:28px
    .shopSelect
      float:left
      width: 248px
      height: 28px
      padding: 0
      border: 1px solid #d3d3d3
      margin: 0
      color: #9a9a9a
    .shopPrice
      float:left
      display:inline
      margin-left:20px
      line-height:28px
  .payListWrap
    padding: 30px 28px;
    border: 1px solid #eee;
    margin-bottom: 28px;
    overflow: hidden;
    .paySelList
      display:block
      p
        float: left
        position: relative
        width: 123px
        height: 40px
        border: 1px solid #dfdfdf
        margin: 0px 16px 28px 0px
        background-image: url(../../common/image/vbg01.png?v=201801311332)
        background-repeat: no-repeat
      p.rank
        background-position: -127px -474px;
      p.cash
        background-position: -127px -415px;
  .banksMsgWrap
    width: 100%;
    height: 0;
    margin: auto 0;
    overflow: hidden;
    transition: height .3s;
  .goodsListWrap
    margin-bottom:20px
    table
      width:100%
      border:1px solid #eaeaea
      th
        background:#f8f8f8
        height:42px
        line-height:42px
        color:#333
        border-bottom:1px solid #eaeaea
      td
        height:42px
        line-height:42px
        color:#333
        border-bottom:1px solid #eaeaea
        text-align:center
        input.mess
          width: 60%
          height: 43px
          line-height: 43px
          padding: 0
          border: 1px solid #eee
          margin: 0 50px
          text-indent: 15px
          background: #f8f8f8
          font-size: 14px
          color: #ccc
          font-family: "微软雅黑"
        select
          width:252px
          height: 30px
          border: 1px solid #ddd
          font-size: 12px
          color: #999;
          font-family: "微软雅黑"
          margin:0 20px
      td.pd20
        padding: 20px 0
        text-align:center

  .mstlTotalWarp
    color:#333
    p
      display:block
      margin-bottom:25px
      text-align:right
      padding-right:80px
      span
        display: inline-block
        width: 160px
        height: 42px
        line-height: 42px
        border-radius: 2px
        background-color: #ff734d
        font-size: 16px
        color: #fff
        font-weight: bold
        text-align: center
        cursor: pointer
  .sellerBanksWrap
    height: 40px
    line-height: 40px
    border: 1px solid #ddd
    margin: 20px 0px
    span
      float:left
      display:inline
      margin:0px 80px
</style>
