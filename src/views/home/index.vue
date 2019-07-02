<template>
  <div class="home">
    <Header />
    <List />
  </div>
</template>
<script>
import { Header } from 'components/home/common'
import List from 'components/home/List'
export default {
  components: {
    Header,
    List
  }
}
</script>
<style lang="stylus" scoped>
.home
  margin 48px
</style>
