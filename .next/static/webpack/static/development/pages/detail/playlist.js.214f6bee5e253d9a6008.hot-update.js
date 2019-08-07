webpackHotUpdate("static/development/pages/detail/playlist.js",{

/***/ "./components/Detail/Playlist.js":
/*!***************************************!*\
  !*** ./components/Detail/Playlist.js ***!
  \***************************************/
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






var _jsxFileName = "/Users/a123/Desktop/Web/music-ssr/components/Detail/Playlist.js";










var Playlist =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Playlist, _Component);

  function Playlist(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Playlist);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Playlist).call(this, props)); // const { router: { query } } = props;

    _this.state = {
      playlistData: {}
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Playlist, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var query = this.props.router.query;

      Object(_redux_actions_detail__WEBPACK_IMPORTED_MODULE_9__["fetchDetailPlaylist"])(query.id);
    }
  }, {
    key: "render",
    value: function render() {
      var playlistData = this.state.playlistData;
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        id: "playlist_detail",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_Header__WEBPACK_IMPORTED_MODULE_11__["default"], {
        title: "\u6B4C\u5355",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }), _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(playlistData).length ? react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "header",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "bg",
        style: {
          backgroundImage: "url(".concat(playlistData.coverImgUrl + '?param=400y400', ")")
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "cont",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("img", {
        src: playlistData.coverImgUrl + '?param=400y400',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "info",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }, playlistData.name), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }, playlistData.creator.nickname), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }, "\u521B\u5EFA\u65F6\u95F4\uFF1A", Object(_core_util__WEBPACK_IMPORTED_MODULE_10__["formatDateYMD"])(playlistData.createTime))))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_SongList__WEBPACK_IMPORTED_MODULE_14__["default"], {
        songs: playlistData.tracks,
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
      if (nextProps.playlist && nextProps.playlist !== prevState.playlistData) {
        return {
          playlistData: nextProps.playlist
        };
      }

      return null;
    }
  }]);

  return Playlist;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    playlist: state.detail.playlist.playlists
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    fetchDetailPlaylist: function fetchDetailPlaylist(id) {
      dispatch(Object(_redux_actions_detail__WEBPACK_IMPORTED_MODULE_9__["fetchDetailPlaylist"])(id));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_8__["connect"])(mapStateToProps, mapDispatchToProps)(Object(next_router__WEBPACK_IMPORTED_MODULE_7__["withRouter"])(Playlist)));

/***/ }),

/***/ "./core/util.js":
/*!**********************!*\
  !*** ./core/util.js ***!
  \**********************/
/*! exports provided: splitArray, formatDateYMD, formatDate, formatDateHM, formatCommentDate, formatStringLine */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "splitArray", function() { return splitArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatDateYMD", function() { return formatDateYMD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatDate", function() { return formatDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatDateHM", function() { return formatDateHM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatCommentDate", function() { return formatCommentDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatStringLine", function() { return formatStringLine; });
/**
 * 
 * @param {要拆分的数组} arr 
 * @param {拆分的数组中length} len 
 */
function splitArray(arr, len) {
  var result = [];

  for (var i = 0; i < arr.length; i += len) {
    result.push(arr.slice(i, i + len));
  }

  return result;
} // 格式化时间戳成 年-月-日

function formatDateYMD(timestamp) {
  var ts = timestamp || new Date().getTime();
  var year = new Date(ts).getFullYear();
  var month = new Date(ts).getMonth() + 1 > 9 ? new Date(ts).getMonth() + 1 : '0' + (new Date(ts).getMonth() + 1);
  var day = new Date(ts).getDate() > 9 ? new Date(ts).getDate() : '0' + new Date(ts).getDate();
  return year + '-' + month + '-' + day;
} // 格式化时间戳成 月-日

function formatDate(timestamp) {
  var ts = timestamp || new Date().getTime();
  var month = new Date(ts).getMonth() + 1 > 9 ? new Date(ts).getMonth() + 1 : '0' + (new Date(ts).getMonth() + 1);
  var day = new Date(ts).getDate() > 9 ? new Date(ts).getDate() : '0' + new Date(ts).getDate();
  return month + '月' + day + '日';
} // 格式化时间戳成 时-分

function formatDateHM(timestamp) {
  var ts = timestamp;
  var min = new Date(ts).getMinutes() > 9 ? new Date(ts).getMinutes() : '0' + new Date(ts).getMinutes();
  var sed = new Date(ts).getSeconds() > 9 ? new Date(ts).getSeconds() : '0' + new Date(ts).getSeconds();
  return min + ':' + sed;
}
/**
 * 格式化评论日期
 * @param {时间戳} ts 
 */

function formatCommentDate(ts) {
  var getDate = new Date(ts);
  var year = getDate.getFullYear();
  var month = getDate.getMonth() + 1;
  var day = getDate.getDate();
  var hour = getDate.getHours() > 9 ? getDate.getHours() : '0' + getDate.getHours();
  var min = getDate.getMinutes() > 9 ? getDate.getMinutes() : '0' + getDate.getMinutes();

  if (isThisYear(ts)) {
    // 今年
    if (isYestday(ts) || isToday(ts)) {
      // 今天||昨天
      if (isYestday(ts)) {
        // 昨天
        return '昨天' + hour + ':' + min;
      } else {
        // 今天
        if (isHour(ts)) {
          // 一小时内
          if (isMinute(ts)) {
            // 一分钟内
            return '刚刚';
          } else {
            var minLeft = new Date(new Date().getTime() - ts).getMinutes();
            return minLeft + '分钟前';
          }
        } else {
          return hour + ':' + min;
        }
      }
    } else {
      return month + '月' + day + '日' + hour + ':' + min;
    }
  } else {
    return year + '年' + month + '月' + day + '日';
  }

  function isThisYear(timestamp) {
    return new Date(timestamp).getFullYear() === new Date().getFullYear();
  }

  function isYestday(timestamp) {
    var nowDate = new Date();
    var todayTamp = new Date(nowDate.getFullYear(), nowDate.getMonth(), nowDate.getDate()).getTime();
    var yestdayTamp = new Date(todayTamp - 24 * 3600 * 1000).getTime();
    return timestamp < todayTamp && yestdayTamp <= timestamp;
  }

  function isToday(timestamp) {
    var nowDate = new Date();
    var todayTamp = new Date(nowDate.getFullYear(), nowDate.getMonth(), nowDate.getDate()).getTime();
    var nowTamp = new Date().getTime();
    return timestamp >= todayTamp && timestamp < nowTamp;
  }

  function isHour(timestamp) {
    var nowTamp = new Date().getTime();
    return nowTamp - timestamp < 3600000;
  }

  function isMinute(timestamp) {
    var nowTamp = new Date().getTime();
    return nowTamp - timestamp < 60000;
  }
} // 将字符串中的换行符替换

function formatStringLine(str) {
  return str.replace(/\n/g, '<br />');
}

/***/ })

})
//# sourceMappingURL=playlist.js.214f6bee5e253d9a6008.hot-update.js.map