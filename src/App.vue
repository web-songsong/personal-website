<template>
  <div class="app">
    <div class="shade"></div>
    <router-view />
  </div>
</template>
<script>
export default {}
</script> 
<style lang="less" scoped>
.shade {
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background-color: #212931;
  background-image: url(./assets/images/overlay.png),
    linear-gradient(0deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)),
    url(./assets/images/bg.jpg);
  background-size: auto, auto, 100% auto;
  background-position: center, center, top center;
  background-repeat: repeat, no-repeat, no-repeat;
  background-attachment: scroll, scroll, scroll;
  z-index: -1;
  @media screen and (max-width: 915px) {
    background-size: auto, auto, auto 175%;
  }
}
</style>
