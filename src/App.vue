<template>
  <div id="app">
    <Header></Header>
    <el-container>
      <Nav :list="navList"></Nav>
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </div>
</template>
<script>
import Nav from '@/components/Nav'
import Header from '@/components/Header'

export default {
  components: {
    Nav,
    Header
  },
  data() {
    return {
      navList: [
        {
          title: '协议管理',
          id: '0',
          children: [
            {
              title: '协议列表',
              route: '/protocolList',
              id: '0-1'
            },
            {
              title: '协议添加',
              route: '/protocolEdit',
              id: '0-2'
            }
          ]
        },
        {
          title: '活动管理',
          id: '1',
          children: [
            {
              title: '活动列表',
              route: '/activity/list',
              id: '1-1'
            },
            {
              title: '活动添加',
              route: '/activity/edit',
              id: '1-2'
            }
          ]
        }
      ]
    }
  }
}
</script>
<style src="@/assets/css/reset.css"></style>
<style lang="less" scoped>
#app {
  height: 100vh;
  display: flex;
  flex-direction: column;
  // overflow: hidden;
}
.el-container {
  //  overflow-y: scroll;
}
</style>