<template>
  <div class="List">
    <BaseItem v-for="(item,key) in list"
              :key="key"
              :uri="item.uri" />
  </div>
</template>
<script>
import { BaseItem } from './common'
export default {
  components: {
    BaseItem
  },
  data() {
    return {
      list: [
        { uri: 'http://pic.58pic.com/58pic/13/82/74/92q58PICeSI_1024.jpg' },
        { uri: 'http://pic25.nipic.com/20121117/9252150_165726249000_2.jpg' },
        { uri: 'http://pic.58pic.com/58pic/13/82/74/92q58PICeSI_1024.jpg' },
        { uri: 'http://pic25.nipic.com/20121117/9252150_165726249000_2.jpg' },
        { uri: 'http://pic.58pic.com/58pic/13/82/74/92q58PICeSI_1024.jpg' },
        { uri: 'http://pic25.nipic.com/20121117/9252150_165726249000_2.jpg' },
        { uri: 'http://pic.58pic.com/58pic/13/82/74/92q58PICeSI_1024.jpg' },
        { uri: 'http://pic25.nipic.com/20121117/9252150_165726249000_2.jpg' }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
.List
  display flex
  flex-flow wrap

  .BaseItem
    height 250px
    margin 1%
    flex 0 0 48%
</style>
