<template>
  <div class="homebox">
    <h-banner :b-style="bannernum"></h-banner>
    <div class="content mb60 clearfix">
      <t-h3>
        {{title}}
      </t-h3>
      <div class="searchResult">
        <input>
      </div>
      <div class="searchSort">
        <span @click="keyWord('title')" :class="{'bgspan':isbga}">名称<label :class="{'desc':isa,'asc':isb}"></label></span>
        <span @click="keyWord('time')" :class="{'bgspan':isbgb}">上架时间<label :class="{'desc':isc,'asc':isd}"></label></span>
        <span>价格</span>
        <span><input></span>-<span><input></span>
      </div>
      <div class="searchfocues">
        <span>幻灯片</span>
      </div>
      <ul class="searchUlList">
        <li v-for="item in this.$store.getters.searchList">
          <p><img :src="item.pic"></p>
          <strong>{{item.title}}</strong>
          <p>{{item.price}}<span>{{item.oldprice}}</span></p>
          <p class="but">立即抢购</p>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import HBanner from '../../base/h-banner/h-banner.vue'
import TH3 from '../../base/titleH3/titleH3'
export default {
  data () {
    return {
      bannernum: this.$store.getters.pics,
      word:'id',
      order:'desc',
      isb:false,
      isa:false,
      isc:false,
      isd:false,
      isbga:false,
      isbgb:false,
      isbgc:false,
      isbgd:false
    }
  },
  computed: {
    title(){
      return this.$route.query.name
    }
  },
  created() {
    this.searchKeyword()
  },
  methods: {
    keyWord(word) {
      this.word = word
      if(this.order=='desc'&& this.word=='title'){
        this.order = 'asc'
        this.isb = true
        this.isa = false
        this.isc = false
        this.isd = false
        this.isbga = true
        this.isbgb = false
      }else if(this.order=='asc'&& this.word=='title'){
        this.order = 'desc'
        this.isa = true
        this.isb = false
        this.isc = false
        this.isd = false
        this.isbga = true
        this.isbgb = false
      }else if(this.order=='asc'&& this.word=='time'){
        this.order = 'desc'
        this.isc = true
        this.isb = false
        this.isa = false
        this.isd = false
        this.isbga = false
        this.isbgb = true
      }else if(this.order=='desc'&& this.word=='time'){
        this.order = 'asc'
        this.isd = true
        this.isb = false
        this.isa = false
        this.isc = false
        this.isbga = false
        this.isbgb = true
      }
      this.searchKeyword()
    },
    searchKeyword() {
      let val = this.$route.query.name
      let keyword
      if(val == '橱柜脚')
      {
        keyword = 'cupboard'
      }else if(val == '门锁'){
        keyword = 'lock'
      }
      this.$store.dispatch('FETCH_SEARCH_DATA',{
        keywords: keyword,
        name: this.word,
        order:this.order
      })
    }
  },
 watch: {
    // 如果路由有变化，会再次执行该方法
    '$route': 'searchKeyword'
  },
  asyncData ({ store, route }) {
    return store.dispatch('FETCH_BANNER_PIC', {
      id:'3'
    })
  },
  components: {
    HBanner,
    TH3
  }
}
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
@import "../../common/stylus/variable"
@import "../../common/stylus/mixin"
.searchSort
  display:block
  height:50px
  background:#f5f5f5
  line-height:50px
  span
    float:left
    display:inline
    padding: 0 30px
    font-size:16px
    cursor:pointer
    label
      display:inline-block
      width:10px
      height:10px
    label.desc
      background:url("../../common/image/d.gif")no-repeat right top
    label.asc
      background:url("../../common/image/u.gif")no-repeat right top
  span:hover
    label.desc
      background:url("../../common/image/u.gif")no-repeat right bottom
    label.asc
      background:url("../../common/image/d.gif")no-repeat right bottom
  span.bgspan
    background:#ffffff

.searchfocues
  height:50px
  line-height:50px
  display:block
  border-bottom:1px dotted #ccc
  margin-bottom:20px
  span
    float:right
    display:inline

.searchUlList
  li
    float:left
    width:245px
    height:320px
    border:1px solid $color-border
    margin-left:10px
    padding-top :40px
    overflow :hidden
    margin:0 26px 20px 26px
    p
      display:block
      font-size :$font-size-large-x
      color :$color-background-menu
      text-align :center
      line-height 30px;
      img
        width :236px
        height :189px
      span
        text-decoration: line-through
        color :#767676
        font-size :$font-size-small
    p.but
      width :180px
      height :33px
      line-height :33px
      text-align :center
      margin :0 auto
      background :$color-background-menu
      color :$font-color-ffffff
      font-size :$font-size-small
    strong
      display:block
      text-align :center
      border-bottom :1px dotted #cccccc
      font-size :$font-size-large
      padding : 0 5px
      line-height :40px

</style>
