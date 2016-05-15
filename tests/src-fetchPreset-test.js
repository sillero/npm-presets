const expect = require('chai').expect;
const fetchPreset = require('../src/fetchPreset.js');
const presets = {
  '1-level': require('./presets/1-level'),
  'pkg-preset': require('./package.json').presets['pkg-preset']
};

describe('src', () => {
  describe('fetchPreset', () => {
    it('should resolve a default preset', () => {
      expect(fetchPreset('1-level')).to.eql(presets['1-level']);
    });
    
    it('should resolve a package.json preset', () => {
      expect(fetchPreset('pkg-preset')).to.eql(presets['pkg-preset']);
    });
    
    it('should throw an error on an unexisting preset', () => {
      expect(fetchPreset.bind(this, '0123456789')).to.throw();
    });
  });  
});