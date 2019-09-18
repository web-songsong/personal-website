<template>
  <div class="Stage"
       @dragover.prevent
       @click="bgclick"
       @drop="drop"
       :style="bodyStyle">
    <template v-for="(item,key) in tems">
      <component class="component-wrap"
                 :is="item.name"
                 :style="item.style"
                 v-bind="item.propsData"
                 @click.native.stop="settingItem(key,item.name)"
                 :key="key" />
    </template>
  </div>

</template>

<script>
import tem from '@/components/activity/libs/'
import { mapState, mapMutations } from 'vuex'

export default {
  data() {
    return {}
  },
  components: {
    ...tem
  },
  computed: {
    ...mapState({
      tems: state => state.activityEdit.tems,
      bodyStyle: state => state.activityEdit.bodyStyle
    })
  },
  methods: {
    ...mapMutations({
      pushTmes: 'ACTIVITY_PUSH_TEMS'
    }),
    bgclick() {
      this.$emit('openPropertyTool', { index: -1 })
    },
    settingItem(index, name) {
      this.$emit('openPropertyTool', { index, temName: name })
    },
    drop(e) {
      const data = {
        name: e.dataTransfer.getData('name')
      }
      this.pushTmes(data)
    }
  }
}
</script>

<style lang="less" scoped>
div,
span {
  background-repeat: no-repeat;
}
.Stage {
  width: 375px;
  height: 812px;
  position: relative;
  border: 1px solid;
  overflow-x: hidden;
  overflow-y: auto;
  margin-left: 20px;
  margin-right: 20px;
  .component-wrap {
    border: 1px dashed #ccc;
    cursor: pointer;
  }
}
</style>
