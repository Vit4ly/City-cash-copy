<script>
import GameTile from '@/components/game/GameTile';
import GameBuild from '@/components/game/GameBuild';
import GameCollect from '@/components/game/GameCollect'

import { createNamespacedHelpers } from 'vuex';

const { mapState, mapGetters, mapMutations } = createNamespacedHelpers('game')

const ROWS_ARRAY = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]

export default {
  name: 'Game',

  components: {
    GameCollect,
    GameBuild,
    GameTile
  },

  data: () => ({
    rows: ROWS_ARRAY,
    scale: 0.865
  }),

  computed: {
    ...mapState([
      'selectedId'
    ]),

    ...mapGetters([
      'selectedBuilding'
    ]),

    hasBuilding () {
      return !!this.selectedBuilding;
    }
  },

  mounted () {
    setTimeout(() => this.resizeGame(), 30);
  },

  methods: {
    ...mapMutations([
      'setSelectedId',
    ]),

    selectTile (id) {
      this.setSelectedId(id);
    },

    resizeGame () {
      const windowWidth = window.innerWidth;
      const menuWidth = document.getElementById('left-menu').offsetWidth;
      this.scale = 1 - menuWidth / windowWidth;
    }
  }
}
</script>

<template>
  <div
    ref="game"
    class="game"
  >
    <div
      class="game__layout"
      :style="`transform: scale(${scale})`"
    >
      <div
        v-for="(row, idx) in rows"
        :key="idx"
        class="game__row"
      >
        <GameTile
          v-for="(item, itemIdx) in (new Array(row))"
          :key="idx * 10 + itemIdx"
          :id="idx * 10 + itemIdx"
          class="game__tile"
          @select-tile="selectTile"
        />
        <div
          v-if="idx < 9"
          class="game__road game__road_r"
          :style="{'right': `calc(50% - ${49 + 67.5 * idx}px)`}"
        ></div>
        <div
          v-if="idx < 9"
          class="game__road game__road_l"
          :style="{'left': `calc(50% - ${87 + 67.5 * idx}px)`}"
        ></div>
      </div>

      <div class="game__big-island"></div>
      <div class="game__island"></div>
      <div class="game__airplane"></div>
      <div class="game__ship-r"></div>
      <div class="game__ship-l"></div>
    </div>

    <div class="game__actions">
      <GameCollect
        v-if="hasBuilding"
        :building="selectedBuilding"
      />
      <GameBuild v-else />
    </div>
  </div>
</template>

<style scoped lang="scss">
.game {
  width: calc(100% - 64px);
  background: #F5F7FF;
  background-size: cover;
  border-radius: 60px;
  margin: 32px;
  overflow: hidden;

  &__actions {
    margin: 20px 52px;
  }

  &__layout {
    width: 1580px;
    background: url('../../assets/game/game-layout-full.png') no-repeat;
    background-position-x: 51px;
    background-position-y: 34px;
    background-size: 1486px;
    padding-top: 90px;
    padding-bottom: 92px;
    margin: auto;
    transform-origin: 0 0;
  }

  &__row {
    display: flex;
    justify-content: center;
    margin-top: -20px;
    position: relative;
  }

  &__tile {
    margin-right: 38px;
    flex-shrink: 0;
  }

  &__road {
    position: absolute;
    width: 670px;
    height: 387px;
    top: 29px;
    background-repeat: no-repeat;

    &_r {
      background: url('../../assets/game/road-r.png');
    }

    &_l {
      background: url('../../assets/game/road-l.png');
    }
  }

  &__big-island {
    width: 213px;
    height: 127px;
    background: url('../../assets/game/island-1.png') no-repeat;
    position: absolute;
    top: 100px;
    left: 200px;
  }

  &__island {
    width: 213px;
    height: 140px;
    background: url('../../assets/game/island-2.png') no-repeat;
    position: absolute;
    top: 800px;
    left: 1200px;
  }

  &__ship-l {
    width: 239px;
    height: 235px;
    background: url('../../assets/game/ship-l.png') no-repeat;
    position: absolute;
    top: 700px;
    left: 100px;
  }

  &__ship-r {
    width: 233px;
    height: 161px;
    background: url('../../assets/game/ship-r.png') no-repeat;
    position: absolute;
    top: 600px;
    left: 1400px;
  }

  &__airplane {
    width: 173px;
    height: 143px;
    background: url('../../assets/game/airplane.png') no-repeat;
    position: absolute;
    top: 100px;
    left: 1200px;
  }
}
</style>
