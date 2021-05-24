exports.handler = async function (event, context) {
  try {
    console.log({ event })
    console.log({ context })
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: 'Hello world'
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
