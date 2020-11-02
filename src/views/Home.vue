<script>
import Menu from '@/components/layout/Menu'
import Game from '@/components/game/Game'

export default {
  name: 'Home',
  components: {
    Game,
    Menu
  }
}
</script>

<template>
  <div class="layout">
    <Menu />
    <Game />
  </div>
</template>


<style scoped lang="scss">
.layout {
  display: flex;
  overflow: hidden;
}
</style>
