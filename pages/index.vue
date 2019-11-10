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
        お気に入りのスタバを見つけよう！{{ places }}
        <input
          ref="starSearch"
          v-model="searchQuery"
          class="text-black"
          placeholder="店名入力して下さい"
          @change="searchResult"
        />
      </h2>
    </div>
    <ul v-for="place in places" :key="place.name">
      <CardContents
        :key="place.placeId"
        :name="place.name"
        :place-id="place.placeId"
        :formatted-address="place.formattedAddress"
        :photo="place.photos[0]"
      />
    </ul>
  </div>
</template>

<script>
import CardContents from '~/components/CardContents.vue'
import AssetsImage from '~/assets/img/Starbacks-China.jpg'

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
      places: []
    }
  },
  methods: {
    async searchResult() {
      const response = await this.$axios.$get('/.netlify/map', {
        method: 'get',
        params: {
          language: 'ja',
          input: this.searchQuery + '+スターバックス',
          fields: 'formatted_address,name,place_id,photos',
          inputtype: 'textquery'
        }
      })
      if (response.status === 'OK') {
        response.candidates.map((place, index) => {
          console.log(place)
          this.places.push({
            name: place.name,
            placeId: place.place_id,
            formattedAddress: place.formatted_address,
            photos: place.photos
          })
        })
      } else {
        console.log(response.status)
      }
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
