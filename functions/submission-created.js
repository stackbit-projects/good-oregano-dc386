require('dotenv').config()
const fetch = require('node-fetch')
const { EMAIL_TOKEN } = process.env
exports.handler = async event => {
    console.log("Received a submission from a different form.")
  if ("subject" in JSON.parse(event.body).payload){
      console.log("Received a submission from a different form.")
      return
  }
  const email = JSON.parse(event.body).payload.email
  console.log(`Recieved a submission: ${email}`)
  return fetch('https://api.buttondown.email/v1/subscribers', {
    method: 'POST',
    headers: {
      Authorization: `Token ${EMAIL_TOKEN}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email }),
  })
    .then(response => response.json())
    .then(data => {
      console.log(`Submitted to Buttondown:\n ${data}`)
    })
    .catch(error => ({ statusCode: 422, body: String(error) }))
}
