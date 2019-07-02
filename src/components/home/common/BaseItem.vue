<template>
  <div class="BaseItem">
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
  img
    width 100%
    height 100%
    object-fit cover
</style>
