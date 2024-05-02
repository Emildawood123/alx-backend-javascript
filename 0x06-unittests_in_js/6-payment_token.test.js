const getPaymentTokenFromAPI = require('./6-payment_token');
const { assert } = require('chai')
describe('getPaymentTokenFromApi', () => {
    it('should call getPaymentTokenApi', (done) => {
        getPaymentTokenFromAPI(true).then((response) => {
            assert.deepEqual(response, {data: 'Successful response from the API' })
        })
        done()
    });
  });