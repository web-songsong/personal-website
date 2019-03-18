<template>
  <div class="home">
    <div class="scrn"
         :class="{isOpacity:isOpacity}"></div>
    <scrnOne class="scrnOne"
             message="charming song" />
    <div class="menuHome"
         @click="menuClick">menu</div>
  </div>
</template>

<script>
// @ is an alias to /src
import scrnOne from "@/components/Home/ScrnOne.vue";
export default {
  name: "home",
  components: {
    scrnOne
  },
  data() {
    return {
      isOpacity: false
    };
  },
  mounted() {
    setTimeout(() => {
      this.isOpacity = true;
    }, 1000);
  },
  methods: {
    menuClick() {
      console.log("af");
    }
  }
};
</script>

<style lang="stylus" scoped>
.home
  height 100vh
  min-height 35em
  position relative
  bgImg('/home_bg/banner.jpg')

  .scrn
    background #2e3842
    width 100%
    height 100%
    opacity 0.9
    transition opacity 2s ease 1s

  .isOpacity
    opacity 0.5

  .scrnOne
    color #fff
    min-width 20em
    position absolute
    top 50%
    left 50%
    transform translate(-50%, -50%)

  .menuHome
    position absolute
    display flex
    align-items center
    top 0
    right 0
    color #fff
    height 4em
    line-height 4em
    font-size 0.8em
    letter-spacing 0.225em
    padding 0 1.5em
    text-transform uppercase
    btn()

    &:after
      content ''
      display block
      width 1.5em
      height 1.5em
      margin-left 0.5em
      bgImg('/icon/bars.svg')
</style>
