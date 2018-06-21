<template>
  <div class="highrecommend">
    <div class="highrecomPic">
      <img :src="bestPro">
    </div>
    <ul class="highrecomProduct">
      <li v-for="item in bestData">
        <a :href="host + ('product') + '/' + item.id + '/'">
         <p><img :src="item.pic"></p>
         <p>
           <strong>{{item.title}}</strong>
           <span class="but">立即抢购</span>
         </p>
        </a>
      </li>
    </ul>
    <div class="news">
      <div class="newbox mb12">
        <h4>评论</h4>
        <s-news :data="listData" class="warp" :class-option="classOption">
          <ul class="item aotoUp">
              <li v-for="item in listData">
                  <span class="title" v-text="item.title"></span>
                  <span class="date" v-text="item.date"></span>
              </li>
          </ul>
        </s-news>
      </div>
      <div class="newbox">
        <h4>新闻公告</h4>
        <ul>
          <li>
            现代设备可以提升传统家具制造的速度
          </li>
          <li>
            现代设备可以提升传统家具制造的速度
          </li>
          <li>
            现代设备可以提升传统家具制造的速度
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import SNews from '../scrollNews/scrollNews.vue'
  export default {
    props: ['bestData','bestPro'],
    data () {
      return {
        host: 'http://www.jsmingmei.com/',
        listData: [{
            'title': '无缝滚动第一行无缝滚动第一行',
            'date': '2017-12-16'
          }, {
            'title': '无缝滚动第二行无缝滚动第二行',
            'date': '2017-12-16'
          }, {
            'title': '无缝滚动第三行无缝滚动第三行',
            'date': '2017-12-16'
          }, {
            'title': '无缝滚动第四行无缝滚动第四行',
            'date': '2017-12-16'
          }, {
            'title': '无缝滚动第五行无缝滚动第五行',
            'date': '2017-12-16'
          }, {
            'title': '无缝滚动第六行无缝滚动第六行',
            'date': '2017-12-16'
          }, {
            'title': '无缝滚动第七行无缝滚动第七行',
            'date': '2017-12-16'
          }, {
            'title': '无缝滚动第八行无缝滚动第八行',
            'date': '2017-12-16'
          }, {
            'title': '无缝滚动第九行无缝滚动第九行',
            'date': '2017-12-16'
          }]
      }
    },
    computed: {
      classOption () {
        return {
          step: 0.5,
          limitMoveNum: 5,
          openTouch: false
        }
      }
    },
    methods:{
      product(id){
        this.$router.push({ path: '/product', query:{id: id}})
      }
    },
    components: {
      SNews
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
@import "../../common/stylus/variable"
@import "../../common/stylus/mixin"
.warp
  height:170px
  overflow:hidden
.newbox
  float:right
  display:inline
  border:1px solid #eaeaea
  width:300px
  height:225px
  overflow:hidden
  h4
    line-height:40px
  ul
    padding:0px 20px
    li
      border-bottom:1px dashed #dbdbdb
      height:46px
      line-height:46px
  ul.aotoUp
    li
      height:auto
      line-height:30px
      padding-bottom:10px
      margin-bottom:10px
.mb12
  margin-bottom:12px
</style>
