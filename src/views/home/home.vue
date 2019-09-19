<template>
  <div class="home">
    <intro-wrap :show="introVisible" />
    <div class="test">
    </div>
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
  methods: {
    /*     监听滚动条， 隐藏/展示 introWrap */
    HandleintroWrapScroll() {
      let osTop =
        document.documentElement.scrollTop ||
        window.pageYOffset ||
        document.body.scrollTop
      if (osTop > 300) {
        this.introVisible = false
      } else {
        this.introVisible = true
      }
    }
  },
  mounted() {
    setTimeout(() => {
      this.introVisible = true
    }, 2000)

    window.onscroll = evnet => {
      this.HandleintroWrapScroll()
    }
  }
}
</script>

<style lang="less" scoped>
.home {
  box-sizing: border-box;
  position: relative;
  overflow: hidden;
}
.test {
  height: 3000px;
  background: rgba(200, 100, 30, 0.3);
}
</style>