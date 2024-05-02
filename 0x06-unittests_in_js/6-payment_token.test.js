const getPaymentTokenFromAPI = require('./6-payment_token');
const chai = require('chai')
describe('getPaymentTokenFromApi', () => {
    it('should call getPaymentTokenApi', () => {
        getPaymentTokenFromAPI(true).then((response) => {
            chai.assert.deepEqual(response, {data: 'Successful response from the API' })
        })
    });
  });