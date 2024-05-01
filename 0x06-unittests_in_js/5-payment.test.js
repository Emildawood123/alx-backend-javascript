const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./5-payment');
describe('sendPaymentRequestToApi', () => {
  it('should call calculateNumber', () => {
    let consoleSpy;
    beforeEach(() => {
        consoleSpy = sinon.spy(console, 'log');
    })
    afterEach(() => {
        consoleSpy.restore();
    })
    sendPaymentRequestToApi(100, 20);
    sinon.assert.calledWithMatch(consoleSpy, 'The total is: 10');
    sinon.assert.calledWithMatch(calculateNumberS, 'SUM', 100, 20);
    sendPaymentRequestToApi(10, 10);
    sinon.assert.calledWithMatch(consoleSpy, 'The total is: 10');
    sinon.assert.calledWithMatch(calculateNumberS, 'SUM', 10, 10);
  });
});
