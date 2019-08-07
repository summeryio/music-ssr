webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./redux/sagas/detail/album.js":
/*!*************************************!*\
  !*** ./redux/sagas/detail/album.js ***!
  \*************************************/
/*! exports provided: album, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "album", function() { return album; });
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
_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(album);






function album() {
  var query, res, data;
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function album$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          if (false) {}

          _context.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["select"])(function (state) {
            return state.detail.album;
          });

        case 3:
          query = _context.sent;

          if (query.id) {
            _context.next = 6;
            break;
          }

          return _context.abrupt("return");

        case 6:
          _context.prev = 6;
          _context.next = 9;
          return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1___default()("".concat(_constants_ConstTypes__WEBPACK_IMPORTED_MODULE_4__["URL_HEADER"], "/album?id=").concat(query.id));

        case 9:
          res = _context.sent;
          _context.next = 12;
          return res.json();

        case 12:
          data = _context.sent;

          if (!(data.code === 200)) {
            _context.next = 16;
            break;
          }

          _context.next = 16;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])(Object(_actions_detail__WEBPACK_IMPORTED_MODULE_5__["fetchDetailAlbumSuccess"])(data));

        case 16:
          _context.next = 22;
          break;

        case 18:
          _context.prev = 18;
          _context.t0 = _context["catch"](6);
          _context.next = 22;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])(Object(_actions_detail__WEBPACK_IMPORTED_MODULE_5__["fetchDetailAlbumFail"])(_context.t0));

        case 22:
          _context.next = 24;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["take"])(_constants_ActionTypes__WEBPACK_IMPORTED_MODULE_3__["FETCH_DETAIL_ALBUM"]);

        case 24:
          _context.next = 0;
          break;

        case 26:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, null, [[6, 18]]);
}
/* harmony default export */ __webpack_exports__["default"] = ([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["fork"])(album)]);

/***/ })

})
//# sourceMappingURL=_app.js.cd3020e3a0f5d2d58a93.hot-update.js.map