<template>
  <div class="homebox">
    <h-banner :b-style="bannernum"></h-banner>
    <div class="content mb60 clearfix">
      <t-h3>
        服务理念
        <label>server</label>
      </t-h3>
      <div class="serverNotice">
        公司遵循“诚信、共享、合作、双赢的发展理念，坚持”以服务、信誉第一“的经营宗旨，致力于网上网下推广和高质量高安全的五金商品，以诚信同荣的饱满精神提供给用户最满意的产品。
        </br>
        我们自产自销，物美价廉。是您最佳的选择！
      </div>
      <s-piclist :serverList="this.$store.getters.serverList"></s-piclist>
    </div>
  </div>
</template>
<script>
import TH3 from '../../base/titleH3/titleH3'
import SPiclist from '../../base/serverPicList/serverPicList'
import HBanner from '../../base/h-banner/h-banner.vue'
export default {
  data () {
    return {
      bannernum: this.$store.getters.pics,
      serverList: this.$store.getters.serverList
    }
  },
  created(){
    this.$store.dispatch('FETCH_SERVER_RCO',{
      protype:'service'
    })
  },
  asyncData ({ store, route }) {
    return store.dispatch('FETCH_BANNER_PIC', {
      id:'4'
    })
  },
  components: {
    TH3,
    SPiclist,
    HBanner
  }
}
</script>


