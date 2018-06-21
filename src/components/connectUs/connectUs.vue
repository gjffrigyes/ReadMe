<template>
  <div class="homebox">
    <h-banner :b-style="bannernum"></h-banner>
    <div class="connectUsBox">
      <div class="connectUs clearfix">
        <h3>联系我们</h3>
        <p>
          公司遵循“诚信、共享、合作、双赢的发展理念，坚持”以服务、信誉第一“的经营宗旨，致力于网上网下推广和高质量高安全的五金商品，<br>以诚信同荣的饱满精神提供给用户最满意的产品。我们自产自销，物美价廉。是您最佳的选择！
        </p>
      </div>
      <ul class="connectStyle ">
        <li>
          <p><span>手机：</span> 136 0610 5408</p>
          <p>186 1140 8785</p>
        </li>
        <li>
          <p>公司地址：中国江苏 丹阳市 丹阳市后巷镇北魏开发区</p>
        </li>
        <li>
          <p>邮箱：79653310@qq.com</p>
        </li>
      </ul>
      <div class="connectmap">
        <h-map></h-map>
      </div>
    </div>
  </div>
</template>
<script>
import HBanner from '../../base/h-banner/h-banner.vue'
import HMap from '../../base/map/map.vue'
export default {
  data () {
    return {
      bannernum: this.$store.getters.pics
    }
  },
  asyncData ({ store, route }) {
    return store.dispatch('FETCH_BANNER_PIC', {
      id:'5'
    })
  },
  created() {
  },
  methods: {
  },
  components: {
    HBanner,
    HMap
  }
}
</script>

