<template>
  <div class="home">
    <button @click="test">test</button>
  </div>
</template>

<script>
export default {
  methods: {
    test() {
      console.log('xxx')
    }
  }
}
</script>

<style lang="less" scoped>
.home {
}
</style>