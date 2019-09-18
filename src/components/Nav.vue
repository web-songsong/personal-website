<template>
  <div class="nav">
    <el-row class="tac">
      <el-col>
        <el-menu class="el-menu-vertical-demo"
                 style="width:230px;float:left;overflow-y:auto;"
                 background-color="#555C63"
                 @open="handleOpen"
                 @close="handleClose"
                 text-color="#fff"
                 :default-active="$route.path"
                 active-text-color="#ffd04b">
          <el-submenu v-for="item in list"
                      :key="item.id"
                      :index="item.id">
            <template v-if="item.children">
              <template slot="title">
                <i class="el-icon-document"></i>
                <span>{{item.title}}</span>
              </template>
              <el-menu-item v-for="(it) in item.children"
                            :key="it.id"
                            @click="toClick(it.route)"
                            :index="it.route">{{it.title}}</el-menu-item>
            </template>
            <template v-else>
              <el-menu-item :index="item.route"
                            @click="toClick(item.route)">{{item.title}}</el-menu-item>
            </template>
          </el-submenu>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  props: {
    list: Array
  },
  computed: {
    menuHeight() {
      console.log(window.body.clientHeight)
    }
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath)
    },
    toClick(route) {
      this.$router.push(route)
    }
  }
}
</script>
<style lang="less" scoped>
.nav {
  background: #555c63;
  height: 100%;
}
</style>
<style>
.el-menu-vertical-demo {
  overflow-y: inherit !important;
}
</style>