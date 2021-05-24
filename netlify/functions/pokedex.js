const fetch = require('node-fetch')

const API_ENDPOINT = 'https://pokeapi.co/api/v2/pokedex/kanto'

exports.handler = async (event, context) => {
  try {
    const response = await fetch(API_ENDPOINT)
    const data = await response.json()
    console.log({ data })
    return {
      statusCode: 200,
      body: JSON.stringify({
        data: data.pokemon_entries
      })
    }
  } catch (error) {
    console.log(error)
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed fetching data' })
    }
  }
}
