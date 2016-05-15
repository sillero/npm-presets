const expect = require('chai').expect;
const args = require('../src/args.js');

describe('src', () => {
  describe('args', () => {
    const test_args = args();
    it('should return an object with shape { flags: [], presets: [], matchFlags: fn }', () => {
      expect(test_args)
        .to.have.property('flags')
        .and.to.be.an('array');
      expect(test_args)
        .to.have.property('presets')
        .and.to.be.an('array');
      expect(test_args)
        .to.have.property('matchFlags')
        .and.to.be.an('function');
    });
    
    describe('matchFlags matches against the app flags', () => {
      const match_args = args(['--save-dev', '-S']);
      
      context('when a string is the argument', () => {
        it('should return false if the flag is not matched', () => {
            expect(match_args.matchFlags('--fail')).to.be.false
        });
        
        it('should return true if the flag is matched', () => {
            expect(match_args.matchFlags('--save-dev')).to.be.true
        });
      });
      
      context('when an array is the argument', () => {
        it('should return false if no flags are matched', () => {
            expect(match_args.matchFlags(['--fail', '--false'])).to.be.false
        });
        
        it('should return true if one or more flags are matched', () => {
            expect(match_args.matchFlags(['--save-dev', '--fail'])).to.be.true
        });
      });
    });
  });  
});