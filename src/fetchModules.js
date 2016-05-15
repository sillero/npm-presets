const fetchPreset = require('./fetchPreset');

const duplicateFilter = (item, index, out) => out.lastIndexOf(item) <= index;
const isPresetModule = (name) => name.indexOf('preset:') === 0;

const fetchModules = (presets = [], inceptionWarning = 0) => (
  presets
    // remove duplicates
    .filter(duplicateFilter)
    // fetch presets
    .map(fetchPreset)
    // flatten
    .reduce((out, preset) => out.concat(preset), [])
    // recursive merge with inception protection
    .reduce((out, item) => {
      if (isPresetModule(item) && inceptionWarning++ >= 2) {
        throw new Error('Preset inception warning. Don\'t go deeper than 3 levels dependency. Aborting.');
      }

      return out.concat(
        isPresetModule(item) ?
          fetchModules([ item.split('preset:')[1] ], inceptionWarning) :
          [ item ]
      );
    }, [])
    // remove duplicates
    .filter(duplicateFilter)
);

module.exports = fetchModules;