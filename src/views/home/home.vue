<template>
  <div class="home">
    <wrapBorder></wrapBorder>
    <introWrap :show="introVisible"
               ref="introWrap"/>
    <homeContent></homeContent>
  </div>
</template>

<script>
  import homeContent from '@/components/home/home-content'
  import introWrap from '@/components/home/intro-wrap'
  import wrapBorder from '@/components/home/wrap-border'

  export default {
    components: {
      introWrap,
      homeContent,
      wrapBorder
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

      window.onscroll = () => {
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