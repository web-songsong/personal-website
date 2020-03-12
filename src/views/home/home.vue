<template>
  <div class="home">
    <introWrap :show="introVisible"
               ref="introWrap"/>
    <homeContent/>
    <putOnRecords/>
  </div>
</template>

<script>
  import homeContent from '@/components/home/home-content'
  import introWrap from '@/components/home/intro-wrap'
  import putOnRecords from '@/components/common/put-on-records'

  export default {
    components: {
      introWrap,
      homeContent, putOnRecords
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
      }, 4500)

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
