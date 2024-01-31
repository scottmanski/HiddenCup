function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
import "core-js/modules/es.function.name.js";
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
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
import { Debouncer, Invoker, Throttler } from "../time";
import { splitInputNameType } from "./splitInputNameType";
var InputRateDecorator = /*#__PURE__*/function () {
  function InputRateDecorator(target) {
    _classCallCheck(this, InputRateDecorator);
    _defineProperty(this, "target", void 0);
    _defineProperty(this, "inputRatePolicies", {});
    this.target = target;
  }

  // Note that the first argument of setInput() and setRatePolicy()
  // are passed both the input name (i.e., inputId) and type.
  // https://github.com/rstudio/shiny/blob/67d3a/srcjs/init_shiny.js#L111-L126
  // However, $ensureInit() and $doSetInput() are meant to be passed just
  // the input name (i.e., inputId), which is why we distinguish between
  // nameType and name.
  _createClass(InputRateDecorator, [{
    key: "setInput",
    value: function setInput(nameType, value, opts) {
      var _splitInputNameType = splitInputNameType(nameType),
        inputName = _splitInputNameType.name;
      this._ensureInit(inputName);
      if (opts.priority !== "deferred") this.inputRatePolicies[inputName].immediateCall(nameType, value, opts);else this.inputRatePolicies[inputName].normalCall(nameType, value, opts);
    }
  }, {
    key: "setRatePolicy",
    value: function setRatePolicy(nameType, mode, millis) {
      var _splitInputNameType2 = splitInputNameType(nameType),
        inputName = _splitInputNameType2.name;
      if (mode === "direct") {
        this.inputRatePolicies[inputName] = new Invoker(this, this._doSetInput);
      } else if (mode === "debounce") {
        this.inputRatePolicies[inputName] = new Debouncer(this, this._doSetInput, millis);
      } else if (mode === "throttle") {
        this.inputRatePolicies[inputName] = new Throttler(this, this._doSetInput, millis);
      }
    }
  }, {
    key: "_ensureInit",
    value: function _ensureInit(name) {
      if (!(name in this.inputRatePolicies)) this.setRatePolicy(name, "direct");
    }
  }, {
    key: "_doSetInput",
    value: function _doSetInput(nameType, value, opts) {
      this.target.setInput(nameType, value, opts);
    }
  }]);
  return InputRateDecorator;
}();
export { InputRateDecorator };