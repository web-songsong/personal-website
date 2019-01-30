<template>
  <div class="hideShow">

    <el-collapse>
      <el-collapse-item title="例子"
                        name="1">
        <slot name="example"></slot>
      </el-collapse-item>
      <el-collapse-item title="答案"
                        name="2">
        <slot name="answer"></slot>
      </el-collapse-item>
    </el-collapse>
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
