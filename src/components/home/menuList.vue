<template>
  <div class="menu_list">
    <div class="menu-btn"
         @click="isVisible = !isVisible">
      MENU
    </div>
    <svt-drawer v-model="isVisible">
      <div class="menu">

      </div>
    </svt-drawer>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isVisible: false
    }
  }
}
</script>

<style lang="stylus" scoped>
.menu_list
  .menu-btn
    position absolute
    display flex
    align-items center
    top 0
    right 0
    color #fff
    height 4em
    line-height 4em
    font-size 36px
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

  .menu
    width 800px
</style>
