<template>
  <div class="wrap-border">
    <div class="frames">
      <div class="border top "></div>
      <div class="border bottom"></div>
      <div class="border left "></div>
      <div class="border right"></div>
    </div>
    <div class="corners-cover">
      <div class="corners top"></div>
      <div class="corners bottom"></div>
    </div>
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
    .frames {
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

      .bottom {
        bottom: 0;
        left: 0;
        height: 20px;
        width: 100%;
        transform: rotateZ(180deg);
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
        transform: rotateZ(180deg);
        background: url('../../assets/images/home/border-vert.svg') repeat-y 50% 50%;
      }

    }

    .corners-cover {
      .corners {
        &:after, &:before {
          content: '';
          display: block;
          width: 50px;
          height: 50px;
          position: fixed;
        }
      }

      .top {
        &:before {
          top: 10px;
          left: 10px;
          background: url("../../assets/images/home/corner.svg") no-repeat center center;;

        }

        &:after {
          top: 10px;
          right: 10px;
          transform: rotateZ(90deg);
          background: url("../../assets/images/home/corner.svg") no-repeat center center;;

        }
      }

      .bottom {
        &:before {
          bottom: 10px;
          left: 10px;
          transform: rotateZ(-90deg);
          background: url("../../assets/images/home/corner.svg") no-repeat center center;;
        }

        &:after {
          bottom: 10px;
          right: 10px;
          transform: rotateZ(180deg);
          background: url("../../assets/images/home/corner.svg") no-repeat center center;;
        }

      }
    }

  }


</style>