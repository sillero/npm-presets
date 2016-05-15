const isFlag = (str) => str.indexOf('-') === 0; 
const appFlags = [
  // npm
  '-S', '--save',
  '-D', '--save-dev',
  '-O', '--save-optional',
  '-E', '--save-exact',
  
  // custom: list
  '-R', '--resolve'
];

 
module.exports = (args = []) => {
  const flags = args.filter(arg => isFlag(arg) && !!~appFlags.indexOf(arg));
  const presets = args.filter(arg => !isFlag(arg));
  
  return {
    flags,
    presets,
    matchFlags: (tryFlags = []) => {
      if (typeof tryFlags === 'string') {
        tryFlags = [tryFlags];
      }
      
      return flags.some(flag => !!~tryFlags.indexOf(flag));
    } 
  }
}