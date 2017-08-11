(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("lodash"));
	else if(typeof define === 'function' && define.amd)
		define(["lodash"], factory);
	else if(typeof exports === 'object')
		exports["restructured"] = factory(require("lodash"));
	else
		root["restructured"] = factory(root["_"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _lodash = __webpack_require__(0);

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PunctuationOpeners = '"\'(<\\[{\u0F3A\u0F3C\u169B\u2045\u207D\u208D\u2329\u2768' + '\u276A\u276C\u276E\u2770\u2772\u2774\u27C5\u27E6\u27E8\u27EA' + '\u27EC\u27EE\u2983\u2985\u2987\u2989\u298B\u298D\u298F\u2991' + '\u2993\u2995\u2997\u29D8\u29DA\u29FC\u2E22\u2E24\u2E26\u2E28' + '\u3008\u300A\u300C\u300E\u3010\u3014\u3016\u3018\u301A\u301D' + '\u301D\uFD3E\uFE17\uFE35\uFE37\uFE39\uFE3B\uFE3D\uFE3F\uFE41' + '\uFE43\uFE47\uFE59\uFE5B\uFE5D\uFF08\uFF3B\uFF5B\uFF5F\uFF62' + '\xAB\u2018\u201C\u2039\u2E02\u2E04\u2E09\u2E0C\u2E1C\u2E20' + '\u201A\u201E\xBB\u2019\u201D\u203A\u2E03\u2E05\u2E0A\u2E0D' + '\u2E1D\u2E21\u201B\u201F';

var PunctuationClosers = '"\')>\\]}\u0F3B\u0F3D\u169C\u2046\u207E\u208E\u232A\u2769' + '\u276B\u276D\u276F\u2771\u2773\u2775\u27C6\u27E7\u27E9\u27EB' + '\u27ED\u27EF\u2984\u2986\u2988\u298A\u298C\u298E\u2990\u2992' + '\u2994\u2996\u2998\u29D9\u29DB\u29FD\u2E23\u2E25\u2E27\u2E29' + '\u3009\u300B\u300D\u300F\u3011\u3015\u3017\u3019\u301B\u301E' + '\u301F\uFD3F\uFE18\uFE36\uFE38\uFE3A\uFE3C\uFE3E\uFE40\uFE42' + '\uFE44\uFE48\uFE5A\uFE5C\uFE5E\uFF09\uFF3D\uFF5D\uFF60\uFF63' + '\xBB\u2019\u201D\u203A\u2E03\u2E05\u2E0A\u2E0D\u2E1D\u2E21' + '\u201B\u201F\xAB\u2018\u201C\u2039\u2E02\u2E04\u2E09\u2E0C' + '\u2E1C\u2E20\u201A\u201E';

var PunctuationOpenerToCloser = {};
var PunctuationCloserToOpener = {};

for (var i = 0; i < PunctuationOpeners.length; i++) {
  var opener = PunctuationOpeners[i];
  var closer = PunctuationClosers[i];
  PunctuationOpenerToCloser[opener] = closer;
  PunctuationOpenerToCloser[closer] = opener;
}

var PunctuationDelimiters = '\\-/:\u058A\xA1\xB7\xBF\u037E\u0387\u055A-\u055F\u0589' + '\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C' + '\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D' + '\u07F7-\u07F9\u0830-\u083E\u0964\u0965\u0970\u0DF4\u0E4F' + '\u0E5A\u0E5B\u0F04-\u0F12\u0F85\u0FD0-\u0FD4\u104A-\u104F' + '\u10FB\u1361-\u1368\u1400\u166D\u166E\u16EB-\u16ED\u1735' + '\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945' + '\u19DE\u19DF\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-' + '\u1B60\u1C3B-\u1C3F\u1C7E\u1C7F\u1CD3\u2010-\u2017\u2020-' + '\u2027\u2030-\u2038\u203B-\u203E\u2041-\u2043\u2047-' + '\u2051\u2053\u2055-\u205E\u2CF9-\u2CFC\u2CFE\u2CFF\u2E00' + '\u2E01\u2E06-\u2E08\u2E0B\u2E0E-\u2E1B\u2E1E\u2E1F\u2E2A-' + '\u2E2E\u2E30\u2E31\u3001-\u3003\u301C\u3030\u303D\u30A0' + '\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7' + '\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA92E\uA92F\uA95F' + '\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uABEB' + '\uFE10-\uFE16\uFE19\uFE30-\uFE32\uFE45\uFE46\uFE49-\uFE4C' + '\uFE50-\uFE52\uFE54-\uFE58\uFE5F-\uFE61\uFE63\uFE68\uFE6A' + '\uFE6B\uFF01-\uFF03\uFF05-\uFF07\uFF0A\uFF0C-\uFF0F\uFF1A' + '\uFF1B\uFF1F\uFF20\uFF3C\uFF61\uFF64\uFF65';

var PunctuationDelimiterSet = {};
for (var _i = 0; _i < PunctuationOpeners.length; _i++) {
  PunctuationDelimiterSet[PunctuationDelimiters[_i]] = true;
}

var PunctuationClosingDelimiters = '\\\\.,;!?';

var PunctuationQuotePairs = {
  '\xbb': '\xbb',
  '\u2018': '\u201A',
  '\u2019': '\u2019',
  '\u201A': '\u2018\u2019',
  '\u201C': '\u201E',
  '\u201E': '\u201C\u201D',
  '\u201D': '\u201D',
  '\u203A': '\u203A'
};

var PunctuationStartStringPrefix = new RegExp('\\s|[' + PunctuationOpeners + PunctuationDelimiters + ']');

var PunctuationEndStringSuffix = new RegExp('\\s|[' + PunctuationClosingDelimiters + ('' + PunctuationDelimiters + PunctuationClosers + ']'));

var ParserUtil = {
  calcIndentSize: function calcIndentSize(str) {
    var tabStop = 8;
    return _lodash2.default.reduce(str, function (total, c) {
      if (c === '\t') {
        return total + tabStop - (total + tabStop) % tabStop;
      }
      return total + 1;
    }, 0);
  },
  isPunctuationOpener: function isPunctuationOpener(c) {
    return c in PunctuationOpenerToCloser;
  },
  isPunctuationCloser: function isPunctuationCloser(c) {
    return c in PunctuationCloserToOpener;
  },
  isPunctuationDelimiter: function isPunctuationDelimiter(c) {
    return c in PunctuationDelimiterSet;
  },
  isMatchPunctuations: function isMatchPunctuations(c1, c2) {
    return PunctuationOpenerToCloser[c1] === c2 || c1 in PunctuationQuotePairs && PunctuationQuotePairs[c1].indexOf(c2) !== -1;
  },
  isInlineMarkupPrefix: function isInlineMarkupPrefix(c) {
    return PunctuationStartStringPrefix.test(c);
  },
  isInlineMarkupSuffix: function isInlineMarkupSuffix(c) {
    return PunctuationEndStringSuffix.test(c);
  },
  isUpperRomanNumber: function isUpperRomanNumber(s) {
    return (/^M{0,3}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$/.test(s)
    );
  },
  isLowerRomanNumber: function isLowerRomanNumber(s) {
    return (/^m{0,3}(cm|cd|d?c{0,3})(xc|xl|l?x{0,3})(ix|iv|v?i{0,3})$/.test(s)
    );
  },
  romanToNumber: function romanToNumber(s) {
    var values = [['M', 1000], ['CM', 900], ['D', 500], ['CD', 400], ['C', 100], ['XC', 90], ['L', 50], ['XL', 40], ['X', 10], ['IX', 9], ['V', 5], ['IV', 4], ['I', 1]];
    var result = 0;
    var str = s;

    for (var _i2 = 0; _i2 < values.length; _i2++) {
      var _values$_i = _slicedToArray(values[_i2], 2),
          key = _values$_i[0],
          value = _values$_i[1];

      var regex = new RegExp('^' + key);
      while (str.match(regex)) {
        result += value;
        str = str.replace(regex, '');
      }
    }
    return result;
  },
  numberToRoman: function numberToRoman(d) {
    var values = [['M', 1000], ['CM', 900], ['D', 500], ['CD', 400], ['C', 100], ['XC', 90], ['L', 50], ['XL', 40], ['X', 10], ['IX', 9], ['V', 5], ['IV', 4], ['I', 1]];
    var rest = d;
    var result = '';
    for (var _i3 = 0; _i3 < values.length; _i3++) {
      var _values$_i2 = _slicedToArray(values[_i3], 2),
          key = _values$_i2[0],
          value = _values$_i2[1];

      while (rest >= value) {
        result += key;
        rest -= value;
      }
    }
    return result;
  }
};

exports.default = ParserUtil;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _lodash = __webpack_require__(0);

var _lodash2 = _interopRequireDefault(_lodash);

var _unistUtilMap = __webpack_require__(8);

var _unistUtilMap2 = _interopRequireDefault(_unistUtilMap);

var _Parser = __webpack_require__(4);

var _Parser2 = _interopRequireDefault(_Parser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RST = {
  parse: function parse(s) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var tree = _Parser2.default.parse(s);

    return (0, _unistUtilMap2.default)(tree, function (node) {
      var omits = [];
      if (!options.position) {
        omits.push('position');
      }
      if (!options.blanklines) {
        omits.push('blanklines');
      }
      if (!options.indent) {
        omits.push('indent');
      }
      return _lodash2.default.omit(node, omits);
    });
  }
};

exports.default = RST;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _lodash = __webpack_require__(0);

var _lodash2 = _interopRequireDefault(_lodash);

var _Type = __webpack_require__(5);

var _Type2 = _interopRequireDefault(_Type);

var _ParserUtil = __webpack_require__(1);

var _ParserUtil2 = _interopRequireDefault(_ParserUtil);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Elements = {};

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

_lodash2.default.forEach(_Type2.default.valueTypes, function (type, name) {
  Elements[capitalize(name)] = function () {
    function _class(_ref) {
      var value = _ref.value,
          position = _ref.position;

      _classCallCheck(this, _class);

      this.type = type;
      this.value = value;
      this.position = position;
    }

    return _class;
  }();
});

_lodash2.default.forEach(_Type2.default.parentTypes, function (type, name) {
  Elements[capitalize(name)] = function () {
    function _class2(_ref2) {
      var _ref2$children = _ref2.children,
          children = _ref2$children === undefined ? [] : _ref2$children,
          position = _ref2.position,
          _ref2$blanklines = _ref2.blanklines,
          blanklines = _ref2$blanklines === undefined ? [] : _ref2$blanklines,
          _ref2$bullet = _ref2.bullet,
          bullet = _ref2$bullet === undefined ? null : _ref2$bullet,
          _ref2$depth = _ref2.depth,
          depth = _ref2$depth === undefined ? null : _ref2$depth,
          _ref2$role = _ref2.role,
          role = _ref2$role === undefined ? null : _ref2$role,
          _ref2$indent = _ref2.indent,
          indent = _ref2$indent === undefined ? null : _ref2$indent,
          _ref2$directive = _ref2.directive,
          directive = _ref2$directive === undefined ? null : _ref2$directive;

      _classCallCheck(this, _class2);

      this.type = type;

      if (type === 'bullet_list') {
        this.bullet = bullet;
      }
      if (type === 'interpreted_text') {
        this.role = role;
      }
      if (type === 'section') {
        this.depth = depth;
      }
      if (type === 'directive') {
        this.directive = directive;
      }

      this.position = position;
      if (indent) {
        this.indent = indent;
      }
      this.blanklines = blanklines || [];
      this.children = children;
    }

    return _class2;
  }();
});

Elements.EnumeratorSequence = function () {
  function _class3(_ref3) {
    var type = _ref3.type,
        value = _ref3.value;

    _classCallCheck(this, _class3);

    this.type = type;
    this.value = value;
  }

  _createClass(_class3, [{
    key: 'width',
    value: function width() {
      return this.value.length;
    }
  }, {
    key: 'isAuto',
    value: function isAuto() {
      return this.type === 'auto';
    }
  }, {
    key: 'isArabicNumerals',
    value: function isArabicNumerals() {
      return this.type === 'arabic_numerals';
    }
  }, {
    key: 'isUppercaseAlphabet',
    value: function isUppercaseAlphabet() {
      return this.type === 'uppercase_alphabet';
    }
  }, {
    key: 'isLowercaseAlphabet',
    value: function isLowercaseAlphabet() {
      return this.type === 'lowercase_alphabet';
    }
  }, {
    key: 'isUppercaseRoman',
    value: function isUppercaseRoman() {
      return this.type === 'uppercase_roman';
    }
  }, {
    key: 'isLowercaseRoman',
    value: function isLowercaseRoman() {
      return this.type === 'lowercase_roman';
    }
  }]);

  return _class3;
}();

Elements.Enumerator = function () {
  function _class4(_ref4) {
    var sequence = _ref4.sequence,
        format = _ref4.format;

    _classCallCheck(this, _class4);

    this.sequence = sequence;
    this.format = format;
  }

  _createClass(_class4, [{
    key: 'width',
    value: function width() {
      if (this.format === 'parentheses') {
        return this.sequence.width() + 2;
      }
      return this.sequence.width() + 1;
    }
  }, {
    key: 'isPeriodFormat',
    value: function isPeriodFormat() {
      return this.format === 'period';
    }
  }, {
    key: 'isParenthesesFormat',
    value: function isParenthesesFormat() {
      return this.format === 'parentheses';
    }
  }, {
    key: 'isRightParenthesisFormat',
    value: function isRightParenthesisFormat() {
      return this.format === 'right_parenthesis';
    }
  }, {
    key: 'isNext',
    value: function isNext(e) {
      if (this.format !== e.format) {
        return false;
      } else if (e.sequence.isAuto()) {
        return true;
      } else if (this.sequence.type !== e.sequence.type) {
        return false;
      } else if (this.sequence.isArabicNumerals()) {
        return parseInt(this.sequence.value, 10) + 1 === parseInt(e.sequence.value, 10);
      } else if (this.sequence.isUppercaseAlphabet() || this.sequence.isLowercaseAlphabet()) {
        return this.sequence.value.charCodeAt(0) + 1 === e.sequence.value.charCodeAt(0);
      } else if (this.sequence.isUppercaseRoman() || this.sequence.isLowercaseRoman()) {
        return _ParserUtil2.default.romanToNumber(this.sequence.value.toUpperCase()) + 1 === _ParserUtil2.default.romanToNumber(e.sequence.value.toUpperCase());
      }
      return true; // auto
    }
  }, {
    key: 'isFirst',
    value: function isFirst() {
      if (this.sequence.isUppercaseRoman() || this.sequence.isLowercaseRoman()) {
        var value = this.sequence.value;
        return value === 'i' || value === 'I' || value.length === 2;
      }
      return true;
    }
  }]);

  return _class4;
}();

exports.default = Elements;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 * Generated by PEG.js 0.10.0.
 *
 * http://pegjs.org/
 */



function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function peg$subclass(child, parent) {
  function ctor() {
    this.constructor = child;
  }
  ctor.prototype = parent.prototype;
  child.prototype = new ctor();
}

function peg$SyntaxError(message, expected, found, location) {
  this.message = message;
  this.expected = expected;
  this.found = found;
  this.location = location;
  this.name = "SyntaxError";

  if (typeof Error.captureStackTrace === "function") {
    Error.captureStackTrace(this, peg$SyntaxError);
  }
}

peg$subclass(peg$SyntaxError, Error);

peg$SyntaxError.buildMessage = function (expected, found) {
  var DESCRIBE_EXPECTATION_FNS = {
    literal: function literal(expectation) {
      return "\"" + literalEscape(expectation.text) + "\"";
    },

    "class": function _class(expectation) {
      var escapedParts = "",
          i;

      for (i = 0; i < expectation.parts.length; i++) {
        escapedParts += expectation.parts[i] instanceof Array ? classEscape(expectation.parts[i][0]) + "-" + classEscape(expectation.parts[i][1]) : classEscape(expectation.parts[i]);
      }

      return "[" + (expectation.inverted ? "^" : "") + escapedParts + "]";
    },

    any: function any(expectation) {
      return "any character";
    },

    end: function end(expectation) {
      return "end of input";
    },

    other: function other(expectation) {
      return expectation.description;
    }
  };

  function hex(ch) {
    return ch.charCodeAt(0).toString(16).toUpperCase();
  }

  function literalEscape(s) {
    return s.replace(/\\/g, '\\\\').replace(/"/g, '\\"').replace(/\0/g, '\\0').replace(/\t/g, '\\t').replace(/\n/g, '\\n').replace(/\r/g, '\\r').replace(/[\x00-\x0F]/g, function (ch) {
      return '\\x0' + hex(ch);
    }).replace(/[\x10-\x1F\x7F-\x9F]/g, function (ch) {
      return '\\x' + hex(ch);
    });
  }

  function classEscape(s) {
    return s.replace(/\\/g, '\\\\').replace(/\]/g, '\\]').replace(/\^/g, '\\^').replace(/-/g, '\\-').replace(/\0/g, '\\0').replace(/\t/g, '\\t').replace(/\n/g, '\\n').replace(/\r/g, '\\r').replace(/[\x00-\x0F]/g, function (ch) {
      return '\\x0' + hex(ch);
    }).replace(/[\x10-\x1F\x7F-\x9F]/g, function (ch) {
      return '\\x' + hex(ch);
    });
  }

  function describeExpectation(expectation) {
    return DESCRIBE_EXPECTATION_FNS[expectation.type](expectation);
  }

  function describeExpected(expected) {
    var descriptions = new Array(expected.length),
        i,
        j;

    for (i = 0; i < expected.length; i++) {
      descriptions[i] = describeExpectation(expected[i]);
    }

    descriptions.sort();

    if (descriptions.length > 0) {
      for (i = 1, j = 1; i < descriptions.length; i++) {
        if (descriptions[i - 1] !== descriptions[i]) {
          descriptions[j] = descriptions[i];
          j++;
        }
      }
      descriptions.length = j;
    }

    switch (descriptions.length) {
      case 1:
        return descriptions[0];

      case 2:
        return descriptions[0] + " or " + descriptions[1];

      default:
        return descriptions.slice(0, -1).join(", ") + ", or " + descriptions[descriptions.length - 1];
    }
  }

  function describeFound(found) {
    return found ? "\"" + literalEscape(found) + "\"" : "end of input";
  }

  return "Expected " + describeExpected(expected) + " but " + describeFound(found) + " found.";
};

function peg$parse(input, options) {
  options = options !== void 0 ? options : {};

  var peg$FAILED = {},
      peg$startRuleFunctions = { Document: peg$parseDocument },
      peg$startRuleFunction = peg$parseDocument,
      peg$c0 = /^[A-Za-z0-9]/,
      peg$c1 = peg$classExpectation([["A", "Z"], ["a", "z"], ["0", "9"]], false, false),
      peg$c2 = peg$anyExpectation(),
      peg$c3 = "\n",
      peg$c4 = peg$literalExpectation("\n", false),
      peg$c5 = "\r",
      peg$c6 = peg$literalExpectation("\r", false),
      peg$c7 = function peg$c7(last) {
    return last[0] + (last[1] || '');
  },
      peg$c8 = " ",
      peg$c9 = peg$literalExpectation(" ", false),
      peg$c10 = "\x0B",
      peg$c11 = peg$literalExpectation("\x0B", false),
      peg$c12 = "\f",
      peg$c13 = peg$literalExpectation("\f", false),
      peg$c14 = "\t",
      peg$c15 = peg$literalExpectation("\t", false),
      peg$c16 = function peg$c16(c) {
    return c[1];
  },
      peg$c17 = function peg$c17(lines, last) {
    var ret = _.map(lines, function (line) {
      return line[0].join('') + (line[1] || '');
    });
    return ret.concat(last[0].join('') + (last[1] || ''));
  },
      peg$c18 = function peg$c18(raw) {
    return { raw: _.map(raw, function (v) {
        return v[1];
      }).join('') };
  },
      peg$c19 = function peg$c19(line) {
    return new Elements.UnknownLine({ value: line.raw });
  },
      peg$c20 = function peg$c20(i) {
    return ParserUtil.calcIndentSize(i) < currentIndentSize;
  },
      peg$c21 = function peg$c21(i) {
    var ignore = indentIgnoreLine === location().start.line;
    return ignore || ParserUtil.calcIndentSize(i) === currentIndentSize;
  },
      peg$c22 = function peg$c22(i) {
    return i.join('');
  },
      peg$c23 = function peg$c23(i) {
    return ParserUtil.calcIndentSize(i) > currentIndentSize;
  },
      peg$c24 = function peg$c24(i) {
    return i.join('');
  },
      peg$c25 = function peg$c25(i) {
    return ParserUtil.calcIndentSize(i) < currentIndentSize;
  },
      peg$c26 = function peg$c26(i) {
    return ParserUtil.calcIndentSize(i) >= currentIndentSize;
  },
      peg$c27 = function peg$c27() {
    return false;
  },
      peg$c28 = function peg$c28() {
    indentState.pop();return true;
  },
      peg$c29 = function peg$c29(w1) {
    nextIndentSize = ParserUtil.calcIndentSize(w1);
    return true;
  },
      peg$c30 = function peg$c30(w1, w2) {
    nextIndentSize = Math.min(nextIndentSize, ParserUtil.calcIndentSize(w2));
    return true;
  },
      peg$c31 = function peg$c31(w1) {
    indentState.push(nextIndentSize);return true;
  },
      peg$c32 = function peg$c32() {
    return { width: currentIndentSize, offset: indentState.lastIndentDiff() };
  },
      peg$c33 = function peg$c33(i, c) {
    indentState.push(ParserUtil.calcIndentSize(i));
    return true;
  },
      peg$c34 = function peg$c34() {
    indentState.ignore(location().start.line);return true;
  },
      peg$c35 = function peg$c35(children, blanklines) {
    return new Elements.Document({ children: children });
  },
      peg$c36 = function peg$c36(blanklines, title, children) {
    var depth = sectionState.depth();
    sectionState.popSection();

    return new Elements.Section({
      blanklines: blanklines,
      depth: depth,
      children: [title].concat(mapByIndex(children, 1))
    });
  },
      peg$c37 = function peg$c37(overline, underline) {
    if (overline.line[0] !== underline.line[0]) {
      return false;
    }
    return sectionState.isSubSection(underline.line[0], true);
  },
      peg$c38 = function peg$c38(line, underline) {
    return sectionState.isSubSection(underline.line[0], false);
  },
      peg$c39 = function peg$c39(overline, children, underline) {
    sectionState.setNextSection(underline.line[0], true);
    return new Elements.Title({ children: children });
  },
      peg$c40 = function peg$c40(children, underline) {
    sectionState.setNextSection(underline.line[0], false);
    return new Elements.Title({ children: children });
  },
      peg$c41 = "!",
      peg$c42 = peg$literalExpectation("!", false),
      peg$c43 = "\"",
      peg$c44 = peg$literalExpectation("\"", false),
      peg$c45 = "#",
      peg$c46 = peg$literalExpectation("#", false),
      peg$c47 = "$",
      peg$c48 = peg$literalExpectation("$", false),
      peg$c49 = "%",
      peg$c50 = peg$literalExpectation("%", false),
      peg$c51 = "&",
      peg$c52 = peg$literalExpectation("&", false),
      peg$c53 = "'",
      peg$c54 = peg$literalExpectation("'", false),
      peg$c55 = "(",
      peg$c56 = peg$literalExpectation("(", false),
      peg$c57 = ")",
      peg$c58 = peg$literalExpectation(")", false),
      peg$c59 = "*",
      peg$c60 = peg$literalExpectation("*", false),
      peg$c61 = "+",
      peg$c62 = peg$literalExpectation("+", false),
      peg$c63 = ",",
      peg$c64 = peg$literalExpectation(",", false),
      peg$c65 = "-",
      peg$c66 = peg$literalExpectation("-", false),
      peg$c67 = ".",
      peg$c68 = peg$literalExpectation(".", false),
      peg$c69 = "/",
      peg$c70 = peg$literalExpectation("/", false),
      peg$c71 = ":",
      peg$c72 = peg$literalExpectation(":", false),
      peg$c73 = ";",
      peg$c74 = peg$literalExpectation(";", false),
      peg$c75 = "<",
      peg$c76 = peg$literalExpectation("<", false),
      peg$c77 = "=",
      peg$c78 = peg$literalExpectation("=", false),
      peg$c79 = ">",
      peg$c80 = peg$literalExpectation(">", false),
      peg$c81 = "?",
      peg$c82 = peg$literalExpectation("?", false),
      peg$c83 = "@",
      peg$c84 = peg$literalExpectation("@", false),
      peg$c85 = "[",
      peg$c86 = peg$literalExpectation("[", false),
      peg$c87 = "\\",
      peg$c88 = peg$literalExpectation("\\", false),
      peg$c89 = "]",
      peg$c90 = peg$literalExpectation("]", false),
      peg$c91 = "^",
      peg$c92 = peg$literalExpectation("^", false),
      peg$c93 = "_",
      peg$c94 = peg$literalExpectation("_", false),
      peg$c95 = "`",
      peg$c96 = peg$literalExpectation("`", false),
      peg$c97 = "{",
      peg$c98 = peg$literalExpectation("{", false),
      peg$c99 = "|",
      peg$c100 = peg$literalExpectation("|", false),
      peg$c101 = "}",
      peg$c102 = peg$literalExpectation("}", false),
      peg$c103 = "~",
      peg$c104 = peg$literalExpectation("~", false),
      peg$c105 = function peg$c105(line) {
    return line.length >= 2 && _.uniq(line).length === 1;
  },
      peg$c106 = function peg$c106(line) {
    return { line: line.join('') };
  },
      peg$c107 = function peg$c107(blanklines, marker) {
    return new Elements.Transition({ blanklines: blanklines, children: [] });
  },
      peg$c108 = function peg$c108(line) {
    return line.length >= 4 && _.uniq(line).length === 1;
  },
      peg$c109 = function peg$c109(line) {
    return line;
  },
      peg$c110 = function peg$c110(blanklines, element) {
    element.blanklines = blanklines || [];
    return element;
  },
      peg$c111 = function peg$c111(element) {
    return element;
  },
      peg$c112 = function peg$c112(item) {
    return item;
  },
      peg$c113 = function peg$c113(i) {
    indentState.push(location().start.column - 1);return true;
  },
      peg$c114 = function peg$c114() {
    return { width: currentIndentSize, offset: indentState.lastIndentDiff() };
  },
      peg$c115 = function peg$c115(indent, children) {
    return new Elements.ListItem({ children: children });
  },
      peg$c116 = function peg$c116() {
    return new Elements.ListItem({ children: [] });
  },
      peg$c117 = function peg$c117(items) {
    return new Elements.BulletList({ bullet: items[0][0], children: mapByIndex(items, 1) });
  },
      peg$c118 = /^[*+\-\u2022\u2023\u2043]/,
      peg$c119 = peg$classExpectation(["*", "+", "-", "\u2022", "\u2023", "\u2043"], false, false),
      peg$c120 = function peg$c120(b) {
    return bulletListState.isSameBullet(b);
  },
      peg$c121 = function peg$c121(b) {
    return b;
  },
      peg$c122 = function peg$c122(b) {
    bulletListState.pushBullet(b);return true;
  },
      peg$c123 = function peg$c123() {
    bulletListState.popBullet();return true;
  },
      peg$c124 = function peg$c124(blanklines, b, item) {
    item.blanklines = blanklines || [];
    return [b, item];
  },
      peg$c125 = function peg$c125(children) {
    return new Elements.EnumeratedList({ children: children });
  },
      peg$c126 = function peg$c126() {
    enumeratedListState.begin();return true;
  },
      peg$c127 = function peg$c127() {
    enumeratedListState.end();return true;
  },
      peg$c128 = function peg$c128(blanklines, e, item) {
    item.blanklines = blanklines || [];
    return item;
  },
      peg$c129 = function peg$c129(s) {
    return new Elements.Enumerator({ sequence: s, format: 'period' });
  },
      peg$c130 = function peg$c130(s) {
    return new Elements.Enumerator({ sequence: s, format: 'right_parenthesis' });
  },
      peg$c131 = function peg$c131(s) {
    return new Elements.Enumerator({ sequence: s, format: 'parentheses' });
  },
      peg$c132 = function peg$c132(e) {
    if (!enumeratedListState.isNext(e)) {
      return false;
    }
    enumeratedListState.set(e);
    return true;
  },
      peg$c133 = function peg$c133(e) {
    return e;
  },
      peg$c134 = function peg$c134() {
    return enumeratedListState.isNextType('arabic_numerals');
  },
      peg$c135 = function peg$c135() {
    return enumeratedListState.isNextType('uppercase_roman');
  },
      peg$c136 = function peg$c136() {
    return enumeratedListState.isNextType('lowercase_roman');
  },
      peg$c137 = function peg$c137() {
    return enumeratedListState.isNextType('uppercase_alphabet');
  },
      peg$c138 = function peg$c138() {
    return enumeratedListState.isNextType('lowercase_alphabet');
  },
      peg$c139 = function peg$c139() {
    return new Elements.EnumeratorSequence({ type: 'auto', value: '#' });
  },
      peg$c140 = /^[1-9]/,
      peg$c141 = peg$classExpectation([["1", "9"]], false, false),
      peg$c142 = /^[0-9]/,
      peg$c143 = peg$classExpectation([["0", "9"]], false, false),
      peg$c144 = function peg$c144(head, tail) {
    return new Elements.EnumeratorSequence({ type: 'arabic_numerals', value: [head].concat(tail).join('') });
  },
      peg$c145 = /^[0]/,
      peg$c146 = peg$classExpectation(["0"], false, false),
      peg$c147 = function peg$c147(head) {
    return new Elements.EnumeratorSequence({ type: 'arabic_numerals', value: head });
  },
      peg$c148 = /^[A-Z]/,
      peg$c149 = peg$classExpectation([["A", "Z"]], false, false),
      peg$c150 = function peg$c150(s) {
    return new Elements.EnumeratorSequence({ type: 'uppercase_alphabet', value: s });
  },
      peg$c151 = /^[a-z]/,
      peg$c152 = peg$classExpectation([["a", "z"]], false, false),
      peg$c153 = function peg$c153(s) {
    return new Elements.EnumeratorSequence({ type: 'lowercase_alphabet', value: s });
  },
      peg$c154 = /^[IVXLCDM]/,
      peg$c155 = peg$classExpectation(["I", "V", "X", "L", "C", "D", "M"], false, false),
      peg$c156 = function peg$c156(s) {
    return ParserUtil.isUpperRomanNumber(s.join(''));
  },
      peg$c157 = function peg$c157(s) {
    return new Elements.EnumeratorSequence({ type: 'uppercase_roman', value: s.join('') });
  },
      peg$c158 = /^[ivxlcdm]/,
      peg$c159 = peg$classExpectation(["i", "v", "x", "l", "c", "d", "m"], false, false),
      peg$c160 = function peg$c160(s) {
    return ParserUtil.isLowerRomanNumber(s.join(''));
  },
      peg$c161 = function peg$c161(s) {
    return new Elements.EnumeratorSequence({ type: 'lowercase_roman', value: s.join('') });
  },
      peg$c162 = function peg$c162(children) {
    return new Elements.DefinitionList({ children: children });
  },
      peg$c163 = function peg$c163(blanklines, term, classifiers, indent, body) {
    var classifiers = mapByIndex(classifiers, 3);
    return new Elements.DefinitionListItem({
      blanklines: blanklines,
      indent: indent,
      children: [term].concat(_toConsumableArray(classifiers), [body])
    });
  },
      peg$c164 = function peg$c164(children) {
    return new Elements.Term({ children: children });
  },
      peg$c165 = function peg$c165(children) {
    return new Elements.Definition({ children: children });
  },
      peg$c166 = function peg$c166(text) {
    return new Elements.Text({ value: mapByIndex(text, 3).join('') });
  },
      peg$c167 = function peg$c167(children) {
    return new Elements.Classifier({ children: children });
  },
      peg$c168 = function peg$c168(blanklines, indent, inner, outer) {
    var innerIndent = { width: indent.width, offset: indent.width - outer.indent.width };
    inner.indent = innerIndent;

    var children = [inner].concat(outer.children);
    var indent = outer.indent;
    return new Elements.BlockQuote({ indent: indent, blanklines: blanklines, children: children });
  },
      peg$c169 = function peg$c169(nested, attribution) {
    return new Elements.BlockQuote({ children: nested.concat(attribution || []) });
  },
      peg$c170 = function peg$c170(blanklines, indent, children, attribution) {
    return new Elements.BlockQuote({
      indent: indent,
      blanklines: blanklines,
      children: children.concat(attribution || [])
    });
  },
      peg$c171 = function peg$c171(head, tail) {
    return [head].concat(_.map(tail, function (v) {
      return v[1];
    }));
  },
      peg$c172 = "---",
      peg$c173 = peg$literalExpectation("---", false),
      peg$c174 = "--",
      peg$c175 = peg$literalExpectation("--", false),
      peg$c176 = "\u2014",
      peg$c177 = peg$literalExpectation("\u2014", false),
      peg$c178 = function peg$c178(blanklines, body) {
    return new Elements.Attribution({ blanklines: blanklines, children: body.children });
  },
      peg$c179 = function peg$c179(body) {
    return body;
  },
      peg$c180 = function peg$c180(body) {
    return body;
  },
      peg$c181 = "..",
      peg$c182 = peg$literalExpectation("..", false),
      peg$c183 = function peg$c183(head, tail) {
    var children = [new Elements.Text({ value: head.raw })];
    var indent = null;
    if (!_.isNull(tail)) {
      indent = tail[1].indent;
      children = children.concat(tail[1].children);
    }
    return new Elements.Comment({ indent: indent, children: children });
  },
      peg$c184 = function peg$c184(comment) {
    if (!_.isNull(comment)) {
      return comment;
    }
    return new Elements.Comment({});
  },
      peg$c185 = function peg$c185(indent) {
    return null;
  },
      peg$c186 = function peg$c186(indent, comments) {
    var children = _.map(_.reject(comments, _.isNull), function (v) {
      var ws = v[0],
          raw = v[1].raw;
      var text = _.repeat(' ', ws.length - indent.width) + raw;
      return new Elements.Text({ value: text });
    });
    return new Elements.Comment({ indent: indent, children: children });
  },
      peg$c187 = function peg$c187(c) {
    return ParserUtil.isInlineMarkupSuffix(c);
  },
      peg$c188 = function peg$c188() {
    return markupEndString.length === 1;
  },
      peg$c189 = function peg$c189(s) {
    return s === markupEndString;
  },
      peg$c190 = function peg$c190() {
    return markupEndString.length === 2;
  },
      peg$c191 = function peg$c191(s) {
    return s.join('') === markupEndString;
  },
      peg$c192 = function peg$c192() {
    return markupEndString.length === 3;
  },
      peg$c193 = function peg$c193() {
    return markupEndString === '``';
  },
      peg$c194 = function peg$c194(text) {
    return new Text({ value: mapByIndex(text, 2).join('') });
  },
      peg$c195 = function peg$c195(text, last) {
    if (!_.isNull(last)) {
      text = new Text({ value: text.value + last });
    }
    return text;
  },
      peg$c196 = function peg$c196(text, last) {
    return [new Text({ value: text.value + last })];
  },
      peg$c197 = function peg$c197(first, middle, last) {
    var children = (_.isNull(first) ? [] : [first]).concat(mapByIndex(middle, 1));
    if (children.length === 0) {
      children.push(new Text({ value: '' }));
    }
    var lastText = children[children.length - 1];
    children[children.length - 1] = new Text({ value: lastText.value + last });
    return children;
  },
      peg$c198 = function peg$c198() {
    markupEndString = '*';return true;
  },
      peg$c199 = function peg$c199(children) {
    return new Elements.Emphasis({ children: children });
  },
      peg$c200 = "**",
      peg$c201 = peg$literalExpectation("**", false),
      peg$c202 = function peg$c202() {
    markupEndString = '**';return true;
  },
      peg$c203 = function peg$c203(children) {
    return new Elements.Strong({ children: children });
  },
      peg$c204 = function peg$c204(role) {
    markupEndString = '`';return true;
  },
      peg$c205 = function peg$c205(role, children) {
    var roleStr = null;
    if (!_.isNull(role)) {
      roleStr = _.map(role[1], function (v) {
        return v[3];
      }).join('');
    }
    return new Elements.InterpretedText({ role: roleStr, children: children });
  },
      peg$c206 = "``",
      peg$c207 = peg$literalExpectation("``", false),
      peg$c208 = function peg$c208() {
    markupEndString = '``';return true;
  },
      peg$c209 = function peg$c209(children) {
    return new Elements.Literal({ children: children });
  },
      peg$c210 = function peg$c210() {
    markupEndString = '|';return true;
  },
      peg$c211 = function peg$c211(children) {
    return new Elements.SubstitutionReference({ children: children });
  },
      peg$c212 = "_`",
      peg$c213 = peg$literalExpectation("_`", false),
      peg$c214 = function peg$c214() {
    markupEndString = '`';return true;
  },
      peg$c215 = function peg$c215(children) {
    return new Elements.InlineInternalTarget({ children: children });
  },
      peg$c216 = function peg$c216(label) {
    if (_.isArray(label)) {
      return label.join('');
    }
    return label;
  },
      peg$c217 = "]_",
      peg$c218 = peg$literalExpectation("]_", false),
      peg$c219 = function peg$c219(label) {
    return new Elements.FootnoteReference({ children: [new Text({ value: label })] });
  },
      peg$c220 = function peg$c220(label) {
    return new Elements.CitationReference({ children: [new Text({ value: label })] });
  },
      peg$c221 = function peg$c221() {
    markupEndString = '`_';return true;
  },
      peg$c222 = function peg$c222(children) {
    return new Elements.Reference({ anonymous: false, simple: false, children: children });
  },
      peg$c223 = function peg$c223(ref) {
    return new Elements.Reference({ anonymous: false, simple: true, children: [new Text({ value: ref })] });
  },
      peg$c224 = function peg$c224() {
    markupEndString = '`__';return true;
  },
      peg$c225 = function peg$c225(children) {
    return new Elements.Reference({ anonymous: true, simple: false, children: children });
    return { children: children };
  },
      peg$c226 = "__",
      peg$c227 = peg$literalExpectation("__", false),
      peg$c228 = function peg$c228(ref) {
    return new Elements.Reference({ anonymous: true, simple: true, children: [new Text({ value: ref })] });
  },
      peg$c229 = /^[\-_.:+]/,
      peg$c230 = peg$classExpectation(["-", "_", ".", ":", "+"], false, false),
      peg$c231 = function peg$c231(head, tail) {
    return head + tail.join('');
  },
      peg$c232 = /^[\-.:+]/,
      peg$c233 = peg$classExpectation(["-", ".", ":", "+"], false, false),
      peg$c234 = function peg$c234(block) {
    return block;
  },
      peg$c235 = "::",
      peg$c236 = peg$literalExpectation("::", false),
      peg$c237 = function peg$c237(indent, lines) {
    var children = _.map(lines, function (line) {
      if (!_.isUndefined(line[0])) {
        var indentSize = ParserUtil.calcIndentSize(line[0].join(''));
        var text = _.repeat(' ', Math.max(0, indentSize - indent.width));
      } else {
        var indentSize = ParserUtil.calcIndentSize(line[1].join(''));
        var text = _.repeat(' ', indentSize - indent.width) + line[2].raw;
      }
      return new Elements.Text({ value: text });
    });
    return new Elements.LiteralBlock({ children: children });
  },
      peg$c238 = function peg$c238(lines) {
    var children = _.map(lines, function (line) {
      return new Elements.Text({ value: line[2].raw });
    });
    return new Elements.LiteralBlock({ children: children });
  },
      peg$c239 = function peg$c239(q) {
    literalBlockQuoting = q;return true;
  },
      peg$c240 = function peg$c240(q) {
    return literalBlockQuoting === q;
  },
      peg$c241 = function peg$c241(indent, head, tail, outer) {
    var first = new Elements.LineBlock({ children: [head].concat(tail) });
    var children = [first].concat(outer.children);
    return new Elements.LineBlock({ children: children });
  },
      peg$c242 = function peg$c242(indent, block) {
    return block;
  },
      peg$c243 = function peg$c243(head, tail) {
    return new Elements.LineBlock({ children: [head].concat(_toConsumableArray(tail)) });
  },
      peg$c244 = "| ",
      peg$c245 = peg$literalExpectation("| ", false),
      peg$c246 = function peg$c246(children) {
    return new Elements.Line({ children: children });
  },
      peg$c247 = function peg$c247() {
    return new Elements.Line({ children: [] });
  },
      peg$c248 = function peg$c248(i) {
    return ParserUtil.calcIndentSize(i) === lineBlockState.current();
  },
      peg$c249 = function peg$c249(i) {
    return ParserUtil.calcIndentSize(i) > lineBlockState.current();
  },
      peg$c250 = function peg$c250(i) {
    lineBlockState.push(ParserUtil.calcIndentSize(i));
    return true;
  },
      peg$c251 = function peg$c251() {
    return { width: lineBlockState.current(), offset: lineBlockState.diff() };
  },
      peg$c252 = function peg$c252() {
    lineBlockState.pop();return true;
  },
      peg$c253 = function peg$c253(c) {
    return ParserUtil.isInlineMarkupPrefix(c);
  },
      peg$c254 = function peg$c254(c) {
    return c;
  },
      peg$c255 = function peg$c255(p, s, f) {
    return !(p === '*' && s === '*') && !ParserUtil.isMatchPunctuations(p, f);
  },
      peg$c256 = function peg$c256(children) {
    return new Elements.Paragraph({ children: _.flatten(mapByIndex(children, 1)) });
  },
      peg$c257 = function peg$c257(children, last) {
    var texts = mapByIndex(children, 1);
    if (last) {
      if (texts[texts.length - 1].type !== 'text') {
        return texts.concat(new Text({ value: last }));
      }
      texts[texts.length - 1] = new Text({ value: texts[texts.length - 1].value + last });
    }
    return texts;
  },
      peg$c258 = function peg$c258(text, last) {
    return new Text({ value: mapByIndex(text, 2).join('') + last });
  },
      peg$c259 = function peg$c259(text, last) {
    var s = mapByIndex(text, 2).join('');
    if (!_.isNull(last)) {
      s += last[1];
    }
    return new Text({ value: s });
  },
      peg$c260 = function peg$c260(text, last) {
    var s = mapByIndex(text, 2).join('') + last[1];
    return new Text({ value: s });
  },
      peg$c261 = /^[A-Za-z]/,
      peg$c262 = peg$classExpectation([["A", "Z"], ["a", "z"]], false, false),
      peg$c263 = /^[\-_+:.]/,
      peg$c264 = peg$classExpectation(["-", "_", "+", ":", "."], false, false),
      peg$c265 = function peg$c265(first, last) {
    return _.flatMap(first, function (v) {
      return _.compact(v);
    }).concat(last).join('');
  },
      peg$c266 = function peg$c266(directive, head, tail) {
    var children = [new Elements.Text({ value: head.raw })];
    var indent = null;
    if (!_.isNull(tail)) {
      indent = tail[1].indent;
      children = children.concat(tail[1].children);
    }
    return new Elements.Directive({ directive: directive, indent: indent, children: children });
  },
      peg$c267 = function peg$c267(directive, block) {
    if (!_.isNull(block)) {
      return new Elements.Directive({
        directive: directive,
        indent: block.indent,
        children: block.children
      });
    }
    return new Elements.Directive({ directive: directive });
  },
      peg$c268 = function peg$c268(indent, blocks) {
    var children = _.map(_.reject(blocks, _.isNull), function (v) {
      var ws = v[0],
          raw = v[1].raw;
      var text = _.repeat(' ', ws.length - indent.width) + raw;
      return new Elements.Text({ value: text });
    });
    return new Elements.Directive({ indent: indent, children: children });
  },
      peg$c269 = function peg$c269(blanklines, children) {
    return new Elements.Unknown({ blanklines: blanklines, children: _.flatten(mapByIndex(children, 1)) });
  },
      peg$currPos = 0,
      peg$savedPos = 0,
      peg$posDetailsCache = [{ line: 1, column: 1 }],
      peg$maxFailPos = 0,
      peg$maxFailExpected = [],
      peg$silentFails = 0,
      peg$result;

  if ("startRule" in options) {
    if (!(options.startRule in peg$startRuleFunctions)) {
      throw new Error("Can't start parsing from rule \"" + options.startRule + "\".");
    }

    peg$startRuleFunction = peg$startRuleFunctions[options.startRule];
  }

  function text() {
    return input.substring(peg$savedPos, peg$currPos);
  }

  function location() {
    return peg$computeLocation(peg$savedPos, peg$currPos);
  }

  function expected(description, location) {
    location = location !== void 0 ? location : peg$computeLocation(peg$savedPos, peg$currPos);

    throw peg$buildStructuredError([peg$otherExpectation(description)], input.substring(peg$savedPos, peg$currPos), location);
  }

  function error(message, location) {
    location = location !== void 0 ? location : peg$computeLocation(peg$savedPos, peg$currPos);

    throw peg$buildSimpleError(message, location);
  }

  function peg$literalExpectation(text, ignoreCase) {
    return { type: "literal", text: text, ignoreCase: ignoreCase };
  }

  function peg$classExpectation(parts, inverted, ignoreCase) {
    return { type: "class", parts: parts, inverted: inverted, ignoreCase: ignoreCase };
  }

  function peg$anyExpectation() {
    return { type: "any" };
  }

  function peg$endExpectation() {
    return { type: "end" };
  }

  function peg$otherExpectation(description) {
    return { type: "other", description: description };
  }

  function peg$computePosDetails(pos) {
    var details = peg$posDetailsCache[pos],
        p;

    if (details) {
      return details;
    } else {
      p = pos - 1;
      while (!peg$posDetailsCache[p]) {
        p--;
      }

      details = peg$posDetailsCache[p];
      details = {
        line: details.line,
        column: details.column
      };

      while (p < pos) {
        if (input.charCodeAt(p) === 10) {
          details.line++;
          details.column = 1;
        } else {
          details.column++;
        }

        p++;
      }

      peg$posDetailsCache[pos] = details;
      return details;
    }
  }

  function peg$computeLocation(startPos, endPos) {
    var startPosDetails = peg$computePosDetails(startPos),
        endPosDetails = peg$computePosDetails(endPos);

    return {
      start: {
        offset: startPos,
        line: startPosDetails.line,
        column: startPosDetails.column
      },
      end: {
        offset: endPos,
        line: endPosDetails.line,
        column: endPosDetails.column
      }
    };
  }

  function peg$fail(expected) {
    if (peg$currPos < peg$maxFailPos) {
      return;
    }

    if (peg$currPos > peg$maxFailPos) {
      peg$maxFailPos = peg$currPos;
      peg$maxFailExpected = [];
    }

    peg$maxFailExpected.push(expected);
  }

  function peg$buildSimpleError(message, location) {
    return new peg$SyntaxError(message, null, null, location);
  }

  function peg$buildStructuredError(expected, found, location) {
    return new peg$SyntaxError(peg$SyntaxError.buildMessage(expected, found), expected, found, location);
  }

  function peg$parseAlphanumericAscii() {
    var s0;

    if (peg$c0.test(input.charAt(peg$currPos))) {
      s0 = input.charAt(peg$currPos);
      peg$currPos++;
    } else {
      s0 = peg$FAILED;
      if (peg$silentFails === 0) {
        peg$fail(peg$c1);
      }
    }

    return s0;
  }

  function peg$parseEof() {
    var s0, s1;

    s0 = peg$currPos;
    peg$silentFails++;
    if (input.length > peg$currPos) {
      s1 = input.charAt(peg$currPos);
      peg$currPos++;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) {
        peg$fail(peg$c2);
      }
    }
    peg$silentFails--;
    if (s1 === peg$FAILED) {
      s0 = void 0;
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseNewline() {
    var s0, s1, s2, s3;

    if (input.charCodeAt(peg$currPos) === 10) {
      s0 = peg$c3;
      peg$currPos++;
    } else {
      s0 = peg$FAILED;
      if (peg$silentFails === 0) {
        peg$fail(peg$c4);
      }
    }
    if (s0 === peg$FAILED) {
      s0 = peg$currPos;
      s1 = peg$currPos;
      if (input.charCodeAt(peg$currPos) === 13) {
        s2 = peg$c5;
        peg$currPos++;
      } else {
        s2 = peg$FAILED;
        if (peg$silentFails === 0) {
          peg$fail(peg$c6);
        }
      }
      if (s2 !== peg$FAILED) {
        if (input.charCodeAt(peg$currPos) === 10) {
          s3 = peg$c3;
          peg$currPos++;
        } else {
          s3 = peg$FAILED;
          if (peg$silentFails === 0) {
            peg$fail(peg$c4);
          }
        }
        if (s3 === peg$FAILED) {
          s3 = null;
        }
        if (s3 !== peg$FAILED) {
          s2 = [s2, s3];
          s1 = s2;
        } else {
          peg$currPos = s1;
          s1 = peg$FAILED;
        }
      } else {
        peg$currPos = s1;
        s1 = peg$FAILED;
      }
      if (s1 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c7(s1);
      }
      s0 = s1;
    }

    return s0;
  }

  function peg$parseWhitespace() {
    var s0;

    if (input.charCodeAt(peg$currPos) === 32) {
      s0 = peg$c8;
      peg$currPos++;
    } else {
      s0 = peg$FAILED;
      if (peg$silentFails === 0) {
        peg$fail(peg$c9);
      }
    }
    if (s0 === peg$FAILED) {
      if (input.charCodeAt(peg$currPos) === 11) {
        s0 = peg$c10;
        peg$currPos++;
      } else {
        s0 = peg$FAILED;
        if (peg$silentFails === 0) {
          peg$fail(peg$c11);
        }
      }
      if (s0 === peg$FAILED) {
        if (input.charCodeAt(peg$currPos) === 12) {
          s0 = peg$c12;
          peg$currPos++;
        } else {
          s0 = peg$FAILED;
          if (peg$silentFails === 0) {
            peg$fail(peg$c13);
          }
        }
        if (s0 === peg$FAILED) {
          if (input.charCodeAt(peg$currPos) === 9) {
            s0 = peg$c14;
            peg$currPos++;
          } else {
            s0 = peg$FAILED;
            if (peg$silentFails === 0) {
              peg$fail(peg$c15);
            }
          }
        }
      }
    }

    return s0;
  }

  function peg$parseEndline() {
    var s0;

    s0 = peg$parseNewline();
    if (s0 === peg$FAILED) {
      s0 = peg$parseEof();
    }

    return s0;
  }

  function peg$parseNormalizedToWhitespace() {
    var s0;

    s0 = peg$parseWhitespace();
    if (s0 === peg$FAILED) {
      s0 = peg$parseNewline();
    }

    return s0;
  }

  function peg$parseNonspacechar() {
    var s0, s1, s2, s3;

    s0 = peg$currPos;
    s1 = peg$currPos;
    s2 = peg$currPos;
    peg$silentFails++;
    s3 = peg$parseNormalizedToWhitespace();
    peg$silentFails--;
    if (s3 === peg$FAILED) {
      s2 = void 0;
    } else {
      peg$currPos = s2;
      s2 = peg$FAILED;
    }
    if (s2 !== peg$FAILED) {
      if (input.length > peg$currPos) {
        s3 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s3 = peg$FAILED;
        if (peg$silentFails === 0) {
          peg$fail(peg$c2);
        }
      }
      if (s3 !== peg$FAILED) {
        s2 = [s2, s3];
        s1 = s2;
      } else {
        peg$currPos = s1;
        s1 = peg$FAILED;
      }
    } else {
      peg$currPos = s1;
      s1 = peg$FAILED;
    }
    if (s1 !== peg$FAILED) {
      peg$savedPos = s0;
      s1 = peg$c16(s1);
    }
    s0 = s1;

    return s0;
  }

  function peg$parseBlankLines() {
    var s0, s1, s2, s3, s4, s5, s6, s7, s8;

    s0 = peg$currPos;
    s1 = [];
    s2 = peg$currPos;
    s3 = [];
    s4 = peg$parseWhitespace();
    while (s4 !== peg$FAILED) {
      s3.push(s4);
      s4 = peg$parseWhitespace();
    }
    if (s3 !== peg$FAILED) {
      s4 = peg$parseNewline();
      if (s4 !== peg$FAILED) {
        s5 = peg$currPos;
        peg$silentFails++;
        s6 = peg$currPos;
        s7 = [];
        s8 = peg$parseWhitespace();
        while (s8 !== peg$FAILED) {
          s7.push(s8);
          s8 = peg$parseWhitespace();
        }
        if (s7 !== peg$FAILED) {
          s8 = peg$parseEndline();
          if (s8 !== peg$FAILED) {
            s7 = [s7, s8];
            s6 = s7;
          } else {
            peg$currPos = s6;
            s6 = peg$FAILED;
          }
        } else {
          peg$currPos = s6;
          s6 = peg$FAILED;
        }
        peg$silentFails--;
        if (s6 !== peg$FAILED) {
          peg$currPos = s5;
          s5 = void 0;
        } else {
          s5 = peg$FAILED;
        }
        if (s5 !== peg$FAILED) {
          s3 = [s3, s4, s5];
          s2 = s3;
        } else {
          peg$currPos = s2;
          s2 = peg$FAILED;
        }
      } else {
        peg$currPos = s2;
        s2 = peg$FAILED;
      }
    } else {
      peg$currPos = s2;
      s2 = peg$FAILED;
    }
    while (s2 !== peg$FAILED) {
      s1.push(s2);
      s2 = peg$currPos;
      s3 = [];
      s4 = peg$parseWhitespace();
      while (s4 !== peg$FAILED) {
        s3.push(s4);
        s4 = peg$parseWhitespace();
      }
      if (s3 !== peg$FAILED) {
        s4 = peg$parseNewline();
        if (s4 !== peg$FAILED) {
          s5 = peg$currPos;
          peg$silentFails++;
          s6 = peg$currPos;
          s7 = [];
          s8 = peg$parseWhitespace();
          while (s8 !== peg$FAILED) {
            s7.push(s8);
            s8 = peg$parseWhitespace();
          }
          if (s7 !== peg$FAILED) {
            s8 = peg$parseEndline();
            if (s8 !== peg$FAILED) {
              s7 = [s7, s8];
              s6 = s7;
            } else {
              peg$currPos = s6;
              s6 = peg$FAILED;
            }
          } else {
            peg$currPos = s6;
            s6 = peg$FAILED;
          }
          peg$silentFails--;
          if (s6 !== peg$FAILED) {
            peg$currPos = s5;
            s5 = void 0;
          } else {
            s5 = peg$FAILED;
          }
          if (s5 !== peg$FAILED) {
            s3 = [s3, s4, s5];
            s2 = s3;
          } else {
            peg$currPos = s2;
            s2 = peg$FAILED;
          }
        } else {
          peg$currPos = s2;
          s2 = peg$FAILED;
        }
      } else {
        peg$currPos = s2;
        s2 = peg$FAILED;
      }
    }
    if (s1 !== peg$FAILED) {
      s2 = peg$currPos;
      s3 = [];
      s4 = peg$parseWhitespace();
      while (s4 !== peg$FAILED) {
        s3.push(s4);
        s4 = peg$parseWhitespace();
      }
      if (s3 !== peg$FAILED) {
        s4 = peg$parseEndline();
        if (s4 !== peg$FAILED) {
          s3 = [s3, s4];
          s2 = s3;
        } else {
          peg$currPos = s2;
          s2 = peg$FAILED;
        }
      } else {
        peg$currPos = s2;
        s2 = peg$FAILED;
      }
      if (s2 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c17(s1, s2);
        s0 = s1;
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseRawLine() {
    var s0, s1, s2, s3, s4;

    s0 = peg$currPos;
    s1 = [];
    s2 = peg$currPos;
    s3 = peg$currPos;
    peg$silentFails++;
    s4 = peg$parseEndline();
    peg$silentFails--;
    if (s4 === peg$FAILED) {
      s3 = void 0;
    } else {
      peg$currPos = s3;
      s3 = peg$FAILED;
    }
    if (s3 !== peg$FAILED) {
      if (input.length > peg$currPos) {
        s4 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s4 = peg$FAILED;
        if (peg$silentFails === 0) {
          peg$fail(peg$c2);
        }
      }
      if (s4 !== peg$FAILED) {
        s3 = [s3, s4];
        s2 = s3;
      } else {
        peg$currPos = s2;
        s2 = peg$FAILED;
      }
    } else {
      peg$currPos = s2;
      s2 = peg$FAILED;
    }
    while (s2 !== peg$FAILED) {
      s1.push(s2);
      s2 = peg$currPos;
      s3 = peg$currPos;
      peg$silentFails++;
      s4 = peg$parseEndline();
      peg$silentFails--;
      if (s4 === peg$FAILED) {
        s3 = void 0;
      } else {
        peg$currPos = s3;
        s3 = peg$FAILED;
      }
      if (s3 !== peg$FAILED) {
        if (input.length > peg$currPos) {
          s4 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s4 = peg$FAILED;
          if (peg$silentFails === 0) {
            peg$fail(peg$c2);
          }
        }
        if (s4 !== peg$FAILED) {
          s3 = [s3, s4];
          s2 = s3;
        } else {
          peg$currPos = s2;
          s2 = peg$FAILED;
        }
      } else {
        peg$currPos = s2;
        s2 = peg$FAILED;
      }
    }
    if (s1 !== peg$FAILED) {
      s2 = peg$parseEndline();
      if (s2 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c18(s1);
        s0 = s1;
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseNotEmptyRawLine() {
    var s0, s1, s2, s3, s4;

    s0 = peg$currPos;
    s1 = [];
    s2 = peg$currPos;
    s3 = peg$currPos;
    peg$silentFails++;
    s4 = peg$parseEndline();
    peg$silentFails--;
    if (s4 === peg$FAILED) {
      s3 = void 0;
    } else {
      peg$currPos = s3;
      s3 = peg$FAILED;
    }
    if (s3 !== peg$FAILED) {
      if (input.length > peg$currPos) {
        s4 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s4 = peg$FAILED;
        if (peg$silentFails === 0) {
          peg$fail(peg$c2);
        }
      }
      if (s4 !== peg$FAILED) {
        s3 = [s3, s4];
        s2 = s3;
      } else {
        peg$currPos = s2;
        s2 = peg$FAILED;
      }
    } else {
      peg$currPos = s2;
      s2 = peg$FAILED;
    }
    if (s2 !== peg$FAILED) {
      while (s2 !== peg$FAILED) {
        s1.push(s2);
        s2 = peg$currPos;
        s3 = peg$currPos;
        peg$silentFails++;
        s4 = peg$parseEndline();
        peg$silentFails--;
        if (s4 === peg$FAILED) {
          s3 = void 0;
        } else {
          peg$currPos = s3;
          s3 = peg$FAILED;
        }
        if (s3 !== peg$FAILED) {
          if (input.length > peg$currPos) {
            s4 = input.charAt(peg$currPos);
            peg$currPos++;
          } else {
            s4 = peg$FAILED;
            if (peg$silentFails === 0) {
              peg$fail(peg$c2);
            }
          }
          if (s4 !== peg$FAILED) {
            s3 = [s3, s4];
            s2 = s3;
          } else {
            peg$currPos = s2;
            s2 = peg$FAILED;
          }
        } else {
          peg$currPos = s2;
          s2 = peg$FAILED;
        }
      }
    } else {
      s1 = peg$FAILED;
    }
    if (s1 !== peg$FAILED) {
      s2 = peg$parseEndline();
      if (s2 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c18(s1);
        s0 = s1;
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseUnknownLine() {
    var s0, s1;

    s0 = peg$currPos;
    s1 = peg$parseNotEmptyRawLine();
    if (s1 !== peg$FAILED) {
      peg$savedPos = s0;
      s1 = peg$c19(s1);
    }
    s0 = s1;

    return s0;
  }

  function peg$parseEndIndent() {
    var s0, s1, s2, s3, s4, s5, s6;

    s0 = peg$currPos;
    peg$silentFails++;
    s1 = peg$currPos;
    s2 = peg$parseBlankLines();
    if (s2 === peg$FAILED) {
      s2 = null;
    }
    if (s2 !== peg$FAILED) {
      s3 = [];
      s4 = peg$parseWhitespace();
      while (s4 !== peg$FAILED) {
        s3.push(s4);
        s4 = peg$parseWhitespace();
      }
      if (s3 !== peg$FAILED) {
        s4 = peg$currPos;
        peg$silentFails++;
        s5 = peg$parseNormalizedToWhitespace();
        peg$silentFails--;
        if (s5 === peg$FAILED) {
          s4 = void 0;
        } else {
          peg$currPos = s4;
          s4 = peg$FAILED;
        }
        if (s4 !== peg$FAILED) {
          if (input.length > peg$currPos) {
            s5 = input.charAt(peg$currPos);
            peg$currPos++;
          } else {
            s5 = peg$FAILED;
            if (peg$silentFails === 0) {
              peg$fail(peg$c2);
            }
          }
          if (s5 !== peg$FAILED) {
            peg$savedPos = peg$currPos;
            s6 = peg$c20(s3);
            if (s6) {
              s6 = void 0;
            } else {
              s6 = peg$FAILED;
            }
            if (s6 !== peg$FAILED) {
              s2 = [s2, s3, s4, s5, s6];
              s1 = s2;
            } else {
              peg$currPos = s1;
              s1 = peg$FAILED;
            }
          } else {
            peg$currPos = s1;
            s1 = peg$FAILED;
          }
        } else {
          peg$currPos = s1;
          s1 = peg$FAILED;
        }
      } else {
        peg$currPos = s1;
        s1 = peg$FAILED;
      }
    } else {
      peg$currPos = s1;
      s1 = peg$FAILED;
    }
    peg$silentFails--;
    if (s1 !== peg$FAILED) {
      peg$currPos = s0;
      s0 = void 0;
    } else {
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseSameIndent() {
    var s0, s1, s2;

    s0 = peg$currPos;
    s1 = [];
    s2 = peg$parseWhitespace();
    while (s2 !== peg$FAILED) {
      s1.push(s2);
      s2 = peg$parseWhitespace();
    }
    if (s1 !== peg$FAILED) {
      peg$savedPos = peg$currPos;
      s2 = peg$c21(s1);
      if (s2) {
        s2 = void 0;
      } else {
        s2 = peg$FAILED;
      }
      if (s2 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c22(s1);
        s0 = s1;
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseDeepIndent() {
    var s0, s1, s2;

    s0 = peg$currPos;
    s1 = [];
    s2 = peg$parseWhitespace();
    if (s2 !== peg$FAILED) {
      while (s2 !== peg$FAILED) {
        s1.push(s2);
        s2 = peg$parseWhitespace();
      }
    } else {
      s1 = peg$FAILED;
    }
    if (s1 !== peg$FAILED) {
      peg$savedPos = peg$currPos;
      s2 = peg$c23(s1);
      if (s2) {
        s2 = void 0;
      } else {
        s2 = peg$FAILED;
      }
      if (s2 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c24(s1);
        s0 = s1;
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseShallowIndent() {
    var s0, s1, s2;

    s0 = peg$currPos;
    s1 = [];
    s2 = peg$parseWhitespace();
    while (s2 !== peg$FAILED) {
      s1.push(s2);
      s2 = peg$parseWhitespace();
    }
    if (s1 !== peg$FAILED) {
      peg$savedPos = peg$currPos;
      s2 = peg$c25(s1);
      if (s2) {
        s2 = void 0;
      } else {
        s2 = peg$FAILED;
      }
      if (s2 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c24(s1);
        s0 = s1;
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseSameOrDeepIndent() {
    var s0, s1, s2;

    s0 = peg$currPos;
    s1 = [];
    s2 = peg$parseWhitespace();
    while (s2 !== peg$FAILED) {
      s1.push(s2);
      s2 = peg$parseWhitespace();
    }
    if (s1 !== peg$FAILED) {
      peg$savedPos = peg$currPos;
      s2 = peg$c26(s1);
      if (s2) {
        s2 = void 0;
      } else {
        s2 = peg$FAILED;
      }
      if (s2 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c24(s1);
        s0 = s1;
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseFail$() {
    var s0, s1, s2;

    s0 = peg$currPos;
    peg$savedPos = peg$currPos;
    s1 = peg$c27();
    if (s1) {
      s1 = void 0;
    } else {
      s1 = peg$FAILED;
    }
    if (s1 !== peg$FAILED) {
      if (input.length > peg$currPos) {
        s2 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s2 = peg$FAILED;
        if (peg$silentFails === 0) {
          peg$fail(peg$c2);
        }
      }
      if (s2 !== peg$FAILED) {
        s1 = [s1, s2];
        s0 = s1;
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parsePopIndent$() {
    var s0;

    peg$savedPos = peg$currPos;
    s0 = peg$c28();
    if (s0) {
      s0 = void 0;
    } else {
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseFailbackIndent$() {
    var s0, s1, s2;

    s0 = peg$currPos;
    s1 = peg$parsePopIndent$();
    if (s1 !== peg$FAILED) {
      s2 = peg$parseFail$();
      if (s2 !== peg$FAILED) {
        s1 = [s1, s2];
        s0 = s1;
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parsePushCommonIndent$() {
    var s0, s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11, s12;

    s0 = peg$currPos;
    s1 = peg$currPos;
    peg$silentFails++;
    s2 = peg$parseDeepIndent();
    peg$silentFails--;
    if (s2 !== peg$FAILED) {
      peg$currPos = s1;
      s1 = void 0;
    } else {
      s1 = peg$FAILED;
    }
    if (s1 !== peg$FAILED) {
      s2 = peg$currPos;
      peg$silentFails++;
      s3 = peg$currPos;
      s4 = [];
      s5 = peg$parseWhitespace();
      if (s5 !== peg$FAILED) {
        while (s5 !== peg$FAILED) {
          s4.push(s5);
          s5 = peg$parseWhitespace();
        }
      } else {
        s4 = peg$FAILED;
      }
      if (s4 !== peg$FAILED) {
        s5 = peg$parseRawLine();
        if (s5 !== peg$FAILED) {
          peg$savedPos = peg$currPos;
          s6 = peg$c29(s4);
          if (s6) {
            s6 = void 0;
          } else {
            s6 = peg$FAILED;
          }
          if (s6 !== peg$FAILED) {
            s7 = [];
            s8 = peg$currPos;
            s9 = [];
            s10 = peg$parseWhitespace();
            while (s10 !== peg$FAILED) {
              s9.push(s10);
              s10 = peg$parseWhitespace();
            }
            if (s9 !== peg$FAILED) {
              s10 = peg$parseNewline();
              if (s10 !== peg$FAILED) {
                s9 = [s9, s10];
                s8 = s9;
              } else {
                peg$currPos = s8;
                s8 = peg$FAILED;
              }
            } else {
              peg$currPos = s8;
              s8 = peg$FAILED;
            }
            if (s8 === peg$FAILED) {
              s8 = peg$currPos;
              s9 = peg$currPos;
              peg$silentFails++;
              s10 = peg$parseDeepIndent();
              peg$silentFails--;
              if (s10 !== peg$FAILED) {
                peg$currPos = s9;
                s9 = void 0;
              } else {
                s9 = peg$FAILED;
              }
              if (s9 !== peg$FAILED) {
                s10 = [];
                s11 = peg$parseWhitespace();
                if (s11 !== peg$FAILED) {
                  while (s11 !== peg$FAILED) {
                    s10.push(s11);
                    s11 = peg$parseWhitespace();
                  }
                } else {
                  s10 = peg$FAILED;
                }
                if (s10 !== peg$FAILED) {
                  s11 = peg$parseRawLine();
                  if (s11 !== peg$FAILED) {
                    peg$savedPos = peg$currPos;
                    s12 = peg$c30(s4, s10);
                    if (s12) {
                      s12 = void 0;
                    } else {
                      s12 = peg$FAILED;
                    }
                    if (s12 !== peg$FAILED) {
                      s9 = [s9, s10, s11, s12];
                      s8 = s9;
                    } else {
                      peg$currPos = s8;
                      s8 = peg$FAILED;
                    }
                  } else {
                    peg$currPos = s8;
                    s8 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s8;
                  s8 = peg$FAILED;
                }
              } else {
                peg$currPos = s8;
                s8 = peg$FAILED;
              }
            }
            while (s8 !== peg$FAILED) {
              s7.push(s8);
              s8 = peg$currPos;
              s9 = [];
              s10 = peg$parseWhitespace();
              while (s10 !== peg$FAILED) {
                s9.push(s10);
                s10 = peg$parseWhitespace();
              }
              if (s9 !== peg$FAILED) {
                s10 = peg$parseNewline();
                if (s10 !== peg$FAILED) {
                  s9 = [s9, s10];
                  s8 = s9;
                } else {
                  peg$currPos = s8;
                  s8 = peg$FAILED;
                }
              } else {
                peg$currPos = s8;
                s8 = peg$FAILED;
              }
              if (s8 === peg$FAILED) {
                s8 = peg$currPos;
                s9 = peg$currPos;
                peg$silentFails++;
                s10 = peg$parseDeepIndent();
                peg$silentFails--;
                if (s10 !== peg$FAILED) {
                  peg$currPos = s9;
                  s9 = void 0;
                } else {
                  s9 = peg$FAILED;
                }
                if (s9 !== peg$FAILED) {
                  s10 = [];
                  s11 = peg$parseWhitespace();
                  if (s11 !== peg$FAILED) {
                    while (s11 !== peg$FAILED) {
                      s10.push(s11);
                      s11 = peg$parseWhitespace();
                    }
                  } else {
                    s10 = peg$FAILED;
                  }
                  if (s10 !== peg$FAILED) {
                    s11 = peg$parseRawLine();
                    if (s11 !== peg$FAILED) {
                      peg$savedPos = peg$currPos;
                      s12 = peg$c30(s4, s10);
                      if (s12) {
                        s12 = void 0;
                      } else {
                        s12 = peg$FAILED;
                      }
                      if (s12 !== peg$FAILED) {
                        s9 = [s9, s10, s11, s12];
                        s8 = s9;
                      } else {
                        peg$currPos = s8;
                        s8 = peg$FAILED;
                      }
                    } else {
                      peg$currPos = s8;
                      s8 = peg$FAILED;
                    }
                  } else {
                    peg$currPos = s8;
                    s8 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s8;
                  s8 = peg$FAILED;
                }
              }
            }
            if (s7 !== peg$FAILED) {
              peg$savedPos = peg$currPos;
              s8 = peg$c31(s4);
              if (s8) {
                s8 = void 0;
              } else {
                s8 = peg$FAILED;
              }
              if (s8 !== peg$FAILED) {
                s4 = [s4, s5, s6, s7, s8];
                s3 = s4;
              } else {
                peg$currPos = s3;
                s3 = peg$FAILED;
              }
            } else {
              peg$currPos = s3;
              s3 = peg$FAILED;
            }
          } else {
            peg$currPos = s3;
            s3 = peg$FAILED;
          }
        } else {
          peg$currPos = s3;
          s3 = peg$FAILED;
        }
      } else {
        peg$currPos = s3;
        s3 = peg$FAILED;
      }
      peg$silentFails--;
      if (s3 !== peg$FAILED) {
        peg$currPos = s2;
        s2 = void 0;
      } else {
        s2 = peg$FAILED;
      }
      if (s2 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c32();
        s0 = s1;
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parsePushFirstIndent$() {
    var s0, s1, s2, s3, s4, s5;

    s0 = peg$currPos;
    s1 = peg$currPos;
    peg$silentFails++;
    s2 = peg$currPos;
    s3 = peg$parseDeepIndent();
    if (s3 !== peg$FAILED) {
      s4 = peg$parseNonspacechar();
      if (s4 !== peg$FAILED) {
        peg$savedPos = peg$currPos;
        s5 = peg$c33(s3, s4);
        if (s5) {
          s5 = void 0;
        } else {
          s5 = peg$FAILED;
        }
        if (s5 !== peg$FAILED) {
          s3 = [s3, s4, s5];
          s2 = s3;
        } else {
          peg$currPos = s2;
          s2 = peg$FAILED;
        }
      } else {
        peg$currPos = s2;
        s2 = peg$FAILED;
      }
    } else {
      peg$currPos = s2;
      s2 = peg$FAILED;
    }
    peg$silentFails--;
    if (s2 !== peg$FAILED) {
      peg$currPos = s1;
      s1 = void 0;
    } else {
      s1 = peg$FAILED;
    }
    if (s1 !== peg$FAILED) {
      peg$savedPos = s0;
      s1 = peg$c32();
    }
    s0 = s1;

    return s0;
  }

  function peg$parseSkipIndentCheck$() {
    var s0;

    peg$savedPos = peg$currPos;
    s0 = peg$c34();
    if (s0) {
      s0 = void 0;
    } else {
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseDocument() {
    var s0, s1, s2;

    s0 = peg$currPos;
    s1 = [];
    s2 = peg$parseSection();
    if (s2 === peg$FAILED) {
      s2 = peg$parseTransition();
      if (s2 === peg$FAILED) {
        s2 = peg$parseBodyElement();
        if (s2 === peg$FAILED) {
          s2 = peg$parseUnknown();
        }
      }
    }
    while (s2 !== peg$FAILED) {
      s1.push(s2);
      s2 = peg$parseSection();
      if (s2 === peg$FAILED) {
        s2 = peg$parseTransition();
        if (s2 === peg$FAILED) {
          s2 = peg$parseBodyElement();
          if (s2 === peg$FAILED) {
            s2 = peg$parseUnknown();
          }
        }
      }
    }
    if (s1 !== peg$FAILED) {
      s2 = peg$parseBlankLines();
      if (s2 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c35(s1, s2);
        s0 = s1;
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseSection() {
    var s0, s1, s2, s3, s4, s5, s6, s7;

    s0 = peg$currPos;
    s1 = peg$parseBlankLines();
    if (s1 === peg$FAILED) {
      s1 = null;
    }
    if (s1 !== peg$FAILED) {
      s2 = peg$parseIsSubSection();
      if (s2 !== peg$FAILED) {
        s3 = peg$parseSectionWithOverline();
        if (s3 === peg$FAILED) {
          s3 = peg$parseSectionWithoutOverline();
        }
        if (s3 !== peg$FAILED) {
          s4 = [];
          s5 = peg$currPos;
          s6 = peg$parseIsSubSection();
          if (s6 !== peg$FAILED) {
            s7 = peg$parseSection();
            if (s7 !== peg$FAILED) {
              s6 = [s6, s7];
              s5 = s6;
            } else {
              peg$currPos = s5;
              s5 = peg$FAILED;
            }
          } else {
            peg$currPos = s5;
            s5 = peg$FAILED;
          }
          if (s5 === peg$FAILED) {
            s5 = peg$currPos;
            s6 = peg$currPos;
            peg$silentFails++;
            s7 = peg$parseIsSection();
            peg$silentFails--;
            if (s7 === peg$FAILED) {
              s6 = void 0;
            } else {
              peg$currPos = s6;
              s6 = peg$FAILED;
            }
            if (s6 !== peg$FAILED) {
              s7 = peg$parseTransition();
              if (s7 !== peg$FAILED) {
                s6 = [s6, s7];
                s5 = s6;
              } else {
                peg$currPos = s5;
                s5 = peg$FAILED;
              }
            } else {
              peg$currPos = s5;
              s5 = peg$FAILED;
            }
            if (s5 === peg$FAILED) {
              s5 = peg$currPos;
              s6 = peg$currPos;
              peg$silentFails++;
              s7 = peg$parseIsSection();
              peg$silentFails--;
              if (s7 === peg$FAILED) {
                s6 = void 0;
              } else {
                peg$currPos = s6;
                s6 = peg$FAILED;
              }
              if (s6 !== peg$FAILED) {
                s7 = peg$parseBodyElement();
                if (s7 !== peg$FAILED) {
                  s6 = [s6, s7];
                  s5 = s6;
                } else {
                  peg$currPos = s5;
                  s5 = peg$FAILED;
                }
              } else {
                peg$currPos = s5;
                s5 = peg$FAILED;
              }
            }
          }
          while (s5 !== peg$FAILED) {
            s4.push(s5);
            s5 = peg$currPos;
            s6 = peg$parseIsSubSection();
            if (s6 !== peg$FAILED) {
              s7 = peg$parseSection();
              if (s7 !== peg$FAILED) {
                s6 = [s6, s7];
                s5 = s6;
              } else {
                peg$currPos = s5;
                s5 = peg$FAILED;
              }
            } else {
              peg$currPos = s5;
              s5 = peg$FAILED;
            }
            if (s5 === peg$FAILED) {
              s5 = peg$currPos;
              s6 = peg$currPos;
              peg$silentFails++;
              s7 = peg$parseIsSection();
              peg$silentFails--;
              if (s7 === peg$FAILED) {
                s6 = void 0;
              } else {
                peg$currPos = s6;
                s6 = peg$FAILED;
              }
              if (s6 !== peg$FAILED) {
                s7 = peg$parseTransition();
                if (s7 !== peg$FAILED) {
                  s6 = [s6, s7];
                  s5 = s6;
                } else {
                  peg$currPos = s5;
                  s5 = peg$FAILED;
                }
              } else {
                peg$currPos = s5;
                s5 = peg$FAILED;
              }
              if (s5 === peg$FAILED) {
                s5 = peg$currPos;
                s6 = peg$currPos;
                peg$silentFails++;
                s7 = peg$parseIsSection();
                peg$silentFails--;
                if (s7 === peg$FAILED) {
                  s6 = void 0;
                } else {
                  peg$currPos = s6;
                  s6 = peg$FAILED;
                }
                if (s6 !== peg$FAILED) {
                  s7 = peg$parseBodyElement();
                  if (s7 !== peg$FAILED) {
                    s6 = [s6, s7];
                    s5 = s6;
                  } else {
                    peg$currPos = s5;
                    s5 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s5;
                  s5 = peg$FAILED;
                }
              }
            }
          }
          if (s4 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c36(s1, s3, s4);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseIsSection() {
    var s0, s1, s2, s3, s4, s5, s6;

    s0 = peg$currPos;
    peg$silentFails++;
    s1 = peg$currPos;
    s2 = peg$parseBlankLines();
    if (s2 === peg$FAILED) {
      s2 = null;
    }
    if (s2 !== peg$FAILED) {
      s3 = peg$parseSectionLine();
      if (s3 !== peg$FAILED) {
        s4 = peg$currPos;
        peg$silentFails++;
        s5 = peg$parseBlankLines();
        peg$silentFails--;
        if (s5 === peg$FAILED) {
          s4 = void 0;
        } else {
          peg$currPos = s4;
          s4 = peg$FAILED;
        }
        if (s4 !== peg$FAILED) {
          s5 = peg$parseRawLine();
          if (s5 !== peg$FAILED) {
            s6 = peg$parseSectionLine();
            if (s6 !== peg$FAILED) {
              s2 = [s2, s3, s4, s5, s6];
              s1 = s2;
            } else {
              peg$currPos = s1;
              s1 = peg$FAILED;
            }
          } else {
            peg$currPos = s1;
            s1 = peg$FAILED;
          }
        } else {
          peg$currPos = s1;
          s1 = peg$FAILED;
        }
      } else {
        peg$currPos = s1;
        s1 = peg$FAILED;
      }
    } else {
      peg$currPos = s1;
      s1 = peg$FAILED;
    }
    peg$silentFails--;
    if (s1 !== peg$FAILED) {
      peg$currPos = s0;
      s0 = void 0;
    } else {
      s0 = peg$FAILED;
    }
    if (s0 === peg$FAILED) {
      s0 = peg$currPos;
      peg$silentFails++;
      s1 = peg$currPos;
      s2 = peg$parseBlankLines();
      if (s2 === peg$FAILED) {
        s2 = null;
      }
      if (s2 !== peg$FAILED) {
        s3 = peg$parseRawLine();
        if (s3 !== peg$FAILED) {
          s4 = peg$parseSectionLine();
          if (s4 !== peg$FAILED) {
            s2 = [s2, s3, s4];
            s1 = s2;
          } else {
            peg$currPos = s1;
            s1 = peg$FAILED;
          }
        } else {
          peg$currPos = s1;
          s1 = peg$FAILED;
        }
      } else {
        peg$currPos = s1;
        s1 = peg$FAILED;
      }
      peg$silentFails--;
      if (s1 !== peg$FAILED) {
        peg$currPos = s0;
        s0 = void 0;
      } else {
        s0 = peg$FAILED;
      }
    }

    return s0;
  }

  function peg$parseIsSubSection() {
    var s0, s1, s2, s3, s4, s5, s6, s7;

    s0 = peg$currPos;
    peg$silentFails++;
    s1 = peg$currPos;
    s2 = peg$parseBlankLines();
    if (s2 === peg$FAILED) {
      s2 = null;
    }
    if (s2 !== peg$FAILED) {
      s3 = peg$parseSectionLine();
      if (s3 !== peg$FAILED) {
        s4 = peg$currPos;
        peg$silentFails++;
        s5 = peg$parseBlankLines();
        peg$silentFails--;
        if (s5 === peg$FAILED) {
          s4 = void 0;
        } else {
          peg$currPos = s4;
          s4 = peg$FAILED;
        }
        if (s4 !== peg$FAILED) {
          s5 = peg$parseRawLine();
          if (s5 !== peg$FAILED) {
            s6 = peg$parseSectionLine();
            if (s6 !== peg$FAILED) {
              peg$savedPos = peg$currPos;
              s7 = peg$c37(s3, s6);
              if (s7) {
                s7 = void 0;
              } else {
                s7 = peg$FAILED;
              }
              if (s7 !== peg$FAILED) {
                s2 = [s2, s3, s4, s5, s6, s7];
                s1 = s2;
              } else {
                peg$currPos = s1;
                s1 = peg$FAILED;
              }
            } else {
              peg$currPos = s1;
              s1 = peg$FAILED;
            }
          } else {
            peg$currPos = s1;
            s1 = peg$FAILED;
          }
        } else {
          peg$currPos = s1;
          s1 = peg$FAILED;
        }
      } else {
        peg$currPos = s1;
        s1 = peg$FAILED;
      }
    } else {
      peg$currPos = s1;
      s1 = peg$FAILED;
    }
    peg$silentFails--;
    if (s1 !== peg$FAILED) {
      peg$currPos = s0;
      s0 = void 0;
    } else {
      s0 = peg$FAILED;
    }
    if (s0 === peg$FAILED) {
      s0 = peg$currPos;
      peg$silentFails++;
      s1 = peg$currPos;
      s2 = peg$parseBlankLines();
      if (s2 === peg$FAILED) {
        s2 = null;
      }
      if (s2 !== peg$FAILED) {
        s3 = peg$parseRawLine();
        if (s3 !== peg$FAILED) {
          s4 = peg$parseSectionLine();
          if (s4 !== peg$FAILED) {
            peg$savedPos = peg$currPos;
            s5 = peg$c38(s3, s4);
            if (s5) {
              s5 = void 0;
            } else {
              s5 = peg$FAILED;
            }
            if (s5 !== peg$FAILED) {
              s2 = [s2, s3, s4, s5];
              s1 = s2;
            } else {
              peg$currPos = s1;
              s1 = peg$FAILED;
            }
          } else {
            peg$currPos = s1;
            s1 = peg$FAILED;
          }
        } else {
          peg$currPos = s1;
          s1 = peg$FAILED;
        }
      } else {
        peg$currPos = s1;
        s1 = peg$FAILED;
      }
      peg$silentFails--;
      if (s1 !== peg$FAILED) {
        peg$currPos = s0;
        s0 = void 0;
      } else {
        s0 = peg$FAILED;
      }
    }

    return s0;
  }

  function peg$parseSectionWithOverline() {
    var s0, s1, s2, s3, s4, s5, s6;

    s0 = peg$currPos;
    s1 = peg$currPos;
    peg$silentFails++;
    s2 = peg$currPos;
    s3 = peg$parseSectionLine();
    if (s3 !== peg$FAILED) {
      s4 = peg$currPos;
      peg$silentFails++;
      s5 = peg$parseBlankLines();
      peg$silentFails--;
      if (s5 === peg$FAILED) {
        s4 = void 0;
      } else {
        peg$currPos = s4;
        s4 = peg$FAILED;
      }
      if (s4 !== peg$FAILED) {
        s5 = peg$parseRawLine();
        if (s5 !== peg$FAILED) {
          s6 = peg$parseSectionLine();
          if (s6 !== peg$FAILED) {
            s3 = [s3, s4, s5, s6];
            s2 = s3;
          } else {
            peg$currPos = s2;
            s2 = peg$FAILED;
          }
        } else {
          peg$currPos = s2;
          s2 = peg$FAILED;
        }
      } else {
        peg$currPos = s2;
        s2 = peg$FAILED;
      }
    } else {
      peg$currPos = s2;
      s2 = peg$FAILED;
    }
    peg$silentFails--;
    if (s2 !== peg$FAILED) {
      peg$currPos = s1;
      s1 = void 0;
    } else {
      s1 = peg$FAILED;
    }
    if (s1 !== peg$FAILED) {
      s2 = peg$parseSectionLine();
      if (s2 !== peg$FAILED) {
        s3 = [];
        s4 = peg$parseWhitespace();
        while (s4 !== peg$FAILED) {
          s3.push(s4);
          s4 = peg$parseWhitespace();
        }
        if (s3 !== peg$FAILED) {
          s4 = peg$parseOnelineParagraph();
          if (s4 !== peg$FAILED) {
            s5 = peg$parseNewline();
            if (s5 !== peg$FAILED) {
              s6 = peg$parseSectionLine();
              if (s6 !== peg$FAILED) {
                peg$savedPos = s0;
                s1 = peg$c39(s2, s4, s6);
                s0 = s1;
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseSectionWithoutOverline() {
    var s0, s1, s2, s3, s4, s5;

    s0 = peg$currPos;
    s1 = peg$currPos;
    peg$silentFails++;
    s2 = peg$currPos;
    s3 = peg$currPos;
    peg$silentFails++;
    s4 = peg$parseBlankLines();
    peg$silentFails--;
    if (s4 === peg$FAILED) {
      s3 = void 0;
    } else {
      peg$currPos = s3;
      s3 = peg$FAILED;
    }
    if (s3 !== peg$FAILED) {
      s4 = peg$parseRawLine();
      if (s4 !== peg$FAILED) {
        s5 = peg$parseSectionLine();
        if (s5 !== peg$FAILED) {
          s3 = [s3, s4, s5];
          s2 = s3;
        } else {
          peg$currPos = s2;
          s2 = peg$FAILED;
        }
      } else {
        peg$currPos = s2;
        s2 = peg$FAILED;
      }
    } else {
      peg$currPos = s2;
      s2 = peg$FAILED;
    }
    peg$silentFails--;
    if (s2 !== peg$FAILED) {
      peg$currPos = s1;
      s1 = void 0;
    } else {
      s1 = peg$FAILED;
    }
    if (s1 !== peg$FAILED) {
      s2 = peg$parseOnelineParagraph();
      if (s2 !== peg$FAILED) {
        s3 = peg$parseNewline();
        if (s3 !== peg$FAILED) {
          s4 = peg$parseSectionLine();
          if (s4 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c40(s2, s4);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseSectionLine() {
    var s0, s1, s2, s3, s4;

    s0 = peg$currPos;
    s1 = [];
    if (input.charCodeAt(peg$currPos) === 33) {
      s2 = peg$c41;
      peg$currPos++;
    } else {
      s2 = peg$FAILED;
      if (peg$silentFails === 0) {
        peg$fail(peg$c42);
      }
    }
    if (s2 === peg$FAILED) {
      if (input.charCodeAt(peg$currPos) === 34) {
        s2 = peg$c43;
        peg$currPos++;
      } else {
        s2 = peg$FAILED;
        if (peg$silentFails === 0) {
          peg$fail(peg$c44);
        }
      }
      if (s2 === peg$FAILED) {
        if (input.charCodeAt(peg$currPos) === 35) {
          s2 = peg$c45;
          peg$currPos++;
        } else {
          s2 = peg$FAILED;
          if (peg$silentFails === 0) {
            peg$fail(peg$c46);
          }
        }
        if (s2 === peg$FAILED) {
          if (input.charCodeAt(peg$currPos) === 36) {
            s2 = peg$c47;
            peg$currPos++;
          } else {
            s2 = peg$FAILED;
            if (peg$silentFails === 0) {
              peg$fail(peg$c48);
            }
          }
          if (s2 === peg$FAILED) {
            if (input.charCodeAt(peg$currPos) === 37) {
              s2 = peg$c49;
              peg$currPos++;
            } else {
              s2 = peg$FAILED;
              if (peg$silentFails === 0) {
                peg$fail(peg$c50);
              }
            }
            if (s2 === peg$FAILED) {
              if (input.charCodeAt(peg$currPos) === 38) {
                s2 = peg$c51;
                peg$currPos++;
              } else {
                s2 = peg$FAILED;
                if (peg$silentFails === 0) {
                  peg$fail(peg$c52);
                }
              }
              if (s2 === peg$FAILED) {
                if (input.charCodeAt(peg$currPos) === 39) {
                  s2 = peg$c53;
                  peg$currPos++;
                } else {
                  s2 = peg$FAILED;
                  if (peg$silentFails === 0) {
                    peg$fail(peg$c54);
                  }
                }
                if (s2 === peg$FAILED) {
                  if (input.charCodeAt(peg$currPos) === 40) {
                    s2 = peg$c55;
                    peg$currPos++;
                  } else {
                    s2 = peg$FAILED;
                    if (peg$silentFails === 0) {
                      peg$fail(peg$c56);
                    }
                  }
                  if (s2 === peg$FAILED) {
                    if (input.charCodeAt(peg$currPos) === 41) {
                      s2 = peg$c57;
                      peg$currPos++;
                    } else {
                      s2 = peg$FAILED;
                      if (peg$silentFails === 0) {
                        peg$fail(peg$c58);
                      }
                    }
                    if (s2 === peg$FAILED) {
                      if (input.charCodeAt(peg$currPos) === 42) {
                        s2 = peg$c59;
                        peg$currPos++;
                      } else {
                        s2 = peg$FAILED;
                        if (peg$silentFails === 0) {
                          peg$fail(peg$c60);
                        }
                      }
                      if (s2 === peg$FAILED) {
                        if (input.charCodeAt(peg$currPos) === 43) {
                          s2 = peg$c61;
                          peg$currPos++;
                        } else {
                          s2 = peg$FAILED;
                          if (peg$silentFails === 0) {
                            peg$fail(peg$c62);
                          }
                        }
                        if (s2 === peg$FAILED) {
                          if (input.charCodeAt(peg$currPos) === 44) {
                            s2 = peg$c63;
                            peg$currPos++;
                          } else {
                            s2 = peg$FAILED;
                            if (peg$silentFails === 0) {
                              peg$fail(peg$c64);
                            }
                          }
                          if (s2 === peg$FAILED) {
                            if (input.charCodeAt(peg$currPos) === 45) {
                              s2 = peg$c65;
                              peg$currPos++;
                            } else {
                              s2 = peg$FAILED;
                              if (peg$silentFails === 0) {
                                peg$fail(peg$c66);
                              }
                            }
                            if (s2 === peg$FAILED) {
                              if (input.charCodeAt(peg$currPos) === 46) {
                                s2 = peg$c67;
                                peg$currPos++;
                              } else {
                                s2 = peg$FAILED;
                                if (peg$silentFails === 0) {
                                  peg$fail(peg$c68);
                                }
                              }
                              if (s2 === peg$FAILED) {
                                if (input.charCodeAt(peg$currPos) === 47) {
                                  s2 = peg$c69;
                                  peg$currPos++;
                                } else {
                                  s2 = peg$FAILED;
                                  if (peg$silentFails === 0) {
                                    peg$fail(peg$c70);
                                  }
                                }
                                if (s2 === peg$FAILED) {
                                  if (input.charCodeAt(peg$currPos) === 58) {
                                    s2 = peg$c71;
                                    peg$currPos++;
                                  } else {
                                    s2 = peg$FAILED;
                                    if (peg$silentFails === 0) {
                                      peg$fail(peg$c72);
                                    }
                                  }
                                  if (s2 === peg$FAILED) {
                                    if (input.charCodeAt(peg$currPos) === 59) {
                                      s2 = peg$c73;
                                      peg$currPos++;
                                    } else {
                                      s2 = peg$FAILED;
                                      if (peg$silentFails === 0) {
                                        peg$fail(peg$c74);
                                      }
                                    }
                                    if (s2 === peg$FAILED) {
                                      if (input.charCodeAt(peg$currPos) === 60) {
                                        s2 = peg$c75;
                                        peg$currPos++;
                                      } else {
                                        s2 = peg$FAILED;
                                        if (peg$silentFails === 0) {
                                          peg$fail(peg$c76);
                                        }
                                      }
                                      if (s2 === peg$FAILED) {
                                        if (input.charCodeAt(peg$currPos) === 61) {
                                          s2 = peg$c77;
                                          peg$currPos++;
                                        } else {
                                          s2 = peg$FAILED;
                                          if (peg$silentFails === 0) {
                                            peg$fail(peg$c78);
                                          }
                                        }
                                        if (s2 === peg$FAILED) {
                                          if (input.charCodeAt(peg$currPos) === 62) {
                                            s2 = peg$c79;
                                            peg$currPos++;
                                          } else {
                                            s2 = peg$FAILED;
                                            if (peg$silentFails === 0) {
                                              peg$fail(peg$c80);
                                            }
                                          }
                                          if (s2 === peg$FAILED) {
                                            if (input.charCodeAt(peg$currPos) === 63) {
                                              s2 = peg$c81;
                                              peg$currPos++;
                                            } else {
                                              s2 = peg$FAILED;
                                              if (peg$silentFails === 0) {
                                                peg$fail(peg$c82);
                                              }
                                            }
                                            if (s2 === peg$FAILED) {
                                              if (input.charCodeAt(peg$currPos) === 64) {
                                                s2 = peg$c83;
                                                peg$currPos++;
                                              } else {
                                                s2 = peg$FAILED;
                                                if (peg$silentFails === 0) {
                                                  peg$fail(peg$c84);
                                                }
                                              }
                                              if (s2 === peg$FAILED) {
                                                if (input.charCodeAt(peg$currPos) === 91) {
                                                  s2 = peg$c85;
                                                  peg$currPos++;
                                                } else {
                                                  s2 = peg$FAILED;
                                                  if (peg$silentFails === 0) {
                                                    peg$fail(peg$c86);
                                                  }
                                                }
                                                if (s2 === peg$FAILED) {
                                                  if (input.charCodeAt(peg$currPos) === 92) {
                                                    s2 = peg$c87;
                                                    peg$currPos++;
                                                  } else {
                                                    s2 = peg$FAILED;
                                                    if (peg$silentFails === 0) {
                                                      peg$fail(peg$c88);
                                                    }
                                                  }
                                                  if (s2 === peg$FAILED) {
                                                    if (input.charCodeAt(peg$currPos) === 93) {
                                                      s2 = peg$c89;
                                                      peg$currPos++;
                                                    } else {
                                                      s2 = peg$FAILED;
                                                      if (peg$silentFails === 0) {
                                                        peg$fail(peg$c90);
                                                      }
                                                    }
                                                    if (s2 === peg$FAILED) {
                                                      if (input.charCodeAt(peg$currPos) === 94) {
                                                        s2 = peg$c91;
                                                        peg$currPos++;
                                                      } else {
                                                        s2 = peg$FAILED;
                                                        if (peg$silentFails === 0) {
                                                          peg$fail(peg$c92);
                                                        }
                                                      }
                                                      if (s2 === peg$FAILED) {
                                                        if (input.charCodeAt(peg$currPos) === 95) {
                                                          s2 = peg$c93;
                                                          peg$currPos++;
                                                        } else {
                                                          s2 = peg$FAILED;
                                                          if (peg$silentFails === 0) {
                                                            peg$fail(peg$c94);
                                                          }
                                                        }
                                                        if (s2 === peg$FAILED) {
                                                          if (input.charCodeAt(peg$currPos) === 96) {
                                                            s2 = peg$c95;
                                                            peg$currPos++;
                                                          } else {
                                                            s2 = peg$FAILED;
                                                            if (peg$silentFails === 0) {
                                                              peg$fail(peg$c96);
                                                            }
                                                          }
                                                          if (s2 === peg$FAILED) {
                                                            if (input.charCodeAt(peg$currPos) === 123) {
                                                              s2 = peg$c97;
                                                              peg$currPos++;
                                                            } else {
                                                              s2 = peg$FAILED;
                                                              if (peg$silentFails === 0) {
                                                                peg$fail(peg$c98);
                                                              }
                                                            }
                                                            if (s2 === peg$FAILED) {
                                                              if (input.charCodeAt(peg$currPos) === 124) {
                                                                s2 = peg$c99;
                                                                peg$currPos++;
                                                              } else {
                                                                s2 = peg$FAILED;
                                                                if (peg$silentFails === 0) {
                                                                  peg$fail(peg$c100);
                                                                }
                                                              }
                                                              if (s2 === peg$FAILED) {
                                                                if (input.charCodeAt(peg$currPos) === 125) {
                                                                  s2 = peg$c101;
                                                                  peg$currPos++;
                                                                } else {
                                                                  s2 = peg$FAILED;
                                                                  if (peg$silentFails === 0) {
                                                                    peg$fail(peg$c102);
                                                                  }
                                                                }
                                                                if (s2 === peg$FAILED) {
                                                                  if (input.charCodeAt(peg$currPos) === 126) {
                                                                    s2 = peg$c103;
                                                                    peg$currPos++;
                                                                  } else {
                                                                    s2 = peg$FAILED;
                                                                    if (peg$silentFails === 0) {
                                                                      peg$fail(peg$c104);
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    if (s2 !== peg$FAILED) {
      while (s2 !== peg$FAILED) {
        s1.push(s2);
        if (input.charCodeAt(peg$currPos) === 33) {
          s2 = peg$c41;
          peg$currPos++;
        } else {
          s2 = peg$FAILED;
          if (peg$silentFails === 0) {
            peg$fail(peg$c42);
          }
        }
        if (s2 === peg$FAILED) {
          if (input.charCodeAt(peg$currPos) === 34) {
            s2 = peg$c43;
            peg$currPos++;
          } else {
            s2 = peg$FAILED;
            if (peg$silentFails === 0) {
              peg$fail(peg$c44);
            }
          }
          if (s2 === peg$FAILED) {
            if (input.charCodeAt(peg$currPos) === 35) {
              s2 = peg$c45;
              peg$currPos++;
            } else {
              s2 = peg$FAILED;
              if (peg$silentFails === 0) {
                peg$fail(peg$c46);
              }
            }
            if (s2 === peg$FAILED) {
              if (input.charCodeAt(peg$currPos) === 36) {
                s2 = peg$c47;
                peg$currPos++;
              } else {
                s2 = peg$FAILED;
                if (peg$silentFails === 0) {
                  peg$fail(peg$c48);
                }
              }
              if (s2 === peg$FAILED) {
                if (input.charCodeAt(peg$currPos) === 37) {
                  s2 = peg$c49;
                  peg$currPos++;
                } else {
                  s2 = peg$FAILED;
                  if (peg$silentFails === 0) {
                    peg$fail(peg$c50);
                  }
                }
                if (s2 === peg$FAILED) {
                  if (input.charCodeAt(peg$currPos) === 38) {
                    s2 = peg$c51;
                    peg$currPos++;
                  } else {
                    s2 = peg$FAILED;
                    if (peg$silentFails === 0) {
                      peg$fail(peg$c52);
                    }
                  }
                  if (s2 === peg$FAILED) {
                    if (input.charCodeAt(peg$currPos) === 39) {
                      s2 = peg$c53;
                      peg$currPos++;
                    } else {
                      s2 = peg$FAILED;
                      if (peg$silentFails === 0) {
                        peg$fail(peg$c54);
                      }
                    }
                    if (s2 === peg$FAILED) {
                      if (input.charCodeAt(peg$currPos) === 40) {
                        s2 = peg$c55;
                        peg$currPos++;
                      } else {
                        s2 = peg$FAILED;
                        if (peg$silentFails === 0) {
                          peg$fail(peg$c56);
                        }
                      }
                      if (s2 === peg$FAILED) {
                        if (input.charCodeAt(peg$currPos) === 41) {
                          s2 = peg$c57;
                          peg$currPos++;
                        } else {
                          s2 = peg$FAILED;
                          if (peg$silentFails === 0) {
                            peg$fail(peg$c58);
                          }
                        }
                        if (s2 === peg$FAILED) {
                          if (input.charCodeAt(peg$currPos) === 42) {
                            s2 = peg$c59;
                            peg$currPos++;
                          } else {
                            s2 = peg$FAILED;
                            if (peg$silentFails === 0) {
                              peg$fail(peg$c60);
                            }
                          }
                          if (s2 === peg$FAILED) {
                            if (input.charCodeAt(peg$currPos) === 43) {
                              s2 = peg$c61;
                              peg$currPos++;
                            } else {
                              s2 = peg$FAILED;
                              if (peg$silentFails === 0) {
                                peg$fail(peg$c62);
                              }
                            }
                            if (s2 === peg$FAILED) {
                              if (input.charCodeAt(peg$currPos) === 44) {
                                s2 = peg$c63;
                                peg$currPos++;
                              } else {
                                s2 = peg$FAILED;
                                if (peg$silentFails === 0) {
                                  peg$fail(peg$c64);
                                }
                              }
                              if (s2 === peg$FAILED) {
                                if (input.charCodeAt(peg$currPos) === 45) {
                                  s2 = peg$c65;
                                  peg$currPos++;
                                } else {
                                  s2 = peg$FAILED;
                                  if (peg$silentFails === 0) {
                                    peg$fail(peg$c66);
                                  }
                                }
                                if (s2 === peg$FAILED) {
                                  if (input.charCodeAt(peg$currPos) === 46) {
                                    s2 = peg$c67;
                                    peg$currPos++;
                                  } else {
                                    s2 = peg$FAILED;
                                    if (peg$silentFails === 0) {
                                      peg$fail(peg$c68);
                                    }
                                  }
                                  if (s2 === peg$FAILED) {
                                    if (input.charCodeAt(peg$currPos) === 47) {
                                      s2 = peg$c69;
                                      peg$currPos++;
                                    } else {
                                      s2 = peg$FAILED;
                                      if (peg$silentFails === 0) {
                                        peg$fail(peg$c70);
                                      }
                                    }
                                    if (s2 === peg$FAILED) {
                                      if (input.charCodeAt(peg$currPos) === 58) {
                                        s2 = peg$c71;
                                        peg$currPos++;
                                      } else {
                                        s2 = peg$FAILED;
                                        if (peg$silentFails === 0) {
                                          peg$fail(peg$c72);
                                        }
                                      }
                                      if (s2 === peg$FAILED) {
                                        if (input.charCodeAt(peg$currPos) === 59) {
                                          s2 = peg$c73;
                                          peg$currPos++;
                                        } else {
                                          s2 = peg$FAILED;
                                          if (peg$silentFails === 0) {
                                            peg$fail(peg$c74);
                                          }
                                        }
                                        if (s2 === peg$FAILED) {
                                          if (input.charCodeAt(peg$currPos) === 60) {
                                            s2 = peg$c75;
                                            peg$currPos++;
                                          } else {
                                            s2 = peg$FAILED;
                                            if (peg$silentFails === 0) {
                                              peg$fail(peg$c76);
                                            }
                                          }
                                          if (s2 === peg$FAILED) {
                                            if (input.charCodeAt(peg$currPos) === 61) {
                                              s2 = peg$c77;
                                              peg$currPos++;
                                            } else {
                                              s2 = peg$FAILED;
                                              if (peg$silentFails === 0) {
                                                peg$fail(peg$c78);
                                              }
                                            }
                                            if (s2 === peg$FAILED) {
                                              if (input.charCodeAt(peg$currPos) === 62) {
                                                s2 = peg$c79;
                                                peg$currPos++;
                                              } else {
                                                s2 = peg$FAILED;
                                                if (peg$silentFails === 0) {
                                                  peg$fail(peg$c80);
                                                }
                                              }
                                              if (s2 === peg$FAILED) {
                                                if (input.charCodeAt(peg$currPos) === 63) {
                                                  s2 = peg$c81;
                                                  peg$currPos++;
                                                } else {
                                                  s2 = peg$FAILED;
                                                  if (peg$silentFails === 0) {
                                                    peg$fail(peg$c82);
                                                  }
                                                }
                                                if (s2 === peg$FAILED) {
                                                  if (input.charCodeAt(peg$currPos) === 64) {
                                                    s2 = peg$c83;
                                                    peg$currPos++;
                                                  } else {
                                                    s2 = peg$FAILED;
                                                    if (peg$silentFails === 0) {
                                                      peg$fail(peg$c84);
                                                    }
                                                  }
                                                  if (s2 === peg$FAILED) {
                                                    if (input.charCodeAt(peg$currPos) === 91) {
                                                      s2 = peg$c85;
                                                      peg$currPos++;
                                                    } else {
                                                      s2 = peg$FAILED;
                                                      if (peg$silentFails === 0) {
                                                        peg$fail(peg$c86);
                                                      }
                                                    }
                                                    if (s2 === peg$FAILED) {
                                                      if (input.charCodeAt(peg$currPos) === 92) {
                                                        s2 = peg$c87;
                                                        peg$currPos++;
                                                      } else {
                                                        s2 = peg$FAILED;
                                                        if (peg$silentFails === 0) {
                                                          peg$fail(peg$c88);
                                                        }
                                                      }
                                                      if (s2 === peg$FAILED) {
                                                        if (input.charCodeAt(peg$currPos) === 93) {
                                                          s2 = peg$c89;
                                                          peg$currPos++;
                                                        } else {
                                                          s2 = peg$FAILED;
                                                          if (peg$silentFails === 0) {
                                                            peg$fail(peg$c90);
                                                          }
                                                        }
                                                        if (s2 === peg$FAILED) {
                                                          if (input.charCodeAt(peg$currPos) === 94) {
                                                            s2 = peg$c91;
                                                            peg$currPos++;
                                                          } else {
                                                            s2 = peg$FAILED;
                                                            if (peg$silentFails === 0) {
                                                              peg$fail(peg$c92);
                                                            }
                                                          }
                                                          if (s2 === peg$FAILED) {
                                                            if (input.charCodeAt(peg$currPos) === 95) {
                                                              s2 = peg$c93;
                                                              peg$currPos++;
                                                            } else {
                                                              s2 = peg$FAILED;
                                                              if (peg$silentFails === 0) {
                                                                peg$fail(peg$c94);
                                                              }
                                                            }
                                                            if (s2 === peg$FAILED) {
                                                              if (input.charCodeAt(peg$currPos) === 96) {
                                                                s2 = peg$c95;
                                                                peg$currPos++;
                                                              } else {
                                                                s2 = peg$FAILED;
                                                                if (peg$silentFails === 0) {
                                                                  peg$fail(peg$c96);
                                                                }
                                                              }
                                                              if (s2 === peg$FAILED) {
                                                                if (input.charCodeAt(peg$currPos) === 123) {
                                                                  s2 = peg$c97;
                                                                  peg$currPos++;
                                                                } else {
                                                                  s2 = peg$FAILED;
                                                                  if (peg$silentFails === 0) {
                                                                    peg$fail(peg$c98);
                                                                  }
                                                                }
                                                                if (s2 === peg$FAILED) {
                                                                  if (input.charCodeAt(peg$currPos) === 124) {
                                                                    s2 = peg$c99;
                                                                    peg$currPos++;
                                                                  } else {
                                                                    s2 = peg$FAILED;
                                                                    if (peg$silentFails === 0) {
                                                                      peg$fail(peg$c100);
                                                                    }
                                                                  }
                                                                  if (s2 === peg$FAILED) {
                                                                    if (input.charCodeAt(peg$currPos) === 125) {
                                                                      s2 = peg$c101;
                                                                      peg$currPos++;
                                                                    } else {
                                                                      s2 = peg$FAILED;
                                                                      if (peg$silentFails === 0) {
                                                                        peg$fail(peg$c102);
                                                                      }
                                                                    }
                                                                    if (s2 === peg$FAILED) {
                                                                      if (input.charCodeAt(peg$currPos) === 126) {
                                                                        s2 = peg$c103;
                                                                        peg$currPos++;
                                                                      } else {
                                                                        s2 = peg$FAILED;
                                                                        if (peg$silentFails === 0) {
                                                                          peg$fail(peg$c104);
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    } else {
      s1 = peg$FAILED;
    }
    if (s1 !== peg$FAILED) {
      peg$savedPos = peg$currPos;
      s2 = peg$c105(s1);
      if (s2) {
        s2 = void 0;
      } else {
        s2 = peg$FAILED;
      }
      if (s2 !== peg$FAILED) {
        s3 = [];
        s4 = peg$parseWhitespace();
        while (s4 !== peg$FAILED) {
          s3.push(s4);
          s4 = peg$parseWhitespace();
        }
        if (s3 !== peg$FAILED) {
          s4 = peg$parseNewline();
          if (s4 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c106(s1);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseTransition() {
    var s0, s1, s2, s3, s4, s5, s6;

    s0 = peg$currPos;
    s1 = peg$parseBlankLines();
    if (s1 === peg$FAILED) {
      s1 = null;
    }
    if (s1 !== peg$FAILED) {
      s2 = peg$parseTransitionMarker();
      if (s2 !== peg$FAILED) {
        s3 = [];
        s4 = peg$parseWhitespace();
        while (s4 !== peg$FAILED) {
          s3.push(s4);
          s4 = peg$parseWhitespace();
        }
        if (s3 !== peg$FAILED) {
          s4 = peg$parseNewline();
          if (s4 !== peg$FAILED) {
            s5 = peg$currPos;
            peg$silentFails++;
            s6 = peg$parseBlankLines();
            peg$silentFails--;
            if (s6 !== peg$FAILED) {
              peg$currPos = s5;
              s5 = void 0;
            } else {
              s5 = peg$FAILED;
            }
            if (s5 !== peg$FAILED) {
              peg$savedPos = s0;
              s1 = peg$c107(s1, s2);
              s0 = s1;
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseTransitionMarker() {
    var s0, s1, s2;

    s0 = peg$currPos;
    s1 = [];
    if (input.charCodeAt(peg$currPos) === 33) {
      s2 = peg$c41;
      peg$currPos++;
    } else {
      s2 = peg$FAILED;
      if (peg$silentFails === 0) {
        peg$fail(peg$c42);
      }
    }
    if (s2 === peg$FAILED) {
      if (input.charCodeAt(peg$currPos) === 34) {
        s2 = peg$c43;
        peg$currPos++;
      } else {
        s2 = peg$FAILED;
        if (peg$silentFails === 0) {
          peg$fail(peg$c44);
        }
      }
      if (s2 === peg$FAILED) {
        if (input.charCodeAt(peg$currPos) === 35) {
          s2 = peg$c45;
          peg$currPos++;
        } else {
          s2 = peg$FAILED;
          if (peg$silentFails === 0) {
            peg$fail(peg$c46);
          }
        }
        if (s2 === peg$FAILED) {
          if (input.charCodeAt(peg$currPos) === 36) {
            s2 = peg$c47;
            peg$currPos++;
          } else {
            s2 = peg$FAILED;
            if (peg$silentFails === 0) {
              peg$fail(peg$c48);
            }
          }
          if (s2 === peg$FAILED) {
            if (input.charCodeAt(peg$currPos) === 37) {
              s2 = peg$c49;
              peg$currPos++;
            } else {
              s2 = peg$FAILED;
              if (peg$silentFails === 0) {
                peg$fail(peg$c50);
              }
            }
            if (s2 === peg$FAILED) {
              if (input.charCodeAt(peg$currPos) === 38) {
                s2 = peg$c51;
                peg$currPos++;
              } else {
                s2 = peg$FAILED;
                if (peg$silentFails === 0) {
                  peg$fail(peg$c52);
                }
              }
              if (s2 === peg$FAILED) {
                if (input.charCodeAt(peg$currPos) === 39) {
                  s2 = peg$c53;
                  peg$currPos++;
                } else {
                  s2 = peg$FAILED;
                  if (peg$silentFails === 0) {
                    peg$fail(peg$c54);
                  }
                }
                if (s2 === peg$FAILED) {
                  if (input.charCodeAt(peg$currPos) === 40) {
                    s2 = peg$c55;
                    peg$currPos++;
                  } else {
                    s2 = peg$FAILED;
                    if (peg$silentFails === 0) {
                      peg$fail(peg$c56);
                    }
                  }
                  if (s2 === peg$FAILED) {
                    if (input.charCodeAt(peg$currPos) === 41) {
                      s2 = peg$c57;
                      peg$currPos++;
                    } else {
                      s2 = peg$FAILED;
                      if (peg$silentFails === 0) {
                        peg$fail(peg$c58);
                      }
                    }
                    if (s2 === peg$FAILED) {
                      if (input.charCodeAt(peg$currPos) === 42) {
                        s2 = peg$c59;
                        peg$currPos++;
                      } else {
                        s2 = peg$FAILED;
                        if (peg$silentFails === 0) {
                          peg$fail(peg$c60);
                        }
                      }
                      if (s2 === peg$FAILED) {
                        if (input.charCodeAt(peg$currPos) === 43) {
                          s2 = peg$c61;
                          peg$currPos++;
                        } else {
                          s2 = peg$FAILED;
                          if (peg$silentFails === 0) {
                            peg$fail(peg$c62);
                          }
                        }
                        if (s2 === peg$FAILED) {
                          if (input.charCodeAt(peg$currPos) === 44) {
                            s2 = peg$c63;
                            peg$currPos++;
                          } else {
                            s2 = peg$FAILED;
                            if (peg$silentFails === 0) {
                              peg$fail(peg$c64);
                            }
                          }
                          if (s2 === peg$FAILED) {
                            if (input.charCodeAt(peg$currPos) === 45) {
                              s2 = peg$c65;
                              peg$currPos++;
                            } else {
                              s2 = peg$FAILED;
                              if (peg$silentFails === 0) {
                                peg$fail(peg$c66);
                              }
                            }
                            if (s2 === peg$FAILED) {
                              if (input.charCodeAt(peg$currPos) === 46) {
                                s2 = peg$c67;
                                peg$currPos++;
                              } else {
                                s2 = peg$FAILED;
                                if (peg$silentFails === 0) {
                                  peg$fail(peg$c68);
                                }
                              }
                              if (s2 === peg$FAILED) {
                                if (input.charCodeAt(peg$currPos) === 47) {
                                  s2 = peg$c69;
                                  peg$currPos++;
                                } else {
                                  s2 = peg$FAILED;
                                  if (peg$silentFails === 0) {
                                    peg$fail(peg$c70);
                                  }
                                }
                                if (s2 === peg$FAILED) {
                                  if (input.charCodeAt(peg$currPos) === 58) {
                                    s2 = peg$c71;
                                    peg$currPos++;
                                  } else {
                                    s2 = peg$FAILED;
                                    if (peg$silentFails === 0) {
                                      peg$fail(peg$c72);
                                    }
                                  }
                                  if (s2 === peg$FAILED) {
                                    if (input.charCodeAt(peg$currPos) === 59) {
                                      s2 = peg$c73;
                                      peg$currPos++;
                                    } else {
                                      s2 = peg$FAILED;
                                      if (peg$silentFails === 0) {
                                        peg$fail(peg$c74);
                                      }
                                    }
                                    if (s2 === peg$FAILED) {
                                      if (input.charCodeAt(peg$currPos) === 60) {
                                        s2 = peg$c75;
                                        peg$currPos++;
                                      } else {
                                        s2 = peg$FAILED;
                                        if (peg$silentFails === 0) {
                                          peg$fail(peg$c76);
                                        }
                                      }
                                      if (s2 === peg$FAILED) {
                                        if (input.charCodeAt(peg$currPos) === 61) {
                                          s2 = peg$c77;
                                          peg$currPos++;
                                        } else {
                                          s2 = peg$FAILED;
                                          if (peg$silentFails === 0) {
                                            peg$fail(peg$c78);
                                          }
                                        }
                                        if (s2 === peg$FAILED) {
                                          if (input.charCodeAt(peg$currPos) === 62) {
                                            s2 = peg$c79;
                                            peg$currPos++;
                                          } else {
                                            s2 = peg$FAILED;
                                            if (peg$silentFails === 0) {
                                              peg$fail(peg$c80);
                                            }
                                          }
                                          if (s2 === peg$FAILED) {
                                            if (input.charCodeAt(peg$currPos) === 63) {
                                              s2 = peg$c81;
                                              peg$currPos++;
                                            } else {
                                              s2 = peg$FAILED;
                                              if (peg$silentFails === 0) {
                                                peg$fail(peg$c82);
                                              }
                                            }
                                            if (s2 === peg$FAILED) {
                                              if (input.charCodeAt(peg$currPos) === 64) {
                                                s2 = peg$c83;
                                                peg$currPos++;
                                              } else {
                                                s2 = peg$FAILED;
                                                if (peg$silentFails === 0) {
                                                  peg$fail(peg$c84);
                                                }
                                              }
                                              if (s2 === peg$FAILED) {
                                                if (input.charCodeAt(peg$currPos) === 91) {
                                                  s2 = peg$c85;
                                                  peg$currPos++;
                                                } else {
                                                  s2 = peg$FAILED;
                                                  if (peg$silentFails === 0) {
                                                    peg$fail(peg$c86);
                                                  }
                                                }
                                                if (s2 === peg$FAILED) {
                                                  if (input.charCodeAt(peg$currPos) === 92) {
                                                    s2 = peg$c87;
                                                    peg$currPos++;
                                                  } else {
                                                    s2 = peg$FAILED;
                                                    if (peg$silentFails === 0) {
                                                      peg$fail(peg$c88);
                                                    }
                                                  }
                                                  if (s2 === peg$FAILED) {
                                                    if (input.charCodeAt(peg$currPos) === 93) {
                                                      s2 = peg$c89;
                                                      peg$currPos++;
                                                    } else {
                                                      s2 = peg$FAILED;
                                                      if (peg$silentFails === 0) {
                                                        peg$fail(peg$c90);
                                                      }
                                                    }
                                                    if (s2 === peg$FAILED) {
                                                      if (input.charCodeAt(peg$currPos) === 94) {
                                                        s2 = peg$c91;
                                                        peg$currPos++;
                                                      } else {
                                                        s2 = peg$FAILED;
                                                        if (peg$silentFails === 0) {
                                                          peg$fail(peg$c92);
                                                        }
                                                      }
                                                      if (s2 === peg$FAILED) {
                                                        if (input.charCodeAt(peg$currPos) === 95) {
                                                          s2 = peg$c93;
                                                          peg$currPos++;
                                                        } else {
                                                          s2 = peg$FAILED;
                                                          if (peg$silentFails === 0) {
                                                            peg$fail(peg$c94);
                                                          }
                                                        }
                                                        if (s2 === peg$FAILED) {
                                                          if (input.charCodeAt(peg$currPos) === 96) {
                                                            s2 = peg$c95;
                                                            peg$currPos++;
                                                          } else {
                                                            s2 = peg$FAILED;
                                                            if (peg$silentFails === 0) {
                                                              peg$fail(peg$c96);
                                                            }
                                                          }
                                                          if (s2 === peg$FAILED) {
                                                            if (input.charCodeAt(peg$currPos) === 123) {
                                                              s2 = peg$c97;
                                                              peg$currPos++;
                                                            } else {
                                                              s2 = peg$FAILED;
                                                              if (peg$silentFails === 0) {
                                                                peg$fail(peg$c98);
                                                              }
                                                            }
                                                            if (s2 === peg$FAILED) {
                                                              if (input.charCodeAt(peg$currPos) === 124) {
                                                                s2 = peg$c99;
                                                                peg$currPos++;
                                                              } else {
                                                                s2 = peg$FAILED;
                                                                if (peg$silentFails === 0) {
                                                                  peg$fail(peg$c100);
                                                                }
                                                              }
                                                              if (s2 === peg$FAILED) {
                                                                if (input.charCodeAt(peg$currPos) === 125) {
                                                                  s2 = peg$c101;
                                                                  peg$currPos++;
                                                                } else {
                                                                  s2 = peg$FAILED;
                                                                  if (peg$silentFails === 0) {
                                                                    peg$fail(peg$c102);
                                                                  }
                                                                }
                                                                if (s2 === peg$FAILED) {
                                                                  if (input.charCodeAt(peg$currPos) === 126) {
                                                                    s2 = peg$c103;
                                                                    peg$currPos++;
                                                                  } else {
                                                                    s2 = peg$FAILED;
                                                                    if (peg$silentFails === 0) {
                                                                      peg$fail(peg$c104);
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    if (s2 !== peg$FAILED) {
      while (s2 !== peg$FAILED) {
        s1.push(s2);
        if (input.charCodeAt(peg$currPos) === 33) {
          s2 = peg$c41;
          peg$currPos++;
        } else {
          s2 = peg$FAILED;
          if (peg$silentFails === 0) {
            peg$fail(peg$c42);
          }
        }
        if (s2 === peg$FAILED) {
          if (input.charCodeAt(peg$currPos) === 34) {
            s2 = peg$c43;
            peg$currPos++;
          } else {
            s2 = peg$FAILED;
            if (peg$silentFails === 0) {
              peg$fail(peg$c44);
            }
          }
          if (s2 === peg$FAILED) {
            if (input.charCodeAt(peg$currPos) === 35) {
              s2 = peg$c45;
              peg$currPos++;
            } else {
              s2 = peg$FAILED;
              if (peg$silentFails === 0) {
                peg$fail(peg$c46);
              }
            }
            if (s2 === peg$FAILED) {
              if (input.charCodeAt(peg$currPos) === 36) {
                s2 = peg$c47;
                peg$currPos++;
              } else {
                s2 = peg$FAILED;
                if (peg$silentFails === 0) {
                  peg$fail(peg$c48);
                }
              }
              if (s2 === peg$FAILED) {
                if (input.charCodeAt(peg$currPos) === 37) {
                  s2 = peg$c49;
                  peg$currPos++;
                } else {
                  s2 = peg$FAILED;
                  if (peg$silentFails === 0) {
                    peg$fail(peg$c50);
                  }
                }
                if (s2 === peg$FAILED) {
                  if (input.charCodeAt(peg$currPos) === 38) {
                    s2 = peg$c51;
                    peg$currPos++;
                  } else {
                    s2 = peg$FAILED;
                    if (peg$silentFails === 0) {
                      peg$fail(peg$c52);
                    }
                  }
                  if (s2 === peg$FAILED) {
                    if (input.charCodeAt(peg$currPos) === 39) {
                      s2 = peg$c53;
                      peg$currPos++;
                    } else {
                      s2 = peg$FAILED;
                      if (peg$silentFails === 0) {
                        peg$fail(peg$c54);
                      }
                    }
                    if (s2 === peg$FAILED) {
                      if (input.charCodeAt(peg$currPos) === 40) {
                        s2 = peg$c55;
                        peg$currPos++;
                      } else {
                        s2 = peg$FAILED;
                        if (peg$silentFails === 0) {
                          peg$fail(peg$c56);
                        }
                      }
                      if (s2 === peg$FAILED) {
                        if (input.charCodeAt(peg$currPos) === 41) {
                          s2 = peg$c57;
                          peg$currPos++;
                        } else {
                          s2 = peg$FAILED;
                          if (peg$silentFails === 0) {
                            peg$fail(peg$c58);
                          }
                        }
                        if (s2 === peg$FAILED) {
                          if (input.charCodeAt(peg$currPos) === 42) {
                            s2 = peg$c59;
                            peg$currPos++;
                          } else {
                            s2 = peg$FAILED;
                            if (peg$silentFails === 0) {
                              peg$fail(peg$c60);
                            }
                          }
                          if (s2 === peg$FAILED) {
                            if (input.charCodeAt(peg$currPos) === 43) {
                              s2 = peg$c61;
                              peg$currPos++;
                            } else {
                              s2 = peg$FAILED;
                              if (peg$silentFails === 0) {
                                peg$fail(peg$c62);
                              }
                            }
                            if (s2 === peg$FAILED) {
                              if (input.charCodeAt(peg$currPos) === 44) {
                                s2 = peg$c63;
                                peg$currPos++;
                              } else {
                                s2 = peg$FAILED;
                                if (peg$silentFails === 0) {
                                  peg$fail(peg$c64);
                                }
                              }
                              if (s2 === peg$FAILED) {
                                if (input.charCodeAt(peg$currPos) === 45) {
                                  s2 = peg$c65;
                                  peg$currPos++;
                                } else {
                                  s2 = peg$FAILED;
                                  if (peg$silentFails === 0) {
                                    peg$fail(peg$c66);
                                  }
                                }
                                if (s2 === peg$FAILED) {
                                  if (input.charCodeAt(peg$currPos) === 46) {
                                    s2 = peg$c67;
                                    peg$currPos++;
                                  } else {
                                    s2 = peg$FAILED;
                                    if (peg$silentFails === 0) {
                                      peg$fail(peg$c68);
                                    }
                                  }
                                  if (s2 === peg$FAILED) {
                                    if (input.charCodeAt(peg$currPos) === 47) {
                                      s2 = peg$c69;
                                      peg$currPos++;
                                    } else {
                                      s2 = peg$FAILED;
                                      if (peg$silentFails === 0) {
                                        peg$fail(peg$c70);
                                      }
                                    }
                                    if (s2 === peg$FAILED) {
                                      if (input.charCodeAt(peg$currPos) === 58) {
                                        s2 = peg$c71;
                                        peg$currPos++;
                                      } else {
                                        s2 = peg$FAILED;
                                        if (peg$silentFails === 0) {
                                          peg$fail(peg$c72);
                                        }
                                      }
                                      if (s2 === peg$FAILED) {
                                        if (input.charCodeAt(peg$currPos) === 59) {
                                          s2 = peg$c73;
                                          peg$currPos++;
                                        } else {
                                          s2 = peg$FAILED;
                                          if (peg$silentFails === 0) {
                                            peg$fail(peg$c74);
                                          }
                                        }
                                        if (s2 === peg$FAILED) {
                                          if (input.charCodeAt(peg$currPos) === 60) {
                                            s2 = peg$c75;
                                            peg$currPos++;
                                          } else {
                                            s2 = peg$FAILED;
                                            if (peg$silentFails === 0) {
                                              peg$fail(peg$c76);
                                            }
                                          }
                                          if (s2 === peg$FAILED) {
                                            if (input.charCodeAt(peg$currPos) === 61) {
                                              s2 = peg$c77;
                                              peg$currPos++;
                                            } else {
                                              s2 = peg$FAILED;
                                              if (peg$silentFails === 0) {
                                                peg$fail(peg$c78);
                                              }
                                            }
                                            if (s2 === peg$FAILED) {
                                              if (input.charCodeAt(peg$currPos) === 62) {
                                                s2 = peg$c79;
                                                peg$currPos++;
                                              } else {
                                                s2 = peg$FAILED;
                                                if (peg$silentFails === 0) {
                                                  peg$fail(peg$c80);
                                                }
                                              }
                                              if (s2 === peg$FAILED) {
                                                if (input.charCodeAt(peg$currPos) === 63) {
                                                  s2 = peg$c81;
                                                  peg$currPos++;
                                                } else {
                                                  s2 = peg$FAILED;
                                                  if (peg$silentFails === 0) {
                                                    peg$fail(peg$c82);
                                                  }
                                                }
                                                if (s2 === peg$FAILED) {
                                                  if (input.charCodeAt(peg$currPos) === 64) {
                                                    s2 = peg$c83;
                                                    peg$currPos++;
                                                  } else {
                                                    s2 = peg$FAILED;
                                                    if (peg$silentFails === 0) {
                                                      peg$fail(peg$c84);
                                                    }
                                                  }
                                                  if (s2 === peg$FAILED) {
                                                    if (input.charCodeAt(peg$currPos) === 91) {
                                                      s2 = peg$c85;
                                                      peg$currPos++;
                                                    } else {
                                                      s2 = peg$FAILED;
                                                      if (peg$silentFails === 0) {
                                                        peg$fail(peg$c86);
                                                      }
                                                    }
                                                    if (s2 === peg$FAILED) {
                                                      if (input.charCodeAt(peg$currPos) === 92) {
                                                        s2 = peg$c87;
                                                        peg$currPos++;
                                                      } else {
                                                        s2 = peg$FAILED;
                                                        if (peg$silentFails === 0) {
                                                          peg$fail(peg$c88);
                                                        }
                                                      }
                                                      if (s2 === peg$FAILED) {
                                                        if (input.charCodeAt(peg$currPos) === 93) {
                                                          s2 = peg$c89;
                                                          peg$currPos++;
                                                        } else {
                                                          s2 = peg$FAILED;
                                                          if (peg$silentFails === 0) {
                                                            peg$fail(peg$c90);
                                                          }
                                                        }
                                                        if (s2 === peg$FAILED) {
                                                          if (input.charCodeAt(peg$currPos) === 94) {
                                                            s2 = peg$c91;
                                                            peg$currPos++;
                                                          } else {
                                                            s2 = peg$FAILED;
                                                            if (peg$silentFails === 0) {
                                                              peg$fail(peg$c92);
                                                            }
                                                          }
                                                          if (s2 === peg$FAILED) {
                                                            if (input.charCodeAt(peg$currPos) === 95) {
                                                              s2 = peg$c93;
                                                              peg$currPos++;
                                                            } else {
                                                              s2 = peg$FAILED;
                                                              if (peg$silentFails === 0) {
                                                                peg$fail(peg$c94);
                                                              }
                                                            }
                                                            if (s2 === peg$FAILED) {
                                                              if (input.charCodeAt(peg$currPos) === 96) {
                                                                s2 = peg$c95;
                                                                peg$currPos++;
                                                              } else {
                                                                s2 = peg$FAILED;
                                                                if (peg$silentFails === 0) {
                                                                  peg$fail(peg$c96);
                                                                }
                                                              }
                                                              if (s2 === peg$FAILED) {
                                                                if (input.charCodeAt(peg$currPos) === 123) {
                                                                  s2 = peg$c97;
                                                                  peg$currPos++;
                                                                } else {
                                                                  s2 = peg$FAILED;
                                                                  if (peg$silentFails === 0) {
                                                                    peg$fail(peg$c98);
                                                                  }
                                                                }
                                                                if (s2 === peg$FAILED) {
                                                                  if (input.charCodeAt(peg$currPos) === 124) {
                                                                    s2 = peg$c99;
                                                                    peg$currPos++;
                                                                  } else {
                                                                    s2 = peg$FAILED;
                                                                    if (peg$silentFails === 0) {
                                                                      peg$fail(peg$c100);
                                                                    }
                                                                  }
                                                                  if (s2 === peg$FAILED) {
                                                                    if (input.charCodeAt(peg$currPos) === 125) {
                                                                      s2 = peg$c101;
                                                                      peg$currPos++;
                                                                    } else {
                                                                      s2 = peg$FAILED;
                                                                      if (peg$silentFails === 0) {
                                                                        peg$fail(peg$c102);
                                                                      }
                                                                    }
                                                                    if (s2 === peg$FAILED) {
                                                                      if (input.charCodeAt(peg$currPos) === 126) {
                                                                        s2 = peg$c103;
                                                                        peg$currPos++;
                                                                      } else {
                                                                        s2 = peg$FAILED;
                                                                        if (peg$silentFails === 0) {
                                                                          peg$fail(peg$c104);
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    } else {
      s1 = peg$FAILED;
    }
    if (s1 !== peg$FAILED) {
      peg$savedPos = peg$currPos;
      s2 = peg$c108(s1);
      if (s2) {
        s2 = void 0;
      } else {
        s2 = peg$FAILED;
      }
      if (s2 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c109(s1);
        s0 = s1;
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseBodyElementExceptBlockQuote() {
    var s0, s1, s2;

    s0 = peg$currPos;
    s1 = peg$parseBlankLines();
    if (s1 === peg$FAILED) {
      s1 = null;
    }
    if (s1 !== peg$FAILED) {
      s2 = peg$parseDirective();
      if (s2 === peg$FAILED) {
        s2 = peg$parseComment();
        if (s2 === peg$FAILED) {
          s2 = peg$parseLiteralBlock();
          if (s2 === peg$FAILED) {
            s2 = peg$parseBulletList();
            if (s2 === peg$FAILED) {
              s2 = peg$parseEnumeratedList();
              if (s2 === peg$FAILED) {
                s2 = peg$parseDefinitionList();
                if (s2 === peg$FAILED) {
                  s2 = peg$parseLineBlock();
                  if (s2 === peg$FAILED) {
                    s2 = peg$parseParagraph();
                  }
                }
              }
            }
          }
        }
      }
      if (s2 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c110(s1, s2);
        s0 = s1;
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseBodyElement() {
    var s0, s1;

    s0 = peg$currPos;
    s1 = peg$parseBodyElementExceptBlockQuote();
    if (s1 === peg$FAILED) {
      s1 = peg$parseBlockQuote();
    }
    if (s1 !== peg$FAILED) {
      peg$savedPos = s0;
      s1 = peg$c111(s1);
    }
    s0 = s1;

    return s0;
  }

  function peg$parseListItem() {
    var s0, s1;

    s0 = peg$currPos;
    s1 = peg$parseNonEmptyListItem();
    if (s1 === peg$FAILED) {
      s1 = peg$parseEmptyListItem();
    }
    if (s1 !== peg$FAILED) {
      peg$savedPos = s0;
      s1 = peg$c112(s1);
    }
    s0 = s1;

    return s0;
  }

  function peg$parsePushListItemIndent$() {
    var s0, s1, s2, s3, s4, s5, s6;

    s0 = peg$currPos;
    s1 = peg$currPos;
    peg$silentFails++;
    s2 = peg$currPos;
    s3 = [];
    s4 = peg$parseWhitespace();
    if (s4 !== peg$FAILED) {
      while (s4 !== peg$FAILED) {
        s3.push(s4);
        s4 = peg$parseWhitespace();
      }
    } else {
      s3 = peg$FAILED;
    }
    if (s3 !== peg$FAILED) {
      s4 = peg$currPos;
      peg$silentFails++;
      s5 = peg$parseNonspacechar();
      peg$silentFails--;
      if (s5 !== peg$FAILED) {
        peg$currPos = s4;
        s4 = void 0;
      } else {
        s4 = peg$FAILED;
      }
      if (s4 !== peg$FAILED) {
        s5 = peg$parseSkipIndentCheck$();
        if (s5 !== peg$FAILED) {
          peg$savedPos = peg$currPos;
          s6 = peg$c113(s3);
          if (s6) {
            s6 = void 0;
          } else {
            s6 = peg$FAILED;
          }
          if (s6 !== peg$FAILED) {
            s3 = [s3, s4, s5, s6];
            s2 = s3;
          } else {
            peg$currPos = s2;
            s2 = peg$FAILED;
          }
        } else {
          peg$currPos = s2;
          s2 = peg$FAILED;
        }
      } else {
        peg$currPos = s2;
        s2 = peg$FAILED;
      }
    } else {
      peg$currPos = s2;
      s2 = peg$FAILED;
    }
    peg$silentFails--;
    if (s2 !== peg$FAILED) {
      peg$currPos = s1;
      s1 = void 0;
    } else {
      s1 = peg$FAILED;
    }
    if (s1 === peg$FAILED) {
      s1 = peg$currPos;
      peg$silentFails++;
      s2 = peg$currPos;
      s3 = peg$parseBlankLines();
      if (s3 !== peg$FAILED) {
        s4 = peg$parsePushFirstIndent$();
        if (s4 !== peg$FAILED) {
          s3 = [s3, s4];
          s2 = s3;
        } else {
          peg$currPos = s2;
          s2 = peg$FAILED;
        }
      } else {
        peg$currPos = s2;
        s2 = peg$FAILED;
      }
      peg$silentFails--;
      if (s2 !== peg$FAILED) {
        peg$currPos = s1;
        s1 = void 0;
      } else {
        s1 = peg$FAILED;
      }
    }
    if (s1 !== peg$FAILED) {
      peg$savedPos = s0;
      s1 = peg$c114();
    }
    s0 = s1;

    return s0;
  }

  function peg$parseNonEmptyListItem() {
    var s0, s1, s2, s3;

    s0 = peg$currPos;
    s1 = peg$parsePushListItemIndent$();
    if (s1 !== peg$FAILED) {
      s2 = [];
      s3 = peg$parseBodyElement();
      if (s3 !== peg$FAILED) {
        while (s3 !== peg$FAILED) {
          s2.push(s3);
          s3 = peg$parseBodyElement();
        }
      } else {
        s2 = peg$FAILED;
      }
      if (s2 === peg$FAILED) {
        s2 = peg$parseFailbackIndent$();
      }
      if (s2 !== peg$FAILED) {
        s3 = peg$parsePopIndent$();
        if (s3 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c115(s1, s2);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseEmptyListItem() {
    var s0, s1, s2;

    s0 = peg$currPos;
    s1 = [];
    s2 = peg$parseWhitespace();
    while (s2 !== peg$FAILED) {
      s1.push(s2);
      s2 = peg$parseWhitespace();
    }
    if (s1 !== peg$FAILED) {
      s2 = peg$parseEndline();
      if (s2 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c116();
        s0 = s1;
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseBulletList() {
    var s0, s1, s2, s3, s4;

    s0 = peg$currPos;
    s1 = peg$parsePushBullet$();
    if (s1 !== peg$FAILED) {
      s2 = [];
      s3 = peg$parseBulletListItem();
      if (s3 !== peg$FAILED) {
        while (s3 !== peg$FAILED) {
          s2.push(s3);
          s3 = peg$parseBulletListItem();
        }
      } else {
        s2 = peg$FAILED;
      }
      if (s2 === peg$FAILED) {
        s2 = peg$currPos;
        s3 = peg$parsePopBullet$();
        if (s3 !== peg$FAILED) {
          s4 = peg$parseFail$();
          if (s4 !== peg$FAILED) {
            s3 = [s3, s4];
            s2 = s3;
          } else {
            peg$currPos = s2;
            s2 = peg$FAILED;
          }
        } else {
          peg$currPos = s2;
          s2 = peg$FAILED;
        }
      }
      if (s2 !== peg$FAILED) {
        s3 = peg$parsePopBullet$();
        if (s3 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c117(s2);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseBullet() {
    var s0;

    if (peg$c118.test(input.charAt(peg$currPos))) {
      s0 = input.charAt(peg$currPos);
      peg$currPos++;
    } else {
      s0 = peg$FAILED;
      if (peg$silentFails === 0) {
        peg$fail(peg$c119);
      }
    }

    return s0;
  }

  function peg$parseSameBullet() {
    var s0, s1, s2;

    s0 = peg$currPos;
    s1 = peg$parseBullet();
    if (s1 !== peg$FAILED) {
      peg$savedPos = peg$currPos;
      s2 = peg$c120(s1);
      if (s2) {
        s2 = void 0;
      } else {
        s2 = peg$FAILED;
      }
      if (s2 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c121(s1);
        s0 = s1;
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parsePushBullet$() {
    var s0, s1, s2, s3, s4, s5;

    s0 = peg$currPos;
    peg$silentFails++;
    s1 = peg$currPos;
    s2 = peg$parseBlankLines();
    if (s2 === peg$FAILED) {
      s2 = null;
    }
    if (s2 !== peg$FAILED) {
      s3 = peg$parseSameIndent();
      if (s3 !== peg$FAILED) {
        s4 = peg$parseBullet();
        if (s4 !== peg$FAILED) {
          peg$savedPos = peg$currPos;
          s5 = peg$c122(s4);
          if (s5) {
            s5 = void 0;
          } else {
            s5 = peg$FAILED;
          }
          if (s5 !== peg$FAILED) {
            s2 = [s2, s3, s4, s5];
            s1 = s2;
          } else {
            peg$currPos = s1;
            s1 = peg$FAILED;
          }
        } else {
          peg$currPos = s1;
          s1 = peg$FAILED;
        }
      } else {
        peg$currPos = s1;
        s1 = peg$FAILED;
      }
    } else {
      peg$currPos = s1;
      s1 = peg$FAILED;
    }
    peg$silentFails--;
    if (s1 !== peg$FAILED) {
      peg$currPos = s0;
      s0 = void 0;
    } else {
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parsePopBullet$() {
    var s0;

    peg$savedPos = peg$currPos;
    s0 = peg$c123();
    if (s0) {
      s0 = void 0;
    } else {
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseBulletListItem() {
    var s0, s1, s2, s3, s4;

    s0 = peg$currPos;
    s1 = peg$parseBlankLines();
    if (s1 === peg$FAILED) {
      s1 = null;
    }
    if (s1 !== peg$FAILED) {
      s2 = peg$parseSameIndent();
      if (s2 !== peg$FAILED) {
        s3 = peg$parseSameBullet();
        if (s3 !== peg$FAILED) {
          s4 = peg$parseListItem();
          if (s4 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c124(s1, s3, s4);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseEnumeratedList() {
    var s0, s1, s2, s3, s4, s5;

    s0 = peg$currPos;
    s1 = peg$parseBeginEnumeratedList$();
    if (s1 !== peg$FAILED) {
      s2 = [];
      s3 = peg$parseEnumeratedListItem();
      if (s3 !== peg$FAILED) {
        while (s3 !== peg$FAILED) {
          s2.push(s3);
          s3 = peg$parseEnumeratedListItem();
        }
      } else {
        s2 = peg$FAILED;
      }
      if (s2 === peg$FAILED) {
        s2 = peg$currPos;
        s3 = peg$parseEndEnumeratedList$();
        if (s3 !== peg$FAILED) {
          s4 = peg$parseFail$();
          if (s4 !== peg$FAILED) {
            s3 = [s3, s4];
            s2 = s3;
          } else {
            peg$currPos = s2;
            s2 = peg$FAILED;
          }
        } else {
          peg$currPos = s2;
          s2 = peg$FAILED;
        }
      }
      if (s2 !== peg$FAILED) {
        s3 = peg$parseEndEnumeratedList$();
        if (s3 !== peg$FAILED) {
          s4 = peg$currPos;
          peg$silentFails++;
          s5 = peg$parseBlankLines();
          peg$silentFails--;
          if (s5 !== peg$FAILED) {
            peg$currPos = s4;
            s4 = void 0;
          } else {
            s4 = peg$FAILED;
          }
          if (s4 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c125(s2);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseBeginEnumeratedList$() {
    var s0, s1, s2, s3;

    s0 = peg$currPos;
    peg$silentFails++;
    s1 = peg$currPos;
    s2 = peg$parseBlankLines();
    if (s2 === peg$FAILED) {
      s2 = null;
    }
    if (s2 !== peg$FAILED) {
      peg$savedPos = peg$currPos;
      s3 = peg$c126();
      if (s3) {
        s3 = void 0;
      } else {
        s3 = peg$FAILED;
      }
      if (s3 !== peg$FAILED) {
        s2 = [s2, s3];
        s1 = s2;
      } else {
        peg$currPos = s1;
        s1 = peg$FAILED;
      }
    } else {
      peg$currPos = s1;
      s1 = peg$FAILED;
    }
    peg$silentFails--;
    if (s1 !== peg$FAILED) {
      peg$currPos = s0;
      s0 = void 0;
    } else {
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseEndEnumeratedList$() {
    var s0;

    peg$savedPos = peg$currPos;
    s0 = peg$c127();
    if (s0) {
      s0 = void 0;
    } else {
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseEnumeratedListItem() {
    var s0, s1, s2, s3, s4;

    s0 = peg$currPos;
    s1 = peg$parseBlankLines();
    if (s1 === peg$FAILED) {
      s1 = null;
    }
    if (s1 !== peg$FAILED) {
      s2 = peg$parseSameIndent();
      if (s2 !== peg$FAILED) {
        s3 = peg$parseNextEnumerator();
        if (s3 !== peg$FAILED) {
          s4 = peg$parseListItem();
          if (s4 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c128(s1, s3, s4);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseEnumerator() {
    var s0, s1, s2, s3;

    s0 = peg$currPos;
    s1 = peg$parseEnumerationSequence();
    if (s1 !== peg$FAILED) {
      if (input.charCodeAt(peg$currPos) === 46) {
        s2 = peg$c67;
        peg$currPos++;
      } else {
        s2 = peg$FAILED;
        if (peg$silentFails === 0) {
          peg$fail(peg$c68);
        }
      }
      if (s2 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c129(s1);
        s0 = s1;
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    if (s0 === peg$FAILED) {
      s0 = peg$currPos;
      s1 = peg$parseEnumerationSequence();
      if (s1 !== peg$FAILED) {
        if (input.charCodeAt(peg$currPos) === 41) {
          s2 = peg$c57;
          peg$currPos++;
        } else {
          s2 = peg$FAILED;
          if (peg$silentFails === 0) {
            peg$fail(peg$c58);
          }
        }
        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c130(s1);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
      if (s0 === peg$FAILED) {
        s0 = peg$currPos;
        if (input.charCodeAt(peg$currPos) === 40) {
          s1 = peg$c55;
          peg$currPos++;
        } else {
          s1 = peg$FAILED;
          if (peg$silentFails === 0) {
            peg$fail(peg$c56);
          }
        }
        if (s1 !== peg$FAILED) {
          s2 = peg$parseEnumerationSequence();
          if (s2 !== peg$FAILED) {
            if (input.charCodeAt(peg$currPos) === 41) {
              s3 = peg$c57;
              peg$currPos++;
            } else {
              s3 = peg$FAILED;
              if (peg$silentFails === 0) {
                peg$fail(peg$c58);
              }
            }
            if (s3 !== peg$FAILED) {
              peg$savedPos = s0;
              s1 = peg$c131(s2);
              s0 = s1;
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      }
    }

    return s0;
  }

  function peg$parseNextEnumerator() {
    var s0, s1, s2;

    s0 = peg$currPos;
    s1 = peg$parseEnumerator();
    if (s1 !== peg$FAILED) {
      peg$savedPos = peg$currPos;
      s2 = peg$c132(s1);
      if (s2) {
        s2 = void 0;
      } else {
        s2 = peg$FAILED;
      }
      if (s2 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c133(s1);
        s0 = s1;
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseEnumerationSequence() {
    var s0, s1, s2;

    s0 = peg$parseAutoEnumerationSequence();
    if (s0 === peg$FAILED) {
      s0 = peg$currPos;
      s1 = peg$parseAcceptNumeral$();
      if (s1 !== peg$FAILED) {
        s2 = peg$parseArabicNumeralsEnumerationSequence();
        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c133(s2);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
      if (s0 === peg$FAILED) {
        s0 = peg$currPos;
        s1 = peg$parseAcceptUpperCaseRoman$();
        if (s1 !== peg$FAILED) {
          s2 = peg$parseUpperCaseRomanEnumerationSequence();
          if (s2 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c133(s2);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
        if (s0 === peg$FAILED) {
          s0 = peg$currPos;
          s1 = peg$parseAcceptLowerCaseRoman$();
          if (s1 !== peg$FAILED) {
            s2 = peg$parseLowerCaseRomanEnumerationSequence();
            if (s2 !== peg$FAILED) {
              peg$savedPos = s0;
              s1 = peg$c133(s2);
              s0 = s1;
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
          if (s0 === peg$FAILED) {
            s0 = peg$currPos;
            s1 = peg$parseAcceptUpperCaseAlphabet$();
            if (s1 !== peg$FAILED) {
              s2 = peg$parseUpperCaseAlphabetEnumerationSequence();
              if (s2 !== peg$FAILED) {
                peg$savedPos = s0;
                s1 = peg$c133(s2);
                s0 = s1;
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
            if (s0 === peg$FAILED) {
              s0 = peg$currPos;
              s1 = peg$parseAcceptLowerCaseAlphabet$();
              if (s1 !== peg$FAILED) {
                s2 = peg$parseLowerCaseAlphabetEnumerationSequence();
                if (s2 !== peg$FAILED) {
                  peg$savedPos = s0;
                  s1 = peg$c133(s2);
                  s0 = s1;
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            }
          }
        }
      }
    }

    return s0;
  }

  function peg$parseAcceptNumeral$() {
    var s0;

    peg$savedPos = peg$currPos;
    s0 = peg$c134();
    if (s0) {
      s0 = void 0;
    } else {
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseAcceptUpperCaseRoman$() {
    var s0;

    peg$savedPos = peg$currPos;
    s0 = peg$c135();
    if (s0) {
      s0 = void 0;
    } else {
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseAcceptLowerCaseRoman$() {
    var s0;

    peg$savedPos = peg$currPos;
    s0 = peg$c136();
    if (s0) {
      s0 = void 0;
    } else {
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseAcceptUpperCaseAlphabet$() {
    var s0;

    peg$savedPos = peg$currPos;
    s0 = peg$c137();
    if (s0) {
      s0 = void 0;
    } else {
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseAcceptLowerCaseAlphabet$() {
    var s0;

    peg$savedPos = peg$currPos;
    s0 = peg$c138();
    if (s0) {
      s0 = void 0;
    } else {
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseAutoEnumerationSequence() {
    var s0, s1;

    s0 = peg$currPos;
    if (input.charCodeAt(peg$currPos) === 35) {
      s1 = peg$c45;
      peg$currPos++;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) {
        peg$fail(peg$c46);
      }
    }
    if (s1 !== peg$FAILED) {
      peg$savedPos = s0;
      s1 = peg$c139();
    }
    s0 = s1;

    return s0;
  }

  function peg$parseArabicNumeralsEnumerationSequence() {
    var s0, s1, s2, s3;

    s0 = peg$currPos;
    if (peg$c140.test(input.charAt(peg$currPos))) {
      s1 = input.charAt(peg$currPos);
      peg$currPos++;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) {
        peg$fail(peg$c141);
      }
    }
    if (s1 !== peg$FAILED) {
      s2 = [];
      if (peg$c142.test(input.charAt(peg$currPos))) {
        s3 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s3 = peg$FAILED;
        if (peg$silentFails === 0) {
          peg$fail(peg$c143);
        }
      }
      while (s3 !== peg$FAILED) {
        s2.push(s3);
        if (peg$c142.test(input.charAt(peg$currPos))) {
          s3 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s3 = peg$FAILED;
          if (peg$silentFails === 0) {
            peg$fail(peg$c143);
          }
        }
      }
      if (s2 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c144(s1, s2);
        s0 = s1;
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    if (s0 === peg$FAILED) {
      s0 = peg$currPos;
      if (peg$c145.test(input.charAt(peg$currPos))) {
        s1 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) {
          peg$fail(peg$c146);
        }
      }
      if (s1 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c147(s1);
      }
      s0 = s1;
    }

    return s0;
  }

  function peg$parseUpperCaseAlphabetEnumerationSequence() {
    var s0, s1;

    s0 = peg$currPos;
    if (peg$c148.test(input.charAt(peg$currPos))) {
      s1 = input.charAt(peg$currPos);
      peg$currPos++;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) {
        peg$fail(peg$c149);
      }
    }
    if (s1 !== peg$FAILED) {
      peg$savedPos = s0;
      s1 = peg$c150(s1);
    }
    s0 = s1;

    return s0;
  }

  function peg$parseLowerCaseAlphabetEnumerationSequence() {
    var s0, s1;

    s0 = peg$currPos;
    if (peg$c151.test(input.charAt(peg$currPos))) {
      s1 = input.charAt(peg$currPos);
      peg$currPos++;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) {
        peg$fail(peg$c152);
      }
    }
    if (s1 !== peg$FAILED) {
      peg$savedPos = s0;
      s1 = peg$c153(s1);
    }
    s0 = s1;

    return s0;
  }

  function peg$parseUpperCaseRomanEnumerationSequence() {
    var s0, s1, s2;

    s0 = peg$currPos;
    s1 = [];
    if (peg$c154.test(input.charAt(peg$currPos))) {
      s2 = input.charAt(peg$currPos);
      peg$currPos++;
    } else {
      s2 = peg$FAILED;
      if (peg$silentFails === 0) {
        peg$fail(peg$c155);
      }
    }
    if (s2 !== peg$FAILED) {
      while (s2 !== peg$FAILED) {
        s1.push(s2);
        if (peg$c154.test(input.charAt(peg$currPos))) {
          s2 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s2 = peg$FAILED;
          if (peg$silentFails === 0) {
            peg$fail(peg$c155);
          }
        }
      }
    } else {
      s1 = peg$FAILED;
    }
    if (s1 !== peg$FAILED) {
      peg$savedPos = peg$currPos;
      s2 = peg$c156(s1);
      if (s2) {
        s2 = void 0;
      } else {
        s2 = peg$FAILED;
      }
      if (s2 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c157(s1);
        s0 = s1;
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseLowerCaseRomanEnumerationSequence() {
    var s0, s1, s2;

    s0 = peg$currPos;
    s1 = [];
    if (peg$c158.test(input.charAt(peg$currPos))) {
      s2 = input.charAt(peg$currPos);
      peg$currPos++;
    } else {
      s2 = peg$FAILED;
      if (peg$silentFails === 0) {
        peg$fail(peg$c159);
      }
    }
    if (s2 !== peg$FAILED) {
      while (s2 !== peg$FAILED) {
        s1.push(s2);
        if (peg$c158.test(input.charAt(peg$currPos))) {
          s2 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s2 = peg$FAILED;
          if (peg$silentFails === 0) {
            peg$fail(peg$c159);
          }
        }
      }
    } else {
      s1 = peg$FAILED;
    }
    if (s1 !== peg$FAILED) {
      peg$savedPos = peg$currPos;
      s2 = peg$c160(s1);
      if (s2) {
        s2 = void 0;
      } else {
        s2 = peg$FAILED;
      }
      if (s2 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c161(s1);
        s0 = s1;
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseDefinitionList() {
    var s0, s1, s2, s3;

    s0 = peg$currPos;
    s1 = [];
    s2 = peg$parseDefinitionListItem();
    if (s2 !== peg$FAILED) {
      while (s2 !== peg$FAILED) {
        s1.push(s2);
        s2 = peg$parseDefinitionListItem();
      }
    } else {
      s1 = peg$FAILED;
    }
    if (s1 !== peg$FAILED) {
      s2 = peg$currPos;
      peg$silentFails++;
      s3 = peg$parseBlankLines();
      peg$silentFails--;
      if (s3 !== peg$FAILED) {
        peg$currPos = s2;
        s2 = void 0;
      } else {
        s2 = peg$FAILED;
      }
      if (s2 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c162(s1);
        s0 = s1;
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseDefinitionListItem() {
    var s0, s1, s2, s3, s4, s5, s6, s7, s8, s9;

    s0 = peg$currPos;
    s1 = peg$parseBlankLines();
    if (s1 === peg$FAILED) {
      s1 = null;
    }
    if (s1 !== peg$FAILED) {
      s2 = peg$parseSameIndent();
      if (s2 !== peg$FAILED) {
        s3 = peg$parseDefinitionTerm();
        if (s3 !== peg$FAILED) {
          s4 = [];
          s5 = peg$currPos;
          s6 = [];
          s7 = peg$parseWhitespace();
          if (s7 !== peg$FAILED) {
            while (s7 !== peg$FAILED) {
              s6.push(s7);
              s7 = peg$parseWhitespace();
            }
          } else {
            s6 = peg$FAILED;
          }
          if (s6 !== peg$FAILED) {
            if (input.charCodeAt(peg$currPos) === 58) {
              s7 = peg$c71;
              peg$currPos++;
            } else {
              s7 = peg$FAILED;
              if (peg$silentFails === 0) {
                peg$fail(peg$c72);
              }
            }
            if (s7 !== peg$FAILED) {
              s8 = [];
              s9 = peg$parseWhitespace();
              if (s9 !== peg$FAILED) {
                while (s9 !== peg$FAILED) {
                  s8.push(s9);
                  s9 = peg$parseWhitespace();
                }
              } else {
                s8 = peg$FAILED;
              }
              if (s8 !== peg$FAILED) {
                s9 = peg$parseDefinitionClassifier();
                if (s9 !== peg$FAILED) {
                  s6 = [s6, s7, s8, s9];
                  s5 = s6;
                } else {
                  peg$currPos = s5;
                  s5 = peg$FAILED;
                }
              } else {
                peg$currPos = s5;
                s5 = peg$FAILED;
              }
            } else {
              peg$currPos = s5;
              s5 = peg$FAILED;
            }
          } else {
            peg$currPos = s5;
            s5 = peg$FAILED;
          }
          while (s5 !== peg$FAILED) {
            s4.push(s5);
            s5 = peg$currPos;
            s6 = [];
            s7 = peg$parseWhitespace();
            if (s7 !== peg$FAILED) {
              while (s7 !== peg$FAILED) {
                s6.push(s7);
                s7 = peg$parseWhitespace();
              }
            } else {
              s6 = peg$FAILED;
            }
            if (s6 !== peg$FAILED) {
              if (input.charCodeAt(peg$currPos) === 58) {
                s7 = peg$c71;
                peg$currPos++;
              } else {
                s7 = peg$FAILED;
                if (peg$silentFails === 0) {
                  peg$fail(peg$c72);
                }
              }
              if (s7 !== peg$FAILED) {
                s8 = [];
                s9 = peg$parseWhitespace();
                if (s9 !== peg$FAILED) {
                  while (s9 !== peg$FAILED) {
                    s8.push(s9);
                    s9 = peg$parseWhitespace();
                  }
                } else {
                  s8 = peg$FAILED;
                }
                if (s8 !== peg$FAILED) {
                  s9 = peg$parseDefinitionClassifier();
                  if (s9 !== peg$FAILED) {
                    s6 = [s6, s7, s8, s9];
                    s5 = s6;
                  } else {
                    peg$currPos = s5;
                    s5 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s5;
                  s5 = peg$FAILED;
                }
              } else {
                peg$currPos = s5;
                s5 = peg$FAILED;
              }
            } else {
              peg$currPos = s5;
              s5 = peg$FAILED;
            }
          }
          if (s4 !== peg$FAILED) {
            s5 = [];
            s6 = peg$parseWhitespace();
            while (s6 !== peg$FAILED) {
              s5.push(s6);
              s6 = peg$parseWhitespace();
            }
            if (s5 !== peg$FAILED) {
              s6 = peg$parseNewline();
              if (s6 !== peg$FAILED) {
                s7 = peg$parsePushFirstIndent$();
                if (s7 !== peg$FAILED) {
                  s8 = peg$parseDefinitionListBody();
                  if (s8 === peg$FAILED) {
                    s8 = peg$parseFailbackIndent$();
                  }
                  if (s8 !== peg$FAILED) {
                    s9 = peg$parsePopIndent$();
                    if (s9 !== peg$FAILED) {
                      peg$savedPos = s0;
                      s1 = peg$c163(s1, s3, s4, s7, s8);
                      s0 = s1;
                    } else {
                      peg$currPos = s0;
                      s0 = peg$FAILED;
                    }
                  } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseDefinitionTerm() {
    var s0, s1, s2;

    s0 = peg$currPos;
    s1 = [];
    s2 = peg$parseInlineMarkupWithoutNewline();
    if (s2 === peg$FAILED) {
      s2 = peg$parseDefinitionTermText();
    }
    if (s2 !== peg$FAILED) {
      while (s2 !== peg$FAILED) {
        s1.push(s2);
        s2 = peg$parseInlineMarkupWithoutNewline();
        if (s2 === peg$FAILED) {
          s2 = peg$parseDefinitionTermText();
        }
      }
    } else {
      s1 = peg$FAILED;
    }
    if (s1 !== peg$FAILED) {
      peg$savedPos = s0;
      s1 = peg$c164(s1);
    }
    s0 = s1;

    return s0;
  }

  function peg$parseDefinitionListBody() {
    var s0, s1, s2;

    s0 = peg$currPos;
    s1 = [];
    s2 = peg$parseBodyElement();
    if (s2 !== peg$FAILED) {
      while (s2 !== peg$FAILED) {
        s1.push(s2);
        s2 = peg$parseBodyElement();
      }
    } else {
      s1 = peg$FAILED;
    }
    if (s1 !== peg$FAILED) {
      peg$savedPos = s0;
      s1 = peg$c165(s1);
    }
    s0 = s1;

    return s0;
  }

  function peg$parseDefinitionClassifierBeggining() {
    var s0, s1, s2, s3, s4;

    s0 = peg$currPos;
    s1 = [];
    s2 = peg$parseWhitespace();
    if (s2 !== peg$FAILED) {
      while (s2 !== peg$FAILED) {
        s1.push(s2);
        s2 = peg$parseWhitespace();
      }
    } else {
      s1 = peg$FAILED;
    }
    if (s1 !== peg$FAILED) {
      if (input.charCodeAt(peg$currPos) === 58) {
        s2 = peg$c71;
        peg$currPos++;
      } else {
        s2 = peg$FAILED;
        if (peg$silentFails === 0) {
          peg$fail(peg$c72);
        }
      }
      if (s2 !== peg$FAILED) {
        s3 = [];
        s4 = peg$parseWhitespace();
        if (s4 !== peg$FAILED) {
          while (s4 !== peg$FAILED) {
            s3.push(s4);
            s4 = peg$parseWhitespace();
          }
        } else {
          s3 = peg$FAILED;
        }
        if (s3 !== peg$FAILED) {
          s1 = [s1, s2, s3];
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseDefinitionTermText() {
    var s0, s1, s2, s3, s4, s5, s6;

    s0 = peg$currPos;
    s1 = [];
    s2 = peg$currPos;
    s3 = peg$currPos;
    peg$silentFails++;
    s4 = peg$parseEndline();
    peg$silentFails--;
    if (s4 === peg$FAILED) {
      s3 = void 0;
    } else {
      peg$currPos = s3;
      s3 = peg$FAILED;
    }
    if (s3 !== peg$FAILED) {
      s4 = peg$currPos;
      peg$silentFails++;
      s5 = peg$parseDefinitionClassifierBeggining();
      peg$silentFails--;
      if (s5 === peg$FAILED) {
        s4 = void 0;
      } else {
        peg$currPos = s4;
        s4 = peg$FAILED;
      }
      if (s4 !== peg$FAILED) {
        s5 = peg$currPos;
        peg$silentFails++;
        s6 = peg$parseInlineMarkupBeggining();
        peg$silentFails--;
        if (s6 === peg$FAILED) {
          s5 = void 0;
        } else {
          peg$currPos = s5;
          s5 = peg$FAILED;
        }
        if (s5 !== peg$FAILED) {
          if (input.length > peg$currPos) {
            s6 = input.charAt(peg$currPos);
            peg$currPos++;
          } else {
            s6 = peg$FAILED;
            if (peg$silentFails === 0) {
              peg$fail(peg$c2);
            }
          }
          if (s6 !== peg$FAILED) {
            s3 = [s3, s4, s5, s6];
            s2 = s3;
          } else {
            peg$currPos = s2;
            s2 = peg$FAILED;
          }
        } else {
          peg$currPos = s2;
          s2 = peg$FAILED;
        }
      } else {
        peg$currPos = s2;
        s2 = peg$FAILED;
      }
    } else {
      peg$currPos = s2;
      s2 = peg$FAILED;
    }
    if (s2 !== peg$FAILED) {
      while (s2 !== peg$FAILED) {
        s1.push(s2);
        s2 = peg$currPos;
        s3 = peg$currPos;
        peg$silentFails++;
        s4 = peg$parseEndline();
        peg$silentFails--;
        if (s4 === peg$FAILED) {
          s3 = void 0;
        } else {
          peg$currPos = s3;
          s3 = peg$FAILED;
        }
        if (s3 !== peg$FAILED) {
          s4 = peg$currPos;
          peg$silentFails++;
          s5 = peg$parseDefinitionClassifierBeggining();
          peg$silentFails--;
          if (s5 === peg$FAILED) {
            s4 = void 0;
          } else {
            peg$currPos = s4;
            s4 = peg$FAILED;
          }
          if (s4 !== peg$FAILED) {
            s5 = peg$currPos;
            peg$silentFails++;
            s6 = peg$parseInlineMarkupBeggining();
            peg$silentFails--;
            if (s6 === peg$FAILED) {
              s5 = void 0;
            } else {
              peg$currPos = s5;
              s5 = peg$FAILED;
            }
            if (s5 !== peg$FAILED) {
              if (input.length > peg$currPos) {
                s6 = input.charAt(peg$currPos);
                peg$currPos++;
              } else {
                s6 = peg$FAILED;
                if (peg$silentFails === 0) {
                  peg$fail(peg$c2);
                }
              }
              if (s6 !== peg$FAILED) {
                s3 = [s3, s4, s5, s6];
                s2 = s3;
              } else {
                peg$currPos = s2;
                s2 = peg$FAILED;
              }
            } else {
              peg$currPos = s2;
              s2 = peg$FAILED;
            }
          } else {
            peg$currPos = s2;
            s2 = peg$FAILED;
          }
        } else {
          peg$currPos = s2;
          s2 = peg$FAILED;
        }
      }
    } else {
      s1 = peg$FAILED;
    }
    if (s1 !== peg$FAILED) {
      peg$savedPos = s0;
      s1 = peg$c166(s1);
    }
    s0 = s1;

    return s0;
  }

  function peg$parseDefinitionClassifier() {
    var s0, s1, s2;

    s0 = peg$currPos;
    s1 = [];
    s2 = peg$parseInlineMarkupWithoutNewline();
    if (s2 === peg$FAILED) {
      s2 = peg$parseDefinitionTermText();
    }
    if (s2 !== peg$FAILED) {
      while (s2 !== peg$FAILED) {
        s1.push(s2);
        s2 = peg$parseInlineMarkupWithoutNewline();
        if (s2 === peg$FAILED) {
          s2 = peg$parseDefinitionTermText();
        }
      }
    } else {
      s1 = peg$FAILED;
    }
    if (s1 !== peg$FAILED) {
      peg$savedPos = s0;
      s1 = peg$c167(s1);
    }
    s0 = s1;

    return s0;
  }

  function peg$parseBlockQuote() {
    var s0;

    s0 = peg$parseNestedBlockQuote();
    if (s0 === peg$FAILED) {
      s0 = peg$parseSimpleBlockQuote();
    }

    return s0;
  }

  function peg$parseNestedBlockQuote() {
    var s0, s1, s2, s3, s4, s5, s6, s7;

    s0 = peg$currPos;
    s1 = peg$parseBlankLines();
    if (s1 === peg$FAILED) {
      s1 = null;
    }
    if (s1 !== peg$FAILED) {
      s2 = peg$parsePushFirstIndent$();
      if (s2 !== peg$FAILED) {
        s3 = peg$parseInnerBlockQuote();
        if (s3 !== peg$FAILED) {
          s4 = peg$currPos;
          peg$silentFails++;
          s5 = peg$currPos;
          s6 = peg$parseBlankLines();
          if (s6 !== peg$FAILED) {
            s7 = peg$parseShallowIndent();
            if (s7 !== peg$FAILED) {
              s6 = [s6, s7];
              s5 = s6;
            } else {
              peg$currPos = s5;
              s5 = peg$FAILED;
            }
          } else {
            peg$currPos = s5;
            s5 = peg$FAILED;
          }
          if (s5 === peg$FAILED) {
            s5 = peg$parseFailbackIndent$();
          }
          peg$silentFails--;
          if (s5 !== peg$FAILED) {
            peg$currPos = s4;
            s4 = void 0;
          } else {
            s4 = peg$FAILED;
          }
          if (s4 !== peg$FAILED) {
            s5 = peg$parsePopIndent$();
            if (s5 !== peg$FAILED) {
              s6 = peg$parseBlockQuote();
              if (s6 !== peg$FAILED) {
                peg$savedPos = s0;
                s1 = peg$c168(s1, s2, s3, s6);
                s0 = s1;
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseInnerBlockQuote() {
    var s0, s1, s2;

    s0 = peg$currPos;
    s1 = peg$parseBlockQuoteBody();
    if (s1 === peg$FAILED) {
      s1 = peg$parseFailbackIndent$();
    }
    if (s1 !== peg$FAILED) {
      s2 = peg$parseAttribution();
      if (s2 === peg$FAILED) {
        s2 = null;
      }
      if (s2 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c169(s1, s2);
        s0 = s1;
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseSimpleBlockQuote() {
    var s0, s1, s2, s3, s4, s5;

    s0 = peg$currPos;
    s1 = peg$parseBlankLines();
    if (s1 === peg$FAILED) {
      s1 = null;
    }
    if (s1 !== peg$FAILED) {
      s2 = peg$parsePushFirstIndent$();
      if (s2 !== peg$FAILED) {
        s3 = peg$parseBlockQuoteBody();
        if (s3 === peg$FAILED) {
          s3 = peg$parseFailbackIndent$();
        }
        if (s3 !== peg$FAILED) {
          s4 = peg$parseAttribution();
          if (s4 === peg$FAILED) {
            s4 = null;
          }
          if (s4 !== peg$FAILED) {
            s5 = peg$parsePopIndent$();
            if (s5 !== peg$FAILED) {
              peg$savedPos = s0;
              s1 = peg$c170(s1, s2, s3, s4);
              s0 = s1;
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseBlockQuoteBody() {
    var s0, s1, s2, s3, s4, s5;

    s0 = peg$currPos;
    s1 = peg$parseBodyElementExceptBlockQuote();
    if (s1 !== peg$FAILED) {
      s2 = [];
      s3 = peg$currPos;
      s4 = peg$currPos;
      peg$silentFails++;
      s5 = peg$parseAttribution();
      peg$silentFails--;
      if (s5 === peg$FAILED) {
        s4 = void 0;
      } else {
        peg$currPos = s4;
        s4 = peg$FAILED;
      }
      if (s4 !== peg$FAILED) {
        s5 = peg$parseBodyElement();
        if (s5 !== peg$FAILED) {
          s4 = [s4, s5];
          s3 = s4;
        } else {
          peg$currPos = s3;
          s3 = peg$FAILED;
        }
      } else {
        peg$currPos = s3;
        s3 = peg$FAILED;
      }
      while (s3 !== peg$FAILED) {
        s2.push(s3);
        s3 = peg$currPos;
        s4 = peg$currPos;
        peg$silentFails++;
        s5 = peg$parseAttribution();
        peg$silentFails--;
        if (s5 === peg$FAILED) {
          s4 = void 0;
        } else {
          peg$currPos = s4;
          s4 = peg$FAILED;
        }
        if (s4 !== peg$FAILED) {
          s5 = peg$parseBodyElement();
          if (s5 !== peg$FAILED) {
            s4 = [s4, s5];
            s3 = s4;
          } else {
            peg$currPos = s3;
            s3 = peg$FAILED;
          }
        } else {
          peg$currPos = s3;
          s3 = peg$FAILED;
        }
      }
      if (s2 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c171(s1, s2);
        s0 = s1;
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseAttribution() {
    var s0, s1, s2, s3, s4, s5, s6, s7, s8;

    s0 = peg$currPos;
    s1 = peg$parseBlankLines();
    if (s1 !== peg$FAILED) {
      s2 = peg$parseSameIndent();
      if (s2 !== peg$FAILED) {
        if (input.substr(peg$currPos, 3) === peg$c172) {
          s3 = peg$c172;
          peg$currPos += 3;
        } else {
          s3 = peg$FAILED;
          if (peg$silentFails === 0) {
            peg$fail(peg$c173);
          }
        }
        if (s3 === peg$FAILED) {
          if (input.substr(peg$currPos, 2) === peg$c174) {
            s3 = peg$c174;
            peg$currPos += 2;
          } else {
            s3 = peg$FAILED;
            if (peg$silentFails === 0) {
              peg$fail(peg$c175);
            }
          }
          if (s3 === peg$FAILED) {
            if (input.charCodeAt(peg$currPos) === 8212) {
              s3 = peg$c176;
              peg$currPos++;
            } else {
              s3 = peg$FAILED;
              if (peg$silentFails === 0) {
                peg$fail(peg$c177);
              }
            }
          }
        }
        if (s3 !== peg$FAILED) {
          s4 = [];
          s5 = peg$parseWhitespace();
          while (s5 !== peg$FAILED) {
            s4.push(s5);
            s5 = peg$parseWhitespace();
          }
          if (s4 !== peg$FAILED) {
            s5 = peg$currPos;
            peg$silentFails++;
            s6 = peg$currPos;
            s7 = peg$currPos;
            peg$silentFails++;
            s8 = peg$parseEndline();
            peg$silentFails--;
            if (s8 === peg$FAILED) {
              s7 = void 0;
            } else {
              peg$currPos = s7;
              s7 = peg$FAILED;
            }
            if (s7 !== peg$FAILED) {
              if (input.length > peg$currPos) {
                s8 = input.charAt(peg$currPos);
                peg$currPos++;
              } else {
                s8 = peg$FAILED;
                if (peg$silentFails === 0) {
                  peg$fail(peg$c2);
                }
              }
              if (s8 !== peg$FAILED) {
                s7 = [s7, s8];
                s6 = s7;
              } else {
                peg$currPos = s6;
                s6 = peg$FAILED;
              }
            } else {
              peg$currPos = s6;
              s6 = peg$FAILED;
            }
            peg$silentFails--;
            if (s6 !== peg$FAILED) {
              peg$currPos = s5;
              s5 = void 0;
            } else {
              s5 = peg$FAILED;
            }
            if (s5 !== peg$FAILED) {
              s6 = peg$parseAttributionBodyWithIndent();
              if (s6 === peg$FAILED) {
                s6 = peg$parseAttributionBodyWithoutIndent();
              }
              if (s6 !== peg$FAILED) {
                peg$savedPos = s0;
                s1 = peg$c178(s1, s6);
                s0 = s1;
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parsePushAttributionIndent$() {
    var s0, s1, s2, s3;

    s0 = peg$currPos;
    peg$silentFails++;
    s1 = peg$currPos;
    s2 = peg$parseRawLine();
    if (s2 !== peg$FAILED) {
      s3 = peg$parsePushFirstIndent$();
      if (s3 !== peg$FAILED) {
        s2 = [s2, s3];
        s1 = s2;
      } else {
        peg$currPos = s1;
        s1 = peg$FAILED;
      }
    } else {
      peg$currPos = s1;
      s1 = peg$FAILED;
    }
    peg$silentFails--;
    if (s1 !== peg$FAILED) {
      peg$currPos = s0;
      s0 = void 0;
    } else {
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseAttributionBodyWithIndent() {
    var s0, s1, s2, s3, s4;

    s0 = peg$currPos;
    s1 = peg$parsePushAttributionIndent$();
    if (s1 !== peg$FAILED) {
      s2 = peg$parseSkipIndentCheck$();
      if (s2 !== peg$FAILED) {
        s3 = peg$parseParagraph();
        if (s3 === peg$FAILED) {
          s3 = peg$parseFailbackIndent$();
        }
        if (s3 !== peg$FAILED) {
          s4 = peg$parsePopIndent$();
          if (s4 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c179(s3);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseAttributionBodyWithoutIndent() {
    var s0, s1, s2;

    s0 = peg$currPos;
    s1 = peg$parseSkipIndentCheck$();
    if (s1 !== peg$FAILED) {
      s2 = peg$parseParagraph();
      if (s2 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c180(s2);
        s0 = s1;
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseComment() {
    var s0;

    s0 = peg$parseCommentStartFromFirstLine();
    if (s0 === peg$FAILED) {
      s0 = peg$parseCommentStartFromNextLine();
    }

    return s0;
  }

  function peg$parseCommentStartFromFirstLine() {
    var s0, s1, s2, s3, s4, s5, s6, s7, s8;

    s0 = peg$currPos;
    s1 = peg$parseSameIndent();
    if (s1 !== peg$FAILED) {
      if (input.substr(peg$currPos, 2) === peg$c181) {
        s2 = peg$c181;
        peg$currPos += 2;
      } else {
        s2 = peg$FAILED;
        if (peg$silentFails === 0) {
          peg$fail(peg$c182);
        }
      }
      if (s2 !== peg$FAILED) {
        s3 = [];
        s4 = peg$parseWhitespace();
        if (s4 !== peg$FAILED) {
          while (s4 !== peg$FAILED) {
            s3.push(s4);
            s4 = peg$parseWhitespace();
          }
        } else {
          s3 = peg$FAILED;
        }
        if (s3 !== peg$FAILED) {
          s4 = peg$currPos;
          peg$silentFails++;
          s5 = peg$parseNonspacechar();
          peg$silentFails--;
          if (s5 !== peg$FAILED) {
            peg$currPos = s4;
            s4 = void 0;
          } else {
            s4 = peg$FAILED;
          }
          if (s4 !== peg$FAILED) {
            s5 = peg$parseRawLine();
            if (s5 !== peg$FAILED) {
              s6 = peg$currPos;
              s7 = peg$parseBlankLines();
              if (s7 === peg$FAILED) {
                s7 = null;
              }
              if (s7 !== peg$FAILED) {
                s8 = peg$parseCommentBlock();
                if (s8 !== peg$FAILED) {
                  s7 = [s7, s8];
                  s6 = s7;
                } else {
                  peg$currPos = s6;
                  s6 = peg$FAILED;
                }
              } else {
                peg$currPos = s6;
                s6 = peg$FAILED;
              }
              if (s6 === peg$FAILED) {
                s6 = null;
              }
              if (s6 !== peg$FAILED) {
                peg$savedPos = s0;
                s1 = peg$c183(s5, s6);
                s0 = s1;
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseCommentStartFromNextLine() {
    var s0, s1, s2, s3, s4, s5;

    s0 = peg$currPos;
    s1 = peg$parseSameIndent();
    if (s1 !== peg$FAILED) {
      if (input.substr(peg$currPos, 2) === peg$c181) {
        s2 = peg$c181;
        peg$currPos += 2;
      } else {
        s2 = peg$FAILED;
        if (peg$silentFails === 0) {
          peg$fail(peg$c182);
        }
      }
      if (s2 !== peg$FAILED) {
        s3 = [];
        s4 = peg$parseWhitespace();
        while (s4 !== peg$FAILED) {
          s3.push(s4);
          s4 = peg$parseWhitespace();
        }
        if (s3 !== peg$FAILED) {
          s4 = peg$parseNewline();
          if (s4 !== peg$FAILED) {
            s5 = peg$parseCommentBlock();
            if (s5 === peg$FAILED) {
              s5 = null;
            }
            if (s5 !== peg$FAILED) {
              peg$savedPos = s0;
              s1 = peg$c184(s5);
              s0 = s1;
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseCommentBlock() {
    var s0, s1, s2, s3, s4, s5;

    s0 = peg$currPos;
    s1 = peg$parsePushCommonIndent$();
    if (s1 !== peg$FAILED) {
      s2 = [];
      s3 = peg$currPos;
      s4 = [];
      s5 = peg$parseWhitespace();
      while (s5 !== peg$FAILED) {
        s4.push(s5);
        s5 = peg$parseWhitespace();
      }
      if (s4 !== peg$FAILED) {
        s5 = peg$parseNewline();
        if (s5 !== peg$FAILED) {
          peg$savedPos = s3;
          s4 = peg$c185(s1);
          s3 = s4;
        } else {
          peg$currPos = s3;
          s3 = peg$FAILED;
        }
      } else {
        peg$currPos = s3;
        s3 = peg$FAILED;
      }
      if (s3 === peg$FAILED) {
        s3 = peg$currPos;
        s4 = peg$parseSameOrDeepIndent();
        if (s4 !== peg$FAILED) {
          s5 = peg$parseNotEmptyRawLine();
          if (s5 !== peg$FAILED) {
            s4 = [s4, s5];
            s3 = s4;
          } else {
            peg$currPos = s3;
            s3 = peg$FAILED;
          }
        } else {
          peg$currPos = s3;
          s3 = peg$FAILED;
        }
      }
      if (s3 !== peg$FAILED) {
        while (s3 !== peg$FAILED) {
          s2.push(s3);
          s3 = peg$currPos;
          s4 = [];
          s5 = peg$parseWhitespace();
          while (s5 !== peg$FAILED) {
            s4.push(s5);
            s5 = peg$parseWhitespace();
          }
          if (s4 !== peg$FAILED) {
            s5 = peg$parseNewline();
            if (s5 !== peg$FAILED) {
              peg$savedPos = s3;
              s4 = peg$c185(s1);
              s3 = s4;
            } else {
              peg$currPos = s3;
              s3 = peg$FAILED;
            }
          } else {
            peg$currPos = s3;
            s3 = peg$FAILED;
          }
          if (s3 === peg$FAILED) {
            s3 = peg$currPos;
            s4 = peg$parseSameOrDeepIndent();
            if (s4 !== peg$FAILED) {
              s5 = peg$parseNotEmptyRawLine();
              if (s5 !== peg$FAILED) {
                s4 = [s4, s5];
                s3 = s4;
              } else {
                peg$currPos = s3;
                s3 = peg$FAILED;
              }
            } else {
              peg$currPos = s3;
              s3 = peg$FAILED;
            }
          }
        }
      } else {
        s2 = peg$FAILED;
      }
      if (s2 === peg$FAILED) {
        s2 = peg$parseFailbackIndent$();
      }
      if (s2 !== peg$FAILED) {
        s3 = peg$parsePopIndent$();
        if (s3 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c186(s1, s2);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseInlineMarkupFollowing() {
    var s0, s1, s2;

    s0 = peg$parseEndline();
    if (s0 === peg$FAILED) {
      s0 = peg$currPos;
      if (input.length > peg$currPos) {
        s1 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) {
          peg$fail(peg$c2);
        }
      }
      if (s1 !== peg$FAILED) {
        peg$savedPos = peg$currPos;
        s2 = peg$c187(s1);
        if (s2) {
          s2 = void 0;
        } else {
          s2 = peg$FAILED;
        }
        if (s2 !== peg$FAILED) {
          s1 = [s1, s2];
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    }

    return s0;
  }

  function peg$parseInlineMarkup() {
    var s0;

    s0 = peg$parseStrongEmphasis();
    if (s0 === peg$FAILED) {
      s0 = peg$parseEmphasis();
      if (s0 === peg$FAILED) {
        s0 = peg$parseInlineLiteral();
        if (s0 === peg$FAILED) {
          s0 = peg$parseInlineInternalTarget();
          if (s0 === peg$FAILED) {
            s0 = peg$parseHyperlinkReference();
            if (s0 === peg$FAILED) {
              s0 = peg$parseInterpretedText();
              if (s0 === peg$FAILED) {
                s0 = peg$parseSubstitutionReference();
                if (s0 === peg$FAILED) {
                  s0 = peg$parseFootnoteReference();
                  if (s0 === peg$FAILED) {
                    s0 = peg$parseCitationReference();
                  }
                }
              }
            }
          }
        }
      }
    }

    return s0;
  }

  function peg$parseInlineMarkupWithoutNewline() {
    var s0;

    s0 = peg$parseStrongEmphasisWithoutNewline();
    if (s0 === peg$FAILED) {
      s0 = peg$parseEmphasisWithoutNewline();
      if (s0 === peg$FAILED) {
        s0 = peg$parseInlineLiteralWithoutNewline();
      }
    }

    return s0;
  }

  function peg$parseMarkupEndString() {
    var s0, s1, s2, s3, s4, s5;

    s0 = peg$currPos;
    peg$savedPos = peg$currPos;
    s1 = peg$c188();
    if (s1) {
      s1 = void 0;
    } else {
      s1 = peg$FAILED;
    }
    if (s1 !== peg$FAILED) {
      if (input.length > peg$currPos) {
        s2 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s2 = peg$FAILED;
        if (peg$silentFails === 0) {
          peg$fail(peg$c2);
        }
      }
      if (s2 !== peg$FAILED) {
        peg$savedPos = peg$currPos;
        s3 = peg$c189(s2);
        if (s3) {
          s3 = void 0;
        } else {
          s3 = peg$FAILED;
        }
        if (s3 !== peg$FAILED) {
          s1 = [s1, s2, s3];
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    if (s0 === peg$FAILED) {
      s0 = peg$currPos;
      peg$savedPos = peg$currPos;
      s1 = peg$c190();
      if (s1) {
        s1 = void 0;
      } else {
        s1 = peg$FAILED;
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$currPos;
        if (input.length > peg$currPos) {
          s3 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s3 = peg$FAILED;
          if (peg$silentFails === 0) {
            peg$fail(peg$c2);
          }
        }
        if (s3 !== peg$FAILED) {
          if (input.length > peg$currPos) {
            s4 = input.charAt(peg$currPos);
            peg$currPos++;
          } else {
            s4 = peg$FAILED;
            if (peg$silentFails === 0) {
              peg$fail(peg$c2);
            }
          }
          if (s4 !== peg$FAILED) {
            s3 = [s3, s4];
            s2 = s3;
          } else {
            peg$currPos = s2;
            s2 = peg$FAILED;
          }
        } else {
          peg$currPos = s2;
          s2 = peg$FAILED;
        }
        if (s2 !== peg$FAILED) {
          peg$savedPos = peg$currPos;
          s3 = peg$c191(s2);
          if (s3) {
            s3 = void 0;
          } else {
            s3 = peg$FAILED;
          }
          if (s3 !== peg$FAILED) {
            s1 = [s1, s2, s3];
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
      if (s0 === peg$FAILED) {
        s0 = peg$currPos;
        peg$savedPos = peg$currPos;
        s1 = peg$c192();
        if (s1) {
          s1 = void 0;
        } else {
          s1 = peg$FAILED;
        }
        if (s1 !== peg$FAILED) {
          s2 = peg$currPos;
          if (input.length > peg$currPos) {
            s3 = input.charAt(peg$currPos);
            peg$currPos++;
          } else {
            s3 = peg$FAILED;
            if (peg$silentFails === 0) {
              peg$fail(peg$c2);
            }
          }
          if (s3 !== peg$FAILED) {
            if (input.length > peg$currPos) {
              s4 = input.charAt(peg$currPos);
              peg$currPos++;
            } else {
              s4 = peg$FAILED;
              if (peg$silentFails === 0) {
                peg$fail(peg$c2);
              }
            }
            if (s4 !== peg$FAILED) {
              if (input.length > peg$currPos) {
                s5 = input.charAt(peg$currPos);
                peg$currPos++;
              } else {
                s5 = peg$FAILED;
                if (peg$silentFails === 0) {
                  peg$fail(peg$c2);
                }
              }
              if (s5 !== peg$FAILED) {
                s3 = [s3, s4, s5];
                s2 = s3;
              } else {
                peg$currPos = s2;
                s2 = peg$FAILED;
              }
            } else {
              peg$currPos = s2;
              s2 = peg$FAILED;
            }
          } else {
            peg$currPos = s2;
            s2 = peg$FAILED;
          }
          if (s2 !== peg$FAILED) {
            peg$savedPos = peg$currPos;
            s3 = peg$c191(s2);
            if (s3) {
              s3 = void 0;
            } else {
              s3 = peg$FAILED;
            }
            if (s3 !== peg$FAILED) {
              s1 = [s1, s2, s3];
              s0 = s1;
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      }
    }

    return s0;
  }

  function peg$parseMarkupTextWithoutNewline() {
    var s0, s1, s2, s3, s4, s5, s6, s7, s8, s9, s10;

    s0 = peg$currPos;
    s1 = [];
    s2 = peg$currPos;
    s3 = peg$currPos;
    peg$silentFails++;
    s4 = peg$parseNewline();
    peg$silentFails--;
    if (s4 === peg$FAILED) {
      s3 = void 0;
    } else {
      peg$currPos = s3;
      s3 = peg$FAILED;
    }
    if (s3 !== peg$FAILED) {
      s4 = peg$currPos;
      peg$silentFails++;
      s5 = peg$currPos;
      s6 = peg$currPos;
      peg$silentFails++;
      s7 = peg$parseNormalizedToWhitespace();
      peg$silentFails--;
      if (s7 === peg$FAILED) {
        s6 = void 0;
      } else {
        peg$currPos = s6;
        s6 = peg$FAILED;
      }
      if (s6 !== peg$FAILED) {
        peg$savedPos = peg$currPos;
        s7 = peg$c193();
        if (s7) {
          s7 = void 0;
        } else {
          s7 = peg$FAILED;
        }
        if (s7 === peg$FAILED) {
          s7 = peg$currPos;
          peg$silentFails++;
          if (input.charCodeAt(peg$currPos) === 92) {
            s8 = peg$c87;
            peg$currPos++;
          } else {
            s8 = peg$FAILED;
            if (peg$silentFails === 0) {
              peg$fail(peg$c88);
            }
          }
          peg$silentFails--;
          if (s8 === peg$FAILED) {
            s7 = void 0;
          } else {
            peg$currPos = s7;
            s7 = peg$FAILED;
          }
        }
        if (s7 !== peg$FAILED) {
          if (input.length > peg$currPos) {
            s8 = input.charAt(peg$currPos);
            peg$currPos++;
          } else {
            s8 = peg$FAILED;
            if (peg$silentFails === 0) {
              peg$fail(peg$c2);
            }
          }
          if (s8 !== peg$FAILED) {
            s9 = peg$parseMarkupEndString();
            if (s9 !== peg$FAILED) {
              s10 = peg$parseInlineMarkupFollowing();
              if (s10 !== peg$FAILED) {
                s6 = [s6, s7, s8, s9, s10];
                s5 = s6;
              } else {
                peg$currPos = s5;
                s5 = peg$FAILED;
              }
            } else {
              peg$currPos = s5;
              s5 = peg$FAILED;
            }
          } else {
            peg$currPos = s5;
            s5 = peg$FAILED;
          }
        } else {
          peg$currPos = s5;
          s5 = peg$FAILED;
        }
      } else {
        peg$currPos = s5;
        s5 = peg$FAILED;
      }
      peg$silentFails--;
      if (s5 === peg$FAILED) {
        s4 = void 0;
      } else {
        peg$currPos = s4;
        s4 = peg$FAILED;
      }
      if (s4 !== peg$FAILED) {
        if (input.length > peg$currPos) {
          s5 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s5 = peg$FAILED;
          if (peg$silentFails === 0) {
            peg$fail(peg$c2);
          }
        }
        if (s5 !== peg$FAILED) {
          s3 = [s3, s4, s5];
          s2 = s3;
        } else {
          peg$currPos = s2;
          s2 = peg$FAILED;
        }
      } else {
        peg$currPos = s2;
        s2 = peg$FAILED;
      }
    } else {
      peg$currPos = s2;
      s2 = peg$FAILED;
    }
    if (s2 !== peg$FAILED) {
      while (s2 !== peg$FAILED) {
        s1.push(s2);
        s2 = peg$currPos;
        s3 = peg$currPos;
        peg$silentFails++;
        s4 = peg$parseNewline();
        peg$silentFails--;
        if (s4 === peg$FAILED) {
          s3 = void 0;
        } else {
          peg$currPos = s3;
          s3 = peg$FAILED;
        }
        if (s3 !== peg$FAILED) {
          s4 = peg$currPos;
          peg$silentFails++;
          s5 = peg$currPos;
          s6 = peg$currPos;
          peg$silentFails++;
          s7 = peg$parseNormalizedToWhitespace();
          peg$silentFails--;
          if (s7 === peg$FAILED) {
            s6 = void 0;
          } else {
            peg$currPos = s6;
            s6 = peg$FAILED;
          }
          if (s6 !== peg$FAILED) {
            peg$savedPos = peg$currPos;
            s7 = peg$c193();
            if (s7) {
              s7 = void 0;
            } else {
              s7 = peg$FAILED;
            }
            if (s7 === peg$FAILED) {
              s7 = peg$currPos;
              peg$silentFails++;
              if (input.charCodeAt(peg$currPos) === 92) {
                s8 = peg$c87;
                peg$currPos++;
              } else {
                s8 = peg$FAILED;
                if (peg$silentFails === 0) {
                  peg$fail(peg$c88);
                }
              }
              peg$silentFails--;
              if (s8 === peg$FAILED) {
                s7 = void 0;
              } else {
                peg$currPos = s7;
                s7 = peg$FAILED;
              }
            }
            if (s7 !== peg$FAILED) {
              if (input.length > peg$currPos) {
                s8 = input.charAt(peg$currPos);
                peg$currPos++;
              } else {
                s8 = peg$FAILED;
                if (peg$silentFails === 0) {
                  peg$fail(peg$c2);
                }
              }
              if (s8 !== peg$FAILED) {
                s9 = peg$parseMarkupEndString();
                if (s9 !== peg$FAILED) {
                  s10 = peg$parseInlineMarkupFollowing();
                  if (s10 !== peg$FAILED) {
                    s6 = [s6, s7, s8, s9, s10];
                    s5 = s6;
                  } else {
                    peg$currPos = s5;
                    s5 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s5;
                  s5 = peg$FAILED;
                }
              } else {
                peg$currPos = s5;
                s5 = peg$FAILED;
              }
            } else {
              peg$currPos = s5;
              s5 = peg$FAILED;
            }
          } else {
            peg$currPos = s5;
            s5 = peg$FAILED;
          }
          peg$silentFails--;
          if (s5 === peg$FAILED) {
            s4 = void 0;
          } else {
            peg$currPos = s4;
            s4 = peg$FAILED;
          }
          if (s4 !== peg$FAILED) {
            if (input.length > peg$currPos) {
              s5 = input.charAt(peg$currPos);
              peg$currPos++;
            } else {
              s5 = peg$FAILED;
              if (peg$silentFails === 0) {
                peg$fail(peg$c2);
              }
            }
            if (s5 !== peg$FAILED) {
              s3 = [s3, s4, s5];
              s2 = s3;
            } else {
              peg$currPos = s2;
              s2 = peg$FAILED;
            }
          } else {
            peg$currPos = s2;
            s2 = peg$FAILED;
          }
        } else {
          peg$currPos = s2;
          s2 = peg$FAILED;
        }
      }
    } else {
      s1 = peg$FAILED;
    }
    if (s1 !== peg$FAILED) {
      peg$savedPos = s0;
      s1 = peg$c194(s1);
    }
    s0 = s1;

    return s0;
  }

  function peg$parseMarkupTextWithoutIndent() {
    var s0, s1, s2;

    s0 = peg$currPos;
    s1 = peg$parseMarkupTextWithoutNewline();
    if (s1 !== peg$FAILED) {
      s2 = peg$parseNewline();
      if (s2 === peg$FAILED) {
        s2 = null;
      }
      if (s2 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c195(s1, s2);
        s0 = s1;
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseMarkupTailWithoutNewline() {
    var s0, s1, s2, s3, s4, s5, s6, s7;

    s0 = peg$currPos;
    s1 = peg$parseMarkupTextWithoutNewline();
    if (s1 !== peg$FAILED) {
      s2 = peg$currPos;
      peg$silentFails++;
      s3 = peg$parseEndline();
      peg$silentFails--;
      if (s3 === peg$FAILED) {
        s2 = void 0;
      } else {
        peg$currPos = s2;
        s2 = peg$FAILED;
      }
      if (s2 !== peg$FAILED) {
        s3 = peg$currPos;
        peg$silentFails++;
        s4 = peg$parseNormalizedToWhitespace();
        peg$silentFails--;
        if (s4 === peg$FAILED) {
          s3 = void 0;
        } else {
          peg$currPos = s3;
          s3 = peg$FAILED;
        }
        if (s3 !== peg$FAILED) {
          if (input.length > peg$currPos) {
            s4 = input.charAt(peg$currPos);
            peg$currPos++;
          } else {
            s4 = peg$FAILED;
            if (peg$silentFails === 0) {
              peg$fail(peg$c2);
            }
          }
          if (s4 !== peg$FAILED) {
            s5 = peg$parseMarkupEndString();
            if (s5 !== peg$FAILED) {
              s6 = peg$currPos;
              peg$silentFails++;
              s7 = peg$parseInlineMarkupFollowing();
              peg$silentFails--;
              if (s7 !== peg$FAILED) {
                peg$currPos = s6;
                s6 = void 0;
              } else {
                s6 = peg$FAILED;
              }
              if (s6 !== peg$FAILED) {
                peg$savedPos = s0;
                s1 = peg$c196(s1, s4);
                s0 = s1;
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseMarkupTail() {
    var s0, s1, s2, s3, s4, s5, s6, s7, s8;

    s0 = peg$currPos;
    s1 = peg$parseMarkupTextWithoutIndent();
    if (s1 === peg$FAILED) {
      s1 = null;
    }
    if (s1 !== peg$FAILED) {
      s2 = [];
      s3 = peg$currPos;
      s4 = peg$parseSameIndent();
      if (s4 !== peg$FAILED) {
        s5 = peg$parseMarkupTextWithoutIndent();
        if (s5 !== peg$FAILED) {
          s4 = [s4, s5];
          s3 = s4;
        } else {
          peg$currPos = s3;
          s3 = peg$FAILED;
        }
      } else {
        peg$currPos = s3;
        s3 = peg$FAILED;
      }
      while (s3 !== peg$FAILED) {
        s2.push(s3);
        s3 = peg$currPos;
        s4 = peg$parseSameIndent();
        if (s4 !== peg$FAILED) {
          s5 = peg$parseMarkupTextWithoutIndent();
          if (s5 !== peg$FAILED) {
            s4 = [s4, s5];
            s3 = s4;
          } else {
            peg$currPos = s3;
            s3 = peg$FAILED;
          }
        } else {
          peg$currPos = s3;
          s3 = peg$FAILED;
        }
      }
      if (s2 !== peg$FAILED) {
        s3 = peg$currPos;
        peg$silentFails++;
        s4 = peg$parseEndline();
        peg$silentFails--;
        if (s4 === peg$FAILED) {
          s3 = void 0;
        } else {
          peg$currPos = s3;
          s3 = peg$FAILED;
        }
        if (s3 !== peg$FAILED) {
          s4 = peg$currPos;
          peg$silentFails++;
          s5 = peg$parseNormalizedToWhitespace();
          peg$silentFails--;
          if (s5 === peg$FAILED) {
            s4 = void 0;
          } else {
            peg$currPos = s4;
            s4 = peg$FAILED;
          }
          if (s4 !== peg$FAILED) {
            if (input.length > peg$currPos) {
              s5 = input.charAt(peg$currPos);
              peg$currPos++;
            } else {
              s5 = peg$FAILED;
              if (peg$silentFails === 0) {
                peg$fail(peg$c2);
              }
            }
            if (s5 !== peg$FAILED) {
              s6 = peg$parseMarkupEndString();
              if (s6 !== peg$FAILED) {
                s7 = peg$currPos;
                peg$silentFails++;
                s8 = peg$parseInlineMarkupFollowing();
                peg$silentFails--;
                if (s8 !== peg$FAILED) {
                  peg$currPos = s7;
                  s7 = void 0;
                } else {
                  s7 = peg$FAILED;
                }
                if (s7 !== peg$FAILED) {
                  peg$savedPos = s0;
                  s1 = peg$c197(s1, s2, s5);
                  s0 = s1;
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseEmphasis() {
    var s0, s1, s2, s3, s4, s5;

    s0 = peg$currPos;
    s1 = peg$currPos;
    if (input.charCodeAt(peg$currPos) === 42) {
      s2 = peg$c59;
      peg$currPos++;
    } else {
      s2 = peg$FAILED;
      if (peg$silentFails === 0) {
        peg$fail(peg$c60);
      }
    }
    if (s2 !== peg$FAILED) {
      s3 = peg$currPos;
      peg$silentFails++;
      if (input.charCodeAt(peg$currPos) === 42) {
        s4 = peg$c59;
        peg$currPos++;
      } else {
        s4 = peg$FAILED;
        if (peg$silentFails === 0) {
          peg$fail(peg$c60);
        }
      }
      peg$silentFails--;
      if (s4 === peg$FAILED) {
        s3 = void 0;
      } else {
        peg$currPos = s3;
        s3 = peg$FAILED;
      }
      if (s3 !== peg$FAILED) {
        s4 = peg$currPos;
        peg$silentFails++;
        s5 = peg$parseNormalizedToWhitespace();
        peg$silentFails--;
        if (s5 === peg$FAILED) {
          s4 = void 0;
        } else {
          peg$currPos = s4;
          s4 = peg$FAILED;
        }
        if (s4 !== peg$FAILED) {
          s2 = [s2, s3, s4];
          s1 = s2;
        } else {
          peg$currPos = s1;
          s1 = peg$FAILED;
        }
      } else {
        peg$currPos = s1;
        s1 = peg$FAILED;
      }
    } else {
      peg$currPos = s1;
      s1 = peg$FAILED;
    }
    if (s1 !== peg$FAILED) {
      peg$savedPos = peg$currPos;
      s2 = peg$c198();
      if (s2) {
        s2 = void 0;
      } else {
        s2 = peg$FAILED;
      }
      if (s2 !== peg$FAILED) {
        s3 = peg$parseMarkupTail();
        if (s3 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c199(s3);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseEmphasisWithoutNewline() {
    var s0, s1, s2, s3, s4, s5;

    s0 = peg$currPos;
    s1 = peg$currPos;
    if (input.charCodeAt(peg$currPos) === 42) {
      s2 = peg$c59;
      peg$currPos++;
    } else {
      s2 = peg$FAILED;
      if (peg$silentFails === 0) {
        peg$fail(peg$c60);
      }
    }
    if (s2 !== peg$FAILED) {
      s3 = peg$currPos;
      peg$silentFails++;
      if (input.charCodeAt(peg$currPos) === 42) {
        s4 = peg$c59;
        peg$currPos++;
      } else {
        s4 = peg$FAILED;
        if (peg$silentFails === 0) {
          peg$fail(peg$c60);
        }
      }
      peg$silentFails--;
      if (s4 === peg$FAILED) {
        s3 = void 0;
      } else {
        peg$currPos = s3;
        s3 = peg$FAILED;
      }
      if (s3 !== peg$FAILED) {
        s4 = peg$currPos;
        peg$silentFails++;
        s5 = peg$parseNormalizedToWhitespace();
        peg$silentFails--;
        if (s5 === peg$FAILED) {
          s4 = void 0;
        } else {
          peg$currPos = s4;
          s4 = peg$FAILED;
        }
        if (s4 !== peg$FAILED) {
          s2 = [s2, s3, s4];
          s1 = s2;
        } else {
          peg$currPos = s1;
          s1 = peg$FAILED;
        }
      } else {
        peg$currPos = s1;
        s1 = peg$FAILED;
      }
    } else {
      peg$currPos = s1;
      s1 = peg$FAILED;
    }
    if (s1 !== peg$FAILED) {
      peg$savedPos = peg$currPos;
      s2 = peg$c198();
      if (s2) {
        s2 = void 0;
      } else {
        s2 = peg$FAILED;
      }
      if (s2 !== peg$FAILED) {
        s3 = peg$parseMarkupTailWithoutNewline();
        if (s3 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c199(s3);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseStrongEmphasis() {
    var s0, s1, s2, s3, s4;

    s0 = peg$currPos;
    s1 = peg$currPos;
    if (input.substr(peg$currPos, 2) === peg$c200) {
      s2 = peg$c200;
      peg$currPos += 2;
    } else {
      s2 = peg$FAILED;
      if (peg$silentFails === 0) {
        peg$fail(peg$c201);
      }
    }
    if (s2 !== peg$FAILED) {
      s3 = peg$currPos;
      peg$silentFails++;
      s4 = peg$parseNormalizedToWhitespace();
      peg$silentFails--;
      if (s4 === peg$FAILED) {
        s3 = void 0;
      } else {
        peg$currPos = s3;
        s3 = peg$FAILED;
      }
      if (s3 !== peg$FAILED) {
        s2 = [s2, s3];
        s1 = s2;
      } else {
        peg$currPos = s1;
        s1 = peg$FAILED;
      }
    } else {
      peg$currPos = s1;
      s1 = peg$FAILED;
    }
    if (s1 !== peg$FAILED) {
      peg$savedPos = peg$currPos;
      s2 = peg$c202();
      if (s2) {
        s2 = void 0;
      } else {
        s2 = peg$FAILED;
      }
      if (s2 !== peg$FAILED) {
        s3 = peg$parseMarkupTail();
        if (s3 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c203(s3);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseStrongEmphasisWithoutNewline() {
    var s0, s1, s2, s3, s4;

    s0 = peg$currPos;
    s1 = peg$currPos;
    if (input.substr(peg$currPos, 2) === peg$c200) {
      s2 = peg$c200;
      peg$currPos += 2;
    } else {
      s2 = peg$FAILED;
      if (peg$silentFails === 0) {
        peg$fail(peg$c201);
      }
    }
    if (s2 !== peg$FAILED) {
      s3 = peg$currPos;
      peg$silentFails++;
      s4 = peg$parseNormalizedToWhitespace();
      peg$silentFails--;
      if (s4 === peg$FAILED) {
        s3 = void 0;
      } else {
        peg$currPos = s3;
        s3 = peg$FAILED;
      }
      if (s3 !== peg$FAILED) {
        s2 = [s2, s3];
        s1 = s2;
      } else {
        peg$currPos = s1;
        s1 = peg$FAILED;
      }
    } else {
      peg$currPos = s1;
      s1 = peg$FAILED;
    }
    if (s1 !== peg$FAILED) {
      peg$savedPos = peg$currPos;
      s2 = peg$c202();
      if (s2) {
        s2 = void 0;
      } else {
        s2 = peg$FAILED;
      }
      if (s2 !== peg$FAILED) {
        s3 = peg$parseMarkupTailWithoutNewline();
        if (s3 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c203(s3);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseInterpretedText() {
    var s0, s1, s2, s3, s4, s5, s6, s7, s8;

    s0 = peg$currPos;
    s1 = peg$currPos;
    if (input.charCodeAt(peg$currPos) === 58) {
      s2 = peg$c71;
      peg$currPos++;
    } else {
      s2 = peg$FAILED;
      if (peg$silentFails === 0) {
        peg$fail(peg$c72);
      }
    }
    if (s2 !== peg$FAILED) {
      s3 = [];
      s4 = peg$currPos;
      s5 = peg$currPos;
      peg$silentFails++;
      s6 = peg$parseEndline();
      peg$silentFails--;
      if (s6 === peg$FAILED) {
        s5 = void 0;
      } else {
        peg$currPos = s5;
        s5 = peg$FAILED;
      }
      if (s5 !== peg$FAILED) {
        s6 = peg$currPos;
        peg$silentFails++;
        s7 = peg$parseWhitespace();
        peg$silentFails--;
        if (s7 === peg$FAILED) {
          s6 = void 0;
        } else {
          peg$currPos = s6;
          s6 = peg$FAILED;
        }
        if (s6 !== peg$FAILED) {
          s7 = peg$currPos;
          peg$silentFails++;
          if (input.charCodeAt(peg$currPos) === 58) {
            s8 = peg$c71;
            peg$currPos++;
          } else {
            s8 = peg$FAILED;
            if (peg$silentFails === 0) {
              peg$fail(peg$c72);
            }
          }
          peg$silentFails--;
          if (s8 === peg$FAILED) {
            s7 = void 0;
          } else {
            peg$currPos = s7;
            s7 = peg$FAILED;
          }
          if (s7 !== peg$FAILED) {
            if (input.length > peg$currPos) {
              s8 = input.charAt(peg$currPos);
              peg$currPos++;
            } else {
              s8 = peg$FAILED;
              if (peg$silentFails === 0) {
                peg$fail(peg$c2);
              }
            }
            if (s8 !== peg$FAILED) {
              s5 = [s5, s6, s7, s8];
              s4 = s5;
            } else {
              peg$currPos = s4;
              s4 = peg$FAILED;
            }
          } else {
            peg$currPos = s4;
            s4 = peg$FAILED;
          }
        } else {
          peg$currPos = s4;
          s4 = peg$FAILED;
        }
      } else {
        peg$currPos = s4;
        s4 = peg$FAILED;
      }
      if (s4 !== peg$FAILED) {
        while (s4 !== peg$FAILED) {
          s3.push(s4);
          s4 = peg$currPos;
          s5 = peg$currPos;
          peg$silentFails++;
          s6 = peg$parseEndline();
          peg$silentFails--;
          if (s6 === peg$FAILED) {
            s5 = void 0;
          } else {
            peg$currPos = s5;
            s5 = peg$FAILED;
          }
          if (s5 !== peg$FAILED) {
            s6 = peg$currPos;
            peg$silentFails++;
            s7 = peg$parseWhitespace();
            peg$silentFails--;
            if (s7 === peg$FAILED) {
              s6 = void 0;
            } else {
              peg$currPos = s6;
              s6 = peg$FAILED;
            }
            if (s6 !== peg$FAILED) {
              s7 = peg$currPos;
              peg$silentFails++;
              if (input.charCodeAt(peg$currPos) === 58) {
                s8 = peg$c71;
                peg$currPos++;
              } else {
                s8 = peg$FAILED;
                if (peg$silentFails === 0) {
                  peg$fail(peg$c72);
                }
              }
              peg$silentFails--;
              if (s8 === peg$FAILED) {
                s7 = void 0;
              } else {
                peg$currPos = s7;
                s7 = peg$FAILED;
              }
              if (s7 !== peg$FAILED) {
                if (input.length > peg$currPos) {
                  s8 = input.charAt(peg$currPos);
                  peg$currPos++;
                } else {
                  s8 = peg$FAILED;
                  if (peg$silentFails === 0) {
                    peg$fail(peg$c2);
                  }
                }
                if (s8 !== peg$FAILED) {
                  s5 = [s5, s6, s7, s8];
                  s4 = s5;
                } else {
                  peg$currPos = s4;
                  s4 = peg$FAILED;
                }
              } else {
                peg$currPos = s4;
                s4 = peg$FAILED;
              }
            } else {
              peg$currPos = s4;
              s4 = peg$FAILED;
            }
          } else {
            peg$currPos = s4;
            s4 = peg$FAILED;
          }
        }
      } else {
        s3 = peg$FAILED;
      }
      if (s3 !== peg$FAILED) {
        if (input.charCodeAt(peg$currPos) === 58) {
          s4 = peg$c71;
          peg$currPos++;
        } else {
          s4 = peg$FAILED;
          if (peg$silentFails === 0) {
            peg$fail(peg$c72);
          }
        }
        if (s4 !== peg$FAILED) {
          s2 = [s2, s3, s4];
          s1 = s2;
        } else {
          peg$currPos = s1;
          s1 = peg$FAILED;
        }
      } else {
        peg$currPos = s1;
        s1 = peg$FAILED;
      }
    } else {
      peg$currPos = s1;
      s1 = peg$FAILED;
    }
    if (s1 === peg$FAILED) {
      s1 = null;
    }
    if (s1 !== peg$FAILED) {
      s2 = peg$currPos;
      if (input.charCodeAt(peg$currPos) === 96) {
        s3 = peg$c95;
        peg$currPos++;
      } else {
        s3 = peg$FAILED;
        if (peg$silentFails === 0) {
          peg$fail(peg$c96);
        }
      }
      if (s3 !== peg$FAILED) {
        s4 = peg$currPos;
        peg$silentFails++;
        s5 = peg$parseNormalizedToWhitespace();
        peg$silentFails--;
        if (s5 === peg$FAILED) {
          s4 = void 0;
        } else {
          peg$currPos = s4;
          s4 = peg$FAILED;
        }
        if (s4 !== peg$FAILED) {
          s3 = [s3, s4];
          s2 = s3;
        } else {
          peg$currPos = s2;
          s2 = peg$FAILED;
        }
      } else {
        peg$currPos = s2;
        s2 = peg$FAILED;
      }
      if (s2 !== peg$FAILED) {
        peg$savedPos = peg$currPos;
        s3 = peg$c204(s1);
        if (s3) {
          s3 = void 0;
        } else {
          s3 = peg$FAILED;
        }
        if (s3 !== peg$FAILED) {
          s4 = peg$parseMarkupTail();
          if (s4 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c205(s1, s4);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseInlineLiteral() {
    var s0, s1, s2, s3, s4;

    s0 = peg$currPos;
    s1 = peg$currPos;
    if (input.substr(peg$currPos, 2) === peg$c206) {
      s2 = peg$c206;
      peg$currPos += 2;
    } else {
      s2 = peg$FAILED;
      if (peg$silentFails === 0) {
        peg$fail(peg$c207);
      }
    }
    if (s2 !== peg$FAILED) {
      s3 = peg$currPos;
      peg$silentFails++;
      s4 = peg$parseNormalizedToWhitespace();
      peg$silentFails--;
      if (s4 === peg$FAILED) {
        s3 = void 0;
      } else {
        peg$currPos = s3;
        s3 = peg$FAILED;
      }
      if (s3 !== peg$FAILED) {
        s2 = [s2, s3];
        s1 = s2;
      } else {
        peg$currPos = s1;
        s1 = peg$FAILED;
      }
    } else {
      peg$currPos = s1;
      s1 = peg$FAILED;
    }
    if (s1 !== peg$FAILED) {
      peg$savedPos = peg$currPos;
      s2 = peg$c208();
      if (s2) {
        s2 = void 0;
      } else {
        s2 = peg$FAILED;
      }
      if (s2 !== peg$FAILED) {
        s3 = peg$parseMarkupTail();
        if (s3 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c209(s3);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseInlineLiteralWithoutNewline() {
    var s0, s1, s2, s3, s4;

    s0 = peg$currPos;
    s1 = peg$currPos;
    if (input.substr(peg$currPos, 2) === peg$c206) {
      s2 = peg$c206;
      peg$currPos += 2;
    } else {
      s2 = peg$FAILED;
      if (peg$silentFails === 0) {
        peg$fail(peg$c207);
      }
    }
    if (s2 !== peg$FAILED) {
      s3 = peg$currPos;
      peg$silentFails++;
      s4 = peg$parseNormalizedToWhitespace();
      peg$silentFails--;
      if (s4 === peg$FAILED) {
        s3 = void 0;
      } else {
        peg$currPos = s3;
        s3 = peg$FAILED;
      }
      if (s3 !== peg$FAILED) {
        s2 = [s2, s3];
        s1 = s2;
      } else {
        peg$currPos = s1;
        s1 = peg$FAILED;
      }
    } else {
      peg$currPos = s1;
      s1 = peg$FAILED;
    }
    if (s1 !== peg$FAILED) {
      peg$savedPos = peg$currPos;
      s2 = peg$c208();
      if (s2) {
        s2 = void 0;
      } else {
        s2 = peg$FAILED;
      }
      if (s2 !== peg$FAILED) {
        s3 = peg$parseMarkupTailWithoutNewline();
        if (s3 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c209(s3);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseSubstitutionReference() {
    var s0, s1, s2, s3, s4;

    s0 = peg$currPos;
    s1 = peg$currPos;
    if (input.charCodeAt(peg$currPos) === 124) {
      s2 = peg$c99;
      peg$currPos++;
    } else {
      s2 = peg$FAILED;
      if (peg$silentFails === 0) {
        peg$fail(peg$c100);
      }
    }
    if (s2 !== peg$FAILED) {
      s3 = peg$currPos;
      peg$silentFails++;
      s4 = peg$parseNormalizedToWhitespace();
      peg$silentFails--;
      if (s4 === peg$FAILED) {
        s3 = void 0;
      } else {
        peg$currPos = s3;
        s3 = peg$FAILED;
      }
      if (s3 !== peg$FAILED) {
        s2 = [s2, s3];
        s1 = s2;
      } else {
        peg$currPos = s1;
        s1 = peg$FAILED;
      }
    } else {
      peg$currPos = s1;
      s1 = peg$FAILED;
    }
    if (s1 !== peg$FAILED) {
      peg$savedPos = peg$currPos;
      s2 = peg$c210();
      if (s2) {
        s2 = void 0;
      } else {
        s2 = peg$FAILED;
      }
      if (s2 !== peg$FAILED) {
        s3 = peg$parseMarkupTail();
        if (s3 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c211(s3);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseInlineInternalTarget() {
    var s0, s1, s2, s3, s4;

    s0 = peg$currPos;
    s1 = peg$currPos;
    if (input.substr(peg$currPos, 2) === peg$c212) {
      s2 = peg$c212;
      peg$currPos += 2;
    } else {
      s2 = peg$FAILED;
      if (peg$silentFails === 0) {
        peg$fail(peg$c213);
      }
    }
    if (s2 !== peg$FAILED) {
      s3 = peg$currPos;
      peg$silentFails++;
      s4 = peg$parseNormalizedToWhitespace();
      peg$silentFails--;
      if (s4 === peg$FAILED) {
        s3 = void 0;
      } else {
        peg$currPos = s3;
        s3 = peg$FAILED;
      }
      if (s3 !== peg$FAILED) {
        s2 = [s2, s3];
        s1 = s2;
      } else {
        peg$currPos = s1;
        s1 = peg$FAILED;
      }
    } else {
      peg$currPos = s1;
      s1 = peg$FAILED;
    }
    if (s1 !== peg$FAILED) {
      peg$savedPos = peg$currPos;
      s2 = peg$c214();
      if (s2) {
        s2 = void 0;
      } else {
        s2 = peg$FAILED;
      }
      if (s2 !== peg$FAILED) {
        s3 = peg$parseMarkupTail();
        if (s3 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c215(s3);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseFootnoteLabel() {
    var s0, s1, s2, s3;

    s0 = peg$currPos;
    s1 = [];
    if (peg$c142.test(input.charAt(peg$currPos))) {
      s2 = input.charAt(peg$currPos);
      peg$currPos++;
    } else {
      s2 = peg$FAILED;
      if (peg$silentFails === 0) {
        peg$fail(peg$c143);
      }
    }
    if (s2 !== peg$FAILED) {
      while (s2 !== peg$FAILED) {
        s1.push(s2);
        if (peg$c142.test(input.charAt(peg$currPos))) {
          s2 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s2 = peg$FAILED;
          if (peg$silentFails === 0) {
            peg$fail(peg$c143);
          }
        }
      }
    } else {
      s1 = peg$FAILED;
    }
    if (s1 === peg$FAILED) {
      s1 = peg$currPos;
      if (input.charCodeAt(peg$currPos) === 35) {
        s2 = peg$c45;
        peg$currPos++;
      } else {
        s2 = peg$FAILED;
        if (peg$silentFails === 0) {
          peg$fail(peg$c46);
        }
      }
      if (s2 !== peg$FAILED) {
        s3 = peg$parseReferenceName();
        if (s3 !== peg$FAILED) {
          s2 = [s2, s3];
          s1 = s2;
        } else {
          peg$currPos = s1;
          s1 = peg$FAILED;
        }
      } else {
        peg$currPos = s1;
        s1 = peg$FAILED;
      }
      if (s1 === peg$FAILED) {
        if (input.charCodeAt(peg$currPos) === 35) {
          s1 = peg$c45;
          peg$currPos++;
        } else {
          s1 = peg$FAILED;
          if (peg$silentFails === 0) {
            peg$fail(peg$c46);
          }
        }
        if (s1 === peg$FAILED) {
          if (input.charCodeAt(peg$currPos) === 42) {
            s1 = peg$c59;
            peg$currPos++;
          } else {
            s1 = peg$FAILED;
            if (peg$silentFails === 0) {
              peg$fail(peg$c60);
            }
          }
        }
      }
    }
    if (s1 !== peg$FAILED) {
      peg$savedPos = s0;
      s1 = peg$c216(s1);
    }
    s0 = s1;

    return s0;
  }

  function peg$parseFootnoteReference() {
    var s0, s1, s2, s3, s4, s5;

    s0 = peg$currPos;
    if (input.charCodeAt(peg$currPos) === 91) {
      s1 = peg$c85;
      peg$currPos++;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) {
        peg$fail(peg$c86);
      }
    }
    if (s1 !== peg$FAILED) {
      s2 = peg$parseFootnoteLabel();
      if (s2 !== peg$FAILED) {
        if (input.substr(peg$currPos, 2) === peg$c217) {
          s3 = peg$c217;
          peg$currPos += 2;
        } else {
          s3 = peg$FAILED;
          if (peg$silentFails === 0) {
            peg$fail(peg$c218);
          }
        }
        if (s3 !== peg$FAILED) {
          s4 = peg$currPos;
          peg$silentFails++;
          s5 = peg$parseInlineMarkupFollowing();
          peg$silentFails--;
          if (s5 !== peg$FAILED) {
            peg$currPos = s4;
            s4 = void 0;
          } else {
            s4 = peg$FAILED;
          }
          if (s4 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c219(s2);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseCitationReference() {
    var s0, s1, s2, s3, s4, s5;

    s0 = peg$currPos;
    if (input.charCodeAt(peg$currPos) === 91) {
      s1 = peg$c85;
      peg$currPos++;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) {
        peg$fail(peg$c86);
      }
    }
    if (s1 !== peg$FAILED) {
      s2 = peg$parseReferenceName();
      if (s2 !== peg$FAILED) {
        if (input.substr(peg$currPos, 2) === peg$c217) {
          s3 = peg$c217;
          peg$currPos += 2;
        } else {
          s3 = peg$FAILED;
          if (peg$silentFails === 0) {
            peg$fail(peg$c218);
          }
        }
        if (s3 !== peg$FAILED) {
          s4 = peg$currPos;
          peg$silentFails++;
          s5 = peg$parseInlineMarkupFollowing();
          peg$silentFails--;
          if (s5 !== peg$FAILED) {
            peg$currPos = s4;
            s4 = void 0;
          } else {
            s4 = peg$FAILED;
          }
          if (s4 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c220(s2);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseHyperlinkReference() {
    var s0;

    s0 = peg$parseAnonymousHyperlinkReference();
    if (s0 === peg$FAILED) {
      s0 = peg$parseAnonymousSimpleHyperlinkReference();
      if (s0 === peg$FAILED) {
        s0 = peg$parseNamedHyperlinkReference();
        if (s0 === peg$FAILED) {
          s0 = peg$parseNamedSimpleHyperlinkReference();
        }
      }
    }

    return s0;
  }

  function peg$parseNamedHyperlinkReference() {
    var s0, s1, s2, s3, s4;

    s0 = peg$currPos;
    s1 = peg$currPos;
    if (input.charCodeAt(peg$currPos) === 96) {
      s2 = peg$c95;
      peg$currPos++;
    } else {
      s2 = peg$FAILED;
      if (peg$silentFails === 0) {
        peg$fail(peg$c96);
      }
    }
    if (s2 !== peg$FAILED) {
      s3 = peg$currPos;
      peg$silentFails++;
      s4 = peg$parseNormalizedToWhitespace();
      peg$silentFails--;
      if (s4 === peg$FAILED) {
        s3 = void 0;
      } else {
        peg$currPos = s3;
        s3 = peg$FAILED;
      }
      if (s3 !== peg$FAILED) {
        s2 = [s2, s3];
        s1 = s2;
      } else {
        peg$currPos = s1;
        s1 = peg$FAILED;
      }
    } else {
      peg$currPos = s1;
      s1 = peg$FAILED;
    }
    if (s1 !== peg$FAILED) {
      peg$savedPos = peg$currPos;
      s2 = peg$c221();
      if (s2) {
        s2 = void 0;
      } else {
        s2 = peg$FAILED;
      }
      if (s2 !== peg$FAILED) {
        s3 = peg$parseMarkupTail();
        if (s3 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c222(s3);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseNamedSimpleHyperlinkReference() {
    var s0, s1, s2, s3, s4;

    s0 = peg$currPos;
    s1 = peg$parseHyperlinkReferenceName();
    if (s1 !== peg$FAILED) {
      if (input.charCodeAt(peg$currPos) === 95) {
        s2 = peg$c93;
        peg$currPos++;
      } else {
        s2 = peg$FAILED;
        if (peg$silentFails === 0) {
          peg$fail(peg$c94);
        }
      }
      if (s2 !== peg$FAILED) {
        s3 = peg$currPos;
        peg$silentFails++;
        s4 = peg$parseInlineMarkupFollowing();
        peg$silentFails--;
        if (s4 !== peg$FAILED) {
          peg$currPos = s3;
          s3 = void 0;
        } else {
          s3 = peg$FAILED;
        }
        if (s3 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c223(s1);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseAnonymousHyperlinkReference() {
    var s0, s1, s2, s3, s4;

    s0 = peg$currPos;
    s1 = peg$currPos;
    if (input.charCodeAt(peg$currPos) === 96) {
      s2 = peg$c95;
      peg$currPos++;
    } else {
      s2 = peg$FAILED;
      if (peg$silentFails === 0) {
        peg$fail(peg$c96);
      }
    }
    if (s2 !== peg$FAILED) {
      s3 = peg$currPos;
      peg$silentFails++;
      s4 = peg$parseNormalizedToWhitespace();
      peg$silentFails--;
      if (s4 === peg$FAILED) {
        s3 = void 0;
      } else {
        peg$currPos = s3;
        s3 = peg$FAILED;
      }
      if (s3 !== peg$FAILED) {
        s2 = [s2, s3];
        s1 = s2;
      } else {
        peg$currPos = s1;
        s1 = peg$FAILED;
      }
    } else {
      peg$currPos = s1;
      s1 = peg$FAILED;
    }
    if (s1 !== peg$FAILED) {
      peg$savedPos = peg$currPos;
      s2 = peg$c224();
      if (s2) {
        s2 = void 0;
      } else {
        s2 = peg$FAILED;
      }
      if (s2 !== peg$FAILED) {
        s3 = peg$parseMarkupTail();
        if (s3 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c225(s3);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseAnonymousSimpleHyperlinkReference() {
    var s0, s1, s2, s3, s4;

    s0 = peg$currPos;
    s1 = peg$parseHyperlinkReferenceName();
    if (s1 !== peg$FAILED) {
      if (input.substr(peg$currPos, 2) === peg$c226) {
        s2 = peg$c226;
        peg$currPos += 2;
      } else {
        s2 = peg$FAILED;
        if (peg$silentFails === 0) {
          peg$fail(peg$c227);
        }
      }
      if (s2 !== peg$FAILED) {
        s3 = peg$currPos;
        peg$silentFails++;
        s4 = peg$parseInlineMarkupFollowing();
        peg$silentFails--;
        if (s4 !== peg$FAILED) {
          peg$currPos = s3;
          s3 = void 0;
        } else {
          s3 = peg$FAILED;
        }
        if (s3 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c228(s1);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseReferenceName() {
    var s0, s1, s2, s3;

    s0 = peg$currPos;
    s1 = peg$parseAlphanumericAscii();
    if (s1 !== peg$FAILED) {
      s2 = [];
      s3 = peg$parseAlphanumericAscii();
      if (s3 === peg$FAILED) {
        if (peg$c229.test(input.charAt(peg$currPos))) {
          s3 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s3 = peg$FAILED;
          if (peg$silentFails === 0) {
            peg$fail(peg$c230);
          }
        }
      }
      if (s3 !== peg$FAILED) {
        while (s3 !== peg$FAILED) {
          s2.push(s3);
          s3 = peg$parseAlphanumericAscii();
          if (s3 === peg$FAILED) {
            if (peg$c229.test(input.charAt(peg$currPos))) {
              s3 = input.charAt(peg$currPos);
              peg$currPos++;
            } else {
              s3 = peg$FAILED;
              if (peg$silentFails === 0) {
                peg$fail(peg$c230);
              }
            }
          }
        }
      } else {
        s2 = peg$FAILED;
      }
      if (s2 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c231(s1, s2);
        s0 = s1;
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseHyperlinkReferenceName() {
    var s0, s1, s2, s3;

    s0 = peg$currPos;
    s1 = peg$parseAlphanumericAscii();
    if (s1 !== peg$FAILED) {
      s2 = [];
      s3 = peg$parseAlphanumericAscii();
      if (s3 === peg$FAILED) {
        if (peg$c232.test(input.charAt(peg$currPos))) {
          s3 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s3 = peg$FAILED;
          if (peg$silentFails === 0) {
            peg$fail(peg$c233);
          }
        }
      }
      if (s3 !== peg$FAILED) {
        while (s3 !== peg$FAILED) {
          s2.push(s3);
          s3 = peg$parseAlphanumericAscii();
          if (s3 === peg$FAILED) {
            if (peg$c232.test(input.charAt(peg$currPos))) {
              s3 = input.charAt(peg$currPos);
              peg$currPos++;
            } else {
              s3 = peg$FAILED;
              if (peg$silentFails === 0) {
                peg$fail(peg$c233);
              }
            }
          }
        }
      } else {
        s2 = peg$FAILED;
      }
      if (s2 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c231(s1, s2);
        s0 = s1;
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseLiteralBlock() {
    var s0, s1, s2;

    s0 = peg$currPos;
    s1 = peg$parseSameIndent();
    if (s1 !== peg$FAILED) {
      s2 = peg$parseLiteralBlockWithoutIndent();
      if (s2 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c234(s2);
        s0 = s1;
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseLiteralBlockWithoutIndent() {
    var s0;

    s0 = peg$parseIndentedLiteralBlockWithoutIndent();
    if (s0 === peg$FAILED) {
      s0 = peg$parseQuotedLiteralBlockWithoutIndent();
    }

    return s0;
  }

  function peg$parseIndentedLiteralBlockWithoutIndent() {
    var s0, s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11, s12, s13;

    s0 = peg$currPos;
    if (input.substr(peg$currPos, 2) === peg$c235) {
      s1 = peg$c235;
      peg$currPos += 2;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) {
        peg$fail(peg$c236);
      }
    }
    if (s1 !== peg$FAILED) {
      s2 = [];
      s3 = peg$parseWhitespace();
      while (s3 !== peg$FAILED) {
        s2.push(s3);
        s3 = peg$parseWhitespace();
      }
      if (s2 !== peg$FAILED) {
        s3 = peg$parseNewline();
        if (s3 !== peg$FAILED) {
          s4 = peg$parseBlankLines();
          if (s4 !== peg$FAILED) {
            s5 = peg$parsePushCommonIndent$();
            if (s5 !== peg$FAILED) {
              s6 = [];
              s7 = peg$currPos;
              s8 = [];
              s9 = peg$parseWhitespace();
              while (s9 !== peg$FAILED) {
                s8.push(s9);
                s9 = peg$parseWhitespace();
              }
              if (s8 !== peg$FAILED) {
                s9 = peg$parseNewline();
                if (s9 !== peg$FAILED) {
                  s10 = peg$currPos;
                  peg$silentFails++;
                  s11 = peg$currPos;
                  s12 = peg$parseBlankLines();
                  if (s12 === peg$FAILED) {
                    s12 = null;
                  }
                  if (s12 !== peg$FAILED) {
                    s13 = peg$parseShallowIndent();
                    if (s13 !== peg$FAILED) {
                      s12 = [s12, s13];
                      s11 = s12;
                    } else {
                      peg$currPos = s11;
                      s11 = peg$FAILED;
                    }
                  } else {
                    peg$currPos = s11;
                    s11 = peg$FAILED;
                  }
                  peg$silentFails--;
                  if (s11 === peg$FAILED) {
                    s10 = void 0;
                  } else {
                    peg$currPos = s10;
                    s10 = peg$FAILED;
                  }
                  if (s10 !== peg$FAILED) {
                    s8 = [s8, s9, s10];
                    s7 = s8;
                  } else {
                    peg$currPos = s7;
                    s7 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s7;
                  s7 = peg$FAILED;
                }
              } else {
                peg$currPos = s7;
                s7 = peg$FAILED;
              }
              if (s7 === peg$FAILED) {
                s7 = peg$currPos;
                s8 = peg$currPos;
                peg$silentFails++;
                s9 = peg$parseSameOrDeepIndent();
                peg$silentFails--;
                if (s9 !== peg$FAILED) {
                  peg$currPos = s8;
                  s8 = void 0;
                } else {
                  s8 = peg$FAILED;
                }
                if (s8 !== peg$FAILED) {
                  s9 = [];
                  s10 = peg$parseWhitespace();
                  if (s10 !== peg$FAILED) {
                    while (s10 !== peg$FAILED) {
                      s9.push(s10);
                      s10 = peg$parseWhitespace();
                    }
                  } else {
                    s9 = peg$FAILED;
                  }
                  if (s9 !== peg$FAILED) {
                    s10 = peg$parseRawLine();
                    if (s10 !== peg$FAILED) {
                      s8 = [s8, s9, s10];
                      s7 = s8;
                    } else {
                      peg$currPos = s7;
                      s7 = peg$FAILED;
                    }
                  } else {
                    peg$currPos = s7;
                    s7 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s7;
                  s7 = peg$FAILED;
                }
              }
              if (s7 !== peg$FAILED) {
                while (s7 !== peg$FAILED) {
                  s6.push(s7);
                  s7 = peg$currPos;
                  s8 = [];
                  s9 = peg$parseWhitespace();
                  while (s9 !== peg$FAILED) {
                    s8.push(s9);
                    s9 = peg$parseWhitespace();
                  }
                  if (s8 !== peg$FAILED) {
                    s9 = peg$parseNewline();
                    if (s9 !== peg$FAILED) {
                      s10 = peg$currPos;
                      peg$silentFails++;
                      s11 = peg$currPos;
                      s12 = peg$parseBlankLines();
                      if (s12 === peg$FAILED) {
                        s12 = null;
                      }
                      if (s12 !== peg$FAILED) {
                        s13 = peg$parseShallowIndent();
                        if (s13 !== peg$FAILED) {
                          s12 = [s12, s13];
                          s11 = s12;
                        } else {
                          peg$currPos = s11;
                          s11 = peg$FAILED;
                        }
                      } else {
                        peg$currPos = s11;
                        s11 = peg$FAILED;
                      }
                      peg$silentFails--;
                      if (s11 === peg$FAILED) {
                        s10 = void 0;
                      } else {
                        peg$currPos = s10;
                        s10 = peg$FAILED;
                      }
                      if (s10 !== peg$FAILED) {
                        s8 = [s8, s9, s10];
                        s7 = s8;
                      } else {
                        peg$currPos = s7;
                        s7 = peg$FAILED;
                      }
                    } else {
                      peg$currPos = s7;
                      s7 = peg$FAILED;
                    }
                  } else {
                    peg$currPos = s7;
                    s7 = peg$FAILED;
                  }
                  if (s7 === peg$FAILED) {
                    s7 = peg$currPos;
                    s8 = peg$currPos;
                    peg$silentFails++;
                    s9 = peg$parseSameOrDeepIndent();
                    peg$silentFails--;
                    if (s9 !== peg$FAILED) {
                      peg$currPos = s8;
                      s8 = void 0;
                    } else {
                      s8 = peg$FAILED;
                    }
                    if (s8 !== peg$FAILED) {
                      s9 = [];
                      s10 = peg$parseWhitespace();
                      if (s10 !== peg$FAILED) {
                        while (s10 !== peg$FAILED) {
                          s9.push(s10);
                          s10 = peg$parseWhitespace();
                        }
                      } else {
                        s9 = peg$FAILED;
                      }
                      if (s9 !== peg$FAILED) {
                        s10 = peg$parseRawLine();
                        if (s10 !== peg$FAILED) {
                          s8 = [s8, s9, s10];
                          s7 = s8;
                        } else {
                          peg$currPos = s7;
                          s7 = peg$FAILED;
                        }
                      } else {
                        peg$currPos = s7;
                        s7 = peg$FAILED;
                      }
                    } else {
                      peg$currPos = s7;
                      s7 = peg$FAILED;
                    }
                  }
                }
              } else {
                s6 = peg$FAILED;
              }
              if (s6 === peg$FAILED) {
                s6 = peg$parseFailbackIndent$();
              }
              if (s6 !== peg$FAILED) {
                s7 = peg$parsePopIndent$();
                if (s7 !== peg$FAILED) {
                  peg$savedPos = s0;
                  s1 = peg$c237(s5, s6);
                  s0 = s1;
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseQuotedLiteralBlockWithoutIndent() {
    var s0, s1, s2, s3, s4, s5, s6, s7, s8, s9, s10;

    s0 = peg$currPos;
    if (input.substr(peg$currPos, 2) === peg$c235) {
      s1 = peg$c235;
      peg$currPos += 2;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) {
        peg$fail(peg$c236);
      }
    }
    if (s1 !== peg$FAILED) {
      s2 = [];
      s3 = peg$parseWhitespace();
      while (s3 !== peg$FAILED) {
        s2.push(s3);
        s3 = peg$parseWhitespace();
      }
      if (s2 !== peg$FAILED) {
        s3 = peg$parseNewline();
        if (s3 !== peg$FAILED) {
          s4 = peg$parseBlankLines();
          if (s4 !== peg$FAILED) {
            s5 = peg$parseSetQuoting$();
            if (s5 !== peg$FAILED) {
              s6 = [];
              s7 = peg$currPos;
              s8 = peg$parseSameIndent();
              if (s8 !== peg$FAILED) {
                s9 = peg$parseIsValidQuoting$();
                if (s9 !== peg$FAILED) {
                  s10 = peg$parseNotEmptyRawLine();
                  if (s10 !== peg$FAILED) {
                    s8 = [s8, s9, s10];
                    s7 = s8;
                  } else {
                    peg$currPos = s7;
                    s7 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s7;
                  s7 = peg$FAILED;
                }
              } else {
                peg$currPos = s7;
                s7 = peg$FAILED;
              }
              if (s7 !== peg$FAILED) {
                while (s7 !== peg$FAILED) {
                  s6.push(s7);
                  s7 = peg$currPos;
                  s8 = peg$parseSameIndent();
                  if (s8 !== peg$FAILED) {
                    s9 = peg$parseIsValidQuoting$();
                    if (s9 !== peg$FAILED) {
                      s10 = peg$parseNotEmptyRawLine();
                      if (s10 !== peg$FAILED) {
                        s8 = [s8, s9, s10];
                        s7 = s8;
                      } else {
                        peg$currPos = s7;
                        s7 = peg$FAILED;
                      }
                    } else {
                      peg$currPos = s7;
                      s7 = peg$FAILED;
                    }
                  } else {
                    peg$currPos = s7;
                    s7 = peg$FAILED;
                  }
                }
              } else {
                s6 = peg$FAILED;
              }
              if (s6 !== peg$FAILED) {
                s7 = peg$currPos;
                peg$silentFails++;
                s8 = peg$parseBlankLines();
                peg$silentFails--;
                if (s8 !== peg$FAILED) {
                  peg$currPos = s7;
                  s7 = void 0;
                } else {
                  s7 = peg$FAILED;
                }
                if (s7 !== peg$FAILED) {
                  peg$savedPos = s0;
                  s1 = peg$c238(s6);
                  s0 = s1;
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseQuoting() {
    var s0;

    if (input.charCodeAt(peg$currPos) === 33) {
      s0 = peg$c41;
      peg$currPos++;
    } else {
      s0 = peg$FAILED;
      if (peg$silentFails === 0) {
        peg$fail(peg$c42);
      }
    }
    if (s0 === peg$FAILED) {
      if (input.charCodeAt(peg$currPos) === 34) {
        s0 = peg$c43;
        peg$currPos++;
      } else {
        s0 = peg$FAILED;
        if (peg$silentFails === 0) {
          peg$fail(peg$c44);
        }
      }
      if (s0 === peg$FAILED) {
        if (input.charCodeAt(peg$currPos) === 35) {
          s0 = peg$c45;
          peg$currPos++;
        } else {
          s0 = peg$FAILED;
          if (peg$silentFails === 0) {
            peg$fail(peg$c46);
          }
        }
        if (s0 === peg$FAILED) {
          if (input.charCodeAt(peg$currPos) === 36) {
            s0 = peg$c47;
            peg$currPos++;
          } else {
            s0 = peg$FAILED;
            if (peg$silentFails === 0) {
              peg$fail(peg$c48);
            }
          }
          if (s0 === peg$FAILED) {
            if (input.charCodeAt(peg$currPos) === 37) {
              s0 = peg$c49;
              peg$currPos++;
            } else {
              s0 = peg$FAILED;
              if (peg$silentFails === 0) {
                peg$fail(peg$c50);
              }
            }
            if (s0 === peg$FAILED) {
              if (input.charCodeAt(peg$currPos) === 38) {
                s0 = peg$c51;
                peg$currPos++;
              } else {
                s0 = peg$FAILED;
                if (peg$silentFails === 0) {
                  peg$fail(peg$c52);
                }
              }
              if (s0 === peg$FAILED) {
                if (input.charCodeAt(peg$currPos) === 39) {
                  s0 = peg$c53;
                  peg$currPos++;
                } else {
                  s0 = peg$FAILED;
                  if (peg$silentFails === 0) {
                    peg$fail(peg$c54);
                  }
                }
                if (s0 === peg$FAILED) {
                  if (input.charCodeAt(peg$currPos) === 40) {
                    s0 = peg$c55;
                    peg$currPos++;
                  } else {
                    s0 = peg$FAILED;
                    if (peg$silentFails === 0) {
                      peg$fail(peg$c56);
                    }
                  }
                  if (s0 === peg$FAILED) {
                    if (input.charCodeAt(peg$currPos) === 41) {
                      s0 = peg$c57;
                      peg$currPos++;
                    } else {
                      s0 = peg$FAILED;
                      if (peg$silentFails === 0) {
                        peg$fail(peg$c58);
                      }
                    }
                    if (s0 === peg$FAILED) {
                      if (input.charCodeAt(peg$currPos) === 42) {
                        s0 = peg$c59;
                        peg$currPos++;
                      } else {
                        s0 = peg$FAILED;
                        if (peg$silentFails === 0) {
                          peg$fail(peg$c60);
                        }
                      }
                      if (s0 === peg$FAILED) {
                        if (input.charCodeAt(peg$currPos) === 43) {
                          s0 = peg$c61;
                          peg$currPos++;
                        } else {
                          s0 = peg$FAILED;
                          if (peg$silentFails === 0) {
                            peg$fail(peg$c62);
                          }
                        }
                        if (s0 === peg$FAILED) {
                          if (input.charCodeAt(peg$currPos) === 44) {
                            s0 = peg$c63;
                            peg$currPos++;
                          } else {
                            s0 = peg$FAILED;
                            if (peg$silentFails === 0) {
                              peg$fail(peg$c64);
                            }
                          }
                          if (s0 === peg$FAILED) {
                            if (input.charCodeAt(peg$currPos) === 45) {
                              s0 = peg$c65;
                              peg$currPos++;
                            } else {
                              s0 = peg$FAILED;
                              if (peg$silentFails === 0) {
                                peg$fail(peg$c66);
                              }
                            }
                            if (s0 === peg$FAILED) {
                              if (input.charCodeAt(peg$currPos) === 46) {
                                s0 = peg$c67;
                                peg$currPos++;
                              } else {
                                s0 = peg$FAILED;
                                if (peg$silentFails === 0) {
                                  peg$fail(peg$c68);
                                }
                              }
                              if (s0 === peg$FAILED) {
                                if (input.charCodeAt(peg$currPos) === 47) {
                                  s0 = peg$c69;
                                  peg$currPos++;
                                } else {
                                  s0 = peg$FAILED;
                                  if (peg$silentFails === 0) {
                                    peg$fail(peg$c70);
                                  }
                                }
                                if (s0 === peg$FAILED) {
                                  if (input.charCodeAt(peg$currPos) === 58) {
                                    s0 = peg$c71;
                                    peg$currPos++;
                                  } else {
                                    s0 = peg$FAILED;
                                    if (peg$silentFails === 0) {
                                      peg$fail(peg$c72);
                                    }
                                  }
                                  if (s0 === peg$FAILED) {
                                    if (input.charCodeAt(peg$currPos) === 59) {
                                      s0 = peg$c73;
                                      peg$currPos++;
                                    } else {
                                      s0 = peg$FAILED;
                                      if (peg$silentFails === 0) {
                                        peg$fail(peg$c74);
                                      }
                                    }
                                    if (s0 === peg$FAILED) {
                                      if (input.charCodeAt(peg$currPos) === 60) {
                                        s0 = peg$c75;
                                        peg$currPos++;
                                      } else {
                                        s0 = peg$FAILED;
                                        if (peg$silentFails === 0) {
                                          peg$fail(peg$c76);
                                        }
                                      }
                                      if (s0 === peg$FAILED) {
                                        if (input.charCodeAt(peg$currPos) === 61) {
                                          s0 = peg$c77;
                                          peg$currPos++;
                                        } else {
                                          s0 = peg$FAILED;
                                          if (peg$silentFails === 0) {
                                            peg$fail(peg$c78);
                                          }
                                        }
                                        if (s0 === peg$FAILED) {
                                          if (input.charCodeAt(peg$currPos) === 62) {
                                            s0 = peg$c79;
                                            peg$currPos++;
                                          } else {
                                            s0 = peg$FAILED;
                                            if (peg$silentFails === 0) {
                                              peg$fail(peg$c80);
                                            }
                                          }
                                          if (s0 === peg$FAILED) {
                                            if (input.charCodeAt(peg$currPos) === 63) {
                                              s0 = peg$c81;
                                              peg$currPos++;
                                            } else {
                                              s0 = peg$FAILED;
                                              if (peg$silentFails === 0) {
                                                peg$fail(peg$c82);
                                              }
                                            }
                                            if (s0 === peg$FAILED) {
                                              if (input.charCodeAt(peg$currPos) === 64) {
                                                s0 = peg$c83;
                                                peg$currPos++;
                                              } else {
                                                s0 = peg$FAILED;
                                                if (peg$silentFails === 0) {
                                                  peg$fail(peg$c84);
                                                }
                                              }
                                              if (s0 === peg$FAILED) {
                                                if (input.charCodeAt(peg$currPos) === 91) {
                                                  s0 = peg$c85;
                                                  peg$currPos++;
                                                } else {
                                                  s0 = peg$FAILED;
                                                  if (peg$silentFails === 0) {
                                                    peg$fail(peg$c86);
                                                  }
                                                }
                                                if (s0 === peg$FAILED) {
                                                  if (input.charCodeAt(peg$currPos) === 92) {
                                                    s0 = peg$c87;
                                                    peg$currPos++;
                                                  } else {
                                                    s0 = peg$FAILED;
                                                    if (peg$silentFails === 0) {
                                                      peg$fail(peg$c88);
                                                    }
                                                  }
                                                  if (s0 === peg$FAILED) {
                                                    if (input.charCodeAt(peg$currPos) === 93) {
                                                      s0 = peg$c89;
                                                      peg$currPos++;
                                                    } else {
                                                      s0 = peg$FAILED;
                                                      if (peg$silentFails === 0) {
                                                        peg$fail(peg$c90);
                                                      }
                                                    }
                                                    if (s0 === peg$FAILED) {
                                                      if (input.charCodeAt(peg$currPos) === 94) {
                                                        s0 = peg$c91;
                                                        peg$currPos++;
                                                      } else {
                                                        s0 = peg$FAILED;
                                                        if (peg$silentFails === 0) {
                                                          peg$fail(peg$c92);
                                                        }
                                                      }
                                                      if (s0 === peg$FAILED) {
                                                        if (input.charCodeAt(peg$currPos) === 95) {
                                                          s0 = peg$c93;
                                                          peg$currPos++;
                                                        } else {
                                                          s0 = peg$FAILED;
                                                          if (peg$silentFails === 0) {
                                                            peg$fail(peg$c94);
                                                          }
                                                        }
                                                        if (s0 === peg$FAILED) {
                                                          if (input.charCodeAt(peg$currPos) === 96) {
                                                            s0 = peg$c95;
                                                            peg$currPos++;
                                                          } else {
                                                            s0 = peg$FAILED;
                                                            if (peg$silentFails === 0) {
                                                              peg$fail(peg$c96);
                                                            }
                                                          }
                                                          if (s0 === peg$FAILED) {
                                                            if (input.charCodeAt(peg$currPos) === 123) {
                                                              s0 = peg$c97;
                                                              peg$currPos++;
                                                            } else {
                                                              s0 = peg$FAILED;
                                                              if (peg$silentFails === 0) {
                                                                peg$fail(peg$c98);
                                                              }
                                                            }
                                                            if (s0 === peg$FAILED) {
                                                              if (input.charCodeAt(peg$currPos) === 124) {
                                                                s0 = peg$c99;
                                                                peg$currPos++;
                                                              } else {
                                                                s0 = peg$FAILED;
                                                                if (peg$silentFails === 0) {
                                                                  peg$fail(peg$c100);
                                                                }
                                                              }
                                                              if (s0 === peg$FAILED) {
                                                                if (input.charCodeAt(peg$currPos) === 125) {
                                                                  s0 = peg$c101;
                                                                  peg$currPos++;
                                                                } else {
                                                                  s0 = peg$FAILED;
                                                                  if (peg$silentFails === 0) {
                                                                    peg$fail(peg$c102);
                                                                  }
                                                                }
                                                                if (s0 === peg$FAILED) {
                                                                  if (input.charCodeAt(peg$currPos) === 126) {
                                                                    s0 = peg$c103;
                                                                    peg$currPos++;
                                                                  } else {
                                                                    s0 = peg$FAILED;
                                                                    if (peg$silentFails === 0) {
                                                                      peg$fail(peg$c104);
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }

    return s0;
  }

  function peg$parseSetQuoting$() {
    var s0, s1, s2, s3, s4;

    s0 = peg$currPos;
    peg$silentFails++;
    s1 = peg$currPos;
    s2 = peg$parseSameIndent();
    if (s2 !== peg$FAILED) {
      s3 = peg$parseQuoting();
      if (s3 !== peg$FAILED) {
        peg$savedPos = peg$currPos;
        s4 = peg$c239(s3);
        if (s4) {
          s4 = void 0;
        } else {
          s4 = peg$FAILED;
        }
        if (s4 !== peg$FAILED) {
          s2 = [s2, s3, s4];
          s1 = s2;
        } else {
          peg$currPos = s1;
          s1 = peg$FAILED;
        }
      } else {
        peg$currPos = s1;
        s1 = peg$FAILED;
      }
    } else {
      peg$currPos = s1;
      s1 = peg$FAILED;
    }
    peg$silentFails--;
    if (s1 !== peg$FAILED) {
      peg$currPos = s0;
      s0 = void 0;
    } else {
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseIsValidQuoting$() {
    var s0, s1, s2, s3;

    s0 = peg$currPos;
    peg$silentFails++;
    s1 = peg$currPos;
    s2 = peg$parseQuoting();
    if (s2 !== peg$FAILED) {
      peg$savedPos = peg$currPos;
      s3 = peg$c240(s2);
      if (s3) {
        s3 = void 0;
      } else {
        s3 = peg$FAILED;
      }
      if (s3 !== peg$FAILED) {
        s2 = [s2, s3];
        s1 = s2;
      } else {
        peg$currPos = s1;
        s1 = peg$FAILED;
      }
    } else {
      peg$currPos = s1;
      s1 = peg$FAILED;
    }
    peg$silentFails--;
    if (s1 !== peg$FAILED) {
      peg$currPos = s0;
      s0 = void 0;
    } else {
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseLineBlock() {
    var s0;

    s0 = peg$parseNestedLineBlock();
    if (s0 === peg$FAILED) {
      s0 = peg$parseSimpleLineBlock();
    }

    return s0;
  }

  function peg$parseNestedLineBlock() {
    var s0, s1, s2, s3, s4, s5;

    s0 = peg$currPos;
    s1 = peg$parsePushLineBlockIndent$();
    if (s1 !== peg$FAILED) {
      s2 = peg$parseLine();
      if (s2 !== peg$FAILED) {
        s3 = [];
        s4 = peg$parseLine();
        if (s4 === peg$FAILED) {
          s4 = peg$parseLineBlock();
        }
        while (s4 !== peg$FAILED) {
          s3.push(s4);
          s4 = peg$parseLine();
          if (s4 === peg$FAILED) {
            s4 = peg$parseLineBlock();
          }
        }
        if (s3 !== peg$FAILED) {
          s4 = peg$parsePopLineBlockIndent$();
          if (s4 !== peg$FAILED) {
            s5 = peg$parseLineBlock();
            if (s5 !== peg$FAILED) {
              peg$savedPos = s0;
              s1 = peg$c241(s1, s2, s3, s5);
              s0 = s1;
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseSimpleLineBlock() {
    var s0, s1, s2, s3;

    s0 = peg$currPos;
    s1 = peg$parsePushLineBlockIndent$();
    if (s1 !== peg$FAILED) {
      s2 = peg$parseLineBolockMain();
      if (s2 === peg$FAILED) {
        s2 = peg$parseFailbackLineBlockIndent$();
      }
      if (s2 !== peg$FAILED) {
        s3 = peg$parsePopLineBlockIndent$();
        if (s3 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c242(s1, s2);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseLineBolockMain() {
    var s0, s1, s2, s3, s4;

    s0 = peg$currPos;
    s1 = peg$parseLine();
    if (s1 !== peg$FAILED) {
      s2 = [];
      s3 = peg$parseLine();
      if (s3 === peg$FAILED) {
        s3 = peg$parseLineBlock();
      }
      while (s3 !== peg$FAILED) {
        s2.push(s3);
        s3 = peg$parseLine();
        if (s3 === peg$FAILED) {
          s3 = peg$parseLineBlock();
        }
      }
      if (s2 !== peg$FAILED) {
        s3 = peg$currPos;
        peg$silentFails++;
        s4 = peg$parseBlankLines();
        peg$silentFails--;
        if (s4 !== peg$FAILED) {
          peg$currPos = s3;
          s3 = void 0;
        } else {
          s3 = peg$FAILED;
        }
        if (s3 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c243(s1, s2);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseLine() {
    var s0;

    s0 = peg$parseNonEmptyLine();
    if (s0 === peg$FAILED) {
      s0 = peg$parseEmptyLine();
    }

    return s0;
  }

  function peg$parseNonEmptyLine() {
    var s0, s1, s2, s3, s4, s5;

    s0 = peg$currPos;
    s1 = peg$parseSameIndent();
    if (s1 !== peg$FAILED) {
      if (input.substr(peg$currPos, 2) === peg$c244) {
        s2 = peg$c244;
        peg$currPos += 2;
      } else {
        s2 = peg$FAILED;
        if (peg$silentFails === 0) {
          peg$fail(peg$c245);
        }
      }
      if (s2 !== peg$FAILED) {
        s3 = peg$parseSameLineBlockIndent();
        if (s3 !== peg$FAILED) {
          s4 = peg$parseOnelineParagraph();
          if (s4 !== peg$FAILED) {
            s5 = peg$parseNewline();
            if (s5 !== peg$FAILED) {
              peg$savedPos = s0;
              s1 = peg$c246(s4);
              s0 = s1;
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseEmptyLine() {
    var s0, s1, s2, s3, s4;

    s0 = peg$currPos;
    s1 = peg$parseSameIndent();
    if (s1 !== peg$FAILED) {
      if (input.charCodeAt(peg$currPos) === 124) {
        s2 = peg$c99;
        peg$currPos++;
      } else {
        s2 = peg$FAILED;
        if (peg$silentFails === 0) {
          peg$fail(peg$c100);
        }
      }
      if (s2 !== peg$FAILED) {
        s3 = [];
        s4 = peg$parseWhitespace();
        while (s4 !== peg$FAILED) {
          s3.push(s4);
          s4 = peg$parseWhitespace();
        }
        if (s3 !== peg$FAILED) {
          s4 = peg$parseNewline();
          if (s4 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c247();
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseSameLineBlockIndent() {
    var s0, s1, s2;

    s0 = peg$currPos;
    s1 = [];
    s2 = peg$parseWhitespace();
    while (s2 !== peg$FAILED) {
      s1.push(s2);
      s2 = peg$parseWhitespace();
    }
    if (s1 !== peg$FAILED) {
      peg$savedPos = peg$currPos;
      s2 = peg$c248(s1);
      if (s2) {
        s2 = void 0;
      } else {
        s2 = peg$FAILED;
      }
      if (s2 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c24(s1);
        s0 = s1;
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseDeepLineBlockIndent() {
    var s0, s1, s2;

    s0 = peg$currPos;
    s1 = [];
    s2 = peg$parseWhitespace();
    while (s2 !== peg$FAILED) {
      s1.push(s2);
      s2 = peg$parseWhitespace();
    }
    if (s1 !== peg$FAILED) {
      peg$savedPos = peg$currPos;
      s2 = peg$c249(s1);
      if (s2) {
        s2 = void 0;
      } else {
        s2 = peg$FAILED;
      }
      if (s2 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c24(s1);
        s0 = s1;
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parsePushLineBlockIndent$() {
    var s0, s1, s2, s3, s4, s5, s6, s7;

    s0 = peg$currPos;
    s1 = peg$currPos;
    peg$silentFails++;
    s2 = peg$currPos;
    s3 = [];
    s4 = peg$parseEmptyLine();
    while (s4 !== peg$FAILED) {
      s3.push(s4);
      s4 = peg$parseEmptyLine();
    }
    if (s3 !== peg$FAILED) {
      s4 = peg$parseSameIndent();
      if (s4 !== peg$FAILED) {
        if (input.substr(peg$currPos, 2) === peg$c244) {
          s5 = peg$c244;
          peg$currPos += 2;
        } else {
          s5 = peg$FAILED;
          if (peg$silentFails === 0) {
            peg$fail(peg$c245);
          }
        }
        if (s5 !== peg$FAILED) {
          s6 = peg$parseDeepLineBlockIndent();
          if (s6 !== peg$FAILED) {
            peg$savedPos = peg$currPos;
            s7 = peg$c250(s6);
            if (s7) {
              s7 = void 0;
            } else {
              s7 = peg$FAILED;
            }
            if (s7 !== peg$FAILED) {
              s3 = [s3, s4, s5, s6, s7];
              s2 = s3;
            } else {
              peg$currPos = s2;
              s2 = peg$FAILED;
            }
          } else {
            peg$currPos = s2;
            s2 = peg$FAILED;
          }
        } else {
          peg$currPos = s2;
          s2 = peg$FAILED;
        }
      } else {
        peg$currPos = s2;
        s2 = peg$FAILED;
      }
    } else {
      peg$currPos = s2;
      s2 = peg$FAILED;
    }
    peg$silentFails--;
    if (s2 !== peg$FAILED) {
      peg$currPos = s1;
      s1 = void 0;
    } else {
      s1 = peg$FAILED;
    }
    if (s1 !== peg$FAILED) {
      peg$savedPos = s0;
      s1 = peg$c251();
    }
    s0 = s1;

    return s0;
  }

  function peg$parsePopLineBlockIndent$() {
    var s0;

    peg$savedPos = peg$currPos;
    s0 = peg$c252();
    if (s0) {
      s0 = void 0;
    } else {
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseFailbackLineBlockIndent$() {
    var s0, s1, s2;

    s0 = peg$currPos;
    s1 = peg$parsePopLineBlockIndent$();
    if (s1 !== peg$FAILED) {
      s2 = peg$parseFail$();
      if (s2 !== peg$FAILED) {
        s1 = [s1, s2];
        s0 = s1;
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseInlineMarkupPreceding() {
    var s0, s1, s2;

    s0 = peg$currPos;
    if (input.length > peg$currPos) {
      s1 = input.charAt(peg$currPos);
      peg$currPos++;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) {
        peg$fail(peg$c2);
      }
    }
    if (s1 !== peg$FAILED) {
      peg$savedPos = peg$currPos;
      s2 = peg$c253(s1);
      if (s2) {
        s2 = void 0;
      } else {
        s2 = peg$FAILED;
      }
      if (s2 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c254(s1);
        s0 = s1;
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseInlineMarkupStartString() {
    var s0;

    if (input.substr(peg$currPos, 2) === peg$c200) {
      s0 = peg$c200;
      peg$currPos += 2;
    } else {
      s0 = peg$FAILED;
      if (peg$silentFails === 0) {
        peg$fail(peg$c201);
      }
    }
    if (s0 === peg$FAILED) {
      if (input.charCodeAt(peg$currPos) === 42) {
        s0 = peg$c59;
        peg$currPos++;
      } else {
        s0 = peg$FAILED;
        if (peg$silentFails === 0) {
          peg$fail(peg$c60);
        }
      }
      if (s0 === peg$FAILED) {
        if (input.substr(peg$currPos, 2) === peg$c206) {
          s0 = peg$c206;
          peg$currPos += 2;
        } else {
          s0 = peg$FAILED;
          if (peg$silentFails === 0) {
            peg$fail(peg$c207);
          }
        }
        if (s0 === peg$FAILED) {
          if (input.charCodeAt(peg$currPos) === 96) {
            s0 = peg$c95;
            peg$currPos++;
          } else {
            s0 = peg$FAILED;
            if (peg$silentFails === 0) {
              peg$fail(peg$c96);
            }
          }
          if (s0 === peg$FAILED) {
            if (input.charCodeAt(peg$currPos) === 124) {
              s0 = peg$c99;
              peg$currPos++;
            } else {
              s0 = peg$FAILED;
              if (peg$silentFails === 0) {
                peg$fail(peg$c100);
              }
            }
            if (s0 === peg$FAILED) {
              if (input.substr(peg$currPos, 2) === peg$c212) {
                s0 = peg$c212;
                peg$currPos += 2;
              } else {
                s0 = peg$FAILED;
                if (peg$silentFails === 0) {
                  peg$fail(peg$c213);
                }
              }
            }
          }
        }
      }
    }

    return s0;
  }

  function peg$parseInlineMarkupBeggining() {
    var s0, s1, s2, s3, s4, s5, s6;

    s0 = peg$currPos;
    s1 = peg$parseInlineMarkupPreceding();
    if (s1 !== peg$FAILED) {
      s2 = peg$parseInlineMarkupStartString();
      if (s2 !== peg$FAILED) {
        s3 = peg$currPos;
        peg$silentFails++;
        s4 = peg$parseEndline();
        peg$silentFails--;
        if (s4 === peg$FAILED) {
          s3 = void 0;
        } else {
          peg$currPos = s3;
          s3 = peg$FAILED;
        }
        if (s3 !== peg$FAILED) {
          s4 = peg$currPos;
          peg$silentFails++;
          s5 = peg$parseWhitespace();
          peg$silentFails--;
          if (s5 === peg$FAILED) {
            s4 = void 0;
          } else {
            peg$currPos = s4;
            s4 = peg$FAILED;
          }
          if (s4 !== peg$FAILED) {
            if (input.length > peg$currPos) {
              s5 = input.charAt(peg$currPos);
              peg$currPos++;
            } else {
              s5 = peg$FAILED;
              if (peg$silentFails === 0) {
                peg$fail(peg$c2);
              }
            }
            if (s5 !== peg$FAILED) {
              peg$savedPos = peg$currPos;
              s6 = peg$c255(s1, s2, s5);
              if (s6) {
                s6 = void 0;
              } else {
                s6 = peg$FAILED;
              }
              if (s6 !== peg$FAILED) {
                s1 = [s1, s2, s3, s4, s5, s6];
                s0 = s1;
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    if (s0 === peg$FAILED) {
      s0 = peg$currPos;
      s1 = peg$parseInlineMarkupPreceding();
      if (s1 !== peg$FAILED) {
        s2 = peg$parseInterpretedText();
        if (s2 === peg$FAILED) {
          s2 = peg$parseFootnoteReference();
          if (s2 === peg$FAILED) {
            s2 = peg$parseCitationReference();
            if (s2 === peg$FAILED) {
              s2 = peg$parseAnonymousSimpleHyperlinkReference();
              if (s2 === peg$FAILED) {
                s2 = peg$parseNamedSimpleHyperlinkReference();
              }
            }
          }
        }
        if (s2 !== peg$FAILED) {
          s1 = [s1, s2];
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    }

    return s0;
  }

  function peg$parseParagraph() {
    var s0, s1, s2, s3, s4, s5;

    s0 = peg$currPos;
    s1 = [];
    s2 = peg$currPos;
    s3 = peg$parseSameIndent();
    if (s3 !== peg$FAILED) {
      s4 = peg$parseParagraphBlock();
      if (s4 !== peg$FAILED) {
        s3 = [s3, s4];
        s2 = s3;
      } else {
        peg$currPos = s2;
        s2 = peg$FAILED;
      }
    } else {
      peg$currPos = s2;
      s2 = peg$FAILED;
    }
    if (s2 !== peg$FAILED) {
      while (s2 !== peg$FAILED) {
        s1.push(s2);
        s2 = peg$currPos;
        s3 = peg$parseSameIndent();
        if (s3 !== peg$FAILED) {
          s4 = peg$parseParagraphBlock();
          if (s4 !== peg$FAILED) {
            s3 = [s3, s4];
            s2 = s3;
          } else {
            peg$currPos = s2;
            s2 = peg$FAILED;
          }
        } else {
          peg$currPos = s2;
          s2 = peg$FAILED;
        }
      }
    } else {
      s1 = peg$FAILED;
    }
    if (s1 !== peg$FAILED) {
      s2 = peg$currPos;
      peg$silentFails++;
      s3 = peg$currPos;
      s4 = peg$parseLiteralBlockWithoutIndent();
      if (s4 !== peg$FAILED) {
        s5 = peg$parseSkipIndentCheck$();
        if (s5 !== peg$FAILED) {
          s4 = [s4, s5];
          s3 = s4;
        } else {
          peg$currPos = s3;
          s3 = peg$FAILED;
        }
      } else {
        peg$currPos = s3;
        s3 = peg$FAILED;
      }
      if (s3 === peg$FAILED) {
        s3 = peg$parseBlankLines();
        if (s3 === peg$FAILED) {
          s3 = peg$parseEndIndent();
        }
      }
      peg$silentFails--;
      if (s3 !== peg$FAILED) {
        peg$currPos = s2;
        s2 = void 0;
      } else {
        s2 = peg$FAILED;
      }
      if (s2 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c256(s1);
        s0 = s1;
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseParagraphBlock() {
    var s0, s1, s2, s3, s4;

    s0 = peg$currPos;
    s1 = [];
    s2 = peg$currPos;
    s3 = peg$currPos;
    peg$silentFails++;
    s4 = peg$parseBlankLines();
    if (s4 === peg$FAILED) {
      s4 = peg$parseLiteralBlockWithoutIndent();
    }
    peg$silentFails--;
    if (s4 === peg$FAILED) {
      s3 = void 0;
    } else {
      peg$currPos = s3;
      s3 = peg$FAILED;
    }
    if (s3 !== peg$FAILED) {
      s4 = peg$parseInlineMarkup();
      if (s4 === peg$FAILED) {
        s4 = peg$parseParagraphText();
      }
      if (s4 !== peg$FAILED) {
        s3 = [s3, s4];
        s2 = s3;
      } else {
        peg$currPos = s2;
        s2 = peg$FAILED;
      }
    } else {
      peg$currPos = s2;
      s2 = peg$FAILED;
    }
    if (s2 !== peg$FAILED) {
      while (s2 !== peg$FAILED) {
        s1.push(s2);
        s2 = peg$currPos;
        s3 = peg$currPos;
        peg$silentFails++;
        s4 = peg$parseBlankLines();
        if (s4 === peg$FAILED) {
          s4 = peg$parseLiteralBlockWithoutIndent();
        }
        peg$silentFails--;
        if (s4 === peg$FAILED) {
          s3 = void 0;
        } else {
          peg$currPos = s3;
          s3 = peg$FAILED;
        }
        if (s3 !== peg$FAILED) {
          s4 = peg$parseInlineMarkup();
          if (s4 === peg$FAILED) {
            s4 = peg$parseParagraphText();
          }
          if (s4 !== peg$FAILED) {
            s3 = [s3, s4];
            s2 = s3;
          } else {
            peg$currPos = s2;
            s2 = peg$FAILED;
          }
        } else {
          peg$currPos = s2;
          s2 = peg$FAILED;
        }
      }
    } else {
      s1 = peg$FAILED;
    }
    if (s1 !== peg$FAILED) {
      s2 = [];
      s3 = peg$parseWhitespace();
      while (s3 !== peg$FAILED) {
        s2.push(s3);
        s3 = peg$parseWhitespace();
      }
      if (s2 !== peg$FAILED) {
        s3 = peg$parseEndline();
        if (s3 === peg$FAILED) {
          s3 = peg$currPos;
          peg$silentFails++;
          s4 = peg$parseLiteralBlockWithoutIndent();
          peg$silentFails--;
          if (s4 !== peg$FAILED) {
            peg$currPos = s3;
            s3 = void 0;
          } else {
            s3 = peg$FAILED;
          }
        }
        if (s3 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c257(s1, s3);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseParagraphText() {
    var s0, s1, s2, s3, s4, s5;

    s0 = peg$currPos;
    s1 = [];
    s2 = peg$currPos;
    s3 = peg$currPos;
    peg$silentFails++;
    s4 = peg$parseEndline();
    if (s4 === peg$FAILED) {
      s4 = peg$parseLiteralBlockWithoutIndent();
    }
    peg$silentFails--;
    if (s4 === peg$FAILED) {
      s3 = void 0;
    } else {
      peg$currPos = s3;
      s3 = peg$FAILED;
    }
    if (s3 !== peg$FAILED) {
      s4 = peg$currPos;
      peg$silentFails++;
      s5 = peg$parseInlineMarkupBeggining();
      peg$silentFails--;
      if (s5 === peg$FAILED) {
        s4 = void 0;
      } else {
        peg$currPos = s4;
        s4 = peg$FAILED;
      }
      if (s4 !== peg$FAILED) {
        if (input.length > peg$currPos) {
          s5 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s5 = peg$FAILED;
          if (peg$silentFails === 0) {
            peg$fail(peg$c2);
          }
        }
        if (s5 !== peg$FAILED) {
          s3 = [s3, s4, s5];
          s2 = s3;
        } else {
          peg$currPos = s2;
          s2 = peg$FAILED;
        }
      } else {
        peg$currPos = s2;
        s2 = peg$FAILED;
      }
    } else {
      peg$currPos = s2;
      s2 = peg$FAILED;
    }
    if (s2 !== peg$FAILED) {
      while (s2 !== peg$FAILED) {
        s1.push(s2);
        s2 = peg$currPos;
        s3 = peg$currPos;
        peg$silentFails++;
        s4 = peg$parseEndline();
        if (s4 === peg$FAILED) {
          s4 = peg$parseLiteralBlockWithoutIndent();
        }
        peg$silentFails--;
        if (s4 === peg$FAILED) {
          s3 = void 0;
        } else {
          peg$currPos = s3;
          s3 = peg$FAILED;
        }
        if (s3 !== peg$FAILED) {
          s4 = peg$currPos;
          peg$silentFails++;
          s5 = peg$parseInlineMarkupBeggining();
          peg$silentFails--;
          if (s5 === peg$FAILED) {
            s4 = void 0;
          } else {
            peg$currPos = s4;
            s4 = peg$FAILED;
          }
          if (s4 !== peg$FAILED) {
            if (input.length > peg$currPos) {
              s5 = input.charAt(peg$currPos);
              peg$currPos++;
            } else {
              s5 = peg$FAILED;
              if (peg$silentFails === 0) {
                peg$fail(peg$c2);
              }
            }
            if (s5 !== peg$FAILED) {
              s3 = [s3, s4, s5];
              s2 = s3;
            } else {
              peg$currPos = s2;
              s2 = peg$FAILED;
            }
          } else {
            peg$currPos = s2;
            s2 = peg$FAILED;
          }
        } else {
          peg$currPos = s2;
          s2 = peg$FAILED;
        }
      }
    } else {
      s1 = peg$FAILED;
    }
    if (s1 !== peg$FAILED) {
      s2 = peg$currPos;
      peg$silentFails++;
      s3 = peg$parseEndline();
      if (s3 === peg$FAILED) {
        s3 = peg$parseLiteralBlockWithoutIndent();
      }
      peg$silentFails--;
      if (s3 !== peg$FAILED) {
        peg$currPos = s2;
        s2 = void 0;
      } else {
        s2 = peg$FAILED;
      }
      if (s2 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c194(s1);
        s0 = s1;
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    if (s0 === peg$FAILED) {
      s0 = peg$currPos;
      s1 = [];
      s2 = peg$currPos;
      s3 = peg$currPos;
      peg$silentFails++;
      s4 = peg$parseEndline();
      peg$silentFails--;
      if (s4 === peg$FAILED) {
        s3 = void 0;
      } else {
        peg$currPos = s3;
        s3 = peg$FAILED;
      }
      if (s3 !== peg$FAILED) {
        s4 = peg$currPos;
        peg$silentFails++;
        s5 = peg$parseInlineMarkupBeggining();
        peg$silentFails--;
        if (s5 === peg$FAILED) {
          s4 = void 0;
        } else {
          peg$currPos = s4;
          s4 = peg$FAILED;
        }
        if (s4 !== peg$FAILED) {
          if (input.length > peg$currPos) {
            s5 = input.charAt(peg$currPos);
            peg$currPos++;
          } else {
            s5 = peg$FAILED;
            if (peg$silentFails === 0) {
              peg$fail(peg$c2);
            }
          }
          if (s5 !== peg$FAILED) {
            s3 = [s3, s4, s5];
            s2 = s3;
          } else {
            peg$currPos = s2;
            s2 = peg$FAILED;
          }
        } else {
          peg$currPos = s2;
          s2 = peg$FAILED;
        }
      } else {
        peg$currPos = s2;
        s2 = peg$FAILED;
      }
      while (s2 !== peg$FAILED) {
        s1.push(s2);
        s2 = peg$currPos;
        s3 = peg$currPos;
        peg$silentFails++;
        s4 = peg$parseEndline();
        peg$silentFails--;
        if (s4 === peg$FAILED) {
          s3 = void 0;
        } else {
          peg$currPos = s3;
          s3 = peg$FAILED;
        }
        if (s3 !== peg$FAILED) {
          s4 = peg$currPos;
          peg$silentFails++;
          s5 = peg$parseInlineMarkupBeggining();
          peg$silentFails--;
          if (s5 === peg$FAILED) {
            s4 = void 0;
          } else {
            peg$currPos = s4;
            s4 = peg$FAILED;
          }
          if (s4 !== peg$FAILED) {
            if (input.length > peg$currPos) {
              s5 = input.charAt(peg$currPos);
              peg$currPos++;
            } else {
              s5 = peg$FAILED;
              if (peg$silentFails === 0) {
                peg$fail(peg$c2);
              }
            }
            if (s5 !== peg$FAILED) {
              s3 = [s3, s4, s5];
              s2 = s3;
            } else {
              peg$currPos = s2;
              s2 = peg$FAILED;
            }
          } else {
            peg$currPos = s2;
            s2 = peg$FAILED;
          }
        } else {
          peg$currPos = s2;
          s2 = peg$FAILED;
        }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parseInlineMarkupPreceding();
        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c258(s1, s2);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    }

    return s0;
  }

  function peg$parseOnelineParagraph() {
    var s0, s1;

    s0 = [];
    s1 = peg$parseInlineMarkupWithoutNewline();
    if (s1 === peg$FAILED) {
      s1 = peg$parseOnelineText();
    }
    if (s1 !== peg$FAILED) {
      while (s1 !== peg$FAILED) {
        s0.push(s1);
        s1 = peg$parseInlineMarkupWithoutNewline();
        if (s1 === peg$FAILED) {
          s1 = peg$parseOnelineText();
        }
      }
    } else {
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseOnelineText() {
    var s0, s1, s2, s3, s4, s5;

    s0 = peg$currPos;
    s1 = [];
    s2 = peg$currPos;
    s3 = peg$currPos;
    peg$silentFails++;
    s4 = peg$parseEndline();
    peg$silentFails--;
    if (s4 === peg$FAILED) {
      s3 = void 0;
    } else {
      peg$currPos = s3;
      s3 = peg$FAILED;
    }
    if (s3 !== peg$FAILED) {
      s4 = peg$currPos;
      peg$silentFails++;
      s5 = peg$parseInlineMarkupBeggining();
      peg$silentFails--;
      if (s5 === peg$FAILED) {
        s4 = void 0;
      } else {
        peg$currPos = s4;
        s4 = peg$FAILED;
      }
      if (s4 !== peg$FAILED) {
        if (input.length > peg$currPos) {
          s5 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s5 = peg$FAILED;
          if (peg$silentFails === 0) {
            peg$fail(peg$c2);
          }
        }
        if (s5 !== peg$FAILED) {
          s3 = [s3, s4, s5];
          s2 = s3;
        } else {
          peg$currPos = s2;
          s2 = peg$FAILED;
        }
      } else {
        peg$currPos = s2;
        s2 = peg$FAILED;
      }
    } else {
      peg$currPos = s2;
      s2 = peg$FAILED;
    }
    if (s2 !== peg$FAILED) {
      while (s2 !== peg$FAILED) {
        s1.push(s2);
        s2 = peg$currPos;
        s3 = peg$currPos;
        peg$silentFails++;
        s4 = peg$parseEndline();
        peg$silentFails--;
        if (s4 === peg$FAILED) {
          s3 = void 0;
        } else {
          peg$currPos = s3;
          s3 = peg$FAILED;
        }
        if (s3 !== peg$FAILED) {
          s4 = peg$currPos;
          peg$silentFails++;
          s5 = peg$parseInlineMarkupBeggining();
          peg$silentFails--;
          if (s5 === peg$FAILED) {
            s4 = void 0;
          } else {
            peg$currPos = s4;
            s4 = peg$FAILED;
          }
          if (s4 !== peg$FAILED) {
            if (input.length > peg$currPos) {
              s5 = input.charAt(peg$currPos);
              peg$currPos++;
            } else {
              s5 = peg$FAILED;
              if (peg$silentFails === 0) {
                peg$fail(peg$c2);
              }
            }
            if (s5 !== peg$FAILED) {
              s3 = [s3, s4, s5];
              s2 = s3;
            } else {
              peg$currPos = s2;
              s2 = peg$FAILED;
            }
          } else {
            peg$currPos = s2;
            s2 = peg$FAILED;
          }
        } else {
          peg$currPos = s2;
          s2 = peg$FAILED;
        }
      }
    } else {
      s1 = peg$FAILED;
    }
    if (s1 !== peg$FAILED) {
      s2 = peg$currPos;
      s3 = peg$currPos;
      peg$silentFails++;
      s4 = peg$parseEndline();
      peg$silentFails--;
      if (s4 === peg$FAILED) {
        s3 = void 0;
      } else {
        peg$currPos = s3;
        s3 = peg$FAILED;
      }
      if (s3 !== peg$FAILED) {
        s4 = peg$parseInlineMarkupPreceding();
        if (s4 !== peg$FAILED) {
          s3 = [s3, s4];
          s2 = s3;
        } else {
          peg$currPos = s2;
          s2 = peg$FAILED;
        }
      } else {
        peg$currPos = s2;
        s2 = peg$FAILED;
      }
      if (s2 === peg$FAILED) {
        s2 = null;
      }
      if (s2 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c259(s1, s2);
        s0 = s1;
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    if (s0 === peg$FAILED) {
      s0 = peg$currPos;
      s1 = [];
      s2 = peg$currPos;
      s3 = peg$currPos;
      peg$silentFails++;
      s4 = peg$parseEndline();
      peg$silentFails--;
      if (s4 === peg$FAILED) {
        s3 = void 0;
      } else {
        peg$currPos = s3;
        s3 = peg$FAILED;
      }
      if (s3 !== peg$FAILED) {
        s4 = peg$currPos;
        peg$silentFails++;
        s5 = peg$parseInlineMarkupBeggining();
        peg$silentFails--;
        if (s5 === peg$FAILED) {
          s4 = void 0;
        } else {
          peg$currPos = s4;
          s4 = peg$FAILED;
        }
        if (s4 !== peg$FAILED) {
          if (input.length > peg$currPos) {
            s5 = input.charAt(peg$currPos);
            peg$currPos++;
          } else {
            s5 = peg$FAILED;
            if (peg$silentFails === 0) {
              peg$fail(peg$c2);
            }
          }
          if (s5 !== peg$FAILED) {
            s3 = [s3, s4, s5];
            s2 = s3;
          } else {
            peg$currPos = s2;
            s2 = peg$FAILED;
          }
        } else {
          peg$currPos = s2;
          s2 = peg$FAILED;
        }
      } else {
        peg$currPos = s2;
        s2 = peg$FAILED;
      }
      while (s2 !== peg$FAILED) {
        s1.push(s2);
        s2 = peg$currPos;
        s3 = peg$currPos;
        peg$silentFails++;
        s4 = peg$parseEndline();
        peg$silentFails--;
        if (s4 === peg$FAILED) {
          s3 = void 0;
        } else {
          peg$currPos = s3;
          s3 = peg$FAILED;
        }
        if (s3 !== peg$FAILED) {
          s4 = peg$currPos;
          peg$silentFails++;
          s5 = peg$parseInlineMarkupBeggining();
          peg$silentFails--;
          if (s5 === peg$FAILED) {
            s4 = void 0;
          } else {
            peg$currPos = s4;
            s4 = peg$FAILED;
          }
          if (s4 !== peg$FAILED) {
            if (input.length > peg$currPos) {
              s5 = input.charAt(peg$currPos);
              peg$currPos++;
            } else {
              s5 = peg$FAILED;
              if (peg$silentFails === 0) {
                peg$fail(peg$c2);
              }
            }
            if (s5 !== peg$FAILED) {
              s3 = [s3, s4, s5];
              s2 = s3;
            } else {
              peg$currPos = s2;
              s2 = peg$FAILED;
            }
          } else {
            peg$currPos = s2;
            s2 = peg$FAILED;
          }
        } else {
          peg$currPos = s2;
          s2 = peg$FAILED;
        }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$currPos;
        s3 = peg$currPos;
        peg$silentFails++;
        s4 = peg$parseEndline();
        peg$silentFails--;
        if (s4 === peg$FAILED) {
          s3 = void 0;
        } else {
          peg$currPos = s3;
          s3 = peg$FAILED;
        }
        if (s3 !== peg$FAILED) {
          s4 = peg$parseInlineMarkupPreceding();
          if (s4 !== peg$FAILED) {
            s3 = [s3, s4];
            s2 = s3;
          } else {
            peg$currPos = s2;
            s2 = peg$FAILED;
          }
        } else {
          peg$currPos = s2;
          s2 = peg$FAILED;
        }
        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c260(s1, s2);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    }

    return s0;
  }

  function peg$parseDirectiveType() {
    var s0, s1, s2, s3, s4, s5;

    s0 = peg$currPos;
    s1 = [];
    s2 = peg$currPos;
    if (peg$c261.test(input.charAt(peg$currPos))) {
      s3 = input.charAt(peg$currPos);
      peg$currPos++;
    } else {
      s3 = peg$FAILED;
      if (peg$silentFails === 0) {
        peg$fail(peg$c262);
      }
    }
    if (s3 !== peg$FAILED) {
      s4 = peg$currPos;
      peg$silentFails++;
      if (input.substr(peg$currPos, 2) === peg$c235) {
        s5 = peg$c235;
        peg$currPos += 2;
      } else {
        s5 = peg$FAILED;
        if (peg$silentFails === 0) {
          peg$fail(peg$c236);
        }
      }
      peg$silentFails--;
      if (s5 === peg$FAILED) {
        s4 = void 0;
      } else {
        peg$currPos = s4;
        s4 = peg$FAILED;
      }
      if (s4 !== peg$FAILED) {
        if (peg$c263.test(input.charAt(peg$currPos))) {
          s5 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s5 = peg$FAILED;
          if (peg$silentFails === 0) {
            peg$fail(peg$c264);
          }
        }
        if (s5 === peg$FAILED) {
          s5 = null;
        }
        if (s5 !== peg$FAILED) {
          s3 = [s3, s4, s5];
          s2 = s3;
        } else {
          peg$currPos = s2;
          s2 = peg$FAILED;
        }
      } else {
        peg$currPos = s2;
        s2 = peg$FAILED;
      }
    } else {
      peg$currPos = s2;
      s2 = peg$FAILED;
    }
    while (s2 !== peg$FAILED) {
      s1.push(s2);
      s2 = peg$currPos;
      if (peg$c261.test(input.charAt(peg$currPos))) {
        s3 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s3 = peg$FAILED;
        if (peg$silentFails === 0) {
          peg$fail(peg$c262);
        }
      }
      if (s3 !== peg$FAILED) {
        s4 = peg$currPos;
        peg$silentFails++;
        if (input.substr(peg$currPos, 2) === peg$c235) {
          s5 = peg$c235;
          peg$currPos += 2;
        } else {
          s5 = peg$FAILED;
          if (peg$silentFails === 0) {
            peg$fail(peg$c236);
          }
        }
        peg$silentFails--;
        if (s5 === peg$FAILED) {
          s4 = void 0;
        } else {
          peg$currPos = s4;
          s4 = peg$FAILED;
        }
        if (s4 !== peg$FAILED) {
          if (peg$c263.test(input.charAt(peg$currPos))) {
            s5 = input.charAt(peg$currPos);
            peg$currPos++;
          } else {
            s5 = peg$FAILED;
            if (peg$silentFails === 0) {
              peg$fail(peg$c264);
            }
          }
          if (s5 === peg$FAILED) {
            s5 = null;
          }
          if (s5 !== peg$FAILED) {
            s3 = [s3, s4, s5];
            s2 = s3;
          } else {
            peg$currPos = s2;
            s2 = peg$FAILED;
          }
        } else {
          peg$currPos = s2;
          s2 = peg$FAILED;
        }
      } else {
        peg$currPos = s2;
        s2 = peg$FAILED;
      }
    }
    if (s1 !== peg$FAILED) {
      if (peg$c261.test(input.charAt(peg$currPos))) {
        s2 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s2 = peg$FAILED;
        if (peg$silentFails === 0) {
          peg$fail(peg$c262);
        }
      }
      if (s2 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c265(s1, s2);
        s0 = s1;
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseDirective() {
    var s0;

    s0 = peg$parseDirectiveStartFromFirstLine();
    if (s0 === peg$FAILED) {
      s0 = peg$parseDirectiveStartFromNextLine();
    }

    return s0;
  }

  function peg$parseDirectiveStartFromFirstLine() {
    var s0, s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11;

    s0 = peg$currPos;
    s1 = peg$parseSameIndent();
    if (s1 !== peg$FAILED) {
      if (input.substr(peg$currPos, 2) === peg$c181) {
        s2 = peg$c181;
        peg$currPos += 2;
      } else {
        s2 = peg$FAILED;
        if (peg$silentFails === 0) {
          peg$fail(peg$c182);
        }
      }
      if (s2 !== peg$FAILED) {
        s3 = [];
        s4 = peg$parseWhitespace();
        if (s4 !== peg$FAILED) {
          while (s4 !== peg$FAILED) {
            s3.push(s4);
            s4 = peg$parseWhitespace();
          }
        } else {
          s3 = peg$FAILED;
        }
        if (s3 !== peg$FAILED) {
          s4 = peg$parseDirectiveType();
          if (s4 !== peg$FAILED) {
            if (input.substr(peg$currPos, 2) === peg$c235) {
              s5 = peg$c235;
              peg$currPos += 2;
            } else {
              s5 = peg$FAILED;
              if (peg$silentFails === 0) {
                peg$fail(peg$c236);
              }
            }
            if (s5 !== peg$FAILED) {
              s6 = [];
              s7 = peg$parseWhitespace();
              if (s7 !== peg$FAILED) {
                while (s7 !== peg$FAILED) {
                  s6.push(s7);
                  s7 = peg$parseWhitespace();
                }
              } else {
                s6 = peg$FAILED;
              }
              if (s6 !== peg$FAILED) {
                s7 = peg$currPos;
                peg$silentFails++;
                s8 = peg$parseNonspacechar();
                peg$silentFails--;
                if (s8 !== peg$FAILED) {
                  peg$currPos = s7;
                  s7 = void 0;
                } else {
                  s7 = peg$FAILED;
                }
                if (s7 !== peg$FAILED) {
                  s8 = peg$parseRawLine();
                  if (s8 !== peg$FAILED) {
                    s9 = peg$currPos;
                    s10 = peg$parseBlankLines();
                    if (s10 === peg$FAILED) {
                      s10 = null;
                    }
                    if (s10 !== peg$FAILED) {
                      s11 = peg$parseDirectiveBlock();
                      if (s11 !== peg$FAILED) {
                        s10 = [s10, s11];
                        s9 = s10;
                      } else {
                        peg$currPos = s9;
                        s9 = peg$FAILED;
                      }
                    } else {
                      peg$currPos = s9;
                      s9 = peg$FAILED;
                    }
                    if (s9 === peg$FAILED) {
                      s9 = null;
                    }
                    if (s9 !== peg$FAILED) {
                      peg$savedPos = s0;
                      s1 = peg$c266(s4, s8, s9);
                      s0 = s1;
                    } else {
                      peg$currPos = s0;
                      s0 = peg$FAILED;
                    }
                  } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseDirectiveStartFromNextLine() {
    var s0, s1, s2, s3, s4, s5, s6, s7, s8;

    s0 = peg$currPos;
    s1 = peg$parseSameIndent();
    if (s1 !== peg$FAILED) {
      if (input.substr(peg$currPos, 2) === peg$c181) {
        s2 = peg$c181;
        peg$currPos += 2;
      } else {
        s2 = peg$FAILED;
        if (peg$silentFails === 0) {
          peg$fail(peg$c182);
        }
      }
      if (s2 !== peg$FAILED) {
        s3 = [];
        s4 = peg$parseWhitespace();
        if (s4 !== peg$FAILED) {
          while (s4 !== peg$FAILED) {
            s3.push(s4);
            s4 = peg$parseWhitespace();
          }
        } else {
          s3 = peg$FAILED;
        }
        if (s3 !== peg$FAILED) {
          s4 = peg$parseDirectiveType();
          if (s4 !== peg$FAILED) {
            if (input.substr(peg$currPos, 2) === peg$c235) {
              s5 = peg$c235;
              peg$currPos += 2;
            } else {
              s5 = peg$FAILED;
              if (peg$silentFails === 0) {
                peg$fail(peg$c236);
              }
            }
            if (s5 !== peg$FAILED) {
              s6 = [];
              s7 = peg$parseWhitespace();
              while (s7 !== peg$FAILED) {
                s6.push(s7);
                s7 = peg$parseWhitespace();
              }
              if (s6 !== peg$FAILED) {
                s7 = peg$parseNewline();
                if (s7 !== peg$FAILED) {
                  s8 = peg$parseDirectiveBlock();
                  if (s8 === peg$FAILED) {
                    s8 = null;
                  }
                  if (s8 !== peg$FAILED) {
                    peg$savedPos = s0;
                    s1 = peg$c267(s4, s8);
                    s0 = s1;
                  } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseDirectiveBlock() {
    var s0, s1, s2, s3, s4, s5, s6;

    s0 = peg$currPos;
    s1 = peg$parseBlankLines();
    if (s1 === peg$FAILED) {
      s1 = null;
    }
    if (s1 !== peg$FAILED) {
      s2 = peg$parsePushCommonIndent$();
      if (s2 !== peg$FAILED) {
        s3 = [];
        s4 = peg$currPos;
        s5 = [];
        s6 = peg$parseWhitespace();
        while (s6 !== peg$FAILED) {
          s5.push(s6);
          s6 = peg$parseWhitespace();
        }
        if (s5 !== peg$FAILED) {
          s6 = peg$parseNewline();
          if (s6 !== peg$FAILED) {
            peg$savedPos = s4;
            s5 = peg$c185(s2);
            s4 = s5;
          } else {
            peg$currPos = s4;
            s4 = peg$FAILED;
          }
        } else {
          peg$currPos = s4;
          s4 = peg$FAILED;
        }
        if (s4 === peg$FAILED) {
          s4 = peg$currPos;
          s5 = peg$parseSameOrDeepIndent();
          if (s5 !== peg$FAILED) {
            s6 = peg$parseNotEmptyRawLine();
            if (s6 !== peg$FAILED) {
              s5 = [s5, s6];
              s4 = s5;
            } else {
              peg$currPos = s4;
              s4 = peg$FAILED;
            }
          } else {
            peg$currPos = s4;
            s4 = peg$FAILED;
          }
        }
        if (s4 !== peg$FAILED) {
          while (s4 !== peg$FAILED) {
            s3.push(s4);
            s4 = peg$currPos;
            s5 = [];
            s6 = peg$parseWhitespace();
            while (s6 !== peg$FAILED) {
              s5.push(s6);
              s6 = peg$parseWhitespace();
            }
            if (s5 !== peg$FAILED) {
              s6 = peg$parseNewline();
              if (s6 !== peg$FAILED) {
                peg$savedPos = s4;
                s5 = peg$c185(s2);
                s4 = s5;
              } else {
                peg$currPos = s4;
                s4 = peg$FAILED;
              }
            } else {
              peg$currPos = s4;
              s4 = peg$FAILED;
            }
            if (s4 === peg$FAILED) {
              s4 = peg$currPos;
              s5 = peg$parseSameOrDeepIndent();
              if (s5 !== peg$FAILED) {
                s6 = peg$parseNotEmptyRawLine();
                if (s6 !== peg$FAILED) {
                  s5 = [s5, s6];
                  s4 = s5;
                } else {
                  peg$currPos = s4;
                  s4 = peg$FAILED;
                }
              } else {
                peg$currPos = s4;
                s4 = peg$FAILED;
              }
            }
          }
        } else {
          s3 = peg$FAILED;
        }
        if (s3 === peg$FAILED) {
          s3 = peg$parseFailbackIndent$();
        }
        if (s3 !== peg$FAILED) {
          s4 = peg$parsePopIndent$();
          if (s4 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c268(s2, s3);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseUnknown() {
    var s0, s1, s2, s3, s4, s5;

    s0 = peg$currPos;
    s1 = peg$parseBlankLines();
    if (s1 === peg$FAILED) {
      s1 = null;
    }
    if (s1 !== peg$FAILED) {
      s2 = [];
      s3 = peg$currPos;
      s4 = peg$currPos;
      peg$silentFails++;
      s5 = peg$parseBlankLines();
      peg$silentFails--;
      if (s5 === peg$FAILED) {
        s4 = void 0;
      } else {
        peg$currPos = s4;
        s4 = peg$FAILED;
      }
      if (s4 !== peg$FAILED) {
        s5 = peg$parseUnknownLine();
        if (s5 !== peg$FAILED) {
          s4 = [s4, s5];
          s3 = s4;
        } else {
          peg$currPos = s3;
          s3 = peg$FAILED;
        }
      } else {
        peg$currPos = s3;
        s3 = peg$FAILED;
      }
      if (s3 !== peg$FAILED) {
        while (s3 !== peg$FAILED) {
          s2.push(s3);
          s3 = peg$currPos;
          s4 = peg$currPos;
          peg$silentFails++;
          s5 = peg$parseBlankLines();
          peg$silentFails--;
          if (s5 === peg$FAILED) {
            s4 = void 0;
          } else {
            peg$currPos = s4;
            s4 = peg$FAILED;
          }
          if (s4 !== peg$FAILED) {
            s5 = peg$parseUnknownLine();
            if (s5 !== peg$FAILED) {
              s4 = [s4, s5];
              s3 = s4;
            } else {
              peg$currPos = s3;
              s3 = peg$FAILED;
            }
          } else {
            peg$currPos = s3;
            s3 = peg$FAILED;
          }
        }
      } else {
        s2 = peg$FAILED;
      }
      if (s2 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c269(s1, s2);
        s0 = s1;
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  // utilities
  var _ = __webpack_require__(0);
  var ParserUtil = __webpack_require__(1).default;

  function mapByIndex(seq, index) {
    return _.map(seq, function (v) {
      return v[index];
    });
  };

  // nodes
  var Elements = {};
  _.forEach(__webpack_require__(3).default, function (ctor, name) {
    function wrapped(params) {
      ctor.apply(this, [Object.assign({}, { position: location() }, params)]);
    }
    wrapped.prototype = ctor.prototype;
    Elements[name] = wrapped;
  });

  var Text = Elements.Text;

  // variables
  var currentIndentSize = 0;
  var indentIgnoreLine = null;
  var nextIndentSize = null;

  var markupEndString = null;
  var attributesIndentList = [];

  var literalBlockQuoting = null;

  var enumeratedListState = function () {
    var nextEnumeratorType = null;
    var enumeratorStack = [];
    var currentEnumerator = null;

    return {
      begin: function begin() {
        enumeratorStack.push(currentEnumerator);
        currentEnumerator = null;
        nextEnumeratorType = null;
      },
      end: function end() {
        currentEnumerator = enumeratorStack.pop();
        if (!_.isNull(currentEnumerator)) {
          nextEnumeratorType = currentEnumerator.sequence.type;
        }
      },
      set: function set(e) {
        currentEnumerator = e;
        nextEnumeratorType = currentEnumerator.sequence.type;
      },
      isNext: function isNext(e) {
        return _.isNull(currentEnumerator) || currentEnumerator.isNext(e);
      },
      isNextType: function isNextType(type) {
        return _.isNull(currentEnumerator) || nextEnumeratorType === type;
      }
    };
  }();

  var indentState = function () {
    var indentSizeStack = [];

    return {
      push: function push(indentSize) {
        indentSizeStack.push(currentIndentSize);
        currentIndentSize = indentSize;
      },
      pop: function pop() {
        currentIndentSize = indentSizeStack.pop();
      },
      ignore: function ignore(line) {
        indentIgnoreLine = line;
      },

      lastIndentDiff: function lastIndentDiff() {
        if (indentSizeStack.length === 0) {
          return currentIndentSize;
        }
        return currentIndentSize - indentSizeStack[indentSizeStack.length - 1];
      }
    };
  }();

  var lineBlockState = function () {
    var currentIndentSize = -1;
    var indentSizeStack = [];

    return {
      current: function current() {
        return currentIndentSize;
      },
      push: function push(indentSize) {
        indentSizeStack.push(currentIndentSize);
        currentIndentSize = indentSize;
      },
      pop: function pop() {
        currentIndentSize = indentSizeStack.pop();
      },
      diff: function diff() {
        if (indentSizeStack.length === 0) {
          return currentIndentSize;
        }
        return currentIndentSize - indentSizeStack[indentSizeStack.length - 1];
      }
    };
  }();

  var bulletListState = function () {
    var stack = [];
    var current = null;
    return {
      pushBullet: function pushBullet(bullet) {
        stack.push(current);
        current = bullet;
      },
      popBullet: function popBullet() {
        current = stack.pop();
      },
      isSameBullet: function isSameBullet(bullet) {
        return current === bullet;
      }
    };
  }();

  var sectionState = function () {
    var stack = [];
    var currentIndex = -1;
    return {
      isSubSection: function isSubSection(c, overline) {
        if (currentIndex === stack.length - 1) {
          for (var i = 0, len = stack.length; i < len; i++) {
            if (stack[i].c === c && stack[i].overline === overline) {
              return false;
            }
          }
          return true;
        }
        var next = stack[currentIndex + 1];
        return next.c === c && next.overline === overline;
      },
      setNextSection: function setNextSection(c, overline) {
        for (var i = 0, len = stack.length; i < len; i++) {
          if (stack[i].c === c && stack[i].overline === overline) {
            currentIndex = i;
            return;
          }
        }
        stack.push({ c: c, overline: overline });
        currentIndex = stack.length - 1;
      },
      popSection: function popSection() {
        --currentIndex;
      },
      depth: function depth() {
        return currentIndex + 1;
      }
    };
  }();

  peg$result = peg$startRuleFunction();

  if (peg$result !== peg$FAILED && peg$currPos === input.length) {
    return peg$result;
  } else {
    if (peg$result !== peg$FAILED && peg$currPos < input.length) {
      peg$fail(peg$endExpectation());
    }

    throw peg$buildStructuredError(peg$maxFailExpected, peg$maxFailPos < input.length ? input.charAt(peg$maxFailPos) : null, peg$maxFailPos < input.length ? peg$computeLocation(peg$maxFailPos, peg$maxFailPos + 1) : peg$computeLocation(peg$maxFailPos, peg$maxFailPos));
  }
}

module.exports = {
  SyntaxError: peg$SyntaxError,
  parse: peg$parse
};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var values = ['text', 'unknown_line'];

var parents = [
// Document Structure
'document', 'section', 'title', 'transition',
// Body Elements
'paragraph', 'bullet_list', 'list_item', 'enumerated_list', 'definition_list', 'definition_list_item', 'term', 'classifier', 'definition', 'field_list', 'field', 'field_name', 'field_body', 'docinfo', 'author', 'authors', 'organization', 'contact', 'version', 'status', 'date', 'copyright', 'field', 'topic', 'option_list', 'option_list_item', 'option_group', 'option', 'option_string', 'option_argument', 'description', 'literal_block', 'line_block', 'line', 'block_quote', 'attribution', 'doctest_block', 'table', 'tgroup', 'colspec', 'thead', 'tbody', 'row', 'entry',
// Explicit Markup Blocks
'footnote', 'label', 'citation', 'target', 'substitution_definition', 'comment',
// Inline Markups
'emphasis', 'strong', 'literal', 'reference', 'target', 'footnote_reference', 'citation_reference', 'substitution_reference', 'reference',
// Error Handling
'system_message', 'problematic', 'unknown',
// restructured Original Elements
'directive', 'interpreted_text'];

var Type = {
  parentTypes: {},
  valueTypes: {}
};

function camelize(str) {
  return str.replace(/_([a-z])/g, function (_, w) {
    return w.toUpperCase();
  });
}

var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
  for (var _iterator = values[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
    var type = _step.value;

    Type.valueTypes[camelize(type)] = type;
  }
} catch (err) {
  _didIteratorError = true;
  _iteratorError = err;
} finally {
  try {
    if (!_iteratorNormalCompletion && _iterator.return) {
      _iterator.return();
    }
  } finally {
    if (_didIteratorError) {
      throw _iteratorError;
    }
  }
}

var _iteratorNormalCompletion2 = true;
var _didIteratorError2 = false;
var _iteratorError2 = undefined;

try {
  for (var _iterator2 = parents[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
    var _type = _step2.value;

    Type.parentTypes[camelize(_type)] = _type;
  }
} catch (err) {
  _didIteratorError2 = true;
  _iteratorError2 = err;
} finally {
  try {
    if (!_iteratorNormalCompletion2 && _iterator2.return) {
      _iterator2.return();
    }
  } finally {
    if (_didIteratorError2) {
      throw _iteratorError2;
    }
  }
}

exports.default = Type;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _RST = __webpack_require__(2);

var _RST2 = _interopRequireDefault(_RST);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = _RST2.default;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// LICENSE : MIT

var ObjectAssign = __webpack_require__(7);
module.exports = function map(ast, mapFn) {
    return (function preorder(node, index, parent) {
        const newNode = ObjectAssign({}, mapFn(node, index, parent));
        if (node.children) {
            newNode.children = node.children.map(function (child, index) {
                return preorder(child, index, node);
            });
        }
        return newNode;
    }(ast, null, null));
};

/***/ })
/******/ ]);
});