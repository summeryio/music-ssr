module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "+A8i":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return fetchListPlaylist; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return fetchListPlaylistSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return fetchListPlaylistFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return fetchListAlbum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return fetchListAlbumSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return fetchListAlbumFail; });
/* harmony import */ var _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("3W+V");

function fetchListPlaylist(page) {
  return {
    type: _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_0__[/* FETCH_LIST_PLSYLIST */ "y"],
    payload: {
      page: page
    }
  };
}
function fetchListPlaylistSuccess(data, more) {
  return {
    type: _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_0__[/* FETCH_LIST_PLSYLIST_SUCCESS */ "A"],
    payload: {
      data: data,
      more: more
    }
  };
}
function fetchListPlaylistFail() {
  return {
    type: _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_0__[/* FETCH_LIST_PLSYLIST_FAIL */ "z"]
  };
}
function fetchListAlbum(page) {
  return {
    type: _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_0__[/* FETCH_LIST_ALBUM */ "v"],
    payload: {
      page: page
    }
  };
}
function fetchListAlbumSuccess(data, more) {
  return {
    type: _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_0__[/* FETCH_LIST_ALBUM_SUCCESS */ "x"],
    payload: {
      data: data,
      more: more
    }
  };
}
function fetchListAlbumFail() {
  return {
    type: _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_0__[/* FETCH_LIST_ALBUM_FAIL */ "w"]
  };
}

/***/ }),

/***/ "+Q4S":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return fetchDetailPlaylist; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return fetchDetailPlaylistSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return fetchDetailPlaylistFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return fetchDetailAlbum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return fetchDetailAlbumSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return fetchDetailAlbumFail; });
/* harmony import */ var _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("3W+V");

function fetchDetailPlaylist(id) {
  return {
    type: _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_0__[/* FETCH_DETAIL_PLSYLIST */ "d"],
    payload: {
      id: id
    }
  };
}
function fetchDetailPlaylistSuccess(data) {
  return {
    type: _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_0__[/* FETCH_DETAIL_PLSYLIST_SUCCESS */ "f"],
    payload: {
      data: data
    }
  };
}
function fetchDetailPlaylistFail() {
  return {
    type: _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_0__[/* FETCH_DETAIL_PLSYLIST_FAIL */ "e"]
  };
}
function fetchDetailAlbum(id) {
  return {
    type: _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_0__[/* FETCH_DETAIL_ALBUM */ "a"],
    payload: {
      id: id
    }
  };
}
function fetchDetailAlbumSuccess(data, more) {
  return {
    type: _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_0__[/* FETCH_DETAIL_ALBUM_SUCCESS */ "c"],
    payload: {
      data: data,
      more: more
    }
  };
}
function fetchDetailAlbumFail() {
  return {
    type: _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_0__[/* FETCH_DETAIL_ALBUM_FAIL */ "b"]
  };
}

/***/ }),

/***/ "+UT9":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return fetchHomeBanner; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return fetchHomeBannerSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return fetchHomeBannerFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return fetchHomePlaylist; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return fetchHomePlaylistSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return fetchHomePlaylistFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return fetchHomeAlbum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return fetchHomeAlbumSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return fetchHomeAlbumFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return fetchNewsong; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return fetchNewsongSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return fetchNewsongFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return fetchRank; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return fetchRankSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return fetchRankFail; });
/* harmony import */ var _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("3W+V");

function fetchHomeBanner(pageSize) {
  return {
    type: _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_0__[/* FETCH_HOME_BANNER */ "j"],
    payload: {
      pageSize: pageSize
    }
  };
}
function fetchHomeBannerSuccess(data) {
  return {
    type: _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_0__[/* FETCH_HOME_BANNER_SUCCESS */ "l"],
    payload: data
  };
}
function fetchHomeBannerFail() {
  return {
    type: _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_0__[/* FETCH_HOME_BANNER_FAIL */ "k"]
  };
}
function fetchHomePlaylist() {
  return {
    type: _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_0__[/* FETCH_HOME_PLAYLIST */ "p"]
  };
}
function fetchHomePlaylistSuccess(data) {
  return {
    type: _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_0__[/* FETCH_HOME_PLAYLIST_SUCCESS */ "r"],
    payload: data
  };
}
function fetchHomePlaylistFail() {
  return {
    type: _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_0__[/* FETCH_HOME_PLAYLIST_FAIL */ "q"]
  };
}
function fetchHomeAlbum() {
  return {
    type: _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_0__[/* FETCH_HOME_ALBUM */ "g"]
  };
}
function fetchHomeAlbumSuccess(data) {
  return {
    type: _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_0__[/* FETCH_HOME_ALBUM_SUCCESS */ "i"],
    payload: data
  };
}
function fetchHomeAlbumFail() {
  return {
    type: _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_0__[/* FETCH_HOME_ALBUM_FAIL */ "h"]
  };
} // 新歌

function fetchNewsong() {
  return {
    type: _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_0__[/* FETCH_HOME_NEWSONG */ "m"]
  };
}
function fetchNewsongSuccess(data) {
  return {
    type: _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_0__[/* FETCH_HOME_NEWSONG_SUCCESS */ "o"],
    payload: data
  };
}
function fetchNewsongFail() {
  return {
    type: _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_0__[/* FETCH_HOME_NEWSONG_FAIL */ "n"]
  };
} // 榜单

function fetchRank() {
  return {
    type: _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_0__[/* FETCH_HOME_RANK */ "s"]
  };
}
function fetchRankSuccess(data) {
  return {
    type: _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_0__[/* FETCH_HOME_RANK_SUCCESS */ "u"],
    payload: data
  };
}
function fetchRankFail() {
  return {
    type: _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_0__[/* FETCH_HOME_RANK_FAIL */ "t"]
  };
}

/***/ }),

/***/ "/+P4":
/***/ (function(module, exports, __webpack_require__) {

var _Object$getPrototypeOf = __webpack_require__("Bhuq");

var _Object$setPrototypeOf = __webpack_require__("TRZx");

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = _Object$setPrototypeOf ? _Object$getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || _Object$getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "/+oN":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "/HRN":
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("1TCz");


/***/ }),

/***/ "0bYB":
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ "0iUn":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _classCallCheck; });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "1TCz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/regenerator/index.js
var regenerator = __webpack_require__("ln6h");
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__("O40h");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__("0iUn");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js
var createClass = __webpack_require__("sLSF");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js + 2 modules
var possibleConstructorReturn = __webpack_require__("MI3g");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js
var getPrototypeOf = __webpack_require__("a7VT");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js + 1 modules
var inherits = __webpack_require__("Tit0");

// EXTERNAL MODULE: ./node_modules/next/app.js
var app = __webpack_require__("8Bbg");
var app_default = /*#__PURE__*/__webpack_require__.n(app);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: external "next-redux-wrapper"
var external_next_redux_wrapper_ = __webpack_require__("JMOJ");
var external_next_redux_wrapper_default = /*#__PURE__*/__webpack_require__.n(external_next_redux_wrapper_);

// EXTERNAL MODULE: external "next-redux-saga"
var external_next_redux_saga_ = __webpack_require__("pEZS");
var external_next_redux_saga_default = /*#__PURE__*/__webpack_require__.n(external_next_redux_saga_);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js
var is_array = __webpack_require__("p0XB");
var is_array_default = /*#__PURE__*/__webpack_require__.n(is_array);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithoutHoles.js

function _arrayWithoutHoles(arr) {
  if (is_array_default()(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/array/from.js
var from = __webpack_require__("d04V");
var from_default = /*#__PURE__*/__webpack_require__.n(from);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/is-iterable.js
var is_iterable = __webpack_require__("yLu3");
var is_iterable_default = /*#__PURE__*/__webpack_require__.n(is_iterable);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArray.js


function _iterableToArray(iter) {
  if (is_iterable_default()(Object(iter)) || Object.prototype.toString.call(iter) === "[object Arguments]") return from_default()(iter);
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableSpread.js
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js



function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}
// EXTERNAL MODULE: external "redux"
var external_redux_ = __webpack_require__("rKB8");

// EXTERNAL MODULE: external "redux-saga"
var external_redux_saga_ = __webpack_require__("1fKG");
var external_redux_saga_default = /*#__PURE__*/__webpack_require__.n(external_redux_saga_);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js + 1 modules
var objectSpread = __webpack_require__("zrwo");

// EXTERNAL MODULE: ./constants/ActionTypes.js
var ActionTypes = __webpack_require__("3W+V");

// CONCATENATED MODULE: ./redux/reducers/home/banner.js


var banner_initialState = {
  banners: [],
  pageSize: 0
};

var banner_banner = function banner() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : banner_initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  var type = action.type,
      payload = action.payload;

  switch (type) {
    case ActionTypes["j" /* FETCH_HOME_BANNER */]:
      return Object(objectSpread["a" /* default */])({}, state, {
        pageSize: payload.pageSize
      });

    case ActionTypes["k" /* FETCH_HOME_BANNER_FAIL */]:
      return banner_initialState;

    case ActionTypes["l" /* FETCH_HOME_BANNER_SUCCESS */]:
      return Object(objectSpread["a" /* default */])({}, state, {
        banners: payload
      });

    default:
      return state;
  }
};

/* harmony default export */ var home_banner = (banner_banner);
// CONCATENATED MODULE: ./redux/reducers/home/playlist.js


var playlist_initialState = {
  playlists: []
};

var playlist_playlist = function playlist() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : playlist_initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  var type = action.type,
      payload = action.payload;

  switch (type) {
    case ActionTypes["p" /* FETCH_HOME_PLAYLIST */]:
    case ActionTypes["q" /* FETCH_HOME_PLAYLIST_FAIL */]:
      return playlist_initialState;

    case ActionTypes["r" /* FETCH_HOME_PLAYLIST_SUCCESS */]:
      return Object(objectSpread["a" /* default */])({}, state, {
        playlists: payload
      });

    default:
      return state;
  }
};

/* harmony default export */ var home_playlist = (playlist_playlist);
// CONCATENATED MODULE: ./redux/reducers/home/album.js


var album_initialState = {
  albums: []
};

var album_album = function album() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : album_initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  var type = action.type,
      payload = action.payload;

  switch (type) {
    case ActionTypes["g" /* FETCH_HOME_ALBUM */]:
    case ActionTypes["h" /* FETCH_HOME_ALBUM_FAIL */]:
      return album_initialState;

    case ActionTypes["i" /* FETCH_HOME_ALBUM_SUCCESS */]:
      return Object(objectSpread["a" /* default */])({}, state, {
        albums: payload
      });

    default:
      return state;
  }
};

/* harmony default export */ var home_album = (album_album);
// CONCATENATED MODULE: ./redux/reducers/home/newsong.js


var newsong_initialState = {
  newsongs: []
};

var newsong_newsong = function newsong() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : newsong_initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  var type = action.type,
      payload = action.payload;

  switch (type) {
    case ActionTypes["m" /* FETCH_HOME_NEWSONG */]:
    case ActionTypes["n" /* FETCH_HOME_NEWSONG_FAIL */]:
      return newsong_initialState;

    case ActionTypes["o" /* FETCH_HOME_NEWSONG_SUCCESS */]:
      return Object(objectSpread["a" /* default */])({}, state, {
        newsongs: payload
      });

    default:
      return state;
  }
};

/* harmony default export */ var home_newsong = (newsong_newsong);
// CONCATENATED MODULE: ./redux/reducers/home/rank.js


var rank_initialState = {
  ranks: []
};

var rank_rank = function rank() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : rank_initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  var type = action.type,
      payload = action.payload;

  switch (type) {
    case ActionTypes["s" /* FETCH_HOME_RANK */]:
    case ActionTypes["t" /* FETCH_HOME_RANK_FAIL */]:
      return rank_initialState;

    case ActionTypes["u" /* FETCH_HOME_RANK_SUCCESS */]:
      return Object(objectSpread["a" /* default */])({}, state, {
        ranks: payload
      });

    default:
      return state;
  }
};

/* harmony default export */ var home_rank = (rank_rank);
// CONCATENATED MODULE: ./redux/reducers/home/index.js






/* harmony default export */ var home = (Object(external_redux_["combineReducers"])({
  banner: home_banner,
  playlist: home_playlist,
  album: home_album,
  newsong: home_newsong,
  rank: home_rank
}));
// CONCATENATED MODULE: ./redux/reducers/list/playlist.js


var list_playlist_initialState = {
  playlists: [],
  page: 0,
  more: true
};

var list_playlist_playlist = function playlist() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : list_playlist_initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  var type = action.type,
      payload = action.payload;

  switch (type) {
    case ActionTypes["y" /* FETCH_LIST_PLSYLIST */]:
      return Object(objectSpread["a" /* default */])({}, state, {
        page: payload.page
      });

    case ActionTypes["z" /* FETCH_LIST_PLSYLIST_FAIL */]:
      return list_playlist_initialState;

    case ActionTypes["A" /* FETCH_LIST_PLSYLIST_SUCCESS */]:
      return Object(objectSpread["a" /* default */])({}, state, {
        playlists: payload.data,
        more: payload.more
      });

    default:
      return state;
  }
};

/* harmony default export */ var list_playlist = (list_playlist_playlist);
// CONCATENATED MODULE: ./redux/reducers/list/album.js


var list_album_initialState = {
  albums: [],
  page: 0,
  more: true
};

var list_album_album = function album() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : list_album_initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  var type = action.type,
      payload = action.payload;

  switch (type) {
    case ActionTypes["v" /* FETCH_LIST_ALBUM */]:
      return Object(objectSpread["a" /* default */])({}, state, {
        page: payload.page
      });

    case ActionTypes["w" /* FETCH_LIST_ALBUM_FAIL */]:
      return list_album_initialState;

    case ActionTypes["x" /* FETCH_LIST_ALBUM_SUCCESS */]:
      return Object(objectSpread["a" /* default */])({}, state, {
        albums: payload.data,
        more: payload.more
      });

    default:
      return state;
  }
};

/* harmony default export */ var list_album = (list_album_album);
// CONCATENATED MODULE: ./redux/reducers/list/index.js



/* harmony default export */ var list = (Object(external_redux_["combineReducers"])({
  playlist: list_playlist,
  album: list_album
}));
// CONCATENATED MODULE: ./redux/reducers/detail/playlist.js


var detail_playlist_initialState = {
  playlists: {},
  id: null
};

var detail_playlist_playlist = function playlist() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : detail_playlist_initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  var type = action.type,
      payload = action.payload;

  switch (type) {
    case ActionTypes["d" /* FETCH_DETAIL_PLSYLIST */]:
      return Object(objectSpread["a" /* default */])({}, state, {
        id: payload.id
      });

    case ActionTypes["e" /* FETCH_DETAIL_PLSYLIST_FAIL */]:
      return detail_playlist_initialState;

    case ActionTypes["f" /* FETCH_DETAIL_PLSYLIST_SUCCESS */]:
      return Object(objectSpread["a" /* default */])({}, state, {
        playlists: payload.data
      });

    default:
      return state;
  }
};

/* harmony default export */ var detail_playlist = (detail_playlist_playlist);
// CONCATENATED MODULE: ./redux/reducers/detail/album.js


var detail_album_initialState = {
  albums: {},
  id: null
};

var detail_album_album = function album() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : detail_album_initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  var type = action.type,
      payload = action.payload;

  switch (type) {
    case ActionTypes["a" /* FETCH_DETAIL_ALBUM */]:
      return Object(objectSpread["a" /* default */])({}, state, {
        id: payload.id
      });

    case ActionTypes["b" /* FETCH_DETAIL_ALBUM_FAIL */]:
      return detail_album_initialState;

    case ActionTypes["c" /* FETCH_DETAIL_ALBUM_SUCCESS */]:
      return Object(objectSpread["a" /* default */])({}, state, {
        albums: payload.data
      });

    default:
      return state;
  }
};

/* harmony default export */ var detail_album = (detail_album_album);
// CONCATENATED MODULE: ./redux/reducers/detail/index.js



/* harmony default export */ var detail = (Object(external_redux_["combineReducers"])({
  playlist: detail_playlist,
  album: detail_album
}));
// CONCATENATED MODULE: ./redux/reducers/index.js




/* harmony default export */ var reducers = (Object(external_redux_["combineReducers"])({
  home: home,
  list: list,
  detail: detail
}));
// EXTERNAL MODULE: external "redux-saga/effects"
var effects_ = __webpack_require__("RmXt");

// CONCATENATED MODULE: ./constants/ConstTypes.js
// 用户级别
// export const URL_HEADER = 'http://localhost:3001'
var URL_HEADER = 'http://192.168.0.147:3001'; // 路由对应页面标题

var RouterTitle = {
  '/': '',
  '/home/recommend': '个性推荐 - ',
  '/home/newsong': '新歌 - ',
  '/home/rank': '排行榜 - ',
  '/home/singer': '歌手 - ',
  '/list/playlist': '推荐歌单 - ',
  '/list/album': '新碟上架 - ',
  '/detail/playlist': '歌单详情 - '
};
// EXTERNAL MODULE: ./redux/actions/home.js
var actions_home = __webpack_require__("+UT9");

// CONCATENATED MODULE: ./redux/sagas/home/banner.js


var _marked =
/*#__PURE__*/
regenerator_default.a.mark(homeBanner);

// import fetch from 'isomorphic-unfetch'




function homeBanner() {
  var bannerQuery, res, data;
  return regenerator_default.a.wrap(function homeBanner$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          if (false) {}

          _context.next = 3;
          return Object(effects_["select"])(function (state) {
            return state.home.banner;
          });

        case 3:
          bannerQuery = _context.sent;
          _context.next = 6;
          return Object(effects_["take"])(ActionTypes["j" /* FETCH_HOME_BANNER */]);

        case 6:
          _context.prev = 6;
          _context.next = 9;
          return fetch("".concat(URL_HEADER, "/banner"));

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
          return Object(effects_["put"])(Object(actions_home["f" /* fetchHomeBannerSuccess */])(data.banners));

        case 16:
          _context.next = 22;
          break;

        case 18:
          _context.prev = 18;
          _context.t0 = _context["catch"](6);
          _context.next = 22;
          return Object(effects_["put"])(Object(actions_home["e" /* fetchHomeBannerFail */])(_context.t0));

        case 22:
          _context.next = 0;
          break;

        case 24:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, null, [[6, 18]]);
}
/* harmony default export */ var sagas_home_banner = ([Object(effects_["fork"])(homeBanner)]);
// CONCATENATED MODULE: ./redux/sagas/home/playlist.js


var playlist_marked =
/*#__PURE__*/
regenerator_default.a.mark(home_playlist_playlist);





function home_playlist_playlist() {
  var res, data;
  return regenerator_default.a.wrap(function playlist$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          if (false) {}

          _context.next = 3;
          return Object(effects_["take"])(ActionTypes["p" /* FETCH_HOME_PLAYLIST */]);

        case 3:
          _context.prev = 3;
          _context.next = 6;
          return fetch("".concat(URL_HEADER, "/personalized?limit=9"));

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
          return Object(effects_["put"])(Object(actions_home["i" /* fetchHomePlaylistSuccess */])(data.result));

        case 13:
          _context.next = 19;
          break;

        case 15:
          _context.prev = 15;
          _context.t0 = _context["catch"](3);
          _context.next = 19;
          return Object(effects_["put"])(Object(actions_home["h" /* fetchHomePlaylistFail */])(_context.t0));

        case 19:
          _context.next = 0;
          break;

        case 21:
        case "end":
          return _context.stop();
      }
    }
  }, playlist_marked, null, [[3, 15]]);
}
/* harmony default export */ var sagas_home_playlist = ([Object(effects_["fork"])(home_playlist_playlist)]);
// CONCATENATED MODULE: ./redux/sagas/home/album.js


var album_marked =
/*#__PURE__*/
regenerator_default.a.mark(home_album_album);





function home_album_album() {
  var res, data;
  return regenerator_default.a.wrap(function album$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          if (false) {}

          _context.next = 3;
          return Object(effects_["take"])(ActionTypes["g" /* FETCH_HOME_ALBUM */]);

        case 3:
          _context.prev = 3;
          _context.next = 6;
          return fetch("".concat(URL_HEADER, "/top/album?limit=9"));

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
          return Object(effects_["put"])(Object(actions_home["c" /* fetchHomeAlbumSuccess */])(data.albums));

        case 13:
          _context.next = 19;
          break;

        case 15:
          _context.prev = 15;
          _context.t0 = _context["catch"](3);
          _context.next = 19;
          return Object(effects_["put"])(Object(actions_home["b" /* fetchHomeAlbumFail */])(_context.t0));

        case 19:
          _context.next = 0;
          break;

        case 21:
        case "end":
          return _context.stop();
      }
    }
  }, album_marked, null, [[3, 15]]);
}
/* harmony default export */ var sagas_home_album = ([Object(effects_["fork"])(home_album_album)]);
// CONCATENATED MODULE: ./redux/sagas/home/newsong.js


var newsong_marked =
/*#__PURE__*/
regenerator_default.a.mark(home_newsong_newsong);





function home_newsong_newsong() {
  var res, data;
  return regenerator_default.a.wrap(function newsong$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          if (false) {}

          _context.next = 3;
          return Object(effects_["take"])(ActionTypes["m" /* FETCH_HOME_NEWSONG */]);

        case 3:
          _context.prev = 3;
          _context.next = 6;
          return fetch("".concat(URL_HEADER, "/playlist/detail?id=3779629"));

        case 6:
          res = _context.sent;
          _context.next = 9;
          return res.json();

        case 9:
          data = _context.sent;

          if (!(data.code === 200)) {
            _context.next = 14;
            break;
          }

          data.playlist.tracks = data.playlist.tracks.filter(function (item, i) {
            return i < 20;
          });
          _context.next = 14;
          return Object(effects_["put"])(Object(actions_home["l" /* fetchNewsongSuccess */])(data.playlist.tracks));

        case 14:
          _context.next = 20;
          break;

        case 16:
          _context.prev = 16;
          _context.t0 = _context["catch"](3);
          _context.next = 20;
          return Object(effects_["put"])(Object(actions_home["k" /* fetchNewsongFail */])(_context.t0));

        case 20:
          _context.next = 0;
          break;

        case 22:
        case "end":
          return _context.stop();
      }
    }
  }, newsong_marked, null, [[3, 16]]);
}
/* harmony default export */ var sagas_home_newsong = ([Object(effects_["fork"])(home_newsong_newsong)]);
// CONCATENATED MODULE: ./redux/sagas/home/rank.js


var rank_marked =
/*#__PURE__*/
regenerator_default.a.mark(home_rank_rank);





function home_rank_rank() {
  var res, data;
  return regenerator_default.a.wrap(function rank$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          if (false) {}

          _context.next = 3;
          return Object(effects_["take"])(ActionTypes["s" /* FETCH_HOME_RANK */]);

        case 3:
          _context.prev = 3;
          _context.next = 6;
          return fetch("".concat(URL_HEADER, "/toplist"));

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
          return Object(effects_["put"])(Object(actions_home["o" /* fetchRankSuccess */])(data.list));

        case 13:
          _context.next = 19;
          break;

        case 15:
          _context.prev = 15;
          _context.t0 = _context["catch"](3);
          _context.next = 19;
          return Object(effects_["put"])(Object(actions_home["n" /* fetchRankFail */])(_context.t0));

        case 19:
          _context.next = 0;
          break;

        case 21:
        case "end":
          return _context.stop();
      }
    }
  }, rank_marked, null, [[3, 15]]);
}
/* harmony default export */ var sagas_home_rank = ([Object(effects_["fork"])(home_rank_rank)]);
// CONCATENATED MODULE: ./redux/sagas/home/index.js






var homeSagas = [].concat(_toConsumableArray(sagas_home_banner), _toConsumableArray(sagas_home_playlist), _toConsumableArray(sagas_home_album), _toConsumableArray(sagas_home_newsong), _toConsumableArray(sagas_home_rank));
/* harmony default export */ var sagas_home = (homeSagas);
// EXTERNAL MODULE: external "isomorphic-unfetch"
var external_isomorphic_unfetch_ = __webpack_require__("0bYB");
var external_isomorphic_unfetch_default = /*#__PURE__*/__webpack_require__.n(external_isomorphic_unfetch_);

// EXTERNAL MODULE: ./redux/actions/list.js
var actions_list = __webpack_require__("+A8i");

// CONCATENATED MODULE: ./redux/sagas/list/playlist.js


var list_playlist_marked =
/*#__PURE__*/
regenerator_default.a.mark(sagas_list_playlist_playlist);






function sagas_list_playlist_playlist() {
  var query, playlists, res, data;
  return regenerator_default.a.wrap(function playlist$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          if (false) {}

          _context.next = 3;
          return Object(effects_["select"])(function (state) {
            return state.list.playlist;
          });

        case 3:
          query = _context.sent;
          playlists = query.playlists;
          _context.prev = 5;
          _context.next = 8;
          return external_isomorphic_unfetch_default()("".concat(URL_HEADER, "/top/playlist?limit=20&order=hot&cat=").concat(encodeURI('全部'), "&offset=").concat(query.page * 20));

        case 8:
          res = _context.sent;
          _context.next = 11;
          return res.json();

        case 11:
          data = _context.sent;

          if (!(query.page === 0)) {
            _context.next = 17;
            break;
          }

          _context.next = 15;
          return Object(effects_["put"])(Object(actions_list["f" /* fetchListPlaylistSuccess */])(data.playlists, true));

        case 15:
          _context.next = 19;
          break;

        case 17:
          _context.next = 19;
          return Object(effects_["put"])(Object(actions_list["f" /* fetchListPlaylistSuccess */])(playlists.concat(data.playlists), data.more));

        case 19:
          _context.next = 25;
          break;

        case 21:
          _context.prev = 21;
          _context.t0 = _context["catch"](5);
          _context.next = 25;
          return Object(effects_["put"])(Object(actions_list["e" /* fetchListPlaylistFail */])(_context.t0));

        case 25:
          _context.next = 27;
          return Object(effects_["take"])(ActionTypes["y" /* FETCH_LIST_PLSYLIST */]);

        case 27:
          _context.next = 0;
          break;

        case 29:
        case "end":
          return _context.stop();
      }
    }
  }, list_playlist_marked, null, [[5, 21]]);
}
/* harmony default export */ var sagas_list_playlist = ([Object(effects_["fork"])(sagas_list_playlist_playlist)]);
// CONCATENATED MODULE: ./redux/sagas/list/album.js


var list_album_marked =
/*#__PURE__*/
regenerator_default.a.mark(sagas_list_album_album);






function sagas_list_album_album() {
  var query, albums, res, data, more;
  return regenerator_default.a.wrap(function album$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          if (false) {}

          _context.next = 3;
          return Object(effects_["select"])(function (state) {
            return state.list.album;
          });

        case 3:
          query = _context.sent;
          albums = query.albums;
          _context.prev = 5;
          _context.next = 8;
          return external_isomorphic_unfetch_default()("".concat(URL_HEADER, "/top/album?limit=20&offset=").concat(query.page * 20));

        case 8:
          res = _context.sent;
          _context.next = 11;
          return res.json();

        case 11:
          data = _context.sent;
          more = data.total > albums.length;

          if (!(query.page === 0)) {
            _context.next = 18;
            break;
          }

          _context.next = 16;
          return Object(effects_["put"])(Object(actions_list["c" /* fetchListAlbumSuccess */])(data.albums, true));

        case 16:
          _context.next = 20;
          break;

        case 18:
          _context.next = 20;
          return Object(effects_["put"])(Object(actions_list["c" /* fetchListAlbumSuccess */])(albums.concat(data.albums), more));

        case 20:
          _context.next = 26;
          break;

        case 22:
          _context.prev = 22;
          _context.t0 = _context["catch"](5);
          _context.next = 26;
          return Object(effects_["put"])(Object(actions_list["b" /* fetchListAlbumFail */])(_context.t0));

        case 26:
          _context.next = 28;
          return Object(effects_["take"])(ActionTypes["v" /* FETCH_LIST_ALBUM */]);

        case 28:
          _context.next = 0;
          break;

        case 30:
        case "end":
          return _context.stop();
      }
    }
  }, list_album_marked, null, [[5, 22]]);
}
/* harmony default export */ var sagas_list_album = ([Object(effects_["fork"])(sagas_list_album_album)]);
// CONCATENATED MODULE: ./redux/sagas/list/index.js



var listSagas = [].concat(_toConsumableArray(sagas_list_playlist), _toConsumableArray(sagas_list_album));
/* harmony default export */ var sagas_list = (listSagas);
// EXTERNAL MODULE: ./redux/actions/detail.js
var actions_detail = __webpack_require__("+Q4S");

// CONCATENATED MODULE: ./redux/sagas/detail/playlist.js


var detail_playlist_marked =
/*#__PURE__*/
regenerator_default.a.mark(sagas_detail_playlist_playlist);






function sagas_detail_playlist_playlist() {
  var query, res, data;
  return regenerator_default.a.wrap(function playlist$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          if (false) {}

          _context.next = 3;
          return Object(effects_["select"])(function (state) {
            return state.detail.playlist;
          });

        case 3:
          query = _context.sent;
          _context.prev = 4;
          _context.next = 7;
          return external_isomorphic_unfetch_default()("".concat(URL_HEADER, "/playlist/detail?id=").concat(query.id));

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

          if (data.playlist.tracks.length > 20) {
            data.playlist.tracks = data.playlist.tracks.filter(function (song, i) {
              return i < 20;
            });
          }

          _context.next = 15;
          return Object(effects_["put"])(Object(actions_detail["f" /* fetchDetailPlaylistSuccess */])(data.playlist));

        case 15:
          _context.next = 21;
          break;

        case 17:
          _context.prev = 17;
          _context.t0 = _context["catch"](4);
          _context.next = 21;
          return Object(effects_["put"])(Object(actions_detail["e" /* fetchDetailPlaylistFail */])(_context.t0));

        case 21:
          _context.next = 23;
          return Object(effects_["take"])(ActionTypes["d" /* FETCH_DETAIL_PLSYLIST */]);

        case 23:
          _context.next = 0;
          break;

        case 25:
        case "end":
          return _context.stop();
      }
    }
  }, detail_playlist_marked, null, [[4, 17]]);
}
/* harmony default export */ var sagas_detail_playlist = ([Object(effects_["fork"])(sagas_detail_playlist_playlist)]);
// CONCATENATED MODULE: ./redux/sagas/detail/album.js


var detail_album_marked =
/*#__PURE__*/
regenerator_default.a.mark(sagas_detail_album_album);






function sagas_detail_album_album() {
  var query, res, data;
  return regenerator_default.a.wrap(function album$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          if (false) {}

          _context.next = 3;
          return Object(effects_["select"])(function (state) {
            return state.detail.album;
          });

        case 3:
          query = _context.sent;
          _context.prev = 4;
          _context.next = 7;
          return external_isomorphic_unfetch_default()("".concat(URL_HEADER, "/album?id=").concat(query.id));

        case 7:
          res = _context.sent;
          _context.next = 10;
          return res.json();

        case 10:
          data = _context.sent;

          if (!(data.code === 200)) {
            _context.next = 14;
            break;
          }

          _context.next = 14;
          return Object(effects_["put"])(Object(actions_detail["c" /* fetchDetailAlbumSuccess */])(data));

        case 14:
          _context.next = 20;
          break;

        case 16:
          _context.prev = 16;
          _context.t0 = _context["catch"](4);
          _context.next = 20;
          return Object(effects_["put"])(Object(actions_detail["b" /* fetchDetailAlbumFail */])(_context.t0));

        case 20:
          _context.next = 22;
          return Object(effects_["take"])(ActionTypes["a" /* FETCH_DETAIL_ALBUM */]);

        case 22:
          _context.next = 0;
          break;

        case 24:
        case "end":
          return _context.stop();
      }
    }
  }, detail_album_marked, null, [[4, 16]]);
}
/* harmony default export */ var sagas_detail_album = ([Object(effects_["fork"])(sagas_detail_album_album)]);
// CONCATENATED MODULE: ./redux/sagas/detail/index.js



var detail_listSagas = [].concat(_toConsumableArray(sagas_detail_playlist), _toConsumableArray(sagas_detail_album));
/* harmony default export */ var sagas_detail = (detail_listSagas);
// CONCATENATED MODULE: ./redux/sagas/index.js



var sagas_marked =
/*#__PURE__*/
regenerator_default.a.mark(rootSagas);





function rootSagas() {
  return regenerator_default.a.wrap(function rootSagas$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return Object(effects_["all"])([].concat(_toConsumableArray(sagas_home), _toConsumableArray(sagas_list), _toConsumableArray(sagas_detail)));

        case 2:
        case "end":
          return _context.stop();
      }
    }
  }, sagas_marked);
}
// CONCATENATED MODULE: ./redux/store.js





var sagaMiddleware = external_redux_saga_default()();

var store_bindMiddleware = function bindMiddleware(middleware) {
  if (false) { var _require2, logger, _require, composeWithDevTools; }

  return external_redux_["applyMiddleware"].apply(void 0, _toConsumableArray(middleware));
};

function configureStore(initialState) {
  var store = Object(external_redux_["createStore"])(reducers, initialState, store_bindMiddleware([sagaMiddleware]));

  store.runSagaTask = function () {
    store.sagaTask = sagaMiddleware.run(rootSagas);
  };

  store.runSagaTask();
  return store;
}

/* harmony default export */ var redux_store = (configureStore);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: ./static/css/style.scss
var style = __webpack_require__("ut+h");

// CONCATENATED MODULE: ./components/Layout.js




/* harmony default export */ var Layout = (function (_ref) {
  var title = _ref.title,
      children = _ref.children;
  return external_react_default.a.createElement(external_react_["Fragment"], null, external_react_default.a.createElement(head_default.a, null, external_react_default.a.createElement("title", null, title)), children);
});
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/parse-int.js
var parse_int = __webpack_require__("6BQ9");
var parse_int_default = /*#__PURE__*/__webpack_require__.n(parse_int);

// CONCATENATED MODULE: ./core/mobile.js

/**
 * @param {Boolean} [normal = false] - 默认开启页面压缩以使页面高清;  
 * @param {Number} [baseFontSize = 100] - 基础fontSize, 默认100px;
 * @param {Number} [fontscale = 1] - 有的业务希望能放大一定比例的字体;
 */



var mobile_winFlex = function winFlex(win, normal, baseFontSize, fontscale) {
  var _baseFontSize = baseFontSize || 100;

  var _fontscale = fontscale || 1;

  var doc = win.document;
  var ua = navigator.userAgent;
  var matches = ua.match(/Android[\S\s]+AppleWebkit\/(\d{3})/i);
  var UCversion = ua.match(/U3\/((\d+|\.){5,})/i);
  var isUCHd = UCversion && parse_int_default()(UCversion[1].split('.').join(''), 10) >= 80;
  var isIos = navigator.appVersion.match(/(iphone|ipad|ipod)/gi);
  var dpr = win.devicePixelRatio || 1;

  if (!isIos && !(matches && matches[1] > 534) && !isUCHd) {
    // 如果非iOS, 非Android4.3以上, 非UC内核, 就不执行高清, dpr设为1;
    dpr = 1;
  }

  var scale = normal ? 1 : 1 / dpr;
  var metaEl = doc.querySelector('meta[name="viewport"]');

  if (!metaEl) {
    metaEl = doc.createElement('meta');
    metaEl.setAttribute('name', 'viewport');
    doc.head.appendChild(metaEl);
  }

  metaEl.setAttribute('content', "width=device-width,user-scalable=no,initial-scale=".concat(scale, ",maximum-scale=").concat(scale, ",minimum-scale=").concat(scale));
  doc.documentElement.style.fontSize = normal ? '50px' : "".concat(_baseFontSize / 2 * dpr * _fontscale, "px");
};

/* harmony default export */ var mobile = (mobile_winFlex);
// CONCATENATED MODULE: ./pages/_app.js

















var _app_MyApp =
/*#__PURE__*/
function (_App) {
  Object(inherits["a" /* default */])(MyApp, _App);

  function MyApp() {
    Object(classCallCheck["a" /* default */])(this, MyApp);

    return Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(MyApp).apply(this, arguments));
  }

  Object(createClass["a" /* default */])(MyApp, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      mobile(window);

      if (/iphone/i.test(navigator.userAgent)) {
        document.body.style.webkitTapHighlightColor = 'rgba(0,0,0,.05)';
        document.body.classList.add('iPhone');
      } else {
        document.body.classList.add('Android');
      }

      (function () {
        if (typeof WeixinJSBridge == "object" && typeof WeixinJSBridge.invoke == "function") {
          handleFontSize();
        } else {
          if (document.addEventListener) {
            document.addEventListener("WeixinJSBridgeReady", handleFontSize, false);
          } else if (document.attachEvent) {
            document.attachEvent("WeixinJSBridgeReady", handleFontSize);
            document.attachEvent("onWeixinJSBridgeReady", handleFontSize);
          }
        }

        function handleFontSize() {
          WeixinJSBridge.invoke('setFontSizeCallback', {
            'fontSize': 0
          });
          WeixinJSBridge.on('menu:setfont', function () {
            WeixinJSBridge.invoke('setFontSizeCallback', {
              'fontSize': 0
            });
          });
        }
      })();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          Component = _this$props.Component,
          pageProps = _this$props.pageProps,
          store = _this$props.store,
          router = _this$props.router;
      return external_react_default.a.createElement(app["Container"], null, external_react_default.a.createElement(external_react_redux_["Provider"], {
        store: store
      }, external_react_default.a.createElement(Layout, {
        title: RouterTitle[router.pathname] + '网易云音乐'
      }, external_react_default.a.createElement(Component, pageProps))));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = Object(asyncToGenerator["a" /* default */])(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee(_ref) {
        var Component, ctx, pageProps;
        return regenerator_default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                Component = _ref.Component, ctx = _ref.ctx;
                pageProps = {};

                if (!Component.getInitialProps) {
                  _context.next = 6;
                  break;
                }

                _context.next = 5;
                return Component.getInitialProps({
                  ctx: ctx
                });

              case 5:
                pageProps = _context.sent;

              case 6:
                return _context.abrupt("return", {
                  pageProps: pageProps
                });

              case 7:
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

  return MyApp;
}(app_default.a);

/* harmony default export */ var _app = __webpack_exports__["default"] = (external_next_redux_wrapper_default()(redux_store)(external_next_redux_saga_default()(_app_MyApp)));

/***/ }),

/***/ "1fKG":
/***/ (function(module, exports) {

module.exports = require("redux-saga");

/***/ }),

/***/ "3W+V":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return FETCH_HOME_BANNER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return FETCH_HOME_BANNER_FAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return FETCH_HOME_BANNER_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return FETCH_HOME_PLAYLIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return FETCH_HOME_PLAYLIST_FAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return FETCH_HOME_PLAYLIST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return FETCH_HOME_ALBUM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return FETCH_HOME_ALBUM_FAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return FETCH_HOME_ALBUM_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return FETCH_HOME_NEWSONG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return FETCH_HOME_NEWSONG_FAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return FETCH_HOME_NEWSONG_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return FETCH_HOME_RANK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return FETCH_HOME_RANK_FAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return FETCH_HOME_RANK_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "y", function() { return FETCH_LIST_PLSYLIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "z", function() { return FETCH_LIST_PLSYLIST_FAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "A", function() { return FETCH_LIST_PLSYLIST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return FETCH_LIST_ALBUM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return FETCH_LIST_ALBUM_FAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "x", function() { return FETCH_LIST_ALBUM_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return FETCH_DETAIL_PLSYLIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return FETCH_DETAIL_PLSYLIST_FAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return FETCH_DETAIL_PLSYLIST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FETCH_DETAIL_ALBUM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return FETCH_DETAIL_ALBUM_FAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return FETCH_DETAIL_ALBUM_SUCCESS; });
// ================= 首页 ==================== //
var FETCH_HOME_BANNER = 'FETCH_HOME_BANNER';
var FETCH_HOME_BANNER_FAIL = 'FETCH_HOME_BANNER_FAIL';
var FETCH_HOME_BANNER_SUCCESS = 'FETCH_HOME_BANNER_SUCCESS';
var FETCH_HOME_PLAYLIST = 'FETCH_HOME_PLAYLIST';
var FETCH_HOME_PLAYLIST_FAIL = 'FETCH_HOME_PLAYLIST_FAIL';
var FETCH_HOME_PLAYLIST_SUCCESS = 'FETCH_HOME_PLAYLIST_SUCCESS';
var FETCH_HOME_ALBUM = 'FETCH_HOME_ALBUM';
var FETCH_HOME_ALBUM_FAIL = 'FETCH_HOME_ALBUM_FAIL';
var FETCH_HOME_ALBUM_SUCCESS = 'FETCH_HOME_ALBUM_SUCCESS';
var FETCH_HOME_NEWSONG = 'FETCH_HOME_NEWSONG';
var FETCH_HOME_NEWSONG_FAIL = 'FETCH_HOME_NEWSONG_FAIL';
var FETCH_HOME_NEWSONG_SUCCESS = 'FETCH_HOME_NEWSONG_SUCCESS';
var FETCH_HOME_RANK = 'FETCH_HOME_RANK';
var FETCH_HOME_RANK_FAIL = 'FETCH_HOME_RANK_FAIL';
var FETCH_HOME_RANK_SUCCESS = 'FETCH_HOME_RANK_SUCCESS'; // ================= 歌单/专辑 列表 ==================== //

var FETCH_LIST_PLSYLIST = 'FETCH_LIST_PLSYLIST';
var FETCH_LIST_PLSYLIST_FAIL = 'FETCH_LIST_PLSYLIST_FAIL';
var FETCH_LIST_PLSYLIST_SUCCESS = 'FETCH_LIST_PLSYLIST_SUCCESS';
var FETCH_LIST_ALBUM = 'FETCH_LIST_ALBUM';
var FETCH_LIST_ALBUM_FAIL = 'FETCH_LIST_ALBUM_FAIL';
var FETCH_LIST_ALBUM_SUCCESS = 'FETCH_LIST_ALBUM_SUCCESS'; // ================= 歌单/专辑 详情 ==================== //

var FETCH_DETAIL_PLSYLIST = 'FETCH_DETAIL_PLSYLIST';
var FETCH_DETAIL_PLSYLIST_FAIL = 'FETCH_DETAIL_PLSYLIST_FAIL';
var FETCH_DETAIL_PLSYLIST_SUCCESS = 'FETCH_DETAIL_PLSYLIST_SUCCESS';
var FETCH_DETAIL_ALBUM = 'FETCH_DETAIL_ALBUM';
var FETCH_DETAIL_ALBUM_FAIL = 'FETCH_DETAIL_ALBUM_FAIL';
var FETCH_DETAIL_ALBUM_SUCCESS = 'FETCH_DETAIL_ALBUM_SUCCESS';

/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "4mXO":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("k1wZ");

/***/ }),

/***/ "6BQ9":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("wa65");

/***/ }),

/***/ "8Bbg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("B5Ud")


/***/ }),

/***/ "B5Ud":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("KI45");

var _promise = _interopRequireDefault(__webpack_require__("eVuF"));

var _assign = _interopRequireDefault(__webpack_require__("UXZV"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__("/HRN"));

var _createClass2 = _interopRequireDefault(__webpack_require__("WaGi"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__("ZDA2"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__("/+P4"));

var _inherits2 = _interopRequireDefault(__webpack_require__("N9n2"));

var __importStar = void 0 && (void 0).__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var react_1 = __importStar(__webpack_require__("cDcd"));

var prop_types_1 = __importDefault(__webpack_require__("rf6O"));

var utils_1 = __webpack_require__("p8BD");

var router_1 = __webpack_require__("4Q3z");

var App =
/*#__PURE__*/
function (_react_1$Component) {
  (0, _inherits2.default)(App, _react_1$Component);

  function App() {
    (0, _classCallCheck2.default)(this, App);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(App).apply(this, arguments));
  }

  (0, _createClass2.default)(App, [{
    key: "getChildContext",
    value: function getChildContext() {
      return {
        router: router_1.makePublicRouterInstance(this.props.router)
      };
    } // Kept here for backwards compatibility.
    // When someone ended App they could call `super.componentDidCatch`. This is now deprecated.

  }, {
    key: "componentDidCatch",
    value: function componentDidCatch(err) {
      throw err;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          router = _this$props.router,
          Component = _this$props.Component,
          pageProps = _this$props.pageProps;
      var url = createUrl(router);
      return react_1.default.createElement(Container, null, react_1.default.createElement(Component, (0, _assign.default)({}, pageProps, {
        url: url
      })));
    }
  }], [{
    key: "getInitialProps",
    value: function (_ref) {
      var Component = _ref.Component,
          router = _ref.router,
          ctx = _ref.ctx;

      try {
        return _promise.default.resolve(utils_1.loadGetInitialProps(Component, ctx)).then(function (pageProps) {
          return {
            pageProps: pageProps
          };
        });
      } catch (e) {
        return _promise.default.reject(e);
      }
    }
  }]);
  return App;
}(react_1.Component);

App.childContextTypes = {
  router: prop_types_1.default.object
};
exports.default = App;

var Container =
/*#__PURE__*/
function (_react_1$Component2) {
  (0, _inherits2.default)(Container, _react_1$Component2);

  function Container() {
    (0, _classCallCheck2.default)(this, Container);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Container).apply(this, arguments));
  }

  (0, _createClass2.default)(Container, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.scrollToHash();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.scrollToHash();
    }
  }, {
    key: "scrollToHash",
    value: function scrollToHash() {
      var hash = window.location.hash;
      hash = hash ? hash.substring(1) : false;
      if (!hash) return;
      var el = document.getElementById(hash);
      if (!el) return; // If we call scrollIntoView() in here without a setTimeout
      // it won't scroll properly.

      setTimeout(function () {
        return el.scrollIntoView();
      }, 0);
    }
  }, {
    key: "render",
    value: function render() {
      return this.props.children;
    }
  }]);
  return Container;
}(react_1.Component);

exports.Container = Container;
var warnUrl = utils_1.execOnce(function () {
  if (false) {}
});

function createUrl(router) {
  // This is to make sure we don't references the router object at call time
  var pathname = router.pathname,
      asPath = router.asPath,
      query = router.query;
  return {
    get query() {
      warnUrl();
      return query;
    },

    get pathname() {
      warnUrl();
      return pathname;
    },

    get asPath() {
      warnUrl();
      return asPath;
    },

    back: function back() {
      warnUrl();
      router.back();
    },
    push: function push(url, as) {
      warnUrl();
      return router.push(url, as);
    },
    pushTo: function pushTo(href, as) {
      warnUrl();
      var pushRoute = as ? href : null;
      var pushUrl = as || href;
      return router.push(pushRoute, pushUrl);
    },
    replace: function replace(url, as) {
      warnUrl();
      return router.replace(url, as);
    },
    replaceTo: function replaceTo(href, as) {
      warnUrl();
      var replaceRoute = as ? href : null;
      var replaceUrl = as || href;
      return router.replace(replaceRoute, replaceUrl);
    }
  };
}

exports.createUrl = createUrl;

/***/ }),

/***/ "Bhuq":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("/+oN");

/***/ }),

/***/ "JMOJ":
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "Jo+v":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Z6Kq");

/***/ }),

/***/ "K47E":
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "KI45":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "Kjtv":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/is-iterable");

/***/ }),

/***/ "MI3g":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js
var iterator = __webpack_require__("XVgq");
var iterator_default = /*#__PURE__*/__webpack_require__.n(iterator);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/symbol.js
var symbol = __webpack_require__("Z7t5");
var symbol_default = /*#__PURE__*/__webpack_require__.n(symbol);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js



function typeof_typeof2(obj) { if (typeof symbol_default.a === "function" && typeof iterator_default.a === "symbol") { typeof_typeof2 = function _typeof2(obj) { return typeof obj; }; } else { typeof_typeof2 = function _typeof2(obj) { return obj && typeof symbol_default.a === "function" && obj.constructor === symbol_default.a && obj !== symbol_default.a.prototype ? "symbol" : typeof obj; }; } return typeof_typeof2(obj); }

function typeof_typeof(obj) {
  if (typeof symbol_default.a === "function" && typeof_typeof2(iterator_default.a) === "symbol") {
    typeof_typeof = function _typeof(obj) {
      return typeof_typeof2(obj);
    };
  } else {
    typeof_typeof = function _typeof(obj) {
      return obj && typeof symbol_default.a === "function" && obj.constructor === symbol_default.a && obj !== symbol_default.a.prototype ? "symbol" : typeof_typeof2(obj);
    };
  }

  return typeof_typeof(obj);
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _possibleConstructorReturn; });


function _possibleConstructorReturn(self, call) {
  if (call && (typeof_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

/***/ }),

/***/ "N9n2":
/***/ (function(module, exports, __webpack_require__) {

var _Object$create = __webpack_require__("SqZg");

var setPrototypeOf = __webpack_require__("vjea");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = _Object$create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),

/***/ "O40h":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _asyncToGenerator; });
/* harmony import */ var _core_js_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("eVuF");
/* harmony import */ var _core_js_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_promise__WEBPACK_IMPORTED_MODULE_0__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    _core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new _core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

/***/ }),

/***/ "R2Q7":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/array/is-array");

/***/ }),

/***/ "RmXt":
/***/ (function(module, exports) {

module.exports = require("redux-saga/effects");

/***/ }),

/***/ "SqZg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("o5io");

/***/ }),

/***/ "TRZx":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Wk4r");

/***/ }),

/***/ "TUA0":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "Tit0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/create.js
var create = __webpack_require__("SqZg");
var create_default = /*#__PURE__*/__webpack_require__.n(create);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js
var set_prototype_of = __webpack_require__("TRZx");
var set_prototype_of_default = /*#__PURE__*/__webpack_require__.n(set_prototype_of);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js

function _setPrototypeOf(o, p) {
  _setPrototypeOf = set_prototype_of_default.a || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _inherits; });


function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = create_default()(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

/***/ }),

/***/ "UXZV":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("dGr4");

/***/ }),

/***/ "WaGi":
/***/ (function(module, exports, __webpack_require__) {

var _Object$defineProperty = __webpack_require__("hfKm");

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _Object$defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "Wk4r":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "XVgq":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("gHn/");

/***/ }),

/***/ "Z6Kq":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "Z7t5":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("vqFK");

/***/ }),

/***/ "ZDA2":
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__("iZP3");

var assertThisInitialized = __webpack_require__("K47E");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "a7VT":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _getPrototypeOf; });
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Bhuq");
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("TRZx");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__);


function _getPrototypeOf(o) {
  _getPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default.a ? _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a : function _getPrototypeOf(o) {
    return o.__proto__ || _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default()(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ "aC71":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/promise");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cu1A":
/***/ (function(module, exports) {

module.exports = require("regenerator-runtime");

/***/ }),

/***/ "d04V":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("r7XW");

/***/ }),

/***/ "dGr4":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "eVuF":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("aC71");

/***/ }),

/***/ "gHn/":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "h74D":
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "hfKm":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("TUA0");

/***/ }),

/***/ "iZP3":
/***/ (function(module, exports, __webpack_require__) {

var _Symbol$iterator = __webpack_require__("XVgq");

var _Symbol = __webpack_require__("Z7t5");

function _typeof2(obj) { if (typeof _Symbol === "function" && typeof _Symbol$iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _Symbol === "function" && _typeof2(_Symbol$iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "k1wZ":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "ln6h":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cu1A");


/***/ }),

/***/ "o5io":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "p0XB":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("R2Q7");

/***/ }),

/***/ "p8BD":
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/utils");

/***/ }),

/***/ "pEZS":
/***/ (function(module, exports) {

module.exports = require("next-redux-saga");

/***/ }),

/***/ "pLtp":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("qJj/");

/***/ }),

/***/ "qJj/":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "r7XW":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/array/from");

/***/ }),

/***/ "rKB8":
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "rf6O":
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "sLSF":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _createClass; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("hfKm");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);


function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/***/ }),

/***/ "ut+h":
/***/ (function(module, exports) {

module.exports = {
	"iphone": "iphone",
	"iconfont": "iconfont",
	"header_title": "header_title",
	"headerTitle": "header_title",
	"icon-home": "icon-home",
	"iconHome": "icon-home",
	"loading": "loading",
	"full": "full",
	"scroll-tip": "scroll-tip",
	"scrollTip": "scroll-tip",
	"song-list": "song-list",
	"songList": "song-list",
	"intro": "intro",
	"pic": "pic",
	"link": "link",
	"m-music__list": "m-music__list",
	"mMusicList": "m-music__list",
	"desc": "desc",
	"home_header": "home_header",
	"homeHeader": "home_header",
	"go-player": "go-player",
	"goPlayer": "go-player",
	"home_nav": "home_nav",
	"homeNav": "home_nav",
	"active": "active",
	"home": "home",
	"banner": "banner",
	"swiper-slide": "swiper-slide",
	"swiperSlide": "swiper-slide",
	"swiper-pagination-bullet": "swiper-pagination-bullet",
	"swiperPaginationBullet": "swiper-pagination-bullet",
	"swiper-pagination-bullet-active": "swiper-pagination-bullet-active",
	"swiperPaginationBulletActive": "swiper-pagination-bullet-active",
	"home-list": "home-list",
	"homeList": "home-list",
	"title": "title",
	"list": "list",
	"count": "count",
	"mask": "mask",
	"rank": "rank",
	"singer": "singer",
	"category": "category",
	"mb": "mb",
	"playlist_detail": "playlist_detail",
	"playlistDetail": "playlist_detail",
	"album_detail": "album_detail",
	"albumDetail": "album_detail",
	"header": "header",
	"bg": "bg",
	"cont": "cont",
	"icon-cat": "icon-cat",
	"iconCat": "icon-cat",
	"info": "info",
	"t": "t",
	"u-img": "u-img",
	"uImg": "u-img",
	"play": "play",
	"singer_list": "singer_list",
	"singerList": "singer_list",
	"singer_detail": "singer_detail",
	"singerDetail": "singer_detail"
};

/***/ }),

/***/ "vjea":
/***/ (function(module, exports, __webpack_require__) {

var _Object$setPrototypeOf = __webpack_require__("TRZx");

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = _Object$setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "vqFK":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "wa65":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/parse-int");

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "yLu3":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Kjtv");

/***/ }),

/***/ "zrwo":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js
var get_own_property_descriptor = __webpack_require__("Jo+v");
var get_own_property_descriptor_default = /*#__PURE__*/__webpack_require__.n(get_own_property_descriptor);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js
var get_own_property_symbols = __webpack_require__("4mXO");
var get_own_property_symbols_default = /*#__PURE__*/__webpack_require__.n(get_own_property_symbols);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js
var keys = __webpack_require__("pLtp");
var keys_default = /*#__PURE__*/__webpack_require__.n(keys);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js
var define_property = __webpack_require__("hfKm");
var define_property_default = /*#__PURE__*/__webpack_require__.n(define_property);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js

function _defineProperty(obj, key, value) {
  if (key in obj) {
    define_property_default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _objectSpread; });




function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    var ownKeys = keys_default()(source);

    if (typeof get_own_property_symbols_default.a === 'function') {
      ownKeys = ownKeys.concat(get_own_property_symbols_default()(source).filter(function (sym) {
        return get_own_property_descriptor_default()(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
  }

  return target;
}

/***/ })

/******/ });