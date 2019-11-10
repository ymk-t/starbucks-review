<template>
  <div class="w-screen h-screen flex flex-col justify-center items-center bg-gray-200">
    <div class="max-w-2xl bg-white shadow-md rounded px-8 pt-6 pb-8 border border-green-600">
      <h2 class="font-bold text-3xl text-center mb-2">{{ name }}</h2>
      <h3 class="font-bold text-3xl text-center mb-2">{{ address }}</h3>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Starbucks',
  async asyncData({ params, $axios }) {
    const response = await $axios.$get('/.netlify/place-by-id', {
      method: 'get',
      params: {
        place_id: params.id,
        fields: 'name,formatted_address,photo'
      }
    })
    console.log(response)
    return { name: response.result.name, address: response.result.formatted_address }
  }
}
</script>

<style scoped></style>
