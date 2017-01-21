"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

exports.default = calc;

var _reduceCssCalc = require("reduce-css-calc");

var _reduceCssCalc2 = _interopRequireDefault(_reduceCssCalc);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CONTAINS_CALC = /\bcalc\([\s\S]*?\)/;
function calc(_ref) {
  var precision = _ref.precision;

  return function (_ref2) {
    var selector = _ref2.selector,
        style = _ref2.style;

    Object.entries(style).map(function (_ref3) {
      var _ref4 = _slicedToArray(_ref3, 2),
          key = _ref4[0],
          val = _ref4[1];

      if (CONTAINS_CALC.test(val)) {
        style[key] = (0, _reduceCssCalc2.default)(val, precision);
      }
    });
    return { selector: selector, style: style };
  };
}
