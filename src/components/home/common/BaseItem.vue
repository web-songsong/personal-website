<template>
  <div class="BaseItem">
    <div class="effect">asdf{{showText}}</div>
    <img v-lazy="uri">

  </div>
</template>

<script>
export default {
  props: {
    /* 图片地址 */
    uri: String,
    /* 显示文字 */
    showText: String
  }
}
</script>
<style lang="stylus" scoped>
.BaseItem
  position relative
  width 100%
  height 100%

  img
    width 100%
    height 100%
    object-fit cover

  .effect
    display flex
    align-items center
    justify-content center
    width 100%
    height 100%
    opacity 0
    position absolute
    background #fff
    transition opacity 0.8s

    &:hover
      opacity 1
</style>
