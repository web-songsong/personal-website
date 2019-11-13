<template>
  <div class="home">
    <introWrap :show="introVisible"
                ref="introWrap"/>
    <homeContentVue/>
  </div>
</template>

<script>
  export default {
    components: {
      introWrap: () => import('@/components/home/intro-wrap.vue'),
      homeContentVue: () => import('@/components/home/home-content.vue')
    },
    data() {
      return {
        introVisible: false,
        introTop: 0
      }
    },
    mounted() {
      setTimeout(() => {
        this.introVisible = true
        this.setIntroTop()
      }, 1500)

      window.onscroll = evnet => {
        this.HandleintroWrapScroll()
      }
      $(window).resize(() => {
        if (this.$refs.introWrap.$refs.intro) {
          this.introTop = $(this.$refs.introWrap.$refs.intro).offset().top
        }
      })
    },
    methods: {
      /*     监听滚动条， 隐藏/展示 introWrap */
      HandleintroWrapScroll() {
        let osTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop
        this.introVisible = osTop <= this.introTop
      },
      setIntroTop() {
        this.$nextTick(() => {
          this.introTop = $(this.$refs.introWrap.$refs.intro).offset().top
        })
      }
    }
  }
</script>

<style lang="less"
       scoped>
  .home {
    box-sizing: border-box;
    position: relative;
    overflow: hidden;
  }
</style>