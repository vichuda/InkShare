/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 75);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	module.exports = require("react");

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = require("react-redux");

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = require("material-ui/FlatButton");

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = require("express");

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = require("mongoose");

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getUser = getUser;

	var _UserActions = __webpack_require__(7);

	var initialState = null;

	function UserReducer() {
	  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
	  var action = arguments[1];

	  switch (action.type) {
	    case _UserActions.SET_USER:
	      return action.user;
	    default:
	      return state;
	  }
	}

	function getUser(state) {
	  return state.user;
	}

	exports.default = UserReducer;

/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = require("react-router");

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.SET_USER = undefined;
	exports.getUserRequest = getUserRequest;
	exports.requestUpdateShippingInfo = requestUpdateShippingInfo;
	exports.login = login;
	exports.requestLogout = requestLogout;
	exports.setUser = setUser;

	var _apiCaller = __webpack_require__(8);

	var _apiCaller2 = _interopRequireDefault(_apiCaller);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var SET_USER = exports.SET_USER = 'SET_USER';

	function getUserRequest() {
	  return function dispatchedRequest(dispatch) {
	    return (0, _apiCaller2.default)('user').then(function (response) {
	      return dispatch(setUser(response.data));
	    }).catch(console.error); // eslint-disable-line
	  };
	}

	function requestUpdateShippingInfo(fullName, shippingAddress) {
	  return function dispatchedRequest(dispatch) {
	    return (0, _apiCaller2.default)('user', 'PATCH', { fullName: fullName, shippingAddress: shippingAddress }).then(function (response) {
	      console.log('your fucking response :', response);
	      dispatch(setUser(response.data));
	    });
	  };
	}

	function login(username, password, signup) {
	  return (0, _apiCaller2.default)('login', 'POST', { username: username, password: password, signup: signup }).catch(function (err) {
	    return console.error(err);
	  }); // eslint-disable-line
	}

	function requestLogout() {
	  return function dispatchedRequest(dispatch) {
	    dispatch(setUser(null));
	    return (0, _apiCaller2.default)('logout', 'put').catch(function (err) {
	      return console.error(err);
	    }); // eslint-disable-line
	  };
	}

	function setUser(user) {
	  return {
	    type: SET_USER,
	    user: user
	  };
	}

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.API_URL = undefined;
	exports.default = callApi;

	var _isomorphicFetch = __webpack_require__(77);

	var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

	var _config = __webpack_require__(19);

	var _config2 = _interopRequireDefault(_config);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var API_URL = exports.API_URL = typeof window === 'undefined' || process.env.NODE_ENV === 'test' ? process.env.BASE_URL || 'http://localhost:' + (process.env.PORT || _config2.default.port) + '/api' : '/api';

	function callApi(endpoint) {
	  var method = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'get';
	  var body = arguments[2];

	  return (0, _isomorphicFetch2.default)(API_URL + '/' + endpoint, {
	    headers: { 'content-type': 'application/json' },
	    credentials: 'same-origin',
	    method: method,
	    body: JSON.stringify(body)
	  }).then(function (response) {
	    return response.json().then(function (json) {
	      return { json: json, response: response };
	    });
	  }).then(function (_ref) {
	    var json = _ref.json,
	        response = _ref.response;

	    if (!response.ok) {
	      return Promise.reject(json);
	    }

	    return json;
	  }).then(function (response) {
	    return response;
	  }, function (error) {
	    return error;
	  });
	}

/***/ },
/* 9 */
/***/ function(module, exports) {

	module.exports = require("material-ui/List");

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _mongoose = __webpack_require__(4);

	var _mongoose2 = _interopRequireDefault(_mongoose);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Schema = _mongoose2.default.Schema;

	var userSchema = new Schema({
	  username: String,
	  password: String,
	  fullName: String,
	  shippingAddress: String,
	  id: String
	});

	exports.default = _mongoose2.default.model('User', userSchema);

/***/ },
/* 11 */
/***/ function(module, exports) {

	module.exports = require("cuid");

/***/ },
/* 12 */
/***/ function(module, exports) {

	module.exports = require("react-helmet");

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.DELETE_BOOK = exports.ADD_BOOKS = exports.ADD_BOOK = undefined;
	exports.fetchBooksRequest = fetchBooksRequest;
	exports.createBookRequest = createBookRequest;
	exports.deleteBookRequest = deleteBookRequest;
	exports.addBooks = addBooks;
	exports.addBook = addBook;
	exports.deleteBook = deleteBook;

	var _apiCaller = __webpack_require__(8);

	var _apiCaller2 = _interopRequireDefault(_apiCaller);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var ADD_BOOK = exports.ADD_BOOK = 'ADD_BOOK';
	var ADD_BOOKS = exports.ADD_BOOKS = 'ADD_BOOKS';
	var DELETE_BOOK = exports.DELETE_BOOK = 'DELETE_BOOK';

	function fetchBooksRequest() {
	  return function dispatchedRequest(dispatch) {
	    return (0, _apiCaller2.default)('books').then(function (books) {
	      return dispatch(addBooks(books));
	    }).catch(function (err) {
	      return console.error(err);
	    }); // eslint-disable-line
	  };
	}

	function createBookRequest(book) {
	  return function dispatchedRequest(dispatch) {
	    return (0, _apiCaller2.default)('books', 'post', book).then(function (createdBook) {
	      return dispatch(addBook(createdBook));
	    });
	  };
	}

	function deleteBookRequest(bookID) {
	  return function dispatchedRequest(dispatch) {
	    dispatch(deleteBook(bookID));
	    return (0, _apiCaller2.default)('books', 'delete', { id: bookID });
	  };
	}

	function addBooks(books) {
	  return {
	    type: ADD_BOOKS,
	    books: books
	  };
	}

	function addBook(book) {
	  return {
	    type: ADD_BOOK,
	    book: book
	  };
	}

	function deleteBook(bookID) {
	  return {
	    type: DELETE_BOOK,
	    bookID: bookID
	  };
	}

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getBooks = getBooks;
	exports.getBooksByUser = getBooksByUser;
	exports.getBookByID = getBookByID;

	var _BookActions = __webpack_require__(13);

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	var initialState = [];

	function InkShareReducer() {
	  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
	  var action = arguments[1];

	  switch (action.type) {
	    case _BookActions.ADD_BOOKS:
	      return [].concat(_toConsumableArray(action.books));
	    case _BookActions.ADD_BOOK:
	      return [action.book].concat(_toConsumableArray(state));
	    case _BookActions.DELETE_BOOK:
	      return state.filter(function (currentBook) {
	        return currentBook.id !== action.bookID;
	      });
	    default:
	      return state;
	  }
	}

	function getBooks(state) {
	  return state.books;
	}

	function getBooksByUser(state, userID) {
	  return state.books.filter(function (currentBook) {
	    return currentBook.seller === userID;
	  });
	}

	function getBookByID(state, id) {
	  return state.books.filter(function (currentBook) {
	    return currentBook.id === id;
	  })[0];
	}

	exports.default = InkShareReducer;

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.DELETE_SHIPMENT = exports.SET_SHIPMENTS = exports.DELETE_TRADE_REQUEST = exports.ADD_TRADE_REQUEST = exports.SET_TRADE_REQUESTS = undefined;
	exports.fetchTradeRequests = fetchTradeRequests;
	exports.fetchShipments = fetchShipments;
	exports.requestCreateTradeRequest = requestCreateTradeRequest;
	exports.requestAcceptTradeRequest = requestAcceptTradeRequest;
	exports.requestDeclineTradeRequest = requestDeclineTradeRequest;
	exports.requestDeleteShipment = requestDeleteShipment;
	exports.setTradeRequests = setTradeRequests;
	exports.addTradeRequest = addTradeRequest;
	exports.deleteTradeRequest = deleteTradeRequest;
	exports.setShipments = setShipments;
	exports.deleteShipment = deleteShipment;

	var _apiCaller = __webpack_require__(8);

	var _apiCaller2 = _interopRequireDefault(_apiCaller);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var SET_TRADE_REQUESTS = exports.SET_TRADE_REQUESTS = 'SET_TRADE_REQUESTS';
	var ADD_TRADE_REQUEST = exports.ADD_TRADE_REQUEST = 'ADD_TRADE_REQUEST';
	var DELETE_TRADE_REQUEST = exports.DELETE_TRADE_REQUEST = 'DELETE_TRADE_REQUEST';
	var SET_SHIPMENTS = exports.SET_SHIPMENTS = 'SET_SHIPMENTS';
	var DELETE_SHIPMENT = exports.DELETE_SHIPMENT = 'DELETE_SHIPMENT';

	function fetchTradeRequests() {
	  return function dispatchedRequest(dispatch) {
	    return (0, _apiCaller2.default)('books/trade/request').then(function (tradeRequests) {
	      return dispatch(setTradeRequests(tradeRequests));
	    });
	  };
	}

	function fetchShipments() {
	  return function dispatchedRequest(dispatch) {
	    return (0, _apiCaller2.default)('shipments').then(function (shipments) {
	      dispatch(setShipments(shipments.data));
	    });
	  };
	}

	function requestCreateTradeRequest(bookID, tradersBookID, userID, userName) {
	  return function dispatchedRequest(dispatch) {
	    return (0, _apiCaller2.default)('books/trade/request', 'post', { bookID: bookID, tradersBookID: tradersBookID, userID: userID, userName: userName }).then(function (_ref) {
	      var tradeRequest = _ref.tradeRequest;

	      if (tradeRequest) {
	        return dispatch(addTradeRequest(tradeRequest));
	      }
	      dispatch({ type: null });
	    });
	  };
	}

	function requestAcceptTradeRequest(tradeRequest) {
	  return function dispatchedRequest(dispatch) {
	    dispatch(deleteTradeRequest(tradeRequest));
	    return (0, _apiCaller2.default)('/books/trade/request', 'put', tradeRequest);
	  };
	}

	function requestDeclineTradeRequest(tradeRequest) {
	  return function dispatchedRequest(dispatch) {
	    return (0, _apiCaller2.default)('/books/trade/request', 'delete', tradeRequest).then(function () {
	      return dispatch(deleteTradeRequest(tradeRequest));
	    });
	  };
	}

	function requestDeleteShipment(shipment) {
	  return function dispatchedRequest(dispatch) {
	    dispatch(deleteShipment(shipment));
	    return (0, _apiCaller2.default)('/shipments', 'delete', shipment.databaseObject);
	  };
	}

	function setTradeRequests(tradeRequests) {
	  return {
	    type: SET_TRADE_REQUESTS,
	    tradeRequests: tradeRequests
	  };
	}

	function addTradeRequest(tradeRequest) {
	  return {
	    type: ADD_TRADE_REQUEST,
	    tradeRequest: tradeRequest
	  };
	}

	function deleteTradeRequest(tradeRequest) {
	  return {
	    type: DELETE_TRADE_REQUEST,
	    tradeRequest: tradeRequest
	  };
	}

	function setShipments(shipments) {
	  return {
	    type: SET_SHIPMENTS,
	    shipments: shipments
	  };
	}

	function deleteShipment(shipment) {
	  return {
	    type: DELETE_SHIPMENT,
	    shipment: shipment
	  };
	}

/***/ },
/* 16 */
/***/ function(module, exports) {

	module.exports = require("material-ui/MenuItem");

/***/ },
/* 17 */
/***/ function(module, exports) {

	module.exports = require("material-ui/Subheader");

/***/ },
/* 18 */
/***/ function(module, exports) {

	module.exports = require("material-ui/TextField");

/***/ },
/* 19 */
/***/ function(module, exports) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var config = {
	  mongoURL: process.env.MONGO_URL || 'mongodb://localhost:27017/mern-starter',
	  port: process.env.PORT || 8000
	};

	exports.default = config;

/***/ },
/* 20 */
/***/ function(module, exports) {

	module.exports = require("webpack");

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

	var _react = __webpack_require__(0);

	var _react2 = _interopRequireDefault(_react);

	var _reduxDevtools = __webpack_require__(98);

	var _reduxDevtoolsLogMonitor = __webpack_require__(100);

	var _reduxDevtoolsLogMonitor2 = _interopRequireDefault(_reduxDevtoolsLogMonitor);

	var _reduxDevtoolsDockMonitor = __webpack_require__(99);

	var _reduxDevtoolsDockMonitor2 = _interopRequireDefault(_reduxDevtoolsDockMonitor);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = (0, _reduxDevtools.createDevTools)(_jsx(_reduxDevtoolsDockMonitor2.default, {
	  toggleVisibilityKey: 'ctrl-h',
	  changePositionKey: 'ctrl-w'
	}, void 0, _jsx(_reduxDevtoolsLogMonitor2.default, {})));

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(0);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(1);

	var _BookActions = __webpack_require__(13);

	var _BookReducer = __webpack_require__(14);

	var _DashboardActions = __webpack_require__(15);

	var _UserReducer = __webpack_require__(5);

	var _BookListItem = __webpack_require__(53);

	var _BookListItem2 = _interopRequireDefault(_BookListItem);

	var _TradeRequestModel = __webpack_require__(54);

	var _TradeRequestModel2 = _interopRequireDefault(_TradeRequestModel);

	var _App = {
	  "container": "_4uEyKcd5WHob5qPzotT7",
	  "content-container": "AHFx3FgxnBL1SCv4GK1Zj",
	  "app-container": "_3Vf4PpM3_AE6UXOuNrP22c"
	};

	var _App2 = _interopRequireDefault(_App);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var BookListPage = function (_Component) {
	  _inherits(BookListPage, _Component);

	  function BookListPage(props) {
	    _classCallCheck(this, BookListPage);

	    var _this = _possibleConstructorReturn(this, (BookListPage.__proto__ || Object.getPrototypeOf(BookListPage)).call(this, props));

	    _this.requestTrade = _this.requestTrade.bind(_this);
	    _this.openTradeRequestModel = function () {};
	    return _this;
	  }

	  _createClass(BookListPage, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.props.dispatch((0, _BookActions.fetchBooksRequest)());
	    }
	  }, {
	    key: 'requestTrade',
	    value: function requestTrade(bookID, tradersBookID, userID, userName) {
	      this.props.dispatch((0, _DashboardActions.requestCreateTradeRequest)(bookID, tradersBookID, userID, userName));
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;

	      return _jsx('div', {
	        className: _App2.default.container
	      }, void 0, this.props.books.map(function (book) {
	        return _react2.default.createElement(_BookListItem2.default, _extends({}, book, {
	          requestTrade: _this2.openTradeRequestModel,
	          user: _this2.props.user,
	          key: '' + book.name + book.seller
	        }));
	      }), _jsx(_TradeRequestModel2.default, {
	        usersBooks: this.props.usersBooks,
	        requestTrade: this.requestTrade,
	        setOpenFunction: function setOpenFunction(openFunction) {
	          return _this2.openTradeRequestModel = openFunction;
	        }
	      }));
	    }
	  }]);

	  return BookListPage;
	}(_react.Component);

	BookListPage.need = [function () {
	  return (0, _BookActions.fetchBooksRequest)();
	}];

	function mapStateToProps(state) {
	  var user = (0, _UserReducer.getUser)(state);
	  var userID = user ? user.id : '';
	  return {
	    books: (0, _BookReducer.getBooks)(state),
	    usersBooks: (0, _BookReducer.getBooksByUser)(state, userID),
	    user: user
	  };
	}

	exports.default = (0, _reactRedux.connect)(mapStateToProps)(BookListPage);

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getTradeRequests = getTradeRequests;
	exports.getShipments = getShipments;

	var _DashboardActions = __webpack_require__(15);

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	// const initialState = []
	var initialState = {
	  tradeRequests: [],
	  shipments: []
	};

	function DashboardReducer() {
	  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
	  var action = arguments[1];

	  switch (action.type) {
	    case _DashboardActions.SET_TRADE_REQUESTS:
	      return {
	        tradeRequests: action.tradeRequests,
	        shipments: state.shipments
	      };
	    case _DashboardActions.ADD_TRADE_REQUEST:
	      return {
	        tradeRequests: [action.tradeRequest].concat(_toConsumableArray(state.tradeRequests)),
	        shipments: state.shipments
	      };
	    case _DashboardActions.DELETE_TRADE_REQUEST:
	      return {
	        tradeRequests: state.tradeRequests.filter(function (tradeRequest) {
	          return tradeRequest !== action.tradeRequest;
	        }),
	        shipments: state.shipments
	      };
	    case _DashboardActions.SET_SHIPMENTS:
	      return {
	        tradeRequests: state.tradeRequests,
	        shipments: action.shipments
	      };
	    case _DashboardActions.DELETE_SHIPMENT:
	      return {
	        tradeRequests: state.tradeRequests,
	        shipments: state.shipments.filter(function (shipment) {
	          return shipment !== action.shipment;
	        })
	      };
	    default:
	      return state;
	  }
	}

	function getTradeRequests(state) {
	  return state.dashboard.tradeRequests;
	}

	function getShipments(state) {
	  return state.dashboard.shipments;
	}

	exports.default = DashboardReducer;

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(0);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(1);

	var _MenuItem = __webpack_require__(16);

	var _MenuItem2 = _interopRequireDefault(_MenuItem);

	var _Toolbar = __webpack_require__(86);

	var _FloatingActionButton = __webpack_require__(81);

	var _FloatingActionButton2 = _interopRequireDefault(_FloatingActionButton);

	var _add = __webpack_require__(92);

	var _add2 = _interopRequireDefault(_add);

	var _DashboardReducer = __webpack_require__(23);

	var _DashboardActions = __webpack_require__(15);

	var _BookActions = __webpack_require__(13);

	var _BookReducer = __webpack_require__(14);

	var _UserReducer = __webpack_require__(5);

	var _Requests = __webpack_require__(57);

	var _Requests2 = _interopRequireDefault(_Requests);

	var _Selling = __webpack_require__(58);

	var _Selling2 = _interopRequireDefault(_Selling);

	var _Shipments = __webpack_require__(59);

	var _Shipments2 = _interopRequireDefault(_Shipments);

	var _AddBookModal = __webpack_require__(55);

	var _AddBookModal2 = _interopRequireDefault(_AddBookModal);

	var _App = {
	  "container": "_4uEyKcd5WHob5qPzotT7",
	  "content-container": "AHFx3FgxnBL1SCv4GK1Zj",
	  "app-container": "_3Vf4PpM3_AE6UXOuNrP22c"
	};

	var _App2 = _interopRequireDefault(_App);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var style = {
	  addBookButton: {
	    position: 'absolute',
	    right: '10%'
	  }
	};

	var _ref = _jsx(_Toolbar.ToolbarGroup, {}, void 0, _jsx(_Toolbar.ToolbarTitle, {
	  text: 'Dashboard'
	}), _jsx(_Toolbar.ToolbarSeparator, {}));

	var _ref2 = _jsx(_add2.default, {});

	var DashboardPage = function (_Component) {
	  _inherits(DashboardPage, _Component);

	  function DashboardPage(props) {
	    _classCallCheck(this, DashboardPage);

	    var _this = _possibleConstructorReturn(this, (DashboardPage.__proto__ || Object.getPrototypeOf(DashboardPage)).call(this, props));

	    _this.state = {
	      shownSubpage: 'selling',
	      addBookModalOpen: false
	    };

	    _this.getBookByID = _this.getBookByID.bind(_this);
	    _this.handleSubheaderButtonClicked = _this.handleSubheaderButtonClicked.bind(_this);
	    _this.handleAddBookButtonClicked = _this.handleAddBookButtonClicked.bind(_this);
	    _this.handleAcceptTradeRequest = _this.handleAcceptTradeRequest.bind(_this);
	    _this.handleDeclineTradeRequest = _this.handleDeclineTradeRequest.bind(_this);
	    _this.toggleAddBookModal = _this.toggleAddBookModal.bind(_this);
	    _this.createBookEntry = _this.createBookEntry.bind(_this);
	    _this.deleteBook = _this.deleteBook.bind(_this);
	    _this.handleSellingButtonClicked = _this.handleSellingButtonClicked.bind(_this);
	    _this.handleRequestsButtonClicked = _this.handleRequestsButtonClicked.bind(_this);
	    _this.handleShipmentsButtonClicked = _this.handleShipmentsButtonClicked.bind(_this);
	    _this.getShownSubpage = _this.getShownSubpage.bind(_this);
	    _this.deleteShipment = _this.deleteShipment.bind(_this);
	    return _this;
	  }

	  _createClass(DashboardPage, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.props.dispatch((0, _DashboardActions.fetchTradeRequests)());
	      this.props.dispatch((0, _BookActions.fetchBooksRequest)());
	      this.props.dispatch((0, _DashboardActions.fetchShipments)());
	    }
	  }, {
	    key: 'getBookByID',
	    value: function getBookByID(id) {
	      return this.props.stateBoundGetBookByID(id);
	    }
	  }, {
	    key: 'handleSubheaderButtonClicked',
	    value: function handleSubheaderButtonClicked(e) {
	      this.setState({ shownSubpage: e.target.id });
	    }
	  }, {
	    key: 'handleAddBookButtonClicked',
	    value: function handleAddBookButtonClicked() {
	      this.toggleAddBookModal(true);
	    }
	  }, {
	    key: 'handleAcceptTradeRequest',
	    value: function handleAcceptTradeRequest(tradeRequest) {
	      var _this2 = this;

	      this.props.dispatch((0, _DashboardActions.requestAcceptTradeRequest)(tradeRequest)).then(function () {
	        return _this2.props.dispatch((0, _DashboardActions.fetchShipments)());
	      });
	    }
	  }, {
	    key: 'handleDeclineTradeRequest',
	    value: function handleDeclineTradeRequest(tradeRequest) {
	      this.props.dispatch((0, _DashboardActions.requestDeclineTradeRequest)(tradeRequest));
	    }
	  }, {
	    key: 'toggleAddBookModal',
	    value: function toggleAddBookModal() {
	      var addBookModalOpen = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

	      this.setState({ addBookModalOpen: addBookModalOpen });
	    }
	  }, {
	    key: 'createBookEntry',
	    value: function createBookEntry(book) {
	      this.props.dispatch((0, _BookActions.createBookRequest)(book));
	    }
	  }, {
	    key: 'deleteBook',
	    value: function deleteBook(bookID) {
	      this.props.dispatch((0, _BookActions.deleteBookRequest)(bookID));
	    }
	  }, {
	    key: 'handleSellingButtonClicked',
	    value: function handleSellingButtonClicked() {
	      this.setState({ shownSubpage: 'selling' });
	    }
	  }, {
	    key: 'handleRequestsButtonClicked',
	    value: function handleRequestsButtonClicked() {
	      this.setState({ shownSubpage: 'requests' });
	    }
	  }, {
	    key: 'handleShipmentsButtonClicked',
	    value: function handleShipmentsButtonClicked() {
	      this.setState({ shownSubpage: 'shipments' });
	    }
	  }, {
	    key: 'deleteShipment',
	    value: function deleteShipment(shipment) {
	      this.props.dispatch((0, _DashboardActions.requestDeleteShipment)(shipment));
	    }
	  }, {
	    key: 'getShownSubpage',
	    value: function getShownSubpage() {
	      switch (this.state.shownSubpage) {
	        case 'selling':
	          return _jsx(_Selling2.default, {
	            myBooks: this.props.myBooks,
	            deleteBook: this.deleteBook
	          });
	        case 'requests':
	          return _jsx(_Requests2.default, {
	            tradeRequests: this.props.tradeRequests,
	            handleAcceptTradeRequest: this.handleAcceptTradeRequest,
	            handleDeclineTradeRequest: this.handleDeclineTradeRequest,
	            getBookByID: this.props.stateBoundGetBookByID
	          });
	        case 'shipments':
	          return _jsx(_Shipments2.default, {
	            shipments: this.props.shipments,
	            deleteShipment: this.deleteShipment
	          });
	        default:
	          return null;
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _jsx('div', {}, void 0, _jsx(_Toolbar.Toolbar, {}, void 0, _ref, _jsx(_Toolbar.ToolbarGroup, {}, void 0, _jsx(_MenuItem2.default, {
	        primaryText: 'Selling',
	        onClick: this.handleSellingButtonClicked
	      }), _jsx(_MenuItem2.default, {
	        primaryText: 'Requests',
	        onClick: this.handleRequestsButtonClicked
	      }), _jsx(_MenuItem2.default, {
	        primaryText: 'Shipments',
	        onClick: this.handleShipmentsButtonClicked
	      }))), _jsx('div', {
	        className: _App2.default.container
	      }, void 0, this.getShownSubpage(), _jsx(_AddBookModal2.default, {
	        open: this.state.addBookModalOpen,
	        toggle: this.toggleAddBookModal,
	        save: this.createBookEntry
	      }), _jsx(_FloatingActionButton2.default, {
	        onClick: this.handleAddBookButtonClicked,
	        secondary: Boolean(true),
	        style: style.addBookButton
	      }, void 0, _ref2)));
	    }
	  }]);

	  return DashboardPage;
	}(_react.Component);

	function mapStateToProps(state) {
	  return {
	    tradeRequests: (0, _DashboardReducer.getTradeRequests)(state),
	    shipments: (0, _DashboardReducer.getShipments)(state),
	    myBooks: (0, _BookReducer.getBooksByUser)(state, ((0, _UserReducer.getUser)(state) || {}).id || ''),
	    stateBoundGetBookByID: _BookReducer.getBookByID.bind(null, state)
	  };
	}

	exports.default = (0, _reactRedux.connect)(mapStateToProps)(DashboardPage);

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.DELETE_POST = exports.ADD_POSTS = exports.ADD_POST = undefined;
	exports.addPost = addPost;
	exports.addPostRequest = addPostRequest;
	exports.addPosts = addPosts;
	exports.fetchPosts = fetchPosts;
	exports.fetchPost = fetchPost;
	exports.deletePost = deletePost;
	exports.deletePostRequest = deletePostRequest;

	var _apiCaller = __webpack_require__(8);

	var _apiCaller2 = _interopRequireDefault(_apiCaller);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// Export Constants
	var ADD_POST = exports.ADD_POST = 'ADD_POST';
	var ADD_POSTS = exports.ADD_POSTS = 'ADD_POSTS';
	var DELETE_POST = exports.DELETE_POST = 'DELETE_POST';

	// Export Actions
	function addPost(post) {
	  return {
	    type: ADD_POST,
	    post: post
	  };
	}

	function addPostRequest(post) {
	  return function (dispatch) {
	    return (0, _apiCaller2.default)('posts', 'post', {
	      post: {
	        name: post.name,
	        title: post.title,
	        content: post.content
	      }
	    }).then(function (res) {
	      return dispatch(addPost(res.post));
	    });
	  };
	}

	function addPosts(posts) {
	  return {
	    type: ADD_POSTS,
	    posts: posts
	  };
	}

	function fetchPosts() {
	  return function (dispatch) {
	    return (0, _apiCaller2.default)('posts').then(function (res) {
	      dispatch(addPosts(res.posts));
	    });
	  };
	}

	function fetchPost(cuid) {
	  return function (dispatch) {
	    return (0, _apiCaller2.default)('posts/' + cuid).then(function (res) {
	      return dispatch(addPost(res.post));
	    });
	  };
	}

	function deletePost(cuid) {
	  return {
	    type: DELETE_POST,
	    cuid: cuid
	  };
	}

	function deletePostRequest(cuid) {
	  return function (dispatch) {
	    return (0, _apiCaller2.default)('posts/' + cuid, 'delete').then(function () {
	      return dispatch(deletePost(cuid));
	    });
	  };
	}

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getPost = exports.getPosts = undefined;

	var _PostActions = __webpack_require__(25);

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	// Initial State
	var initialState = { data: [] };

	var PostReducer = function PostReducer() {
	  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
	  var action = arguments[1];

	  switch (action.type) {
	    case _PostActions.ADD_POST:
	      return {
	        data: [action.post].concat(_toConsumableArray(state.data))
	      };

	    case _PostActions.ADD_POSTS:
	      return {
	        data: action.posts
	      };

	    case _PostActions.DELETE_POST:
	      return {
	        data: state.data.filter(function (post) {
	          return post.cuid !== action.cuid;
	        })
	      };

	    default:
	      return state;
	  }
	};

	/* Selectors */

	// Get all posts
	var getPosts = exports.getPosts = function getPosts(state) {
	  return state.posts.data;
	};

	// Get post by cuid
	var getPost = exports.getPost = function getPost(state, cuid) {
	  return state.posts.data.filter(function (post) {
	    return post.cuid === cuid;
	  })[0];
	};

	// Export Reducer
	exports.default = PostReducer;

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(0);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(1);

	var _TextField = __webpack_require__(18);

	var _TextField2 = _interopRequireDefault(_TextField);

	var _FlatButton = __webpack_require__(2);

	var _FlatButton2 = _interopRequireDefault(_FlatButton);

	var _UserReducer = __webpack_require__(5);

	var _UserActions = __webpack_require__(7);

	var _App = {
	  "container": "_4uEyKcd5WHob5qPzotT7",
	  "content-container": "AHFx3FgxnBL1SCv4GK1Zj",
	  "app-container": "_3Vf4PpM3_AE6UXOuNrP22c"
	};

	var _App2 = _interopRequireDefault(_App);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var SettingsPage = function (_Component) {
	  _inherits(SettingsPage, _Component);

	  function SettingsPage(props) {
	    _classCallCheck(this, SettingsPage);

	    var _this = _possibleConstructorReturn(this, (SettingsPage.__proto__ || Object.getPrototypeOf(SettingsPage)).call(this, props));

	    _this.state = {
	      fullName: props.user.fullName || '',
	      shippingAddress: props.user.shippingAddress || ''
	    };

	    _this.updateUserProfileClicked = _this.updateUserProfileClicked.bind(_this);
	    _this.fullNameFieldChanged = _this.fullNameFieldChanged.bind(_this);
	    _this.shippingAddressFieldChanged = _this.shippingAddressFieldChanged.bind(_this);
	    return _this;
	  }

	  _createClass(SettingsPage, [{
	    key: 'updateUserProfileClicked',
	    value: function updateUserProfileClicked() {
	      this.props.dispatch((0, _UserActions.requestUpdateShippingInfo)(this.state.fullName, this.state.shippingAddress));
	    }
	  }, {
	    key: 'fullNameFieldChanged',
	    value: function fullNameFieldChanged(e) {
	      this.setState({ fullName: e.target.value });
	    }
	  }, {
	    key: 'shippingAddressFieldChanged',
	    value: function shippingAddressFieldChanged(e) {
	      this.setState({ shippingAddress: e.target.value });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _jsx('div', {
	        className: _App2.default.container
	      }, void 0, _jsx(_TextField2.default, {
	        floatingLabelText: 'Full Name',
	        fullWidth: Boolean(true),
	        value: this.state.fullName,
	        onChange: this.fullNameFieldChanged
	      }), _jsx(_TextField2.default, {
	        floatingLabelText: 'Shipping Address',
	        fullWidth: Boolean(true),
	        value: this.state.shippingAddress,
	        onChange: this.shippingAddressFieldChanged
	      }), _jsx(_FlatButton2.default, {
	        label: 'Update User Profile',
	        primary: Boolean(true),
	        style: { float: 'right' },
	        onClick: this.updateUserProfileClicked
	      }));
	    }
	  }]);

	  return SettingsPage;
	}(_react.Component);

	function mapStateToProps(state) {
	  return {
	    user: (0, _UserReducer.getUser)(state)
	  };
	}

	exports.default = (0, _reactRedux.connect)(mapStateToProps)(SettingsPage);

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(0);

	var _react2 = _interopRequireDefault(_react);

	var _Tabs = __webpack_require__(85);

	var _SnackBar = __webpack_require__(84);

	var _SnackBar2 = _interopRequireDefault(_SnackBar);

	var _UserActions = __webpack_require__(7);

	var _UserReducer = __webpack_require__(5);

	var _reactRedux = __webpack_require__(1);

	var _reactRouter = __webpack_require__(6);

	var _LoginForm = __webpack_require__(61);

	var _LoginForm2 = _interopRequireDefault(_LoginForm);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var LoginPage = function (_Component) {
	  _inherits(LoginPage, _Component);

	  function LoginPage(props) {
	    _classCallCheck(this, LoginPage);

	    var _this = _possibleConstructorReturn(this, (LoginPage.__proto__ || Object.getPrototypeOf(LoginPage)).call(this, props));

	    _this.state = {
	      snackBarMessage: '',
	      showSnackBar: false
	    };

	    _this.login = _this.login.bind(_this);
	    _this.signin = _this.signin.bind(_this);
	    _this.toggleSnackBar = _this.toggleSnackBar.bind(_this);
	    return _this;
	  }

	  _createClass(LoginPage, [{
	    key: 'login',
	    value: function login(username, password) {
	      (0, _UserActions.login)(username, password, false).then(this.handleLoginResponse.bind(this)).catch(console.error); // eslint-disable-line
	    }
	  }, {
	    key: 'signin',
	    value: function signin(username, password) {
	      (0, _UserActions.login)(username, password, true).then(this.handleLoginResponse.bind(this)).catch(console.error); // eslint-disable-line
	    }
	  }, {
	    key: 'handleLoginResponse',
	    value: function handleLoginResponse(_ref) {
	      var _ref$data = _ref.data,
	          user = _ref$data === undefined ? null : _ref$data;

	      if (user) {
	        this.props.dispatch((0, _UserActions.setUser)(user));
	        this.props.router.goBack();
	      } else {
	        this.toggleSnackBar('invalid username or password');
	      }
	    }
	  }, {
	    key: 'toggleSnackBar',
	    value: function toggleSnackBar() {
	      var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

	      if (message) {
	        this.setState({ snackBarMessage: message });
	        this.setState({ showSnackBar: true });
	      } else {
	        this.setState({ showSnackBar: false });
	      }
	    }

	    /*
	      i would have made the tabs part of
	        the LoginForm and SignUpForm but
	        material-ui is weird and wont work
	        like that without some hackery
	    */

	  }, {
	    key: 'render',
	    value: function render() {
	      return _jsx('div', {}, void 0, _jsx(_Tabs.Tabs, {}, void 0, _jsx(_Tabs.Tab, {
	        label: 'Login'
	      }, void 0, _jsx(_LoginForm2.default, {
	        login: this.login,
	        toggleSnackBar: this.toggleSnackBar
	      })), _jsx(_Tabs.Tab, {
	        label: 'Sign Up'
	      }, void 0, _jsx(_LoginForm2.default, {
	        login: this.signin,
	        signupToggled: Boolean(true),
	        toggleSnackBar: this.toggleSnackBar
	      }))), _jsx(_SnackBar2.default, {
	        open: this.state.showSnackBar,
	        message: this.state.snackBarMessage,
	        autoHideDuration: 2000,
	        onRequestClose: this.showSnackBar
	      }));
	    }
	  }]);

	  return LoginPage;
	}(_react.Component);

	LoginPage.need = [];

	function mapStateToProps(state) {
	  return {
	    user: (0, _UserReducer.getUser)(state)
	  };
	}

	exports.default = (0, _reactRedux.connect)(mapStateToProps)((0, _reactRouter.withRouter)(LoginPage));

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _mongoose = __webpack_require__(4);

	var _mongoose2 = _interopRequireDefault(_mongoose);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Schema = _mongoose2.default.Schema;

	var shipmentSchema = new Schema({
	  shipToUser: String,
	  originalUser: String,
	  book: String
	});

	exports.default = _mongoose2.default.model('Shipment', shipmentSchema);

/***/ },
/* 30 */
/***/ function(module, exports) {

	module.exports = require("material-ui/Dialog");

/***/ },
/* 31 */
/***/ function(module, exports) {

	module.exports = require("material-ui/IconButton");

/***/ },
/* 32 */
/***/ function(module, exports) {

	module.exports = require("redux");

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }(); /* eslint-disable global-require */


	var _react = __webpack_require__(0);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(6);

	var _App = __webpack_require__(48);

	var _App2 = _interopRequireDefault(_App);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// require.ensure polyfill for node
	if (false) {
	  require.ensure = function requireModule(deps, callback) {
	    callback(require);
	  };
	}

	/* Workaround for async react routes to work with react-hot-reloader till
	  https://github.com/reactjs/react-router/issues/2182 and
	  https://github.com/gaearon/react-hot-loader/issues/288 is fixed.
	 */
	if (process.env.NODE_ENV !== 'production') {
	  // Require async routes only in development for react-hot-reloader to work.
	  __webpack_require__(60);
	  __webpack_require__(22);
	  __webpack_require__(28);
	  __webpack_require__(24);
	  __webpack_require__(27);
	}

	// react-router setup with code-splitting
	// More info: http://blog.mxstbr.com/2016/01/react-apps-with-pages/
	exports.default = _jsx(_reactRouter.Route, {
	  path: '/',
	  component: _App2.default
	}, void 0, _jsx(_reactRouter.IndexRoute, {
	  getComponent: function getComponent(nextState, cb) {
	    Promise.resolve().catch(function(err) { __webpack_require__.oe(err); }).then((function (require) {
	      cb(null, __webpack_require__(22).default);
	    }).bind(null, __webpack_require__));
	  }
	}), _jsx(_reactRouter.Route, {
	  path: 'login',
	  getComponent: function getComponent(nextState, cb) {
	    Promise.resolve().catch(function(err) { __webpack_require__.oe(err); }).then((function (require) {
	      cb(null, __webpack_require__(28).default);
	    }).bind(null, __webpack_require__));
	  }
	}), _jsx(_reactRouter.Route, {
	  path: 'dashboard',
	  getComponent: function getComponent(nextState, cb) {
	    Promise.resolve().catch(function(err) { __webpack_require__.oe(err); }).then((function (require) {
	      cb(null, __webpack_require__(24).default);
	    }).bind(null, __webpack_require__));
	  }
	}), _jsx(_reactRouter.Route, {
	  path: 'settings',
	  getComponent: function getComponent(nextState, cb) {
	    Promise.resolve().catch(function(err) { __webpack_require__.oe(err); }).then((function (require) {
	      cb(null, __webpack_require__(27).default);
	    }).bind(null, __webpack_require__));
	  }
	}));

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.configureStore = configureStore;

	var _redux = __webpack_require__(32);

	var _reduxThunk = __webpack_require__(101);

	var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

	var _DevTools = __webpack_require__(21);

	var _DevTools2 = _interopRequireDefault(_DevTools);

	var _reducers = __webpack_require__(63);

	var _reducers2 = _interopRequireDefault(_reducers);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Main store function
	 */
	function configureStore() {
	  var initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

	  // Middleware and store enhancers
	  var enhancers = [(0, _redux.applyMiddleware)(_reduxThunk2.default)];

	  if (process.env.CLIENT && process.env.NODE_ENV === 'development') {
	    // Enable DevTools only when rendering on client and during development.
	    enhancers.push(window.devToolsExtension ? window.devToolsExtension() : _DevTools2.default.instrument());
	  }

	  var store = (0, _redux.createStore)(_reducers2.default, initialState, _redux.compose.apply(undefined, enhancers));

	  // For hot reloading reducers
	  if (false) {
	    // Enable Webpack hot module replacement for reducers
	    module.hot.accept('./reducers', function () {
	      var nextReducer = require('./reducers').default; // eslint-disable-line global-require
	      store.replaceReducer(nextReducer);
	    });
	  }

	  return store;
	}

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _express = __webpack_require__(3);

	var _post = __webpack_require__(72);

	var _post2 = _interopRequireDefault(_post);

	var _book = __webpack_require__(71);

	var _book2 = _interopRequireDefault(_book);

	var _shipments = __webpack_require__(73);

	var _shipments2 = _interopRequireDefault(_shipments);

	var _user = __webpack_require__(74);

	var _user2 = _interopRequireDefault(_user);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var router = new _express.Router();

	router.use('/post', _post2.default);
	router.use('/books', _book2.default);
	router.use('/shipments', _shipments2.default);
	router.use('/user', _user2.default);

	exports.default = router;

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.fetchComponentData = fetchComponentData;

	var _promiseUtils = __webpack_require__(76);

	function fetchComponentData(store, components, params) {
	  var needs = components.reduce(function (prev, current) {
	    return (current.need || []).concat((current.WrappedComponent && current.WrappedComponent.need !== current.need ? current.WrappedComponent.need : []) || []).concat(prev);
	  }, []);

	  return (0, _promiseUtils.sequence)(needs, function (need) {
	    return store.dispatch(need(params, store.getState()));
	  });
	} /*
	  Utility function to fetch required data for component to render in server side.
	  This was inspired from https://github.com/caljrimmer/isomorphic-redux-app/blob/73e6e7d43ccd41e2eb557a70be79cebc494ee54b/src/common/api/fetchComponentDataBeforeRender.js
	  */

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/* WEBPACK VAR INJECTION */(function(__dirname) {'use strict';

	var webpack = __webpack_require__(20);
	var cssnext = __webpack_require__(94);
	var postcssFocus = __webpack_require__(95);
	var postcssReporter = __webpack_require__(96);

	module.exports = {
	  devtool: 'cheap-module-eval-source-map',

	  entry: {
	    app: ['eventsource-polyfill', 'webpack-hot-middleware/client', 'webpack/hot/only-dev-server', 'react-hot-loader/patch', './client/index.js'],
	    vendor: ['react', 'react-dom']
	  },

	  output: {
	    path: __dirname,
	    filename: 'app.js',
	    publicPath: 'http://0.0.0.0:8000/'
	  },

	  resolve: {
	    extensions: ['', '.js', '.jsx'],
	    modules: ['client', 'node_modules']
	  },

	  module: {
	    loaders: [{
	      test: /\.css$/,
	      exclude: /node_modules/,
	      loader: 'style-loader!css-loader?localIdentName=[name]__[local]__[hash:base64:5]&modules&importLoaders=1&sourceMap!postcss-loader'
	    }, {
	      test: /\.css$/,
	      include: /node_modules/,
	      loaders: ['style-loader', 'css-loader']
	    }, {
	      test: /\.jsx*$/,
	      exclude: [/node_modules/, /.+\.config.js/],
	      loader: 'babel'
	    }, {
	      test: /\.(jpe?g|gif|png|svg)$/i,
	      loader: 'url-loader?limit=10000'
	    }, {
	      test: /\.json$/,
	      loader: 'json-loader'
	    }]
	  },

	  plugins: [new webpack.HotModuleReplacementPlugin(), new webpack.optimize.CommonsChunkPlugin({
	    name: 'vendor',
	    minChunks: Infinity,
	    filename: 'vendor.js'
	  }), new webpack.DefinePlugin({
	    'process.env': {
	      CLIENT: JSON.stringify(true),
	      'NODE_ENV': JSON.stringify('development')
	    }
	  })],

	  postcss: function postcss() {
	    return [postcssFocus(), cssnext({
	      browsers: ['last 2 versions', 'IE > 10']
	    }), postcssReporter({
	      clearMessages: true
	    })];
	  }
	};
	/* WEBPACK VAR INJECTION */}.call(exports, ""))

/***/ },
/* 38 */
/***/ function(module, exports) {

	module.exports = require("body-parser");

/***/ },
/* 39 */
/***/ function(module, exports) {

	module.exports = require("compression");

/***/ },
/* 40 */
/***/ function(module, exports) {

	module.exports = require("connect-mongo");

/***/ },
/* 41 */
/***/ function(module, exports) {

	module.exports = require("express-session");

/***/ },
/* 42 */
/***/ function(module, exports) {

	module.exports = require("passport");

/***/ },
/* 43 */
/***/ function(module, exports) {

	module.exports = require("passport-local");

/***/ },
/* 44 */
/***/ function(module, exports) {

	module.exports = require("path");

/***/ },
/* 45 */
/***/ function(module, exports) {

	module.exports = require("react-dom/server");

/***/ },
/* 46 */
/***/ function(module, exports) {

	module.exports = require("webpack-dev-middleware");

/***/ },
/* 47 */
/***/ function(module, exports) {

	module.exports = require("webpack-hot-middleware");

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.App = undefined;

	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(0);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(1);

	var _MuiThemeProvider = __webpack_require__(87);

	var _MuiThemeProvider2 = _interopRequireDefault(_MuiThemeProvider);

	var _getMuiTheme = __webpack_require__(90);

	var _getMuiTheme2 = _interopRequireDefault(_getMuiTheme);

	var _darkBaseTheme = __webpack_require__(88);

	var _darkBaseTheme2 = _interopRequireDefault(_darkBaseTheme);

	var _App = {
	  "container": "_4uEyKcd5WHob5qPzotT7",
	  "content-container": "AHFx3FgxnBL1SCv4GK1Zj",
	  "app-container": "_3Vf4PpM3_AE6UXOuNrP22c"
	};

	var _App2 = _interopRequireDefault(_App);

	var _reactHelmet = __webpack_require__(12);

	var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

	var _DevTools = __webpack_require__(21);

	var _DevTools2 = _interopRequireDefault(_DevTools);

	var _Header = __webpack_require__(52);

	var _Header2 = _interopRequireDefault(_Header);

	var _Footer = __webpack_require__(51);

	var _Footer2 = _interopRequireDefault(_Footer);

	var _UserActions = __webpack_require__(7);

	var _UserReducer = __webpack_require__(5);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	// Import Style


	// Import Components


	var _ref = _jsx(_Footer2.default, {});

	var App = exports.App = function (_Component) {
	  _inherits(App, _Component);

	  function App(props) {
	    _classCallCheck(this, App);

	    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

	    _this.state = { isMounted: false };

	    _this.logout = _this.logout.bind(_this);
	    return _this;
	  }

	  _createClass(App, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.setState({ isMounted: true }); // eslint-disable-line
	      this.props.dispatch((0, _UserActions.getUserRequest)());
	    }
	  }, {
	    key: 'logout',
	    value: function logout() {
	      this.props.dispatch((0, _UserActions.requestLogout)());
	    }

	    // {this.state.isMounted && !window.devToolsExtension && process.env.NODE_ENV === 'development' && <DevTools />}
	    // <div style={{ backgroundColor: grey700 }}>

	  }, {
	    key: 'render',
	    value: function render() {
	      return _jsx(_MuiThemeProvider2.default, {
	        muiTheme: (0, _getMuiTheme2.default)(_darkBaseTheme2.default)
	      }, void 0, _jsx('div', {
	        className: _App2.default
	      }, void 0, _jsx(_reactHelmet2.default, {
	        title: 'Ink Share',
	        titleTemplate: '%s - Book Sharing Made Easy',
	        meta: [{ charset: 'utf-8' }, {
	          'http-equiv': 'X-UA-Compatible',
	          content: 'IE=edge'
	        }, {
	          name: 'viewport',
	          content: 'width=device-width, initial-scale=1'
	        }]
	      }), _jsx('div', {
	        id: 'content-container'
	      }, void 0, _jsx(_Header2.default, {
	        user: this.props.user,
	        logout: this.logout
	      }), _jsx('div', {
	        className: _App2.default['content-container']
	      }, void 0, this.props.children), _ref)));
	    }
	  }]);

	  return App;
	}(_react.Component);

	// Retrieve data from store as props
	function mapStateToProps(store) {
	  return {
	    user: (0, _UserReducer.getUser)(store)
	  };
	}

	exports.default = (0, _reactRedux.connect)(mapStateToProps)(App);

/***/ },
/* 49 */
/***/ function(module, exports) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.toggleAddPost = toggleAddPost;
	// Export Constants
	var TOGGLE_ADD_POST = exports.TOGGLE_ADD_POST = 'TOGGLE_ADD_POST';

	// Export Actions
	function toggleAddPost() {
	  return {
	    type: TOGGLE_ADD_POST
	  };
	}

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getShowAddPost = undefined;

	var _AppActions = __webpack_require__(49);

	// Initial State
	var initialState = {
	  showAddPost: false
	}; // Import Actions


	var AppReducer = function AppReducer() {
	  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
	  var action = arguments[1];

	  switch (action.type) {
	    case _AppActions.TOGGLE_ADD_POST:
	      return {
	        showAddPost: !state.showAddPost
	      };

	    default:
	      return state;
	  }
	};

	/* Selectors */

	// Get showAddPost
	var getShowAddPost = exports.getShowAddPost = function getShowAddPost(state) {
	  return state.app.showAddPost;
	};

	// Export Reducer
	exports.default = AppReducer;

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

	exports.Footer = Footer;

	var _react = __webpack_require__(0);

	var _react2 = _interopRequireDefault(_react);

	var _colors = __webpack_require__(89);

	var _Footer = {
	  "footer": "_3vPEi87A1wyh1iLR3bsBGf"
	};

	var _Footer2 = _interopRequireDefault(_Footer);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var _ref = _jsx('p', {}, void 0, 'Made by ', _jsx('a', {
	  href: 'http://caleb272.github.io/portfolio/',
	  target: '_blank'
	}, void 0, 'Caleb Martin'), ' \xB7 2016');

	function Footer() {
	  return _jsx('div', {
	    className: _Footer2.default.footer,
	    style: { background: _colors.grey900 }
	  }, void 0, _ref);
	}

	exports.default = Footer;

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

	exports.Header = Header;

	var _react = __webpack_require__(0);

	var _react2 = _interopRequireDefault(_react);

	var _AppBar = __webpack_require__(79);

	var _AppBar2 = _interopRequireDefault(_AppBar);

	var _FlatButton = __webpack_require__(2);

	var _FlatButton2 = _interopRequireDefault(_FlatButton);

	var _IconMenu = __webpack_require__(82);

	var _IconMenu2 = _interopRequireDefault(_IconMenu);

	var _IconButton = __webpack_require__(31);

	var _IconButton2 = _interopRequireDefault(_IconButton);

	var _MenuItem = __webpack_require__(16);

	var _MenuItem2 = _interopRequireDefault(_MenuItem);

	var _moreVert = __webpack_require__(93);

	var _moreVert2 = _interopRequireDefault(_moreVert);

	var _reactRouter = __webpack_require__(6);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var _ref = _jsx(_IconButton2.default, {}, void 0, _jsx(_moreVert2.default, {}));

	function Header(props) {
	  var loginButton = _jsx(_FlatButton2.default, {
	    label: 'Login',
	    onClick: login
	  });
	  var loggedIn = _jsx(_IconMenu2.default, {
	    iconButtonElement: _ref,
	    targetOrigin: { horizontal: 'right', vertical: 'top' },
	    anchorOrigin: { horizontal: 'right', vertical: 'top' }
	  }, void 0, _jsx(_MenuItem2.default, {
	    primaryText: 'Dashboard',
	    onClick: dashboard
	  }), _jsx(_MenuItem2.default, {
	    primaryText: 'Settings',
	    onClick: settings
	  }), _jsx(_MenuItem2.default, {
	    primaryText: 'Logout',
	    onClick: logout
	  }));

	  function home() {
	    route('/');
	  }

	  function dashboard() {
	    route('/dashboard');
	  }

	  function settings() {
	    route('/settings');
	  }

	  function logout() {
	    props.logout();
	    home();
	  }

	  function login() {
	    route('/login');
	  }

	  function route(url) {
	    _reactRouter.browserHistory.push(url);
	  }

	  return _jsx(_AppBar2.default, {
	    title: 'Ink Share',
	    showMenuIconButton: Boolean(false),
	    onTitleTouchTap: home,
	    iconElementRight: props.user ? loggedIn : loginButton
	  });
	}

	exports.default = Header;

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

	var _react = __webpack_require__(0);

	var _react2 = _interopRequireDefault(_react);

	var _Card = __webpack_require__(80);

	var _FlatButton = __webpack_require__(2);

	var _FlatButton2 = _interopRequireDefault(_FlatButton);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function BookListItem(props) {
	  function requestTrade() {
	    props.requestTrade(props.id, props.seller, props.user.username);
	  }

	  return _jsx('div', {
	    style: { padding: '20px' }
	  }, void 0, _jsx(_Card.Card, {}, void 0, _jsx(_Card.CardHeader, {
	    title: props.name,
	    subtitle: 'By: ' + props.author
	  }), _jsx(_Card.CardMedia, {}, void 0, _jsx('img', {
	    src: props.image,
	    alt: 'book cover',
	    style: { maxHeight: '800px', maxWidth: '200px' }
	  })), _jsx(_Card.CardText, {}, void 0, props.description), _jsx(_Card.CardActions, {}, void 0, !!props.user && props.user.id !== props.seller ? _jsx(_FlatButton2.default, {
	    label: 'Request Trade',
	    onClick: requestTrade,
	    primary: Boolean(true)
	  }) : null)));
	}

	exports.default = BookListItem;

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(0);

	var _react2 = _interopRequireDefault(_react);

	var _Dialog = __webpack_require__(30);

	var _Dialog2 = _interopRequireDefault(_Dialog);

	var _FlatButton = __webpack_require__(2);

	var _FlatButton2 = _interopRequireDefault(_FlatButton);

	var _SelectField = __webpack_require__(83);

	var _SelectField2 = _interopRequireDefault(_SelectField);

	var _MenuItem = __webpack_require__(16);

	var _MenuItem2 = _interopRequireDefault(_MenuItem);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _ref = _jsx('h3', {}, void 0, 'Select book to trade with');

	var TradeRequestModel = function (_Component) {
	  _inherits(TradeRequestModel, _Component);

	  function TradeRequestModel(props) {
	    _classCallCheck(this, TradeRequestModel);

	    var _this = _possibleConstructorReturn(this, (TradeRequestModel.__proto__ || Object.getPrototypeOf(TradeRequestModel)).call(this, props));

	    _this.state = {
	      isOpen: false,
	      bookID: '',
	      userName: '',
	      bookSellerID: '',
	      tradersBookID: ''
	    };

	    _this.close = _this.close.bind(_this);
	    _this.open = _this.open.bind(_this);
	    _this.initiateTrade = _this.initiateTrade.bind(_this);
	    _this.handleSelectBookChange = _this.handleSelectBookChange.bind(_this);
	    return _this;
	  }

	  _createClass(TradeRequestModel, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.props.setOpenFunction(this.open);
	    }
	  }, {
	    key: 'close',
	    value: function close() {
	      this.setState({ isOpen: false });
	    }
	  }, {
	    key: 'open',
	    value: function open(bookID, bookSellerID, userName) {
	      this.setState({ isOpen: true });
	      this.setState({ bookID: bookID });
	      this.setState({ bookSellerID: bookSellerID });
	      this.setState({ userName: userName });
	    }
	  }, {
	    key: 'handleSelectBookChange',
	    value: function handleSelectBookChange(event, index, value) {
	      this.setState({ tradersBookID: value });
	    }
	  }, {
	    key: 'initiateTrade',
	    value: function initiateTrade() {
	      this.props.requestTrade(this.state.bookID, this.state.tradersBookID, this.state.bookSellerID, this.state.userName);
	      this.close();
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var dialogActions = [_jsx(_FlatButton2.default, {
	        label: 'Cancel',
	        secondary: Boolean(true),
	        onClick: this.close
	      }), _jsx(_FlatButton2.default, {
	        label: 'Request Trade',
	        primary: Boolean(true),
	        onClick: this.initiateTrade
	      })];

	      return _jsx(_Dialog2.default, {
	        open: this.state.isOpen,
	        actions: dialogActions,
	        onRequestClose: this.close,
	        modal: Boolean(true)
	      }, void 0, _ref, _jsx(_SelectField2.default, {
	        fullWidth: Boolean(true),
	        value: this.state.tradersBookID,
	        onChange: this.handleSelectBookChange,
	        autoWidth: Boolean(true)
	      }, void 0, this.props.usersBooks.map(function (book) {
	        return _jsx(_MenuItem2.default, {
	          primaryText: book.name,
	          value: book.id
	        }, book.id);
	      })));
	    }
	  }]);

	  return TradeRequestModel;
	}(_react.Component);

	exports.default = TradeRequestModel;

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(0);

	var _react2 = _interopRequireDefault(_react);

	var _Dialog = __webpack_require__(30);

	var _Dialog2 = _interopRequireDefault(_Dialog);

	var _FlatButton = __webpack_require__(2);

	var _FlatButton2 = _interopRequireDefault(_FlatButton);

	var _TextField = __webpack_require__(18);

	var _TextField2 = _interopRequireDefault(_TextField);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var AddBookModal = function (_Component) {
	  _inherits(AddBookModal, _Component);

	  function AddBookModal(props) {
	    _classCallCheck(this, AddBookModal);

	    var _this = _possibleConstructorReturn(this, (AddBookModal.__proto__ || Object.getPrototypeOf(AddBookModal)).call(this, props));

	    _this.state = {
	      title: '',
	      author: '',
	      image: '',
	      description: ''
	    };

	    _this.close = _this.close.bind(_this);
	    _this.save = _this.save.bind(_this);
	    _this.handleChange = _this.handleChange.bind(_this);
	    return _this;
	  }

	  _createClass(AddBookModal, [{
	    key: 'close',
	    value: function close() {
	      this.props.toggle(false);
	    }
	  }, {
	    key: 'save',
	    value: function save() {
	      this.props.save(this.createBookEntryFromProps());
	      this.eraseState();
	      this.close();
	    }
	  }, {
	    key: 'createBookEntryFromProps',
	    value: function createBookEntryFromProps() {
	      var deepCopiedState = JSON.parse(JSON.stringify(this.state));
	      return {
	        name: deepCopiedState.title,
	        author: deepCopiedState.author,
	        image: deepCopiedState.image,
	        description: deepCopiedState.description
	      };
	    }
	  }, {
	    key: 'eraseState',
	    value: function eraseState() {
	      var _this2 = this;

	      Object.keys(this.state).forEach(function (key) {
	        return _this2.setState(_defineProperty({}, key, ''));
	      });
	    }
	  }, {
	    key: 'handleChange',
	    value: function handleChange(e) {
	      this.setState(_defineProperty({}, e.target.id, e.target.value));
	    }
	  }, {
	    key: 'textField',
	    value: function textField(key) {
	      return _jsx(_TextField2.default, {
	        floatingLabelText: '' + key[0].toUpperCase() + key.substring(1),
	        id: key,
	        value: this.state[key],
	        onChange: this.handleChange,
	        fullWidth: Boolean(true),
	        type: key === 'price' ? 'number' : 'text',
	        autoComplete: 'off'
	      }, key);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this3 = this;

	      var actions = [_jsx(_FlatButton2.default, {
	        label: 'Cancel',
	        secondary: Boolean(true),
	        onClick: this.close
	      }), _jsx(_FlatButton2.default, {
	        label: 'Save',
	        primary: Boolean(true),
	        onClick: this.save,
	        disabled: Object.keys(this.state).map(function (key) {
	          return _this3.state[key].length === 0;
	        }).indexOf(true) > -1
	      })];

	      return _jsx(_Dialog2.default, {
	        title: 'Add Book for Trade',
	        modal: Boolean(true),
	        open: this.props.open,
	        actions: actions,
	        autoScrollBodyContent: Boolean(true),
	        onRequestClose: this.close
	      }, void 0, _jsx('form', {}, void 0, Object.keys(this.state).map(function (key) {
	        return _this3.textField(key);
	      })));
	    }
	  }]);

	  return AddBookModal;
	}(_react.Component);

	exports.default = AddBookModal;

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

	var _react = __webpack_require__(0);

	var _react2 = _interopRequireDefault(_react);

	var _List = __webpack_require__(9);

	var _FlatButton = __webpack_require__(2);

	var _FlatButton2 = _interopRequireDefault(_FlatButton);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function RequestListItem(props) {
	  var tradersBook = props.getBookByID(props.tradeRequest.tradersBookID);
	  var book = props.getBookByID(props.tradeRequest.bookID);

	  var tradeText = '\n    ' + props.tradeRequest.userName + ' wants to trade\n    ' + (tradersBook ? tradersBook.name : '') + ' for\n    ' + (book ? book.name : '') + '\n  ';
	  var rightButtons = [_jsx(_FlatButton2.default, {
	    secondary: Boolean(true),
	    label: 'Decline',
	    onClick: decline
	  }), _jsx(_FlatButton2.default, {
	    primary: Boolean(true),
	    label: 'Accept',
	    onClick: accept
	  })];

	  function accept() {
	    props.acceptRequest(props.tradeRequest);
	  }

	  function decline() {
	    props.declineRequest(props.tradeRequest);
	  }

	  if (!tradersBook || !book) {
	    decline();
	    return null;
	  }

	  return _jsx(_List.ListItem, {
	    primaryText: tradeText,
	    nestedItems: [rightButtons],
	    open: Boolean(true),
	    rightIconButton: _jsx(_FlatButton2.default, {
	      disabled: Boolean(true),
	      label: ''
	    })
	  });
	}

	exports.default = RequestListItem;

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

	var _react = __webpack_require__(0);

	var _react2 = _interopRequireDefault(_react);

	var _List = __webpack_require__(9);

	var _List2 = _interopRequireDefault(_List);

	var _Subheader = __webpack_require__(17);

	var _Subheader2 = _interopRequireDefault(_Subheader);

	var _RequestListItem = __webpack_require__(56);

	var _RequestListItem2 = _interopRequireDefault(_RequestListItem);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var _ref = _jsx(_Subheader2.default, {}, void 0, 'Trade Requests');

	function Requests(props) {
	  return _jsx(_List2.default, {}, void 0, _ref, props.tradeRequests.map(function (tradeRequest) {
	    return _jsx(_RequestListItem2.default, {
	      tradeRequest: tradeRequest,
	      getBookByID: props.getBookByID,
	      acceptRequest: props.handleAcceptTradeRequest,
	      declineRequest: props.handleDeclineTradeRequest
	    }, tradeRequest.tradeID);
	  }));
	}

	exports.default = Requests;

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

	var _react = __webpack_require__(0);

	var _react2 = _interopRequireDefault(_react);

	var _List = __webpack_require__(9);

	var _Subheader = __webpack_require__(17);

	var _Subheader2 = _interopRequireDefault(_Subheader);

	var _delete = __webpack_require__(91);

	var _delete2 = _interopRequireDefault(_delete);

	var _IconButton = __webpack_require__(31);

	var _IconButton2 = _interopRequireDefault(_IconButton);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var _ref = _jsx(_Subheader2.default, {}, void 0, 'Selling');

	var _ref2 = _jsx(_delete2.default, {});

	function Selling(props) {
	  return _jsx(_List.List, {}, void 0, _ref, props.myBooks.map(function (book) {
	    return _jsx(_List.ListItem, {
	      primaryText: book.name,
	      rightIconButton: _jsx(_IconButton2.default, {
	        onClick: function onClick() {
	          return props.deleteBook(book.id);
	        }
	      }, void 0, _ref2)
	    }, book.id);
	  }));
	}

	exports.default = Selling;

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

	var _react = __webpack_require__(0);

	var _react2 = _interopRequireDefault(_react);

	var _List = __webpack_require__(9);

	var _Subheader = __webpack_require__(17);

	var _Subheader2 = _interopRequireDefault(_Subheader);

	var _FlatButton = __webpack_require__(2);

	var _FlatButton2 = _interopRequireDefault(_FlatButton);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var _ref = _jsx(_Subheader2.default, {}, void 0, 'Shipments');

	function Shipments(props) {
	  var shippingAddressNotSetup = 'the user hasn\'t setup shipping info';
	  var shippingAddress = function shippingAddress(shipment) {
	    return 'package and send ' + shipment.databaseObject.book + ' to ' + shipment.fullName + ' at ' + shipment.shippingAddress;
	  };

	  return _jsx(_List.List, {}, void 0, _ref, props.shipments.map(function (shipment) {
	    return _jsx(_List.ListItem, {
	      primaryText: shipment.shippingAddress ? shippingAddress(shipment) : shippingAddressNotSetup,
	      rightIconButton: _jsx(_FlatButton2.default, {
	        label: 'Shipped',
	        onClick: function onClick() {
	          return props.deleteShipment(shipment);
	        },
	        disabled: !shipment.shippingAddress || !shipment.fullName
	      })
	    }, '' + shipment.databaseObject.book + shipment.shippingAddress);
	  }));
	}

	exports.default = Shipments;

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

	// Import Style


	// Import Actions


	// Import Selectors


	exports.PostDetailPage = PostDetailPage;

	var _react = __webpack_require__(0);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(1);

	var _reactHelmet = __webpack_require__(12);

	var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

	var _reactIntl = __webpack_require__(97);

	var _PostListItem = {
	  "single-post": "_3B15Q62CNe0LaxJ8BUZr5W",
	  "post-title": "_3mZF-WLrnBUxaWr9zFi6Q_",
	  "author-name": "_1cSDPptMi8rvUEB2tAonlW",
	  "post-desc": "_3D8Fgk2edKTkFyBDsUEZ2u",
	  "post-action": "_3S84cKmlvGO49pK1biPlXr",
	  "divider": "y2SIF3ydn02JYMgeklO7S",
	  "post-detail": "_3W9vrxIdnQ93EmH-x2UgJR"
	};

	var _PostListItem2 = _interopRequireDefault(_PostListItem);

	var _PostActions = __webpack_require__(25);

	var _PostReducer = __webpack_require__(26);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var _ref = _jsx(_reactIntl.FormattedMessage, {
	  id: 'by'
	});

	function PostDetailPage(props) {
	  return _jsx('div', {}, void 0, _jsx(_reactHelmet2.default, {
	    title: props.post.title
	  }), _jsx('div', {
	    className: _PostListItem2.default['single-post'] + ' ' + _PostListItem2.default['post-detail']
	  }, void 0, _jsx('h3', {
	    className: _PostListItem2.default['post-title']
	  }, void 0, props.post.title), _jsx('p', {
	    className: _PostListItem2.default['author-name']
	  }, void 0, _ref, ' ', props.post.name), _jsx('p', {
	    className: _PostListItem2.default['post-desc']
	  }, void 0, props.post.content)));
	}

	// Actions required to provide data for this component to render in sever side.
	PostDetailPage.need = [function (params) {
	  return (0, _PostActions.fetchPost)(params.cuid);
	}];

	// Retrieve data from store as props
	function mapStateToProps(state, props) {
	  return {
	    post: (0, _PostReducer.getPost)(state, props.params.cuid)
	  };
	}

	exports.default = (0, _reactRedux.connect)(mapStateToProps)(PostDetailPage);

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(0);

	var _react2 = _interopRequireDefault(_react);

	var _TextField = __webpack_require__(18);

	var _TextField2 = _interopRequireDefault(_TextField);

	var _LoginTools = __webpack_require__(62);

	var loginTools = _interopRequireWildcard(_LoginTools);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var LoginForm = function (_Component) {
	  _inherits(LoginForm, _Component);

	  function LoginForm(props) {
	    _classCallCheck(this, LoginForm);

	    var _this = _possibleConstructorReturn(this, (LoginForm.__proto__ || Object.getPrototypeOf(LoginForm)).call(this, props));

	    _this.state = {
	      username: '',
	      password: '',
	      'validate-password': ''
	    };

	    _this.handleFormKeyPressed = _this.handleFormKeyPressed.bind(_this);
	    return _this;
	  }

	  _createClass(LoginForm, [{
	    key: 'handleFormKeyPressed',
	    value: function handleFormKeyPressed(e) {
	      var username = this.state.username;
	      var password = this.state.password;
	      if (loginTools.isValidEnterKey(e, username, password)) {
	        if (this.doPasswordsMatch()) {
	          this.props.login(username, password);
	        } else if (this.props.toggleSnackBar) {
	          this.props.toggleSnackBar('the passwords don\'t match');
	        }
	      } else if (loginTools.isEnterKey(e.key)) {
	        this.props.toggleSnackBar('you need to fill out all of the fields');
	      }
	    }
	  }, {
	    key: 'doPasswordsMatch',
	    value: function doPasswordsMatch() {
	      if (this.props.signupToggled && this.state.password !== this.state['validate-password']) {
	        return false;
	      }
	      return true;
	    }
	  }, {
	    key: 'signupInput',
	    value: function signupInput() {
	      return _jsx(_TextField2.default, {
	        floatingLabelText: 'Confirm Password',
	        fullWidth: Boolean(true),
	        value: this.state['validate-password'],
	        name: 'validate-password',
	        onChange: loginTools.handleFieldChange.bind(this),
	        type: 'password'
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _jsx('form', {
	        onKeyPress: this.handleFormKeyPressed
	      }, void 0, _jsx(_TextField2.default, {
	        floatingLabelText: 'Username',
	        fullWidth: Boolean(true),
	        value: this.state.username,
	        name: 'username',
	        onChange: loginTools.handleFieldChange.bind(this),
	        autoComplete: 'false'
	      }), _jsx(_TextField2.default, {
	        floatingLabelText: 'Password',
	        fullWidth: Boolean(true),
	        value: this.state.password,
	        name: 'password',
	        onChange: loginTools.handleFieldChange.bind(this),
	        type: 'password'
	      }), this.props.signupToggled ? this.signupInput() : null);
	    }
	  }]);

	  return LoginForm;
	}(_react.Component);

	exports.default = LoginForm;

/***/ },
/* 62 */
/***/ function(module, exports) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.handleFieldChange = handleFieldChange;
	exports.isValidEnterKey = isValidEnterKey;
	exports.isEnterKey = isEnterKey;
	exports.isValidCredentials = isValidCredentials;

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	function handleFieldChange(e) {
	  var field = e.target.name;
	  this.setState(_defineProperty({}, field, e.target.value));
	}

	function isValidEnterKey(e, username, password) {
	  return isEnterKey(e.key) && isValidCredentials(username, password);
	}

	function isEnterKey(key) {
	  return key === 'Enter';
	}

	function isValidCredentials(username, password) {
	  return username.length > 0 && password.length > 0;
	}

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _redux = __webpack_require__(32);

	var _AppReducer = __webpack_require__(50);

	var _AppReducer2 = _interopRequireDefault(_AppReducer);

	var _PostReducer = __webpack_require__(26);

	var _PostReducer2 = _interopRequireDefault(_PostReducer);

	var _BookReducer = __webpack_require__(14);

	var _BookReducer2 = _interopRequireDefault(_BookReducer);

	var _UserReducer = __webpack_require__(5);

	var _UserReducer2 = _interopRequireDefault(_UserReducer);

	var _DashboardReducer = __webpack_require__(23);

	var _DashboardReducer2 = _interopRequireDefault(_DashboardReducer);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// Combine all reducers into one root reducer
	/**
	 * Root Reducer
	 */
	exports.default = (0, _redux.combineReducers)({
	  app: _AppReducer2.default,
	  posts: _PostReducer2.default,
	  books: _BookReducer2.default,
	  user: _UserReducer2.default,
	  dashboard: _DashboardReducer2.default
	});

	// Import Reducers

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

	exports.getBooks = getBooks;
	exports.createBook = createBook;
	exports.createTradeRequest = createTradeRequest;
	exports.confirmTrade = confirmTrade;
	exports.declineTrade = declineTrade;
	exports.getTradeRequests = getTradeRequests;
	exports.deleteBook = deleteBook;

	var _cuid = __webpack_require__(11);

	var _cuid2 = _interopRequireDefault(_cuid);

	var _book = __webpack_require__(68);

	var _book2 = _interopRequireDefault(_book);

	var _tradeRequest = __webpack_require__(70);

	var _tradeRequest2 = _interopRequireDefault(_tradeRequest);

	var _user = __webpack_require__(10);

	var _user2 = _interopRequireDefault(_user);

	var _shipment = __webpack_require__(29);

	var _shipment2 = _interopRequireDefault(_shipment);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function getBooks(req, res) {
	  _book2.default.find().then(function (books) {
	    res.send(books || []);
	  });
	}

	function createBook(req, res) {
	  var book = req.body;
	  book.id = (0, _cuid2.default)();
	  book.seller = req.user.id;

	  new _book2.default(book).save().then(function (savedBook) {
	    return res.send(savedBook || {});
	  });
	}

	function createTradeRequest(req, res) {
	  if (!req.user) {
	    return res.status(403).end();
	  }

	  var tradersID = req.user.id;
	  var tradersBookID = req.body.tradersBookID;
	  var userID = req.body.userID;
	  var bookID = req.body.bookID;
	  var userName = req.body.userName;

	  new _tradeRequest2.default({ tradersID: tradersID, tradersBookID: tradersBookID, userID: userID, bookID: bookID, userName: userName }).save().then(function (tradeRequest) {
	    return res.send({ tradeRequest: tradeRequest });
	  }).catch(function (error) {
	    console.error(error); // eslint-disable-line
	    res.status(500).end();
	  });
	}

	function confirmTrade(req, res) {
	  var _req$body = req.body,
	      tradersID = _req$body.tradersID,
	      tradersBookID = _req$body.tradersBookID,
	      userID = _req$body.userID,
	      bookID = _req$body.bookID;

	  if (!req.user) {
	    return res.status(403).send({ message: 'you need to login' });
	  }

	  var databaseQueries = [_book2.default.findOne({ id: tradersBookID }), _book2.default.findOne({ id: bookID }), _user2.default.findOne({ id: tradersID }), _user2.default.findOne({ id: userID })];

	  function createShipment(shipToUser, originalUser, book) {
	    return new _shipment2.default({
	      shipToUser: shipToUser.id,
	      originalUser: originalUser.id,
	      book: book.name
	    });
	  }

	  Promise.all(databaseQueries).then(function (results) {
	    var _results = _slicedToArray(results, 4),
	        tradersBook = _results[0],
	        book = _results[1],
	        trader = _results[2],
	        user = _results[3];

	    var tradersShipment = createShipment(user, trader, tradersBook);
	    var usersShipment = createShipment(trader, user, book);

	    if (!tradersBook || !book || !trader || !user) {
	      return res.status(403).end();
	    }

	    var saveAndDeletePromises = [tradersShipment.save(), usersShipment.save(), book.remove(), tradersBook.remove()];

	    return Promise.all(saveAndDeletePromises).then(function () {
	      return res.send({ message: 'success' });
	    });
	  }).catch(function (error) {
	    console.error(error); // eslint-disable-line
	    res.status(500).end();
	  });
	}

	function declineTrade(req, res) {
	  _tradeRequest2.default.findOneAndRemove(req.body).then(function () {
	    return res.send({ message: 'success' });
	  }).catch(function (error) {
	    console.error(error); // eslint-disable-line
	    req.status(500).end();
	  });
	}

	function getTradeRequests(req, res) {
	  if (!req.user) {
	    return res.status(403).send([]);
	  }

	  var userID = req.user.id;
	  _tradeRequest2.default.find({ userID: userID }).then(function (tradeRequests) {
	    return res.send(tradeRequests);
	  }).catch(function (error) {
	    console.error(error); // eslint-disable-line
	    res.status(500).send([]);
	  });
	}

	function deleteBook(req, res) {
	  var id = req.body.id;
	  if (!req.user) {
	    return res.status(403);
	  }

	  _book2.default.findOne({ id: id }).then(function (foundBook) {
	    if (!foundBook) {
	      res.status(410);
	    } else if (foundBook.seller !== req.user.id) {
	      res.status(403);
	    } else {
	      res.status(204);
	      foundBook.remove();
	    }

	    res.end();
	  }).catch(function (error) {
	    return console.error(error);
	  }); // eslint-disable-line
	}

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getPosts = getPosts;
	exports.addPost = addPost;
	exports.getPost = getPost;
	exports.deletePost = deletePost;

	var _post = __webpack_require__(69);

	var _post2 = _interopRequireDefault(_post);

	var _cuid = __webpack_require__(11);

	var _cuid2 = _interopRequireDefault(_cuid);

	var _limax = __webpack_require__(78);

	var _limax2 = _interopRequireDefault(_limax);

	var _sanitizeHtml = __webpack_require__(102);

	var _sanitizeHtml2 = _interopRequireDefault(_sanitizeHtml);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Get all posts
	 * @param req
	 * @param res
	 * @returns void
	 */
	function getPosts(req, res) {
	  _post2.default.find().sort('-dateAdded').exec(function (err, posts) {
	    if (err) {
	      res.status(500).send(err);
	    }
	    res.json({ posts: posts });
	  });
	}

	/**
	 * Save a post
	 * @param req
	 * @param res
	 * @returns void
	 */
	function addPost(req, res) {
	  if (!req.body.post.name || !req.body.post.title || !req.body.post.content) {
	    res.status(403).end();
	  }

	  var newPost = new _post2.default(req.body.post);

	  // Let's sanitize inputs
	  newPost.title = (0, _sanitizeHtml2.default)(newPost.title);
	  newPost.name = (0, _sanitizeHtml2.default)(newPost.name);
	  newPost.content = (0, _sanitizeHtml2.default)(newPost.content);

	  newPost.slug = (0, _limax2.default)(newPost.title.toLowerCase(), { lowercase: true });
	  newPost.cuid = (0, _cuid2.default)();
	  newPost.save(function (err, saved) {
	    if (err) {
	      res.status(500).send(err);
	    }
	    res.json({ post: saved });
	  });
	}

	/**
	 * Get a single post
	 * @param req
	 * @param res
	 * @returns void
	 */
	function getPost(req, res) {
	  _post2.default.findOne({ cuid: req.params.cuid }).exec(function (err, post) {
	    if (err) {
	      res.status(500).send(err);
	    }
	    res.json({ post: post });
	  });
	}

	/**
	 * Delete a post
	 * @param req
	 * @param res
	 * @returns void
	 */
	function deletePost(req, res) {
	  _post2.default.findOne({ cuid: req.params.cuid }).exec(function (err, post) {
	    if (err) {
	      res.status(500).send(err);
	    }

	    post.remove(function () {
	      res.status(200).end();
	    });
	  });
	}

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getUsersPendingShipments = getUsersPendingShipments;
	exports.deleteShipment = deleteShipment;

	var _shipment = __webpack_require__(29);

	var _shipment2 = _interopRequireDefault(_shipment);

	var _user = __webpack_require__(10);

	var _user2 = _interopRequireDefault(_user);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function getUsersPendingShipments(req, res) {
	  if (!req.user) {
	    return res.status(403).end();
	  }
	  // run through the shipments and put in the address to the recipients
	  _shipment2.default.find({ originalUser: req.user.id }).then(function (shipments) {
	    return Promise.all(shipments.map(injectShippingInfo));
	  }).then(function (injectedShipments) {
	    res.send({ data: injectedShipments });
	  }).catch(function (error) {
	    console.error(error); // eslint-disable-line
	    res.status(500);
	  });
	}

	function injectShippingInfo(shipment) {
	  return findUserInShipment(shipment).then(function (_ref) {
	    var shippingAddress = _ref.shippingAddress,
	        fullName = _ref.fullName;

	    return {
	      shippingAddress: shippingAddress,
	      fullName: fullName,
	      book: shipment.book,
	      databaseObject: shipment
	    };
	  });
	}

	function findUserInShipment(shipment) {
	  return _user2.default.findOne({ id: shipment.shipToUser });
	}

	function deleteShipment(req, res) {
	  _shipment2.default.findOneAndRemove(req.body).catch(console.error); // eslint-disable-line
	  res.status(204).end();
	}

/***/ },
/* 67 */
/***/ function(module, exports) {

	"use strict";
	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getUser = getUser;
	exports.updateShippingInfo = updateShippingInfo;
	function getUser(req, res) {
	  res.send({ data: req.user || null });
	}

	function updateShippingInfo(req, res) {
	  if (!req.user) {
	    return res.status(403).end();
	  }
	  var user = req.user;

	  user.fullName = req.body.fullName;
	  user.shippingAddress = req.body.shippingAddress;

	  user.save().then(function (savedUser) {
	    return res.send({ data: savedUser });
	  }).catch(function (error) {
	    res.status(500).end();
	    console.error(error); // eslint-disable-line
	  });
	}

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _mongoose = __webpack_require__(4);

	var _mongoose2 = _interopRequireDefault(_mongoose);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Schema = _mongoose2.default.Schema;

	var bookSchema = new Schema({
	  name: String,
	  author: String,
	  image: String,
	  description: String,
	  seller: String,
	  id: String
	});

	exports.default = _mongoose2.default.model('Book', bookSchema);

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _mongoose = __webpack_require__(4);

	var _mongoose2 = _interopRequireDefault(_mongoose);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Schema = _mongoose2.default.Schema;

	var postSchema = new Schema({
	  name: { type: 'String', required: true },
	  title: { type: 'String', required: true },
	  content: { type: 'String', required: true },
	  slug: { type: 'String', required: true },
	  cuid: { type: 'String', required: true },
	  dateAdded: { type: 'Date', default: Date.now, required: true }
	});

	exports.default = _mongoose2.default.model('Post', postSchema);

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _mongoose = __webpack_require__(4);

	var _mongoose2 = _interopRequireDefault(_mongoose);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Schema = _mongoose2.default.Schema;

	var tradeRequestSchema = new Schema({
	  tradersID: String,
	  tradersBookID: String,
	  userID: String,
	  bookID: String,
	  userName: String
	});

	exports.default = _mongoose2.default.model('TradeRequest', tradeRequestSchema);

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _express = __webpack_require__(3);

	var _book = __webpack_require__(64);

	var BookController = _interopRequireWildcard(_book);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	var router = new _express.Router();

	router.route('/').get(BookController.getBooks);
	router.route('/').post(BookController.createBook);
	router.route('/').delete(BookController.deleteBook);
	router.route('/trade/request').post(BookController.createTradeRequest);
	router.route('/trade/request').put(BookController.confirmTrade);
	router.route('/trade/request').delete(BookController.declineTrade);
	router.route('/trade/request').get(BookController.getTradeRequests);

	exports.default = router;

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _express = __webpack_require__(3);

	var _post = __webpack_require__(65);

	var PostController = _interopRequireWildcard(_post);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	var router = new _express.Router();

	// Get all Posts
	router.route('/posts').get(PostController.getPosts);

	// Get one post by cuid
	router.route('/posts/:cuid').get(PostController.getPost);

	// Add a new Post
	router.route('/posts').post(PostController.addPost);

	// Delete a post by cuid
	router.route('/posts/:cuid').delete(PostController.deletePost);

	exports.default = router;

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _express = __webpack_require__(3);

	var _shipments = __webpack_require__(66);

	var shipments = _interopRequireWildcard(_shipments);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	var router = new _express.Router();

	router.route('/').get(shipments.getUsersPendingShipments);
	router.route('/').delete(shipments.deleteShipment);

	exports.default = router;

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _express = __webpack_require__(3);

	var _user = __webpack_require__(67);

	var userController = _interopRequireWildcard(_user);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	var router = new _express.Router();

	router.route('/').get(userController.getUser);
	router.route('/').patch(userController.updateShippingInfo);

	exports.default = router;

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/* WEBPACK VAR INJECTION */(function(__dirname) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

	// Webpack Requirements


	var _express = __webpack_require__(3);

	var _express2 = _interopRequireDefault(_express);

	var _compression = __webpack_require__(39);

	var _compression2 = _interopRequireDefault(_compression);

	var _mongoose = __webpack_require__(4);

	var _mongoose2 = _interopRequireDefault(_mongoose);

	var _bodyParser = __webpack_require__(38);

	var _bodyParser2 = _interopRequireDefault(_bodyParser);

	var _path = __webpack_require__(44);

	var _path2 = _interopRequireDefault(_path);

	var _connectMongo = __webpack_require__(40);

	var _connectMongo2 = _interopRequireDefault(_connectMongo);

	var _expressSession = __webpack_require__(41);

	var _expressSession2 = _interopRequireDefault(_expressSession);

	var _passport = __webpack_require__(42);

	var _passport2 = _interopRequireDefault(_passport);

	var _passportLocal = __webpack_require__(43);

	var _passportLocal2 = _interopRequireDefault(_passportLocal);

	var _user = __webpack_require__(10);

	var _user2 = _interopRequireDefault(_user);

	var _cuid = __webpack_require__(11);

	var _cuid2 = _interopRequireDefault(_cuid);

	var _webpack = __webpack_require__(20);

	var _webpack2 = _interopRequireDefault(_webpack);

	var _webpackConfig = __webpack_require__(37);

	var _webpackConfig2 = _interopRequireDefault(_webpackConfig);

	var _webpackDevMiddleware = __webpack_require__(46);

	var _webpackDevMiddleware2 = _interopRequireDefault(_webpackDevMiddleware);

	var _webpackHotMiddleware = __webpack_require__(47);

	var _webpackHotMiddleware2 = _interopRequireDefault(_webpackHotMiddleware);

	var _store = __webpack_require__(34);

	var _reactRedux = __webpack_require__(1);

	var _react = __webpack_require__(0);

	var _react2 = _interopRequireDefault(_react);

	var _server = __webpack_require__(45);

	var _reactRouter = __webpack_require__(6);

	var _reactHelmet = __webpack_require__(12);

	var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

	var _routes = __webpack_require__(33);

	var _routes2 = _interopRequireDefault(_routes);

	var _fetchData = __webpack_require__(36);

	var _api = __webpack_require__(35);

	var _api2 = _interopRequireDefault(_api);

	var _config = __webpack_require__(19);

	var _config2 = _interopRequireDefault(_config);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// Initialize the Express App
	var app = new _express2.default();
	var MongoStore = (0, _connectMongo2.default)(_expressSession2.default);

	// Run Webpack dev server in development mode
	if (process.env.NODE_ENV === 'development') {
	  var compiler = (0, _webpack2.default)(_webpackConfig2.default);
	  app.use((0, _webpackDevMiddleware2.default)(compiler, { noInfo: true, publicPath: _webpackConfig2.default.output.publicPath }));
	  app.use((0, _webpackHotMiddleware2.default)(compiler));
	}

	// React And Redux Setup


	// Import required modules


	// Set native promises as mongoose promise
	_mongoose2.default.Promise = global.Promise;

	// MongoDB Connection
	_mongoose2.default.connect(_config2.default.mongoURL, function (error) {
	  if (error) {
	    console.error('Please make sure Mongodb is installed and running!'); // eslint-disable-line no-console
	    throw error;
	  }
	});

	// Apply body Parser and server public assets and routes
	app.use((0, _compression2.default)());
	app.use(_bodyParser2.default.json({ limit: '20mb' }));
	app.use(_bodyParser2.default.urlencoded({ limit: '20mb', extended: false }));
	app.use(_express2.default.static(_path2.default.resolve(__dirname, '../dist')));
	app.use((0, _expressSession2.default)({
	  secret: 'keyboard cat',
	  store: new MongoStore({ mongooseConnection: _mongoose2.default.connection })
	}));
	app.use(_passport2.default.initialize());
	app.use(_passport2.default.session());

	_passport2.default.serializeUser(function (user, done) {
	  done(null, user._id);
	});

	_passport2.default.deserializeUser(function (id, done) {
	  _user2.default.findById(id, function (err, user) {
	    done(err, user);
	  });
	});

	/* passport stuff move i will move this into its own module once i get it working */
	var basicStrategy = new _passportLocal2.default({
	  passReqToCallback: true
	}, function (req, username, password, done) {
	  var signup = req.body.signup;

	  _user2.default.findOne({ username: username, password: password }).then(function (user) {
	    if (user) {
	      return done(null, user);
	    } else if (signup) {
	      return new _user2.default({ username: username, password: password, id: (0, _cuid2.default)() }).save().then(function (newUser) {
	        return done(null, newUser);
	      });
	    }

	    return done(null, false);
	  }).catch(function (err) {
	    return done(err, false);
	  });
	});
	_passport2.default.use(basicStrategy);

	app.post('/api/login', function (req, res, next) {
	  _passport2.default.authenticate('local', function (err, user) {
	    var failed = function failed() {
	      return res.send({ data: null });
	    };

	    if (err) return next(err);
	    if (!user) return failed();
	    req.logIn(user, function (err) {
	      if (err) return failed();
	      return res.send({ data: user });
	    });
	  })(req, res, next);
	});

	app.put('/api/logout', function (req, res) {
	  req.logOut();
	  res.status(204).end();
	});

	app.use('/api', _api2.default);

	// Render Initial HTML
	var renderFullPage = function renderFullPage(html, initialState) {
	  var head = _reactHelmet2.default.rewind();

	  // Import Manifests
	  var assetsManifest = process.env.webpackAssets && JSON.parse(process.env.webpackAssets);
	  var chunkManifest = process.env.webpackChunkAssets && JSON.parse(process.env.webpackChunkAssets);

	  return '\n    <!doctype html>\n    <html>\n      <head>\n        ' + head.base.toString() + '\n        ' + head.title.toString() + '\n        ' + head.meta.toString() + '\n        ' + head.link.toString() + '\n        ' + head.script.toString() + '\n\n        ' + (process.env.NODE_ENV === 'production' ? '<link rel=\'stylesheet\' href=\'' + assetsManifest['/app.css'] + '\' />' : '') + '\n        <link href=\'https://fonts.googleapis.com/css?family=Lato:400,300,700\' rel=\'stylesheet\' type=\'text/css\'/>\n        <link rel="shortcut icon" href="http://res.cloudinary.com/hashnode/image/upload/v1455629445/static_imgs/mern/mern-favicon-circle-fill.png" type="image/png" />\n      </head>\n      <body>\n        <div id="root">' + html + '</div>\n        <script>\n          window.__INITIAL_STATE__ = ' + JSON.stringify(initialState) + '\n          ' + (process.env.NODE_ENV === 'production' ? '//<![CDATA[\n          window.webpackManifest = ' + JSON.stringify(chunkManifest) + '\n          //]]>' : '') + '\n        </script>\n        <script src=\'' + (process.env.NODE_ENV === 'production' ? assetsManifest['/vendor.js'] : '/vendor.js') + '\'></script>\n        <script src=\'' + (process.env.NODE_ENV === 'production' ? assetsManifest['/app.js'] : '/app.js') + '\'></script>\n      </body>\n    </html>\n  ';
	};

	var renderError = function renderError(err) {
	  var softTab = '&#32;&#32;&#32;&#32;';
	  var errTrace = process.env.NODE_ENV !== 'production' ? ':<br><br><pre style="color:red">' + softTab + err.stack.replace(/\n/g, '<br>' + softTab) + '</pre>' : '';
	  return renderFullPage('Server Error' + errTrace, {});
	};

	// Server Side Rendering based on routes matched by React-router.
	app.use(function (req, res, next) {
	  (0, _reactRouter.match)({ routes: _routes2.default, location: req.url }, function (err, redirectLocation, renderProps) {
	    if (err) {
	      return res.status(500).end(renderError(err));
	    }

	    if (redirectLocation) {
	      return res.redirect(302, redirectLocation.pathname + redirectLocation.search);
	    }

	    if (!renderProps) {
	      return next();
	    }

	    var store = (0, _store.configureStore)();
	    // put the user into the store in this request because making server side requests in the need doesn't have the credentials/cookies
	    store.dispatch({
	      type: 'SET_USER',
	      user: req.user || null
	    });

	    return (0, _fetchData.fetchComponentData)(store, renderProps.components, renderProps.params).then(function () {
	      var initialView = (0, _server.renderToString)(_jsx(_reactRedux.Provider, {
	        store: store
	      }, void 0, _react2.default.createElement(_reactRouter.RouterContext, renderProps)));
	      var finalState = store.getState();

	      res.set('Content-Type', 'text/html').status(200).end(renderFullPage(initialView, finalState));
	    }).catch(function (error) {
	      return next(error);
	    });
	  });
	});

	// start app
	app.listen(_config2.default.port, function (error) {
	  if (!error) {
	    console.log('MERN is running on port: ' + _config2.default.port + '! Build something amazing!'); // eslint-disable-line
	  }
	});

	exports.default = app;
	/* WEBPACK VAR INJECTION */}.call(exports, "server"))

/***/ },
/* 76 */
/***/ function(module, exports) {

	"use strict";
	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.sequence = sequence;
	/**
	 * Throw an array to it and a function which can generate promises
	 * and it will call them sequentially, one after another
	 */
	function sequence(items, consumer) {
	  var results = [];
	  var runner = function runner() {
	    var item = items.shift();
	    if (item) {
	      return consumer(item).then(function (result) {
	        results.push(result);
	      }).then(runner);
	    }

	    return Promise.resolve(results);
	  };

	  return runner();
	}

/***/ },
/* 77 */
/***/ function(module, exports) {

	module.exports = require("isomorphic-fetch");

/***/ },
/* 78 */
/***/ function(module, exports) {

	module.exports = require("limax");

/***/ },
/* 79 */
/***/ function(module, exports) {

	module.exports = require("material-ui/AppBar");

/***/ },
/* 80 */
/***/ function(module, exports) {

	module.exports = require("material-ui/Card");

/***/ },
/* 81 */
/***/ function(module, exports) {

	module.exports = require("material-ui/FloatingActionButton");

/***/ },
/* 82 */
/***/ function(module, exports) {

	module.exports = require("material-ui/IconMenu");

/***/ },
/* 83 */
/***/ function(module, exports) {

	module.exports = require("material-ui/SelectField");

/***/ },
/* 84 */
/***/ function(module, exports) {

	module.exports = require("material-ui/SnackBar");

/***/ },
/* 85 */
/***/ function(module, exports) {

	module.exports = require("material-ui/Tabs");

/***/ },
/* 86 */
/***/ function(module, exports) {

	module.exports = require("material-ui/Toolbar");

/***/ },
/* 87 */
/***/ function(module, exports) {

	module.exports = require("material-ui/styles/MuiThemeProvider");

/***/ },
/* 88 */
/***/ function(module, exports) {

	module.exports = require("material-ui/styles/baseThemes/darkBaseTheme");

/***/ },
/* 89 */
/***/ function(module, exports) {

	module.exports = require("material-ui/styles/colors");

/***/ },
/* 90 */
/***/ function(module, exports) {

	module.exports = require("material-ui/styles/getMuiTheme");

/***/ },
/* 91 */
/***/ function(module, exports) {

	module.exports = require("material-ui/svg-icons/action/delete");

/***/ },
/* 92 */
/***/ function(module, exports) {

	module.exports = require("material-ui/svg-icons/content/add");

/***/ },
/* 93 */
/***/ function(module, exports) {

	module.exports = require("material-ui/svg-icons/navigation/more-vert");

/***/ },
/* 94 */
/***/ function(module, exports) {

	module.exports = require("postcss-cssnext");

/***/ },
/* 95 */
/***/ function(module, exports) {

	module.exports = require("postcss-focus");

/***/ },
/* 96 */
/***/ function(module, exports) {

	module.exports = require("postcss-reporter");

/***/ },
/* 97 */
/***/ function(module, exports) {

	module.exports = require("react-intl");

/***/ },
/* 98 */
/***/ function(module, exports) {

	module.exports = require("redux-devtools");

/***/ },
/* 99 */
/***/ function(module, exports) {

	module.exports = require("redux-devtools-dock-monitor");

/***/ },
/* 100 */
/***/ function(module, exports) {

	module.exports = require("redux-devtools-log-monitor");

/***/ },
/* 101 */
/***/ function(module, exports) {

	module.exports = require("redux-thunk");

/***/ },
/* 102 */
/***/ function(module, exports) {

	module.exports = require("sanitize-html");

/***/ }
/******/ ]);