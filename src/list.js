#!/usr/bin/env node

const args = require('../src/args');
const resolve = require('registry-resolve');
const fetchModules = require('../src/fetchModules'); 

module.exports = (srcArgs) => {
  const processedArgs = args(srcArgs);
  const modules = fetchModules(processedArgs.presets);

  if (processedArgs.matchFlags(['-R', '--resolve'])) {
    return Promise
      .all(modules.map(resolve))
      .then((resolved) => (
        modules
          .map((mod, index) => `"${mod}" : "${resolved[index]}"`)
      ));  
  } else {
    return Promise.all(modules);
  }
};