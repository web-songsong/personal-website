<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
import Nav from '@/components/Nav'
import Header from '@/components/Header'

export default {
  components: {
    Nav,
    Header
  },
  data() {
    return {}
  }
}
</script>
