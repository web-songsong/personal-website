
<template>
  <div class="home-content">
    <div class="item-wrap"
         v-for="(item,key) in barList"
         :key="key">
      <div class="img-wrap">
        <img src="@/assets/images/pic06.jpg">
        <div class="shade"></div>

      </div>
      <div class="content">
        <div class="content-title">{{item.title}}</div>
        <div class="content-sketch">
          Suspendisse porttitor sapien ac lectus euismod imperdiet. Curabitur nec nibh at massa pellentesque accumsan eu id nibh. Donec accumsan ut mi et tincidunt. Aliquam eget metus nec leo tempor bibendum. Phasellus tincidunt lobortis metus. Duis euismod lorem turpis at diam. Suspendisse porttitor sapien ac lectus euismod imperdiet. Curabitur nec nibh at massa pellentesque accumsan eu id nibh. Donec accumsan ut mi et tincidunt. Aliquam eget metus nec leo tempor bibendum. Phasellus tincidunt lobortis metus. Duis euismod lorem turpis at diam. Suspendisse porttitor sapien ac lectus euismod imperdiet. Curabitur nec nibh at massa pellentesque accumsan eu id nibh. Donec accumsan ut mi et tincidunt. Aliquam eget metus nec leo tempor bibendum. Phasellus tincidunt lobortis metus. Duis euismod lorem turpis at diam. Suspendisse porttitor sapien ac lectus euismod imperdiet. Curabitur nec nibh at massa pellentesque accumsan eu id nibh. Donec accumsan ut mi et tincidunt. Aliquam eget metus nec leo tempor bibendum. Phasellus tincidunt lobortis metus. Duis euismod lorem turpis at diam.
        </div>
      </div>
      <div class="tail">
        查看详情
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
          title: 'test'
        },
        {
          title: 'test'
        },
        {
          title: 'test'
        },
        {
          title: 'test'
        },
        {
          title: 'test'
        },
        {
          title: 'test'
        },
        {
          title: 'test'
        }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
.home-content {
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-content: flex-start;

  .item-wrap {
    box-sizing: border-box;
    position: relative;
    margin: 30px 30px;
    width: 300px;
    clip-path: polygon(0 5%, 100% 0, 100% 95%, 0 100%);
    overflow: hidden;

    .img-wrap {
      height: 225px;
      position: relative;
      img {
        width: 100%;
        height: 100%;
      }
      .shade {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(35, 182, 182, 0.4);
        opacity: 0;
        transition: opacity 1s;
        @media screen and (min-width: 735px) {
          &:hover {
            opacity: 1;
          }
        }
      }
    }
    .content {
      box-sizing: border-box;
      width: 100%;
      max-height: 350px;
      background: rgba(20, 225, 225, 0.5);
      padding: 10px 30px 50px;
      overflow: hidden;
      color: #2f1616;

      @media screen and (max-width: 735px) {
        display: none;
      }
      .content-title {
        font-family: 'Playfair Display', serif;
        font-size: 28px;
        line-height: 35px;
      }
      .content-sketch {
        line-height: 21px;
        font-size: 15px;
        font-family: Arial, Helvetica, sans-serif;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 9;
        -webkit-box-orient: vertical;
      }
    }
    .tail {
      font-family: Arial, Helvetica, sans-serif;
      font-size: 15px;
      height: 50px;
      color: #fff;
      background: rgba(20, 225, 225, 0.5);
      line-height: 50px;
      padding: 0 30px;
      @media screen and (min-width: 735px) {
        display: none;
      }
    }
  }
}
</style>