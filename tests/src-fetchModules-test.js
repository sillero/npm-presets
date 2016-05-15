const expect = require('chai').expect;
const fetchModules = require('../src/fetchModules.js');
const presets = {
  '1-level': require('./presets/1-level'),
  '3-level': require('./fixtures/3-level'),
  'mixed': require('./fixtures/mixed')
};

describe('src', () => {
  describe('fetchModules', () => {
    it('should return resolved modules from a shallow preset', () => {
      expect(fetchModules(['1-level']))
        .and.to.eql(presets['1-level']);
    });
    
    it('should return resolved modules from a nested preset', () => {
      expect(fetchModules(['3-level']))
        .and.to.eql(presets['3-level']);
    });
    
    it('should return resolved modules from a collection of presets', () => {
      expect(fetchModules(['colors', '3-level']))
        .and.to.eql(presets['mixed']);
    })
    
    it('should throw an error when there are more then 3 levels of dependencies', () => {
      expect(fetchModules.bind(this, ['4-level'])).to.throw();
    });
  });  
});