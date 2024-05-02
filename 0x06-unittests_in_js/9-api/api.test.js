const request = require('request');
const assert = require('assert');

describe('to test server', () => {
    it('/ get' , (done) => {
        request('http://localhost:7856', (err, res, body) => {
        assert.equal(res.statusCode, 200)
        done()
    })
    })
    it('/any get' , (done) => {
        request('http://localhost:7856/any', (err, res, body) => {
        assert.equal(res.statusCode, 404)
        done()
    })
    })
    it('/any get' , (done) => {
        request('http://localhost:7856/any', (err, res, body) => {
        assert.equal(body, 'Welcome to the payment system')
        done()
    })
    })
    it('/cart/10 get' , (done) => {
        request('http://localhost:7856/cart/10', (err, res, body) => {
        assert.equal(res.statusCode, 200)
        done()
    })
    })
    it('/cart/emildawood get' , (done) => {
        request('http://localhost:7856/cart/emildawood', (err, res, body) => {
        assert.equal(res.statusCode, 404)
        done()
    })
    })
})