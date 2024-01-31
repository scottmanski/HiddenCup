import "core-js/modules/es.symbol.to-primitive.js";
import "core-js/modules/es.date.to-primitive.js";
import "core-js/modules/es.symbol.js";
import "core-js/modules/es.symbol.description.js";
import "core-js/modules/es.object.to-string.js";
import "core-js/modules/es.number.constructor.js";
import "core-js/modules/es.object.define-property.js";
import "core-js/modules/es.symbol.iterator.js";
import "core-js/modules/es.array.iterator.js";
import "core-js/modules/es.string.iterator.js";
import "core-js/modules/web.dom-collections.iterator.js";
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var Debouncer = /*#__PURE__*/function () {
  function Debouncer(target, func, delayMs) {
    _classCallCheck(this, Debouncer);
    _defineProperty(this, "target", void 0);
    _defineProperty(this, "func", void 0);
    _defineProperty(this, "delayMs", void 0);
    _defineProperty(this, "timerId", void 0);
    _defineProperty(this, "args", void 0);
    this.target = target;
    this.func = func;
    this.delayMs = delayMs;
    this.timerId = null;
    this.args = null;
  }
  _createClass(Debouncer, [{
    key: "normalCall",
    value: function normalCall() {
      var _this = this;
      this.$clearTimer();
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      this.args = args;
      this.timerId = setTimeout(function () {
        // IE8 doesn't reliably clear timeout, so this additional
        // check is needed
        if (_this.timerId === null) return;
        _this.$clearTimer();
        _this.$invoke();
      }, this.delayMs);
    }
  }, {
    key: "immediateCall",
    value: function immediateCall() {
      this.$clearTimer();
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }
      this.args = args;
      this.$invoke();
    }
  }, {
    key: "isPending",
    value: function isPending() {
      return this.timerId !== null;
    }
  }, {
    key: "$clearTimer",
    value: function $clearTimer() {
      if (this.timerId !== null) {
        clearTimeout(this.timerId);
        this.timerId = null;
      }
    }
  }, {
    key: "$invoke",
    value: function $invoke() {
      if (this.args && this.args.length > 0) {
        this.func.apply(this.target, this.args);
      } else {
        this.func.apply(this.target);
      }
      this.args = null;
    }
  }]);
  return Debouncer;
}(); // Returns a debounced version of the given function.
// Debouncing means that when the function is invoked,
// there is a delay of `threshold` milliseconds before
// it is actually executed, and if the function is
// invoked again before that threshold has elapsed then
// the clock starts over.
//
// For example, if a function is debounced with a
// threshold of 1000ms, then calling it 17 times at
// 900ms intervals will result in a single execution
// of the underlying function, 1000ms after the 17th
// call.
function debounce(threshold, func) {
  var timerId = null;

  // Do not alter `function()` into an arrow function.
  // The `this` context needs to be dynamically bound
  return function thisFunc() {
    for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      args[_key3] = arguments[_key3];
    }
    if (timerId !== null) {
      clearTimeout(timerId);
      timerId = null;
    }
    timerId = setTimeout(function () {
      // IE8 doesn't reliably clear timeout, so this additional
      // check is needed
      if (timerId === null) return;
      timerId = null;
      // Applying on `thisFunc` passes through the `this` context
      func.apply(thisFunc, args);
    }, threshold);
  };
}
export { Debouncer, debounce };