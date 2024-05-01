const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./5-payment');
describe('sendPaymentRequestToApi', () => {
    let consoleSpy;
    beforeEach(() => {
        consoleSpy = sinon.spy(console, 'log');
    })
    afterEach(() => {
        consoleSpy.restore();
    })
  it('should call with 100, 20', () => {
    sendPaymentRequestToApi(100, 20);
    sinon.assert.calledWithMatch(consoleSpy, 'The total is: 10');
    sinon.assert.calledOnce(calculateNumberS, 'SUM', 100, 20);
  });
  it('should call with 10, 10', () => {
    sendPaymentRequestToApi(10, 10);
    sinon.assert.calledWithMatch(consoleSpy, 'The total is: 10');
    sinon.assert.calledOnce(calculateNumberS, 'SUM', 10, 10);
  });
});
