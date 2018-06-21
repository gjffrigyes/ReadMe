<template>
  <ul class="serverBox">
    <li v-for ="item in serverList">
      <img :src="item.pic">
    </li>
  </ul>
</template>
<script>
import TH3 from '../../base/titleH3/titleH3'
export default {
  name: 'app',
  props: ['serverList'],
  components: {
    TH3
  }
}
</script>

