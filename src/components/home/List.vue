<template>
  <div class="List">
    <BaseItem v-for="(item,key) in list"
              :key="key"
              :uri="item.uri" />
  </div>
</template>
<script>
import { BaseItem } from './common'
export default {
  components: {
    BaseItem
  },
  data() {
    return {
      list: []
    }
  },
  mounted() {
    this.$axios('http://localhost:3000/home/queryList').then(res => {
      console.log(res)
    })
  }
}
</script>

<style lang="stylus" scoped>
.List
  display flex
  flex-flow wrap

  .BaseItem
    height 250px
    margin 0 1% 24px
    flex 0 0 48%
</style>
