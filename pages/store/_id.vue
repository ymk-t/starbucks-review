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
      <br />
      <br />
      <ul class="flex justify-around items-center ">
        <li class="mx-4 cursor-pointer hover:bg-blue-300">
          <img
            @click="vote('chair'), showVote(id, 'chair')"
            class="w-12 h-12"
            src="~assets/icons/chair.svg"
          />
        </li>
        <li class="mx-4 cursor-pointer hover:bg-blue-300">
          <img @click="vote('spacious')" class="w-12 h-12" src="~assets/icons/spacious.svg" />
        </li>
        <li class="mx-4 cursor-pointer hover:bg-blue-300">
          <img @click="vote('instagram')" class="w-12 h-12" src="~assets/icons/instagram.svg" />
        </li>
        <li class="mx-4 cursor-pointer hover:bg-blue-300">
          <img @click="vote('unicorn')" class="w-12 h-12" src="~assets/icons/unicorn.svg" />
        </li>
        <li class="mx-4 cursor-pointer hover:bg-blue-300">
          <img @click="vote('serenity')" class="w-12 h-12" src="~assets/icons/serenity.svg" />
        </li>
        <li class="mx-4 cursor-pointer hover:bg-blue-300">
          <img @click="vote('vibrant')" class="w-12 h-12" src="~assets/icons/vibrant.svg" />
        </li>
      </ul>
      <ul class="flex justify-around items-center my-8 mx-auto">
        <li class="mx-2 text-sm">評価数：{{ chair }}</li>
        <li class="mx-2 text-sm">評価数：{{ spacious }}</li>
        <li class="mx-2 text-sm">評価数：{{ instagram }}</li>
        <li class="mx-2 text-sm">評価数：{{ unicorn }}</li>
        <li class="mx-2 text-sm">評価数：{{ serenity }}</li>
        <li class="mx-2 text-sm">評価数：{{ vibrant }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import { firebase, db } from '~/plugins/firebase'

async function getVote(id, tag) {
  const voteRef = await db.collection(id).doc(tag)
  const doc = await voteRef.get()

  if (!doc.exists) {
    voteRef.set({ popularity: 0 }, { merge: true })
    return 0
  } else {
    return doc.data().popularity
  }
}

export default {
  name: 'Starbucks',
  data() {
    return {
      id: '',
      icons: {
        chair: 0,
        spacious: 0,
        instagram: 0,
        unicorn: 0,
        serenity: 0,
        vibrant: 0
      }
    }
  },
  watch: {
    icons: {
      handler(val, oldVal) {
        console.log('someObj changed')
      },
      deep: true
    }
  },
  async asyncData({ params, $axios }) {
    const response = await $axios.$get('/.netlify/functions/place-by-id', {
      method: 'get',
      params: {
        place_id: params.id,
        fields: 'name,formatted_address,rating'
      }
    })
    const initChair = await getVote(params.id, 'chair')
    const initSpacious = await getVote(params.id, 'spacious')
    const initInstagram = await getVote(params.id, 'instagram')
    const initUnicorn = await getVote(params.id, 'unicorn')
    const initSerenity = await getVote(params.id, 'serenity')
    const initVibrant = await getVote(params.id, 'vibrant')
    return {
      name: response.result.name,
      address: response.result.formatted_address,
      rating: response.result.rating,
      id: params.id,
      url:
        'https://www.google.com/maps/search/?api=1&query=' +
        response.result.name +
        'query_place_id=' +
        params.id,
      chair: initChair,
      spacious: initSpacious,
      instagram: initInstagram,
      unicorn: initUnicorn,
      serenity: initSerenity,
      vibrant: initVibrant
    }
  },
  methods: {
    vote(tag) {
      const category = db.collection(this.id).doc(tag)
      // eslint-disable-next-line no-unused-vars
      category.update({
        popularity: firebase.firestore.FieldValue.increment(1)
      })
    },
    showVote(tag) {
      getVote(this.id, tag).then((res) => {
        this.icons[tag] = res
        console.log(res)
      })
      return this.icons[tag]
    }
  }
}
</script>

<style scoped></style>
