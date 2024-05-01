var assert = require('assert');
const calculateNumber = require('./0-calcul')


describe('calculateNumber', function () {
  describe('2 integer', function () {
    it('should return add after rounded', function () {
      assert.equal(calculateNumber(1, 3), 4);
    });
  });
  describe('first intger and second float', function () {
    it('should return add after rounded', function () {
      assert.equal(calculateNumber(1, 3.7), 5);
    });
  });
  describe('first float for floor and other float to ceil', function () {
    it('should return add after rounded', function () {
      assert.equal(calculateNumber(1.2, 3.7), 5);
    });
  });
  describe('2 float to ceil', function () {
    it('should return add after rounded', function () {
      assert.equal(calculateNumber(1.5, 3.7), 6);
    });
  });
});
