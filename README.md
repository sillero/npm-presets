# npm-presets
Installs groups of npm dependencies.

## Presets
Common presets can be found on the folder [presets/]().  
You can create presets on your `package.json` file and the command line will try to resolve from there before searching for default presets.

### Example shallow preset (react-redux-webpack)
```javascript
[
  'react',
  'react-dom',
  'react-hot-loader',
  'react-redux',
  'react-router',
  'react-router-redux',
  'redux',
  'redux-devtools',
  'redux-devtools-dock-monitor',
  'redux-devtools-log-monitor',
  'redux-saga',
  'webpack',
  'webpack-dev-server'
]
```
### Example nested preset (babel-eslint-airbnb)
```javascript
[
  'preset:babel',
  'preset:eslint-airbnb',
  'babel-eslint'
]
```

## Installation and usage
`npm install -g npm-presets`

This will give you three commands to use

### npm-preset-install [flags] &lt;presets&gt;
It takes `npm install` default flags (optional) and space seprated list of presets (optional).  
This command will resolve all the presets and run an `npm install` with the resolved modules and the provided flags.
```
npm-preset-install react-redux-webpack

npm-preset-install --save react-redux-webpack

npm-preset-install --save-dev react-redux-webpack
``` 
### npm-preset-uninstall [flags] &lt;presets&gt;
It will uninstall all modules listed on the presets 

### npm-preset-list [-R|--resolve] &lt;presets&gt;
It will list all modules to be installed on a preset or a collection of presets.  
Use `-R` or `--resolve` to print the version to be resolved by npm after the install.
