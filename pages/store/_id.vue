<template>
  <div class="w-screen h-screen flex flex-col justify-center items-center bg-gray-200">
    <div class="max-w-3xl bg-white shadow-md rounded px-8 pt-6 pb-8 border border-green-600">
      <h2 class="font-bold text-3xl text-center mb-2">{{ name }}</h2>
      <h2 class="font-bold text-1xl text-center mb-2">{{ address }}</h2>
      <h2 class="font-bold text-1xl text-center mb-2">評価:{{ rating }}</h2>
      <a
        :href="url"
        class="md:flex md:justify-center text-2xl font-bold text-blue-700 hover:text-blue-500"
        >Google Mapで見る</a
      >
      <ul class="flex justify-around items-center my-8 mx-auto">
        <li class="mx-4">
          <input
            @click="vote('chair')"
            class="w-12 h-12"
            type="image"
            src="~/assets/icons/chair.svg"
          />
        </li>
        <li class="mx-4">
          <img class="w-12 h-12" src="~assets/icons/spacious.svg" />
        </li>
        <li class="mx-4">
          <img class="w-12 h-12" src="~assets/icons/instagram.svg" />
        </li>
        <li class="mx-4">
          <img class="w-12 h-12" src="~assets/icons/unicorn.svg" />
        </li>
        <li class="mx-4">
          <img class="w-12 h-12" src="~assets/icons/serenity.svg" />
        </li>
        <li class="mx-4">
          <img class="w-12 h-12" src="~assets/icons/vibrant.svg" />
        </li>
      </ul>
      <ul class="flex justify-around items-center my-8 mx-auto">
        <li class="mx-4">
          <p>{{ showVote('chair') }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { firebase, db } from '~/plugins/firebase'

export default {
  name: 'Starbucks',
  async asyncData({ params, $axios }) {
    const response = await $axios.$get('/.netlify/functions/place-by-id', {
      method: 'get',
      params: {
        place_id: params.id,
        fields: 'name,formatted_address,rating'
      }
    })
    return {
      name: response.result.name,
      address: response.result.formatted_address,
      rating: response.result.rating,
      url:
        'https://www.google.com/maps/search/?api=1&query=' +
        response.result.name +
        'query_place_id=' +
        params.id
    }
  },
  methods: {
    vote(tag) {
      const category = db.collection('review').doc(tag)
      // eslint-disable-next-line no-unused-vars
      const setWithMerge = category.set({ popularity: 0 }, { merge: true })
      category.update({
        popularity: firebase.firestore.FieldValue.increment(1)
      })
    },
    showVote(tag) {
      const voteRef = db.collection('review').doc(tag)
      const getDoc = voteRef
        .get()
        .then((doc) => {
          if (!doc.exists) {
            return 0
          } else {
            return getDoc
          }
        })
        .catch((err) => {
          console.log('Error getting document', err)
        })
    }
  }
}
</script>

<style scoped></style>
