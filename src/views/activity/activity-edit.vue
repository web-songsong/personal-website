<template>
  <div class="activity-edit">
    <div class="generate-button">
      <button type="primary"
              plain
              @click="generate">生成</button>
    </div>
  </div>
</template>
<script>
import { mapActions } from 'vuex'

export default {
  name: 'Activity',
  methods: {
    ...mapActions(['activity_generate']),
    generate() {
      this.activity_generate()
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
    margin-top: 20px;
  }
}
</style>