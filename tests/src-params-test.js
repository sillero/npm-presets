const expect = require('chai').expect;
const params = require('../src/params.js');
const presets = {
  '1-level': require('./presets/1-level'),
  '3-level': require('./fixtures/3-level')
};

describe('src', () => {
  describe('params', () => {
    it('should return an object with shape { flags: [], modules: [] }', () => {
      expect(params()).to.eql({ flags: [], modules: [] });
    });
  }); 
});