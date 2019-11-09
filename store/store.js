import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    mapCandidate: [
      {
        name: 'test1',
        formatted_address: 'test2',
        photo: 'https://media-cdn.tripadvisor.com/media/photo-s/0f/e8/9e/39/photo0jpg.jpg'
      }
    ]
  },
  mutations: {
    addCandidate(state, map, i) {
      state.mapCandidate[i] = map[i]
    }
  },
  setMapInfo(maps, i) {
    this.state.mapCandidate[i] = maps
  }
})

export default store
