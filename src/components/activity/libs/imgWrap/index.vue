<template>
  <div class="imgWrap">
    <img v-if="url"
         :src="url">
  </div>
</template>
<script>
export default {
  name: 'imgWrap',
  props: {
    url: String
  }
}
</script>
<style lang="less" scoped>
.imgWrap {
  box-sizing: border-box;
  width: 100%;
  min-height: 40px;
  justify-content: center;
  line-height: 40px;
  img {
    width: 100%;
    height: 100%;
  }
}
</style>
