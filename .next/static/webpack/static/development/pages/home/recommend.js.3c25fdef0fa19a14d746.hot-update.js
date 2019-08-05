webpackHotUpdate("static\\development\\pages\\home\\recommend.js",{

/***/ "./components/Home/Recommend.js":
/*!**************************************!*\
  !*** ./components/Home/Recommend.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-int */ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_lazyload__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-lazyload */ "./node_modules/react-lazyload/lib/index.js");
/* harmony import */ var react_lazyload__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_lazyload__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_actions_home__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../redux/actions/home */ "./redux/actions/home.js");
/* harmony import */ var _HomeModule__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./HomeModule */ "./components/Home/HomeModule.js");
/* harmony import */ var _Loading__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../Loading */ "./components/Loading.js");
/* harmony import */ var _Img__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../Img */ "./components/Img.js");







var _jsxFileName = "C:\\Users\\summeryio\\Desktop\\NextJS-master\\components\\Home\\Recommend.js";









var Home =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(Home, _Component);

  function Home(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Home);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Home).call(this, props));
    var banner = props.banner,
        playlist = props.playlist,
        album = props.album;
    _this.state = {
      bannerData: banner,
      playlistData: playlist,
      albumData: album
    };
    _this.swiper = null;
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Home, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.swiper.update();
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.isServer) {
        this.props.fetchHomeBanner(2);
        this.props.fetchHomePlaylist();
        this.props.fetchHomeAlbum();
      }

      this.swiper = new Swiper('.swiper-container', {
        resistanceRatio: 0,
        pagination: {
          el: '.swiper-pagination'
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          bannerData = _this$state.bannerData,
          playlistData = _this$state.playlistData,
          albumData = _this$state.albumData;
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_HomeModule__WEBPACK_IMPORTED_MODULE_12__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
        id: 'home',
        nav: 'recommend'
      }, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "banner swiper-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "sliderWrap swiper-wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }, bannerData.map(function (banner, b) {
        var imageUrl = banner.imageUrl;
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
          href: "/",
          key: b,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 82
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
          className: "swiper-slide",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 83
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
          src: imageUrl && imageUrl + '?param=1024y400',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 83
          },
          __self: this
        })));
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "swiper-pagination",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        __self: this
      })), playlistData.length ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "playlist home-list",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
        href: "/list/playlist",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        },
        __self: this
      }, "\u63A8\u8350\u6B4C\u5355"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("i", {
        className: "iconfont icon-right_",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        },
        __self: this
      })))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("ul", {
        className: "list",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        },
        __self: this
      }, playlistData.map(function (play) {
        var playCount = play.playCount > 100000 ? _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1___default()(play.playCount / 10000) + '万' : _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1___default()(play.playCount);
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
          key: play.id,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 107
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          className: "pic",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 108
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_lazyload__WEBPACK_IMPORTED_MODULE_9___default.a, {
          height: "2.34rem",
          placeholder: react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
            src: "/static/images/img_default.svg",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 109
            },
            __self: this
          }),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 109
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_Img__WEBPACK_IMPORTED_MODULE_14__["default"], {
          imgUrl: play.picUrl + '?param=400y400',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 110
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
          className: "count",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 112
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("i", {
          className: "iconfont icon-earphonee",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 113
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("em", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 114
          },
          __self: this
        }, playCount))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
          className: "desc",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 117
          },
          __self: this
        }, play.name), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
          href: "/playlist-detail/".concat(play.id),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 118
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
          className: "mask",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 118
          },
          __self: this
        })));
      }))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "albumlist home-list",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
        href: "/list/album",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128
        },
        __self: this
      }, "\u65B0\u789F\u4E0A\u67B6"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("i", {
        className: "iconfont icon-right_",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129
        },
        __self: this
      })))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("ul", {
        className: "list",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132
        },
        __self: this
      }, albumData.map(function (play) {
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
          key: play.id,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 136
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          className: "pic",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 137
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_lazyload__WEBPACK_IMPORTED_MODULE_9___default.a, {
          height: "2.34rem",
          placeholder: react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
            src: "/static/images/img_default.svg",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 138
            },
            __self: this
          }),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 138
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_Img__WEBPACK_IMPORTED_MODULE_14__["default"], {
          imgUrl: play.picUrl + '?param=400y400',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 139
          },
          __self: this
        }))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
          className: "desc",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 142
          },
          __self: this
        }, play.name), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
          href: "/album-detail/".concat(play.id),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 143
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
          className: "mask",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 143
          },
          __self: this
        })));
      })))) : react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_Loading__WEBPACK_IMPORTED_MODULE_13__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 151
        },
        __self: this
      }));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      if (nextProps.banner && nextProps.banner !== prevState.bannerData) {
        return {
          bannerData: nextProps.banner
        };
      }

      if (nextProps.playlist && nextProps.playlist !== prevState.playlistData) {
        return {
          playlistData: nextProps.playlist
        };
      }

      if (nextProps.album && nextProps.album !== prevState.albumData) {
        return {
          albumData: nextProps.album
        };
      }

      return null;
    }
  }]);

  return Home;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

;

var mapStateToProps = function mapStateToProps(state) {
  return {
    banner: state.home.banner.banners,
    playlist: state.home.playlist.playlists,
    album: state.home.album.albums
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    fetchHomeBanner: function fetchHomeBanner(pageSize) {
      dispatch(Object(_redux_actions_home__WEBPACK_IMPORTED_MODULE_11__["fetchHomeBanner"])(pageSize));
    },
    fetchHomePlaylist: function fetchHomePlaylist() {
      dispatch(Object(_redux_actions_home__WEBPACK_IMPORTED_MODULE_11__["fetchHomePlaylist"])());
    },
    fetchHomeAlbum: function fetchHomeAlbum() {
      dispatch(Object(_redux_actions_home__WEBPACK_IMPORTED_MODULE_11__["fetchHomeAlbum"])());
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_10__["connect"])(mapStateToProps, mapDispatchToProps)(Home));

/***/ })

})
//# sourceMappingURL=recommend.js.3c25fdef0fa19a14d746.hot-update.js.map