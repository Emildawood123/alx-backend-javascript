const request = require('request');
const assert = require('assert');

describe('to test server', () => {
    it('/ get' , (done) => {
        request('http://127.0.0.1:7865', (err, res, body) => {
        assert.equal(res.statusCode, 200)
        done()
    })
    })
    it('/any get' , (done) => {
        request('http://localhost:7865/any', (err, res, body) => {
        assert.equal(res.statusCode, 404)
        done()
    })
    })
    it('/any get' , (done) => {
        request('http://localhost:7865', (err, res, body) => {
        assert.equal(body, 'Welcome to the payment system')
        done()
    })
    })
    it('/cart/10 get' , (done) => {
        request('http://127.0.0.1:7865/cart/10', (err, res, body) => {
        assert.equal(res.statusCode, 200)
        done()
    })
    })
    it('/cart/emildawood get' , (done) => {
        request('http://127.0.0.1:7865/cart/emildawood', (err, res, body) => {
        assert.equal(res.statusCode, 404)
        done()
    })
    })
    it('/cart/10 get' , (done) => {
        request('http://127.0.0.1:7865/cart/10', (err, res, body) => {
        assert.equal(res.body, `Payment methods for cart 10`)
        done()
    })
    })
    it('/available_payments get', (done) => {
        request('http://127.0.0.1:7865/available_payments', (err, res, body) => {
        assert.equal(res.body,'{"payment_methods":{"credit_cards":true,"paypal":false}}')
        done()
    })
    })
    it('/login post' , (done) => {
        request.post({url: 'http://127.0.0.1:7865/login', body: '{"userName": "betty"}', headers: {'Content-Type': 'application/json'}}, (err, res, body) => {
        assert.equal(body, `Welcome betty`)
        done()
    })
    })
})