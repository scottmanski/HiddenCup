function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }
function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
import "core-js/modules/es.array.find.js";
import "core-js/modules/es.object.to-string.js";
import "core-js/modules/es.function.name.js";
import "core-js/modules/es.object.set-prototype-of.js";
import "core-js/modules/es.object.get-prototype-of.js";
import "core-js/modules/es.reflect.to-string-tag.js";
import "core-js/modules/es.reflect.construct.js";
import "core-js/modules/es.object.define-property.js";
import "core-js/modules/es.reflect.get.js";
import "core-js/modules/es.object.get-own-property-descriptor.js";
import "core-js/modules/es.symbol.to-primitive.js";
import "core-js/modules/es.date.to-primitive.js";
import "core-js/modules/es.symbol.js";
import "core-js/modules/es.symbol.description.js";
import "core-js/modules/es.number.constructor.js";
import "core-js/modules/es.symbol.iterator.js";
import "core-js/modules/es.array.iterator.js";
import "core-js/modules/es.string.iterator.js";
import "core-js/modules/web.dom-collections.iterator.js";
import $ from "jquery";
import { $escape, updateLabel, hasDefinedProperty } from "../../utils";
import { InputBinding } from "./inputBinding";

// interface TextHTMLElement extends NameValueHTMLElement {
//   placeholder: any;
// }

function getLabelNode(el) {
  return $(el).parent().find('label[for="' + $escape(el.id) + '"]');
}
var TextInputBindingBase = /*#__PURE__*/function (_InputBinding) {
  _inherits(TextInputBindingBase, _InputBinding);
  var _super = _createSuper(TextInputBindingBase);
  function TextInputBindingBase() {
    _classCallCheck(this, TextInputBindingBase);
    return _super.apply(this, arguments);
  }
  _createClass(TextInputBindingBase, [{
    key: "find",
    value: function find(scope) {
      var $inputs = $(scope).find('input[type="text"], input[type="search"], input[type="url"], input[type="email"]');
      // selectize.js 0.12.4 inserts a hidden text input with an
      // id that ends in '-selectized'. The .not() selector below
      // is to prevent textInputBinding from accidentally picking up
      // this hidden element as a shiny input (#2396)
      //
      // Inputs also now have .shiny-input-text class
      return $inputs.not('input[type="text"][id$="-selectized"]');
    }
  }, {
    key: "getId",
    value: function getId(el) {
      return _get(_getPrototypeOf(TextInputBindingBase.prototype), "getId", this).call(this, el) || el.name;
      // return InputBinding.prototype.getId.call(this, el) || el.name;
    }
  }, {
    key: "getValue",
    value: function getValue(el) {
      throw "not implemented";
      el;
    }
  }, {
    key: "setValue",
    value: function setValue(el, value) {
      throw "not implemented";
      el;
      value;
    }
  }, {
    key: "subscribe",
    value: function subscribe(el, callback) {
      $(el).on("keyup.textInputBinding input.textInputBinding",
      // event: Event
      function () {
        callback(true);
      });
      $(el).on("change.textInputBinding",
      // event: Event
      function () {
        callback(false);
      });
    }
  }, {
    key: "unsubscribe",
    value: function unsubscribe(el) {
      $(el).off(".textInputBinding");
    }
  }, {
    key: "receiveMessage",
    value: function receiveMessage(el, data) {
      throw "not implemented";
      el;
      data;
    }
  }, {
    key: "getState",
    value: function getState(el) {
      throw "not implemented";
      el;
    }
  }, {
    key: "getRatePolicy",
    value: function getRatePolicy(el) {
      return {
        policy: "debounce",
        delay: 250
      };
      el;
    }
  }]);
  return TextInputBindingBase;
}(InputBinding);
var TextInputBinding = /*#__PURE__*/function (_TextInputBindingBase) {
  _inherits(TextInputBinding, _TextInputBindingBase);
  var _super2 = _createSuper(TextInputBinding);
  function TextInputBinding() {
    _classCallCheck(this, TextInputBinding);
    return _super2.apply(this, arguments);
  }
  _createClass(TextInputBinding, [{
    key: "setValue",
    value: function setValue(el, value) {
      el.value = value;
    }
  }, {
    key: "getValue",
    value: function getValue(el) {
      return el.value;
    }
  }, {
    key: "getState",
    value: function getState(el) {
      return {
        label: getLabelNode(el).text(),
        value: el.value,
        placeholder: el.placeholder
      };
    }
  }, {
    key: "receiveMessage",
    value: function receiveMessage(el, data) {
      if (hasDefinedProperty(data, "value")) this.setValue(el, data.value);
      updateLabel(data.label, getLabelNode(el));
      if (hasDefinedProperty(data, "placeholder")) el.placeholder = data.placeholder;
      $(el).trigger("change");
    }
  }]);
  return TextInputBinding;
}(TextInputBindingBase);
export { TextInputBinding, TextInputBindingBase };