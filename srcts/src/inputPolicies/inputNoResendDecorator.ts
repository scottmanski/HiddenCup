function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
import "core-js/modules/es.function.name.js";
import "core-js/modules/es.json.stringify.js";
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
import { hasDefinedProperty } from "../utils";
import { splitInputNameType } from "./splitInputNameType";
var InputNoResendDecorator = /*#__PURE__*/function () {
  function InputNoResendDecorator(target) {
    var initialValues = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    _classCallCheck(this, InputNoResendDecorator);
    _defineProperty(this, "target", void 0);
    _defineProperty(this, "lastSentValues", {});
    this.target = target;
    this.reset(initialValues);
  }
  _createClass(InputNoResendDecorator, [{
    key: "setInput",
    value: function setInput(nameType, value, opts) {
      var _splitInputNameType = splitInputNameType(nameType),
        inputName = _splitInputNameType.name,
        inputType = _splitInputNameType.inputType;
      var jsonValue = JSON.stringify(value);
      if (opts.priority !== "event" && this.lastSentValues[inputName] && this.lastSentValues[inputName].jsonValue === jsonValue && this.lastSentValues[inputName].inputType === inputType) {
        return;
      }
      this.lastSentValues[inputName] = {
        jsonValue: jsonValue,
        inputType: inputType
      };
      this.target.setInput(nameType, value, opts);
    }
  }, {
    key: "reset",
    value: function reset() {
      var values = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      // Given an object with flat name-value format:
      //   { x: "abc", "y.shiny.number": 123 }
      // Create an object in cache format and save it:
      //   { x: { jsonValue: '"abc"', inputType: "" },
      //     y: { jsonValue: "123", inputType: "shiny.number" } }
      var cacheValues = {};
      for (var inputName in values) {
        if (hasDefinedProperty(values, inputName)) {
          var _splitInputNameType2 = splitInputNameType(inputName),
            name = _splitInputNameType2.name,
            inputType = _splitInputNameType2.inputType;
          cacheValues[name] = {
            jsonValue: JSON.stringify(values[inputName]),
            inputType: inputType
          };
        }
      }
      this.lastSentValues = cacheValues;
    }
  }, {
    key: "forget",
    value: function forget(name) {
      delete this.lastSentValues[name];
    }
  }]);
  return InputNoResendDecorator;
}();
export { InputNoResendDecorator };