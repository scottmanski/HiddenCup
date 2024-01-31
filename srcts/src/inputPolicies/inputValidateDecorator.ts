import "core-js/modules/es.symbol.to-primitive.js";
import "core-js/modules/es.date.to-primitive.js";
import "core-js/modules/es.symbol.js";
import "core-js/modules/es.symbol.description.js";
import "core-js/modules/es.object.to-string.js";
import "core-js/modules/es.number.constructor.js";
import "core-js/modules/es.object.define-property.js";
import "core-js/modules/es.object.keys.js";
import "core-js/modules/es.array.filter.js";
import "core-js/modules/es.object.get-own-property-descriptor.js";
import "core-js/modules/es.array.for-each.js";
import "core-js/modules/web.dom-collections.for-each.js";
import "core-js/modules/es.object.get-own-property-descriptors.js";
import "core-js/modules/es.object.define-properties.js";
import "core-js/modules/es.symbol.iterator.js";
import "core-js/modules/es.array.iterator.js";
import "core-js/modules/es.string.iterator.js";
import "core-js/modules/web.dom-collections.iterator.js";
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
// Merge opts with defaults, and return a new object.
function addDefaultInputOpts(opts) {
  var newOpts = _objectSpread({
    priority: "immediate"
  }, opts);
  switch (newOpts.priority) {
    case "deferred":
    case "immediate":
    case "event":
      break;
    default:
      throw new Error("Unexpected input value mode: '" + newOpts.priority + "'");
  }
  return newOpts;
}
var InputValidateDecorator = /*#__PURE__*/function () {
  function InputValidateDecorator(target) {
    _classCallCheck(this, InputValidateDecorator);
    _defineProperty(this, "target", void 0);
    this.target = target;
  }
  _createClass(InputValidateDecorator, [{
    key: "setInput",
    value: function setInput(nameType, value) {
      var opts = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      if (!nameType) throw "Can't set input with empty name.";
      var newOpts = addDefaultInputOpts(opts);
      this.target.setInput(nameType, value, newOpts);
    }
  }]);
  return InputValidateDecorator;
}();
export { InputValidateDecorator, addDefaultInputOpts };