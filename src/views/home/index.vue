<template>
  <div class="home">
    <div class="scrn"
         :class="{isOpacity:isOpacity}"></div>
    <scrnOne message="charming song" />
    <menuList />
  </div>
</template>

<script>
import scrnOne from '@/components/home/scrnOne.vue'
import menuList from '@/components/home/menuList.vue'
export default {
  name: 'home',
  components: {
    scrnOne,
    menuList
  },
  data() {
    return {
      isOpacity: false
    }
  },
  mounted() {
    setTimeout(() => {
      this.isOpacity = true
    }, 1000)
  },
  methods: {
    menuClick() {
      console.log('af')
    }
  }
}
</script>

<style lang="stylus" scoped>
.home
  height 100vh
  min-height 35em
  position relative
  bgImg('/home/banner.jpg')

  .scrn
    background #2e3842
    width 100%
    height 100%
    opacity 0.9
    transition opacity 2s ease 1s

  .isOpacity
    opacity 0.5
</style>
