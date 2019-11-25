<template>
  <div id="app">
    <div class="app">
      <div class="shade"></div>
      <wrapBorder></wrapBorder>
      <svt-gsap class="svt-gsap"
                @runMain="runMain"></svt-gsap>
      <router-view/>
    </div>
  </div>
</template>

<script>
  import wrapBorder from '@/components/common/wrap-border'

  export default {
    components: {
      wrapBorder
    },
    methods: {
      runMain(fn) {
        setTimeout(() => {
          fn()
        }, 1000)
      }
    },
  }
</script>
<style lang="less"
       scoped>
  #app {
    .shade {
      position: fixed;
      width: 100vw;
      height: 100vh;
      top: 0;
      left: 0;
      background-color: #212931;
      background-image: url(./assets/images/overlay.png),
      linear-gradient(0deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)),
      url(./assets/images/bg.jpg);
      background-size: auto, auto, 100% auto;
      background-position: center, center, top center;
      background-repeat: repeat, no-repeat, no-repeat;
      background-attachment: scroll, scroll, scroll;
      z-index: -1;
      @media screen and (max-width: 915px) {
        background-size: auto, auto, auto 175%;
      }
    }
    .svt-gsap {
      position: absolute;
    }
  }
</style>