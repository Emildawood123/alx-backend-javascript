const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./4-payment');
describe('sendPaymentRequestToApi', () => {
  it('should call calculateNumber', () => {
    const consoleSpy = sinon.spy(console, 'log');
    const calculateNumberS = sinon.stub(Utils, 'calculateNumber');
    calculateNumberS.returns(10);
    sendPaymentRequestToApi(100, 20);
    sinon.assert.calledWithMatch(consoleSpy, 'The total is: 10');
    sinon.assert.calledWithMatch(calculateNumberS, 'SUM', 100, 20);
    consoleSpy.restore();
    calculateNumberS.restore();
  });
});
