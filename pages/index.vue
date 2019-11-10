<template>
  <div
    class="container"
    :style="{
      'background-image': 'url(' + assetsImage + ')'
    }"
  >
    <div>
      <img class="title-logo" src="~/assets/img/StaReco.png" />
      <h2 class="subtitle">
        お気に入りのスタバを見つけよう！{{ jsonData }}
        <input
          ref="starSearch"
          v-model="searchQuery"
          class="text-black"
          placeholder="店名入力して下さい"
          @change="searchResult"
        />
      </h2>
    </div>
    <CardContents />
  </div>
</template>

<script>
import CardContents from '~/components/CardContents.vue'
import AssetsImage from '~/assets/img/Starbacks-China.jpg'
import store from '~/store/store.js'

export default {
  layout: 'ForTopPage',
  head: {
    title: 'スタレコ！',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Starbuck Review Site'
      }
    ]
  },
  components: {
    CardContents
  },
  data() {
    return {
      assetsImage: AssetsImage,
      map: {},
      searchQuery: '',
      jsonData: {
        name: '',
        formatted_address: '',
        photo: {
          height: 0,
          html_attributions: '',
          photo_reference: '',
          width: 0
        }
      }
    }
  },
  methods: {
    async searchResult() {
      const response = await this.$axios.$get('/.netlify', {
        method: 'get',
        params: {
          language: 'ja',
          input: this.searchQuery + '+スターバックス',
          fields: 'formatted_address,name,photos',
          inputtype: 'textquery'
        }
      })
      this.jsonData = JSON.parse(JSON.stringify(response))
      for (let i = 0; i < this.jsonData.length; i++) {
        store.commit('setCandidate', this.jsonData)
      }
      console.log(store.state.mapCandidate[0].name)
    }
  }
}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.container {
  margin-top: 40px;
  min-height: 100vh;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-size: cover;
}

.container::before {
  background-color: rgba(0, 0, 0, 0.4);
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  content: ' ';
}

.subtitle {
  font-weight: 300;
  font-size: 18px;
  color: white;
  word-spacing: 5px;
  padding-bottom: 15px;
  position: relative;
  z-index: 10;
}

.title-logo {
  width: 500px;
  margin: 0 auto;
  position: relative;
  z-index: 10;
}
</style>
