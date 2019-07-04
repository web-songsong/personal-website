<template>
  <div class="List">
    <BaseItem v-for="(item,key) in list"
              :key="key"
              :text="item.text"
              :uri="item.uri" />
  </div>
</template>
<script>
import { BaseItem } from './common'
import { mapActions } from 'vuex'
export default {
  components: {
    BaseItem
  },
  data() {
    return {
      list: []
    }
  },
  methods: {
    ...mapActions(['home_getList'])
  },
  mounted() {
    this.home_getList().then(data => (this.list = data))
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
