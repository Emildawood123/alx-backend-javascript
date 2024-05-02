const express = require('express')
const bodyParser = require('body-parser');
const app = express()
app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());
app.get('/', (req, res) => {
    res.send('Welcome to the payment system')
})
app.get('/cart/:id', (req, res) => {
    if (isNaN(parseInt(req.params.id))) {
        res.sendStatus(404)
    }
    else {
        res.send(`Payment methods for cart ${req.params.id}`)
    }
})
app.get('/available_payments', (req, res) => {
    res.send({
        payment_methods: {
          credit_cards: true,
          paypal: false
        }
      })
})
app.post('/login', (req, res) => {
    const username = req.body.userName
    res.send(`Welcome ${username}`)
})
app.listen(7865, () => {
    console.log('API available on localhost port 7865')
})
