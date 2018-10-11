<template>
  <div class="hideShow">

    <div class="example"
         :class="{isExampleShow: show}">
      <b>example:</b>
      <slot name="example"></slot>
    </div>

    <div class="content"
         :class="{isShow: show}">
      <b>answer:</b>
      <slot name="answer"></slot>
    </div>
    <div @click="hideShowFn"
         class="butText"
         @blur="blurFn"
         tabindex="0">
      <div class="but">{{show?'例子':'答案'}}→ </div>
    </div>

  </div>
</template>
<script>
export default {
  data() {
    return {
      show: false
    }
  },
  methods: {
    hideShowFn() {
      this.show = !this.show
    },
    blurFn() {
      this.show = false
    }
  }
}
</script>


<style lang="stylus" scoped>
.hideShow
  margin-bottom 3.5rem
  .example
    overflow hidden
    // transform-origin 0 0
    transform scale(1, 1)
    transition transform 0.5s

  .isExampleShow
    transform scale(1, 0)
    height 0

  .butText
    outline none
    cursor pointer

    .but
      background #ccc
      border-radius 3rem
      text-align center

  .content
    overflow hidden
    height 0
    transform scale(1, 0)
    transition transform 0.5s

  .isShow
    height 100%
    transform scale(1, 1)
</style>
