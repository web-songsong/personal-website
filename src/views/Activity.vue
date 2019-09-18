<template>
  <div class="Activity"
       @click="testHandle">click test api
  </div>
</template>
<script>
import { mapActions } from 'vuex'

export default {
  name: 'Activity',

  methods: {
    ...mapActions(['activity_test']),
    testHandle() {
      this.activity_test().then(res => {
        alert(`返回信息： ${res}`)
      })
    }
  }
}
</script>
<style lang="less" scoped>
.Activity {
  color: pink;
  font-size: 30px;
  cursor: pointer;
  user-select: none;
  border: 1px solid;
  border-radius: 2em;
  padding: 10px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%;);
}
</style>
