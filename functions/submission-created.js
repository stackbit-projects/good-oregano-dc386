require('dotenv').config()
const fetch = require('node-fetch')
const { EMAIL_TOKEN } = process.env
exports.handler = async event => {
    console.log(`Recieved a contact submission`)
    console.log(JSON.parse(event.body).payload.name)
    if (JSON.parse(event.body).payload.name != null){
        console.log(`Recieved a contact submission, not a subscribe submission`)
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
