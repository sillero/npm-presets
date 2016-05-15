# npm-presets
Installs groups of npm dependencies.

## Presets
Common presets can be found on the folder [presets/]()
You can create presets on your `package.json` file and the cli will try to resolve from there before searching for default presets.
### Example preset (react-redux-webpack)
```javascript
[
  'react',
  'react-dom',
  'react-hot-loader',
  'react-redux',
  'react-router',
  'react-router-redux',
  'redux',
  'redux-saga',
  'webpack',
  'webpack-dev-server'
]
```

## Installation and usage
`npm install -g npm-presets`

This will give you three commands to use

### npm-preset-install [flags] <presets>
It takes `npm install` default flags (optional) and space seprated list of presets (optional).  
```
npm-preset-install react-redux-webpack

npm-preset-install --save react-redux-webpack

npm-preset-install --save-dev react-redux-webpack
``` 
### npm-preset-uninstall [flags] <presets>
It will uninstall all modules listed on the presets 

### npm-preset-list [-R|--resolve] <presets>
It will list all modules to be installed on a preset or a collection of presets.  
Use `-R` or `--resolve` to print the version to be resolved by npm after the install.
