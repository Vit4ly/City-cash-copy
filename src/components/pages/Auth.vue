<script>
import TheHeader from '@/components/layout/TheHeader'
export default {
  name: 'Auth',
  components: { TheHeader }
}
</script>

<template>
  <div>
    <TheHeader />
    <router-view></router-view>
  </div>
</template>

<style scoped lang="scss">

</style>
