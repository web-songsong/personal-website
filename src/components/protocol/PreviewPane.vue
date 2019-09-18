<template>
  <div class="preview" v-show="value">
    <div class="simulation_page" v-html="textHtml">

    </div>
    <div class="close">
      <el-button type="primary" @click="close">关闭预览</el-button>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    value: {
      type: Boolean,
      default: false
    },
    textHtml: {
      type: String,
      default: ''
    }
  },
  methods: {
    close() {
      this.$emit('input', false)
    }
  }
}
</script>
<style lang="less" scoped>
  .preview {
    width: 100vw;
    height: 100vh;
    position: absolute;
    z-index: 99999;
    background: rgba(0, 0, 0, 0.5);
    top: 0;
    left: 0;
  }
  .simulation_page {
    width: 375px;
    height: 667px;
    background: #fff;
    margin: 100px auto 50px auto;
    overflow-y: scroll;
  }
  .close {
    text-align: center;
  }
</style>
<style lang="less">
  .preview table, .preview td, .preview th {
    width: auto!important;
  }
</style>