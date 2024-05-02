const request = require('request');
const assert = require('assert');

describe('to test server', () => {
    it('/ get' , (done) => {
        request('http://localhost:7865', (err, res, body) => {
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
        request('http://localhost:7865/', (err, res, body) => {
        assert.equal(body, 'Welcome to the payment system')
        done()
    })
    })
})