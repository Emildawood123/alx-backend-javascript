const sendPaymentRequestToApi = require('./3-payment')
const Utils = require('./utils');
const sinon = require('sinon')

describe('sendPaymentRequestToApi', () => {
    let s;
    beforeEach(() => {
        s = sinon.spy(console, 'log')
    })
    afterEach(() => {
        // Restore the default sandbox here
        sinon.restore();
      });
      
    it('used sinon', () => {
        sendPaymentRequestToApi(50, 20);
        sinon.assert.calledWithMatch(consoleSpy, 'The total is: 70');
        sinon.assert.calledOnce(consoleSpy);
    })
    it('used sinon', () => {
        sendPaymentRequestToApi(50, 40);
        sinon.assert.calledWithMatch(consoleSpy, 'The total is: 90');
        sinon.assert.calledOnce(consoleSpy);
    })
})
