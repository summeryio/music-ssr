webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./redux/sagas/home/playlist.js":
/*!**************************************!*\
  !*** ./redux/sagas/home/playlist.js ***!
  \**************************************/
/*! exports provided: playlist, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "playlist", function() { return playlist; });
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga/effects */ "./node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js");
/* harmony import */ var _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../constants/ActionTypes */ "./constants/ActionTypes.js");
/* harmony import */ var _constants_ConstTypes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../constants/ConstTypes */ "./constants/ConstTypes.js");
/* harmony import */ var _actions_home__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../actions/home */ "./redux/actions/home.js");


var _marked =
/*#__PURE__*/
_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(playlist);





function playlist() {
  var res, data;
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function playlist$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          if (false) {}

          _context.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["take"])(_constants_ActionTypes__WEBPACK_IMPORTED_MODULE_2__["FETCH_HOME_PLAYLIST"]);

        case 3:
          _context.prev = 3;
          _context.next = 6;
          return fetch("".concat(_constants_ConstTypes__WEBPACK_IMPORTED_MODULE_3__["URL_HEADER"], "/personalized?limit=9"));

        case 6:
          res = _context.sent;
          _context.next = 9;
          return res.json();

        case 9:
          data = _context.sent;

          if (!(data.code === 200)) {
            _context.next = 13;
            break;
          }

          _context.next = 13;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_actions_home__WEBPACK_IMPORTED_MODULE_4__["fetchHomePlaylistSuccess"])(data.result));

        case 13:
          _context.next = 19;
          break;

        case 15:
          _context.prev = 15;
          _context.t0 = _context["catch"](3);
          _context.next = 19;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_actions_home__WEBPACK_IMPORTED_MODULE_4__["fetchHomePlaylistFail"])(_context.t0));

        case 19:
          _context.next = 0;
          break;

        case 21:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, null, [[3, 15]]);
}
/* harmony default export */ __webpack_exports__["default"] = ([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(playlist)]);

/***/ })

})
//# sourceMappingURL=_app.js.cacaf516b74da17516bb.hot-update.js.map