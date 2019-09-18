<template>
  <div class="intro-wrap">
    <transition name="opacity-show">
      <div class="intro"
           v-if="show">

        <p class="intro-title">THIS IS <br> MASSIVELY</p>
        <p class="intro-docs">
          A free, fully responsive HTML5 + CSS3 site template designed by HTML5 UP
          and distributed by cssmoban.
        </p>

      </div>
    </transition>
  </div>

</template>

<script>
export default {
  props: {
    show: Boolean
  }
}
</script>

<style lang="less" scoped>
.opacity-show();
.intro-wrap {
  height: 100vh;
  box-sizing: border-box;
  .intro {
    color: #fff;
    padding: 350px 48px;
    text-align: center;
    .intro-title {
      font-family: 'Source Sans Pro', Helvetica, sans-serif;
      font-size: 73px;
      letter-spacing: 0.075em;
      font-weight: 900;
      margin: 0 0 24px 0;
      line-height: 73px;
      @media screen and (max-width: 915px) {
        font-size: 47.66px;
        line-height: 52px;
      }
    }
    .intro-docs {
      font-size: 18.33px;
      font-style: italic;
      text-align: center;
      font-family: Merriweather, Georgia, serif;
      line-height: 43px;
      @media screen and (max-width: 915px) {
        font-size: 14.66px;
        line-height: 30px;
      }
    }
  }
}
</style>