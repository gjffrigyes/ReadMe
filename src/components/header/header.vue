<template>
  <div class="headerBox">
    <div class="header clearfix">
      <div class="logo clearfix">
        <h1></h1>
        <span>致力于打造五金行业第一品牌</span>
        <p>江苏明美五金</p>
      </div>
      <div class="search">
        <p>
          <span></span>
          <input>
        </p>
        <p>
          <a @click="search('橱柜脚')">橱柜脚</a>
          <a @click="search('门锁')">门锁</a>
          <a>防盗链</a>
        </p>
      </div>
      <div class="headerAdv">
         <img src="../../common/image/adv.jpg">
      </div>
    </div>
    <div class="clear"></div>
    <div class="navbox">
      <div class="nav" ref="navlist">
        <div class="allpro">全部商品分类</div>
        <div style="display:none">
          <router-link tag="a" class="tab-item" to="/">
            首页
          </router-link>
          <router-link tag="a" class="tab-item" to="/newmarket">
            新品上市
          </router-link>
          <router-link tag="a" class="tab-item" to="/newmarket" >
            热销产品
          </router-link>
          <router-link tag="a" class="tab-item" to="/newmarket" >
            服务案例
          </router-link>
          <router-link tag="a" class="tab-item" to="/newmarket">
            联系我们
          </router-link>
        </div>
        <a href="/" :class="isCurrent == '' ? 'current':''">首页</a>
        <a href="/newmarket" :class="isCurrent== 'newmarket' ? 'current':''">新品上市</a>
        <a href="/hotpro" :class="isCurrent== 'hotpro' ? 'current':''">热销产品</a>
        <a href="/serverExample" :class="isCurrent== 'serverExample' ? 'current':''">服务案例</a>
        <a href="/connectUs" :class="isCurrent== 'connectUs' ? 'current':''" >联系我们</a>
      </div>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  export default {
    computed: {
      isCurrent() {
        let path = this.$route.path.substring(1)
        return path
      }
    },
    methods: {
      search(type) {
        this.$router.push({ path: '/search', query:{name: type}})
      }
    }
  }
</script>
