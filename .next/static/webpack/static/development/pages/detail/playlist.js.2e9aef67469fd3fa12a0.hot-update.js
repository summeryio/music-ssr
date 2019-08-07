webpackHotUpdate("static\\development\\pages\\detail\\playlist.js",{

/***/ "./pages/detail/playlist.js":
/*!**********************************!*\
  !*** ./pages/detail/playlist.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _components_Detail_Playlist__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Detail/Playlist */ "./components/Detail/Playlist.js");
/* harmony import */ var _redux_actions_detail__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../redux/actions/detail */ "./redux/actions/detail.js");





_components_Detail_Playlist__WEBPACK_IMPORTED_MODULE_2__["default"].getInitialProps =
/*#__PURE__*/
function () {
  var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(props) {
    var _props$ctx, store, isServer, query;

    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _props$ctx = props.ctx, store = _props$ctx.store, isServer = _props$ctx.isServer, query = _props$ctx.query;
            store.getState().home.banner.banners = {};
            store.dispatch(Object(_redux_actions_detail__WEBPACK_IMPORTED_MODULE_3__["fetchDetailPlaylist"])(query.id));
            return _context.abrupt("return", {
              isServer: isServer
            });

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (_components_Detail_Playlist__WEBPACK_IMPORTED_MODULE_2__["default"]);

/***/ })

})
//# sourceMappingURL=playlist.js.2e9aef67469fd3fa12a0.hot-update.js.map