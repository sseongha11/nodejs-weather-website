const request = require('postman-request')

const forecast = (latitude, longtitude, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=b79d2071a1a264f8c6b1d2394e346ac9&query=${latitude},${longtitude}&units=m`

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback('Unable to connect to weather service!', undefined)
    } else if (body.error) {
      callback('Unable to find location', undefined)
    } else {
      callback(
        undefined,
        `${body.current.weather_descriptions[0]}, temperature is ${body.current.temperature}. Additionally, you feels like ${body.current.feelslike} degree. Have a great day!`
      )
    }
  })
}

module.exports = forecast
