<template>
  <div class="home-content">
    <div class="item-wrap"
         @click="handleJump(item)"
         v-for="(item,key) in barList"
         :key="key">
      <div class="img-wrap">
        <img :src="item.imgUrl || defaultImg"
             :alt="item.title">
        <div class="shade">
          <img src="@/assets/images/home/link-img.png"
               alt="">

        </div>
      </div>
      <div class="content">
        <div class="content-title">{{item.title}}</div>
        <div class="content-sketch">
          {{item.content}}
        </div>
      </div>
      <div class="tail">
        查看详情
      </div>
    </div>
  </div>
</template>

<script>
  import defaultImg from '@/assets/images/pic06.jpg'

  export default {
    data() {
      return {
        defaultImg,
        barList: [
          {
            title: 'charmingsong blog',
            imgUrl: 'https://blog.websong.xin/img/bg.jpg',
            content: '生活需要文字添加色彩',
            href: 'https://blog.websong.xin/'
          },
          // {
          //   title: 'song-vue-template',
          //   content:
          //     '使用组件 Demo 快速体验交互细节；使用前端框架封装的代码帮助工程师快速开发。',
          //   href: 'https://ui.websong.xin'
          // }
        ]
      }
    },
    methods: {
      handleJump(item) {
        if (item.href) {
          window.open(item.href)
        } else {
          alert('目标文档还在努力描述')
        }
      }
    }
  }
</script>

<style lang="less"
       scoped>
  .home-content {
    cursor: pointer;
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
        height: 200px;
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
          display: flex;
          justify-content: center;
          align-items: center;

          img {
            width: 75px;
            height: 75px;
          }

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
        padding: 10px 30px 10px;
        overflow: hidden;
        color: #2f1616;

        .content-title {
          font-family: 'Playfair Display', serif;
          font-size: 28px;
          line-height: 35px;
        }

        .content-sketch {
          margin-bottom: 40px;
          line-height: 21px;
          font-size: 15px;
          font-family: Arial, Helvetica, sans-serif;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 9;
          -webkit-box-orient: vertical;
          @media screen and (max-width: 735px) {
            display: none;
          }
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