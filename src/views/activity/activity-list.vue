<template>
  <div class="activity-list"
       @click="test">
    list: {{list}}
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  asyncData({ store, route }) {
    store.dispatch('activity_list_test', { test: 'xxxxx' })
  },
  computed: {
    ...mapState({
      list: state => state.activityList.list
    })
  },
  methods: {
    test() {}
  }
}
</script>

<style lang="less" scoped>
.activity-list {
}
</style>