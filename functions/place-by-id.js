const axios = require('axios')
require('dotenv').config()

exports.handler = async function(event, context) {
  const response = await axios.get('https://maps.googleapis.com/maps/api/place/details/json', {
    method: 'get',
    params: {
      language: 'ja',
      fields: event.queryStringParameters.fields,
      place_id: event.queryStringParameters.place_id,
      key: process.env.GOOGLE_MAP_API
    }
  })
  return {
    statusCode: 200,
    body: JSON.stringify(response.data)
  }
}
