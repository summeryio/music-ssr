webpackHotUpdate("static\\development\\pages\\list\\playlist.js",{

/***/ "./components/List/Playlist.js":
/*!*************************************!*\
  !*** ./components/List/Playlist.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-int */ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_lazyload__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-lazyload */ "./node_modules/react-lazyload/lib/index.js");
/* harmony import */ var react_lazyload__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_lazyload__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_actions_list__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../redux/actions/list */ "./redux/actions/list.js");
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../Header */ "./components/Header.js");
/* harmony import */ var _Loading__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../Loading */ "./components/Loading.js");
/* harmony import */ var _Img__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../Img */ "./components/Img.js");






var _jsxFileName = "C:\\Users\\summeryio\\Desktop\\music-ssr\\components\\List\\Playlist.js";









var Playlist =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Playlist, _Component);

  function Playlist(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Playlist);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Playlist).call(this, props));
    var playlist = props.playlist;
    _this.state = {
      playlistData: playlist,
      page: 0,
      finished: false,
      isFoot: true
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Playlist, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.isServer) {
        this.props.fetchListPlaylist(0);
      }
    } //接触屏幕

  }, {
    key: "touchStart",
    value: function touchStart(e) {
      this.startx = e.touches[0].pageX;
      this.starty = e.touches[0].pageY;
    } //离开屏幕（[e.changedTouches][2]）

  }, {
    key: "touchEnd",
    value: function touchEnd(e) {
      var endx, endy;
      endx = e.changedTouches[0].pageX;
      endy = e.changedTouches[0].pageY;
      var direction = this.getDirection(this.startx, this.starty, endx, endy);

      switch (direction) {
        case 0:
          // console.log("未滑动！");
          break;

        case 1:
          // console.log("向上！");
          this.loadData();
          break;

        case 2:
          // console.log("向下！");
          break;

        case 3:
          // console.log("向左！");
          break;

        case 4:
          // console.log("向右！");
          break;

        default:
      }
    } //触摸点和离开点连线与[x轴角度][3]

  }, {
    key: "getAngle",
    value: function getAngle(angx, angy) {
      return Math.atan2(angy, angx) * 180 / Math.PI;
    } //根据接触和离开判断方向 1向上 2向下 3向左 4向右 0未发生滑动（[Math.abs][4]）

  }, {
    key: "getDirection",
    value: function getDirection(startx, starty, endx, endy) {
      var angx = endx - startx;
      var angy = endy - starty;
      var result = 0; //如果滑动距离太短

      if (Math.abs(angx) < 2 && Math.abs(angy) < 2) {
        return result;
      }

      var angle = this.getAngle(angx, angy);

      if (angle >= -135 && angle <= -45) {
        result = 1;
      } else if (angle > 45 && angle < 135) {
        result = 2;
      } else if (angle >= 135 && angle <= 180 || angle >= -180 && angle < -135) {
        result = 3;
      } else if (angle >= -45 && angle <= 45) {
        result = 4;
      }

      return result;
    }
  }, {
    key: "loadData",
    value: function loadData() {
      var _this2 = this;

      var fetchListPlaylist = this.props.fetchListPlaylist;
      var dataHeight = this.refs.onPullUp.clientHeight;
      var scrollHeight = document.body.scrollTop || document.documentElement.scrollTop;
      var screenHeight = document.documentElement.clientHeight;
      var h = 10; //自定义距离底部多少时concat数据

      if (dataHeight - scrollHeight - h < screenHeight && this.state.isFoot) {
        this.setState({
          isFoot: false,
          page: this.state.page + 1
        }, function () {
          fetchListPlaylist(_this2.state.page);
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          playlistData = _this$state.playlistData,
          finished = _this$state.finished,
          isFoot = _this$state.isFoot;
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        id: "playlist",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_Header__WEBPACK_IMPORTED_MODULE_11__["default"], {
        title: "\u63A8\u8350\u6B4C\u5355",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "scroll_wrapper",
        ref: "onPullUp",
        onTouchStart: this.touchStart.bind(this),
        onTouchEnd: this.touchEnd.bind(this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("ul", {
        className: "list m-music__list",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127
        },
        __self: this
      }, playlistData.map(function (play, i) {
        var playCount = play.playCount > 100000 ? _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(play.playCount / 10000) + '万' : _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(play.playCount);
        return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
          key: play.id,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 133
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
          className: "pic",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 134
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_Img__WEBPACK_IMPORTED_MODULE_13__["default"], {
          imgUrl: play.coverImgUrl + '?param=400y400',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 136
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
          className: "count",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 138
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("i", {
          className: "icon-headset",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 139
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("em", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 140
          },
          __self: this
        }, playCount))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
          className: "desc",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 143
          },
          __self: this
        }, play.name), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
          href: {
            pathname: '/detail/playlist',
            query: {
              id: play.id
            }
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 144
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
          className: "mask",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 145
          },
          __self: this
        })));
      })), !finished ? playlistData.length && isFoot ? react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
        className: "scroll-tip",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 154
        },
        __self: this
      }, "\u4E0A\u62C9\u52A0\u8F7D\u66F4\u591A") : react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_Loading__WEBPACK_IMPORTED_MODULE_12__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 154
        },
        __self: this
      }) : react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
        className: "scroll-tip",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 156
        },
        __self: this
      }, "\u6211\u662F\u6709\u5E95\u7EBF\u7684")));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      if (nextProps.playlist && nextProps.playlist !== prevState.playlistData) {
        return {
          playlistData: nextProps.playlist,
          isFoot: nextProps.more,
          finished: !nextProps.more
        };
      }

      return null;
    }
  }]);

  return Playlist;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

;

var mapStateToProps = function mapStateToProps(state) {
  return {
    playlist: state.list.playlist.playlists,
    more: state.list.playlist.more
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    fetchListPlaylist: function fetchListPlaylist(page) {
      dispatch(Object(_redux_actions_list__WEBPACK_IMPORTED_MODULE_10__["fetchListPlaylist"])(page));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_9__["connect"])(mapStateToProps, mapDispatchToProps)(Playlist));

/***/ })

})
//# sourceMappingURL=playlist.js.206f5a33e27ec7969d2c.hot-update.js.map