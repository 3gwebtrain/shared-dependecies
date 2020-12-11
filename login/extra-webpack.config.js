const singleSpaAngularWebpack = require('single-spa-angular/lib/webpack').default;

module.exports = (config, options) => {
  const singleSpaWebpackConfig = singleSpaAngularWebpack(config, options);

  singleSpaWebpackConfig.externals = [
    /^@ibo\/*/,

    /^single-spa$/,
    /^single-spa-angular$/,

    /^rxjs$/,
    /^rxjs\/operators$/,
    
    // angular
    /^@angular\/core$/,
    /^@angular\/compiler$/,
    /^@angular\/common$/,
    /^@angular\/common\/http$/,
    /^@angular\/forms$/,
    /^@angular\/router$/,
    /^@angular\/animations$/,
    /^@angular\/animations\/browser/,
    /^@angular\/platform-browser$/,
    /^@angular\/platform-browser-dynamic$/,
    /^@angular\/platform-browser\/animations$/,
    /^zone\.js$/
  ];

  // Feel free to modify this webpack config however you'd like to
  return singleSpaWebpackConfig;
};
