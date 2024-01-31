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
import { mergeSort } from "../utils";
var BindingRegistry = /*#__PURE__*/function () {
  function BindingRegistry() {
    _classCallCheck(this, BindingRegistry);
    _defineProperty(this, "name", void 0);
    _defineProperty(this, "bindings", []);
    _defineProperty(this, "bindingNames", {});
  }
  _createClass(BindingRegistry, [{
    key: "register",
    value: function register(binding, bindingName) {
      var priority = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
      var bindingObj = {
        binding: binding,
        priority: priority
      };
      this.bindings.unshift(bindingObj);
      if (bindingName) {
        this.bindingNames[bindingName] = bindingObj;
        binding.name = bindingName;
      }
    }
  }, {
    key: "setPriority",
    value: function setPriority(bindingName, priority) {
      var bindingObj = this.bindingNames[bindingName];
      if (!bindingObj) throw "Tried to set priority on unknown binding " + bindingName;
      bindingObj.priority = priority || 0;
    }
  }, {
    key: "getPriority",
    value: function getPriority(bindingName) {
      var bindingObj = this.bindingNames[bindingName];
      if (!bindingObj) return false;
      return bindingObj.priority;
    }
  }, {
    key: "getBindings",
    value: function getBindings() {
      // Sort the bindings. The ones with higher priority are consulted
      // first; ties are broken by most-recently-registered.
      return mergeSort(this.bindings, function (a, b) {
        return b.priority - a.priority;
      });
    }
  }]);
  return BindingRegistry;
}();
export { BindingRegistry };