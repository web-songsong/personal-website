<template>
  <div id="app">
    <router-link to="/activity">toff activity</router-link>
    <router-view />
  </div>
</template>

<style lang="less" scoped>
.header-wrap {
  padding: 0 30px;

  .header {
    color: #409eff;
    line-height: 60px;
    height: 100%;
    font-size: 40px;
    font-weight: 700;
    box-sizing: border-box;
    border-bottom: 1px solid #dcdfe6;
  }
}
.menu-wrap {
  padding-left: 30px;
}
</style>