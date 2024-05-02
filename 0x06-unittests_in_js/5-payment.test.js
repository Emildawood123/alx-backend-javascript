const sinon = require('sinon');
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
    sinon.assert.calledWithMatch(consoleSpy, 'The total is: 120');
    sinon.assert.calledOnce(consoleSpy);
  });
  it('should call with 10, 10', () => {
    sendPaymentRequestToApi(10, 10);
    sinon.assert.calledWithMatch(consoleSpy, 'The total is: 20');
    sinon.assert.calledOnce(consoleSpy);
  });
});
