<script>
import GameBuildCard from '@/components/game/GameBuildCard'

export default {
  name: 'GameCollect',

  components: {
    GameBuildCard
  },

  props: {
    building: {
      type: Object,
      default: () => ({})
    }
  }
}
</script>

<template>
  <div>
    <GameBuildCard
      :is-collect="true"
      :params="{type: building.type}"
    />
  </div>
</template>

<style scoped>

</style>
