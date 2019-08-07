webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./redux/sagas/detail/playlist.js":
/*!****************************************!*\
  !*** ./redux/sagas/detail/playlist.js ***!
  \****************************************/
/*! exports provided: playlist, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "playlist", function() { return playlist; });
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-saga/effects */ "./node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js");
/* harmony import */ var _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../constants/ActionTypes */ "./constants/ActionTypes.js");
/* harmony import */ var _constants_ConstTypes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../constants/ConstTypes */ "./constants/ConstTypes.js");
/* harmony import */ var _actions_detail__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../actions/detail */ "./redux/actions/detail.js");


var _marked =
/*#__PURE__*/
_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(playlist);






function playlist() {
  var query, res, data;
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function playlist$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          if (false) {}

          _context.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["select"])(function (state) {
            return state.detail.playlist;
          });

        case 3:
          query = _context.sent;
          _context.prev = 4;
          _context.next = 7;
          return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1___default()("".concat(_constants_ConstTypes__WEBPACK_IMPORTED_MODULE_4__["URL_HEADER"], "/playlist/detail?id=").concat(query.id));

        case 7:
          res = _context.sent;
          _context.next = 10;
          return res.json();

        case 10:
          data = _context.sent;

          if (!(data.code === 200)) {
            _context.next = 15;
            break;
          }

          if (data.playlist.tracks.length > 10) {
            data.playlist.tracks = data.playlist.tracks.filter(function (song, i) {
              console.log(i);
              return i > 10;
            });
          }

          _context.next = 15;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])(Object(_actions_detail__WEBPACK_IMPORTED_MODULE_5__["fetchDetailPlaylistSuccess"])(data.playlist));

        case 15:
          _context.next = 21;
          break;

        case 17:
          _context.prev = 17;
          _context.t0 = _context["catch"](4);
          _context.next = 21;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])(Object(_actions_detail__WEBPACK_IMPORTED_MODULE_5__["fetchDetailPlaylistFail"])(_context.t0));

        case 21:
          _context.next = 23;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["take"])(_constants_ActionTypes__WEBPACK_IMPORTED_MODULE_3__["FETCH_DETAIL_PLSYLIST"]);

        case 23:
          _context.next = 0;
          break;

        case 25:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, null, [[4, 17]]);
}
/* harmony default export */ __webpack_exports__["default"] = ([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["fork"])(playlist)]);

/***/ })

})
//# sourceMappingURL=_app.js.791001042ec2fc4b4ff5.hot-update.js.map