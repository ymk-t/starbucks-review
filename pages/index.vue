<template>
  <div class="container">
    <div>
      <img class="title-logo" src="~/assets/img/StaReco.png" />
      <div class="subtitle">
        <h2>
          お気に入りのスタバを見つけよう！
        </h2>
        <br />
        <input
          ref="starSearch"
          v-model="searchQuery"
          @change="searchResult"
          class="text-black"
          placeholder="店名or場所を入力して下さい"
        />
      </div>
    </div>
    <ul v-for="place in places" :key="place.name">
      <CardContents
        :key="place.placeId"
        :name="place.name"
        :place-id="place.placeId"
        :formatted-address="place.formattedAddress"
        :photo="place.photo"
      />
    </ul>
  </div>
</template>

<script>
import CardContents from '~/components/CardContents.vue'
import AssetsImage from '~/assets/img/Starbucks_China.jpg'
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
      const response = await this.$axios.$get('/.netlify/functions/map', {
        method: 'get',
        params: {
          language: 'ja',
          input: this.searchQuery + '+スターバックス',
          fields: 'formatted_address,name,place_id,photos',
          inputtype: 'textquery'
        }
      })
      console.log(response)
      if (response.status === 'OK') {
        for (let i = 0; i < response.candidates.length; i++) {
          const responsePhoto = await this.$axios.$get('/.netlify/functions/mapPhoto', {
            method: 'get',
            params: {
              photoreference: response.candidates[i].photos[0].photo_reference,
              maxwidth: '200',
              key: process.env.GOOGLE_MAP_API
            }
          })
          this.places.push({
            name: response.candidates[i].name,
            placeId: response.candidates[i].place_id,
            formattedAddress: response.candidates[i].formatted_address,
            photoReference: response.candidates[i].photos[0].photo_reference,
            photo: responsePhoto
          })
          console.log(this.places)
        }
      } else {
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
@media screen and (min-width: 1000px) {
  .container {
    margin-top: 40px;
    min-width: 100vw;
    min-height: 700px;
    text-align: center;
    justify-content: center;
    background-size: cover;
    background-image: url('~@/assets/img/Starbucks_China.jpg');
    background-attachment: fixed;
  }
  .container::before {
    background-color: rgba(0, 0, 0, 0.4);
    left: 0;
    right: 0;
    position: fixed;
    width: 100vw;
    height: auto;
    min-height: 100vh;
    content: ' ';
  }
  .subtitle {
    font-weight: 300;
    font-size: 20px;
    color: white;
    word-spacing: 5px;
    padding-top: 40px;
    padding-bottom: 10px;
    position: relative;
    z-index: 10;
  }
  .subtitle input {
    width: 300px;
  }
  .subtitle h2 {
    font-size: 32px;
    font-weight: 500;
  }
  .title-logo {
    width: 500px;
    margin: 0 auto;
    position: relative;
    z-index: 10;
  }
}
@media screen and (max-width: 999px) {
  .container {
    margin-top: 40px;
    min-width: 100vw;
    min-height: 100vh;
    justify-content: center;
    align-items: center;
    text-align: center;
    background-image: url('~@/assets/img/Starbucks_China.jpg');
    background-size: cover;
    background-attachment: fixed;
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
    font-size: 22px;
    color: white;
    word-spacing: 3px;
    padding-bottom: 10px;
    position: relative;
    z-index: 6;
  }
  .subtitle input {
    width: 350px;
  }
  .title-logo {
    width: 300px;
    margin: 0 auto;
    position: relative;
    z-index: 6;
  }
}
</style>
