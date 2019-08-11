//postcss.config.js
const pxtorem = require("postcss-pxtorem");
module.exports = {
  plugins: [
    pxtorem({
      rootValue: 50,
      unitPrecision: 5,
      propList: ["*"],
      selectorBlackList: [/^\.nop2r/, /^\.am/],//排除antd样式
      replace: true,
      mediaQuery: false,
      minPixelValue: 0
    }),
    require('autoprefixer')({})
  ]
}