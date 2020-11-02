import { getGame } from '@/api/game'

const user = {
  namespaced: true,

  state: {
    data: {}
  },

  mutations: {
    setUser (state, data) {
      state.data = data;
    }
  },

  actions: {
    async loadUser ({ commit }) {
      try {
        const data = await getGame();
        commit('setUser', data.user);
      } catch (err) {
        console.error(err);
      }
    }
  }
}

export default user;
