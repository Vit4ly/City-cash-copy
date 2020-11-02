<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'

import 'swiper/swiper-bundle.css'
import GameBuildCard from '@/components/game/GameBuildCard'

export default {
  name: 'GameBuild',

  components: {
    GameBuildCard,
    Swiper,
    SwiperSlide,
  },

  data: () => ({
    swiperOptions: {
      slidesPerView: 4.5,
      spaceBetween: 20
    }
  })
}
</script>

<template>
  <div class="game-build">
    <div class="game-build__title">Построить</div>
    <swiper ref="mySwiper" :options="swiperOptions">
      <swiper-slide>
        <GameBuildCard
          :is-build="true"
          :params="{type: 'tax'}"
        />
      </swiper-slide>
      <swiper-slide>
        <GameBuildCard
          :is-build="true"
          :params="{type: 'bank'}"
        />
      </swiper-slide>
      <swiper-slide>
        <GameBuildCard
          :is-build="true"
          :params="{type: 'bigHouse'}"
        />
      </swiper-slide>
      <swiper-slide>
        <GameBuildCard
          :is-build="true"
          :params="{type: 'garage'}"
        />
      </swiper-slide>
      <swiper-slide>
        <GameBuildCard
          :is-build="true"
          :params="{type: 'house'}"
        />
      </swiper-slide>
      <swiper-slide>
        <GameBuildCard
          :is-build="true"
          :params="{type: 'skyscraper'}"
        />
      </swiper-slide>
    </swiper>
  </div>
</template>

<style scoped lang="scss">
.game-build {

  &__title {
    text-align: left;
    font-size: 20px;
    margin-bottom: 12px;
  }
}
</style>
