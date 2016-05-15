const args = require('../src/args');
const fetchModules = require('../src/fetchModules');

module.exports = (srcArgs = []) => {
  const processedArgs = args(srcArgs);
  
  return {
    flags: processedArgs.flags,
    modules: fetchModules(processedArgs.presets)
  } 
};
