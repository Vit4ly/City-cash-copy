
const game = {
  namespaced: true,

  state: {
    selectedId: null,
    buildings: [],
    taxesTiles: []
  },

  mutations: {
    setSelectedId (state, id) {
      state.selectedId = id;
    },

    addBuilding (state, buildingObj) {
      state.buildings.push(buildingObj)
    },

    addTax (state, tileId) {
      state.taxesTiles.push(tileId);
    },

    removeTax (state, tileId) {
      const taxes = state.taxesTiles;
      const index = taxes.indexOf(tileId);
      taxes.splice(index, 1);
      state.taxesTiles = taxes;
    },

    removeBuilding (state) {
      const newBuildings = [ ...state.buildings ];
      const index = newBuildings.findIndex(item => item.tileId === state.selectedId);

      if (index === -1) return null;

      newBuildings.splice(index, 1);
      state.buildings = newBuildings;
    },

    setBuildTime (state, id) {
      const buildings = [ ...state.buildings ];
      state.buildings =  buildings.map(item => {
        if (item.tileId === id) {
          item.buildTime = new Date();
        }
        return item;
      })
    }
  },

  actions: {  },

  getters: {
    selectedBuilding (state) {
      return state.buildings.find(item => item.tileId === state.selectedId);
    }
  }
}

export default game;
