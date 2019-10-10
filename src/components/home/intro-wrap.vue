<template>
  <div class="intro-wrap">
    <transition name="opacity-show"
                mode="out-in">
      <div class="intro"
           key="intro-text"
           ref="intro"
           v-if="show">
        <p class="intro-title">charmingsong<br>website</p>
        <p class="intro-docs">
          One needs 3 things to be truly happy living in the world: some thing to do, some one to love, some thing to
          hope for.
        </p>
        <div class="icon-img"
             ref="introSign"
             @click="downwardIcon">
          <img src="@/assets/images/home/bottom-icon.png">
        </div>

      </div>

      <div class="intro"
           v-if="infoTitle"
           key="intro-info">
        <div class="info-title"
             id="info-title">
          massively
        </div>
      </div>
    </transition>

  </div>

</template>

<script>
  export default {
    props: {
      show: Boolean
    },
    data() {
      return {
        infoTitle: false
      }
    },
    methods: {
      downwardIcon() {
        $('html, body').animate(
          {
            scrollTop: $(this.$refs.introSign).offset().top - 50
          },
          1000
        )
      }
    },
    computed: {},
    watch: {
      show(val) {
        this.infoTitle = !val
      }
    }
  }
</script>

<style lang="less"
       scoped>
  .opacity-show();
  .intro-wrap {
    height: 100vh;
    box-sizing: border-box;
    position: relative;

    .intro {
      color: #fff;
      position: absolute;
      bottom: 10%;
      left: 50%;
      transform: translatex(-50%);
      text-align: center;

      .intro-title {
        font-family: 'Source Sans Pro', Helvetica, sans-serif;
        font-size: 73px;
        letter-spacing: 0.075em;
        font-weight: 900;
        margin: 0 0 24px 0;
        line-height: 73px;
        @media screen and (max-width: 915px) {
          font-size: 38px;
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

      .icon-img {
        width: 64px;
        height: 64px;
        margin: 40px auto 0;

        img {
          width: 100%;
          height: 100%;
        }
      }

      .info-title {
        font-family: 'Source Sans Pro', Helvetica, sans-serif;
        width: 260px;
        height: 78px;
        line-height: 78px;
        font-size: 30px;
        font-weight: 900;
        color: #fff;
        margin: 280px auto 0;
        border: 5px solid #fff;
        @media screen and (max-width: 915px) {
          width: 200px;
          font-size: 21px;
          height: 60px;
          line-height: 60px;
        }
      }
    }
  }
</style>