function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
import "core-js/modules/es.array.find.js";
import "core-js/modules/es.object.to-string.js";
import "core-js/modules/es.regexp.exec.js";
import "core-js/modules/es.regexp.test.js";
import "core-js/modules/es.number.constructor.js";
import "core-js/modules/es.object.set-prototype-of.js";
import "core-js/modules/es.object.get-prototype-of.js";
import "core-js/modules/es.reflect.to-string-tag.js";
import "core-js/modules/es.reflect.construct.js";
import "core-js/modules/es.object.define-property.js";
import "core-js/modules/es.symbol.to-primitive.js";
import "core-js/modules/es.date.to-primitive.js";
import "core-js/modules/es.symbol.js";
import "core-js/modules/es.symbol.description.js";
import "core-js/modules/es.symbol.iterator.js";
import "core-js/modules/es.array.iterator.js";
import "core-js/modules/es.string.iterator.js";
import "core-js/modules/web.dom-collections.iterator.js";
import $ from "jquery";
import { $escape, hasDefinedProperty, updateLabel } from "../../utils";
import { TextInputBindingBase } from "./text";
function getLabelNode(el) {
  return $(el).parent().find('label[for="' + $escape(el.id) + '"]');
}
var NumberInputBinding = /*#__PURE__*/function (_TextInputBindingBase) {
  _inherits(NumberInputBinding, _TextInputBindingBase);
  var _super = _createSuper(NumberInputBinding);
  function NumberInputBinding() {
    _classCallCheck(this, NumberInputBinding);
    return _super.apply(this, arguments);
  }
  _createClass(NumberInputBinding, [{
    key: "find",
    value: function find(scope) {
      // Inputs also have .shiny-input-number class
      return $(scope).find('input[type="number"]');
    }
  }, {
    key: "getValue",
    value: function getValue(el) {
      var numberVal = $(el).val();
      if (typeof numberVal == "string") {
        if (/^\s*$/.test(numberVal))
          // Return null if all whitespace
          return null;
      }

      // If valid Javascript number string, coerce to number
      var numberValue = Number(numberVal);
      if (!isNaN(numberValue)) {
        return numberValue;
      }
      return numberVal; // If other string like "1e6", send it unchanged
    }
  }, {
    key: "setValue",
    value: function setValue(el, value) {
      el.value = "" + value;
    }
  }, {
    key: "getType",
    value: function getType(el) {
      return "shiny.number";
      el;
    }
  }, {
    key: "receiveMessage",
    value: function receiveMessage(el, data) {
      var _data$value, _data$min, _data$max, _data$step;
      // Setting values to `""` will remove the attribute value from the DOM element.
      // The attr key will still remain, but there is not value... ex: `<input id="foo" type="number" min max/>`
      if (hasDefinedProperty(data, "value")) el.value = (_data$value = data.value) !== null && _data$value !== void 0 ? _data$value : "";
      if (hasDefinedProperty(data, "min")) el.min = (_data$min = data.min) !== null && _data$min !== void 0 ? _data$min : "";
      if (hasDefinedProperty(data, "max")) el.max = (_data$max = data.max) !== null && _data$max !== void 0 ? _data$max : "";
      if (hasDefinedProperty(data, "step")) el.step = (_data$step = data.step) !== null && _data$step !== void 0 ? _data$step : "";
      updateLabel(data.label, getLabelNode(el));
      $(el).trigger("change");
    }
  }, {
    key: "getState",
    value: function getState(el) {
      return {
        label: getLabelNode(el).text(),
        value: this.getValue(el),
        min: Number(el.min),
        max: Number(el.max),
        step: Number(el.step)
      };
    }
  }]);
  return NumberInputBinding;
}(TextInputBindingBase);
export { NumberInputBinding };