<script>
import Menu from '@/components/layout/Menu'
import CabinetAuth from '@/components/cabinet/CabinetAuth'

export default {
  name: 'Cabinet',
  components: { Menu, CabinetAuth }
}
</script>

<template>
  <div class="layout">

    <Menu />
    <CabinetAuth />
  </div>
</template>

<style scoped lang="scss">
.layout {
  display: flex;
  overflow: hidden;
}
</style>
