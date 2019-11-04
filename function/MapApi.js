export async function handler(event) {
  const response = await this.$axios.$get('/maps', {
    method: 'get',
    params: {
      language: 'ja',
      fields:
        'formatted_address,geometry,icon,name,permanently_closed,photos,place_id,plus_code,types',
      locationbias: 'point:35.003977299999995,135.7639905',
      input: this.searchQuery,
      inputtype: 'textquery',
      key: process.env.GOOGLE_MAP_API
    }
  })
  return {
    statusCode: 200,
    body: JSON.stringify(response.candidates[0])
  }
}
