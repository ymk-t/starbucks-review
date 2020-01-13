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
          <img @click="vote(id, 'chair')" class="w-12 h-12" src="~assets/icons/chair.svg" />
        </li>
        <li class="mx-4 cursor-pointer hover:bg-blue-300">
          <img @click="vote(id, 'spacious')" class="w-12 h-12" src="~assets/icons/spacious.svg" />
        </li>
        <li class="mx-4 cursor-pointer hover:bg-blue-300">
          <img @click="vote(id, 'instagram')" class="w-12 h-12" src="~assets/icons/instagram.svg" />
        </li>
        <li class="mx-4 cursor-pointer hover:bg-blue-300">
          <img @click="vote(id, 'unicorn')" class="w-12 h-12" src="~assets/icons/unicorn.svg" />
        </li>
        <li class="mx-4 cursor-pointer hover:bg-blue-300">
          <img @click="vote(id, 'serenity')" class="w-12 h-12" src="~assets/icons/serenity.svg" />
        </li>
        <li class="mx-4 cursor-pointer hover:bg-blue-300">
          <img @click="vote(id, 'vibrant')" class="w-12 h-12" src="~assets/icons/vibrant.svg" />
        </li>
      </ul>
      <ul class="flex justify-around items-center my-8 mx-auto">
        <li class="mx-2 text-sm">評価数：{{ showVote(id, 'chair') }}</li>
        <li class="mx-2 text-sm">評価数：{{ showVote(id, 'spacious') }}</li>
        <li class="mx-2 text-sm">評価数：{{ showVote(id, 'instagram') }}</li>
        <li class="mx-2 text-sm">評価数：{{ showVote(id, 'unicorn') }}</li>
        <li class="mx-2 text-sm">評価数：{{ showVote(id, 'serenity') }}</li>
        <li class="mx-2 text-sm">評価数：{{ showVote(id, 'vibrant') }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import { setVote, getVote } from '~/components/fireFunction.js'

export default {
  name: 'Starbucks',
  data() {
    return {
      id: ''
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
    return {
      name: response.result.name,
      address: response.result.formatted_address,
      rating: response.result.rating,
      id: params.id,
      url:
        'https://www.google.com/maps/search/?api=1&query=' +
        response.result.name +
        'query_place_id=' +
        params.id
    }
  },
  methods: {
    showVote(id, tag) {
      getVote(id, tag).then((res) => {
        return res
      })
    },
    vote(id, tag) {
      setVote(id, tag)
    }
  }
}
</script>

<style scoped></style>
