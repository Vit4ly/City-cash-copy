<script>
import { BUILDING_TYPES } from '@/helpers/game';
import { createNamespacedHelpers } from 'vuex';

const { mapState, mapMutations } = createNamespacedHelpers('game')

export default {
  name: 'GameBuildCard',

  props: {
    params: {
      type: Object,
      default: () => ({})
    },

    isCollect: {
      type: Boolean,
      default: false
    },

    isBuild: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    ...mapState([
      'selectedId'
    ]),

    building () {
      return BUILDING_TYPES[this.params.type]
    },

    image () {
      return this.building ? `${ this.building.name }.png` : ''
    },

    title () {
      return this.building ? this.building.title : ''
    },

    isTax () {
      return this.params.type === BUILDING_TYPES.tax.type;
    }
  },

  methods: {
    ...mapMutations([
      'addBuilding',
      'removeTax',
      'setBuildTime',
      'removeBuilding'
    ]),

    buildObject (type) {
      if (this.selectedId && this.isBuild) {
        this.addBuilding({
          tileId: this.selectedId,
          type: type,
          createdAt: new Date(),
          buildDuration: BUILDING_TYPES[type].buildDuration,
          taxDuration: BUILDING_TYPES[type].taxDuration
        })

        this.$notify({
          message: 'Здание успешно построено',
          position: 'bottom-right'
        });
      }
    },

    collect () {
      this.removeTax(this.selectedId);
      this.setBuildTime(this.selectedId);

      this.$notify({
        message: 'Собран доход со здания',
        position: 'bottom-right'
      });
    },

    remove () {
      this.removeBuilding();

      this.$notify({
        message: 'Здание успешно удалено',
        position: 'bottom-right'
      });
    }
  }
}
</script>

<template>
  <div
    class="game-build-card"
    @click="buildObject(params.type)"
  >
    <div class="game-build-card__image">
      <img
        :src="image"
        class="game-build-card__image-icon"
      >
    </div>
    <div
      v-if="isBuild"
      class="game-build-card__info"
    >
      <div class="game-build-card__title">{{ title }}</div>
      <div class="game-build-card__params">
        <div class="game-build-card__params-title">Стоимость</div>
        <div class="game-build-card__params-value">3 121</div>
      </div>
      <div class="game-build-card__params">
        <div class="game-build-card__params-title">Цена аренды</div>
        <div class="game-build-card__params-value">500</div>
      </div>
    </div>

    <div
      v-if="isCollect"
      class="game-build-card__action"
    >
      <div>
        <div class="game-build-card__params-title">Рента</div>
        <div class="game-build-card__params-value">500</div>
      </div>
      <div class="game-build-card__action-btns">
        <button
          v-if="isTax"
          class="btn btn_primary"
          @click="collect"
        >Оплатить</button>

        <button
          v-else
          class="btn btn_primary"
          @click="collect"
        >Собрать</button>

        <button
          class="btn btn_primary"
          @click="remove"
        >Снести</button>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.btn {
  height: 36px !important;

  &:first-child {
    margin-bottom: 10px;
  }
}

.game-build-card {
  display: flex;
  background: #EBEEFC;
  border-radius: 10px;
  height: 110px;
  width: 100%;
  max-width: 440px;
  cursor: pointer;

  &__image {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 90px;
    height: 100%;
    background: rgba(#BCBFD7, 0.1);
    border-radius: 10px;
    margin-right: 24px;
    position: relative;
  }

  &__image-icon {
    max-width: calc(100% - 10px);
    max-height: calc(100% - 10px);
    object-fit: contain;
  }

  &__info {
    justify-content: center;
    width: calc(100% - 114px);
    margin-top: 20px;
  }

  &__action {
    height: 100%;
    width: calc(100% - 114px);
    box-sizing: border-box;
    padding-right: 20px;
    align-items: center;
    justify-content: space-between;
    display: flex;
  }

  &__action-btns {
    display: flex;
    flex-direction: column;
  }

  &__title {
    font-size: 16px;
    font-weight: 700;
    color: #0083FF;
    text-align: left;
    margin-bottom: 12px;
  }

  &__params {
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    padding-right: 16px;
  }

  &__params-title {
    color: #C3C7E6;
    font-size: 14px;
    font-weight: 600;
    text-align: left;
  }

  &__params-value {
    font-size: 16px;
    font-weight: 700;
    color: #404966;
    display: flex;
    align-items: center;

    &:before {
      content: '';
      display: block;
      width: 16px;
      height: 16px;
      margin-right: 8px;
      background: url('../../assets/coin.png');
    }
  }
}
</style>
