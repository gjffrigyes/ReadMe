<template>
  <div class="homebox">
    <h-banner :b-style="bannerlist"></h-banner>
    <h-ref :data="res"></h-ref>
    <div class="content mb60 clearfix">
      <t-h3>
        新品推荐
        <label>RECOMMEND</label>
      </t-h3>
      <n-arrivals :data="this.$store.getters.pro" :picbanner="this.$store.getters.picbanner"></n-arrivals>
    </div>
    <div class="content mb60 clearfix">
      <t-h3>
        热卖专区
        <label>HOT</label>
      </t-h3>
      <h-s-area :data="this.$store.getters.hotList" :hotadv="this.hotadv"></h-s-area>
    </div>
    <div class="content mb60 clearfix advRecommend">
      <dl>
        <dt>
          <img src="../../assets/images/12_03.jpg"/>
        </dt>
        <dd>
          <p>尽显生活品味</p>
          <p>
            <span>今日促销价¥</span>
            <span class="num">135</span>
          </p>
          <p class="btn">立即抢购</p>
          <p class="clearfix">
            <img src="../../assets/images/12_06.jpg"/>
            <img src="../../assets/images/12_08.jpg"/>
          </p>
        </dd>
      </dl>
    </div>
    <div class="content mb60 clearfix">
      <t-h3>
        精品推荐
        <label>RECOMMEND</label>
      </t-h3>
      <h-q-recommendation :bestData="this.$store.getters.bestData" :bestPro="this.$store.getters.bestPro"></h-q-recommendation>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import TH3 from '../../base/titleH3/titleH3'
import HRef from '../../base/h-reference/h-reference'
import HQRecommendation from '../../base/h-q-recommendation/h-q-recommendation'
import HSArea from '../../base/h-s-area/h-s-area'
import NArrivals from '../../base/n-arrivals/n-arrivals.vue'
import appList from '../../http/post/App-list'
import HBanner from '../../base/h-banner/h-banner.vue'
export default {
  name: 'app',
  data () {
    return {
      bannerlist: this.$store.getters.pics,
      res: this.$store.getters.res,
      pro: this.$store.getters.pro,
      hotList:this.$store.getters.hotList,
      bannerPic: this.$store.getters.picbanner,
      hotadv: this.$store.getters.hotadv,
      bestData:this.$store.getters.bestData,
      bestPro:this.$store.getters.bestPro,
    }
  },
  created(){
    this.allmethods()
  },
  asyncData ({ store, route }) {
    return store.dispatch('FETCH_BANNER_PIC', {
       id:'1'
     })
  },
  methods: {
    winReload(){
      this.$router.go(0)
    },
    allmethods(){
      this.$store.dispatch('FETCH_PRODUCT_RCO')
      this.$store.dispatch('FETCH_NEWPRODUCT_RCO',{
        protype:'new'
      })
      this.$store.dispatch('FETCH_HOTSELL_RCO',{
        protype:'hot'
      })
      this.$store.dispatch('FETCH_BESTPRO_RCO',{
        protype:'best'
      })
    }
  },
  components: {
    TH3,
    HRef,
    HQRecommendation,
    HSArea,
    NArrivals,
    HBanner
  }
}
</script>

