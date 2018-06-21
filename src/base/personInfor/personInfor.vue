<template>
  <transition name="slide">
    <div class="personInfor">
      <div class="personContent clearfix" >
        <h3 ><span @click="back">关闭</span>收货人信息</h3>
          <form>
            <ul>
             <li><span>姓名*</span><input ref="name"/></li>
             <li><span>邮箱*</span><input ref="email"/></li>
             <li><span>电话*</span><input ref="tel"/></li>
             <li><span>邮政编码*</span><input ref="postal"/></li>
             <li><span>所在地区*</span><input ref="area"/></li>
             <li><span>详细地址*</span><input ref="address"/></li>
            </ul>
            <p><span class="mst" @click="submit()">确定</span><span>取消</span></p>
          </form>
      </div>
    </div>
  </transition>
</template>
<script type="text/ecmascript-6">
  import {setCookie,getCookie} from '../../util/cookie.js'
  export default {
    data () {
      return {
      }
    },
    methods: {
      back() {
        this.$router.push('/purchase')
      },
      submit (formate) {
        let cookieId = getCookie('userId')
        this.$store.dispatch('POST_PERSONINFO',{
          cookieId: cookieId,
          name: this.$refs.name.value,
          email: this.$refs.email.value,
          tel: this.$refs.tel.value,
          postal: this.$refs.postal.value,
          area: this.$refs.area.value,
          address: this.$refs.address.value
        })
        this.back()
      }
    }
  }
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  .slide-enter-active, .slide-leave-active
    transition: all 0.3s

  .slide-enter, .slide-leave-to
    transform: translate3d(100%, 0, 0)
  .personInfor
    position: fixed
    z-index: 100
    top: 0
    left: 0
    bottom: 0
    right: 0
    background: #222
    .personContent
      width:942px
      border-radius:5px 5px
      background:#fff
      margin:10% 30% 0 30%
      padding-bottom:30px
      h3
        height:66px
        line-height:66px
        font-size:18px
        padding-left:30px
        border-bottom:1px solid #e7e7e7
        margin-bottom:40px
        span
          float:right
          display:inline
          margin-right:10px
          color:#858585
      ul
        padding-left:300px
        li
          display:block
          height:42px
          line-height:42px
          margin-bottom:40px
          position:relative
          input
            width:362px
            height:42px
            line-height:42px
            border:1px solid #e7e7e7
            border-radius:5px
          span
            float:left
            display:inline
            position:absolute
            width:80px
            text-align:right
            left:-90px
            top:0px
      p
        text-align:center
        span
          display:inline-block
          width:100px
          height:38px
          line-height:38px
          border:1px solid #ccc
          margin:0 20px
        span.mst
          background-color:#ff6537
          height:40px
          line-height:40px
          border:none
          color:#fff

</style>
