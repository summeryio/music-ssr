// next.config.js
/* const withSass = require('@zeit/next-sass')
const withCss = require('@zeit/next-css');
module.exports = withSass({
}) */


/* eslint-disable */
/* const withCss = require('@zeit/next-css');

// fix: prevents error when .css files are required by node
if (typeof require !== 'undefined') {
  require.extensions['.css'] = (file) => {}
}

module.exports = withCss(); */


// sass && css
/* const withSass = require('@zeit/next-sass')
const withCss = require('@zeit/next-css');
const withPlugins = require("next-compose-plugins");
const withTM = require('next-transpile-modules');

module.exports = withPlugins([withCss, withSass]) */



//next.config.js
/* const withSass = require('@zeit/next-sass')
const withLess = require("@zeit/next-less");
const withCss = require("@zeit/next-css");
const withPlugins = require("next-compose-plugins");
const withTM = require('next-transpile-modules');
const cssLoaderGetLocalIdent = require("css-loader/lib/getLocalIdent.js");

module.exports = withPlugins([withCss, withSass, withLess,withTM], {
  transpileModules: ["antd-mobile"], 
  cssModules: true,
  cssLoaderOptions: {
    localIdentName: "[local]___[hash:base64:5]",
    getLocalIdent: (context, localIdentName, localName, options) => {
      let hz = context.resourcePath.replace(context.rootContext, "");
      if (/node_modules/.test(hz)) {
        return localName;
      } else {
        return cssLoaderGetLocalIdent(
          context,
          localIdentName,
          localName,
          options
        ); 
      }
    }
  }
}); */



const withSass = require('@zeit/next-sass')
const withLess = require("@zeit/next-less");
const withCss = require("@zeit/next-css");
const withPlugins = require("next-compose-plugins");
const cssLoaderGetLocalIdent = require("css-loader/lib/getLocalIdent.js");
const path = require('path');

module.exports = withPlugins([withLess,withCss, withSass], {
  cssModules: true,
  cssLoaderOptions: {
    camelCase: true,
    // localIdentName: "[local]___[hash:base64:5]",
    localIdentName: "[local]",
    getLocalIdent: (context, localIdentName, localName, options) => {
      let hz = context.resourcePath.replace(context.rootContext, "");
      if (/node_modules/.test(hz)) {
        return localName;
      } else {
        return cssLoaderGetLocalIdent(
          context,
          localIdentName,
          localName,
          options
        );
      }
    }
  },
  webpack(config){
    if(config.externals){
      const includes = [/antd-mobile/];
      config.externals = config.externals.map(external => {
        if (typeof external !== 'function') return external;
        return (ctx, req, cb) => {
          return includes.find(include =>
            req.startsWith('.')
              ? include.test(path.resolve(ctx, req))
              : include.test(req)
          )
            ? cb()
            : external(ctx, req, cb);
        };
      });
    }
    return config;
  }
});