<template>
  <div class="homebox">
    <h-banner :b-style="bannernum"></h-banner>
    <div class="content mb60 clearfix">
      <t-h3>
        新品推荐
        <label>RECOMMEND</label>
      </t-h3>
      <n-arrivals :data="pro" :picbanner="bannerPic"></n-arrivals>
    </div>
    <div class="content mb60 clearfix">
      <n-mlist :data="prolist"></n-mlist>
    </div>
  </div>
</template>
<script>
import TH3 from '../../base/titleH3/titleH3'
import NMlist from '../../base/new-marketlist/new-marketlist'
import NArrivals from '../../base/n-arrivals/n-arrivals.vue'
import appList from '../../http/post/App-list'
import HBanner from '../../base/h-banner/h-banner.vue'
export default {
  data () {
    return {
      bannernum: this.$store.getters.pics,
      pro: this.$store.getters.pro,
      prolist: this.$store.getters.prolist,
      bannerPic: this.$store.getters.picbanner
    }
  },
  asyncData ({ store, route }) {
    return store.dispatch('FETCH_BANNER_PIC', {
      id:'2'
    })
  },
  components: {
    TH3,
    NArrivals,
    NMlist,
    HBanner
  }
}
</script>
