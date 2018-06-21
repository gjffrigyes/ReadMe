<template>
  <div class='hotbox'>
    <ul class="hot">
     <li v-for="item in data">
        <a :href="host + ('product') + '/' + item.id + '/'">
          <p><img :src="item.pic"></p>
          <strong>{{item.title}}</strong>
          <p>{{item.price}}<span>{{item.oldprice}}</span></p>
          <p class="but">立即抢购</p>
        </a>
     </li>
    </ul>
    <div class='hotadv'>
      <img :src="hotadv">
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        host: 'http://www.jsmingmei.com/'
      }
    },
    props: ['data','hotadv'],
    methods:{
      product(id){
        this.$router.push({ path: '/product', query:{id: id}})
      }
    }
  }
</script>
