<template>
  <div class="wrap-border">
    <div class="border top "></div>
    <div class="border bottom"></div>
    <div class="border left "></div>
    <div class="border right"></div>
  </div>
</template>

<script>
  export default {
    name: "wrap-border"
  }
</script>

<style scoped
       lang="less">

  .wrap-border {

    .border {
      position: fixed;
      z-index: 9999;
    }

    .top {
      top: 0;
      left: 0;
      width: 100%;
      height: 20px;
      background: url('../../assets/images/home/border.svg') repeat-x 50% 50%;
    }

    .border {
      bottom: 0;
      left: 0;
      height: 20px;
      width: 100%;
      top: auto;
      background: url('../../assets/images/home/border.svg') repeat-x 50% 50%;
    }

    .left {
      left: 0;
      top: 0;
      width: 20px;
      height: 100%;
      background: url('../../assets/images/home/border-vert.svg') repeat-y 50% 50%;
    }

    .right {
      right: 0;
      top: 0;
      width: 20px;
      height: 100%;
      background: url('../../assets/images/home/border-vert.svg') repeat-y 50% 50%;
    }

  }


</style>