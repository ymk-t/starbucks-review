const axios = require('axios')
require('dotenv').config()

exports.handler = async function(event, context) {
  const response = await axios.get('https://maps.googleapis.com/maps/api/place/photo', {
    method: 'get',
    params: {
      photoreference: event.queryStringParameters.photoreference,
      maxwidth: '250',
      key: process.env.GOOGLE_MAP_API
    }
  })
  return {
    statusCode: 200,
    body: response.request.res.responseUrl
  }
}
