webpackHotUpdate("static\\development\\pages\\home\\newsong.js",{

/***/ "./components/SongList.js":
/*!********************************!*\
  !*** ./components/SongList.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SongList; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_lazyload__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-lazyload */ "./node_modules/react-lazyload/lib/index.js");
/* harmony import */ var react_lazyload__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_lazyload__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _Img__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Img */ "./components/Img.js");





var _jsxFileName = "C:\\Users\\summeryio\\Desktop\\NextJS-master\\components\\SongList.js";





var SongList =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(SongList, _Component);

  function SongList() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, SongList);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(SongList).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(SongList, [{
    key: "render",
    value: function render() {
      var songs = this.props.songs;
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("ul", {
        className: "song-list",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        },
        __self: this
      }, songs.map(function (song) {
        var info = song.ar.map(function (artist, a) {
          return "".concat(artist.name).concat(a === song.ar.length - 1 ? '' : '/');
        });
        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
          key: song.id,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 19
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
          href: "/player/".concat(song.id),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 20
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
          className: "name",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 21
          },
          __self: this
        }, song.name, " ", song.alia, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 23
          },
          __self: this
        }, info, " - ", song.al.name))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_lazyload__WEBPACK_IMPORTED_MODULE_7___default.a, {
          height: "100%",
          once: true,
          placeholder: react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
            src: "/static/images/img_default.svg",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 26
            },
            __self: this
          }),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 26
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Img__WEBPACK_IMPORTED_MODULE_8__["default"], {
          imgUrl: song.al.picUrl + '?param=200y200',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 27
          },
          __self: this
        })));
      }));
    }
  }]);

  return SongList;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);



/***/ })

})
//# sourceMappingURL=newsong.js.693de9245439c00c4b80.hot-update.js.map