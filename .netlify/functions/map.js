import axios from 'axios'

exports.handler = async function (event) {
  const response = await axios.get('https://maps.googleapis.com/maps/api/place/findplacefromtext/json', {
    method: 'get',
    params: {
      language: 'ja',
      fields:
        'formatted_address,geometry,icon,name,permanently_closed,photos,place_id,plus_code,types',
      locationbias: 'point:35.003977299999995,135.7639905',
      input: '京都',
      inputtype: 'textquery',
      key: process.env.GOOGLE_MAP_API
    }
  })
  return {
    statusCode: 200,
    body: JSON.stringify(response.candidates[0])
  }
}
