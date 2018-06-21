<template>
  <div class="recommend">
    <div class="recomPic">
      <img :src="picbanner">
    </div>
    <ul class="recomProduct">
     <li v-for="item in data">
        <a :href="host + ('product') + '/' + item.id + '/'">
          <p><img :src="item.pic"></p>
          <strong>{{item.title}}</strong>
          <p>{{item.price}}<span>{{item.oldprice}}</span></p>
          <p class="but">立即抢购</p>
        </a>
     </li>
    </ul>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        host: 'http://www.jsmingmei.com/'
      }
    },
    props: ['data','picbanner'],
    methods:{
      product(id){
        this.$router.push({ path: '/product', query:{id: id}})
      }
    }
  }
</script>
