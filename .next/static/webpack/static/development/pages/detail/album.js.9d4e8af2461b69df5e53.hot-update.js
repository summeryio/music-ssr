webpackHotUpdate("static/development/pages/detail/album.js",{

/***/ "./components/Detail/Album.js":
/*!************************************!*\
  !*** ./components/Detail/Album.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_actions_detail__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../redux/actions/detail */ "./redux/actions/detail.js");
/* harmony import */ var _core_util__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../core/util */ "./core/util.js");
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../Header */ "./components/Header.js");
/* harmony import */ var _Loading__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../Loading */ "./components/Loading.js");
/* harmony import */ var _Img__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../Img */ "./components/Img.js");
/* harmony import */ var _SongList__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../SongList */ "./components/SongList.js");






var _jsxFileName = "/Users/a123/Desktop/Web/music-ssr/components/Detail/Album.js";










var Album =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Album, _Component);

  function Album(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Album);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Album).call(this, props)); // const { router: { query } } = props;

    _this.state = {
      albumData: {}
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Album, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var query = this.props.router.query;

      Object(_redux_actions_detail__WEBPACK_IMPORTED_MODULE_9__["fetchDetailAlbum"])(query.id);
    }
  }, {
    key: "render",
    value: function render() {
      var albumData = this.state.albumData;
      var album = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(albumData).length ? albumData.album : {};
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        id: "album_detail",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_Header__WEBPACK_IMPORTED_MODULE_11__["default"], {
        title: "\u6B4C\u5355",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }), _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(albumData).length ? react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "header",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "bg",
        style: {
          backgroundImage: "url(".concat(album.picUrl, ")")
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "cont",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("img", {
        src: album.picUrl + '?param=400y400',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "info",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }, album.name), album.company ? react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }, "\u53D1\u884C\u516C\u53F8\uFF1A", album.company) : null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }, "\u521B\u5EFA\u65F6\u95F4\uFF1A", Object(_core_util__WEBPACK_IMPORTED_MODULE_10__["formatDateYMD"])(album.createTime))))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_SongList__WEBPACK_IMPORTED_MODULE_14__["default"], {
        songs: albumData.songs,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      })) : react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_Loading__WEBPACK_IMPORTED_MODULE_12__["default"], {
        full: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      if (nextProps.album && nextProps.album !== prevState.albumData) {
        return {
          albumData: nextProps.album
        };
      }

      return null;
    }
  }]);

  return Album;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    album: state.detail.album.albums
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    fetchDetailAlbum: function fetchDetailAlbum(id) {
      dispatch(Object(_redux_actions_detail__WEBPACK_IMPORTED_MODULE_9__["fetchDetailAlbum"])(id));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_8__["connect"])(mapStateToProps, mapDispatchToProps)(Object(next_router__WEBPACK_IMPORTED_MODULE_7__["withRouter"])(Album)));

/***/ })

})
//# sourceMappingURL=album.js.9d4e8af2461b69df5e53.hot-update.js.map