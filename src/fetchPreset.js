const fs = require('fs');
const path = require('path');

const presetDir = path.resolve(__dirname, '../',
  process.env.NODE_ENV === 'test' ?
    'tests/presets' :
    'presets'
);
const pkgDir = (
  process.env.NODE_ENV === 'test' ?
    path.resolve(__dirname, '../tests/') :
    process.cwd()
);

const fileExists = (filePath) => {
  let out = true;
  
  try {
    fs.statSync(filePath);
  } catch (e) {
    out = false;
  }
  
  return out;
};

const fetchPreset = (presetName) => {
  const pkgPath = `${pkgDir}/package.json`;
  const presetPath = `${presetDir}/${presetName}.js`;

  // check for preset inside "presets" package.json
  if (fileExists(pkgPath)) {
    const pkg = require(pkgPath);
        
      if (pkg.presets && pkg.presets[presetName]) {
        return pkg.presets[presetName];
      }
  }
  
  // fallback to default presets
  if (fileExists(presetPath)) {
      return require(presetPath);
  }
  
  // throw error if not found anywhere
  throw new Error(`${presetDir} No "presets.${presetName}" on your package.json and no default ${presetName} preset`);
};

module.exports = fetchPreset;