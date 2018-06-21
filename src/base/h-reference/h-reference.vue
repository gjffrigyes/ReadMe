<template>
  <ul class="refrence">
    <li v-for="item in data">
      <a :href="host + ('product') + '/' + item.id + '/'">
        <span><img :src="item.pic"></span>
        <strong>{{item.title}}</strong>
        <p>{{item.notice}}</p>
        <p class="but">立即抢购</p>
      </a>
    </li>
  </ul>
</template>
<script>
  export default {
    data () {
      return {
        host: 'http://www.jsmingmei.com/'
      }
    },
    props: ['data'],
    methods:{
      product(id){
        this.$router.push({ path: '/product', query:{id: id}})
      }
    }
  }
</script>
