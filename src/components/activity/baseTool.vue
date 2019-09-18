<template>
  <el-card class="baseTool">
    <div slot="header">
      <span>组件库</span>
    </div>

    <el-collapse v-model="activeNames"
                 accordion>
      <el-collapse-item v-for="(item, index) in libsJson"
                        :key="index"
                        :title="item.name"
                        :name="index">

        <template v-for="(com, key) in item.template">
          <div class="componentWraper"
               :key="key">
            <el-tag type="success">
              {{ com.t_name }}
            </el-tag>
            <component class="componentsClass"
                       draggable
                       :is="com.t_vue_name"
                       @dragstart.native="dragstart($event,com)" />
          </div>

        </template>
      </el-collapse-item>

    </el-collapse>

  </el-card>

</template>
<script>
import libsJson from './libs/libs.json'
import tem from '@/components/activity/libs/'
export default {
  components: {
    ...tem
  },
  data() {
    return {
      libsJson,
      activeNames: ''
    }
  },
  methods: {
    dragstart(e, item) {
      e.dataTransfer.setData('name', item.t_vue_name)
    }
  }
}
</script>
<style lang="less" scoped>
.baseTool {
  width: 300px;
  .componentWraper {
    display: flex;
    width: 100%;
    align-items: center;
    .componentsClass {
      box-sizing: border-box;
      border: 1px solid;
      margin: 10px 10px;
    }
  }
}
</style>
