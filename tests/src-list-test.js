const chai = require('chai').use(require('chai-as-promised'));
const expect = chai.expect;

const list = require('../src/list.js');
const presets = {
  '1-level': require('./presets/1-level'),
  '3-level': require('./fixtures/3-level')
};

describe('src', () => {
  describe('list', () => {
    it('should return a promise', () => {
      expect(list()).to.be.a('promise'); 
    });
    
    it('should list all dependencies of a shallow preset', () => (
      expect(list(['1-level'])).to.eventually.eql(presets['1-level'])
    ));
    
    it('should list all dependencies of nested presets', () => (
      expect(list(['3-level'])).to.eventually.eql(presets['3-level'])
    ));
  });  
});