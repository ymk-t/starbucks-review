import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    mapCandidate: [
      {
        name: 'test1',
        formatted_address: 'test2',
        photo: {
          height: 0,
          html_attributions: '',
          photo_reference:
            'https://media-cdn.tripadvisor.com/media/photo-s/0f/e8/9e/39/photo0jpg.jpg',
          width: 0
        }
      }
    ]
  },
  getters: {
    getCandidates(state) {
      return function(state) {
        return state.mapCandidate
      }
    }
  },
  mutations: {
    setCandidate(state, map) {
      Vue.set(state, 'mapCandidate', map)
    }
  }
})

export default store
