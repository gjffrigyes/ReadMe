<template>
  <div class="banner" :style="{backgroundImage:'url('+ bStyle +')'}">
  </div>
</template>
<script>
export default {
  props: ['bStyle']
}
</script>
