<template>
  <div class="header">
    <h4 class="project">AMS 动态活动管理系统</h4>
    <div class="userinfo">
      <div class="img">
        <img src="../assets/img/shan.png">
      </div>
      <h5 class="name">name</h5>
    </div>
  </div>
</template>
<script>

export default {
  
}
</script>
<style lang="less" scoped>
  .header {
    width: 100%;
    background: #555C63;
    color: #fff;
    position: relative;
    padding: 10px 25px;
  }
  .userinfo {
    display: inline-block;
    float: right;
  }
  .img {
    display: inline-block;
    width: 40px;
    height: 40px;
    border-radius: 40px;
    overflow: hidden;
    background: #fff;
    vertical-align: middle;
    img {
      width: 40px;
      display: inline-block;
    }
  }
  .name {
    display: inline-block;
  }
  .project {
    display: inline-block;
    vertical-align: middle;
    line-height: 40px;
  }
</style>
