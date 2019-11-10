const axios = require('axios')
require('dotenv').config()

exports.handler = async function(event, context) {
  const response = await axios.get(
    'https://maps.googleapis.com/maps/api/place/findplacefromtext/json',
    {
      method: 'get',
      params: {
        language: 'ja',
        fields: event.queryStringParameters.fields,
        input: event.queryStringParameters.input,
        inputtype: 'textquery',
        key: process.env.GOOGLE_MAP_API
      }
    }
  )
  return {
    statusCode: 200,
    body: JSON.stringify(response.data)
  }
}
