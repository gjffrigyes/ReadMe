<el-rate
  v-model="value5"
  disabled
  show-score
  text-color="#ff9900"
  score-template="{value}">
</el-rate>

<script>
  export default {
    data() {
      return {
        value5: 3.7
      }
    }
  }
</script>
