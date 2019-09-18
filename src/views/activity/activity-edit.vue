<template>
  <div class="activity-edit">
    <div class="generate-button">
      <el-button type="primary"
                 plain
                 @click="generate">生成</el-button>
    </div>
    <div class="tool-wrap">

      <baseTool />
      <stageTool @openPropertyTool="openPropertyTool" />
      <propertyTool v-if="showProperty"
                    v-model="propertyItemNum"
                    :propertyItemName="propertyItemName" />
    </div>

  </div>
</template>
<script>
import baseTool from '@/components/activity/baseTool'
import stageTool from '@/components/activity/stageTool'
import propertyTool from '@/components/activity/propertyTool'
import { mapActions } from 'vuex'

export default {
  components: {
    baseTool,
    stageTool,
    propertyTool
  },
  data() {
    return {
      showProperty: true,
      propertyItemNum: -1,
      propertyItemName: ''
    }
  },
  methods: {
    ...mapActions(['activity_generate']),
    openPropertyTool({ index, temName }) {
      this.propertyItemNum = index
      this.propertyItemName = temName
      this.showProperty = true
    },
    generate() {
      this.activity_generate()
    },
    changePropertyItemNum(num) {
      this.propertyItemNum = num
    }
  }
}
</script>
<style lang="less" scoped>
.activity-edit {
  min-width: 1100px;

  .tool-wrap {
    display: flex;
  }
  .generate-button {
    margin-bottom: 20px;
  }
}
</style>