<template>
  <div class="textWrap">
    {{text.replace(/ /g,'&nbsp;')}}
  </div>
</template>
<script>
export default {
  name: 'textWrap',
  props: {
    text: {
      type: String,
      default: 'text'
    }
  }
}
</script>
<style lang="less" scoped>
.textWrap {
  box-sizing: border-box;
  width: 100%;
  min-height: 40px;
  justify-content: center;
  line-height: 40px;
}
</style>
