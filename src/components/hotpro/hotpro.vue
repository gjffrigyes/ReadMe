<template>
  <div class="homebox">
    <h-banner :b-style="bannernum"></h-banner>
    <div class="content mb60 clearfix">
      <t-h3>
        热卖专区
        <label>HOT</label>
      </t-h3>
      <h-s-area :data="this.$store.getters.hotList" :hotadv="this.$store.getters.hotadv"></h-s-area>
    </div>
    <div class="content mb60 clearfix">
      <n-mlist :data="this.$store.getters.hotListre"></n-mlist>
    </div>
  </div>
</template>
<script>
import TH3 from '../../base/titleH3/titleH3'
import HSArea from '../../base/h-s-area/h-s-area'
import NMlist from '../../base/new-marketlist/new-marketlist'
import HBanner from '../../base/h-banner/h-banner.vue'
export default {
  data () {
    return {
      bannernum: this.$store.state.pics,
      hotList:this.$store.getters.hotList,
      hotadv: this.$store.getters.hotadv,
      hotListre:this.$store.getters.hotListre
    }
  },
  asyncData ({ store, route }) {
    return store.dispatch('FETCH_BANNER_PIC', {
      id:'3'
    })
  },
  components: {
    TH3,
    NMlist,
    HSArea,
    HBanner
  }
}
</script>

