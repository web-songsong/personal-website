
<template>
  <div class="home-content">
    <div class="item-wrap">
      <div class="triangle-top"></div>
      <div class="img-wrap">
        <img src="@/assets/images/pic06.jpg">
      </div>
      <div class="content">
        Eget Metus Nec Leo
        Suspendisse porttitor sapien ac lectus euismod imperdiet. Curabitur nec nibh at massa pellentesque accumsan eu id nibh. Donec accumsan ut mi et tincidunt. Aliquam eget metus nec leo tempor bibendum. Phasellus tincidunt lobortis metus. Duis euismod lorem turpis at diam.
      </div>
      <div class="tail">

      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      barList: [
        {
          title: 'home'
        }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
.home-content {
  .item-wrap {
    position: relative;
    width: 360px;
    .triangle-top {
      height: 0;
      position: absolute;

      border-top: 25px solid red;
      border-right: 360px solid transparent;
    }

    .img-wrap {
      height: 225px;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .content {
      width: 100%;
      height: 300px;
      background: #fff;
    }
    .tail {
      width: 100%;
      height: 30px;
    }
  }
}
</style>