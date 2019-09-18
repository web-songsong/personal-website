<template>
  <div class="test"
       @click="test">
    list: {{list}}
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  asyncData({ store, route }) {
    store.dispatch('vuex_tets', { test: 'xxxxx' })
  },
  computed: {
    ...mapState({
      list: state => state.testVuex.list
    })
  },
  methods: {
    test() {
      console.log('xxxx')
    }
  }
}
</script>

<style lang="less" scoped>
.test {
}
</style>