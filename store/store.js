import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    mapCandidate: {
      name: 'test1',
      formatted_address: 'test2',
      photo: 'test3'
    }
  },
  setMapInfo(maps) {
    this.state.mapCandidate = maps
  }
})

export default store
