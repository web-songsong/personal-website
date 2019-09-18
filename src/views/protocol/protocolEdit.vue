<template>
  <div class="edit">
    <BasePanel :config="baseConfig" v-if="baseConfig" v-model="fullValue"></BasePanel>
    <div class="other">
      <h1>协议内容<span>请使用word文档选择性粘贴为html</span></h1>
      <div class="btns">
        <el-button @click="isPreview = true">预 览</el-button>
        <el-button type="primary" @click="generate">生 成</el-button>
      </div>
    </div>
    <div class="edit">
      <Editor v-model="textValue"></Editor>
    </div>
    <PreviewPane v-model="isPreview" :textHtml="textValue"></PreviewPane>
  </div>
</template>
<script>
import Editor from '@/components/Editor'
import BasePanel from '@/components/protocol/BasePanel'
import PreviewPane from '@/components/protocol/PreviewPane'
import { list } from '@/assets/json/protocolBase.json'
import { wordProcess } from '@/assets/utils/wordProcess'

export default {
  components: {
    Editor,
    BasePanel,
    PreviewPane
  },
  data() {
    return {
      textValue: null,
      baseConfig: list,
      fullValue: {},
      isPreview: false,
      htmlValue: null,
      verifyResult: true
    }
  },
  computed: {
    htmlTemplate () {
      return `
      <!DOCTYPE html>
        <html lang="en">
          <head>
            <meta charset="utf-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width,initial-scale=1.0">
            <title>${this.fullValue.urlTitle || '无题'}</title>
            <style>
              table {
                border-top: 1px solid #ccc;
                border-left: 1px solid #ccc;
                width: auto!important;
              }
              th, td {
                border-bottom: 1px solid #ccc;
                border-right: 1px solid #ccc;
              }
            </style>
          </head>
          <body>
            <div id="protocol">protocolcontent</div>
          </body>
        </html>`
    },
    fileName () {
      return this.fullValue.name && `${this.fullValue.name}.html`
    }
  },
  methods: {
    generate () {
      if (this.textValue === '' || this.textValue === null) {
        alert('请填入协议内容')
        return
      }
      
      this.baseConfig.forEach(item => {
        if (item.content) {
          item.content.forEach(i => {
            if (i.mandatory && (this.fullValue[i.key] === undefined || this.fullValue[i.key] === null) && this.verifyResult) {
              this.verifyResult = false
              alert(`请填入${i.title}`)
            } else {
              this.verifyResult = true
            }
          })
        }

      }) 
      let htmlContent = this.htmlTemplate.replace('protocolcontent', this.textValue)
      let virtualLink = document.createElement('a')
      virtualLink.download = this.fileName
      virtualLink.style.display = 'none'
      // console.log(htmlContent)
      let blob = new Blob([htmlContent])
      virtualLink.href = URL.createObjectURL(blob)
      document.body.appendChild(virtualLink)
      virtualLink.click()
      document.body.removeChild(virtualLink)
    }
  },
  watch: {
    textValue () {
      this.htmlValue = wordProcess(this.textValue)
    }
  }
}
</script>
<style lang="less" scoped>
.other {
  padding-bottom: 15px;
  width: 100%;
  vertical-align: middle;
  h1 {
  padding: 20px 0;
  float: left;
  span {
    color: #969696;
    font-size: 12px;
    margin-left: 10px;
  }
  }
  .btns {
    margin-left: 50px;
    padding: 10px 0;
    float: right;
  }
}
.edit {
  clear: both;

}
</style>