<template>
  <el-card class="propertyTool">
    <div slot="header">
      <span>工作区</span>
    </div>
    <el-tabs v-model="tabsActiveName"
             label-width="80px"
             type="border-card">
      <template v-for="config in configs">
        <el-tab-pane v-for="(propertys, key) in config"
                     :key="key"
                     :label="propertys.title"
                     :name="key">

          <el-collapse v-model="collapseActiveNames"
                       accordion>
            <el-collapse-item v-for="(item, index) in propertys.data"
                              :key="index"
                              :title="item.title"
                              :name="index">

              <template v-if="key!=='propsData'">
                <template v-for="(val, itemKey) in item.data">

                  <div class="rowItem"
                       :key="itemKey">

                    <el-tag type="info"
                            class="el-tag">{{val.title}}</el-tag>

                    <!-- type : color  -->
                    <template v-if="val.type==='color'">
                      <el-color-picker show-alpha
                                       v-model="styleFragment[val.name]"></el-color-picker>
                    </template>

                    <!-- type : img -->
                    <template v-else-if="val.type==='img'">
                      <el-upload class="avatar-uploader"
                                 action=''
                                 :auto-upload="false"
                                 :show-file-list="false"
                                 :on-change="handleAvatarChange">
                        <img v-if="imageUrl"
                             :src="imageUrl"
                             class="avatar">
                        <i v-else
                           class="el-icon-plus avatar-uploader-icon"></i>
                      </el-upload>

                    </template>

                    <!-- type: select  -->
                    <template v-else-if="val.type==='select'">
                      <el-select v-model="styleFragment[val.name]"
                                 :placeholder="val.default"
                                 size="small">
                        <el-option v-for="item in val.options"
                                   :key="item.value"
                                   :label="item.label"
                                   :value="item.value"
                                   :disabled="item.disabled">
                        </el-option>
                      </el-select>
                    </template>

                    <!-- type: button  -->
                    <template v-else-if="val.type==='button'">

                      <el-button size="small"
                                 type="primary"
                                 :icon="val.name==='top'?'el-icon-top':'el-icon-bottom'"
                                 @click="changeTemplateSite(val.name==='top')"
                                 circle></el-button>

                    </template>

                    <!-- type rotate -->

                    <template v-else-if="val.type==='transform'">
                      <el-input-number v-model="transformType[val.name]"
                                       :min="0"
                                       :max="360"
                                       :placeholder="val.default||'0'"
                                       label="描述文字"></el-input-number>
                    </template>
                    <!-- type: input (default) -->
                    <template v-else>
                      <el-input size="small"
                                v-model="styleFragment[val.name]"
                                :placeholder="val.default">
                      </el-input>
                    </template>
                  </div>
                  <template v-if="val.type==='select' && styleFragment[val.name]==='absolute'">

                    <template v-for="site in val.data">
                      <div class="rowItem"
                           :key="site.name">
                        <el-tag type="info"
                                class="el-tag">{{site.title}}</el-tag>
                        <el-input size="small"
                                  :key="key"
                                  v-model="styleFragment[site.name]"
                                  :placeholder="site.default"></el-input>
                      </div>
                    </template>
                  </template>
                </template>
              </template>
              <template v-else>
                <div class="rowItem"
                     v-for="(val, itemKey) in item.data"
                     :key="itemKey">

                  <el-tag type="info"
                          class="el-tag">{{val.title}}</el-tag>

                  <el-input size="small"
                            v-model="propsData[val.name]"
                            :placeholder="val.default"></el-input>
                </div>
              </template>
            </el-collapse-item>

          </el-collapse>

        </el-tab-pane>
      </template>
    </el-tabs>
  </el-card>
</template>
<script>
import baseProperty from './libs/baseProperty.json'
import propertyJSON from './libs/textWrap/property.json'
import bodyStyle from './libs/propertyBody'
import allProperty from './libs/allProperty'
import { mapMutations, mapState } from 'vuex'
export default {
  data() {
    return {
      propertyJSON,
      tabsActiveName: '',
      collapseActiveNames: '',
      styleFragment: {},
      propsData: {},
      imageUrl: '',
      lock: false,
      transformType: {}
    }
  },
  model: {
    prop: 'propertyItemNum',
    event: 'change'
  },
  props: {
    propertyItemNum: {
      type: Number
    },
    propertyItemName: String
  },
  computed: {
    ...mapState({
      tems: state => state.activityEdit.tems,
      bodyStyle: state => state.activityEdit.bodyStyle,
      bgImageData: state => state.activityEdit.bgImageData,
      bodyBgImageData: state => state.activityEdit.bodyBgImageData
    }),
    configs() {
      let rnArr = []
      if (this.propertyItemNum < 0) {
        rnArr.push(bodyStyle)
      } else {
        rnArr = [baseProperty, allProperty[this.propertyItemName]]
      }
      this.tabsActiveName = Object.keys(rnArr[0])[0]
      return rnArr
    }
  },
  methods: {
    ...mapMutations({
      setStyle: 'ACTIVITY_SET_STYLE',
      setProps: 'ACTIVITY_SET_PROPDATA',
      setBodyData: 'ACTIVITY_SET_BGIMAGES',
      changeTemsTop: 'ACTIVITY_CHANGE_TEMS_TOP',
      changeTemsBottom: 'ACTIVITY_CHANGE_TEMS_BOTTOM'
    }),
    handleAvatarChange(file) {
      this.imageUrl = URL.createObjectURL(file.raw)
      this.setBodyData({
        index: this.propertyItemNum,
        data: file.raw,
        blobUrl: this.imageUrl
      })
    },
    changeTemplateSite(flag) {
      let callback
      if (flag) {
        callback = () => {
          this.$emit('change', this.propertyItemNum - 1)
        }
        this.changeTemsTop({ index: this.propertyItemNum, callback })
      } else {
        callback = () => {
          this.$emit('change', this.propertyItemNum + 1)
        }
        this.changeTemsBottom({ index: this.propertyItemNum, callback })
      }
    }
  },
  mounted() {
    this.tabsActiveName = Object.keys(this.configs[0])[0]
  },
  watch: {
    styleFragment: {
      handler(val, oldVal) {
        if (this.lock) {
          this.lock = false
          return
        }
        this.setStyle({ index: this.propertyItemNum, data: val })
      },
      deep: true
    },
    transformType: {
      handler(val, oldVal) {
        let typeMap = Object.entries(val)
        if (typeMap.length > 0) {
          let str
          switch (typeMap[0][0]) {
            case 'rotate':
              str = `rotate(${typeMap[0][1]}deg)`
              this.styleFragment['transform'] = str
              break
          }
          this.setStyle({
            index: this.propertyItemNum,
            data: this.styleFragment
          })
        }
      },
      deep: true
    },
    propsData: {
      handler(val, oldVal) {
        this.setProps({ index: this.propertyItemNum, data: val })
      },
      deep: true
    },
    propertyItemNum(val) {
      this.lock = true
      if (val < 0) {
        this.styleFragment = this.bodyStyle
        const blobUrl = this.bodyBgImageData.blobUrl
        this.imageUrl = blobUrl || ''
      } else {
        this.styleFragment = this.tems[val]['style'] || {}
        this.propsData = this.tems[val]['propsData'] || {}
        const bgImg = this.tems[val]['bgImageData']
        this.imageUrl = bgImg ? bgImg.blobUrl : ''
      }
    }
  }
}
</script>
<style lang="less" scoped>
.propertyTool {
  width: 350px;
  .rowItem {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    .el-tag {
      margin-right: 10px;
    }
    .block {
      width: 130px;
    }
  }
}
</style>
<style>
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 100%;
  height: 100%;
  display: block;
}
</style>
