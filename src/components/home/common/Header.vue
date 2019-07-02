<template>
  <div class="Header">
    <div class="logo">CS</div>
    <div class="menu">
      <div class="menu-item">1a;sdfj</div>
      <div class="menu-item">2qwerqr</div>
      <div class="menu-item">3ouoiupasdfasdf</div>
    </div>
  </div>
</template>
<script>
export default {}
</script>

<style lang="stylus" scoped>
.Header
  height 76px
  display flex
  justify-content space-between
  line-height 76px

  margin-bottom, .logo
    color rgba(0, 0, 0, 0.9)
    font-weight 800
    font-size 28px
    letter-spacing 0.5px

  .menu
    min-width 100px
    display flex

    .menu-item
      font-size 16px
      font-weight 300
      letter-spacing 1.5px
      color rgba(0, 0, 0, 0.5)
      margin 0 8px

      &:hover
        color rgba(0, 0, 0, 0.7)
</style>
