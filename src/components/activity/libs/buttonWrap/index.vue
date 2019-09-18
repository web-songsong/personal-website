<template>
  <div class="buttonWrap"
       @click="clickHandle">
    {{text.replace(/ /g,'&nbsp;')}}
  </div>

</template>
<script>
export default {
  name: 'buttonWrap',
  props: {
    text: {
      type: String,
      default: 'buasttonasdf'
    },
    url: String
  },
  methods: {
    clickHandle() {
      if (this.url) {
        location.href = this.url
        return
      }
    }
  }
}
</script>
<style lang="less" scoped>
.buttonWrap {
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 40px;
}
</style>
