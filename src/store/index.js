import Vue from 'vue'
import Vuex from 'vuex'
import game from './gameStore';
import user from './userStore';

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    game,
    user
  }
})
