<template>
  <div class="ScrnOne"
       :class="{ScrnOneAction:isScrnOneAction}">
    <h2 class="ScrnOne_title ">{{message}}</h2>
    <div class="btn">activate</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isScrnOneAction: false
    }
  },
  props: {
    message: {
      type: String,
      default: 'charming song'
    }
  },
  mounted() {
    setTimeout(() => {
      this.isScrnOneAction = true
    }, 500)
  }
}
</script>
<style lang="stylus" scoped>
$pseudo
  content ''
  position absolute
  width 0%
  height 2px
  background #ffffff
  transition width 1s ease 0.5s

.ScrnOne
  box-sizing border-box
  position relative

  &:before
    @extend $pseudo
    top 0
    left 0

  &:after
    @extend $pseudo
    right 0
    bottom 0

  .ScrnOne_title
    font-size 1.75em
    height 2.5em
    font-weight 800
    letter-spacing 0.225em
    text-transform capitalize
    text-align center
    width 100%
    line-height 2.5em
    opacity 0
    transition opacity 0.5s

  .btn
    position absolute
    width 50%
    background #ed4933
    padding 7%
    bottom -100%
    btn()
    left 50%
    transform translate(-50%)
    opacity 0
    transition opacity 0.5s 1.5s

.ScrnOneAction
  .ScrnOne_title, .btn
    opacity 1

  &:before, &:after
    width 100%
</style>

