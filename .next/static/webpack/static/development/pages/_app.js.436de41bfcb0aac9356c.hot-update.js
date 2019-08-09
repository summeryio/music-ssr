webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./components/BackTop.js":
/*!*******************************!*\
  !*** ./components/BackTop.js ***!
  \*******************************/
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






var _jsxFileName = "C:\\Users\\summeryio\\Desktop\\music-ssr\\components\\BackTop.js";


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
      var top = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;

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
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        id: "back_top",
        className: backTopShow ? 'show' : '',
        onClick: this.handleScrollTop,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("i", {
        className: "iconfont icon-yooxi",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }));
    }
  }]);

  return Layout;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);



/***/ }),

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next-server/dist/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _BackTop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BackTop */ "./components/BackTop.js");
/* harmony import */ var _static_css_style_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../static/css/style.scss */ "./static/css/style.scss");
/* harmony import */ var _static_css_style_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_static_css_style_scss__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\summeryio\\Desktop\\music-ssr\\components\\Layout.js";




/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var title = _ref.title,
      children = _ref.children;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, title)), children, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_BackTop__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }));
});
/* import React, { Component, Fragment } from 'react'
import Head from 'next/head';
import '../static/css/style.scss'

export default class Layout extends Component {
    constructor(props) {
        super(props)

        this.state = {
            backTopShow: false
        }

        this.handleScroll = this.handleScroll.bind(this)
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll, true)
    }

    handleScroll() {
        let top = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop
        if (top > 300) {
            this.setState({
                backTopShow: true
            })
        } else {
            this.setState({
                backTopShow: false
            })
        }
    }
    
    handleScrollTop() {
        window.scrollTo({
            left: 0,
            top: 0,
            behavior: 'smooth',
        });
    }
  
    render() {
        let {backTopShow} = this.state

        return (
            <Fragment>
                <Head>
                    <title>{this.props.title}</title>
                </Head>
                {this.props.children}
                <div id="back_top" className={backTopShow ? 'show' : ''} onClick={this.handleScrollTop}><i className="iconfont icon-yooxi"></i></div>
            </Fragment>
        )
    }
} */

/***/ })

})
//# sourceMappingURL=_app.js.436de41bfcb0aac9356c.hot-update.js.map