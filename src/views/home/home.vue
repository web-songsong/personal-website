<template>
  <div class="home">
    <!-- <button @click="introVisible = !introVisible">test</button> -->
    <intro-wrap :show="introVisible" />
    asf
  </div>
</template>

<script>
export default {
  components: {
    introWrap: () => import('@/components/home/intro-wrap.vue')
  },
  data() {
    return {
      introVisible: false
    }
  },
  mounted() {
    setTimeout(() => {
      this.introVisible = true
    }, 2000)
  }
}
</script>

<style lang="less" scoped>
.home {
  box-sizing: border-box;
  position: relative;
  overflow: hidden;
}
</style>