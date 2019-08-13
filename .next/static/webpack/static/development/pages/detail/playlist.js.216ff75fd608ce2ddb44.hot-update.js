webpackHotUpdate("static/development/pages/detail/playlist.js",{

/***/ "./components/Comment.js":
/*!*******************************!*\
  !*** ./components/Comment.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_lazyload__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-lazyload */ "./node_modules/react-lazyload/lib/index.js");
/* harmony import */ var react_lazyload__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_lazyload__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_actions_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../redux/actions/common */ "./redux/actions/common.js");
/* harmony import */ var _core_util__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../core/util */ "./core/util.js");
/* harmony import */ var _Loading__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Loading */ "./components/Loading.js");
/* harmony import */ var _Img__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./Img */ "./components/Img.js");
/* harmony import */ var _PullLoadData__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./PullLoadData */ "./components/PullLoadData.js");









var _jsxFileName = "/Users/a123/Desktop/Web/music-ssr/components/Comment.js";









var Comment =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__["default"])(Comment, _Component);

  function Comment() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Comment);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(Comment).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(Comment, [{
    key: "render",
    value: function render() {
      var data = this.props.data;
      return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        id: "comment",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }, _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_3___default()(data).length ? react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_9__["Fragment"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, data.hotComments.length ? react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_9__["Fragment"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("h6", {
        className: "t",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, "\u7CBE\u5F69\u8BC4\u8BBA"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, data.hotComments.map(function (comment) {
        return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("li", {
          key: comment.commentId,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 35
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
          className: "pic",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 36
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_Img__WEBPACK_IMPORTED_MODULE_15__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({
          url: comment.user.avatarUrl,
          size: 60
        }, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 37
          },
          __self: this
        }))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
          className: "intro",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 44
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
          className: "top",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 45
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("a", {
          href: "/",
          className: "name",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 46
          },
          __self: this
        }, comment.user.nickname), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("p", {
          className: "time",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 47
          },
          __self: this
        }, Object(_core_util__WEBPACK_IMPORTED_MODULE_13__["formatDateYMD"])(comment.time)), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("p", {
          className: "like",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 48
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("span", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 49
          },
          __self: this
        }, comment.likedCount), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("i", {
          className: "iconfont icon-like",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 50
          },
          __self: this
        }))), _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_3___default()(comment.beReplied).length ? react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
          className: "replied",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 55
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("p", {
          className: "self",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 56
          },
          __self: this
        }, "\u56DE\u590D", react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("a", {
          href: "/",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 58
          },
          __self: this
        }, "@", comment.beReplied[0].user.nickname), "\uFF1A", comment.content), comment.beReplied[0].content ? react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("p", {
          className: "to",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 63
          },
          __self: this
        }, "@", comment.beReplied[0].user.nickname, "\uFF1A", comment.beReplied[0].content) : react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("p", {
          className: "to",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 65
          },
          __self: this
        }, "\u8BE5\u8BC4\u8BBA\u5DF2\u5220\u9664")) : react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("p", {
          className: "cont",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 71
          },
          __self: this
        }, comment.content)));
      }))) : null, data.comments.length && react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_9__["Fragment"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("h6", {
        className: "t",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      }, "\u6700\u65B0\u8BC4\u8BBA"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        },
        __self: this
      }, data.comments.map(function (comment) {
        return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("li", {
          key: comment.commentId,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 90
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
          className: "pic",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 91
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_Img__WEBPACK_IMPORTED_MODULE_15__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({
          url: comment.user.avatarUrl,
          size: 60
        }, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 92
          },
          __self: this
        }))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
          className: "intro",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 99
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
          className: "top",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 100
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("a", {
          href: "/",
          className: "name",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 101
          },
          __self: this
        }, comment.user.nickname), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("p", {
          className: "time",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 102
          },
          __self: this
        }, Object(_core_util__WEBPACK_IMPORTED_MODULE_13__["formatDateYMD"])(comment.time)), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("p", {
          className: "like",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 103
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("span", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 104
          },
          __self: this
        }, comment.likedCount), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("i", {
          className: "iconfont icon-like",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 105
          },
          __self: this
        }))), _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_3___default()(comment.beReplied).length ? react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
          className: "replied",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 110
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("p", {
          className: "self",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 111
          },
          __self: this
        }, "\u56DE\u590D", react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("a", {
          href: "/",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 113
          },
          __self: this
        }, "@", comment.beReplied[0].user.nickname), "\uFF1A", comment.content), comment.beReplied[0].content ? react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("p", {
          className: "to",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 118
          },
          __self: this
        }, "@", comment.beReplied[0].user.nickname, "\uFF1A", comment.beReplied[0].content) : react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("p", {
          className: "to",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 120
          },
          __self: this
        }, "\u8BE5\u8BC4\u8BBA\u5DF2\u5220\u9664")) : react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("p", {
          className: "cont",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 126
          },
          __self: this
        }, comment.content)));
      })))) : null);
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(props) {
        var _props$ctx, store, isServer, query;

        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _props$ctx = props.ctx, store = _props$ctx.store, isServer = _props$ctx.isServer, query = _props$ctx.query;
                console.log(1111);
                store.dispatch(Object(_redux_actions_common__WEBPACK_IMPORTED_MODULE_12__["fetchCommonComment"])(query.id));
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

      function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return Comment;
}(react__WEBPACK_IMPORTED_MODULE_9__["Component"]); // export default Comment


var mapStateToProps = function mapStateToProps(state) {
  return {
    comment: state.common.comment.comments
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    fetchCommonComment: function fetchCommonComment(id) {
      dispatch(Object(_redux_actions_common__WEBPACK_IMPORTED_MODULE_12__["fetchCommonComment"])(id));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_11__["connect"])(mapStateToProps, mapDispatchToProps)(Comment));

/***/ })

})
//# sourceMappingURL=playlist.js.216ff75fd608ce2ddb44.hot-update.js.map