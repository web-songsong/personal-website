<template>
  <div class="base" v-if="config">
    <div v-for="(item, index) in config" :key="index" :class="['one', {'distance': index === 0}]">
      <h1>{{item.title}}</h1>
      <template v-if="item.content">
        <div class="line" v-for="(it, idx) in item.content" :key="idx">
          <p><span v-show="it.mandatory" class="must">*</span>{{it.title}}</p>
          <el-input v-if="it.type === 'input'" v-model="fullValue[it.key]" :placeholder="it.placeHolder"></el-input>
          <el-switch v-if="it.type === 'switch'" v-model="fullValue[it.key]"></el-switch>
          <template v-if="it.type === 'switch' && fullValue[it.key] && it.children">
            <div v-for="(i, x) in it.children" :key="x" class="inline">
              <p><span class="must" v-show="i.mandatory">*</span>{{i.title}}</p>
              <el-input v-if="i.type === 'input'" v-model="fullValue[i.key]" :placeholder="i.placeHolder"></el-input>
            </div>
          </template>
        </div>
      </template>
      
    </div>
  </div>
</template>
<script>
export default {
  model: {
    prop: 'fullValue',
    event: 'change'
  },
  props: {
    config: Array,
    fullValue: Object
  },
  watch: {
    fullValue() {
      this.$emit('change', this.fullValue)
    }
  },
}
</script>
<style lang="less" scoped>
  .base {
    background: #fff;
    vertical-align: top;
    p {
      font-size: 15px;
      margin: 10px 0;
    }
  }
  h1 {
    font-size: 18px;
    color: #323232;
    margin: 10px 0;
  }
  .line {
    margin: 20px 0 30px 0;
  }
  .one {
    display: inline-block;
    vertical-align: top;
  }
  .must {
    color: red;
    margin-right: 2px;
  }
  .el-input {
    width: 340px;
  }
  .distance {
    margin-right: 50px;
  }
</style>
