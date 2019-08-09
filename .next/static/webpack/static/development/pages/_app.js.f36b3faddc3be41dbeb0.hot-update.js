webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Layout; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/head */ "./node_modules/next-server/dist/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _static_css_style_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../static/css/style.scss */ "./static/css/style.scss");
/* harmony import */ var _static_css_style_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_static_css_style_scss__WEBPACK_IMPORTED_MODULE_8__);






var _jsxFileName = "C:\\Users\\summeryio\\Desktop\\music-ssr\\components\\Layout.js";

/* import React, { Component, Fragment } from 'react';
import Head from 'next/head';

import '../static/css/style.scss'

export default ({title, children }) => (
  <Fragment>
    <Head>
      <title>{title}</title>
    </Head>
    {children}
    <div id="back_top"><i className="iconfont icon-yooxi"></i></div>
  </Fragment>
);
 */




var Layout =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Layout, _Component);

  function Layout(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Layout);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Layout).call(this, props));
    _this.state = {
      backTopShow: false
    };
    _this.handleScroll = _this.handleScroll.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Layout, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      window.addEventListener('scroll', this.handleScroll, true);
    }
  }, {
    key: "handleScroll",
    value: function handleScroll() {
      var top = document.documentElement.scrollTop;

      if (top > 300) {
        this.setState({
          backTopShow: true
        });
      } else {
        this.setState({
          backTopShow: false
        });
      }
    }
  }, {
    key: "handleScrollTop",
    value: function handleScrollTop() {
      window.scrollTo({
        left: 0,
        top: 0,
        behavior: 'smooth'
      });
    }
  }, {
    key: "render",
    value: function render() {
      var backTopShow = this.state.backTopShow;
      console.log(backTopShow);
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_6__["Fragment"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_7___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("title", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }, this.props.title)), this.props.children, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        id: "back_top",
        className: backTopShow ? 'show' : '',
        onClick: this.handleScrollTop,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("i", {
        className: "iconfont icon-yooxi",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      })));
    }
  }]);

  return Layout;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);



/***/ })

})
//# sourceMappingURL=_app.js.f36b3faddc3be41dbeb0.hot-update.js.map