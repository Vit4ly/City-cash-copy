<script>
import { BUILDING_TYPES } from '@/helpers/game';
import { createNamespacedHelpers } from 'vuex'

const { mapState, mapMutations } = createNamespacedHelpers('game')

export default {
  name: 'GameTile',

  props: {
    id: {
      type: Number,
      required: true
    }
  },

  data: () => ({
    isUnderConstruction: true,
    isHaveTax: false,
    isDoubleMoney: false,
    constructTimer: null,
    timer: ''
  }),

  mounted () {
    this.constructTimer = setInterval(() => {
      this.constructHeartbeat();
    }, 100);
  },

  computed: {
    ...mapState([
      'selectedId',
      'buildings',
      'taxesTiles'
    ]),

    selected () {
      return this.id === this.selectedId;
    },

    hasBuilding () {
      return !!this.buildings.find(item => item.tileId === this.id);
    },

    building () {
      return this.buildings.find(item => item.tileId === this.id) || null;
    },

    buildingType () {
      return this.hasBuilding ? BUILDING_TYPES[this.building.type].name : null;
    },

    showTax () {
      return this.taxesTiles.indexOf(this.id) !== -1;
    },

    randomTree () {
      return Math.floor(Math.random() * Math.floor(3)) + 1;
    },

    isCar () {
      return Math.random() >= 0.5;
    },

    randomCar () {
      return Math.floor(Math.random() * Math.floor(4)) + 1;
    }
  },

  watch: {
    isHaveTax (val) {
      const tax = document.querySelector('.game-tile__object_tax');
      const coin = this.$refs.coin;

      if (val && !this.showTax) {
        coin.style.transform = 'translate(0, 0)';
        this.addTax(this.id);
      }

      if (!val && tax) {
        const taxLeft = tax.offsetParent.offsetLeft;
        const taxTop = tax.offsetParent.offsetParent.offsetTop;

        const coinLeft = coin.offsetParent.offsetLeft;
        const coinTop = coin.offsetParent.offsetParent.offsetTop;

        coin.style.transform = `translate(${ taxLeft - coinLeft }px, ${ taxTop - coinTop }px)`
      }
    }
  },

  methods: {
    ...mapMutations([
      'setBuildTime',
      'addTax'
    ]),

    constructHeartbeat () {
      if (!this.hasBuilding) return null;

      if (this.isUnderConstruction) {
        this.constructionHelper();
      } else {
        this.taxHelper();
      }
    },

    constructionHelper () {
      const now = new Date();
      const timeDiff = (now - this.building.createdAt) / 1000;

      this.isUnderConstruction = timeDiff < this.building.buildDuration;

      if (this.isUnderConstruction) {
        const timeLeft = this.building.buildDuration - timeDiff + 1;
        const minutes = Math.floor(timeLeft / 60);
        const seconds = Math.floor(timeLeft - minutes * 60);

        this.timer = `${minutes}:${seconds < 10 ? '0' + seconds : seconds}`
      } else {
        if (!this.building.buildTime) {
          this.setBuildTime(this.id);
        }
      }
    },

    taxHelper () {
      const now = new Date();
      const timeDiff = (now - this.building.buildTime) / 1000;

      this.isHaveTax = timeDiff > this.building.taxDuration;
      this.isDoubleMoney = timeDiff > this.building.taxDuration * 2;
    }
  }
}
</script>

<template>
  <div
    class="game-tile"
    :ref="`tile_${id}`"
    @click="$emit('select-tile', id)"
  >
    <div class="game-tile__grass"></div>
    <div
      v-if="hasBuilding && isUnderConstruction"
      class="game-tile__timer"
    >{{ timer }}</div>
    <div
      v-if="hasBuilding"
      class="game-tile__object"
      :class="isUnderConstruction ? 'game-tile__object_crane' : `game-tile__object_${buildingType}`"
    ></div>
    <div
      v-if="selected"
      class="game-tile__selected"
      :class="hasBuilding ? 'game-tile__selected_building' : ''"
    ></div>
    <div
      v-if="hasBuilding && !isUnderConstruction"
      ref="coin"
      class="game-tile__tax"
      :class="[ isHaveTax ? 'game-tile__tax_show' : 'game-tile__tax_hide',
        `game-tile__tax_${buildingType}`,
        isDoubleMoney ? 'game-tile__tax_double' : ''
        ]"
    ></div>
    <div
      v-if="!hasBuilding"
      class="game-tile__tree"
      :class="`game-tile__tree_${randomTree}`"
    ></div>
    <div
      v-if="!isCar"
      class="game-tile__car"
      :class="`game-tile__car_${randomCar}`"
    ></div>
  </div>
</template>

<style scoped lang="scss">
.game-tile {
  position: relative;
  width: 97px;
  height: 59px;
  cursor: pointer;

  &:hover {

    .game-tile__grass {
      background: url('../../assets/game/tile-highlighed.png');
    }
  }

  &__grass {
    width: 97px;
    height: 59px;
    background: url('../../assets/game/tile.png');
    position: absolute;
    z-index: 2;
    bottom: 0;
    left: 0;
  }

  &__selected {
    width: 157px;
    height: 107px;
    background: url('../../assets/game/tile-selected.png');
    position: absolute;
    z-index: 1;
    bottom: -19px;
    left: -29px;

    &_building {
      width: 172px;
      height: 222px;
      background: url('../../assets/game/tile-selected-building.png');
      bottom: -21px;
      left: -36px;
    }
  }

  &__timer {
    color: #fff;
    width: 34px;
    height: 33px;
    background: url('../../assets/game/counter.png');
    position: absolute;
    z-index: 4;
    bottom: 150px;
    left: -15px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    font-weight: 600;
  }

  &__tax {
    width: 28px;
    height: 33px;
    background: url('../../assets/game/tax-golden.png');
    background-size: cover;
    position: absolute;
    z-index: 4;
    bottom: 80px;
    left: 36px;
    opacity: 0;

    &_double {
      width: 39px;
      height: 36px;
      background: url('../../assets/game/double-coin.png');
      background-size: cover;
      left: 26px;
    }

    &_show {
      opacity: 1;
      transition: opacity .3s;
    }

    &_hide {
      transition: 1s;
    }

    &_garage {
      top: -28px;
    }

    &_house {
      top: -38px;
    }

    &_big-house {
      top: -90px;
    }

    &_bank {
      top: -82px;
    }

    &_tax {
      top: -100px;
    }

    &_skyscraper {
      top: -210px;
    }
  }

  &__tree {
    position: absolute;
    z-index: 3;

    &_1 {
      width: 29px;
      height: 30px;
      background: url('../../assets/game/tree-1.png');
      bottom: 10px;
      left: 36px;
    }

    &_2 {
      width: 28px;
      height: 30px;
      background: url('../../assets/game/tree-2.png');
      bottom: 20px;
      left: 56px;
    }

    &_3 {
      width: 29px;
      height: 33px;
      background: url('../../assets/game/tree-3.png');
      bottom: 35px;
      left: 40px;
    }
  }

  &__car {
    position: absolute;
    z-index: 2;

    &_1 {
      width: 32px;
      height: 24px;
      background: url('../../assets/game/car-left.png');
      bottom: -4px;
      left: 56px;
    }

    &_2 {
      width: 32px;
      height: 24px;
      background: url('../../assets/game/car-right.png');
      bottom: 31px;
      left: 74px;
    }

    &_3 {
      width: 37px;
      height: 35px;
      background: url('../../assets/game/truck-left.png');
      bottom: 2px;
      left: 74px;
    }

    &_4 {
      width: 46px;
      height: 35px;
      background: url('../../assets/game/truck-right.png');
      bottom: 38px;
      left: 50px;
    }
  }

  &__object {
    bottom: 6px;
    left: 0;
    position: absolute;
    z-index: 3;

    &_bank {
      width: 88px;
      height: 102px;
      background: url('../../assets/game/bank.png');
    }

    &_big-house {
      width: 81px;
      height: 107px;
      background: url('../../assets/game/big-house.png');
    }

    &_crane {
      width: 84px;
      height: 155px;
      background: url('../../assets/game/crane.png');
    }

    &_garage {
      left: 8px;
      bottom: 12px;
      width: 66px;
      height: 41px;
      background: url('../../assets/game/garage.png');
    }

    &_house {
      width: 76px;
      height: 54px;
      background: url('../../assets/game/house.png');
    }

    &_skyscraper {
      width: 81px;
      height: 230px;
      background: url('../../assets/game/skyscraper.png');
    }

    &_tax {
      width: 89px;
      height: 118px;
      background: url('../../assets/game/tax.png');
    }
  }
}
</style>
