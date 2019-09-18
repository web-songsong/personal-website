<template>
  <div class="editor" id='myEditor'>

  </div>
</template>
<script>
export default {
  props: {
    content: String
  },
  model: {
    prop: 'content',
    event: 'change'
  },
  data () {
    return {

    }
  },
  mounted () {
    let Editor = this.$wangEditor
    let editor = new Editor('#myEditor')
    editor.customConfig = {
      menus: [
        'head', // 标题
        'bold', // 粗体
        'underline', // 下划线
        'foreColor', // 文字颜色
        'justify', // 对齐方式
        'image', // 插入图片
        'table', // 表格
        'undo', // 撤销
        'redo' // 重复
      ]
    }
    editor.customConfig.pasteFilterStyle = false
  
    editor.customConfig.uploadImgShowBase64 = true   // 使用 base64 保存图片
    editor.customConfig.pasteFilterStyle = false
    editor.customConfig.onchange = (html) => {
      this.$emit('change', editor.txt.html())
    }
    editor.create()
  }
}
</script>

<style lang="less" scoped>
  .editor {
    width: 100%;
    height: 100%;
    clear: both;
  }
</style>
<style lang="less">

  .ql-editor {
    height: 100%;
  }
  .w-e-text-container {
    height: 633px!important;
  }
</style>
