const util = require('util')
const axios = require('axios')
require('dotenv').config()

exports.handler = async function(event, context) {
  const response = await axios.get('https://stareco.netlify.com/.netlify/functions/map', {
    method: 'get',
    params: {
      language: 'ja',
      fields:
        'formatted_address,geometry,icon,name,permanently_closed,photos,place_id,plus_code,types',
      locationbias: 'point:35.003977299999995,135.7639905',
      input: event.queryStringParameters.input + ' スターバックス',
      inputtype: 'textquery',
      key: process.env.GOOGLE_MAP_API
    }
  })

  return {
    statusCode: 200,
    body: JSON.stringify(util.inspect(response.data.candidates[0]))
  }
}
